/* =====================================================
   DESIGN SYSTEM — CSS VARIABLES
===================================================== */
:root {
  --pri:        #0f9d76;
  --pri-dark:   #0a7a5c;
  --pri-light:  #e6f7f2;
  --acc:        #ff6b35;
  --acc-dark:   #e5551f;
  --gold:       #f59e0b;
  --bg:         #f5f6fa;
  --surface:    #ffffff;
  --surface2:   #f0f1f6;
  --border:     #e2e4ec;
  --text:       #1a1d2e;
  --text2:      #5a5f7d;
  --text3:      #9498b0;
  --nav-bg:     #0f9d76;
  --nav-text:   #ffffff;
  --shadow-xs:  0 1px 4px rgba(0,0,0,.06);
  --shadow-sm:  0 2px 12px rgba(0,0,0,.08);
  --shadow-md:  0 8px 32px rgba(0,0,0,.12);
  --shadow-lg:  0 20px 60px rgba(0,0,0,.18);
  --shadow-xl:  0 32px 80px rgba(0,0,0,.22);
  --r-sm:       8px;
  --r:          14px;
  --r-lg:       20px;
  --r-xl:       28px;
  --tr:         0.25s cubic-bezier(.4,0,.2,1);
  --tr-spring:  0.5s cubic-bezier(.34,1.56,.64,1);
  --f-display:  'Syne', sans-serif;
  --f-body:     'Plus Jakarta Sans', sans-serif;
  --nav-h:      64px;
  --pill-h:     48px;
}
[data-theme="dark"] {
  --bg:       #0d0f1a;
  --surface:  #161928;
  --surface2: #1e2235;
  --border:   #2a2e45;
  --text:     #eceef8;
  --text2:    #8a90b0;
  --text3:    #555a78;
  --nav-bg:   #0a7a5c;
  --shadow-sm: 0 2px 12px rgba(0,0,0,.3);
  --shadow-md: 0 8px 32px rgba(0,0,0,.4);
  --shadow-lg: 0 20px 60px rgba(0,0,0,.5);
}

/* =====================================================
   RESET & BASE
===================================================== */
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;font-size:16px;}
body{
  font-family:var(--f-body);
  background:var(--bg);
  color:var(--text);
  line-height:1.65;
  -webkit-font-smoothing:antialiased;
  overflow-x:hidden;
  transition:background .3s,color .3s;
}
img{display:block;width:100%;object-fit:cover;}
a{text-decoration:none;color:inherit;}
button{cursor:pointer;border:none;background:none;font-family:var(--f-body);}
input,textarea,select{
  font-family:var(--f-body);font-size:.9rem;color:var(--text);
  background:var(--surface2);border:1.5px solid var(--border);
  border-radius:var(--r-sm);padding:11px 14px;outline:none;width:100%;
  transition:border-color var(--tr),box-shadow var(--tr),background var(--tr);
}
input:focus,textarea:focus,select:focus{
  border-color:var(--pri);
  box-shadow:0 0 0 3px rgba(15,157,118,.15);
  background:var(--surface);
}
::-webkit-scrollbar{width:5px;}
::-webkit-scrollbar-track{background:transparent;}
::-webkit-scrollbar-thumb{background:var(--border);border-radius:4px;}

/* =====================================================
   LOADING SCREEN
===================================================== */
#loadScreen{
  position:fixed;inset:0;z-index:9999;
  background:#0f9d76;
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  transition:opacity .6s ease, transform .6s ease;
}
#loadScreen.hide{opacity:0;pointer-events:none;transform:scale(1.04);}
.ls-logo{
  font-family:var(--f-display);font-size:2.8rem;font-weight:800;
  color:#fff;letter-spacing:-.02em;
  animation:lsPulse 1.4s ease infinite;
}
.ls-logo span{color:#b2f5e4;}
@keyframes lsPulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:.85;transform:scale(1.03);}}
.ls-tagline{color:rgba(255,255,255,.7);font-size:.9rem;margin-top:8px;letter-spacing:.06em;}
.ls-bar-wrap{
  width:200px;height:3px;background:rgba(255,255,255,.25);
  border-radius:2px;margin-top:36px;overflow:hidden;
}
.ls-bar{height:100%;background:#fff;border-radius:2px;animation:lsBar 1.6s ease forwards;}
@keyframes lsBar{from{width:0;}to{width:100%;}}
.ls-dots{display:flex;gap:8px;margin-top:24px;}
.ls-dot{
  width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.4);
  animation:lsDot 1.2s ease infinite;
}
.ls-dot:nth-child(2){animation-delay:.2s;}
.ls-dot:nth-child(3){animation-delay:.4s;}
@keyframes lsDot{0%,80%,100%{transform:scale(1);opacity:.4;}40%{transform:scale(1.4);opacity:1;}}

/* =====================================================
   CURSOR GLOW (desktop)
===================================================== */
.cursor-glow{
  position:fixed;width:400px;height:400px;border-radius:50%;
  background:radial-gradient(circle,rgba(15,157,118,.06) 0%,transparent 70%);
  pointer-events:none;z-index:0;transform:translate(-50%,-50%);
  transition:transform .06s linear;
}

/* =====================================================
   TOP NAVBAR
===================================================== */
.navbar{
  position:fixed;top:0;left:0;right:0;z-index:500;
  height:var(--nav-h);
  background:var(--nav-bg);
  box-shadow:0 2px 16px rgba(0,0,0,.15);
  transition:background .3s,box-shadow .3s;
}
.navbar.scrolled{box-shadow:0 4px 24px rgba(0,0,0,.22);}
.nav-inner{
  max-width:1440px;margin:0 auto;height:100%;
  padding:0 20px;display:flex;align-items:center;gap:16px;
}

/* Logo */
.nav-logo{
  display:flex;align-items:center;gap:10px;
  font-family:var(--f-display);font-weight:800;font-size:1.4rem;
  color:#fff;white-space:nowrap;flex-shrink:0;
  transition:transform var(--tr-spring);
}
.nav-logo:hover{transform:scale(1.04);}
.nav-logo-icon{
  width:36px;height:36px;border-radius:10px;
  background:rgba(255,255,255,.2);
  display:flex;align-items:center;justify-content:center;
  font-size:1.2rem;backdrop-filter:blur(4px);
}
.nav-logo-sub{font-size:.62rem;font-weight:400;color:rgba(255,255,255,.7);display:block;letter-spacing:.06em;margin-top:-2px;}

