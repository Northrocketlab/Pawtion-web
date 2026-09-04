const copy={th:{navHome:'หน้าหลัก',navCalc:'คำนวณอาหาร',navReferences:'แหล่งอ้างอิง',title:'แหล่งอ้างอิง',intro:'พื้นที่สำหรับรวบรวมข้อมูล งานวิจัย และตัวอย่างที่เราจะนำไปพัฒนาส่วนต่าง ๆ ของหน้าหลักในภายหลัง',nutrition:'โภชนาการ',design:'ดีไซน์และเนื้อหา',other:'ข้อมูลอื่น ๆ',empty:'พร้อมสำหรับเพิ่มแหล่งอ้างอิง',back:'กลับหน้าหลัก <span>→</span>',footer:'เพื่อทุกมื้อที่พอดี'},en:{navHome:'Home',navCalc:'Calculator',navReferences:'References',title:'References',intro:'A place to collect information, research and examples that can later guide updates to specific parts of the main page.',nutrition:'Nutrition',design:'Design & content',other:'Other information',empty:'Ready for references',back:'Back to home <span>→</span>',footer:'For every perfectly portioned meal.'}};
let lang='th';
const languageButton=document.querySelector('#language-toggle');
function translate(){document.documentElement.lang=lang;document.querySelectorAll('[data-i18n]').forEach(el=>el.innerHTML=copy[lang][el.dataset.i18n]);document.querySelectorAll('[data-i18n-html]').forEach(el=>el.innerHTML=copy[lang][el.dataset.i18nHtml]);document.querySelectorAll('[data-language]').forEach(el=>el.classList.toggle('active',el.dataset.language===lang));languageButton.setAttribute('aria-label',lang==='th'?'Switch to English':'เปลี่ยนเป็นภาษาไทย');}
languageButton.addEventListener('click',()=>{lang=lang==='th'?'en':'th';translate();});
const themeSelect=document.querySelector('#theme-select');
const systemTheme=window.matchMedia('(prefers-color-scheme: light)');
let theme='auto';
function applyTheme(value){theme=['light','dark','auto'].includes(value)?value:'auto';document.documentElement.dataset.theme=theme==='auto'?(systemTheme.matches?'light':'dark'):theme;document.documentElement.dataset.themeMode=theme;themeSelect.value=theme;}
try{theme=localStorage.getItem('pawtion-theme')||'auto';}catch{}
themeSelect.addEventListener('change',()=>{try{localStorage.setItem('pawtion-theme',themeSelect.value);}catch{}applyTheme(themeSelect.value);});
systemTheme.addEventListener('change',()=>{if(theme==='auto')applyTheme('auto');});
applyTheme(theme);translate();
