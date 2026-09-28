'use strict';
// Illustrated callouts use approximate positions; these are gameplay fixtures, not live census data.
const CITY_INFO=[
['臺北市',72,15,'north',1248,18,'都會之心','繁華街區裡，總有人默默守護每個日常。'],
['新北市',80,22,'north',1652,16,'山海相遇','從山城到海岸，串起每一份在地力量。'],
['桃園市',61,23,'north',986,14,'航空門戶','新的夥伴，從這裡向世界出發。'],
['臺中市',46,43,'central',1320,17,'職人之城','機械與匠心，讓家鄉持續前進。'],
['臺南市',30,70,'south',1158,16,'府城日常','廟埕、老街與暖心職人，一起守護古都。'],
['高雄市',36,77,'south',1436,18,'港都集結','海風與港灣，是我們並肩奮鬥的起點。'],
['基隆市',88,10,'north',438,10,'雨港守望','港口燈火，照亮每位晚歸的夥伴。'],
['新竹市',53,29,'north',682,13,'科技聚落','用小小晶片，創造大大的可能。'],
['嘉義市',34,64,'south',376,9,'木都小隊','小城裡的默契，是最可靠的守護。'],
['新竹縣',65,33,'north',592,12,'客庄新力','群山與客庄之間，創意從不缺席。'],
['苗栗縣',52,37,'central',468,10,'山城職人','勤奮與團結，是山城的共同語言。'],
['彰化縣',39,50,'central',804,13,'工藝之鄉','每一份細膩手藝，都能成為城市力量。'],
['南投縣',57,51,'central',532,11,'山林守護','在山巒與湖泊間，守護一片好風景。'],
['雲林縣',35,57,'central',486,10,'農業新芽','土地上的努力，化為城市的養分。'],
['嘉義縣',48,63,'south',512,11,'山海嘉園','從農田到高山，職人一路相伴。'],
['屏東縣',50,86,'south',612,12,'南國日光','太陽照耀的南方，總有熱情好夥伴。'],
['宜蘭縣',87,32,'east',428,10,'蘭陽好日','平原微風裡，慢慢長出城市的未來。'],
['花蓮縣',81,49,'east',384,9,'山海守護','背靠高山、面向大海，勇敢前行。'],
['臺東縣',70,70,'east',316,8,'東岸曙光','迎接第一道曙光，也迎接新的冒險。'],
['澎湖縣',12,48,'islands',218,7,'海島聯盟','島嶼之間的距離，因團結而靠近。'],
['金門縣',13,26,'islands',194,7,'風獅守望','巷口的守護，從今天開始延續。'],
['連江縣',17,10,'islands',126,6,'星海前哨','在海風與星光裡，點亮自己的家。']
].map(([name,x,y,region,people,level,title,desc])=>({name,x,y,region,people,level,title,desc}));
const REGION_LABELS={all:'全島',north:'北部',central:'中部',south:'南部',east:'東部',islands:'離島'};
function cityFacts(name){const c=CITY_INFO.find(c=>c.name===name)||CITY_INFO[0];const own=state.city===name;return {...c,people:c.people+(own?1:0),level:c.level+(own?Math.floor(state.donated/300):0),facility:own?state.facility:[Math.max(1,Math.floor(c.level/4)),Math.max(1,Math.floor(c.level/5)),Math.max(1,Math.floor(c.level/6))]};}
function mapModal(keepFocus=false){const c=cityFacts(selectedCity);const focused=keepFocus?selectedCity:null;const scroll=$('#modal').scrollTop;modal(`<div class="eyebrow">FIND YOUR HOMETOWN</div><h2>這座島，有你的歸屬。</h2><p class="dialog-subtitle">點選地圖上的縣市，認識你的未來隊友。</p><div class="map-layout"><section class="map-side"><div class="filter region-filter" aria-label="地圖區域">${Object.entries(REGION_LABELS).map(([id,n])=>`<button data-region="${id}" class="${cityRegion===id?'active':''}" aria-pressed="${cityRegion===id}">${n}</button>`).join('')}</div><div class="taiwan-map"><img src="assets/taiwan-map.png" alt="日系Q版台灣遊戲地圖，包含本島與離島"><span class="map-compass">N<br>↑</span>${CITY_INFO.filter(x=>cityRegion==='all'||x.region===cityRegion).map(x=>`<button class="map-pin ${x.name===selectedCity?'selected':''} ${x.name===state.city?'hometown':''}" data-map-city="${x.name}" style="left:${x.x}%;top:${x.y}%" aria-label="查看${x.name}城市資訊" aria-pressed="${x.name===selectedCity}"><span class="pin-dot"></span><span>${x.name}</span></button>`).join('')}<span class="map-caption">Q 版示意地圖 · 點位為遊戲導覽位置</span></div></section><section class="city-preview" aria-live="polite"><span class="badge">${REGION_LABELS[c.region]} · ${c.title}</span><h3>${c.name}</h3><p>${c.desc}</p><div class="city-metrics"><div><span>城市居民</span><b>${fmt(c.people)}<small> 人</small></b></div><div><span>城市等級</span><b>Lv.${c.level}</b></div></div><div class="fixture-note">示範城市資料 · 非即時線上人數</div><div class="city-facilities">${['城防指揮所','城市產業園','守衛醫療站'].map((n,i)=>`<div><span>${n}</span><b>Lv.${c.facility[i]}</b></div>`).join('')}</div><div class="city-perk">起始資源相同，選擇喜歡的家鄉。城市等級與人數為介面示範，尚未連接多人資料。</div><button class="btn gold full" data-join-city="${c.name}" ${state.city?'disabled':''}>${state.city===c.name?'你目前的家鄉':state.city?'已加入 '+state.city:'加入 '+c.name}</button>${state.city?'<p class="muted">本存檔已選定城市，仍可探索其他縣市。</p>':'<p class="muted">確認加入後，本存檔固定於該城市。</p>'}</section></div>`);$('#modal').classList.add('map-dialog');$('#modal').scrollTop=scroll;if(focused){const node=document.querySelector(`[data-map-city="${focused}"]`);if(node)node.focus({preventScroll:true});if(window.innerWidth<700)document.querySelector('.city-preview')?.scrollIntoView({behavior:'smooth',block:'nearest'});}}
function joinCity(name){if(state.city||!CITY_INFO.some(c=>c.name===name))return;state.city=name;save();$('#modal').close();render();toast(`歡迎加入${name}，一起守護家鄉！`);}
