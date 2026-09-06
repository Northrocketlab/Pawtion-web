(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.PawtionBodyCondition=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  const BCS_CATEGORIES={1:'emaciated',2:'veryThin',3:'thin',4:'ideal',5:'ideal',6:'overweight',7:'overweight',8:'obese',9:'severelyObese'};
  const BCS_DESCRIPTIONS={
    dog:{
      1:{en:'Ribs, spine and pelvic bones are very prominent. No visible body fat and severe loss of body reserves.',th:'มองเห็นซี่โครง กระดูกสันหลัง และกระดูกเชิงกรานชัดเจนมาก แทบไม่มีไขมันสะสมและมีภาวะผอมรุนแรง'},
      2:{en:'Ribs and bony landmarks are prominent with very little fat covering. Waist and abdominal tuck are very obvious.',th:'ซี่โครงและแนวกระดูกเด่นชัด มีไขมันปกคลุมน้อยมาก เห็นเอวและหน้าท้องเว้าชัดมาก'},
      3:{en:'Ribs are easily visible or palpable with little fat covering. Waist and abdominal tuck are prominent.',th:'ซี่โครงมองเห็นหรือคลำได้ง่าย มีไขมันปกคลุมน้อย เอวและหน้าท้องเว้าชัดเจน'},
      4:{en:'Ribs are easily palpable with minimal fat covering. Waist is clearly visible and abdominal tuck is present.',th:'คลำซี่โครงได้ง่าย มีไขมันปกคลุมเล็กน้อย เห็นเอวชัดและมีการเว้าของหน้าท้อง'},
      5:{en:'Ribs are easily palpable without excess fat. Waist is visible behind the ribs and abdominal tuck is present.',th:'คลำซี่โครงได้ง่ายโดยไม่มีไขมันส่วนเกิน เห็นเอวด้านหลังแนวซี่โครงและมีหน้าท้องเว้าเหมาะสม'},
      6:{en:'Ribs are palpable with slight excess fat covering. Waist and abdominal tuck are less obvious.',th:'ยังคลำซี่โครงได้แต่มีไขมันปกคลุมเพิ่มขึ้นเล็กน้อย เอวและหน้าท้องเว้าลดลง'},
      7:{en:'Ribs are difficult to palpate due to fat covering. Waist is poorly visible and abdominal fat is increased.',th:'คลำซี่โครงได้ยากขึ้นจากไขมันที่ปกคลุม เอวเห็นไม่ชัดและมีไขมันบริเวณหน้าท้องเพิ่มขึ้น'},
      8:{en:'Ribs are very difficult to palpate beneath heavy fat. Waist is absent and abdominal fat deposits are obvious.',th:'คลำซี่โครงได้ยากมากจากไขมันหนา ไม่เห็นเอวและมีไขมันสะสมบริเวณหน้าท้องชัดเจน'},
      9:{en:'Ribs cannot be palpated beneath heavy fat deposits. Waist and abdominal tuck are absent with marked fat accumulation.',th:'ไม่สามารถคลำซี่โครงได้จากไขมันสะสมจำนวนมาก ไม่เห็นเอวหรือหน้าท้องเว้า และมีไขมันสะสมชัดเจน'}
    },
    cat:{
      1:{en:'Ribs and bony prominences are very visible with almost no fat covering. Severe loss of body reserves.',th:'มองเห็นซี่โครงและกระดูกเด่นชัดมาก แทบไม่มีไขมันปกคลุมและมีภาวะผอมรุนแรง'},
      2:{en:'Ribs and lumbar bones are visible with very little fat. Waist is pronounced and abdominal fat is absent.',th:'เห็นซี่โครงและแนวกระดูกเอวชัด มีไขมันปกคลุมน้อยมาก เอวเด่นและแทบไม่มีไขมันหน้าท้อง'},
      3:{en:'Ribs are easily palpable with minimal fat. Waist is obvious and abdominal fat is minimal.',th:'คลำซี่โครงได้ง่าย มีไขมันปกคลุมน้อย เห็นเอวชัดและมีไขมันหน้าท้องน้อย'},
      4:{en:'Ribs are easily palpable. Waist is clearly visible and only a small abdominal fat pad is present.',th:'คลำซี่โครงได้ง่าย เห็นเอวชัดและมีถุงไขมันบริเวณหน้าท้องเพียงเล็กน้อย'},
      5:{en:'Well-proportioned body. Ribs are palpable with slight fat covering and the abdominal fat pad is minimal.',th:'รูปร่างได้สัดส่วน คลำซี่โครงได้โดยมีไขมันปกคลุมเล็กน้อย และมีไขมันหน้าท้องไม่มาก'},
      6:{en:'Ribs remain palpable but have increased fat covering. Waist is less obvious and abdominal fat increases.',th:'ยังคลำซี่โครงได้แต่มีไขมันปกคลุมเพิ่มขึ้น เอวเห็นไม่ชัดเท่าเดิมและมีไขมันหน้าท้องเพิ่มขึ้น'},
      7:{en:'Ribs are difficult to palpate. Waist is poorly defined and a noticeable abdominal fat pad is present.',th:'คลำซี่โครงได้ยากขึ้น เอวไม่ชัด และมีถุงไขมันบริเวณหน้าท้องเห็นได้ชัด'},
      8:{en:'Ribs are very difficult to palpate beneath substantial fat. Waist is absent and the abdominal fat pad is prominent.',th:'คลำซี่โครงได้ยากมากจากไขมันสะสม ไม่เห็นเอวและมีถุงไขมันหน้าท้องเด่นชัด'},
      9:{en:'Ribs cannot be palpated under heavy fat deposits. Waist is absent and large fat deposits are present over the abdomen and body.',th:'ไม่สามารถคลำซี่โครงได้จากไขมันสะสมมาก ไม่เห็นเอวและมีไขมันสะสมมากบริเวณหน้าท้องและลำตัว'}
    }
  };
  const MCS_VALUES=['normal','mild_loss','moderate_loss','severe_loss'];
  function getBCSCategory(score){return BCS_CATEGORIES[Number(score)]||null;}
  function getBCSDescription(score,species,language){return BCS_DESCRIPTIONS[species]?.[Number(score)]?.[language]||'';}
  function isIdealBCS(score){return Number(score)>=4&&Number(score)<=5;}
  function isBCSNutritionalRisk(score){return !isIdealBCS(score);}
  function isMCSNutritionalRisk(value){return MCS_VALUES.includes(value)&&value!=='normal';}
  function getNutritionalRiskFlags({bcs,mcs}){const flags=[];if(isBCSNutritionalRisk(bcs))flags.push(Number(bcs)<4?'bcs_under':'bcs_over');if(isMCSNutritionalRisk(mcs))flags.push(mcs==='mild_loss'?'mcs_mild':mcs==='severe_loss'?'mcs_severe':'mcs_moderate');return flags;}
  return{BCS_CATEGORIES,BCS_DESCRIPTIONS,MCS_VALUES,getBCSCategory,getBCSDescription,isIdealBCS,isBCSNutritionalRisk,isMCSNutritionalRisk,getNutritionalRiskFlags};
});
