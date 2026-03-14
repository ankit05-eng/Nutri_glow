/* ============================================================
   DIETARY RECIPE FINDER — script.js
   Handles: data, rendering, search, filter, detail view, nav
   ============================================================ */

/* ---------- RECIPE DATA ---------- */
const recipes = [
  {
    name: "Vegetable Salad",
    category: "Vegetarian",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
    ingredients: ["2 Tomatoes", "1 Cucumber", "2 Carrots", "2 tbsp Olive Oil", "Salt & Pepper", "Fresh Lemon Juice"],
    steps: [
      "Wash all vegetables thoroughly under cold water.",
      "Dice the tomatoes and cucumber into bite-sized pieces.",
      "Peel and grate or julienne the carrots.",
      "Combine all vegetables in a large salad bowl.",
      "Drizzle with olive oil and fresh lemon juice.",
      "Season with salt and pepper. Toss gently and serve."
    ]
  },
  {
    name: "Grilled Chicken",
    category: "High Protein",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80",
    ingredients: ["2 Chicken Breasts", "1 tsp Salt", "1 tsp Black Pepper", "2 tbsp Olive Oil", "1 tsp Garlic Powder", "Fresh Herbs"],
    steps: [
      "Pat chicken breasts dry with paper towels.",
      "Rub generously with olive oil, salt, pepper, and garlic powder.",
      "Heat a grill pan over medium-high heat until smoking.",
      "Grill chicken for 6–7 minutes each side until cooked through.",
      "Rest for 5 minutes before slicing to retain juices.",
      "Garnish with fresh herbs and serve immediately."
    ]
  },
  {
    name: "Avocado Buddha Bowl",
    category: "Vegan",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
    ingredients: ["1 Ripe Avocado", "1 cup Quinoa", "1 cup Chickpeas", "Baby Spinach", "Cherry Tomatoes", "Tahini Dressing"],
    steps: [
      "Cook quinoa according to package instructions and let cool slightly.",
      "Rinse and drain chickpeas; roast in oven at 200°C for 20 minutes.",
      "Halve and pit the avocado; slice into fans.",
      "Arrange quinoa as the base of your bowl.",
      "Top with avocado, roasted chickpeas, spinach and cherry tomatoes.",
      "Drizzle generously with tahini dressing and serve."
    ]
  },
  {
    name: "Keto Egg Muffins",
    category: "Keto",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=600&q=80",
    ingredients: ["6 Eggs", "100g Cheddar Cheese", "50g Bacon Bits", "Bell Pepper", "1 tsp Butter", "Salt & Pepper"],
    steps: [
      "Preheat oven to 180°C and grease a muffin tin with butter.",
      "Whisk eggs in a bowl and season with salt and pepper.",
      "Finely dice bell pepper and mix into the egg mixture.",
      "Add shredded cheddar and bacon bits, stir to combine.",
      "Pour mixture into muffin cups, filling about ¾ full.",
      "Bake for 18–22 minutes until set and golden on top."
    ]
  },
  {
    name: "Lentil Soup",
    category: "Vegan",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
    ingredients: ["1 cup Red Lentils", "1 Onion", "3 Garlic Cloves", "1 can Tomatoes", "1 tsp Cumin", "Vegetable Stock"],
    steps: [
      "Sauté diced onion in olive oil over medium heat until golden.",
      "Add minced garlic and cumin; cook for 1 minute until fragrant.",
      "Stir in rinsed lentils, canned tomatoes, and vegetable stock.",
      "Bring to a boil, then simmer for 25 minutes.",
      "Blend partially for a creamy texture if desired.",
      "Season to taste and serve with crusty bread."
    ]
  },
  {
    name: "Caprese Skewers",
    category: "Vegetarian",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80",
    ingredients: ["Fresh Mozzarella", "Cherry Tomatoes", "Fresh Basil", "Balsamic Glaze", "Olive Oil", "Sea Salt"],
    steps: [
      "Thread mozzarella ball, basil leaf, and cherry tomato onto skewers.",
      "Repeat until skewers are filled.",
      "Arrange on a serving platter.",
      "Drizzle generously with olive oil and balsamic glaze.",
      "Sprinkle with sea salt and cracked black pepper.",
      "Serve immediately as an appetizer or light snack."
    ]
  },
  {
    name: "Salmon with Asparagus",
    category: "High Protein",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
    ingredients: ["2 Salmon Fillets", "1 bunch Asparagus", "2 tbsp Olive Oil", "Lemon", "Dill", "Salt & Pepper"],
    steps: [
      "Preheat oven to 200°C and line a baking sheet with parchment.",
      "Place salmon fillets and trimmed asparagus on the sheet.",
      "Drizzle everything with olive oil and lemon juice.",
      "Season with salt, pepper, and fresh dill.",
      "Bake for 15–18 minutes until salmon is flaky.",
      "Garnish with lemon slices and serve immediately."
    ]
  },
  {
    name: "Keto Cauliflower Rice",
    category: "Keto",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    ingredients: ["1 head Cauliflower", "2 tbsp Butter", "3 Garlic Cloves", "Parsley", "Salt & Pepper", "Parmesan"],
    steps: [
      "Remove cauliflower florets and pulse in a food processor until rice-like.",
      "Melt butter in a large skillet over medium heat.",
      "Add minced garlic and sauté for 1 minute.",
      "Add cauliflower rice and cook for 5–7 minutes, stirring often.",
      "Season with salt, pepper, and fresh parsley.",
      "Finish with a sprinkle of grated parmesan and serve."
    ]
  }
];

