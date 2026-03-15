/* ====================================================
   DATA
==================================================== */
const BASE = [
  { id:'r1', name:'Vegetable Salad', category:'Vegetarian',
    image:'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80',
    prepTime:10, difficulty:'Easy', calories:180, protein:4, carbs:22, fat:9,
    ingredients:['2 Tomatoes','1 Cucumber','2 Carrots','2 tbsp Olive Oil','Salt & Pepper','Fresh Lemon Juice'],
    steps:['Wash all vegetables under cold water.','Dice tomatoes and cucumber.','Peel and julienne carrots.','Combine in a large bowl.','Drizzle with olive oil and lemon juice.','Season, toss and serve.']},
  { id:'r2', name:'Grilled Chicken', category:'High Protein',
    image:'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80',
    prepTime:25, difficulty:'Medium', calories:320, protein:46, carbs:2, fat:14,
    ingredients:['2 Chicken Breasts','1 tsp Salt','1 tsp Black Pepper','2 tbsp Olive Oil','1 tsp Garlic Powder','Fresh Herbs'],
    steps:['Pat chicken dry.','Rub with oil, salt, pepper, garlic powder.','Heat grill pan until smoking.','Grill 6–7 mins each side.','Rest 5 minutes before slicing.','Garnish with herbs and serve.']},
  { id:'r3', name:'Avocado Buddha Bowl', category:'Vegan',
    image:'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80',
    prepTime:20, difficulty:'Easy', calories:420, protein:14, carbs:52, fat:19,
    ingredients:['1 Ripe Avocado','1 cup Quinoa','1 cup Chickpeas','Baby Spinach','Cherry Tomatoes','Tahini Dressing'],
    steps:['Cook quinoa and let cool.','Roast chickpeas at 200°C for 20 mins.','Slice avocado into fans.','Arrange quinoa as the base.','Top with avocado, chickpeas, spinach.','Drizzle with tahini and serve.']},
  { id:'r4', name:'Keto Egg Muffins', category:'Keto',
    image:'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80',
    prepTime:30, difficulty:'Easy', calories:210, protein:15, carbs:3, fat:16,
    ingredients:['6 Eggs','100g Cheddar Cheese','50g Bacon Bits','1 Bell Pepper','1 tsp Butter','Salt & Pepper'],
    steps:['Preheat oven to 180°C.','Whisk eggs, season.','Dice pepper, mix in.','Add cheese & bacon.','Fill muffin tin ¾ full.','Bake 18–22 mins until golden.']},
  { id:'r5', name:'Lentil Soup', category:'Vegan',
    image:'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80',
    prepTime:35, difficulty:'Easy', calories:265, protein:13, carbs:44, fat:4,
    ingredients:['1 cup Red Lentils','1 Onion','3 Garlic Cloves','1 can Tomatoes','1 tsp Cumin','Vegetable Stock'],
    steps:['Sauté onion until golden.','Add garlic & cumin.','Add lentils, tomatoes, stock.','Simmer 25 minutes.','Blend partially.','Season and serve.']},
  { id:'r6', name:'Caprese Skewers', category:'Vegetarian',
    image:'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80',
    prepTime:12, difficulty:'Easy', calories:155, protein:9, carbs:5, fat:11,
    ingredients:['Fresh Mozzarella','Cherry Tomatoes','Fresh Basil','Balsamic Glaze','Olive Oil','Sea Salt'],
    steps:['Thread mozzarella, basil, tomato onto skewers.','Arrange on platter.','Drizzle olive oil and balsamic.','Season with sea salt.','Serve immediately.']},
  { id:'r7', name:'Salmon & Asparagus', category:'High Protein',
    image:'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80',
    prepTime:22, difficulty:'Medium', calories:380, protein:42, carbs:8, fat:18,
    ingredients:['2 Salmon Fillets','1 bunch Asparagus','2 tbsp Olive Oil','Lemon','Dill','Salt & Pepper'],
    steps:['Preheat oven to 200°C.','Place salmon & asparagus on baking sheet.','Drizzle with oil & lemon.','Season with dill.','Bake 15–18 mins.','Garnish with lemon slices.']},
  { id:'r8', name:'Keto Cauliflower Rice', category:'Keto',
    image:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
    prepTime:15, difficulty:'Easy', calories:145, protein:5, carbs:9, fat:10,
    ingredients:['1 head Cauliflower','2 tbsp Butter','3 Garlic Cloves','Parsley','Salt & Pepper','Parmesan'],
    steps:['Pulse cauliflower until rice-like.','Melt butter in skillet.','Sauté garlic 1 min.','Add cauliflower, cook 5–7 mins.','Season with parsley.','Top with parmesan and serve.']},
  { id:'r9', name:'Protein Smoothie Bowl', category:'High Protein',
    image:'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=600&q=80',
    prepTime:8, difficulty:'Easy', calories:340, protein:28, carbs:36, fat:8,
    ingredients:['1 scoop Protein Powder','1 Banana','1 cup Greek Yogurt','Almond Milk','Granola','Mixed Berries'],
    steps:['Blend protein, banana, yogurt, milk until thick.','Pour into bowl.','Top with granola & berries.','Add honey if desired.','Serve immediately.']},
  { id:'r10', name:'Stuffed Bell Peppers', category:'Vegetarian',
    image:'https://images.unsplash.com/photo-1432139509613-5c4255815697?w=600&q=80',
    prepTime:45, difficulty:'Medium', calories:295, protein:11, carbs:38, fat:12,
    ingredients:['4 Bell Peppers','1 cup Brown Rice','1 can Black Beans','Corn','Cumin','Mozzarella'],
    steps:['Preheat oven 190°C.','Remove pepper tops & seeds.','Mix rice, beans, corn, cumin.','Stuff peppers, top with mozzarella.','Bake 30–35 mins.','Serve hot.']},
  { id:'r11', name:'Tofu Stir-fry', category:'Vegan',
    image:'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&q=80',
    prepTime:20, difficulty:'Medium', calories:230, protein:16, carbs:18, fat:10,
    ingredients:['300g Firm Tofu','Mixed Vegetables','Soy Sauce','Sesame Oil','Ginger','Garlic'],
    steps:['Press tofu dry, cube.','Heat sesame oil in wok.','Fry tofu until golden.','Add veggies, ginger, garlic.','Stir-fry 4 mins.','Finish with soy sauce, serve.']},
  { id:'r12', name:'Avocado Toast', category:'Vegetarian',
    image:'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=600&q=80',
    prepTime:8, difficulty:'Easy', calories:220, protein:6, carbs:26, fat:13,
    ingredients:['2 Slices Sourdough','1 Ripe Avocado','Cherry Tomatoes','Red Pepper Flakes','Lemon','Salt'],
    steps:['Toast sourdough until golden.','Mash avocado with lemon & salt.','Spread on toast.','Top with cherry tomatoes.','Sprinkle red pepper flakes.','Serve immediately.']}
];

