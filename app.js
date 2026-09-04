function getSavedLanguage(){try{const saved=localStorage.getItem('pawtion-language');return ['th','en'].includes(saved)?saved:'th';}catch{return'th';}}
const state = { species: 'dog', neutered: 'yes', condition: 'ideal', step: 1, lang: getSavedLanguage(), theme: 'auto' };
const dictionary = {
  th: {
    navHome:'หน้าหลัก',navReferences:'แหล่งอ้างอิง',navCalc:'คำนวณอาหาร', heroEyebrow:'NUTRITION, SIMPLIFIED', heroTitle:'อาหารที่พอดี<br /><em>สำหรับเขา</em>', heroCopy:'คำแนะนำปริมาณอาหารรายวันสำหรับน้องหมาและน้องแมว<br class="desktop" /> เริ่มจากข้อมูลที่เป็นของเขาจริง ๆ', heroButton:'เริ่มคำนวณ <span>↓</span>',
    age:'อายุ',ageUnit:'หน่วยอายุ',weeks:'สัปดาห์',months:'เดือน',years:'ปี',adultSize:'ขนาดเมื่อโตเต็มวัย',sizeAuto:'ประเมินจากน้ำหนักปัจจุบัน',sizeSmall:'เล็ก — ต่ำกว่า 10 กก.',sizeMedium:'กลาง — 10–25 กก.',sizeLarge:'ใหญ่ — 25–40 กก.',sizeGiant:'ใหญ่มาก — มากกว่า 40 กก.',sizeHelp:'หากเลือกประเมินอัตโนมัติ Pawtion จะใช้น้ำหนักปัจจุบันเป็นค่าประมาณ',lifeStageTooltip:'ช่วงวัยช่วยให้ Pawtion เลือกแนวทางการคำนวณโภชนาการที่เหมาะสม แต่อายุเพียงอย่างเดียวไม่สามารถกำหนดความต้องการพลังงานได้ทั้งหมด โดยยังต้องพิจารณารูปร่าง ระดับกิจกรรม สถานะการทำหมัน การเจริญเติบโต สุขภาพ และความแตกต่างของสัตว์แต่ละตัวร่วมด้วย',stagePuppy:'ลูกสุนัข',stageKitten:'ลูกแมว',stageYoungAdult:'วัยโตตอนต้น',stageMatureAdult:'วัยโตเต็มวัย',stageSenior:'สูงวัย',contextPuppy:'ลูกสุนัขมีความต้องการพลังงานและสารอาหารแตกต่างจากสุนัขโต โดยควรพิจารณาอัตราการเจริญเติบโตและขนาดตัวเมื่อโตเต็มวัยร่วมด้วย',contextKitten:'ลูกแมวกำลังเจริญเติบโตและต้องการพลังงานกับสารอาหารที่เหมาะกับการเติบโต',contextYoungAdult:'ควรปรับปริมาณพลังงานเพื่อรักษารูปร่างและน้ำหนักตัวที่เหมาะสม และป้องกันภาวะน้ำหนักเกิน',contextMatureAdult:'ความต้องการพลังงานอาจเปลี่ยนไปตามอายุ ระดับกิจกรรม รูปร่าง และสุขภาพของสัตว์แต่ละตัว',contextSenior:'สัตว์สูงอายุไม่ควรถูกลดพลังงานโดยอัตโนมัติ ความต้องการพลังงานควรพิจารณารูปร่าง มวลกล้ามเนื้อ ระดับกิจกรรม สุขภาพ และการเปลี่ยนแปลงของแต่ละตัวร่วมด้วย',profileTitle:'บอกเราเรื่องเขาสักหน่อย',profileCopy:'ผลลัพธ์เป็นจุดเริ่มต้นสำหรับสัตว์เลี้ยงสุขภาพดี โปรดปรับตามน้ำหนักและสภาพร่างกายจริง',dog:'สุนัข',dogCaption:'Dog',cat:'แมว',catCaption:'Cat',petName:'ชื่อน้อง <i>ไม่บังคับ</i>',weight:'น้ำหนักปัจจุบัน',kg:'กก.',lifeStage:'ช่วงวัย',adult:'โตเต็มวัย (1–7 ปี)',young:'วัยอ่อน / กำลังโต',senior:'สูงวัย (7 ปีขึ้นไป)',
    neuteredQ:'ทำหมันแล้วหรือยัง?',neuteredYes:'ทำหมันแล้ว',neuteredNo:'ยังไม่ทำ',conditionQ:'รูปร่างตอนนี้เป็นอย่างไร?',thin:'ผอม',gain:'ต้องการเพิ่มน้ำหนัก',ideal:'สมส่วน',maintain:'รักษาน้ำหนัก',overweight:'มีน้ำหนักเกิน',lose:'ค่อย ๆ ลดน้ำหนัก',activityQ:'กิจกรรมในแต่ละวัน',low:'น้อย',lowDetail:'เดินเล่นหรือเล่นเบา ๆ ต่ำกว่า 30 นาที',moderate:'ปานกลาง',moderateDetail:'มีกิจกรรม 30–60 นาทีต่อวัน',high:'มาก',highDetail:'ออกกำลังหรือวิ่งเล่นมากกว่า 60 นาที',foodEnergy:'พลังงานของอาหารที่ใช้ <i>ดูจากฉลาก</i>',back:'ย้อนกลับ',reset:'คำนวณใหม่ ↻',
    resultHeading:'ปริมาณที่เหมาะกับน้อง',dailyEnergy:'พลังงานต่อวัน',dailyFood:'ปริมาณอาหารต่อวัน',twoMeals:'แบ่งเป็น 2 มื้อ',weekPrep:'เตรียมต่อสัปดาห์',treatEnergy:'พลังงานขนม',treatLimit:'ไม่เกิน 10%',note:'ตัวเลขนี้เป็นค่าเริ่มต้นจากน้ำหนัก ช่วงวัย การทำหมัน กิจกรรม และรูปร่างของน้อง ควรชั่งน้ำหนักและสังเกตสภาพร่างกายทุก 2–4 สัปดาห์',disclaimer:'สำหรับสัตว์เลี้ยงสุขภาพดีเท่านั้น หากกำลังตั้งท้อง ให้นม มีโรคประจำตัว หรือมีการเปลี่ยนแปลงน้ำหนักผิดปกติ โปรดปรึกษาสัตวแพทย์ก่อนปรับอาหาร',knowledgeTitle:'เริ่มให้ดี แล้วค่อยปรับให้พอดี',readLabel:'อ่านฉลาก',readLabelCopy:'กรอกค่า kcal ต่อ 100 กรัมจากอาหารที่น้องกินจริง เพื่อให้ผลลัพธ์แม่นยำขึ้น',weigh:'ชั่ง ไม่กะ',weighCopy:'ใช้เครื่องชั่งครัวตวงอาหารเป็นกรัม แทนการกะด้วยถ้วยหรือสายตา',follow:'ติดตามผล',followCopy:'ปรับปริมาณทีละน้อยตามน้ำหนัก รูปร่าง และกิจกรรมที่เปลี่ยนไป',footer:'เพื่อทุกมื้อที่พอดี',
    steps:['เลือกสัตว์เลี้ยง','ข้อมูลพื้นฐาน','รูปร่างและการทำหมัน','อาหารและกิจกรรม'],next:'ถัดไป <span>→</span>',view:'ดูคำแนะนำ <span>→</span>',resultFor:'ปริมาณที่เหมาะกับ',dogWord:'น้องหมา',catWord:'น้องแมว',intro:(weight,calories,stage)=>`คำนวณจากช่วงวัย ${stage} น้ำหนัก ${weight} กก. และอาหารที่ให้พลังงาน ${calories} kcal ต่อ 100 กรัม`,grams:'กรัม',perMeal:'กรัม / มื้อ'
  },
  en: {
    navHome:'Home',navReferences:'References',navCalc:'Calculator',heroEyebrow:'NUTRITION, SIMPLIFIED',heroTitle:'Just enough food<br /><em>for them.</em>',heroCopy:'A daily feeding guide for dogs and cats,<br class="desktop" /> based on the details that make them unique.',heroButton:'Start calculating <span>↓</span>',
    age:'Age',ageUnit:'Age unit',weeks:'Weeks',months:'Months',years:'Years',adultSize:'Expected adult size',sizeAuto:'Estimate from current weight',sizeSmall:'Small — under 10 kg',sizeMedium:'Medium — 10–25 kg',sizeLarge:'Large — 25–40 kg',sizeGiant:'Giant — over 40 kg',sizeHelp:'When Auto is selected, Pawtion uses current weight as a practical estimate.',lifeStageTooltip:'Life stage helps Pawtion select an appropriate nutrition calculation pathway. Age alone does not determine energy needs; body condition, activity, reproductive status, growth, health, and individual variation also matter.',stagePuppy:'Puppy',stageKitten:'Kitten',stageYoungAdult:'Young Adult',stageMatureAdult:'Mature Adult',stageSenior:'Senior',contextPuppy:'Growing dogs have different energy and nutrient requirements from adult dogs. Growth rate and expected adult size should be considered.',contextKitten:'Growing kittens need energy and nutrients appropriate for healthy development.',contextYoungAdult:'Energy intake should be adjusted to maintain an ideal body condition and prevent excess weight gain.',contextMatureAdult:'Energy needs may gradually change with age, activity, body condition, and health status.',contextSenior:'Senior pets should not automatically receive fewer calories. Energy needs depend on body condition, muscle condition, activity, health, and individual changes associated with aging.',profileTitle:'Tell us a little about them.',profileCopy:'This result is a starting point for healthy pets. Adjust it based on real weight and body condition.',dog:'Dog',dogCaption:'Canine',cat:'Cat',catCaption:'Feline',petName:'Pet’s name <i>optional</i>',weight:'Current weight',kg:'kg',lifeStage:'Life stage',adult:'Adult (1–7 years)',young:'Young / growing',senior:'Senior (7+ years)',
    neuteredQ:'Has your pet been neutered?',neuteredYes:'Yes, neutered',neuteredNo:'Not neutered',conditionQ:'What is their body condition?',thin:'Lean',gain:'Needs to gain weight',ideal:'Ideal',maintain:'Maintain weight',overweight:'Overweight',lose:'Gradual weight loss',activityQ:'Daily activity',low:'Low',lowDetail:'Light play or walks under 30 minutes',moderate:'Moderate',moderateDetail:'30–60 minutes of activity daily',high:'High',highDetail:'Exercise or play over 60 minutes',foodEnergy:'Food energy <i>from the label</i>',back:'Back',reset:'Calculate again ↻',
    resultHeading:'The right amount for them',dailyEnergy:'Daily energy',dailyFood:'Food per day',twoMeals:'Split into 2 meals',weekPrep:'Prepare per week',treatEnergy:'Treat energy',treatLimit:'Up to 10%',note:'This is a starting point based on weight, life stage, neuter status, activity and body condition. Weigh your pet and reassess their body condition every 2–4 weeks.',disclaimer:'For healthy pets only. Please consult a veterinarian before changing food for pregnant, nursing, ill pets, or those with unusual weight changes.',knowledgeTitle:'Start well. Then tailor it.',readLabel:'Read the label',readLabelCopy:'Enter the kcal per 100g from the food your pet actually eats for a more useful result.',weigh:'Weigh, don’t guess',weighCopy:'Use a kitchen scale to portion food in grams instead of estimating by eye.',follow:'Follow up',followCopy:'Fine-tune portions gradually as weight, body condition and activity change.',footer:'For every perfectly portioned meal.',
    steps:['Choose your pet','The basics','Body & neuter status','Food & activity'],next:'Next <span>→</span>',view:'See the guide <span>→</span>',resultFor:'The right amount for ',dogWord:'your dog',catWord:'your cat',intro:(weight,calories,stage)=>`Based on the ${stage} pathway, ${weight} kg and food with ${calories} kcal per 100g`,grams:'g',perMeal:'g / meal'
  }
};
const steps = [...document.querySelectorAll('.form-step')], next = document.querySelector('#next'), back = document.querySelector('#back'), progress = document.querySelector('.progress span');
function t(key){return dictionary[state.lang][key];}
function translatePage(){
  document.documentElement.lang = state.lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>el.innerHTML=t(el.dataset.i18n));
  document.querySelectorAll('[data-i18n-html]').forEach(el=>el.innerHTML=t(el.dataset.i18nHtml));
  document.querySelectorAll('#language-toggle [data-language]').forEach(option=>option.classList.toggle('active',option.dataset.language===state.lang));
  document.querySelector('#language-toggle').setAttribute('aria-label',state.lang==='th'?'Switch to English':'เปลี่ยนเป็นภาษาไทย');
  document.querySelector('#pet-name').placeholder=state.lang==='th'?'เช่น โมจิ':'e.g. Mochi';
  document.querySelector('[data-species="dog"] img').alt=t('dog');
  document.querySelector('[data-species="cat"] img').alt=t('cat');
  renderLifeStage();
  updateStep();
}
function updateStep(){
  steps.forEach(el=>el.classList.toggle('active',Number(el.dataset.step)===state.step));
  document.querySelector('#step-number').textContent=String(state.step).padStart(2,'0');
  document.querySelector('#step-title').textContent=t('steps')[state.step-1];
  progress.style.width=`${state.step*25}%`;back.hidden=state.step===1;
  next.innerHTML=state.step===4?t('view'):t('next');
}
document.querySelector('#language-toggle').addEventListener('click',()=>{state.lang=state.lang==='th'?'en':'th';try{localStorage.setItem('pawtion-language',state.lang);}catch{}translatePage();});
const themeSelect=document.querySelector('#theme-select'),systemTheme=window.matchMedia('(prefers-color-scheme: light)');
function applyTheme(theme){
  if(!['light','dark','auto'].includes(theme))theme='auto';
  state.theme=theme;
  document.documentElement.dataset.theme=theme==='auto'?(systemTheme.matches?'light':'dark'):theme;
  document.documentElement.dataset.themeMode=theme;
  themeSelect.value=theme;
}
function getSavedTheme(){try{return localStorage.getItem('pawtion-theme')||'auto';}catch{return 'auto';}}
themeSelect.addEventListener('change',()=>{try{localStorage.setItem('pawtion-theme',themeSelect.value);}catch{}applyTheme(themeSelect.value);});
systemTheme.addEventListener('change',()=>{if(state.theme==='auto')applyTheme('auto');});
const ageInput=document.querySelector('#age'),ageUnit=document.querySelector('#age-unit'),adultSizeSelect=document.querySelector('#adult-size'),dogSizeField=document.querySelector('#dog-size-field');
function getLifeStageData(){const ageMonths=PawtionLifeStage.normalizeAgeToMonths(ageInput.value,ageUnit.value);const selectedSize=adultSizeSelect.value;const adultSize=selectedSize==='auto'?PawtionLifeStage.inferDogAdultSize(document.querySelector('#weight').value):selectedSize;const stage=ageMonths===null?null:PawtionLifeStage.classifyLifeStage(state.species,ageMonths,adultSize);return{ageMonths,adultSize,stage,sizeEstimated:selectedSize==='auto'};}
function renderLifeStage(){const data=getLifeStageData();dogSizeField.hidden=state.species!=='dog';if(!data.stage){document.querySelector('#life-stage-value').textContent='—';document.querySelector('#life-stage-context').textContent='';return;}const key={puppy:'Puppy',kitten:'Kitten',youngAdult:'YoungAdult',matureAdult:'MatureAdult',senior:'Senior'}[data.stage];document.querySelector('#life-stage-value').textContent=t(`stage${key}`);document.querySelector('#life-stage-context').textContent=t(`context${key}`);}
[ageInput,ageUnit,adultSizeSelect,document.querySelector('#weight')].forEach(input=>input.addEventListener('input',renderLifeStage));
document.querySelector('#life-stage-info').addEventListener('click',event=>{const tip=document.querySelector('#life-stage-tooltip'),open=tip.hidden;tip.hidden=!open;event.currentTarget.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('[data-species]').forEach(button=>button.addEventListener('click',()=>{state.species=button.dataset.species;document.querySelectorAll('[data-species]').forEach(item=>item.classList.toggle('selected',item===button));renderLifeStage();}));
document.querySelectorAll('[data-neutered]').forEach(button=>button.addEventListener('click',()=>{state.neutered=button.dataset.neutered;document.querySelectorAll('[data-neutered]').forEach(item=>item.classList.toggle('selected',item===button));}));
document.querySelectorAll('[data-condition]').forEach(button=>button.addEventListener('click',()=>{state.condition=button.dataset.condition;document.querySelectorAll('[data-condition]').forEach(item=>item.classList.toggle('selected',item===button));}));
document.querySelectorAll('.activity-list label').forEach(label=>label.addEventListener('click',()=>document.querySelectorAll('.activity-list label').forEach(item=>item.classList.toggle('selected',item===label))));
function valid(){if(state.step!==2&&state.step!==4)return true;const invalid=[...steps[state.step-1].querySelectorAll('[required]')].find(input=>!input.value||!input.checkValidity());if(invalid){invalid.reportValidity();return false;}return true;}
next.addEventListener('click',()=>{if(!valid())return;if(state.step<4){state.step++;updateStep();}else showResult();});back.addEventListener('click',()=>{state.step--;updateStep();});
function showResult(){
  const weight=Number(document.querySelector('#weight').value), caloriesPer100g=Number(document.querySelector('#food-calories').value), activity=document.querySelector('input[name="activity"]:checked').value,name=document.querySelector('#pet-name').value.trim(),lifeStage=getLifeStageData();
  const factor=PawtionNutrition.getEnergyFactor({species:state.species,stage:lifeStage.stage,ageMonths:lifeStage.ageMonths,neutered:state.neutered,condition:state.condition,activity}),{kcal}=PawtionNutrition.calculateEnergy(weight,factor);
  const grams=Math.round(kcal/caloriesPer100g*100),pet=t(state.species==='dog'?'dogWord':'catWord');
  document.querySelector('#result-heading').textContent=name?`${t('resultFor')}${name}`:`${t('resultFor')}${pet}`;
  const stageName=document.querySelector('#life-stage-value').textContent;document.querySelector('#result-intro').textContent=t('intro')(weight,caloriesPer100g,stageName);
  document.querySelector('#calorie-result').innerHTML=`${kcal.toLocaleString()} <small>kcal</small>`;
  document.querySelector('#gram-result').innerHTML=`${grams.toLocaleString()} <small>${t('grams')}</small>`;
  document.querySelector('#meal-result').textContent=`${Math.round(grams/2)} ${t('perMeal')}`;
  document.querySelector('#week-result').textContent=`${(grams*7).toLocaleString()} ${t('grams')}`;
  document.querySelector('#result').hidden=false;document.querySelector('#result').scrollIntoView({behavior:'smooth',block:'start'});
}
document.querySelector('#reset').addEventListener('click',()=>{document.querySelector('#result').hidden=true;document.querySelector('#calculator').scrollIntoView({behavior:'smooth'});});
const pageLinks=[...document.querySelectorAll('.primary-nav [data-page]')];
function updateActiveNavigation(){const calculator=document.querySelector('#calculator');const active=window.scrollY>=calculator.offsetTop-180?'calculator':'home';pageLinks.forEach(link=>{const selected=link.dataset.page===active;link.classList.toggle('active',selected);if(selected)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');});}
window.addEventListener('scroll',updateActiveNavigation,{passive:true});
window.addEventListener('hashchange',()=>requestAnimationFrame(updateActiveNavigation));
applyTheme(getSavedTheme());
translatePage();
updateActiveNavigation();