/* Search */
.nav-search-wrap{flex:1;max-width:560px;position:relative;}
.nav-search{
  display:flex;align-items:center;
  background:#fff;border-radius:var(--r-sm);
  overflow:hidden;box-shadow:0 2px 10px rgba(0,0,0,.12);
  transition:box-shadow var(--tr),transform var(--tr);
}
.nav-search:focus-within{
  box-shadow:0 4px 20px rgba(0,0,0,.2);
  transform:scaleX(1.01);
}
.nav-search input{
  background:none;border:none;box-shadow:none;
  font-size:.9rem;color:#333;padding:0 14px;height:42px;flex:1;
  border-radius:0;
}
.nav-search input::placeholder{color:#999;}
.nav-search input:focus{box-shadow:none;}
.ns-btn{
  height:42px;padding:0 20px;background:var(--acc);color:#fff;
  font-size:.85rem;font-weight:700;letter-spacing:.03em;
  display:flex;align-items:center;gap:7px;
  transition:background var(--tr);flex-shrink:0;
}
.ns-btn:hover{background:var(--acc-dark);}
.ns-btn svg{flex-shrink:0;}

/* Search suggestions */
.search-sug{
  position:absolute;top:calc(100% + 6px);left:0;right:0;
  background:var(--surface);border-radius:var(--r);
  box-shadow:var(--shadow-lg);overflow:hidden;z-index:100;
  display:none;
  animation:sugIn .2s ease;
}
@keyframes sugIn{from{opacity:0;transform:translateY(-8px);}to{opacity:1;transform:translateY(0);}}
.search-sug.show{display:block;}
.sug-item{
  display:flex;align-items:center;gap:12px;
  padding:11px 16px;cursor:pointer;font-size:.88rem;
  transition:background var(--tr);
}
.sug-item:hover{background:var(--surface2);}
.sug-icon{font-size:1.1rem;flex-shrink:0;}

/* Nav right */
.nav-right{display:flex;align-items:center;gap:6px;margin-left:auto;}
.nav-btn{
  display:flex;align-items:center;gap:6px;
  padding:8px 14px;border-radius:var(--r-sm);
  font-size:.82rem;font-weight:600;color:#fff;
  transition:background var(--tr),transform var(--tr);
  white-space:nowrap;
}
.nav-btn:hover{background:rgba(255,255,255,.15);transform:translateY(-1px);}
.nav-icon-btn{
  width:38px;height:38px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  font-size:1rem;color:#fff;
  background:rgba(255,255,255,.12);
  transition:background var(--tr),transform var(--tr-spring);
}
.nav-icon-btn:hover{background:rgba(255,255,255,.25);transform:scale(1.12);}

/* User menu */
.user-wrap{position:relative;}
.user-btn{
  display:flex;align-items:center;gap:8px;
  padding:6px 14px;border-radius:var(--r-sm);
  background:rgba(255,255,255,.15);color:#fff;
  font-size:.82rem;font-weight:600;
  transition:background var(--tr),transform var(--tr);
}
.user-btn:hover{background:rgba(255,255,255,.25);}
.user-avatar{
  width:26px;height:26px;border-radius:50%;
  background:var(--acc);color:#fff;
  display:flex;align-items:center;justify-content:center;
  font-size:.72rem;font-weight:700;
}
.user-flyout{
  position:absolute;top:calc(100% + 10px);right:0;
  width:220px;background:var(--surface);
  border-radius:var(--r);box-shadow:var(--shadow-lg);
  border:1px solid var(--border);overflow:hidden;
  display:none;z-index:200;
  animation:flyIn .22s var(--tr-spring);
}
@keyframes flyIn{from{opacity:0;transform:translateY(-10px) scale(.95);}to{opacity:1;transform:translateY(0) scale(1);}}
.uf-user-info{padding:16px;border-bottom:1px solid var(--border);background:var(--surface2);}
.uf-name{font-weight:700;font-size:.9rem;}
.uf-email{font-size:.75rem;color:var(--text2);margin-top:2px;}
.uf-item{
  display:flex;align-items:center;gap:10px;
  padding:12px 16px;font-size:.87rem;color:var(--text);
  transition:background var(--tr);cursor:pointer;
}
.uf-item:hover{background:var(--surface2);}
.uf-item.danger{color:#e53e3e;}
.uf-divider{height:1px;background:var(--border);}

/* Badge */
.badge{
  min-width:18px;height:18px;border-radius:9px;
  background:var(--acc);color:#fff;
  font-size:.62rem;font-weight:700;
  display:inline-flex;align-items:center;justify-content:center;
  padding:0 4px;
}

/* Hamburger */
.ham-btn{display:none;flex-direction:column;gap:5px;padding:6px;}
.ham-btn span{display:block;width:22px;height:2px;background:#fff;border-radius:2px;transition:var(--tr);}
.ham-btn.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
.ham-btn.open span:nth-child(2){opacity:0;}
.ham-btn.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}

/* =====================================================
   CATEGORY PILL BAR
===================================================== */
.pill-bar{
  position:fixed;top:var(--nav-h);left:0;right:0;z-index:490;
  height:var(--pill-h);
  background:var(--surface);
  border-bottom:1px solid var(--border);
  box-shadow:var(--shadow-xs);
  overflow:hidden;
  transition:transform .3s ease;
}
.pill-bar.hide-bar{transform:translateY(-100%);}
.pill-inner{
  max-width:1440px;margin:0 auto;height:100%;
  padding:0 20px;
  display:flex;align-items:center;gap:8px;
  overflow-x:auto;
  scrollbar-width:none;
}
.pill-inner::-webkit-scrollbar{display:none;}
.pill{
  display:flex;align-items:center;gap:6px;
  padding:7px 18px;border-radius:40px;
  font-size:.82rem;font-weight:600;
  border:1.5px solid var(--border);
  color:var(--text2);background:var(--surface);
  white-space:nowrap;flex-shrink:0;
  transition:all var(--tr);
  position:relative;overflow:hidden;
}
.pill::after{
  content:'';position:absolute;inset:0;
  background:var(--pri);opacity:0;
  transition:opacity var(--tr);
}
.pill:hover{border-color:var(--pri);color:var(--pri);transform:translateY(-1px);box-shadow:var(--shadow-xs);}
.pill.active{background:var(--pri);border-color:var(--pri);color:#fff;box-shadow:0 3px 12px rgba(15,157,118,.35);}

/* =====================================================
   MOBILE DRAWER
===================================================== */
.drawer-backdrop{
  position:fixed;inset:0;z-index:600;
  background:rgba(0,0,0,.5);backdrop-filter:blur(4px);
  opacity:0;pointer-events:none;transition:opacity .3s;
}
.drawer-backdrop.open{opacity:1;pointer-events:auto;}
.drawer{
  position:fixed;left:0;top:0;bottom:0;z-index:700;
  width:min(300px, 85vw);background:var(--surface);
  transform:translateX(-100%);transition:transform .35s cubic-bezier(.4,0,.2,1);
  display:flex;flex-direction:column;
  box-shadow:var(--shadow-xl);
}
.drawer.open{transform:translateX(0);}
.drawer-head{
  padding:20px;background:var(--nav-bg);color:#fff;
  display:flex;align-items:center;justify-content:space-between;
}
.drawer-head h3{font-family:var(--f-display);font-size:1.1rem;font-weight:700;}
.drawer-close{color:#fff;font-size:1.4rem;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:rgba(255,255,255,.15);}
.drawer-body{flex:1;overflow-y:auto;padding:12px 0;}
.dr-link{
  display:flex;align-items:center;gap:12px;
  padding:14px 20px;font-size:.9rem;font-weight:500;
  color:var(--text);transition:background var(--tr);
}
.dr-link:hover{background:var(--surface2);}
.dr-icon{font-size:1.1rem;width:24px;text-align:center;}

/* =====================================================
   PAGE LAYOUT
===================================================== */
.page-offset{padding-top:calc(var(--nav-h) + var(--pill-h));}

/* =====================================================
   HERO BANNER CAROUSEL
===================================================== */
.hero-section{position:relative;overflow:hidden;background:#000;}
.hero-track{
  display:flex;
  transition:transform .7s cubic-bezier(.77,0,.18,1);
}
.hero-slide{
  min-width:100%;position:relative;
  height:min(420px, 55vw);
  display:flex;align-items:center;overflow:hidden;
}
.hero-slide-bg{
  position:absolute;inset:0;
  background-size:cover;background-position:center;
  transform:scale(1.06);
  transition:transform 8s ease;
  filter:brightness(.55);
}
.hero-slide.active .hero-slide-bg{transform:scale(1);}
.hero-slide-content{
  position:relative;z-index:2;
  padding:0 8% 0 6%;
  animation:slideContentIn .8s .2s cubic-bezier(.34,1.56,.64,1) both;
}
@keyframes slideContentIn{from{opacity:0;transform:translateX(-40px);}to{opacity:1;transform:translateX(0);}}
.hsc-eyebrow{
  display:inline-flex;align-items:center;gap:7px;
  background:rgba(255,255,255,.18);backdrop-filter:blur(8px);
  border:1px solid rgba(255,255,255,.25);
  color:#fff;font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
  padding:5px 14px;border-radius:40px;margin-bottom:14px;
}
.hsc-title{
  font-family:var(--f-display);font-size:clamp(1.8rem,4vw,3rem);
  font-weight:800;color:#fff;line-height:1.15;margin-bottom:12px;
  text-shadow:0 2px 20px rgba(0,0,0,.3);
}
.hsc-sub{color:rgba(255,255,255,.82);font-size:1rem;max-width:420px;margin-bottom:24px;line-height:1.6;}
.hero-actions{display:flex;gap:12px;flex-wrap:wrap;}
.btn-hero-pri{
  padding:13px 28px;border-radius:var(--r-sm);
  background:#fff;color:var(--pri-dark);
  font-weight:700;font-size:.88rem;
  box-shadow:0 4px 16px rgba(0,0,0,.2);
  transition:all var(--tr-spring);
}
.btn-hero-pri:hover{transform:translateY(-3px) scale(1.03);box-shadow:0 8px 28px rgba(0,0,0,.25);}
.btn-hero-sec{
  padding:13px 28px;border-radius:var(--r-sm);
  background:rgba(255,255,255,.15);color:#fff;
  font-weight:600;font-size:.88rem;
  border:1.5px solid rgba(255,255,255,.45);
  backdrop-filter:blur(8px);
  transition:all var(--tr);
}
.btn-hero-sec:hover{background:rgba(255,255,255,.25);}
/* Dots */
.hero-dots{
  position:absolute;bottom:18px;left:50%;transform:translateX(-50%);
  display:flex;gap:8px;z-index:3;
}
.hero-dot{
  width:8px;height:8px;border-radius:4px;background:rgba(255,255,255,.45);
  cursor:pointer;transition:all .4s;
}
.hero-dot.active{width:24px;background:#fff;}
/* Arrows */
.hero-arrow{
  position:absolute;top:50%;transform:translateY(-50%);z-index:3;
  width:42px;height:42px;border-radius:50%;
  background:rgba(255,255,255,.18);backdrop-filter:blur(8px);
  border:1px solid rgba(255,255,255,.28);color:#fff;font-size:1.3rem;
  display:flex;align-items:center;justify-content:center;
  transition:all var(--tr);
}
.hero-arrow:hover{background:rgba(255,255,255,.35);transform:translateY(-50%) scale(1.08);}
.hero-arrow.left{left:16px;}
.hero-arrow.right{right:16px;}

/* =====================================================
   STATS STRIP
===================================================== */
.stats-strip{
  background:var(--surface);
  border-bottom:1px solid var(--border);
}
.stats-inner{
  max-width:1440px;margin:0 auto;
  padding:0 20px;
  display:flex;
}
.stat-item{
  flex:1;display:flex;align-items:center;gap:12px;
  padding:14px 20px;border-right:1px solid var(--border);
  transition:background var(--tr);
}
.stat-item:last-child{border-right:none;}
.stat-item:hover{background:var(--surface2);}
.stat-icon{
  width:36px;height:36px;border-radius:10px;
  background:var(--pri-light);color:var(--pri);
  display:flex;align-items:center;justify-content:center;
  font-size:1.1rem;flex-shrink:0;
}
.stat-text strong{display:block;font-size:.82rem;font-weight:700;color:var(--text);}
.stat-text small{font-size:.72rem;color:var(--text2);}

/* =====================================================
   SHOP LAYOUT (Sidebar + Grid)
===================================================== */
.shop-wrapper{max-width:1440px;margin:0 auto;padding:20px;}
.shop-layout{display:flex;gap:20px;align-items:flex-start;}

/* Sidebar */
.sidebar{
  width:260px;flex-shrink:0;
  background:var(--surface);border-radius:var(--r);
  border:1px solid var(--border);
  box-shadow:var(--shadow-xs);
  position:sticky;top:calc(var(--nav-h) + var(--pill-h) + 16px);
  overflow:hidden;
}
.sb-header{
  padding:14px 16px;display:flex;align-items:center;justify-content:space-between;
  border-bottom:1px solid var(--border);background:var(--surface);
}
.sb-header h3{font-size:.95rem;font-weight:800;font-family:var(--f-display);letter-spacing:.02em;}
.sb-clear{font-size:.75rem;color:var(--pri);font-weight:700;cursor:pointer;transition:color var(--tr);}
.sb-clear:hover{color:var(--pri-dark);}
.sb-group{border-bottom:1px solid var(--border);}
.sb-group-title{
  display:flex;align-items:center;justify-content:space-between;
  padding:12px 16px;cursor:pointer;
  font-size:.82rem;font-weight:700;color:var(--text2);letter-spacing:.06em;text-transform:uppercase;
  transition:background var(--tr);user-select:none;
}
.sb-group-title:hover{background:var(--surface2);}
.sb-chevron{font-size:.65rem;transition:transform .25s;display:inline-block;}
.sb-group-title.open .sb-chevron{transform:rotate(180deg);}
.sb-body{padding:8px 16px 14px;display:none;}
.sb-body.open{display:block;}
.sb-check{
  display:flex;align-items:center;gap:9px;
  padding:6px 4px;cursor:pointer;font-size:.86rem;color:var(--text);
  border-radius:var(--r-sm);transition:background var(--tr);
}
.sb-check:hover{background:var(--surface2);}
.sb-check input[type="checkbox"]{
  width:16px;height:16px;border-radius:4px;flex-shrink:0;
  accent-color:var(--pri);cursor:pointer;
  background:var(--surface2);border:1.5px solid var(--border);
  box-shadow:none;padding:0;
}
.sb-check input:focus{box-shadow:none;}
.sb-count{margin-left:auto;font-size:.72rem;color:var(--text3);background:var(--surface2);padding:1px 7px;border-radius:40px;}
.sb-input{padding:8px 4px;}
.sb-input input{font-size:.84rem;padding:9px 12px;}

/* Star filter */
.sb-stars{display:flex;flex-direction:column;gap:6px;padding:4px 0;}
.sb-star-row{display:flex;align-items:center;gap:6px;cursor:pointer;padding:4px 0;}
.sb-star-row input{width:16px;height:16px;flex-shrink:0;accent-color:var(--gold);}
.star-display{color:var(--gold);font-size:.85rem;letter-spacing:-.5px;}

/* Range slider */
.range-wrap{padding:4px 0 8px;}
.range-wrap input[type="range"]{
  border:none;box-shadow:none;padding:0;height:4px;
  background:var(--border);accent-color:var(--pri);
  border-radius:2px;
}
.range-labels{display:flex;justify-content:space-between;font-size:.72rem;color:var(--text2);margin-top:4px;}

/* Grid area */
.grid-area{flex:1;min-width:0;}
.grid-topbar{
  display:flex;align-items:center;justify-content:space-between;
  margin-bottom:16px;padding:12px 16px;
  background:var(--surface);border:1px solid var(--border);
  border-radius:var(--r);box-shadow:var(--shadow-xs);
  flex-wrap:wrap;gap:10px;
}
.gtb-left{display:flex;align-items:center;gap:10px;}
.gtb-title{font-family:var(--f-display);font-size:.95rem;font-weight:700;}
.gtb-count{
  font-size:.78rem;color:var(--text2);
  background:var(--surface2);padding:3px 10px;border-radius:40px;
}
.gtb-right{display:flex;align-items:center;gap:10px;}
.gtb-sort{
  padding:7px 12px;font-size:.82rem;width:auto;
  background:var(--surface);color:var(--text);
  border:1.5px solid var(--border);border-radius:var(--r-sm);
  cursor:pointer;
}
.gtb-sort:focus{box-shadow:none;}
.gtb-view-btns{display:flex;gap:4px;}
.view-btn{
  width:32px;height:32px;border-radius:var(--r-sm);
  display:flex;align-items:center;justify-content:center;
  font-size:.9rem;color:var(--text2);border:1.5px solid var(--border);
  background:var(--surface);transition:all var(--tr);
}
.view-btn.active,
.view-btn:hover{background:var(--pri);color:#fff;border-color:var(--pri);}

/* Active filter tags */
.active-tags{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;}
.atag{
  display:flex;align-items:center;gap:6px;
  padding:5px 12px;border-radius:40px;
  font-size:.75rem;font-weight:600;
  background:var(--pri-light);color:var(--pri);
  border:1px solid rgba(15,157,118,.25);
  animation:tagIn .2s var(--tr-spring);
}
@keyframes tagIn{from{opacity:0;scale:.85;}to{opacity:1;scale:1;}}
.atag-x{cursor:pointer;font-size:.9rem;opacity:.7;transition:opacity var(--tr);line-height:1;}
.atag-x:hover{opacity:1;}

/* =====================================================
   RECIPE CARDS
===================================================== */
.recipe-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
  gap:16px;
}
.recipe-grid.list-view{grid-template-columns:1fr;}

/* Card */
.recipe-card{
  background:var(--surface);border-radius:var(--r);
  border:1px solid var(--border);overflow:hidden;
  display:flex;flex-direction:column;
  transition:transform var(--tr),box-shadow var(--tr),border-color var(--tr);
  animation:cardIn .4s ease both;
  position:relative;
}
@keyframes cardIn{from{opacity:0;transform:translateY(16px);}to{opacity:1;transform:translateY(0);}}
.recipe-card:hover{
  transform:translateY(-5px);
  box-shadow:var(--shadow-md);
  border-color:rgba(15,157,118,.3);
}
/* List view card */
.recipe-grid.list-view .recipe-card{flex-direction:row;}
.recipe-grid.list-view .rc-img{width:200px;height:auto;flex-shrink:0;}
.recipe-grid.list-view .rc-img img{height:100%;}

/* Image */
.rc-img{
  position:relative;height:190px;overflow:hidden;cursor:pointer;
}
.rc-img img{
  width:100%;height:100%;object-fit:cover;
  transition:transform .5s ease;
}
.recipe-card:hover .rc-img img{transform:scale(1.07);}

/* Category tag */
.rc-tag{
  position:absolute;top:10px;left:10px;
  font-size:.65rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;
  padding:4px 10px;border-radius:40px;color:#fff;
  backdrop-filter:blur(4px);
}
.tag-Vegetarian {background:rgba(46,125,50,.9);}
.tag-Vegan      {background:rgba(27,94,32,.9);}
.tag-Keto       {background:rgba(121,85,72,.9);}
.tag-High-Protein{background:rgba(183,28,28,.9);}
.tag-Custom     {background:rgba(74,20,140,.9);}

/* Fav button */
.rc-fav{
  position:absolute;top:10px;right:10px;
  width:32px;height:32px;border-radius:50%;
  background:rgba(255,255,255,.9);backdrop-filter:blur(4px);
  display:flex;align-items:center;justify-content:center;
  font-size:.95rem;box-shadow:0 2px 8px rgba(0,0,0,.15);
  transition:transform var(--tr-spring),background var(--tr);
  z-index:2;
}
.rc-fav:hover{transform:scale(1.22);}
.rc-fav.saved{background:#fff0f0;}

/* Hover share overlay */
.rc-share-overlay{
  position:absolute;inset:0;
  background:linear-gradient(to bottom,transparent 30%,rgba(0,0,0,.65));
  display:flex;align-items:flex-end;justify-content:center;
  padding-bottom:14px;gap:8px;
  opacity:0;transition:opacity var(--tr);
}
.rc-img:hover .rc-share-overlay{opacity:1;}
.rc-share-btn{
  background:rgba(255,255,255,.9);color:#333;
  font-size:.7rem;font-weight:700;
  padding:5px 11px;border-radius:40px;
  display:flex;align-items:center;gap:4px;
  transition:background var(--tr),transform var(--tr);
}
.rc-share-btn:hover{background:#fff;transform:scale(1.06);}

/* Card body */
.rc-body{padding:14px 14px 12px;flex:1;display:flex;flex-direction:column;gap:8px;}
.rc-name{
  font-family:var(--f-display);font-size:.98rem;font-weight:700;
  line-height:1.3;cursor:pointer;
  transition:color var(--tr);
}
.rc-name:hover{color:var(--pri);}

/* Nutrition chips */
.rc-nutrition{display:flex;gap:6px;flex-wrap:wrap;}
.nutr-chip{
  font-size:.68rem;font-weight:600;padding:3px 8px;
  border-radius:40px;white-space:nowrap;
}
.nc-cal{background:rgba(255,107,53,.1);color:var(--acc);}
.nc-pro{background:rgba(15,157,118,.1);color:var(--pri);}
.nc-carb{background:rgba(245,158,11,.1);color:var(--gold);}

/* Meta row */
.rc-meta{display:flex;align-items:center;gap:8px;flex-wrap:wrap;}
.rc-meta-chip{
  font-size:.72rem;color:var(--text2);
  display:flex;align-items:center;gap:3px;
}
.diff-pill{
  font-size:.67rem;font-weight:700;padding:2px 8px;border-radius:40px;
}
.dp-Easy  {background:#e8f5e9;color:#2e7d32;}
.dp-Medium{background:#fff8e1;color:#e65100;}
.dp-Hard  {background:#fce4ec;color:#c62828;}
[data-theme="dark"] .dp-Easy  {background:rgba(46,125,50,.2);color:#81c784;}
[data-theme="dark"] .dp-Medium{background:rgba(230,81,0,.2); color:#ffb74d;}
[data-theme="dark"] .dp-Hard  {background:rgba(198,40,40,.2);color:#ef9a9a;}

/* Stars */
.rc-stars{display:flex;align-items:center;gap:5px;}
.stars-row{display:flex;gap:1px;}
.star{
  font-size:.85rem;cursor:pointer;
  transition:transform var(--tr-spring),filter var(--tr);
  line-height:1;
}
.star:hover{transform:scale(1.3);}
.star.on {color:var(--gold);filter:drop-shadow(0 0 3px rgba(245,158,11,.5));}
.star.off{color:var(--border);}
.rc-rating-txt{font-size:.72rem;color:var(--text2);}

/* Action btn */
.rc-actions{display:flex;gap:8px;margin-top:4px;}
.btn-view{
  flex:1;padding:9px 14px;border-radius:var(--r-sm);
  background:var(--pri);color:#fff;
  font-size:.8rem;font-weight:700;letter-spacing:.02em;
  text-align:center;
  transition:all var(--tr);
  box-shadow:0 2px 8px rgba(15,157,118,.25);
}
.btn-view:hover{background:var(--pri-dark);transform:translateY(-2px);box-shadow:0 4px 16px rgba(15,157,118,.35);}
.btn-plan{
  padding:9px 12px;border-radius:var(--r-sm);
  border:1.5px solid var(--border);color:var(--text2);
  font-size:.8rem;font-weight:600;
  transition:all var(--tr);
}
.btn-plan:hover{border-color:var(--pri);color:var(--pri);background:var(--pri-light);}

/* =====================================================
   SKELETON LOADER
===================================================== */
.sk-card{
  background:var(--surface);border-radius:var(--r);
  border:1px solid var(--border);overflow:hidden;
  animation:cardIn .4s ease both;
}
.sk-img{height:190px;background:var(--surface2);position:relative;overflow:hidden;}
.sk-img::after,.sk-line::after{
  content:'';position:absolute;inset:0;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);
  animation:shimmer 1.6s infinite;
}
[data-theme="dark"] .sk-img::after,[data-theme="dark"] .sk-line::after{
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent);
}
@keyframes shimmer{from{transform:translateX(-100%);}to{transform:translateX(100%);}}
.sk-body{padding:14px;}
.sk-line{
  height:12px;border-radius:6px;background:var(--surface2);
  margin-bottom:10px;position:relative;overflow:hidden;
}
.sk-line.w80{width:80%;}
.sk-line.w60{width:60%;}
.sk-line.w40{width:40%;}

/* =====================================================
   EMPTY STATE
===================================================== */
.empty-state{
  text-align:center;padding:60px 24px;
  display:flex;flex-direction:column;align-items:center;gap:14px;
}
.empty-state .es-icon{font-size:4rem;}
.empty-state h3{font-family:var(--f-display);font-size:1.3rem;font-weight:700;}
.empty-state p{color:var(--text2);max-width:320px;}

/* =====================================================
   INNER PAGES
===================================================== */
.inner-page{max-width:1440px;margin:0 auto;padding:24px 20px 60px;}
.breadcrumb{
  display:flex;align-items:center;gap:6px;
  font-size:.8rem;color:var(--text2);margin-bottom:18px;flex-wrap:wrap;
}
.breadcrumb a{color:var(--pri);font-weight:600;}
.breadcrumb a:hover{text-decoration:underline;}
.bc-sep{color:var(--text3);}
.ip-header{display:flex;align-items:center;gap:12px;margin-bottom:24px;}
.ip-header h2{font-family:var(--f-display);font-size:1.5rem;font-weight:800;}
.ip-count{background:var(--surface2);color:var(--text2);padding:3px 12px;border-radius:40px;font-size:.8rem;}

/* =====================================================
   RECIPE DETAIL
===================================================== */
.detail-hero{
  position:relative;border-radius:var(--r-lg);overflow:hidden;
  height:min(400px,50vw);margin-bottom:28px;cursor:pointer;
}
.detail-hero img{width:100%;height:100%;object-fit:cover;}
.detail-hero-overlay{
  position:absolute;inset:0;
  background:linear-gradient(to top,rgba(0,0,0,.75) 0%,rgba(0,0,0,.1) 60%);
  display:flex;align-items:flex-end;padding:28px 32px;
}
.dho-content{flex:1;}
.dho-tag{
  display:inline-flex;align-items:center;gap:6px;
  background:var(--pri);color:#fff;
  font-size:.72rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;
  padding:5px 14px;border-radius:40px;margin-bottom:12px;
}
.dho-title{
  font-family:var(--f-display);font-size:clamp(1.5rem,3.5vw,2.4rem);
  font-weight:800;color:#fff;line-height:1.2;
  text-shadow:0 2px 12px rgba(0,0,0,.3);
}
.dho-actions{display:flex;gap:8px;margin-left:16px;align-items:flex-end;flex-shrink:0;}
.dho-btn{
  padding:10px 18px;border-radius:var(--r-sm);
  font-size:.8rem;font-weight:700;
  background:rgba(255,255,255,.15);color:#fff;
  border:1.5px solid rgba(255,255,255,.35);
  backdrop-filter:blur(8px);
  transition:all var(--tr);display:flex;align-items:center;gap:6px;
}
.dho-btn:hover{background:rgba(255,255,255,.28);}
.dho-btn.pri{background:var(--pri);border-color:var(--pri);}

/* Nutrition banner */
.nutr-banner{
  display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));
  gap:12px;margin-bottom:28px;
}
.nutr-card{
  background:var(--surface);border:1px solid var(--border);
  border-radius:var(--r);padding:16px;text-align:center;
  transition:all var(--tr);box-shadow:var(--shadow-xs);
}
.nutr-card:hover{box-shadow:var(--shadow-sm);transform:translateY(-2px);border-color:var(--pri);}
.nutr-val{
  font-family:var(--f-display);font-size:1.5rem;font-weight:800;
  color:var(--pri);line-height:1;margin-bottom:4px;
}
.nutr-lbl{font-size:.7rem;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--text2);}

/* Detail rating */
.detail-rating-row{
  display:flex;align-items:center;gap:14px;
  padding:16px;background:var(--surface);border:1px solid var(--border);
  border-radius:var(--r);margin-bottom:20px;flex-wrap:wrap;gap:12px;
}
.dr-label{font-weight:700;font-size:.9rem;}
.dr-stars{display:flex;gap:4px;}
.dr-star{
  font-size:1.4rem;cursor:pointer;
  transition:transform var(--tr-spring),filter var(--tr);
}
.dr-star:hover{transform:scale(1.3);}
.dr-star.on {color:var(--gold);filter:drop-shadow(0 0 4px rgba(245,158,11,.5));}
.dr-star.off{color:var(--border);}
.dr-count{font-size:.82rem;color:var(--text2);}

/* Detail action bar */
.detail-action-bar{
  display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px;
}
.dab-btn{
  display:flex;align-items:center;gap:7px;
  padding:10px 18px;border-radius:var(--r-sm);
  font-size:.82rem;font-weight:700;
  border:1.5px solid var(--border);color:var(--text2);
  background:var(--surface);
  transition:all var(--tr);
}
.dab-btn:hover{border-color:var(--pri);color:var(--pri);background:var(--pri-light);}
.dab-btn.pri-btn{background:var(--pri);color:#fff;border-color:var(--pri);}
.dab-btn.pri-btn:hover{background:var(--pri-dark);}

/* Social share row */
.social-row{
  display:flex;gap:8px;flex-wrap:wrap;padding:16px;
  background:var(--surface);border:1px solid var(--border);
  border-radius:var(--r);margin-bottom:24px;
}
.soc-btn{
  display:flex;align-items:center;gap:6px;
  padding:9px 16px;border-radius:var(--r-sm);
  font-size:.78rem;font-weight:700;color:#fff;
  transition:all var(--tr);
}
.soc-btn:hover{transform:translateY(-2px);filter:brightness(1.1);}
.soc-tw{background:#1da1f2;} .soc-fb{background:#1877f2;}
.soc-wa{background:#25d366;} .soc-ig{background:linear-gradient(135deg,#f09433,#dc2743,#bc1888);}
.soc-cp{background:var(--text2);}

/* Detail body */
.detail-body{display:grid;grid-template-columns:1fr 1.5fr;gap:28px;align-items:start;}
.detail-section h3{
  font-family:var(--f-display);font-size:1.05rem;font-weight:800;
  padding-bottom:10px;margin-bottom:14px;
  border-bottom:2px solid var(--border);
  display:flex;align-items:center;gap:8px;
}
.ingredient-list{list-style:none;display:flex;flex-direction:column;gap:8px;}
.ingredient-list li{
  display:flex;align-items:center;gap:10px;
  padding:10px 14px;
  background:var(--surface2);border-radius:var(--r-sm);
  border-left:3px solid var(--pri);
  font-size:.88rem;
  transition:all var(--tr);
}
.ingredient-list li:hover{background:var(--pri-light);transform:translateX(3px);}
.ing-dot{color:var(--pri);font-size:1rem;flex-shrink:0;}
.steps-list{list-style:none;display:flex;flex-direction:column;gap:12px;}
.step-item{
  display:flex;gap:14px;
  background:var(--surface);border:1px solid var(--border);
  border-radius:var(--r);padding:14px 16px;
  transition:all var(--tr);
}
.step-item:hover{border-color:var(--pri);box-shadow:var(--shadow-sm);transform:translateX(3px);}
.step-num{
  width:30px;height:30px;border-radius:50%;
  background:var(--pri);color:#fff;
  display:flex;align-items:center;justify-content:center;
  font-size:.75rem;font-weight:800;flex-shrink:0;
  box-shadow:0 2px 8px rgba(15,157,118,.35);
}
.step-txt{font-size:.88rem;line-height:1.65;padding-top:4px;color:var(--text);}

/* Related recipes */
.related-section{margin-top:36px;}
.related-section h3{font-family:var(--f-display);font-size:1.1rem;font-weight:800;margin-bottom:16px;}
.related-scroll{
  display:flex;gap:14px;overflow-x:auto;padding-bottom:8px;
  scrollbar-width:none;
}
.related-scroll::-webkit-scrollbar{display:none;}
.related-card{
  min-width:180px;background:var(--surface);border:1px solid var(--border);
  border-radius:var(--r);overflow:hidden;cursor:pointer;flex-shrink:0;
  transition:all var(--tr);
}
.related-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-md);border-color:var(--pri);}
.related-img{height:120px;overflow:hidden;}
.related-img img{width:100%;height:100%;object-fit:cover;transition:transform .4s;}
.related-card:hover .related-img img{transform:scale(1.08);}
.related-info{padding:10px 12px;}
.related-name{font-size:.82rem;font-weight:700;font-family:var(--f-display);}
.related-cat{font-size:.7rem;color:var(--text2);}

/* =====================================================
   MODALS
===================================================== */
.modal-overlay{
  position:fixed;inset:0;z-index:800;
  background:rgba(0,0,0,.55);backdrop-filter:blur(6px);
  display:none;align-items:center;justify-content:center;padding:20px;
  transition:opacity .25s;
}
.modal-overlay.open{display:flex;animation:ovIn .22s ease;}
@keyframes ovIn{from{opacity:0;}to{opacity:1;}}
.modal-box{
  background:var(--surface);border-radius:var(--r-xl);
  padding:0;width:100%;max-width:460px;
  position:relative;max-height:92vh;overflow:hidden;
  display:flex;flex-direction:column;
  box-shadow:var(--shadow-xl);
  animation:mbIn .35s cubic-bezier(.34,1.56,.64,1);
}
@keyframes mbIn{from{opacity:0;transform:scale(.88) translateY(24px);}to{opacity:1;transform:scale(1) translateY(0);}}
.modal-box.wide{max-width:720px;}
.modal-box.ultra{max-width:1000px;}
.modal-close{
  position:absolute;top:14px;right:14px;z-index:10;
  width:32px;height:32px;border-radius:50%;font-size:1rem;
  display:flex;align-items:center;justify-content:center;
  background:rgba(0,0,0,.12);color:inherit;
  transition:all var(--tr);
}
.modal-close:hover{background:rgba(220,38,38,.15);color:#dc2626;transform:rotate(90deg);}
.modal-scroll{overflow-y:auto;flex:1;padding:32px;}

/* Login modal split */
.login-split{display:flex;min-height:400px;}
.login-left{
  width:220px;flex-shrink:0;
  background:linear-gradient(145deg,var(--pri) 0%,var(--pri-dark) 100%);
  display:flex;flex-direction:column;align-items:center;justify-content:center;
  padding:28px;text-align:center;color:#fff;
}
.ll-icon{font-size:3.5rem;margin-bottom:14px;animation:float 3s ease infinite;}
@keyframes float{0%,100%{transform:translateY(0);}50%{transform:translateY(-8px);}}
.ll-title{font-family:var(--f-display);font-size:1.2rem;font-weight:800;margin-bottom:8px;}
.ll-sub{font-size:.8rem;opacity:.82;line-height:1.5;}
.login-right{flex:1;padding:28px;overflow-y:auto;}
.modal-tabs{display:flex;background:var(--surface2);border-radius:var(--r-sm);padding:4px;margin-bottom:22px;gap:4px;}
.mtab{
  flex:1;padding:9px;border-radius:var(--r-sm);
  font-size:.85rem;font-weight:700;color:var(--text2);
  transition:all var(--tr);
}
.mtab.active{background:var(--surface);color:var(--pri);box-shadow:var(--shadow-xs);}
.modal-title{font-family:var(--f-display);font-size:1.4rem;font-weight:800;margin-bottom:6px;}
.modal-sub{font-size:.85rem;color:var(--text2);margin-bottom:20px;}
.form-group{margin-bottom:14px;}
.form-group label{display:block;font-size:.78rem;font-weight:700;color:var(--text2);margin-bottom:6px;letter-spacing:.04em;text-transform:uppercase;}
.form-error{font-size:.8rem;color:#e53e3e;min-height:18px;margin-bottom:8px;}
.btn-submit{
  width:100%;padding:13px;border-radius:var(--r-sm);
  background:var(--pri);color:#fff;font-weight:800;font-size:.9rem;
  box-shadow:0 4px 16px rgba(15,157,118,.35);
  transition:all var(--tr-spring);
}
.btn-submit:hover{background:var(--pri-dark);transform:translateY(-2px);box-shadow:0 8px 24px rgba(15,157,118,.45);}
.modal-legal{font-size:.72rem;color:var(--text2);text-align:center;margin-top:12px;line-height:1.5;}
.modal-legal a{color:var(--pri);}

/* Add recipe modal */
.modal-header{padding:24px 28px 0;border-bottom:1px solid var(--border);padding-bottom:18px;margin-bottom:0;}
.modal-header h2{font-family:var(--f-display);font-size:1.3rem;font-weight:800;}
.modal-header p{font-size:.84rem;color:var(--text2);margin-top:4px;}
.ar-grid{display:grid;grid-template-columns:1fr 1fr;gap:0 20px;}
.ar-grid .form-group{margin-bottom:14px;}
.ar-grid .span2{grid-column:span 2;}
.modal-footer{padding:16px 28px;border-top:1px solid var(--border);display:flex;gap:10px;justify-content:flex-end;}
.btn-cancel{padding:11px 22px;border-radius:var(--r-sm);border:1.5px solid var(--border);color:var(--text2);font-weight:600;font-size:.85rem;transition:all var(--tr);}
.btn-cancel:hover{border-color:var(--pri);color:var(--pri);}
.btn-save{padding:11px 26px;border-radius:var(--r-sm);background:var(--acc);color:#fff;font-weight:800;font-size:.85rem;transition:all var(--tr);}
.btn-save:hover{background:var(--acc-dark);transform:translateY(-1px);}

/* Meal planner */
.mp-grid{
  display:grid;
  grid-template-columns:90px repeat(3,1fr);
  gap:8px;overflow-x:auto;
}
.mp-head{font-size:.72rem;font-weight:800;color:var(--text2);text-transform:uppercase;letter-spacing:.08em;padding:8px 4px;text-align:center;}
.mp-day{font-size:.8rem;font-weight:700;color:var(--text);display:flex;align-items:center;}
.mp-slot{
  min-height:72px;border-radius:var(--r-sm);
  border:1.5px dashed var(--border);
  display:flex;align-items:center;justify-content:center;
  cursor:pointer;padding:8px;text-align:center;
  transition:all var(--tr);
}
.mp-slot:hover{border-color:var(--pri);background:var(--pri-light);}
.mp-slot.filled{border-style:solid;border-color:var(--pri);background:rgba(15,157,118,.07);}
.mp-slot-name{font-size:.75rem;font-weight:700;color:var(--text);line-height:1.3;}
.mp-slot-clear{font-size:.65rem;color:var(--text2);text-decoration:underline;display:block;margin-top:3px;}
.mp-empty{font-size:.72rem;color:var(--text3);}

/* Slot picker */
.slot-search{margin-bottom:12px;}
.slot-list{max-height:360px;overflow-y:auto;display:flex;flex-direction:column;gap:8px;}
.slot-item{
  display:flex;align-items:center;gap:12px;padding:10px 12px;
  border-radius:var(--r-sm);border:1px solid var(--border);cursor:pointer;
  transition:all var(--tr);
}
.slot-item:hover{border-color:var(--pri);background:var(--pri-light);}
.slot-img{width:48px;height:48px;border-radius:var(--r-sm);object-fit:cover;flex-shrink:0;}
.slot-name{font-size:.87rem;font-weight:700;}
.slot-cat{font-size:.72rem;color:var(--text2);}

/* =====================================================
   TOAST
===================================================== */
.toast{
  position:fixed;bottom:28px;left:50%;
  transform:translateX(-50%) translateY(80px);
  background:var(--text);color:var(--bg);
  padding:12px 22px;border-radius:40px;
  font-size:.85rem;font-weight:600;
  box-shadow:var(--shadow-lg);z-index:9000;
  white-space:nowrap;opacity:0;
  transition:opacity .3s,transform .38s var(--tr-spring);
  pointer-events:none;
  display:flex;align-items:center;gap:8px;
}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0);}
.toast-icon{font-size:1rem;}

/* =====================================================
   BOTTOM NAV (mobile)
===================================================== */
.bottom-nav{
  display:none;
  position:fixed;bottom:0;left:0;right:0;z-index:490;
  height:58px;background:var(--surface);
  border-top:1px solid var(--border);
  box-shadow:0 -4px 20px rgba(0,0,0,.08);
}
.bn-inner{display:flex;height:100%;}
.bn-btn{
  flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;
  gap:3px;font-size:.6rem;font-weight:700;color:var(--text2);
  transition:color var(--tr);letter-spacing:.03em;
  text-transform:uppercase;
}
.bn-btn .bn-icon{font-size:1.25rem;transition:transform var(--tr-spring);}
.bn-btn.active{color:var(--pri);}
.bn-btn.active .bn-icon{transform:scale(1.2);}
.bn-btn:hover{color:var(--pri);}

/* =====================================================
   PAGE VIEWS
===================================================== */
.page-view{animation:pvIn .4s cubic-bezier(.22,1,.36,1) both;}
@keyframes pvIn{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}

/* =====================================================
   BACK BUTTON
===================================================== */
.back-btn{
  display:inline-flex;align-items:center;gap:8px;
  padding:10px 18px;border-radius:var(--r-sm);
  border:1.5px solid var(--border);color:var(--text2);
  font-size:.85rem;font-weight:700;
  margin-bottom:20px;
  transition:all var(--tr);background:var(--surface);
  box-shadow:var(--shadow-xs);
}
.back-btn:hover{border-color:var(--pri);color:var(--pri);background:var(--pri-light);}

/* =====================================================
   RESPONSIVE
===================================================== */
@media(max-width:1100px){
  .sidebar{width:220px;}
  .recipe-grid{grid-template-columns:repeat(auto-fill,minmax(190px,1fr));}
}
@media(max-width:900px){
  .sidebar{display:none;}
  .recipe-grid{grid-template-columns:repeat(auto-fill,minmax(200px,1fr));}
  .detail-body{grid-template-columns:1fr;}
  .ar-grid{grid-template-columns:1fr;}
  .ar-grid .span2{grid-column:span 1;}
  .login-left{display:none;}
  .nutr-banner{grid-template-columns:repeat(3,1fr);}
  .stats-inner{overflow-x:auto;}
  .stat-item{min-width:160px;}
}
@media(max-width:700px){
  :root{--nav-h:56px;--pill-h:44px;}
  .nav-logo-sub,.nav-right .nav-btn{display:none;}
  .nav-search-wrap{max-width:none;}
  .ham-btn{display:flex;}
  .bottom-nav{display:block;}
  body{padding-bottom:58px;}
  .hero-slide{height:min(260px,70vw);}
  .hsc-title{font-size:1.3rem;}
  .hsc-sub{display:none;}
  .stats-strip{display:none;}
  .shop-layout{flex-direction:column;}
  .recipe-grid{grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px;}
  .rc-img{height:150px;}
  .detail-hero{height:220px;}
  .detail-hero-overlay{padding:18px 20px;}
  .dho-title{font-size:1.3rem;}
  .dho-actions{display:none;}
  .mp-grid{grid-template-columns:70px repeat(3,1fr);}
  .modal-box.ultra{max-width:100%;}
  .back-btn{padding:8px 14px;font-size:.8rem;}
  .shop-wrapper{padding:12px;}
}
@media(max-width:440px){
  .recipe-grid{grid-template-columns:1fr 1fr;}
  .nutr-banner{grid-template-columns:1fr 1fr;}
}

/* =====================================================
   PRINT
===================================================== */
@media print{
  .navbar,.pill-bar,.sidebar,.bottom-nav,.toast,
  .detail-action-bar,.social-row,.modal-overlay,
  .back-btn,.related-section{display:none!important;}
  body{background:#fff!important;color:#000!important;}
  .detail-hero{height:220px;}
  .detail-body{grid-template-columns:1fr 1fr;}
}