/* ====================================================
   STATE
==================================================== */
let recipes = [];
let currentUser = null;
let prevView = 'home';
let currentHeroSlide = 0;
let heroTimer = null;
let viewMode = 'grid';
let currentSlotKey = null;
let activeFilterCat = 'All';

const S = {
  get:(k)=>{try{return JSON.parse(localStorage.getItem(k));}catch{return null;}},
  set:(k,v)=>localStorage.setItem(k,JSON.stringify(v)),
  del:(k)=>localStorage.removeItem(k)
};

/* ====================================================
   INIT
==================================================== */
document.addEventListener('DOMContentLoaded', ()=>{
  // Load state
  const custom = S.get('nf_custom') || [];
  recipes = [...BASE, ...custom];
  currentUser = S.get('nf_user');
  if(S.get('nf_dark')){
    document.documentElement.setAttribute('data-theme','dark');
    document.getElementById('darkBtn').textContent = '☀️';
  }
  updateUserUI();
  updateFavBadge();
  updateCategoryCounts();
  initHero();

  // Cursor glow
  document.addEventListener('mousemove', e=>{
    const g = document.getElementById('cursorGlow');
    g.style.left = e.clientX+'px';
    g.style.top  = e.clientY+'px';
  });

  // Dismiss loading screen with style
  setTimeout(()=>{
    document.getElementById('loadScreen').classList.add('hide');
    // Show skeletons briefly then real grid
    setTimeout(()=>{
      document.getElementById('skeletonGrid').style.display='none';
      document.getElementById('recipeGrid').style.display='';
      applyFilters();
    }, 900);
  }, 1800);

  // Navbar scroll
  window.addEventListener('scroll',()=>{
    const nb = document.getElementById('navbar');
    nb.classList.toggle('scrolled', window.scrollY > 10);
  });

  // Close flyouts on outside click
  document.addEventListener('click', e=>{
    const uw = document.getElementById('userWrap');
    if(!uw.contains(e.target)) closeUF();
  });

  // Build meal planner grid
  renderMealPlan();
  renderHeroDots();
});

/* ====================================================
   HERO CAROUSEL
==================================================== */
function initHero(){
  startHeroTimer();
  document.querySelectorAll('.hero-slide-bg').forEach(bg=>{
    // preload parallax
  });
}
function renderHeroDots(){
  const slides = document.querySelectorAll('.hero-slide');
  const c = document.getElementById('heroDots');
  c.innerHTML='';
  slides.forEach((_,i)=>{
    const d=document.createElement('div');
    d.className='hero-dot'+(i===0?' active':'');
    d.onclick=()=>goToSlide(i);
    c.appendChild(d);
  });
}
function goToSlide(i){
  const slides = document.querySelectorAll('.hero-slide');
  const dots   = document.querySelectorAll('.hero-dot');
  slides[currentHeroSlide].classList.remove('active');
  dots[currentHeroSlide].classList.remove('active');
  currentHeroSlide = (i + slides.length) % slides.length;
  document.getElementById('heroTrack').style.transform=`translateX(-${currentHeroSlide*100}%)`;
  slides[currentHeroSlide].classList.add('active');
  dots[currentHeroSlide].classList.add('active');
  // Re-animate content
  const content = slides[currentHeroSlide].querySelector('.hero-slide-content');
  if(content){ content.style.animation='none'; void content.offsetWidth; content.style.animation=''; }
}
function shiftHero(dir){ clearTimeout(heroTimer); goToSlide(currentHeroSlide+dir); startHeroTimer(); }
function startHeroTimer(){ heroTimer=setTimeout(()=>{goToSlide(currentHeroSlide+1);startHeroTimer();},5000); }

