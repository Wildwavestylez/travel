const map=L.map('map',{preferCanvas:false,zoomControl:true}).setView([51.0504,13.7373],13);
const osmLayer=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  maxZoom:19,
  minZoom:2,
  attribution:'© OpenStreetMap contributors',
  updateWhenIdle:false,
  keepBuffer:2
}).addTo(map);

// Leaflet needs an explicit size recalculation after responsive layout,
// mobile browser chrome changes, and GitHub Pages loading.
function refreshMapSize(){
  if(!map) return;
  requestAnimationFrame(()=>map.invalidateSize({pan:false,debounceMoveend:true}));
}
map.whenReady(refreshMapSize);
window.addEventListener('resize',refreshMapSize,{passive:true});
window.addEventListener('orientationchange',()=>setTimeout(refreshMapSize,250),{passive:true});
window.addEventListener('pageshow',()=>setTimeout(refreshMapSize,100),{passive:true});
setTimeout(refreshMapSize,100);
setTimeout(refreshMapSize,500);
setTimeout(refreshMapSize,1200);

const LANG_STORE='travel-language';
const LANGS=['cs','de','en','es','fr','it'];
const UI={
  cs:{ready:'Připraven',currentStop:'AKTUÁLNÍ ZASTÁVKA',speed:'Rychlost',totalKm:'Celkem km',order:'Pořadí',start:'🚗 Odstartovat cestu',traveling:'🚗 Cesta probíhá…',continue:'🚗 Auto pokračuje…',preparing:'Připravuji trasu…',onRoad:'Na cestě — 80 km/h',arrived:'Zastávka objevena — pokračujeme',done:'Aktuální sekvence dokončena',error:'Chyba',startTitle:'Startovní bod',welcome:'👋 Vítej v TRAVEL',welcomeText:'Začínáme v historickém centru Drážďan, v PSČ',help:'Objevená PSČ zůstávají na mapě jako malé piny. Při odzoomování se automaticky slučují do clusterů.',district:'Městská část',county:'Okres',state:'Bundesland',photoLater:'📷 Fotografie bude doplněna později.',photo:'📷 Foto',arrivedAt:'📍 Dorazili jsme do',place:'Místo',carContinues:'🚗 Auto mezitím pokračuje na další PSČ…',routeError:'Chyba',dataError:'Chyba načtení dat',allDone:'🏁 Hotovo',sequenceDone:'Všechna aktuálně připravená PSČ byla dokončena.'},
  de:{ready:'Bereit',currentStop:'AKTUELLER HALT',speed:'Geschwindigkeit',totalKm:'Gesamt km',order:'Reihenfolge',start:'🚗 Fahrt starten',traveling:'🚗 Fahrt läuft…',continue:'🚗 Auto fährt weiter…',preparing:'Route wird vorbereitet…',onRoad:'Unterwegs — 80 km/h',arrived:'Halt entdeckt — wir fahren weiter',done:'Aktuelle Sequenz abgeschlossen',error:'Fehler',startTitle:'Startpunkt',welcome:'👋 Willkommen bei TRAVEL',welcomeText:'Wir starten im historischen Zentrum von Dresden, PLZ',help:'Entdeckte PLZ bleiben als kleine Pins auf der Karte. Beim Herauszoomen werden sie automatisch gruppiert.',district:'Stadtteil',county:'Landkreis',state:'Bundesland',photoLater:'📷 Foto wird später ergänzt.',photo:'📷 Foto',arrivedAt:'📍 Wir sind angekommen bei',place:'Ort',carContinues:'🚗 Das Auto fährt inzwischen zur nächsten PLZ…',routeError:'Fehler',dataError:'Fehler beim Laden der Daten',allDone:'🏁 Fertig',sequenceDone:'Alle aktuell vorbereiteten PLZ wurden abgeschlossen.'},
  en:{ready:'Ready',currentStop:'CURRENT STOP',speed:'Speed',totalKm:'Total km',order:'Order',start:'🚗 Start journey',traveling:'🚗 Journey in progress…',continue:'🚗 Car continues…',preparing:'Preparing route…',onRoad:'On the road — 80 km/h',arrived:'Stop discovered — continuing',done:'Current sequence completed',error:'Error',startTitle:'Starting point',welcome:'👋 Welcome to TRAVEL',welcomeText:'We start in the historic centre of Dresden, postcode',help:'Discovered postcodes remain on the map as small pins. When zooming out, they are automatically grouped into clusters.',district:'District',county:'County',state:'State',photoLater:'📷 Photo will be added later.',photo:'📷 Photo',arrivedAt:'📍 We arrived at',place:'Place',carContinues:'🚗 The car is already continuing to the next postcode…',routeError:'Error',dataError:'Data loading error',allDone:'🏁 Done',sequenceDone:'All currently prepared postcodes have been completed.'},
  es:{ready:'Listo',currentStop:'PARADA ACTUAL',speed:'Velocidad',totalKm:'Km totales',order:'Orden',start:'🚗 Iniciar viaje',traveling:'🚗 Viaje en curso…',continue:'🚗 El coche continúa…',preparing:'Preparando ruta…',onRoad:'En camino — 80 km/h',arrived:'Parada descubierta — continuamos',done:'Secuencia actual completada',error:'Error',startTitle:'Punto de partida',welcome:'👋 Bienvenido a TRAVEL',welcomeText:'Comenzamos en el centro histórico de Dresde, código postal',help:'Los códigos postales descubiertos permanecen en el mapa como pequeños marcadores. Al alejar el zoom se agrupan automáticamente.',district:'Distrito',county:'Distrito administrativo',state:'Estado federado',photoLater:'📷 La foto se añadirá más tarde.',photo:'📷 Foto',arrivedAt:'📍 Hemos llegado a',place:'Lugar',carContinues:'🚗 El coche continúa hacia el siguiente código postal…',routeError:'Error',dataError:'Error al cargar los datos',allDone:'🏁 Listo',sequenceDone:'Se han completado todos los códigos postales preparados actualmente.'},
  fr:{ready:'Prêt',currentStop:'ÉTAPE ACTUELLE',speed:'Vitesse',totalKm:'Km total',order:'Ordre',start:'🚗 Démarrer le voyage',traveling:'🚗 Voyage en cours…',continue:'🚗 La voiture continue…',preparing:'Préparation de l’itinéraire…',onRoad:'En route — 80 km/h',arrived:'Étape découverte — nous continuons',done:'Séquence actuelle terminée',error:'Erreur',startTitle:'Point de départ',welcome:'👋 Bienvenue sur TRAVEL',welcomeText:'Nous commençons dans le centre historique de Dresde, code postal',help:'Les codes postaux découverts restent sur la carte sous forme de petits repères. En dézoomant, ils sont automatiquement regroupés.',district:'Quartier',county:'Arrondissement',state:'Land',photoLater:'📷 Photo à ajouter ultérieurement.',photo:'📷 Photo',arrivedAt:'📍 Nous sommes arrivés à',place:'Lieu',carContinues:'🚗 La voiture continue déjà vers le prochain code postal…',routeError:'Erreur',dataError:'Erreur de chargement des données',allDone:'🏁 Terminé',sequenceDone:'Tous les codes postaux actuellement préparés ont été parcourus.'},
  it:{ready:'Pronto',currentStop:'TAPPA ATTUALE',speed:'Velocità',totalKm:'Km totali',order:'Ordine',start:'🚗 Inizia il viaggio',traveling:'🚗 Viaggio in corso…',continue:'🚗 L’auto continua…',preparing:'Preparazione del percorso…',onRoad:'In viaggio — 80 km/h',arrived:'Tappa scoperta — continuiamo',done:'Sequenza attuale completata',error:'Errore',startTitle:'Punto di partenza',welcome:'👋 Benvenuto in TRAVEL',welcomeText:'Partiamo dal centro storico di Dresda, CAP',help:'I CAP scoperti rimangono sulla mappa come piccoli segnaposto. Riducendo lo zoom, vengono raggruppati automaticamente.',district:'Quartiere',county:'Distretto',state:'Stato federale',photoLater:'📷 Foto da aggiungere in seguito.',photo:'📷 Foto',arrivedAt:'📍 Siamo arrivati a',place:'Luogo',carContinues:'🚗 L’auto sta già proseguendo verso il prossimo CAP…',routeError:'Errore',dataError:'Errore nel caricamento dei dati',allDone:'🏁 Fine',sequenceDone:'Tutti i CAP attualmente preparati sono stati completati.'}
};
let lang=localStorage.getItem(LANG_STORE)||'cs';
const tr=k=>(UI[lang]&&UI[lang][k])||UI.cs[k]||k;
const localized=(data,key,fallback)=>data?.translations?.[lang]?.[key] ?? data?.[key] ?? fallback;