/* ---------- STATE ---------- */
let currentFilter = 'All';
let currentSearch = '';

/* ---------- UTILITY: tag class from category ---------- */
function tagClass(category) {
  const map = {
    'Vegetarian': 'tag-vegetarian',
    'Vegan': 'tag-vegan',
    'Keto': 'tag-keto',
    'High Protein': 'tag-high-protein'
  };
  return map[category] || 'tag-vegetarian';
}

/* ---------- RENDER RECIPES ---------- */
function renderRecipes(list) {
  const grid = document.getElementById('recipesGrid');
  const empty = document.getElementById('emptyState');

  grid.innerHTML = '';

  if (list.length === 0) {
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  list.forEach((recipe, index) => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    // Staggered animation delay
    card.style.animationDelay = `${index * 0.06}s`;

    card.innerHTML = `
      <div class="recipe-img-wrap">
        <img src="${recipe.image}" alt="${recipe.name}" loading="lazy" />
        <span class="recipe-tag ${tagClass(recipe.category)}">${recipe.category}</span>
      </div>
      <div class="recipe-body">
        <h3>${recipe.name}</h3>
        <p class="recipe-meta">
          🥣 <span>${recipe.ingredients.length} ingredients</span>
          &nbsp;·&nbsp;
          📋 <span>${recipe.steps.length} steps</span>
        </p>
        <button class="btn-view" onclick="showDetail(${index})">View Recipe</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ---------- FILTER LOGIC ---------- */
function getFilteredRecipes() {
  return recipes.filter(r => {
    const matchCat = currentFilter === 'All' || r.category === currentFilter;
    const matchSearch = r.name.toLowerCase().includes(currentSearch.toLowerCase());
    return matchCat && matchSearch;
  });
}

function filterRecipes(category, btn) {
  currentFilter = category;

  // Update active button
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  renderRecipes(getFilteredRecipes());
}

/* ---------- FILTER BY CATEGORY (from category cards) ---------- */
function filterByCategory(category) {
  currentFilter = category;
  currentSearch = '';
  document.getElementById('navSearchInput').value = '';

  // Sync filter bar buttons
  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.textContent === category);
  });

  // Scroll to recipes section
  scrollToRecipes();
  renderRecipes(getFilteredRecipes());
}

/* ---------- SEARCH ---------- */
function handleNavSearch(value) {
  currentSearch = value.trim();
  // If searching, make sure we're on the home view showing recipes
  if (document.getElementById('detail-view').style.display !== 'none') {
    closeDetail();
  }
  scrollToRecipes();
  renderRecipes(getFilteredRecipes());
}

/* ---------- DETAIL VIEW ---------- */
function showDetail(index) {
  const recipe = recipes[index];

  const container = document.getElementById('detailContainer');
  container.innerHTML = `
    <div class="detail-hero">
      <img src="${recipe.image}" alt="${recipe.name}" />
      <div class="detail-hero-overlay">
        <h1>${recipe.name}</h1>
      </div>
    </div>

    <div class="detail-body">
      <!-- Ingredients -->
      <div class="detail-section">
        <h2>🛒 Ingredients</h2>
        <ul class="ingredient-list">
          ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
      </div>

      <!-- Steps -->
      <div class="detail-section">
        <h2>👨‍🍳 Cooking Steps</h2>
        <ol class="steps-list">
          ${recipe.steps.map((step, i) => `
            <li class="step-item">
              <div class="step-num">${i + 1}</div>
              <div class="step-text">${step}</div>
            </li>
          `).join('')}
        </ol>
      </div>
    </div>
  `;

  // Show / hide views
  document.getElementById('home-view').style.display = 'none';
  document.getElementById('detail-view').style.display = 'block';

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeDetail() {
  document.getElementById('home-view').style.display = 'block';
  document.getElementById('detail-view').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------- SHOW HOME ---------- */
function showHome() {
  closeDetail();
}

/* ---------- SCROLL TO RECIPES ---------- */
function scrollToRecipes() {
  // Wait a tick so home-view is visible
  setTimeout(() => {
    const el = document.getElementById('recipes-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 50);
}

/* ---------- HAMBURGER MENU ---------- */
function toggleMenu() {
  const links = document.getElementById('navLinks');
  const ham = document.getElementById('hamburger');
  links.classList.toggle('open');
  ham.classList.toggle('open');
}

// Close mobile menu when a link is clicked
document.getElementById('navLinks').addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    document.getElementById('navLinks').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
  }
});

/* ---------- NAVBAR SCROLL SHADOW ---------- */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderRecipes(recipes);
});
