// TRAVEL — read-only Supabase archive viewer (Czechia + Germany).
// This page is intentionally independent from database.js and does not use Neon.
const SUPABASE_URL='https://ipnkjcpewtdaikiyzktv.supabase.co';
const SUPABASE_KEY='sb_publishable_BWmRql2mXQvdCwn-7w0wVA_jXncEWXB';
const PAGE_SIZE=60;
const STATUS=['published','validated','placeholder'];
const UI={
 cs:{subtitle:'Samostatná čtečka původních záznamů z databáze Supabase',search:'Hledat PSČ nebo město…',loading:'Načítám záznamy ze Supabase…',postcode:'PSČ',prev:'← Předchozí',next:'Další →',none:'Nic nenalezeno.',choose:'Vyber PSČ vlevo.',records:'záznamů na této stránce',facts:'Fakta',language:'Jazyk faktů',sources:'Zdroje',verification:'Ověření',raw:'Zobrazit celý surový JSON',copy:'📋 Kopírovat JSON',copied:'✓ Zkopírováno',status:{published:'Publikováno',validated:'Čeká na audit',placeholder:'Čeká na rework'},source:'Zdroj: Supabase · public.postal_codes',noFacts:'Pro tento jazyk nejsou fakta k dispozici.',noData:'Supabase pro tuto zemi nevrátil žádné záznamy.',footer:'Pouze čtení · Supabase public.postal_codes · DE / CZ',db:'Otevřít hlavní Database',district:'Okres',county:'Kraj / oblast',state:'Spolková země / kraj'},
 de:{subtitle:'Unabhängiger Leser der ursprünglichen Datensätze aus Supabase',search:'PLZ oder Ort suchen…',loading:'Lade Datensätze aus Supabase…',postcode:'Postleitzahl',prev:'← Zurück',next:'Weiter →',none:'Keine Einträge gefunden.',choose:'Wähle links eine Postleitzahl.',records:'Einträge auf dieser Seite',facts:'Fakten',language:'Sprache der Fakten',sources:'Quellen',verification:'Verifizierung',raw:'Vollständiges JSON anzeigen',copy:'📋 JSON kopieren',copied:'✓ Kopiert',status:{published:'Veröffentlicht',validated:'Wartet auf Audit',placeholder:'Wartet auf Rework'},source:'Quelle: Supabase · public.postal_codes',noFacts:'Für diese Sprache sind keine Fakten vorhanden.',noData:'Supabase hat für dieses Land keine Datensätze zurückgegeben.',footer:'Nur Lesezugriff · Supabase public.postal_codes · DE / CZ',db:'Hauptdatenbank öffnen',district:'Bezirk',county:'Landkreis / Region',state:'Bundesland / Region'}
};
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let country='DE',language='cs',offset=0,rows=[],hasNext=false,selected=null,searchTimer=null,listRequest=0,detailRequest=0;
const tr=k=>UI[language][k]??UI.cs[k]??k;
const countryName=()=>country==='DE'?(language==='de'?'Deutschland':'Německo'):(language==='de'?'Tschechien':'Česko');
function buildListUrl(){
 const params=new URLSearchParams();
 params.set('select','postal_code,city,status,data_version,updated_at');
 params.set('country_code','eq.'+country);
 params.set('status','in.('+STATUS.join(',')+')');
 params.set('order','postal_code.asc');
 params.set('limit',String(PAGE_SIZE+1));
 params.set('offset',String(offset));
 const q=$('#search').value.trim();
 if(/^\\d{5}$/.test(q.replace(/\\s/g,'')))params.set('postal_code','eq.'+q.replace(/\\s/g,''));
 else if(q){
   const safe=q.replace(/[%,_()]/g,' ').trim();
   if(safe)params.set('or','(postal_code.ilike.*'+safe+'*,city.ilike.*'+safe+'*)');
 }
 return SUPABASE_URL+'/rest/v1/postal_codes?'+params.toString();
}
async function request(url){
 const response=await fetch(url,{headers:{apikey:SUPABASE_KEY,Authorization:'Bearer '+SUPABASE_KEY,Accept:'application/json'}});
 if(!response.ok){let message='HTTP '+response.status;try{const e=await response.json();message+=' — '+(e.message||e.details||e.hint||'')}catch{}throw Error(message)}
 return response.json();
}
function renderList(){
 $('#count').textContent=rows.length+(rows.length===PAGE_SIZE?' +':'')+' '+tr('records');
 $('#list').innerHTML=rows.length?rows.map(r=>'<div class="row '+(r.postal_code===selected?.postcode?'active':'')+'" data-pc="'+esc(r.postal_code)+'"><div class="pc">'+esc(r.postal_code)+'</div><div class="city">'+esc(localized(r,'city')||'—')+'</div><span class="status">'+esc(tr('status')[r.status]||r.status||'—')+'</span></div>').join(''):'<div class="empty">'+tr('none')+'</div>';
 document.querySelectorAll('.row').forEach(el=>el.addEventListener('click',()=>selectRecord(el.dataset.pc,true)));
 $('#prev').disabled=offset===0;
 $('#next').disabled=!hasNext;
}
async function loadList(){
 const id=++listRequest,requestedCountry=country;
 $('#list').innerHTML='<div class="loading">'+tr('loading')+'</div>';
 try{
   const data=await request(buildListUrl());
   if(id!==listRequest||requestedCountry!==country)return;
   hasNext=data.length>PAGE_SIZE;rows=data.slice(0,PAGE_SIZE);
   renderList();
   const current=selected?.postcode;
   if(current&&rows.some(x=>x.postal_code===current))await selectRecord(current,false);
   else if(rows.length)await selectRecord(rows[0].postal_code,false);
   else{selected=null;renderDetail(null)}
 }catch(error){if(id===listRequest&&requestedCountry===country){$('#list').innerHTML='<div class="error">'+esc(error.message)+'</div>';$('#count').textContent='Chyba';renderDetail({error:error.message})}}
}
function localized(data,key){
 return data?.translations?.[language]?.[key]??data?.[key]??'';
}
async function selectRecord(pc,scroll){
 const id=++detailRequest,requestedCountry=country;
 selected={postcode:pc};renderList();renderDetail({loading:true});
 try{
   const params=new URLSearchParams();
   params.set('select','postal_code,city,district,region,representative_name,latitude,longitude,content,status,data_version,updated_at');
   params.set('country_code','eq.'+requestedCountry);
   params.set('postal_code','eq.'+pc);
   params.set('limit','1');
   const data=await request(SUPABASE_URL+'/rest/v1/postal_codes?'+params.toString());
   if(id!==detailRequest||requestedCountry!==country)return;
   if(!data.length)throw Error('PSČ '+pc+' nebylo v Supabase nalezeno.');
   const row=data[0],content=row.content||{};
   selected={...content,postcode:row.postal_code,status:row.status,data_version:row.data_version,updated_at:row.updated_at,city:content.city||row.city,district:content.district??row.district,state:content.state||row.region,representative_place:content.representative_place||row.representative_name,representative_point:content.representative_point||(row.latitude!=null?{lat:row.latitude,lon:row.longitude}:null)};
   renderList();renderDetail(selected);
   if(scroll)window.scrollTo({top:0,behavior:'smooth'});
 }catch(error){if(id===detailRequest&&requestedCountry===country)renderDetail({error:error.message})}
}
function factList(data){
 const translated=data?.translations?.[language]?.facts;
 const facts=Array.isArray(translated)?translated:(Array.isArray(data?.facts)?data.facts:[]);
 return facts.map((f,i)=>typeof f==='string'?{id:String(i+1),title:'',text:f}:f).filter(Boolean);
}
function renderDetail(data){
 const el=$('#detail');
 if(!data){el.innerHTML='<div class="empty">'+tr('choose')+'</div>';return}
 if(data.loading){el.innerHTML='<div class="loading">'+tr('loading')+'</div>';return}
 if(data.error){el.innerHTML='<div class="error">'+esc(data.error)+'</div>';return}
 const facts=factList(data),original=Array.isArray(data.facts)?data.facts:[];
 const langNames={cs:'Čeština',de:'Deutsch'};
 const status=tr('status')[data.status]||data.status||'—';
 const meta=[data.representative_place?'📍 '+esc(localized(data,'representative_place')||data.representative_place):'',data.district?'🏛 '+esc(localized(data,'district')||data.district):'',data.county?'📌 '+esc(localized(data,'county')||data.county):'',data.state?'🌍 '+esc(localized(data,'state')||data.state):''].filter(Boolean).join(' · ');
 const factsHtml=facts.length?facts.map((f,i)=>{
   const id=f.id??String(i+1),sourceIds=(original.find(x=>x&&x.id===id)?.sources||f.sources||[]);
   const sources=sourceIds.map(ref=>data.sources?.find(s=>s&&(typeof s==='string'?s===ref:s.title===ref||s.url===ref))).filter(Boolean);
   return '<article class="fact"><div class="fact-top"><span class="badge">'+esc(id)+'</span>'+(f.priority?'<span class="badge priority">Priorita '+esc(f.priority)+'</span>':'')+(f.category?'<span class="badge">'+esc(f.category)+'</span>':'')+'</div>'+(f.title?'<div class="fact-title">'+esc(f.title)+'</div>':'')+'<div class="fact-text">'+esc(f.text??'')+'</div>'+(sources.length?'<div class="sources">'+sources.map(s=>{const title=typeof s==='string'?s:(s.title||s.url||'Zdroj'),url=typeof s==='string'?'':s.url||'';return url?'<a class="source" href="'+esc(url)+'" target="_blank" rel="noopener">↗ '+esc(title)+'</a>':'<span class="source">'+esc(title)+'</span>'}).join('')+'</div>':'')+'</article>'
 }).join(''):'<div class="empty">'+tr('noFacts')+'</div>';
 el.innerHTML='<div class="hero"><div><div class="postcode">'+esc(data.postcode)+'</div><div class="place">'+esc(localized(data,'city')||data.city||'—')+'</div><div class="meta"><span class="badge">'+esc(status)+'</span> <span class="badge">V'+esc(data.data_version??'—')+'</span><br>'+esc(countryName())+' · '+tr('source')+'<br>'+meta+'<br>Aktualizováno: '+esc(data.updated_at||'—')+'</div></div><div class="actions"><button class="action" id="copyBtn">'+tr('copy')+'</button></div></div>'+
 '<div class="section-title">'+tr('language')+'</div><div class="langbar">'+Object.entries(langNames).map(([key,label])=>'<button class="lang '+(language===key?'active':'')+'" data-lang="'+key+'">'+key.toUpperCase()+' · '+label+'</button>').join('')+'</div>'+
 '<div class="section-title">'+tr('facts')+' · '+facts.length+'</div><div class="facts">'+factsHtml+'</div>'+
 '<div class="section-title">'+tr('verification')+'</div><div class="meta">PSČ: '+esc(data.verification?.postcode_source||data.verification?.plz_source||'—')+' · geografická data: '+(data.verification?.geographic_test_data?'✓':'—')+' · access point: '+(data.verification?.access_point_verified?'✓':'—')+'</div>'+
 '<details class="raw"><summary>'+tr('raw')+'</summary><pre class="json">'+esc(JSON.stringify(data,null,2))+'</pre></details>';
 document.querySelectorAll('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>{language=btn.dataset.lang;applyLanguage();renderDetail(selected)}));
 $('#copyBtn').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(JSON.stringify(data,null,2));$('#copyBtn').textContent=tr('copied')}catch{ $('#copyBtn').textContent='Clipboard unavailable'}});
}
function applyLanguage(){
 document.documentElement.lang=language;
 $('#subtitle').textContent=tr('subtitle');$('#search').placeholder=tr('search');$('#listTitle').textContent=tr('postcode');
 $('#prev').textContent=tr('prev');$('#next').textContent=tr('next');$('#footerText').textContent=tr('footer');
 document.querySelectorAll('[data-language]').forEach(b=>b.classList.toggle('active',b.dataset.language===language));
 document.querySelectorAll('[data-country]').forEach(b=>b.classList.toggle('active',b.dataset.country===country));
}
document.querySelectorAll('[data-country]').forEach(b=>b.addEventListener('click',()=>{
 if(country===b.dataset.country)return;country=b.dataset.country;offset=0;selected=null;$('#search').value='';applyLanguage();loadList();
}));
document.querySelectorAll('[data-language]').forEach(b=>b.addEventListener('click',()=>{
 if(language===b.dataset.language)return;language=b.dataset.language;applyLanguage();renderList();if(selected?.postcode)renderDetail(selected);
}));
$('#search').addEventListener('input',()=>{clearTimeout(searchTimer);searchTimer=setTimeout(()=>{offset=0;selected=null;loadList()},350)});
$('#prev').addEventListener('click',()=>{offset=Math.max(0,offset-PAGE_SIZE);loadList();$('#list').scrollTop=0});
$('#next').addEventListener('click',()=>{if(hasNext){offset+=PAGE_SIZE;loadList();$('#list').scrollTop=0}});
document.addEventListener('keydown',e=>{if(e.target.matches('input'))return;if(e.key==='ArrowLeft'&&offset>0){offset=Math.max(0,offset-PAGE_SIZE);loadList()}if(e.key==='ArrowRight'&&hasNext){offset+=PAGE_SIZE;loadList()}});
applyLanguage();loadList();
