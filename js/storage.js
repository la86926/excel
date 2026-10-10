const KEY="excel-studio-progress-v1";
const initial=()=>({version:1,done:[],last:"2-2",theme:"system",speed:1,captions:true,steps:{}});
function normalize(x){if(!x||typeof x!=="object")return initial();const def=initial();return {...def,done:Array.isArray(x.done)?[...new Set(x.done.filter(s=>/^([1-5])-([1-8])$/.test(s)))]:[],last:/^[1-5]-[1-8]$/.test(String(x.last))?x.last:def.last,theme:["system","light","dark"].includes(x.theme)?x.theme:def.theme,speed:[.5,.75,1,1.25,1.5,2].includes(Number(x.speed))?Number(x.speed):1,captions:x.captions!==false,steps:x.steps&&typeof x.steps==="object"?x.steps:{}}}
let state;try{state=normalize(JSON.parse(localStorage.getItem(KEY)))}catch{state=initial()}
export const getProgress=()=>state;
export function saveProgress(patch){state=normalize({...state,...patch});try{localStorage.setItem(KEY,JSON.stringify(state))}catch{}return state}
export function toggleComplete(id){const done=new Set(state.done);if(done.has(id))done.delete(id);else done.add(id);return saveProgress({done:[...done]})}
export function saveStep(id,step){const steps={...state.steps,[id]:step};return saveProgress({steps})}
export function exportProgress(){const content=JSON.stringify({...state,exportedAt:new Date().toISOString()},null,2),url=URL.createObjectURL(new Blob([content],{type:"application/json"})),a=document.createElement("a");a.href=url;a.download="excel-studio-progreso.json";document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),15000)}
export async function importProgress(file){if(!file||file.size>100000)throw Error("Archivo no válido");let x;try{x=JSON.parse(await file.text())}catch{throw Error("El archivo no contiene JSON válido")}if(!x||x.version!==1||!Array.isArray(x.done))throw Error("No es un progreso de Excel Studio");return saveProgress(normalize(x))}
export function resetProgress(){state=initial();try{localStorage.removeItem(KEY)}catch{}return state}