// Nový formát: translations[lang].facts je pole objektů {id,title,text}.
// Kompatibilita: staré záznamy mají facts jako prosté řetězce.
const localizedFacts=data=>{
  const translated=data?.translations?.[lang]?.facts;
  if(Array.isArray(translated)&&translated.length)return translated.map(f=>{
    if(typeof f==='string')return {id:null,title:'',text:f};
    return {id:f.id||null,title:f.title||'',text:f.text||''};
  });
  const canonical=Array.isArray(data?.facts)?data.facts:[];
  return canonical.map(f=>{
    if(typeof f==='string')return {id:null,title:'',text:f};
    return {id:f.id||null,title:f.title||'',text:f.text||''};
  });
};
const factText=f=>typeof f==='string'?f:(f?.text||'');
const factTitle=f=>typeof f==='string'?'':(f?.title||'');

function setLanguage(next){
  if(!LANGS.includes(next))next='cs';
  lang=next;localStorage.setItem(LANG_STORE,lang);document.documentElement.lang=lang;
  document.querySelectorAll('[data-lang]').forEach(b=>b.classList.toggle('active',b.dataset.lang===lang));
  applyLanguageUI();
  if(currentData)updatePanel();
  refreshPopupLanguages();
}
function applyLanguageUI(){
  document.getElementById('statusText').textContent=tr('ready');
  document.getElementById('currentStopLabel').textContent=tr('currentStop');
  document.getElementById('speedLabel').textContent=tr('speed');
  document.getElementById('totalKmLabel').textContent=tr('totalKm');
  document.getElementById('sequenceLabel').textContent=tr('order');
  document.getElementById('smallHelp').textContent=tr('help');
  document.getElementById('footerText').textContent='OSM map data · TRAVEL V1';
  const btn=document.getElementById('routeBtn');
  if(!state.startedAt && state.index<sequence.length-1)btn.textContent=tr('start');
}
document.querySelectorAll('[data-lang]').forEach(b=>b.addEventListener('click',()=>setLanguage(b.dataset.lang)));
const STORE='travel-v3-state';
let state;
try{
  const saved=JSON.parse(localStorage.getItem(STORE)||'null');
  state=(saved&&Number.isInteger(saved.index)&&saved.index>=0)
    ? {...{index:0,totalKm:0,route:null,startedAt:null,routeKm:0},...saved}
    : {index:0,totalKm:0,route:null,startedAt:null,routeKm:0};
}catch{
  state={index:0,totalKm:0,route:null,startedAt:null,routeKm:0};
  localStorage.removeItem(STORE);
}
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
  document.getElementById('place').textContent=localized(currentData,'city',currentData.city)+(currentData.district?' · '+localized(currentData,'district',currentData.district):'');
  document.getElementById('totalKm').textContent=state.totalKm.toFixed(1);
  document.getElementById('sequence').textContent=state.index+1;
};
const fmt=m=>m<1?Math.max(1,Math.round(m*60))+' s':m<60?m.toFixed(1)+' min':Math.floor(m/60)+' h '+Math.round(m%60)+' min';
const hav=(a,b)=>{
  const R=6371,d1=(b[0]-a[0])*Math.PI/180,d2=(b[1]-a[1])*Math.PI/180;
  const x=Math.sin(d1/2)**2+Math.cos(a[0]*Math.PI/180)*Math.cos(b[0]*Math.PI/180)*Math.sin(d2/2)**2;
  return 2*R*Math.asin(Math.sqrt(x));
};
const SUPABASE_URL='https://ipnkjcpewtdaikiyzktv.supabase.co';
const SUPABASE_KEY='sb_publishable_BWmRql2mXQvdCwn-7w0wVA_jXncEWXB';
const supabase=window.supabase.createClient(SUPABASE_URL,SUPABASE_KEY);
let dataMap=new Map();

