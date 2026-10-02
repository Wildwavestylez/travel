const map=L.map('map').setView([51.0504,13.7373],13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap contributors'}).addTo(map);

const state={postcode:'01067',city:'Dresden',totalKm:0,sequence:1};
const car=L.circleMarker([51.0504,13.7373],{radius:9}).addTo(map).bindPopup('<b>01067 Dresden</b><br>Start').openPopup();
let routeLayer=null;

function setStatus(text,busy=false){
  document.getElementById('statusText').textContent=text;
  document.getElementById('statusDot').style.background=busy?'#f59e0b':'#22c55e';
}
function setInfo(html){document.getElementById('info').innerHTML=html}
function haversine(a,b){const R=6371,dLat=(b[0]-a[0])*Math.PI/180,dLon=(b[1]-a[1])*Math.PI/180;const x=Math.sin(dLat/2)**2+Math.cos(a[0]*Math.PI/180)*Math.cos(b[0]*Math.PI/180)*Math.sin(dLon/2)**2;return 2*R*Math.asin(Math.sqrt(x))}
async function geocode(postcode){
  const url='https://nominatim.openstreetmap.org/search?format=jsonv2&country=Germany&postalcode='+encodeURIComponent(postcode)+'&limit=1';
  const r=await fetch(url,{headers:{'Accept-Language':'de'}});
  if(!r.ok)throw new Error('Geokódování selhalo');
  const data=await r.json(); if(!data[0])throw new Error('PSČ nebylo nalezeno');
  return [Number(data[0].lat),Number(data[0].lon)];
}
async function route(from,to){
  const url='https://router.project-osrm.org/route/v1/driving/'+from[1]+','+from[0]+';'+to[1]+','+to[0]+'?overview=full&geometries=geojson';
  const r=await fetch(url); if(!r.ok)throw new Error('Routing selhal');
  const data=await r.json(); if(data.code!=='Ok'||!data.routes?.[0])throw new Error('Trasa nebyla nalezena');
  return data.routes[0];
}

document.getElementById('routeBtn').addEventListener('click',async()=>{
  const btn=document.getElementById('routeBtn');btn.disabled=true;setStatus('Počítám trasu…',true);
  try{
    // 01069 is the next demo stop after 01067 in the Dresden sequence.
    const from=[car.getLatLng().lat,car.getLatLng().lng];
    const to=await geocode('01069');
    const result=await route(from,to);
    const km=result.distance/1000;
    if(routeLayer)map.removeLayer(routeLayer);
    routeLayer=L.geoJSON(result.geometry,{style:{weight:6,opacity:.85}}).addTo(map);
    map.fitBounds(routeLayer.getBounds(),{padding:[30,30]});
    state.totalKm+=km;
    document.getElementById('totalKm').textContent=state.totalKm.toFixed(1);
    document.getElementById('sequence').textContent='2';
    setInfo('<strong>Další zastávka: 01069</strong><p>Silniční trasa byla nalezena. Délka: '+km.toFixed(1)+' km. Simulační doba při 80 km/h: '+(km/80*60).toFixed(1)+' min.</p>');
    setStatus('Trasa připravena');
  }catch(e){setInfo('<strong>Chyba</strong><p>'+e.message+'</p>');setStatus('Chyba');}
  finally{btn.disabled=false}
});