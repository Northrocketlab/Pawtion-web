const copy={th:{navHome:'หน้าหลัก',navCalc:'คำนวณอาหาร',navReferences:'แหล่งอ้างอิง',methodology:'แนวทางด้านโภชนาการ',officialSource:'แหล่งข้อมูลทางการ ↗',methodNote:'เกณฑ์สุนัขในเครื่องคำนวณเป็นค่าประมาณตามขนาดตัวเพื่อใช้งานจริง ไม่ใช่ช่วงอายุคงที่ที่ AAHA กำหนด',title:'แหล่งอ้างอิง',intro:'พื้นที่สำหรับรวบรวมข้อมูล งานวิจัย และตัวอย่างที่เราจะนำไปพัฒนาส่วนต่าง ๆ ของหน้าหลักในภายหลัง',back:'กลับหน้าหลัก <span>→</span>',footer:'เพื่อทุกมื้อที่พอดี'},en:{navHome:'Home',navCalc:'Calculator',navReferences:'References',methodology:'Nutrition methodology',officialSource:'Official source ↗',methodNote:'Dog thresholds in the calculator are practical size-based estimates, not fixed age cutoffs prescribed by AAHA.',title:'References',intro:'A place to collect information, research and examples that can later guide updates to specific parts of the main page.',back:'Back to home <span>→</span>',footer:'For every perfectly portioned meal.'}};
let lang='th';try{const saved=localStorage.getItem('pawtion-language');if(['th','en'].includes(saved))lang=saved;}catch{}
const languageButton=document.querySelector('#language-toggle');
function translate(){document.documentElement.lang=lang;document.querySelectorAll('[data-i18n]').forEach(el=>el.innerHTML=copy[lang][el.dataset.i18n]);document.querySelectorAll('[data-i18n-html]').forEach(el=>el.innerHTML=copy[lang][el.dataset.i18nHtml]);document.querySelectorAll('[data-language]').forEach(el=>el.classList.toggle('active',el.dataset.language===lang));languageButton.setAttribute('aria-label',lang==='th'?'Switch to English':'เปลี่ยนเป็นภาษาไทย');}
languageButton.addEventListener('click',()=>{lang=lang==='th'?'en':'th';try{localStorage.setItem('pawtion-language',lang);}catch{}translate();});
const themeSelect=document.querySelector('#theme-select');
const systemTheme=window.matchMedia('(prefers-color-scheme: light)');
let theme='auto';
function applyTheme(value){theme=['light','dark','auto'].includes(value)?value:'auto';document.documentElement.dataset.theme=theme==='auto'?(systemTheme.matches?'light':'dark'):theme;document.documentElement.dataset.themeMode=theme;themeSelect.value=theme;}
try{theme=localStorage.getItem('pawtion-theme')||'auto';}catch{}
themeSelect.addEventListener('change',()=>{try{localStorage.setItem('pawtion-theme',themeSelect.value);}catch{}applyTheme(themeSelect.value);});
systemTheme.addEventListener('change',()=>{if(theme==='auto')applyTheme('auto');});
applyTheme(theme);translate();
