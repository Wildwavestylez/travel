const SUPABASE_URL='https://ipnkjcpewtdaikiyzktv.supabase.co';
const SUPABASE_KEY='sb_publishable_BWmRql2mXQvdCwn-7w0wVA_jXncEWXB';

const PAGE_SIZE=60;
let offset=0, total=null, rows=[], selected=null, language='cs', searchTimer=null, country='DE';

const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const api=async(path,extra={})=>{
  const r=await fetch(SUPABASE_URL+'/rest/v1/postal_codes?'+path,{
    headers:{apikey:SUPABASE_KEY,Authorization:'Bearer '+SUPABASE_KEY,'Accept':'application/json','Prefer':'count=exact'}
  });
  if(!r.ok){let msg='HTTP '+r.status;try{const e=await r.json();msg+=' — '+(e.message||e.details||'')}catch{}throw Error(msg)}
  const range=r.headers.get('content-range');
  return {data:await r.json(),range};
};
function parseTotal(range){if(!range)return null;const m=range.match(/\/(\d+)$/);return m?Number(m[1]):null}

function listQuery(){
  const base='select=postal_code,city&country_code=eq.'+country+'&status=in.(published,validated,draft)&order=postal_code.asc&limit='+PAGE_SIZE+'&offset='+offset;
  const q=$('#search').value.trim();
  if(!q)return base;
  const safe=q.replace(/[%_]/g,'');
  if(/^\d{5}$/.test(safe))return 'select=postal_code,city&country_code=eq.'+country+'&status=in.(published,validated,draft)&postal_code=eq.'+encodeURIComponent(safe);
  return 'select=postal_code,city&country_code=eq.'+country+'&status=in.(published,validated,draft)&or=(postal_code.like.'+encodeURIComponent(safe)+'*,city.ilike.*'+encodeURIComponent(safe)+'*)&order=postal_code.asc&limit='+PAGE_SIZE+'&offset='+offset;
}
async function loadList(){
  $('#list').innerHTML='<div class="loading">Načítám PSČ…</div>';
  try{
    const r=await api(listQuery());
    rows=r.data||[]; total=parseTotal(r.range);
    renderList();
    if(!selected && rows[0])select(rows[0].postal_code,false);
    else if(selected && rows.some(x=>x.postal_code===selected))select(selected,false);
    else if(rows[0])select(rows[0].postal_code,false);
    else renderDetail(null);
  }catch(e){$('#list').innerHTML='<div class="error">'+esc(e.message)+'</div>'}
}
function renderList(){
  $('#count').textContent=total==null?rows.length+' záznamů':total.toLocaleString('cs-CZ')+' záznamů';
  $('#list').innerHTML=rows.length?rows.map(r=>'<div class="row '+(r.postal_code===selected?'active':'')+'" data-pc="'+esc(r.postal_code)+'"><div class="pc">'+esc(r.postal_code)+'</div><div class="city">'+esc(r.city||'—')+'</div></div>').join(''):'<div class="empty">Nic nenalezeno.</div>';
  document.querySelectorAll('.row').forEach(x=>x.onclick=()=>select(x.dataset.pc,true));
  $('#prev').disabled=offset===0;
  $('#next').disabled=total!=null?offset+PAGE_SIZE>=total:rows.length<PAGE_SIZE;
}
async function select(pc,scroll=true){
  selected=pc;renderList();
  renderDetail({loading:true});
  try{
    const r=await api('select=postal_code,city,district,region,representative_name,latitude,longitude,content&country_code=eq.'+country+'&postal_code=eq.'+encodeURIComponent(pc)+'&limit=1');
    if(!r.data?.[0])throw Error('PSČ '+pc+' nebylo nalezeno.');
    const row=r.data[0], c=row.content||{};
    selected={...c,postcode:row.postal_code,city:c.city||row.city,district:c.district??row.district,state:c.state||row.region,representative_place:c.representative_place||row.representative_name,representative_point:c.representative_point||(row.latitude!=null?{lat:row.latitude,lon:row.longitude}:null)};
    renderDetail(selected);
    if(scroll)window.scrollTo({top:0,behavior:'smooth'});
  }catch(e){renderDetail({error:e.message})}
}
function factData(data){
  const facts=data.translations?.[language]?.facts??data.facts??[];
  if(Array.isArray(facts))return facts.filter(Boolean).map(f=>({id:f.id??'',title:f.title??'',text:f.text??''}));
  if(facts&&typeof facts==='object')return Object.entries(facts).filter(([,f])=>f&&typeof f==='object').map(([id,f])=>({id,...f}));
  return [];
}
const categoryLabel={nature_and_landscape:'Příroda a krajina',heritage_and_monuments:'Dědictví a památky',history:'Historie',culture_and_industry:'Kultura a průmysl',people:'Osobnosti',geography_and_context:'Geografie a kontext',tourism_and_surroundings:'Turismus a okolí',hidden_gem:'Skrytý klenot',local_story:'Místní příběh',other_verified_significance:'Ověřený význam'};
function renderDetail(data){
  const el=$('#detail');
  if(!data){el.innerHTML='<div class="empty">Vyber PSČ vlevo.</div>';return}
  if(data.loading){el.innerHTML='<div class="loading">Načítám celý záznam…</div>';return}
  if(data.error){el.innerHTML='<div class="error">'+esc(data.error)+'</div>';return}
  const facts=factData(data);
  const langNames={cs:'Čeština',de:'Deutsch',en:'English',es:'Español',fr:'Français',it:'Italiano'};
  const originalFacts=data.facts||[];
  el.innerHTML=
    '<div class="hero"><div><div class="postcode">'+esc(data.postcode)+'</div><div class="place">'+esc(data.city)+'</div><div class="meta">'+
    [data.representative_place?'📍 '+esc(data.representative_place):'',data.district?'🏛 '+esc(data.district):'',data.county?'📌 '+esc(data.county):'',data.state?(country==='DE'?'🇩🇪 ':'🇨🇿 ')+esc(data.state):''].filter(Boolean).join(' · ')+
    '</div></div><div class="actions"><button id="copyBtn">📋 Kopírovat JSON</button><button id="rawBtn">{} JSON</button></div></div>'+
    '<div class="section-title">Jazyk faktů</div><div class="langbar">'+Object.entries(langNames).map(([k,v])=>'<button class="lang '+(language===k?'active':'')+'" data-lang="'+k+'">'+k.toUpperCase()+' · '+v+'</button>').join('')+'</div>'+
    '<div class="section-title">'+(language==='cs'?'Fakta':'Facts')+' · '+facts.length+'</div>'+
    '<div class="facts">'+(facts.length?facts.map(f=>{
      const original=originalFacts.find(x=>x&&x.id===f.id);
      const sources=(original?.sources||[]).map(id=>{
        const s=data.sources?.find(x=>x&&(typeof x==='string'?x===id:(x.title===id||x.url===id)));
        if(!s)return null;
        return typeof s==='string'?{title:s,url:s}:{title:s.title??s.url??'',url:s.url??''};
      }).filter(s=>s&&s.title);
      return '<article class="fact"><div class="fact-top"><span class="badge">'+esc(f.id)+'</span><span class="badge priority '+esc(original?.priority||'')+'">Priorita '+esc(original?.priority||'—')+'</span><span class="badge">'+esc(categoryLabel[original?.category]||original?.category||'')+'</span></div>'+
      '<div class="fact-title">'+esc(f.title)+'</div><div class="fact-text">'+esc(f.text)+'</div>'+
      (sources.length?'<div class="sources">'+sources.map(s=>'<a class="source" href="'+esc(s.url)+'" target="_blank" rel="noopener">↗ '+esc(s.title)+'</a>').join('')+'</div>':'')+
      '</article>'
    }).join(''):'<div class="empty">Pro tento jazyk nejsou fakta k dispozici.</div>')+'</div>'+
    '<div class="section-title">Ověření</div><div class="meta">'+
    'PLZ zdroj: '+esc(data.verification?.plz_source||'—')+' · geografická data: '+(data.verification?.geographic_test_data?'✓':'—')+' · access point: '+(data.verification?.access_point_verified?'✓':'—')+'</div>'+
    '<details class="raw"><summary>Zobrazit celý surový JSON</summary><pre class="json">'+esc(JSON.stringify(data,null,2))+'</pre></details>';
  document.querySelectorAll('.lang').forEach(b=>b.onclick=()=>{language=b.dataset.lang;renderDetail(data)});
  $('#copyBtn').onclick=()=>navigator.clipboard?.writeText(JSON.stringify(data,null,2)).then(()=>{const b=$('#copyBtn');b.textContent='✓ Zkopírováno';setTimeout(()=>b.textContent='📋 Kopírovat JSON',1200)});
  $('#rawBtn').onclick=()=>document.querySelector('.raw summary').click();
}
$('#search').addEventListener('input',()=>{clearTimeout(searchTimer);searchTimer=setTimeout(()=>{offset=0;selected=null;loadList()},300)});
$('#prev').onclick=()=>{offset=Math.max(0,offset-PAGE_SIZE);selected=null;loadList();$('#list').scrollTop=0};
$('#next').onclick=()=>{offset+=PAGE_SIZE;selected=null;loadList();$('#list').scrollTop=0};
document.addEventListener('keydown',e=>{
  if(e.target.tagName==='INPUT')return;
  if(e.key==='ArrowLeft'&&offset>0){offset=Math.max(0,offset-PAGE_SIZE);loadList()}
  if(e.key==='ArrowRight'&&(total==null||offset+PAGE_SIZE<total)){offset+=PAGE_SIZE;loadList()}
});
loadList();

function updateCountryUI(){
  const labels={DE:{name:'Německo',from:'01067'},CZ:{name:'Česko',from:'10000'}};
  const x=labels[country];
  $('#subtitle').textContent='Čtečka '+x.name+' · '+x.from+' → dál · data přímo ze Supabase';
  document.querySelectorAll('.country').forEach(b=>b.classList.toggle('active',b.dataset.country===country));
}
document.querySelectorAll('.country').forEach(b=>b.onclick=()=>{country=b.dataset.country;offset=0;selected=null;language=country==='CZ'?'cs':'de';updateCountryUI();loadList();});
updateCountryUI();