/* ====================================================
   FILTERING
==================================================== */
function getFilteredRecipes(){
  const cats   = [...document.querySelectorAll('input[name="cat"]:checked')].map(i=>i.value);
  const times  = [...document.querySelectorAll('input[name="time"]:checked')].map(i=>+i.value);
  const diffs  = [...document.querySelectorAll('input[name="diff"]:checked')].map(i=>i.value);
  const cals   = [...document.querySelectorAll('input[name="cal"]:checked')].map(i=>+i.value);
  const ing    = (document.getElementById('ingSearch')?.value||'').trim().toLowerCase();
  const search = document.getElementById('globalSearch').value.trim().toLowerCase();
  const minRating = +([...document.querySelectorAll('input[name="rating"]')].find(r=>r.checked)?.value||0);
  const sort   = document.getElementById('sortSel')?.value||'default';

  let list = recipes.filter(r=>{
    if(activeFilterCat !== 'All' && r.category !== activeFilterCat) return false;
    if(cats.length && !cats.includes(r.category)) return false;
    if(times.length && !times.some(t=>r.prepTime<=t)) return false;
    if(diffs.length && !diffs.includes(r.difficulty)) return false;
    if(cals.length && !cals.some(c=>r.calories<=c)) return false;
    if(ing && !r.ingredients.some(i=>i.toLowerCase().includes(ing))) return false;
    if(search && !r.name.toLowerCase().includes(search) && !r.category.toLowerCase().includes(search) && !r.ingredients.some(i=>i.toLowerCase().includes(search))) return false;
    if(minRating>0 && getAvgRating(r.id)<minRating) return false;
    return true;
  });

  // Sort
  if(sort==='cal_asc')  list.sort((a,b)=>(a.calories||999)-(b.calories||999));
  if(sort==='cal_desc') list.sort((a,b)=>(b.calories||0)-(a.calories||0));
  if(sort==='time_asc') list.sort((a,b)=>(a.prepTime||999)-(b.prepTime||999));
  if(sort==='rating')   list.sort((a,b)=>getAvgRating(b.id)-getAvgRating(a.id));
  if(sort==='name_az')  list.sort((a,b)=>a.name.localeCompare(b.name));

  return list;
}

function applyFilters(){
  const list = getFilteredRecipes();
  renderGrid(list);
  updateGridTopbar(list);
  renderActiveTags();
}

function updateGridTopbar(list){
  document.getElementById('gridTitle').textContent = activeFilterCat==='All' ? 'All Recipes' : activeFilterCat;
  document.getElementById('gridCount').textContent = list.length+' result'+(list.length!==1?'s':'');
}

function updateCategoryCounts(){
  ['Vegetarian','Vegan','Keto','High Protein'].forEach(cat=>{
    const el = document.getElementById('cnt-'+cat);
    if(el) el.textContent = recipes.filter(r=>r.category===cat).length;
  });
}

function renderActiveTags(){
  const wrap = document.getElementById('activeTags');
  wrap.innerHTML='';
  const cats  = [...document.querySelectorAll('input[name="cat"]:checked')].map(i=>i.value);
  const times = [...document.querySelectorAll('input[name="time"]:checked')].map(i=>i.value+'min');
  const diffs = [...document.querySelectorAll('input[name="diff"]:checked')].map(i=>i.value);
  const cals  = [...document.querySelectorAll('input[name="cal"]:checked')].map(i=>'<'+i.value+'kcal');
  const ing   = document.getElementById('ingSearch')?.value.trim();
  const tags  = [...cats,...times,...diffs,...cals,...(ing?[ing]:[])];
  tags.forEach(t=>{
    const d=document.createElement('div');
    d.className='atag';
    d.innerHTML=`${t}<span class="atag-x" onclick="removeTag('${t}')">✕</span>`;
    wrap.appendChild(d);
  });
}

function removeTag(val){
  // Uncheck matching checkbox
  document.querySelectorAll('input[type="checkbox"]').forEach(cb=>{
    const v = cb.value;
    if(v===val || val===v+'min' || val==='<'+v+'kcal') cb.checked=false;
  });
  const ingEl = document.getElementById('ingSearch');
  if(ingEl && ingEl.value.trim()===val) ingEl.value='';
  applyFilters();
}

function clearFilters(){
  document.querySelectorAll('input[name="cat"],input[name="time"],input[name="diff"],input[name="cal"]').forEach(cb=>cb.checked=false);
  const r0 = document.querySelector('input[name="rating"][value="0"]');
  if(r0) r0.checked=true;
  const ingEl = document.getElementById('ingSearch');
  if(ingEl) ingEl.value='';
  activeFilterCat='All';
  document.querySelectorAll('.pill').forEach(p=>p.classList.toggle('active',p.dataset.cat==='All'));
  applyFilters();
}

