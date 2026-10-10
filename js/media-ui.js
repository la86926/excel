import {VIDEOS,VIDEO_CHAPTERS,FIGURES,SUPPORT,videoFor,videoPoster,externalVideoCard,watchUrl,imageUrl,h} from "./media.js";
const featured={...VIDEOS.dashboard,start:0};
export function spotlight(lastId){
return '<section class="media-hero"><div class="hero-copy"><div class="studio-rule"></div><div class="eyebrow">ACADEMIA AUDIOVISUAL · EXCEL 365</div><h1 class="h1">Excel se aprende<br>viéndolo.</h1><p class="intro">Observa a expertos trabajar en Excel, sigue una demostración animada y repite el procedimiento en tu archivo. Sin trivias, sin distracciones.</p><div class="hero-actions"><a class="primary-button" href="#/leccion/'+h(lastId)+'">Continuar mi lección <span>→</span></a><a class="secondary-button" href="#/videos">Explorar videos</a></div><p class="note">Microsoft Excel 365 · Windows · Interfaz y funciones en español</p></div><div class="hero-video-stage"><div class="featured-player" data-start="0">'+videoPoster(featured,{feature:true})+'</div><div class="hero-video-caption"><div><span class="minor">CLASE DESTACADA</span><strong>Un dashboard completo, paso a paso</strong></div><a href="#/leccion/5-8">Ir a la clase ↗</a></div></div></section>';
}
export function videoHighlights(){
const picked=[{video:VIDEOS.contarsi,id:"2-2"},{video:VIDEOS.pivotmaster,id:"4-2"},{video:VIDEOS.powerquery,id:"3-8"}];
return '<section><div class="media-index-header"><div><h2 class="h2">Aprende mirando a los expertos</h2><p>Videos reales seleccionados por tema. Cada clase incluye práctica propia.</p></div><a class="section-link" href="#/videos">Videoteca completa →</a></div><div class="small-video-grid">'+picked.map(x=>externalVideoCard(x.video,x.id)).join("")+'</div></section>';
}
export function lessonVideo(l){
const v=videoFor(l.id);if(!v)return "";
const direct=v.fit==="direct";
const match=direct?"VIDEO SOBRE ESTA HERRAMIENTA":"VIDEO COMPLEMENTARIO";const chapters=VIDEO_CHAPTERS[v.id]||[];
return '<div class="media-tabs" role="tablist" aria-label="Elige cómo aprender"><button type="button" role="tab" class="media-tab active" aria-selected="true" data-study-tab="video">▶ Clase en video</button><button type="button" role="tab" class="media-tab" aria-selected="false" data-study-tab="sim">▦ Demostración animada</button></div><section class="lesson-media-wrap" id="lesson-video-panel" role="tabpanel"><div class="lesson-media-heading"><div><span class="media-sup">'+match+'</span><h2>'+h(v.title)+'</h2><p>Instructor: '+h(v.creator)+'</p></div><span class="sim-label">YouTube</span></div><div class="video-course-frame" data-start="'+(v.start||0)+'">'+videoPoster(v)+'</div>'+(chapters.length?'<div class="video-chapters"><span class="chapter-caption">IR AL CAPÍTULO</span><div class="chapters-scroll">'+chapters.map(c=>'<button type="button" data-video-chapter="'+c.at+'" data-video-id="'+v.id+'">'+h(c.name)+'</button>').join('')+'</div></div>':'')+'<div class="video-source-line"><span>El video se reproduce desde el canal de su autor.</span><a href="'+watchUrl(v)+'" target="_blank" rel="noopener noreferrer">Ver en YouTube ↗</a></div>'+(direct?"":'<div class="media-note">Este recurso ilustra una técnica relacionada. La demostración animada se centra en la lección actual.</div>')+'</section>';
}
export function relatedVisual(l){
const f=FIGURES[l.id],s=SUPPORT[l.id];let out="";
if(f)out+='<figure class="reference-figure"><div class="panel-eyebrow">IMAGEN DE REFERENCIA</div><div class="figure-image"><img loading="lazy" src="'+imageUrl(f.file)+'" alt="'+h(f.caption)+'" referrerpolicy="no-referrer"></div><figcaption>'+h(f.caption)+' Autor: '+h(f.author)+' · '+h(f.license)+' · <a target="_blank" rel="noopener noreferrer" href="'+f.source+'">Wikimedia Commons ↗</a></figcaption></figure>';
if(s)out+='<p class="note" style="margin:15px 0">Documentación de referencia: <a target="_blank" rel="noopener noreferrer" style="color:var(--green);font-weight:650" href="'+s.url+'">'+h(s.title)+' ↗</a></p>';return out;
}
export function library(){
const entries=[
{video:VIDEOS.validacion,id:"1-7",category:"Fundamentos"},
{video:VIDEOS.contarsi,id:"2-2",category:"Fórmulas"},
{video:VIDEOS.sumarsi,id:"2-3",category:"Fórmulas"},
{video:VIDEOS.buscarx,id:"2-7",category:"Búsquedas"},
{video:VIDEOS.powerquery,id:"3-8",category:"Preparación de datos"},
{video:VIDEOS.pivot,id:"4-1",category:"Tablas dinámicas"},
{video:VIDEOS.pivotmaster,id:"4-2",category:"Tablas dinámicas avanzadas"},
{video:VIDEOS.dashboard,id:"5-8",category:"Dashboards"}
];
return '<div class="academy-library-intro"><div class="eyebrow">VIDEOTECA VERIFICADA</div><h1 class="h1">Aprende con clases reales</h1><p class="intro">Tutoriales públicos en español, organizados para acompañar nuestras demostraciones y archivos Excel. Los videos pertenecen a sus creadores.</p></div><div class="media-library-grid">'+entries.map(x=>externalVideoCard(x.video,x.id)).join("")+'</div><div class="media-editorial-foot">Después de cada video, abre la demostración animada y descarga el archivo para repetir el procedimiento en Excel.</div>';
}
export function videoById(id){return Object.values(VIDEOS).find(x=>x.id===id)||null}
