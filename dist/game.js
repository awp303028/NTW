'use strict';
const CITIES=['臺北市','新北市','桃園市','臺中市','臺南市','高雄市','基隆市','新竹市','嘉義市','新竹縣','苗栗縣','彰化縣','南投縣','雲林縣','嘉義縣','屏東縣','宜蘭縣','花蓮縣','臺東縣','澎湖縣','金門縣','連江縣'];
const TYPES=['防禦型','攻擊型','輔助型','科技型'];
const CARDS=[
  {
    "id": 0,
    "name": "虎斑見習警員",
    "type": 0,
    "stars": 1,
    "art": "tiger-police",
    "atk": 95,
    "hp": 1100,
    "def": 90,
    "spd": 65,
    "animal": "虎斑",
    "hometown": "臺北市",
    "rarity": "R",
    "skill": "街坊守護",
    "desc": "編隊時，突襲造成的新台幣損失降低 60%；戰鬥時承受傷害降低 20%。"
  },
  {
    "id": 1,
    "name": "水牛重機拆除隊長",
    "type": 1,
    "stars": 2,
    "art": "ox-demolition",
    "atk": 220,
    "hp": 920,
    "def": 48,
    "spd": 48,
    "animal": "水牛",
    "hometown": "臺中市",
    "rarity": "SR",
    "skill": "拆除專業",
    "desc": "攻擊設施時附加攻擊力 40% 的真實傷害；一般戰鬥傷害提高 15%。"
  },
  {
    "id": 2,
    "name": "貓咪外科主任",
    "type": 2,
    "stars": 3,
    "art": "cat-surgeon",
    "atk": 95,
    "hp": 790,
    "def": 50,
    "spd": 100,
    "animal": "銀虎斑貓",
    "hometown": "臺南市",
    "rarity": "SSR",
    "skill": "急救時刻",
    "desc": "每回合治療血量比例最低的存活隊友；掛機體力恢復速度提高 50%。"
  },
  {
    "id": 3,
    "name": "貓頭鷹晶片總工程師",
    "type": 3,
    "stars": 3,
    "art": "owl-chip",
    "atk": 165,
    "hp": 800,
    "def": 58,
    "spd": 87,
    "animal": "貓頭鷹",
    "hometown": "新竹市",
    "rarity": "SSR",
    "skill": "智慧產線",
    "desc": "編隊時，掛機新台幣與社會歷練提高 25%，納稅額度提高 40%。"
  },
  {
    "id": 4,
    "name": "黑熊廟口巡守隊長",
    "type": 0,
    "stars": 2,
    "art": "bear-warden",
    "atk": 110,
    "hp": 1350,
    "def": 105,
    "spd": 52,
    "animal": "臺灣黑熊",
    "hometown": "南投縣",
    "rarity": "SR",
    "skill": "街坊守護",
    "desc": "編隊時，突襲造成的新台幣損失降低 60%；戰鬥時承受傷害降低 20%。"
  },
  {
    "id": 5,
    "name": "雲豹港都焊接大師",
    "type": 1,
    "stars": 3,
    "art": "leopard-welder",
    "atk": 245,
    "hp": 900,
    "def": 60,
    "spd": 82,
    "animal": "雲豹",
    "hometown": "高雄市",
    "rarity": "SSR",
    "skill": "拆除專業",
    "desc": "攻擊設施時附加攻擊力 40% 的真實傷害；一般戰鬥傷害提高 15%。"
  },
  {
    "id": 6,
    "name": "白兔山城救護員",
    "type": 2,
    "stars": 1,
    "art": "rabbit-medic",
    "atk": 80,
    "hp": 850,
    "def": 47,
    "spd": 95,
    "animal": "白兔",
    "hometown": "花蓮縣",
    "rarity": "R",
    "skill": "急救時刻",
    "desc": "每回合治療血量比例最低的存活隊友；掛機體力恢復速度提高 50%。"
  },
  {
    "id": 7,
    "name": "赤狐智慧城市工程師",
    "type": 3,
    "stars": 2,
    "art": "fox-engineer",
    "atk": 140,
    "hp": 810,
    "def": 53,
    "spd": 90,
    "animal": "赤狐",
    "hometown": "桃園市",
    "rarity": "SR",
    "skill": "智慧產線",
    "desc": "編隊時，掛機新台幣與社會歷練提高 25%，納稅額度提高 40%。"
  },
  {
    "id": 8,
    "name": "犀牛城防指揮官",
    "type": 0,
    "stars": 3,
    "art": "rhino-commander",
    "atk": 120,
    "hp": 1580,
    "def": 125,
    "spd": 42,
    "animal": "犀牛",
    "hometown": "新北市",
    "rarity": "SSR",
    "skill": "街坊守護",
    "desc": "編隊時，突襲造成的新台幣損失降低 60%；戰鬥時承受傷害降低 20%。"
  },
  {
    "id": 9,
    "name": "山豬道路施工員",
    "type": 1,
    "stars": 1,
    "art": "boar-builder",
    "atk": 150,
    "hp": 850,
    "def": 48,
    "spd": 62,
    "animal": "山豬",
    "hometown": "雲林縣",
    "rarity": "R",
    "skill": "拆除專業",
    "desc": "攻擊設施時附加攻擊力 40% 的真實傷害；一般戰鬥傷害提高 15%。"
  },
  {
    "id": 10,
    "name": "梅花鹿社區護理長",
    "type": 2,
    "stars": 2,
    "art": "deer-nurse",
    "atk": 88,
    "hp": 920,
    "def": 62,
    "spd": 92,
    "animal": "梅花鹿",
    "hometown": "宜蘭縣",
    "rarity": "SR",
    "skill": "急救時刻",
    "desc": "每回合治療血量比例最低的存活隊友；掛機體力恢復速度提高 50%。"
  },
  {
    "id": 11,
    "name": "水獺農用無人機技師",
    "type": 3,
    "stars": 1,
    "art": "otter-drone",
    "atk": 120,
    "hp": 790,
    "def": 48,
    "spd": 82,
    "animal": "水獺",
    "hometown": "嘉義縣",
    "rarity": "R",
    "skill": "智慧產線",
    "desc": "編隊時，掛機新台幣與社會歷練提高 25%，納稅額度提高 40%。"
  }
];
const KEY='new-formosa-v1';
const initial=()=>({city:null,gold:3600,premium:0,tickets:10,staminaPacks:3,version:2,xp:0,rep:150,energy:100,stage:1,wins:0,squad:[0,1,2],owned:{0:1,1:1,2:1},levels:{0:1,1:1,2:1},facility:[1,1,1],donated:0,lastClaim:Date.now(),energyAt:Date.now(),lastRaid:0});
let state;try{const data=JSON.parse(localStorage.getItem(KEY));state=data&&Array.isArray(data.squad)?{...initial(),...data}:initial();}catch{state=initial();}
if(state.version!==2 || state.gems!==undefined){state.tickets=Math.floor((state.gems||0)/160);state.premium=0;state.staminaPacks=3;state.version=2;delete state.gems;}
let selectedCity=state.city||'臺北市',cityRegion='all',starFilter=0,cardFilter=-1;
let page='home',filter=-1,battle=null,timer=null;const $=s=>document.querySelector(s);const fmt=n=>Math.floor(n).toLocaleString('en-US');
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch{toast('裝置無法儲存，關閉後進度可能遺失');}}
function toast(t){$('#toast').textContent=t;$('#toast').classList.add('show');clearTimeout(timer);timer=setTimeout(()=>$('#toast').classList.remove('show'),3000);}
function has(t){return state.squad.some(id=>CARDS[id].type===t);}function stats(id,level=state.levels[id]||1){const c=CARDS[id],m=1+(level-1)*.12;return {...c,atk:Math.round(c.atk*m),hp:Math.round(c.hp*m),def:Math.round(c.def*m),spd:c.spd};}
function power(){return state.squad.reduce((n,id)=>{const c=stats(id);return n+c.atk*3+c.hp+c.def*2+c.spd;},0);}
function settleEnergy(){const now=Date.now();state.energy=Math.max(0,Math.min(100,state.energy));if(state.energy>=100){state.energyAt=now;return;}const interval=(has(2)?200:300)*1000;const n=Math.floor(Math.max(0,now-state.energyAt)/interval);if(n>0){state.energy=Math.min(100,state.energy+n);state.energyAt+=n*interval;if(state.energy===100)state.energyAt=now;}}
function idle(){const minutes=Math.max(0,Math.min(480,(Date.now()-state.lastClaim)/60000));const mult=(1+(state.stage-1)*.08)*(1+(state.facility[1]-1)*.05);return {minutes,gold:Math.floor(minutes*12*mult*(has(3)?1.25:1)),xp:Math.floor(minutes*5*mult*(has(3)?1.25:1)),rep:Math.floor(minutes*2*mult*(has(3)?1.4:1))};}
function claim(silent=false){const r=idle();state.gold+=r.gold;state.xp+=r.xp;state.rep+=r.rep;state.lastClaim=Date.now();save();if(!silent)toast(`領取 ${r.gold} 新台幣、${r.xp} 社會歷練、${r.rep} 納稅`);return r;}
function icon(kind){const label={cash:'NT$',xp:'EXP',tax:'稅',gold:'G',energy:'ϟ',ticket:'券'};return '<span class="resource-icon '+kind+'" aria-hidden="true">'+label[kind]+'</span>';}
function header(){settleEnergy();$('#resources').innerHTML='<button class="resource" data-wallet="cash" aria-label="新台幣 '+fmt(state.gold)+'">'+icon('cash')+'<span>'+fmt(state.gold)+'</span></button><button class="resource premium" data-page="shop" aria-label="黃金 '+fmt(state.premium)+'，開啟儲值商店">'+icon('gold')+'<span>'+fmt(state.premium)+'</span><b>＋</b></button><button class="resource" data-action="stamina" aria-label="體力 '+state.energy+' / 100">'+icon('energy')+'<span>'+state.energy+'/100</span><b>＋</b></button>';$('#level').textContent=1+Math.floor((state.donated+state.stage*100)/500);}
const NAV=[['home','⌂','我的城市'],['cards','▣','職人圖鑑'],['gacha','✦','招募職人'],['pve','⚑','寶島冒險'],['pvp','⚔','競技場'],['war','♜','城市戰'],['shop','▰','黃金商店']];
function artStyle(c){return 'background-image:url(assets/'+c.art+'.png)';}
function card(id){const c=CARDS[id];return `<button class="card ${c.rarity.toLowerCase()}" data-card="${id}"><div class="art" style="${artStyle(c)}" role="img" aria-label="${c.animal}・${c.name}"></div><span class="rarity">${'★'.repeat(c.stars)}</span><span class="card-level">Lv.${state.levels[id]||1}</span><div class="card-info"><b>${c.name}</b><small><span>${TYPES[c.type]}</span><span>${state.squad.includes(id)?'出戰中':state.owned[id]?'已擁有':'未招募'}</span></small><div class="card-origin">${c.hometown} · ${c.animal}</div></div></button>`;}
function title(k,t,right=''){return `<div class="page-title"><div><div class="eyebrow">${k}</div><h1>${t}</h1></div>${right}</div>`;}
function home(){const r=idle();return `${title('MY HOMETOWN','城市日常',`<span class="badge">☀ 寶島好日子</span>`)}<section class="hero"><img src="assets/world.png" alt="Q版台灣海島城鎮，廟宇、山巒與海岸"><div class="hero-copy"><span class="badge">${state.city||'歡迎來到寶島'} · ${state.city?'新興城市 Lv.'+cityLevel():'22 縣市，選一個家'}</span><h2>${state.city?'早安，城市守護者！':'你的冒險，從家鄉開始。'}</h2><p>${state.city?'帶上你的職人夥伴，讓家鄉再熱鬧一點。':'召集在地職人，一起打造咱的第一線城市。'}</p><button class="btn gold" data-action="${state.city?'city':'choose'}">${state.city?'建設我的城市':'選擇我的城市'} <span>›</span></button> <button class="btn map-open" data-action="choose">探索寶島地圖</button></div><div class="hero-stamp">✦ ${state.city||'TAIWAN'} ・寶島生活進行中</div></section><div class="content-grid"><section><div class="section-heading"><h2>我的出戰小隊 <span class="muted">${state.squad.length} / 3</span></h2><button class="text-btn" data-page="cards">調整編隊 ›</button></div><div class="cards">${state.squad.map(card).join('')}${state.squad.length<3?'<button class="card empty" data-page="cards">＋<br>招募夥伴</button>':''}</div><div class="squad-foot"><span>三位職人，一起守護家鄉</span><span>隊伍戰力 <b>${fmt(power())}</b></span></div><div class="quick-row"><button class="quick" data-page="pve"><span class="icon">⚑</span><span><b>寶島冒險</b><small>第 ${state.stage} 關・在地歷練</small></span><span class="arrow">›</span></button><button class="quick" data-page="pvp"><span class="icon">⚔</span><span><b>職人競技場</b><small>3 對 3・切磋一下</small></span><span class="arrow">›</span></button></div></section><section class="idle-panel"><div class="panel"><div class="section-heading"><div class="idle-title"><span>♧</span><h3>職人努力中</h3></div><span class="badge">掛機收益</span></div><div class="muted">累積 ${Math.floor(r.minutes)} 分鐘 / 最多 8 小時</div><div class="idle-body"><div><b>${fmt(r.gold)}</b><small>${icon('cash')} 新台幣</small></div><div><b>${fmt(r.xp)}</b><small>${icon('xp')} 社會歷練</small></div><div><b>${fmt(r.rep)}</b><small>${icon('tax')} 納稅</small></div></div><button class="btn full" data-action="claim">領取掛機收益 <span>↗</span></button><div class="muted" style="text-align:center;margin-top:12px">離線也會持續累積資源</div></div><div class="weekend"><span class="badge">每週五・六・日</span><h3>為家鄉，並肩而戰。</h3><p>城市榮耀爭奪戰，集結你的在地力量。</p><button class="text-btn" data-page="war">查看城市戰籌備所 ›</button></div></section></div><div class="wallet-strip"><span>${icon('xp')} 社會歷練 <b>${fmt(state.xp)}</b></span><span>${icon('tax')} 納稅額度 <b>${fmt(state.rep)}</b></span><button data-action="stamina">${icon('energy')} 體力恢復 <b data-energy-clock>${energyClock()}</b></button></div><div class="notice">ⓘ 單機試玩：競技對手與突襲為模擬事件，城市戰尚未開放。</div>`;}
function cityLevel(){return (CITY_INFO.find(c=>c.name===state.city)?.level||1)+Math.floor(state.donated/300);}
function collection(){return `${title('LOCAL HEROES','職人圖鑑',`<span class="badge">已招募 ${Object.keys(state.owned).length} / ${CARDS.length}</span>`)}<p class="muted">12 位動物職人，每種職業各有 1、2、3 星。點選查看獨立卡面、四維能力與被動。出戰與掛機共用最多三張卡，同類型掛機加成不疊加。</p><div class="filter"><button data-filter="-1" class="${filter===-1?'active':''}">全部職人</button>${TYPES.map((t,i)=>`<button data-filter="${i}" class="${filter===i?'active':''}">${t}</button>`).join('')}</div><div class="filter star-filter"><span>星等</span>${[0,1,2,3].map(n=>`<button data-star="${n}" class="${starFilter===n?'active':''}">${n?'★'.repeat(n):'全部'}</button>`).join('')}</div><div class="cards collection">${CARDS.filter(c=>(filter===-1||c.type===filter)&&(!starFilter||c.stars===starFilter)).map(c=>card(c.id)).join('')}</div>`;}
function gacha(){return `${title('RECRUITMENT','寶島動物職人招募',`<span class="badge">招募券 ${state.tickets} 張</span>`)}<div class="gacha"><span class="badge">12 位在地職人 · 4 種職業</span><h2>毛茸茸的夥伴，也有大大的力量。</h2><p class="muted">警員、拆除隊、醫護與科技職人，等你一起出發。</p><div class="cards">${[8,5,3].map(card).join('')}</div><div class="actions"><button class="btn light" data-pull="1" ${state.tickets<1?'disabled':''}>${icon('ticket')} 招募 1 次 · 1 張券</button><button class="btn gold" data-pull="10" ${state.tickets<10?'disabled':''}>${icon('ticket')} 招募 10 次 · 10 張券</button></div><p class="muted">★ 70% · ★★ 25% · ★★★ 5%｜無保底<br>同星等每張卡等機率；重複職人轉為 80 新台幣。<br>挑戰勝利可得招募券；黃金只能透過正式儲值取得。</p><button class="text-btn" data-page="shop">前往黃金商店 ›</button></div>`;}
function city(){return `${title('CITY DEVELOPMENT',state.city||'選擇你的城市',`<span class="badge">新興城市 Lv.${cityLevel()}</span>`)}<section class="city-top"><h2>一起，讓家鄉長大。</h2><p>${state.city?`城市居民 ${fmt(cityFacts(state.city).people)} 人 · 示範資料`:"尚未加入城市"}</p><button class="btn light" data-action="choose">查看寶島地圖</button><p>納稅 ${fmt(state.rep)} · 累計貢獻 ${fmt(state.donated)}</p><button class="btn gold" data-action="donate" ${state.rep<100?'disabled':''}>繳納 100 額度</button><p class="muted" style="color:#d5e6ce">每累積 300 貢獻，城市等級提升 1。此為個人城市建設試玩。</p></section><div class="facilities">${['城防指揮所','城市產業園','守衛醫療站'].map((n,i)=>`<section class="panel facility"><div class="big-icon">${['♜','⚙','✚'][i]}</div><h3>${n} Lv.${state.facility[i]}</h3><p>${['每升一級，突襲新台幣損失額外降低 5%，最高 25%。','每升一級，掛機全部資源產量增加 5%。','每升一級，輔助型職人戰鬥治療量增加 5%。'][i]}</p><button class="btn light full" data-build="${i}" ${state.gold<state.facility[i]*500?'disabled':''}>升級 · ${fmt(state.facility[i]*500)} 新台幣</button></section>`).join('')}</div><section class="panel" style="margin-top:20px"><h3>平日防守演練</h3><p class="muted">模擬敵方突襲搶奪目前新台幣的 5%。防禦職人與城防設施可減少損失；不影響其他玩家。演練間隔 60 秒。</p><button class="btn light" data-action="raid">模擬一次突襲</button></section>`;}
function combatPage(mode){const pve=mode==='pve';if(battle&&battle.mode===mode)return battleView();return `${title(pve?'ISLAND ADVENTURE':'ARENA',pve?'寶島冒險':'職人競技場',`<span class="badge">${pve?'第 '+state.stage+' 關':'累計 '+state.wins+' 勝'}</span>`)}<section class="battle-stage"><div class="round">${pve?'在地歷練 · 隨關卡逐步提升難度':'3 V 3 · 模擬對手'}</div><div class="teams"><div>${state.squad.map(id=>`<div class="battle-unit">${CARDS[id].name}<div class="progress"><i style="width:100%"></i></div>Lv.${state.levels[id]}</div>`).join('')}</div><div class="versus">VS</div><div>${(pve?['街區試煉守衛','路障防禦設施','街區試煉隊長']:[CARDS[4].name,CARDS[9].name,CARDS[6].name]).map(n=>`<div class="battle-unit enemy">${n}<div class="progress"><i style="width:100%"></i></div>${pve?'關卡 '+state.stage:'演練對手'}</div>`).join('')}</div></div></section><section class="panel"><h3>${pve?'出發，走遍寶島每個角落。':'切磋職人默契，爭取勝利獎勵。'}</h3><p class="muted">依速度依序行動，自動戰鬥最多 15 回合。回合結束仍未分勝負則判和局，不發勝利獎勵。${pve?'勝利獲得新台幣、社會歷練、納稅，並提高掛機基礎收益。':'勝利獲得 250 新台幣、1 張招募券、30 納稅。'}</p><button class="btn gold" data-fight="${mode}" ${state.energy<10||state.squad.length!==3?'disabled':''}>開始挑戰 · ϟ 10</button><p class="muted">需要編滿 3 位職人 · 體力每 ${has(2)?'3 分 20 秒':'5 分鐘'}恢復 1 點</p></section>`;}
function war(){return `${title('CITY WAR','城市戰籌備所',`<span class="badge">獨立系統 · 尚未開放</span>`)}<section class="war-banner"><span class="badge">FRIDAY — SUNDAY</span><h2>這次，為自己的城市而戰。</h2><p>從街頭夥伴到全城集結。週末大型城市戰將以獨立系統開發，與個人冒險、競技場分開結算。</p><span class="badge">目前不開放報名、排名與獎勵領取</span></section><div class="war-steps">${[['週五｜集結','城市成員組隊，配置防禦職人與城市設施。'],['週六｜攻防','進攻隊破壞城門，輔助職人救援守衛，科技職人支援後勤。'],['週日｜結算','預計依城市戰績授予「一線城市」等稱號與次週加成。']].map(([a,b])=>`<section class="panel"><h3>${a}</h3><p class="muted">${b}</p></section>`).join('')}</div><p class="muted">以上為玩法草案，賽程、配對、公平性、稱號加成與獎勵數值尚未定案。</p>`;}
function render(){header();$('#nav').innerHTML=NAV.map(([id,icon,name])=>`<button data-page="${id}" class="${page===id?'active':''}"><span>${icon}</span>${name}${id==='war'?'<em>籌備中</em>':''}</button>`).join('');$('#main').innerHTML=page==='home'?home():page==='cards'?collection():page==='gacha'?gacha():page==='city'?city():page==='war'?war():page==='shop'?shop():combatPage(page);}
function modal(html){$('#modal').classList.remove('map-dialog');$('#modalBody').innerHTML=html;if(!$('#modal').open)$('#modal').showModal();}
function choose(){selectedCity=state.city||selectedCity;cityRegion='all';mapModal();}
function detail(id){const c=stats(id),owned=!!state.owned[id],lv=state.levels[id]||1;modal(`<h2>${c.name}</h2><p class="dialog-subtitle">${'★'.repeat(c.stars)} · ${TYPES[c.type]} · ${c.animal} · Lv.${lv}</p><div class="detail"><div class="art" style="${artStyle(c)}" role="img" aria-label="${c.name}"></div><div><div class="stats">${[['攻擊',c.atk],['生命',c.hp],['防禦',c.def],['速度',c.spd]].map(([n,v])=>`<div class="stat">${n}<b>${v}</b></div>`).join('')}</div><div class="passive"><b>${c.skill}</b><br>${c.desc}</div></div></div><div class="actions">${owned?`<button class="btn" data-equip="${id}">${state.squad.includes(id)?'移出編隊':'加入編隊'}</button><button class="btn gold" data-upgrade="${id}" ${lv>=30||state.gold<lv*200||state.xp<lv*50?'disabled':''}>${lv>=30?'已達 Lv.30':'升級 · '+lv*200+' 新台幣 / '+lv*50+' 社會歷練'}</button>`:'<button class="btn gold" data-goto-gacha="1">前往招募</button>'}</div>`);}
function pull(n){if(![1,10].includes(n)||state.tickets<n)return;state.tickets-=n;const draws=[];let duplicates=0;for(let i=0;i<n;i++){const roll=Math.random();const rarity=roll<.05?'SSR':roll<.3?'SR':'R';const pool=CARDS.filter(c=>c.rarity===rarity);const c=pool[Math.floor(Math.random()*pool.length)];draws.push(c);if(state.owned[c.id]){state.gold+=80;duplicates++;}else{state.owned[c.id]=1;state.levels[c.id]=1;}}save();render();modal(`<h2>新夥伴，來報到！</h2><p class="dialog-subtitle">${n} 次招募完成${duplicates?' · '+duplicates+' 張重複卡轉為 '+duplicates*80+' 新台幣':''}</p><div class="cards ${n>1?'collection':''}" style="margin-top:20px">${draws.map(c=>card(c.id)).join('')}</div>`);}
function startBattle(mode){if(battle&&!battle.done)return toast('目前戰鬥尚未結束');settleEnergy();if(state.energy<10)return staminaModal();if(state.squad.length!==3)return toast('請先編滿三位職人');state.energy-=10;save();const stage=mode==='pve'?state.stage:Math.max(1,Math.floor(state.wins/2)+1);const enemyIds=mode==='pve'?[0,9,11]:[4,9,6];const units=(ids,enemy)=>ids.map((id,i)=>{const c=stats(id,enemy?stage:(state.levels[id]||1));const m=enemy?(mode==='pve'?.66:.85):1;return {...c,name:enemy&&mode==='pve'?['街區試煉守衛','路障防禦設施','街區試煉隊長'][i]:c.name,hp:Math.floor(c.hp*m),maxHp:Math.floor(c.hp*m),atk:Math.floor(c.atk*m),side:enemy?1:0,facility:enemy&&mode==='pve'&&i===1};});battle={mode,round:0,units:[...units(state.squad,false),...units(enemyIds,true)],log:[],done:false};page=mode;render();setTimeout(turn,600);}
function turn(){if(!battle||battle.done)return;battle.round++;const b=battle;for(const u of [...b.units].sort((a,z)=>z.spd-a.spd)){if(u.hp<=0)continue;const targets=b.units.filter(t=>t.side!==u.side&&t.hp>0);if(!targets.length)break;if(u.type===2){const target=b.units.filter(t=>t.side===u.side&&t.hp>0).sort((a,z)=>a.hp/a.maxHp-z.hp/z.maxHp)[0];const heal=Math.min(target.maxHp-target.hp,Math.floor(u.atk*1.2*(u.side===0?1+(state.facility[2]-1)*.05:1)));target.hp+=heal;if(heal)b.log.push(`${u.name} 治療 ${target.name} +${heal}`);}
const target=targets[0];let damage=Math.max(15,Math.floor(u.atk*(u.type===1?1.15:1)-target.def*.45));if(target.type===0)damage=Math.floor(damage*.8);if(u.type===1&&target.facility)damage+=Math.floor(u.atk*.4);target.hp=Math.max(0,target.hp-damage);b.log.push(`${u.name} → ${target.name} −${damage}${target.hp===0?'，退場':''}`);}
const ally=b.units.some(u=>u.side===0&&u.hp>0),enemy=b.units.some(u=>u.side===1&&u.hp>0);if(!ally||!enemy||b.round>=15){b.done=true;b.result=!enemy&&ally?'勝利':!ally?'落敗':'和局';if(b.result==='勝利'){const pve=b.mode==='pve';const gold=pve?200+state.stage*60:250,rep=pve?30+state.stage*5:30;state.gold+=gold;state.rep+=rep;state.xp+=pve?100:50;state.tickets+=1;if(pve){claim(true);state.stage++;}else state.wins++;b.reward=`獲得 ${gold} 新台幣、${pve?100:50} 社會歷練、${rep} 納稅、1 張招募券`;save();}else b.reward='未獲得勝利獎勵。可升級職人或調整陣容後再試。';}
if(page===b.mode)render();if(!b.done)setTimeout(turn,650);}
function battleView(){const b=battle;return `${title(b.mode==='pve'?'ISLAND ADVENTURE':'ARENA',b.done?`戰鬥${b.result}`:'職人交戰中')}<section class="battle-stage"><div class="round">ROUND ${b.round} / 15</div><div class="teams">${[0,1].map((side,i)=>`${i?'<div class="versus">VS</div>':''}<div>${b.units.filter(u=>u.side===side).map(u=>`<div class="battle-unit ${side?'enemy':''}" style="opacity:${u.hp?1:.4}">${u.name}<div class="progress"><i style="width:${u.hp/u.maxHp*100}%"></i></div>${u.hp} / ${u.maxHp}</div>`).join('')}</div>`).join('')}</div></section>${b.done?`<section class="panel"><h3>${b.result==='勝利'?'漂亮的一戰！':'下次再一起加油。'}</h3><p>${b.reward}</p><button class="btn gold" data-action="battleback">返回挑戰</button></section>`:''}<h3 style="margin:20px 0 12px">戰鬥紀錄</h3><div class="log" aria-live="polite">${b.log.slice(-14).map(l=>`<p>${l}</p>`).join('')||'職人們準備就緒…'}</div>`;}
document.addEventListener('click',e=>{const el=e.target.closest('button');if(!el)return;const d=el.dataset;if(d.wallet){modal('<h2>'+icon('cash')+' 新台幣</h2><p>遊戲內日常通貨，用於升級職人與建設城市。可從冒險、競技與掛機取得。</p><p class="muted">此為遊戲虛擬資源，不等同可提領的真實貨幣。</p>');return;}if(d.star!==undefined){starFilter=+d.star;render();return;}if(d.region){cityRegion=d.region;mapModal();return;}if(d.mapCity){selectedCity=d.mapCity;mapModal(true);return;}if(d.joinCity){joinCity(d.joinCity);return;}if(d.pack!==undefined){packDetail(+d.pack);return;}if(d.exchange!==undefined){exchange(+d.exchange);return;}if(d.page){page=d.page;render();window.scrollTo(0,0);}if(d.card!==undefined)detail(+d.card);if(d.filter!==undefined){filter=+d.filter;render();}if(d.gotoGacha){$('#modal').close();page='gacha';render();}if(d.equip!==undefined){const id=+d.equip;if(!state.owned[id])return;if(!state.squad.includes(id)&&state.squad.length>=3)return toast('隊伍已滿，請先移出一位職人');claim(true);settleEnergy();state.energyAt=Date.now();state.squad=state.squad.includes(id)?state.squad.filter(x=>x!==id):[...state.squad,id];save();render();detail(id);}if(d.upgrade!==undefined){const id=+d.upgrade,lv=state.levels[id];if(!lv||lv>=30||state.gold<lv*200||state.xp<lv*50)return;state.gold-=lv*200;state.xp-=lv*50;state.levels[id]++;save();render();detail(id);toast('職人升級了！');}if(d.pull)pull(+d.pull);if(d.fight)startBattle(d.fight);if(d.build!==undefined){const i=+d.build,cost=state.facility[i]*500;if(state.gold<cost)return;claim(true);state.gold-=cost;state.facility[i]++;save();render();toast('城市設施升級完成');}if(d.action){switch(d.action){case 'stamina':staminaModal();break;case 'use-stamina':useStamina();break;case 'choose':choose();break;case 'city':page='city';render();break;case 'claim':claim();render();break;case 'donate':if(!state.city)return choose();if(state.rep<100)return;state.rep-=100;state.donated+=100;save();render();toast('謝謝你的貢獻，城市又向前一步！');break;case 'raid':if(Date.now()-state.lastRaid<60000)return toast('演練準備中，請稍後再試');const loss=Math.floor(state.gold*.05*(has(0)?.4:1)*(1-Math.min(.25,(state.facility[0]-1)*.05)));state.gold-=loss;state.lastRaid=Date.now();save();render();toast(`突襲演練結束，損失 ${loss} 新台幣${has(0)?'，防禦職人已減損 60%':''}`);break;case 'battleback':battle=null;render();break;}}});
$('.close').onclick=()=>$('#modal').close();$('#help').onclick=()=>modal('<h2>寶島生活指南</h2><p>① 選擇城市，三位初始職人免費加入。<br>② 挑戰 PVE，提高掛機產量；競技場勝利可獲招募券。<br>③ 招募職人，最多編入三位；新台幣與社會歷練用於升級。<br>④ 繳納納稅提升城市等級，花新台幣升級設施。</p><p class="muted">離線收益最多 8 小時。此版本是單機原型，資源與戰鬥在此裝置結算；非真人配對、非跨裝置帳號。12 位職人各有獨立動物卡面。體力上限 100，挑戰消耗 10；免費補給包每份恢復 30，避免溢出，體力超過 70 時不可使用。黃金只能儲值取得，試玩尚未接入金流。週末城市戰另行開發。</p>');$('#profile').onclick=()=>modal(`<h2>寶島新居民</h2><p>家鄉：${state.city||'尚未選擇'}<br>納稅：${state.rep}<br>可用社會歷練：${state.xp}<br>競技勝場：${state.wins}</p><p class="muted">${window.GAME_CONFIG.liffId?'LINE 連接已設定':'訪客試玩 · LINE 登入尚未設定'}</p>`);
save();render();setInterval(()=>{settleEnergy();refreshEnergyUI();const clock=document.querySelector('[data-energy-clock]');if(clock)clock.textContent=energyClock();const timerNode=document.querySelector('[data-stamina-time]');if(timerNode)timerNode.textContent=energyClock();},1000);setInterval(()=>{header();save();if(page==='home'&&!$('#modal').open)render();},10000);
async function initLiff(){if(!window.GAME_CONFIG.liffId)return;try{await new Promise((resolve,reject)=>{const s=document.createElement('script');s.src='https://static.line-scdn.net/liff/edge/2/sdk.js';s.onload=resolve;s.onerror=reject;document.head.appendChild(s);});await liff.init({liffId:window.GAME_CONFIG.liffId});if(liff.isLoggedIn()){const profile=await liff.getProfile();$('#playerName').textContent=profile.displayName;}else{$('#profile').onclick=()=>liff.login();}}catch{toast('LINE 連線失敗，仍可使用訪客試玩');}}initLiff();