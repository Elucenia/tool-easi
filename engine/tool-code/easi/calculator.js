/* ELUCENIA standalone integration. Source package metadata and rights: README.md. */
(function(root){'use strict';
function freeze(value){if(value&&typeof value==='object'){for(const item of Object.values(value))freeze(item);Object.freeze(value);}return value;}
const TOOL=freeze({"id":"easi","title":"EASI (Eczema Area and Severity Index)","fields":[["idade","Idade","radio",{"opts":{"0":"0 a 7 anos","8":"8 anos ou mais"}}],["e_h","Cabeça e pescoço: eritema","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","1.5":"1,5","2.5":"2,5"},"optionOrder":["0","1","1.5","2","2.5","3"]}],["p_h","Cabeça e pescoço: edema/papulação","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","1.5":"1,5","2.5":"2,5"},"optionOrder":["0","1","1.5","2","2.5","3"]}],["x_h","Cabeça e pescoço: escoriação","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","1.5":"1,5","2.5":"2,5"},"optionOrder":["0","1","1.5","2","2.5","3"]}],["l_h","Cabeça e pescoço: liquenificação","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","1.5":"1,5","2.5":"2,5"},"optionOrder":["0","1","1.5","2","2.5","3"]}],["a_h","Cabeça e pescoço: área acometida da região","sel",{"opts":{"0":"0 · sem lesão","1":"1 · 1 a 9%","2":"2 · 10 a 29%","3":"3 · 30 a 49%","4":"4 · 50 a 69%","5":"5 · 70 a 89%","6":"6 · 90 a 100%"}}],["e_s","Membros superiores: eritema","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","1.5":"1,5","2.5":"2,5"},"optionOrder":["0","1","1.5","2","2.5","3"]}],["p_s","Membros superiores: edema/papulação","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","1.5":"1,5","2.5":"2,5"},"optionOrder":["0","1","1.5","2","2.5","3"]}],["x_s","Membros superiores: escoriação","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","1.5":"1,5","2.5":"2,5"},"optionOrder":["0","1","1.5","2","2.5","3"]}],["l_s","Membros superiores: liquenificação","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","1.5":"1,5","2.5":"2,5"},"optionOrder":["0","1","1.5","2","2.5","3"]}],["a_s","Membros superiores: área acometida da região","sel",{"opts":{"0":"0 · sem lesão","1":"1 · 1 a 9%","2":"2 · 10 a 29%","3":"3 · 30 a 49%","4":"4 · 50 a 69%","5":"5 · 70 a 89%","6":"6 · 90 a 100%"}}],["e_t","Tronco: eritema","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","1.5":"1,5","2.5":"2,5"},"optionOrder":["0","1","1.5","2","2.5","3"]}],["p_t","Tronco: edema/papulação","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","1.5":"1,5","2.5":"2,5"},"optionOrder":["0","1","1.5","2","2.5","3"]}],["x_t","Tronco: escoriação","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","1.5":"1,5","2.5":"2,5"},"optionOrder":["0","1","1.5","2","2.5","3"]}],["l_t","Tronco: liquenificação","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","1.5":"1,5","2.5":"2,5"},"optionOrder":["0","1","1.5","2","2.5","3"]}],["a_t","Tronco: área acometida da região","sel",{"opts":{"0":"0 · sem lesão","1":"1 · 1 a 9%","2":"2 · 10 a 29%","3":"3 · 30 a 49%","4":"4 · 50 a 69%","5":"5 · 70 a 89%","6":"6 · 90 a 100%"}}],["e_i","Membros inferiores: eritema","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","1.5":"1,5","2.5":"2,5"},"optionOrder":["0","1","1.5","2","2.5","3"]}],["p_i","Membros inferiores: edema/papulação","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","1.5":"1,5","2.5":"2,5"},"optionOrder":["0","1","1.5","2","2.5","3"]}],["x_i","Membros inferiores: escoriação","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","1.5":"1,5","2.5":"2,5"},"optionOrder":["0","1","1.5","2","2.5","3"]}],["l_i","Membros inferiores: liquenificação","radio",{"opts":{"0":"0","1":"1","2":"2","3":"3","1.5":"1,5","2.5":"2,5"},"optionOrder":["0","1","1.5","2","2.5","3"]}],["a_i","Membros inferiores: área acometida da região","sel",{"opts":{"0":"0 · sem lesão","1":"1 · 1 a 9%","2":"2 · 10 a 29%","3":"3 · 30 a 49%","4":"4 · 50 a 69%","5":"5 · 70 a 89%","6":"6 · 90 a 100%"}}]],"config":null,"reviewStatus":"needs-review","clinicalValidation":"not-performed"});
const window={};
/* ELUCENIA arithmetic registry. No DOM access, storage, telemetry or network requests. */
(function(root){
  'use strict';
  const CALC={fn:Object.create(null)};
  const round=(n,d=1)=>Math.round(n*Math.pow(10,d))/Math.pow(10,d);
  const yes=v=>v===true||v==='1'||v===1;
  CALC.h={
    r1:round,
    br:(n,d=1)=>round(n,d).toLocaleString('pt-BR',{minimumFractionDigits:d,maximumFractionDigits:d}),
    band:(n,bands)=>{for(const b of bands)if(n<b[0])return b[1];return bands[bands.length-1][1];},
    sum:(values,weights)=>Object.entries(weights).reduce((n,[key,w])=>n+(yes(values[key])?w:0),0),yes
  };
  CALC.def=(id,fn)=>{if(CALC.fn[id])throw Error('Duplicate calculator '+id);CALC.fn[id]=fn;};
  CALC.score=(cfg,values)=>{
    let score=0;
    for(const[name,type,weight]of cfg.fields){const v=values[name];if(type==='chk'){if(yes(v))score+=weight;}else if(type==='radio'||type==='sel'){const n=parseFloat(v);if(!Number.isNaN(n))score+=n;}}
    score=round(score,2);let band=cfg.bands[0];for(const b of cfg.bands)if(score>=b[0])band=b;
    return{main:[String(score).replace('.',','),cfg.unit||(Math.abs(score)===1?'ponto':'pontos')],label:cfg.label,level:band[1],verdict:band[2],note:band[3]||'',raw:{score}};
  };
  CALC.run=(id,values,cfg)=>{if(cfg&&cfg.bands)return CALC.score(cfg,values);if(!CALC.fn[id])return{error:'Calculadora indisponível.'};return CALC.fn[id](values);};
  root.CALC=CALC;if(typeof module!=='undefined')module.exports=CALC;
})(typeof window!=='undefined'?window:globalThis);

