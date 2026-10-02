const map=L.map('map').setView([51.0504,13.7373],13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap contributors'}).addTo(map);

const STORAGE_KEY='travel-v1-state';
const state=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null')||{postcode:'01067',city:'Dresden',totalKm:0,sequence:1,route:null,routeStartedAt:null,routeKm:0,nextPostcode:'01069',nextCity:'Dresden'};
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}
const car=L.circleMarker([51.0504,13.7373],{radius:9}).addTo(map).bindPopup('<b>01067 Dresden</b><br>Start').openPopup();
let routeLayer=null;
let routeLatLngs=[];
let animationFrame=null;

function setStatus(text,busy=false){
  document.getElementById('statusText').textContent=text;
  document.getElementById('statusDot').style.background=busy?'#f59e0b':'#22c55e';
}
function setInfo(html){document.getElementById('info').innerHTML=html}
function updatePanel(){document.getElementById('postcode').textContent=state.postcode;document.getElementById('place').textContent=state.city;document.getElementById('totalKm').textContent=state.totalKm.toFixed(1);document.getElementById('sequence').textContent=state.sequence}
function formatTime(minutes){if(minutes<1)return Math.max(1,Math.round(minutes*60))+' s';if(minutes<60)return minutes.toFixed(1)+' min';const h=Math.floor(minutes/60),m=Math.round(minutes%60);return h+' h '+m+' min'}
function haversine(a,b){const R=6371,dLat=(b[0]-a[0])*Math.PI/180,dLon=(b[1]-a[1])*Math.PI/180;const x=Math.sin(dLat/2)**2+Math.cos(a[0]*Math.PI/180)*Math.cos(b[0]*Math.PI/180)*Math.sin(dLon/2)**2;return 2*R*Math.asin(Math.sqrt(x))}
async function geocode(postcode){
  const url='https://nominatim.openstreetmap.org/search?format=jsonv2&country=Germany&postalcode='+encodeURIComponent(postcode)+'&limit=1';
  const r=await fetch(url,{headers:{'Accept-Language':'de'}});
  if(!r.ok)throw new Error('Geokódování selhalo');
  const data=await r.json(); if(!data[0])throw new Error('PSČ nebylo nalezeno');
  return {point:[Number(data[0].lat),Number(data[0].lon)],name:data[0].display_name};
}
async function route(from,to){
  const url='https://router.project-osrm.org/route/v1/driving/'+from[1]+','+from[0]+';'+to[1]+','+to[0]+'?overview=full&geometries=geojson';
  const r=await fetch(url); if(!r.ok)throw new Error('Routing selhal');
  const data=await r.json(); if(data.code!=='Ok'||!data.routes?.[0])throw new Error('Trasa nebyla nalezena');
  return data.routes[0];
}

function drawRoute(){if(!state.route)return;if(routeLayer)map.removeLayer(routeLayer);routeLayer=L.geoJSON(state.route.geometry,{style:{weight:6,opacity:.85}}).addTo(map);routeLatLngs=state.route.geometry.coordinates.map(([lon,lat])=>[lat,lon])}
function distanceAlong(points){const d=[0];for(let i=1;i<points.length;i++)d.push(d[i-1]+haversine(points[i-1],points[i]));return d}
function positionAtKm(targetKm,cumulative){if(targetKm<=0)return routeLatLngs[0];if(targetKm>=cumulative[cumulative.length-1])return routeLatLngs[routeLatLngs.length-1];for(let i=1;i<cumulative.length;i++){if(cumulative[i]>=targetKm){const seg=cumulative[i]-cumulative[i-1],t=seg?(targetKm-cumulative[i-1])/seg:0;return [routeLatLngs[i-1][0]+(routeLatLngs[i][0]-routeLatLngs[i-1][0])*t,routeLatLngs[i-1][1]+(routeLatLngs[i][1]-routeLatLngs[i-1][1])*t]}}return routeLatLngs[routeLatLngs.length-1]}
function startAnimation(){if(!state.route||!state.routeStartedAt)return;drawRoute();const cumulative=distanceAlong(routeLatLngs),routeKm=state.routeKm,durationMs=routeKm/80*3600000,started=state.routeStartedAt;function tick(){const elapsed=Math.max(0,Date.now()-started),progress=Math.min(1,elapsed/durationMs),travelledKm=routeKm*progress,remaining=routeKm-travelledKm;car.setLatLng(positionAtKm(travelledKm,cumulative));setStatus(progress<1?'Na cestě — 80 km/h':'Dorazili jsme');if(progress<1){setInfo('<strong>Na cestě do '+state.nextPostcode+'</strong><p>Ujeto: '+travelledKm.toFixed(1)+' km z '+routeKm.toFixed(1)+' km.<br>Zbývá: '+remaining.toFixed(1)+' km · '+formatTime(remaining/80*60)+'.</p>');animationFrame=requestAnimationFrame(tick)}else{state.postcode=state.nextPostcode;state.city=state.nextCity;state.sequence+=1;state.totalKm+=routeKm;state.route=null;state.routeStartedAt=null;state.routeKm=0;save();updatePanel();setInfo('<strong>🎉 Dorazili jsme do '+state.postcode+' '+state.city+'</strong><p>Úsek: '+routeKm.toFixed(1)+' km. Celkem: '+state.totalKm.toFixed(1)+' km.</p>');document.getElementById('routeBtn').textContent='Připravit další úsek'}}tick()}
document.getElementById('routeBtn').addEventListener('click',async()=>{
  const btn=document.getElementById('routeBtn');if(state.routeStartedAt)return;btn.disabled=true;setStatus('Počítám trasu…',true);
  try{
    // 01069 is the next demo stop after 01067 in the Dresden sequence.
    const from=[car.getLatLng().lat,car.getLatLng().lng];
    const next=await geocode(state.nextPostcode);
    const result=await route(from,next.point);
    const km=result.distance/1000;
    if(routeLayer)map.removeLayer(routeLayer);
    routeLayer=L.geoJSON(result.geometry,{style:{weight:6,opacity:.85}}).addTo(map);
    map.fitBounds(routeLayer.getBounds(),{padding:[30,30]});
    state.route=result;state.routeKm=km;state.routeStartedAt=Date.now();save();drawRoute();map.fitBounds(routeLayer.getBounds(),{padding:[30,30]});btn.textContent='Cesta probíhá…';setInfo('<strong>🚗 Odjezd do '+state.nextPostcode+'</strong><p>Trasa: '+km.toFixed(1)+' km.<br>Čas při 80 km/h: '+formatTime(km/80*60)+'.</p>');startAnimation();
  }catch(e){setInfo('<strong>Chyba</strong><p>'+e.message+'</p>');setStatus('Chyba');}
  finally{btn.disabled=false}
});