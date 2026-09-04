(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.PawtionLifeStage=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  const DOG_LIFE_STAGE_CONFIG={
    sizeByAdultWeightKg:{small:{max:10},medium:{max:25},large:{max:40},giant:{max:Infinity}},
    // Product estimates informed by AAHA principles; these are not AAHA fixed cutoffs.
    puppyEndMonths:{small:6,medium:9,large:12,giant:18},
    maturityMonths:{small:36,medium:36,large:42,giant:48},
    seniorStartMonths:{small:120,medium:108,large:96,giant:84}
  };
  const CAT_LIFE_STAGE_CONFIG={kittenEndMonths:12,youngAdultEndMonths:84,matureAdultEndMonths:120};
  function normalizeAgeToMonths(value,unit){if(value==='')return null;const n=Number(value);if(!Number.isFinite(n)||n<0)return null;return unit==='weeks'?n*12/52:unit==='years'?n*12:n;}
  function inferDogAdultSize(weightKg){const weight=Number(weightKg);if(!Number.isFinite(weight)||weight<=0)return'medium';if(weight<10)return'small';if(weight<=25)return'medium';if(weight<=40)return'large';return'giant';}
  function getDogLifeStage(ageMonths,adultSize){const age=Number(ageMonths),size=DOG_LIFE_STAGE_CONFIG.puppyEndMonths[adultSize]?adultSize:'medium';if(age<DOG_LIFE_STAGE_CONFIG.puppyEndMonths[size])return'puppy';if(age<DOG_LIFE_STAGE_CONFIG.maturityMonths[size])return'youngAdult';if(age>=DOG_LIFE_STAGE_CONFIG.seniorStartMonths[size])return'senior';return'matureAdult';}
  function getCatLifeStage(ageMonths){const age=Number(ageMonths);if(age<CAT_LIFE_STAGE_CONFIG.kittenEndMonths)return'kitten';if(age<CAT_LIFE_STAGE_CONFIG.youngAdultEndMonths)return'youngAdult';if(age<=CAT_LIFE_STAGE_CONFIG.matureAdultEndMonths)return'matureAdult';return'senior';}
  function classifyLifeStage(species,ageMonths,adultSize){return species==='cat'?getCatLifeStage(ageMonths):getDogLifeStage(ageMonths,adultSize);}
  return{DOG_LIFE_STAGE_CONFIG,CAT_LIFE_STAGE_CONFIG,normalizeAgeToMonths,inferDogAdultSize,getDogLifeStage,getCatLifeStage,classifyLifeStage};
});