(function(a){'use strict';
var e=a.h;
var o=e.br;
var i=function(a){var e=parseFloat(a);return isNaN(e)?0:e};
a.def("easi",function(a){var r="0"===a.idade?{h:2,s:2,t:3,i:3}:{h:1,s:2,t:3,i:4},t=0,q=false;for(var d in r){var b=i(a["e_"+d]),c=i(a["p_"+d]),f=i(a["x_"+d]),g=i(a["l_"+d]);q=q||b%1!==0||c%1!==0||f%1!==0||g%1!==0;t+=r[d]*((b+c+f+g)*2)*i(a["a_"+d]);}t/=20;var n=0===t?["Pele limpa (EASI 0)","low"]:t<=1?["Quase limpa (0,1 a 1,0)","low"]:t<=7?["Dermatite atópica leve (1,1 a 7,0)","low"]:t<=21?["Dermatite atópica moderada (7,1 a 21,0)","mid"]:t<=50?["Dermatite atópica grave (21,1 a 50,0)","high"]:["Dermatite atópica muito grave (50,1 a 72,0)","high"];return{main:[o(t,q?2:1),"de 72"],label:"EASI",level:n[1],verdict:n[0],raw:{easi:t}}});
})(window.CALC);
function calculate(input){
 if(!input||typeof input!=='object'||Array.isArray(input))return {error:'Informe um objeto com os campos da ferramenta.',code:'INVALID_INPUT'};
 const values=Object.create(null);
 for(const[name,,kind,o={}] of TOOL.fields){
  const v=Object.hasOwn(input,name)?input[name]:undefined;
  if(kind==='chk'){if(v!==undefined&&v!==null&&![true,false,1,0,'1','0'].includes(v))return {error:'Campo booleano inválido: '+name,field:name,code:'INVALID_INPUT'};values[name]=v===true||v===1||v==='1';continue;}
  const empty=v==null||(typeof v==='string'&&!v.trim());
  if(empty){if(!o.opt)return {error:'Campo obrigatório: '+name,field:name,code:'REQUIRED_FIELD'};values[name]=kind==='num'?null:'';continue;}
  if(kind==='num'){
   if(!['number','string'].includes(typeof v)||(typeof v==='string'&&!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$/.test(v.trim()))||!Number.isFinite(Number(v)))return {error:'Número inválido: '+name,field:name,code:'INVALID_INPUT'};
   const n=Number(v);if((Number.isFinite(o.min)&&n<o.min)||(Number.isFinite(o.max)&&n>o.max))return {error:'Valor fora do intervalo: '+name,field:name,code:'OUT_OF_RANGE'};
   values[name]=n;
  }else{if(!Object.hasOwn(o.opts||{},String(v)))return {error:'Opção inválida: '+name,field:name,code:'INVALID_OPTION'};values[name]=String(v);}
 }
 try{const r=window.CALC.run(TOOL.id,values,TOOL.config);if(r.error)return {error:String(r.error).replace(/<[^>]*>/g,''),code:'FORMULA_DOMAIN'};
  if(!Array.isArray(r.main)||r.main.some(v=>typeof v==='number'&&!Number.isFinite(v))||/\b(?:NaN|Infinity)\b/.test(String(r.main[0])))return {error:'Resultado não finito ou indisponível.',code:'INVALID_RESULT'};
  return {id:TOOL.id,main:r.main,label:r.label||TOOL.title,raw:r.raw||{},...(typeof r.level==='string'?{level:r.level}:{}),...(typeof r.verdict==='string'?{verdict:r.verdict}:{}),...(Array.isArray(r.rows)?{rows:r.rows}:{}),...(typeof r.note==='string'&&r.note?{note:r.note}:{}),clinicalValidation:'not-performed'};
 }catch{return {error:'Confira os valores e o domínio da fórmula.',code:'FORMULA_DOMAIN'};}
}
const api=Object.freeze({metadata:TOOL,calculate});if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.EluceniaTool=api;
})(typeof globalThis!=='undefined'?globalThis:this);