function pillFilter(cat, btn){
  activeFilterCat = cat;
  document.querySelectorAll('.pill').forEach(p=>p.classList.remove('active'));
  if(btn) btn.classList.add('active');
  else{
    const match = document.querySelector(`.pill[data-cat="${cat}"]`);
    if(match) match.classList.add('active');
  }
  applyFilters();
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ====================================================
   RENDER GRID
==================================================== */
function renderGrid(list){
  const grid  = document.getElementById('recipeGrid');
  const empty = document.getElementById('emptyState');
  grid.innerHTML='';
  if(!list.length){ empty.style.display=''; grid.style.display='none'; return; }
  empty.style.display='none';
  grid.style.display='';
  grid.className='recipe-grid'+(viewMode==='list'?' list-view':'');
  list.forEach((r,i)=>{ const card=buildCard(r); card.style.animationDelay=`${i*0.04}s`; grid.appendChild(card); });
}

function buildCard(recipe, inFavView=false){
  const idx   = recipes.findIndex(r=>r.id===recipe.id);
  const isFav = isSaved(recipe.id);
  const avg   = getAvgRating(recipe.id);
  const cnt   = getRatingCount(recipe.id);
  const tagCls= 'tag-'+(recipe.category||'Custom').replace(/\s+/g,'-');

  const card  = document.createElement('div');
  card.className='recipe-card';
  card.innerHTML=`
    <div class="rc-img" onclick="showDetail(${idx})">
      <img src="${recipe.image||'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=70'}" alt="${recipe.name}" loading="lazy"/>
      <span class="rc-tag ${tagCls}">${recipe.category||'Custom'}</span>
      <button class="rc-fav ${isFav?'saved':''}" onclick="event.stopPropagation();toggleSave('${recipe.id}',this)" title="${isFav?'Remove':'Save'}">${isFav?'❤️':'🤍'}</button>
      <div class="rc-share-overlay">
        <button class="rc-share-btn" onclick="event.stopPropagation();quickShare('${recipe.id}','twitter')">🐦</button>
        <button class="rc-share-btn" onclick="event.stopPropagation();quickShare('${recipe.id}','facebook')">📘</button>
        <button class="rc-share-btn" onclick="event.stopPropagation();quickShare('${recipe.id}','whatsapp')">💬</button>
      </div>
    </div>
    <div class="rc-body">
      <div class="rc-name" onclick="showDetail(${idx})">${recipe.name}</div>
      <div class="rc-nutrition">
        ${recipe.calories?`<span class="nutr-chip nc-cal">🔥 ${recipe.calories} kcal</span>`:''}
        ${recipe.protein ?`<span class="nutr-chip nc-pro">💪 ${recipe.protein}g</span>`:''}
        ${recipe.carbs   ?`<span class="nutr-chip nc-carb">🌾 ${recipe.carbs}g</span>`:''}
      </div>
      <div class="rc-meta">
        ${recipe.prepTime ?`<span class="rc-meta-chip">⏱ ${recipe.prepTime} min</span>`:''}
        ${recipe.difficulty?`<span class="diff-pill dp-${recipe.difficulty}">${recipe.difficulty}</span>`:''}
      </div>
      <div class="rc-stars">
        <div class="stars-row">${buildStars(avg,recipe.id,true)}</div>
        <span class="rc-rating-txt">${cnt>0?`(${cnt})`:'Rate it'}</span>
      </div>
      <div class="rc-actions">
        <button class="btn-view" onclick="showDetail(${idx})">View Recipe</button>
        <button class="btn-plan" onclick="event.stopPropagation();quickAddToPlan('${recipe.id}')" title="Add to planner">📅</button>
      </div>
    </div>`;
  return card;
}

function setViewMode(mode){
  viewMode=mode;
  document.getElementById('vGrid').classList.toggle('active', mode==='grid');
  document.getElementById('vList').classList.toggle('active', mode==='list');
  applyFilters();
}

/* ====================================================
   DETAIL VIEW
==================================================== */
function showDetail(idx){
  const r = recipes[idx];
  if(!r) return;
  prevView = getCurrentView();
  const isFav = isSaved(r.id);
  const avg   = getAvgRating(r.id);
  const cnt   = getRatingCount(r.id);
  const shareText = encodeURIComponent(`Check out: ${r.name} 🥗 #HealthyEating #NutriFind`);
  const shareUrl  = encodeURIComponent(window.location.href+'#'+r.id);

  document.getElementById('detailContainer').innerHTML=`
    <div class="detail-hero">
      <img src="${r.image||'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=80'}" alt="${r.name}"/>
      <div class="detail-hero-overlay">
        <div class="dho-content">
          <div class="dho-tag">${r.category||'Custom'}</div>
          <div class="dho-title">${r.name}</div>
        </div>
        <div class="dho-actions">
          <button class="dho-btn ${isFav?'pri':''}" id="dFavBtn" onclick="toggleSave('${r.id}',this)">${isFav?'❤️ Saved':'🤍 Save'}</button>
          <button class="dho-btn" onclick="printPage()">🖨 Print</button>
        </div>
      </div>
    </div>

    <div class="nutr-banner">
      ${r.calories?`<div class="nutr-card"><div class="nutr-val">${r.calories}</div><div class="nutr-lbl">Calories</div></div>`:''}
      ${r.protein ?`<div class="nutr-card"><div class="nutr-val">${r.protein}g</div><div class="nutr-lbl">Protein</div></div>`:''}
      ${r.carbs   ?`<div class="nutr-card"><div class="nutr-val">${r.carbs}g</div><div class="nutr-lbl">Carbs</div></div>`:''}
      ${r.fat     ?`<div class="nutr-card"><div class="nutr-val">${r.fat}g</div><div class="nutr-lbl">Fat</div></div>`:''}
      ${r.prepTime?`<div class="nutr-card"><div class="nutr-val">${r.prepTime}</div><div class="nutr-lbl">Min Prep</div></div>`:''}
      ${r.difficulty?`<div class="nutr-card"><div class="nutr-val" style="font-size:1rem">${r.difficulty}</div><div class="nutr-lbl">Difficulty</div></div>`:''}
    </div>

    <div class="detail-rating-row">
      <span class="dr-label">Rate this recipe:</span>
      <div class="dr-stars">${buildDetailStars(avg,r.id)}</div>
      <span class="dr-count">${cnt>0?`Avg ${avg.toFixed(1)} (${cnt} rating${cnt>1?'s':''})`:'Be the first to rate!'}</span>
    </div>

    <div class="detail-action-bar">
      <button class="dab-btn pri-btn" onclick="toggleSave('${r.id}',null)">${isFav?'❤️ Remove from Saved':'🤍 Save Recipe'}</button>
      <button class="dab-btn" onclick="openModal('mealPlanModal')">📅 Add to Planner</button>
      <button class="dab-btn" onclick="toggleShare('share-${r.id}')">📤 Share</button>
      <button class="dab-btn" onclick="printPage()">🖨 Print</button>
    </div>

    <div class="social-row" id="share-${r.id}" style="display:none;">
      <a class="soc-btn soc-tw" href="https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}" target="_blank" rel="noopener">🐦 Twitter</a>
      <a class="soc-btn soc-fb" href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" target="_blank" rel="noopener">📘 Facebook</a>
      <a class="soc-btn soc-wa" href="https://wa.me/?text=${shareText}%20${shareUrl}" target="_blank" rel="noopener">💬 WhatsApp</a>
      <button class="soc-btn soc-ig" onclick="igShare('${r.name}')">📸 Instagram</button>
      <button class="soc-btn soc-cp" onclick="copyLink('${r.id}')">🔗 Copy Link</button>
    </div>

    <div class="detail-body">
      <div class="detail-section">
        <h3>🛒 Ingredients</h3>
        <ul class="ingredient-list">${r.ingredients.map(i=>`<li><span class="ing-dot">•</span>${i}</li>`).join('')}</ul>
      </div>
      <div class="detail-section">
        <h3>👨‍🍳 Cooking Steps</h3>
        <ol class="steps-list">${r.steps.map((s,i)=>`<li class="step-item"><div class="step-num">${i+1}</div><div class="step-txt">${s}</div></li>`).join('')}</ol>
      </div>
    </div>

    <div class="related-section">
      <h3>You may also like</h3>
      <div class="related-scroll" id="relatedScroll"></div>
    </div>`;

  // Render related
  const related = recipes.filter(x=>x.id!==r.id&&x.category===r.category).slice(0,8);
  const rs = document.getElementById('relatedScroll');
  related.forEach(rel=>{
    const ri = recipes.findIndex(x=>x.id===rel.id);
    rs.innerHTML+=`<div class="related-card" onclick="showDetail(${ri})">
      <div class="related-img"><img src="${rel.image||''}" alt="${rel.name}" loading="lazy"/></div>
      <div class="related-info"><div class="related-name">${rel.name}</div><div class="related-cat">${rel.category}</div></div>
    </div>`;
  });

  document.getElementById('detailBackBtn').onclick = closeDetail;
  switchView('detail');
  window.scrollTo({top:0,behavior:'smooth'});
}

function closeDetail(){
  if(prevView==='favorites') showFavorites();
  else goHome();
}

function toggleShare(id){
  const el = document.getElementById(id);
  if(!el) return;
  const open = el.style.display==='flex';
  el.style.display = open?'none':'flex';
  if(!open) el.scrollIntoView({behavior:'smooth',block:'nearest'});
}

function quickShare(id,platform){
  const r = recipes.find(x=>x.id===id);
  if(!r) return;
  const text = encodeURIComponent(`${r.name} 🥗 #HealthyEating`);
  const url  = encodeURIComponent(window.location.href);
  const urls = {twitter:`https://twitter.com/intent/tweet?text=${text}&url=${url}`,facebook:`https://www.facebook.com/sharer/sharer.php?u=${url}`,whatsapp:`https://wa.me/?text=${text}%20${url}`};
  if(urls[platform]) window.open(urls[platform],'_blank','noopener,width=600,height=400');
}
function igShare(name){ navigator.clipboard.writeText(`${name} 🥗 #HealthyEating #NutriFind`).then(()=>toast('📋 Caption copied for Instagram!')); }
function copyLink(id){ navigator.clipboard.writeText(window.location.href+'#'+id).then(()=>toast('🔗 Link copied to clipboard!')); }
function printPage(){ window.print(); }

/* ====================================================
   STARS
==================================================== */
function buildStars(avg,id,readonly){
  let h='';
  for(let i=1;i<=5;i++){
    const on=i<=Math.round(avg);
    h+=readonly
      ? `<span class="star ${on?'on':'off'}">${on?'★':'☆'}</span>`
      : `<span class="star ${on?'on':'off'}" onclick="rateRecipe('${id}',${i})" title="Rate ${i} stars">${on?'★':'☆'}</span>`;
  }
  return h;
}
function buildDetailStars(avg,id){
  let h='';
  for(let i=1;i<=5;i++){
    const on=i<=Math.round(avg);
    h+=`<span class="dr-star ${on?'on':'off'}" onclick="rateRecipe('${id}',${i})">${on?'★':'☆'}</span>`;
  }
  return h;
}
function rateRecipe(id,stars){
  const ratings = S.get('nf_rating_'+id)||[];
  ratings.push(stars);
  S.set('nf_rating_'+id,ratings);
  toast(`⭐ Rated ${stars} star${stars>1?'s':''}!`);
  // refresh rating display
  const avg=getAvgRating(id);const cnt=getRatingCount(id);
  const dsEl=document.querySelector('.dr-stars');
  if(dsEl) dsEl.innerHTML=buildDetailStars(avg,id);
  const dcEl=document.querySelector('.dr-count');
  if(dcEl) dcEl.textContent=`Avg ${avg.toFixed(1)} (${cnt} rating${cnt>1?'s':''})`;
}
function getAvgRating(id){ const r=S.get('nf_rating_'+id)||[]; return r.length?r.reduce((a,b)=>a+b,0)/r.length:0; }
function getRatingCount(id){ return (S.get('nf_rating_'+id)||[]).length; }

/* ====================================================
   FAVORITES
==================================================== */
function isSaved(id){ return (S.get('nf_favs')||[]).includes(id); }
function toggleSave(id,btn){
  let favs = S.get('nf_favs')||[];
  const now = favs.includes(id);
  if(now){ favs=favs.filter(f=>f!==id); toast('Removed from saved.','info'); }
  else{ favs.push(id); toast('❤️ Saved to your list!'); }
  S.set('nf_favs',favs);
  // Sync all fav buttons
  document.querySelectorAll(`.rc-fav`).forEach(b=>{
    if(b.getAttribute('onclick')&&b.getAttribute('onclick').includes(`'${id}'`)){
      b.textContent=favs.includes(id)?'❤️':'🤍';
      b.classList.toggle('saved',favs.includes(id));
    }
  });
  if(btn){
    btn.textContent=favs.includes(id)?'❤️ Saved':'🤍 Save';
    btn.classList.toggle('pri',favs.includes(id));
  }
  // Re-sync detail fav btn
  const dfb=document.getElementById('dFavBtn');
  if(dfb){ dfb.textContent=favs.includes(id)?'❤️ Saved':'🤍 Save'; dfb.classList.toggle('pri',favs.includes(id)); }
  updateFavBadge();
  if(getCurrentView()==='favorites') showFavorites();
}
function updateFavBadge(){
  const c=(S.get('nf_favs')||[]).length;
  const b=document.getElementById('favBadge');
  b.style.display=c>0?'':'none';
  b.textContent=c;
}
function showFavorites(){
  const favIds = S.get('nf_favs')||[];
  const list   = recipes.filter(r=>favIds.includes(r.id));
  const grid=document.getElementById('favGrid');
  const empty=document.getElementById('favEmpty');
  document.getElementById('favCount').textContent=list.length+' recipe'+(list.length!==1?'s':'');
  grid.innerHTML='';
  if(!list.length){ empty.style.display=''; return; }
  empty.style.display='none';
  grid.className='recipe-grid';
  list.forEach((r,i)=>{ const c=buildCard(r,true); c.style.animationDelay=`${i*0.05}s`; grid.appendChild(c); });
  prevView='home';
  switchView('favorites');
  window.scrollTo({top:0,behavior:'smooth'});
  setBN('bnSaved');
}

/* ====================================================
   SEARCH
==================================================== */
function handleSearch(val){
  applyFilters();
  hideSuggestions();
}
function showSuggestions(){
  const val = document.getElementById('globalSearch').value.trim().toLowerCase();
  const sug = document.getElementById('searchSug');
  if(!val){ sug.classList.remove('show'); return; }
  const matches = recipes.filter(r=>r.name.toLowerCase().includes(val)||r.category.toLowerCase().includes(val)).slice(0,6);
  if(!matches.length){ sug.classList.remove('show'); return; }
  sug.innerHTML = matches.map((r,i)=>`
    <div class="sug-item" onclick="document.getElementById('globalSearch').value='${r.name}';handleSearch('${r.name}');showDetail(${recipes.indexOf(r)})">
      <span class="sug-icon">🔍</span>${r.name} <span style="font-size:.75rem;color:var(--text2);margin-left:auto;">${r.category}</span>
    </div>`).join('');
  sug.classList.add('show');
}
function hideSuggestions(){ document.getElementById('searchSug').classList.remove('show'); }

/* ====================================================
   MEAL PLANNER
==================================================== */
const DAYS=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const MEALS=['Breakfast','Lunch','Dinner'];

function renderMealPlan(){
  const plan = S.get('nf_plan')||{};
  const g = document.getElementById('mpGrid');
  g.innerHTML='';
  g.innerHTML+=`<div class="mp-head"></div>${MEALS.map(m=>`<div class="mp-head">${m}</div>`).join('')}`;
  DAYS.forEach(day=>{
    g.innerHTML+=`<div class="mp-day">${day.slice(0,3)}</div>`;
    MEALS.forEach(meal=>{
      const key=`${day}_${meal}`;
      const rid=plan[key];
      const r=rid?recipes.find(x=>x.id===rid):null;
      g.innerHTML+=`<div class="mp-slot ${r?'filled':''}" onclick="openSlotPicker('${key}')">
        ${r?`<div><div class="mp-slot-name">${r.name}</div><span class="mp-slot-clear" onclick="event.stopPropagation();clearSlot('${key}')">✕ clear</span></div>`
           :`<span class="mp-empty">+ Add</span>`}
      </div>`;
    });
  });
}
function clearSlot(key){ const p=S.get('nf_plan')||{}; delete p[key]; S.set('nf_plan',p); renderMealPlan(); }
function clearMealPlan(){ S.del('nf_plan'); renderMealPlan(); toast('🗑 Meal plan cleared.'); }
function shareMealPlan(){
  const plan=S.get('nf_plan')||{};
  let txt='📅 My Weekly Meal Plan 🥗\n\n';
  DAYS.forEach(d=>{
    const ms=MEALS.map(m=>{const r=recipes.find(x=>x.id===plan[`${d}_${m}`]);return r?`${m}: ${r.name}`:null;}).filter(Boolean);
    if(ms.length) txt+=`${d}:\n  ${ms.join('\n  ')}\n\n`;
  });
  if(txt.trim()==='📅 My Weekly Meal Plan 🥗'){ toast('Your plan is empty!','warn'); return; }
  navigator.clipboard.writeText(txt).then(()=>toast('📋 Meal plan copied to clipboard!'));
}
function openSlotPicker(key){
  currentSlotKey=key;
  const [day,meal]=key.split('_');
  document.getElementById('slotTitle').textContent=`${meal} — ${day}`;
  document.getElementById('slotSearch').value='';
  renderSlots('');
  openModal('slotModal');
}
function renderSlots(q){
  const list=recipes.filter(r=>r.name.toLowerCase().includes(q.toLowerCase()));
  document.getElementById('slotList').innerHTML=list.map(r=>`
    <div class="slot-item" onclick="assignSlot('${r.id}')">
      <img class="slot-img" src="${r.image||''}" alt="${r.name}" loading="lazy"/>
      <div><div class="slot-name">${r.name}</div><div class="slot-cat">${r.category}</div></div>
    </div>`).join('');
}
function assignSlot(id){
  if(!currentSlotKey) return;
  const p=S.get('nf_plan')||{};
  p[currentSlotKey]=id;
  S.set('nf_plan',p);
  closeModal('slotModal');
  renderMealPlan();
  const r=recipes.find(x=>x.id===id);
  toast(`📅 "${r?.name}" added to plan!`);
}
function quickAddToPlan(id){
  openModal('mealPlanModal');
  toast('📅 Click any slot to assign this recipe!');
}

/* ====================================================
   ADD RECIPE
==================================================== */
function openAddRecipe(){
  if(!currentUser){ toast('Please login to add recipes!','warn'); openModal('loginModal'); return; }
  openModal('addRecipeModal');
}
function saveRecipe(){
  const name = document.getElementById('ar-name').value.trim();
  const cat  = document.getElementById('ar-cat').value;
  const img  = document.getElementById('ar-img').value.trim();
  const time = +document.getElementById('ar-time').value||0;
  const diff = document.getElementById('ar-diff').value;
  const cal  = +document.getElementById('ar-cal').value||0;
  const pro  = +document.getElementById('ar-pro').value||0;
  const carb = +document.getElementById('ar-carb').value||0;
  const ings = document.getElementById('ar-ing').value.trim().split('\n').map(l=>l.trim()).filter(Boolean);
  const steps= document.getElementById('ar-steps').value.trim().split('\n').map(l=>l.trim()).filter(Boolean);
  const err  = document.getElementById('arErr');
  err.textContent='';
  if(!name){ err.textContent='Recipe name is required.'; return; }
  if(!cat) { err.textContent='Please select a category.'; return; }
  if(!time){ err.textContent='Please enter prep time.'; return; }
  if(!ings.length){ err.textContent='Add at least one ingredient.'; return; }
  if(!steps.length){ err.textContent='Add at least one step.'; return; }
  const r={id:'c_'+Date.now(),name,category:cat,image:img||'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=70',prepTime:time,difficulty:diff,calories:cal,protein:pro,carbs:carb,fat:0,ingredients:ings,steps,isCustom:true};
  const custom=S.get('nf_custom')||[];
  custom.push(r);
  S.set('nf_custom',custom);
  recipes.push(r);
  updateCategoryCounts();
  applyFilters();
  closeModal('addRecipeModal');
  toast(`🍳 "${name}" added!`);
  ['ar-name','ar-img','ar-time','ar-cal','ar-pro','ar-carb','ar-ing','ar-steps'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('ar-cat').value='';
}

/* ====================================================
   AUTH
==================================================== */
function switchTab(tab){
  document.getElementById('loginForm').style.display=tab==='login'?'block':'none';
  document.getElementById('regForm').style.display=tab==='register'?'block':'none';
  document.getElementById('tabLogin').classList.toggle('active',tab==='login');
  document.getElementById('tabReg').classList.toggle('active',tab==='register');
}
function doLogin(){
  const email=document.getElementById('loginEmail').value.trim();
  const pass =document.getElementById('loginPass').value;
  const err  =document.getElementById('loginErr');
  err.textContent='';
  if(!email||!pass){err.textContent='Fill in all fields.';return;}
  if(pass.length<6){err.textContent='Password must be 6+ characters.';return;}
  const users=S.get('nf_users')||[];
  const u=users.find(x=>x.email===email);
  if(!u){err.textContent='No account found. Please register.';return;}
  if(u.password!==pass){err.textContent='Incorrect password.';return;}
  currentUser={name:u.name,email:u.email};
  S.set('nf_user',currentUser);
  updateUserUI();
  closeModal('loginModal');
  toast(`👋 Welcome back, ${u.name}!`);
}
function doRegister(){
  const name =document.getElementById('regName').value.trim();
  const email=document.getElementById('regEmail').value.trim();
  const pass =document.getElementById('regPass').value;
  const err  =document.getElementById('regErr');
  err.textContent='';
  if(!name||!email||!pass){err.textContent='Fill in all fields.';return;}
  if(pass.length<6){err.textContent='Password must be 6+ characters.';return;}
  const users=S.get('nf_users')||[];
  if(users.find(u=>u.email===email)){err.textContent='Email already registered.';return;}
  users.push({name,email,password:pass});
  S.set('nf_users',users);
  currentUser={name,email};
  S.set('nf_user',currentUser);
  updateUserUI();
  closeModal('loginModal');
  toast(`🎉 Welcome to NutriFind, ${name}!`);
}
function doLogout(){
  currentUser=null; S.del('nf_user'); updateUserUI(); closeUF(); toast('👋 Logged out.');
}
function updateUserUI(){
  const label=document.getElementById('userBtnLabel');
  const avatar=document.getElementById('userAvatar');
  const ufInfo=document.getElementById('ufInfo');
  const ufLoginItem=document.getElementById('ufLoginItem');
  const ufLogout=document.getElementById('ufLogout');
  const ufName=document.getElementById('ufName');
  const ufEmail=document.getElementById('ufEmail');
  if(currentUser){
    label.textContent=currentUser.name.split(' ')[0];
    avatar.textContent=currentUser.name[0].toUpperCase();
    ufInfo.style.display='';
    ufName.textContent=currentUser.name;
    ufEmail.textContent=currentUser.email;
    ufLoginItem.style.display='none';
    ufLogout.style.display='';
  } else {
    label.textContent='Login';
    avatar.textContent='?';
    ufInfo.style.display='none';
    ufLoginItem.style.display='';
    ufLogout.style.display='none';
  }
}
function toggleUserFlyout(){
  const uf=document.getElementById('userFlyout');
  uf.style.display=uf.style.display==='none'?'block':'none';
}
function closeUF(){ document.getElementById('userFlyout').style.display='none'; }

/* ====================================================
   DARK MODE
==================================================== */
function toggleDark(){
  const dark=document.documentElement.getAttribute('data-theme')==='dark';
  document.documentElement.setAttribute('data-theme',dark?'light':'dark');
  document.getElementById('darkBtn').textContent=dark?'🌙':'☀️';
  S.set('nf_dark',!dark);
}

/* ====================================================
   SURPRISE ME
==================================================== */
function surpriseMe(){
  const i=Math.floor(Math.random()*recipes.length);
  showDetail(i);
  toast('🎲 Here\'s a random recipe!');
}

/* ====================================================
   MOBILE DRAWER
==================================================== */
function toggleDrawer(){
  const d=document.getElementById('drawer');
  const b=document.getElementById('drawerBackdrop');
  const h=document.getElementById('hamBtn');
  const open=d.classList.toggle('open');
  b.classList.toggle('open',open);
  h.classList.toggle('open',open);
  document.body.style.overflow=open?'hidden':'';
}

/* ====================================================
   SIDEBAR GROUP TOGGLE
==================================================== */
function toggleGroup(titleEl){
  const body=titleEl.nextElementSibling;
  const chev=titleEl.querySelector('.sb-chevron');
  const open=body.classList.toggle('open');
  titleEl.classList.toggle('open',open);
  chev.textContent=open?'▲':'▼';
}

/* ====================================================
   MODALS
==================================================== */
function openModal(id){
  document.getElementById(id).classList.add('open');
  document.body.style.overflow='hidden';
  if(id==='mealPlanModal') renderMealPlan();
}
function closeModal(id){
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow='';
}
document.querySelectorAll('.modal-overlay').forEach(o=>{
  o.addEventListener('click',e=>{ if(e.target===o){ o.classList.remove('open'); document.body.style.overflow=''; }});
});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape') document.querySelectorAll('.modal-overlay.open').forEach(o=>{ o.classList.remove('open'); document.body.style.overflow=''; });
});