async function loadPostalData(){
  const {data,error}=await supabase
    .from('postal_codes')
    .select('postal_code,city,district,region,representative_name,latitude,longitude,content')
    .eq('country_code','DE')
    .eq('status','published')
    .order('postal_code',{ascending:true});
  if(error)throw Error('Supabase: '+error.message);
  if(!data?.length)throw Error('Supabase neobsahuje žádná publikovaná německá PSČ.');
  dataMap=new Map(data.map(row=>{
    const content=row.content||{};
    return [row.postal_code,{
      ...content,
      postcode:row.postal_code,
      city:content.city||row.city,
      district:content.district||row.district,
      state:content.state||row.region,
      representative_place:content.representative_place||row.representative_name,
      representative_point:content.representative_point||(
        row.latitude!=null&&row.longitude!=null
          ? {lat:row.latitude,lon:row.longitude}
          : null
      )
    }];
  }));
  sequence=[...dataMap.keys()];

  // A previously saved journey must never be allowed to point outside
  // the current Supabase sequence. New records may be added at any time.
  if(state.index>=sequence.length){
    state.index=0;
    state.totalKm=0;
    state.route=null;
    state.startedAt=null;
    state.routeKm=0;
    save();
  }
}

async function loadData(pc){
  const data=dataMap.get(pc);
  if(!data)throw Error('Data pro PSČ '+pc+' nejsou v Supabase dostupná');
  return data;
}
function popupHtml(data){
  const facts=localizedFacts(data).map(f=>{
    const title=factTitle(f);
    const text=factText(f);
    return '<li>'+(title?'<strong>'+title+'</strong><br>':'')+text+'</li>';
  }).join('');
  const photo=data.photo&&data.photo.url
    ? '<p>📷 <a href="'+data.photo.url+'" target="_blank" rel="noopener">'+tr('photo')+'</a></p>'
    : '<p class="photo-placeholder">'+tr('photoLater')+'</p>';
  return '<div class="travel-popup-content">'+
    '<div class="travel-popup-title">📍 '+data.postcode+' · '+data.city+'</div>'+
    (data.district?'<div class="travel-popup-sub">'+localized(data,'district',data.district)+'</div>':'')+
    '<div class="travel-popup-scroll">'+
      (data.county?'<div><b>'+tr('county')+':</b> '+data.county+'</div>':'')+
      (data.state?'<div><b>'+tr('state')+':</b> '+data.state+'</div>':'')+
      '<hr><b>'+localized(data,'representative_place',data.representative_place)+'</b>'+
      (facts?'<ul>'+facts+'</ul>':'')+photo+
    '</div></div>';
}
function markerPopup(data){return popupHtml(data);}
function refreshPopupLanguages(){
  stopMarkers.eachLayer(marker=>{
    const data=marker._travelData;
    if(data)marker.setPopupContent(markerPopup(data));
  });
  if(car._travelPopupData)car.setPopupContent(car._travelPopupData());
  if(currentData && map._popup && map._popup.options?.travelArrival){
    map._popup.setContent(markerPopup(currentData));
  }
}
function popupOptions(){
  const mobile=window.innerWidth<=800;
  return {maxWidth:mobile?520:360,maxHeight:mobile?260:420,autoPan:false,keepInView:false};
}
function validPoint(p){
  return p && Number.isFinite(Number(p.lat)) && Number.isFinite(Number(p.lon))
    ? {lat:Number(p.lat),lon:Number(p.lon)}
    : null;
}
function addStopMarker(data){
  const point=validPoint(data?.representative_point);
  if(!point)return null;
  const existing=stopMarkers.getLayers().find(m=>m.options.stopPostcode===data.postcode);
  if(existing){
    existing._travelData=data;
    existing.setPopupContent(markerPopup(data));
    return existing;
  }
  const marker=L.marker([data.representative_point.lat,data.representative_point.lon],{
    icon:pinIcon,title:data.postcode+' '+data.city,stopPostcode:data.postcode
  });
  marker._travelData=data;
  marker.bindPopup(markerPopup(data),popupOptions());
  stopMarkers.addLayer(marker);
  return marker;
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
  const marker=addStopMarker(currentData);
  if(marker){
    const point=validPoint(currentData.representative_point);
    if(point)marker.setLatLng([point.lat,point.lon]);
    marker.openPopup();
  }
  setInfo('<strong>'+tr('arrivedAt')+' '+currentData.postcode+'</strong><p><b>'+localized(currentData,'representative_place',currentData.representative_place)+'</b></p>'+
    (currentData.county?'<p><b>'+tr('county')+':</b> '+currentData.county+'</p>':'')+
    localizedFacts(currentData).map(f=>'<p>• '+(factTitle(f)?'<b>'+factTitle(f)+'</b>: ':'')+factText(f)+'</p>').join('')+
    '<p class="continue">'+tr('carContinues')+'</p>');
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
  const point=validPoint(currentData.access_point)||validPoint(currentData.representative_point);
  if(point)car.setLatLng([point.lat,point.lon]);
  showArrival();

  const btn=document.getElementById('routeBtn');
  if(state.index<sequence.length-1){
    btn.disabled=true;
    btn.textContent=tr('continue');
    setStatus(tr('arrived'));
    setTimeout(()=>start(true),1200);
  }else{
    btn.disabled=true;
    btn.textContent='🏁 '+tr('done').replace(/^🏁\s*/,'');
    setStatus(tr('done'));
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
      setStatus(tr('onRoad'),true);
      setInfo('<strong>🚗 '+(lang==='cs'?'Na cestě do':'En route to')+' '+nextData.postcode+'</strong><p>'+(lang==='cs'?'Ujeto':'Travelled')+' '+km.toFixed(1)+' km '+(lang==='cs'?'z':'of')+' '+state.routeKm.toFixed(1)+' km.<br>'+(lang==='cs'?'Zbývá':'Remaining')+' '+(state.routeKm-km).toFixed(1)+' km · '+fmt((state.routeKm-km)/80*60)+'.</p>');
      requestAnimationFrame(tick);
    }else arrived();
  }
  tick();
}
async function start(auto=false){
  if(state.index>=sequence.length-1||state.startedAt)return;
  const btn=document.getElementById('routeBtn');
  btn.disabled=true;
  setStatus(tr('preparing'),true);
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
    btn.textContent=tr('traveling');
    animate();
  }catch(e){
    setInfo('<strong>'+tr('routeError')+'</strong><p>'+e.message+'</p>');
    setStatus(tr('error'));
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
    applyLanguageUI();
    await loadPostalData();
    currentData=await loadData(sequence[state.index]);
    const startPoint=validPoint(currentData.access_point)||validPoint(currentData.representative_point);
    const displayPoint=validPoint(currentData.representative_point)||startPoint;
    if(!startPoint||!displayPoint)throw Error('PSČ '+currentData.postcode+' nemá platné souřadnice.');
    car.setLatLng([startPoint.lat,startPoint.lon]);

    // Obnovení všech dosud objevených PSČ po refreshi.
    // Piny nejsou jen dočasná součást aktuálního běhu.
    const discovered=sequence.slice(0,state.index+1);
    const discoveredData=await Promise.all(discovered.map(loadData));
    discoveredData.forEach(addStopMarker);

    map.setView(
      [displayPoint.lat,displayPoint.lon],
      Math.max(map.getZoom(),13)
    );
    refreshMapSize();
    setTimeout(refreshMapSize,250);
    setTimeout(refreshMapSize,750);
    updatePanel();
    setLanguage(lang);

    if(state.route&&state.startedAt){
      nextData=await loadData(sequence[state.index+1]);
      animate();
    }else if(state.index>=sequence.length-1){
      setInfo('<strong>'+tr('allDone')+'</strong><p>'+tr('sequenceDone')+'</p>');
      document.getElementById('routeBtn').disabled=true;
      document.getElementById('routeBtn').textContent='🏁 Aktuální sekvence dokončena';
      setStatus(tr('done'));
    }else{
      setInfo('<strong>'+tr('welcome')+'</strong><p>'+tr('welcomeText')+' <b>01067</b>.</p><p>'+tr('help')+'</p><p>📍 '+(lang==='cs'?'Pin zůstává na objeveném místě, auto ale pokračuje dál.':'The pin stays at the discovered place while the car continues.')+'</p>');
      setStatus(tr('ready'));
      car._travelPopupData=()=>'<div class="travel-popup-content">'+
        '<div class="travel-popup-title">'+tr('welcome')+'</div>'+
        '<div class="travel-popup-sub">'+(lang==='cs'?'Historické centrum Drážďan':'Historic centre of Dresden')+' · 01067</div>'+
        '<div class="travel-popup-scroll">'+
        '<p>'+tr('welcomeText')+' <b>01067</b>.</p>'+
        '<p>'+tr('help')+'</p>'+
        '<p>📍 '+(lang==='cs'?'Pin zůstává na objeveném místě, auto pokračuje dál.':'The pin stays at the discovered place while the car continues.')+'</p>'+
        '</div></div>';
      car.bindPopup(car._travelPopupData(),popupOptions()).openPopup();
    }
  }catch(e){
    setStatus('Chyba');
    setInfo('<strong>'+tr('dataError')+'</strong><p>'+e.message+'</p>');
  }
})();