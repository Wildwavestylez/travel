const map=L.map('map').setView([51.0504,13.7373],13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap contributors'}).addTo(map);

const STORE='travel-v3-state';
const state=JSON.parse(localStorage.getItem(STORE)||'null')||{index:0,totalKm:0,route:null,startedAt:null,routeKm:0};
let sequence=[],currentData=null,nextData=null,routeLayer=null,routeLatLngs=[];

const pinIcon=L.divIcon({className:'travel-pin-wrap',html:'<div class="travel-pin"></div>',iconSize:[18,22],iconAnchor:[9,22]});
const stopMarkers=L.markerClusterGroup({
  maxClusterRadius:70,
  showCoverageOnHover:false,
  spiderfyOnMaxZoom:true,
  chunkedLoading:true,
  iconCreateFunction:cluster=>L.divIcon({
    className:'travel-cluster',
    html:'<span>'+cluster.getChildCount()+'</span>',
    iconSize:[34,34]
  })
}).addTo(map);

const car=L.circleMarker([51.0504,13.7373],{radius:9}).addTo(map);
const save=()=>localStorage.setItem(STORE,JSON.stringify(state));
const setStatus=(t,busy=false)=>{document.getElementById('statusText').textContent=t;document.getElementById('statusDot').style.background=busy?'#f59e0b':'#22c55e'};
const setInfo=h=>document.getElementById('info').innerHTML=h;
const updatePanel=()=>{
  if(!currentData)return;
  document.getElementById('postcode').textContent=currentData.postcode;
  document.getElementById('place').textContent=currentData.city+(currentData.district?' · '+currentData.district:'');
  document.getElementById('totalKm').textContent=state.totalKm.toFixed(1);
  document.getElementById('sequence').textContent=state.index+1;
};
const fmt=m=>m<1?Math.max(1,Math.round(m*60))+' s':m<60?m.toFixed(1)+' min':Math.floor(m/60)+' h '+Math.round(m%60)+' min';
const hav=(a,b)=>{
  const R=6371,d1=(b[0]-a[0])*Math.PI/180,d2=(b[1]-a[1])*Math.PI/180;
  const x=Math.sin(d1/2)**2+Math.cos(a[0]*Math.PI/180)*Math.cos(b[0]*Math.PI/180)*Math.sin(d2/2)**2;
  return 2*R*Math.asin(Math.sqrt(x));
};
async function loadData(pc){
  const r=await fetch('./data/germany/'+pc+'.json');
  if(!r.ok)throw Error('Data pro PSČ '+pc+' není dostupná');
  return r.json();
}
function popupHtml(data){
  const facts=(data.facts||[]).map(x=>'<li>'+x+'</li>').join('');
  const photo=data.photo&&data.photo.url
    ? '<p>📷 <a href="'+data.photo.url+'" target="_blank" rel="noopener">Foto</a></p>'
    : '<p class="photo-placeholder">📷 Fotografie bude doplněna později.</p>';
  return '<div class="travel-popup-content">'+
    '<div class="travel-popup-title">📍 '+data.postcode+' · '+data.city+'</div>'+
    (data.district?'<div class="travel-popup-sub">'+data.district+'</div>':'')+
    '<div class="travel-popup-scroll">'+
      (data.county?'<div><b>Okres:</b> '+data.county+'</div>':'')+
      (data.state?'<div><b>Bundesland:</b> '+data.state+'</div>':'')+
      '<hr><b>'+data.representative_place+'</b>'+
      (facts?'<ul>'+facts+'</ul>':'')+photo+
    '</div></div>';
}
function markerPopup(data){return popupHtml(data);}
function popupOptions(){
  const mobile=window.innerWidth<=800;
  return {maxWidth:360,maxHeight:mobile?260:420,autoPan:!mobile,keepInView:!mobile};
}
function addStopMarker(data){
  if(!data?.representative_point||stopMarkers.getLayers().some(m=>m.options.stopPostcode===data.postcode))return;
  const marker=L.marker([data.representative_point.lat,data.representative_point.lon],{
    icon:pinIcon,title:data.postcode+' '+data.city,stopPostcode:data.postcode
  });
  marker.bindPopup(markerPopup(data),popupOptions());
  stopMarkers.addLayer(marker);
}
function draw(){
  if(!state.route)return;
  if(routeLayer)map.removeLayer(routeLayer);
  routeLayer=L.geoJSON(state.route.geometry,{style:{weight:6,opacity:.85}}).addTo(map);
  routeLatLngs=state.route.geometry.coordinates.map(([lon,lat])=>[lat,lon]);
}
function cumulative(){
  const d=[0];
  for(let i=1;i<routeLatLngs.length;i++)d.push(d[i-1]+hav(routeLatLngs[i-1],routeLatLngs[i]));
  return d;
}
function pos(k,d){
  if(k<=0)return routeLatLngs[0];
  if(k>=d[d.length-1])return routeLatLngs.at(-1);
  for(let i=1;i<d.length;i++)if(d[i]>=k){
    const t=(k-d[i-1])/(d[i]-d[i-1]||1);
    return[
      routeLatLngs[i-1][0]+(routeLatLngs[i][0]-routeLatLngs[i-1][0])*t,
      routeLatLngs[i-1][1]+(routeLatLngs[i][1]-routeLatLngs[i-1][1])*t
    ];
  }
  return routeLatLngs.at(-1);
}
function showArrival(){
  addStopMarker(currentData);
  const factHtml=markerPopup(currentData);
  L.popup({...popupOptions(),closeButton:true,autoClose:false,closeOnClick:false}).setLatLng([currentData.representative_point.lat,currentData.representative_point.lon])
    .setContent(factHtml).openOn(map);
  setInfo('<strong>📍 Dorazili jsme do '+currentData.postcode+'</strong><p><b>'+currentData.representative_place+'</b></p>'+
    (currentData.county?'<p><b>Okres:</b> '+currentData.county+'</p>':'')+
    (currentData.facts||[]).map(x=>'<p>• '+x+'</p>').join('')+
    '<p class="continue">🚗 Auto mezitím pokračuje na další PSČ…</p>');
}
function arrived(){
  state.index++;
  state.totalKm+=state.routeKm;
  state.route=null;
  state.startedAt=null;
  state.routeKm=0;
  save();

  currentData=nextData;
  nextData=null;
  updatePanel();
  car.setLatLng([currentData.access_point.lat,currentData.access_point.lon]);
  showArrival();

  const btn=document.getElementById('routeBtn');
  if(state.index<sequence.length-1){
    btn.disabled=true;
    btn.textContent='🚗 Auto pokračuje…';
    setStatus('Zastávka objevena — pokračujeme');
    setTimeout(()=>start(true),1200);
  }else{
    btn.disabled=true;
    btn.textContent='🏁 Aktuální sekvence dokončena';
    setStatus('Aktuální sekvence dokončena');
  }
}
function animate(){
  if(!state.route||!state.startedAt)return;
  draw();
  const d=cumulative(),dur=state.routeKm/80*3600000;
  function tick(){
    const p=Math.min(1,(Date.now()-state.startedAt)/dur),km=state.routeKm*p;
    car.setLatLng(pos(km,d));
    if(p<1){
      setStatus('Na cestě — 80 km/h',true);
      setInfo('<strong>🚗 Na cestě do '+nextData.postcode+'</strong><p>Ujeto '+km.toFixed(1)+' km z '+state.routeKm.toFixed(1)+' km.<br>Zbývá '+(state.routeKm-km).toFixed(1)+' km · '+fmt((state.routeKm-km)/80*60)+'.</p>');
      requestAnimationFrame(tick);
    }else arrived();
  }
  tick();
}
async function start(auto=false){
  if(state.index>=sequence.length-1||state.startedAt)return;
  const btn=document.getElementById('routeBtn');
  btn.disabled=true;
  setStatus('Připravuji trasu…',true);
  try{
    nextData=await loadData(sequence[state.index+1]);
    const from=[car.getLatLng().lat,car.getLatLng().lng];
    const to=[nextData.access_point.lat,nextData.access_point.lon];
    const r=await route(from,to);
    state.route=r;
    state.routeKm=r.distance/1000;
    state.startedAt=Date.now();
    save();
    draw();
    map.fitBounds(routeLayer.getBounds(),{padding:[30,30]});
    btn.textContent='🚗 Cesta probíhá…';
    animate();
  }catch(e){
    setInfo('<strong>Chyba</strong><p>'+e.message+'</p>');
    setStatus('Chyba');
    btn.disabled=false;
  }
}
async function route(from,to){
  const u='https://router.project-osrm.org/route/v1/driving/'+from[1]+','+from[0]+';'+to[1]+','+to[0]+'?overview=full&geometries=geojson';
  const r=await fetch(u);
  if(!r.ok)throw Error('Routing selhal');
  const d=await r.json();
  if(d.code!=='Ok'||!d.routes?.[0])throw Error('Trasa nebyla nalezena');
  return d.routes[0];
}
document.getElementById('routeBtn').addEventListener('click',()=>start(false));

(async()=>{
  try{
    const s=await fetch('./data/germany/sequence.json');
    if(!s.ok)throw Error('Produkční sekvence není dostupná');
    sequence=(await s.json()).sequence;
    currentData=await loadData(sequence[state.index]);
    car.setLatLng([currentData.access_point.lat,currentData.access_point.lon]);

    // Obnovení všech dosud objevených PSČ po refreshi.
    // Piny nejsou jen dočasná součást aktuálního běhu.
    const discovered=sequence.slice(0,state.index+1);
    const discoveredData=await Promise.all(discovered.map(loadData));
    discoveredData.forEach(addStopMarker);

    map.setView(
      [currentData.representative_point.lat,currentData.representative_point.lon],
      Math.max(map.getZoom(),13)
    );
    setTimeout(()=>map.invalidateSize(),100);
    updatePanel();

    if(state.route&&state.startedAt){
      nextData=await loadData(sequence[state.index+1]);
      animate();
    }else if(state.index>=sequence.length-1){
      setInfo('<strong>🏁 Hotovo</strong><p>Všechna aktuálně připravená PSČ byla dokončena.</p>');
      document.getElementById('routeBtn').disabled=true;
      document.getElementById('routeBtn').textContent='🏁 Aktuální sekvence dokončena';
      setStatus('Aktuální sekvence dokončena');
    }else{
      setInfo('<strong>👋 Vítej v TRAVEL</strong><p>Začínáme v historickém centru Drážďan, v PSČ <b>01067</b>.</p>'+
        '<p>Čeká nás cesta PSČ po PSČ. Na každé objevené zastávce zůstane na mapě malý pin s informacemi. Při odzoomování se piny automaticky seskupí do číselných clusterů.</p>'+
        '<p>📍 Pin zůstává na objeveném místě, auto ale pokračuje dál.</p>');
      setStatus('Připraven');
      car.bindPopup(
        '<div class="travel-popup-content">'+
        '<div class="travel-popup-title">👋 Vítej v TRAVEL</div>'+
        '<div class="travel-popup-sub">Historické centrum Drážďan · 01067</div>'+
        '<div class="travel-popup-scroll">'+
        '<p>Začínáme v historickém centru Drážďan.</p>'+
        '<p>Čeká nás cesta PSČ po PSČ. Na každé objevené zastávce zůstane na mapě pin s informacemi.</p>'+
        '<p>📍 Pin zůstává na objeveném místě, auto pokračuje dál.</p>'+
        '</div></div>',
        popupOptions()
      ).openPopup();
    }
  }catch(e){
    setStatus('Chyba');
    setInfo('<strong>Chyba načtení dat</strong><p>'+e.message+'</p>');
  }
})();