/* ====================================================
   VIEW SWITCHING
==================================================== */
function switchView(name){
  ['homeView','favView','detailView'].forEach(v=>{
    const el=document.getElementById(v);
    el.style.display='none';
    el.classList.remove('page-view');
  });
  const map={home:'homeView',favorites:'favView',detail:'detailView'};
  const el=document.getElementById(map[name]);
  el.style.display='';
  void el.offsetWidth;
  el.classList.add('page-view');
}
function getCurrentView(){
  if(document.getElementById('favView').style.display!=='none') return 'favorites';
  if(document.getElementById('detailView').style.display!=='none') return 'detail';
  return 'home';
}
function goHome(){
  switchView('home');
  applyFilters();
  window.scrollTo({top:0,behavior:'smooth'});
  setBN('bnHome');
}
function setBN(id){
  document.querySelectorAll('.bn-btn').forEach(b=>b.classList.remove('active'));
  const el=document.getElementById(id);
  if(el) el.classList.add('active');
}

/* ====================================================
   TOAST
==================================================== */
let toastTimer;
function toast(msg, type='success'){
  const el=document.getElementById('toast');
  const icon={success:'✅',warn:'⚠️',info:'ℹ️'}[type]||'✅';
  document.getElementById('toastIcon').textContent=icon;
  document.getElementById('toastMsg').textContent=msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>el.classList.remove('show'), 2800);
}
