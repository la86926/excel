// Videoteca editorial: enlaces públicos contrastados con sus títulos y autores.
// El video es un recurso externo; la demostración animada y los archivos son propios.
export const VIDEOS={
 "contarsi":{id:"gZpSRDpIUE0",title:"CONTAR.SI: contar celdas que cumplen una condición",creator:"Tutorial Excel",description:"Una función, un criterio y un recuento que se actualiza."},
 "sumarsi":{id:"KvODT3fh6XQ",title:"Cómo aplicar SUMAR.SI en Excel",creator:"Tutorial Excel 123",description:"Sumas condicionadas con un rango y su criterio."},
 "buscarx":{id:"ubMkD_CGyMQ",title:"Función BUSCARX en Excel",creator:"Academia Excel · Andrés Roldán",description:"Búsquedas por código con matrices de búsqueda y devolución."},
 "validacion":{id:"okL87ND49vM",title:"Validación de datos: de lo básico a lo avanzado",creator:"Sergio Alejandro Campos · EXCELeINFO",description:"Listas y reglas para prevenir valores incorrectos."},
 "powerquery":{id:"qAlHmBq8lVc",title:"Limpieza de datos en Excel con Power Query",creator:"El Automatizador",description:"Transformaciones repetibles: duplicados, fechas y valores."},
 "pivot":{id:"gbEr7ugjWlE",title:"Cómo hacer tablas dinámicas en Excel",creator:"Ciudadano 2.0",description:"Creación, campos, filtros, subtotales y actualización en Excel 365."},
 "pivotmaster":{id:"tN6_ZEaqYBo",title:"Domina las tablas dinámicas en Excel desde cero",creator:"El Tío Tech",description:"Recorrido extenso por agrupación, cálculos y segmentadores."},
 "dashboard":{id:"bfMEwjgTZ20",title:"Dashboard en Excel desde cero y paso a paso",creator:"Visual Data",description:"Construcción progresiva: tabla, indicadores, gráficos y segmentadores."}
};
// Tiempo en segundos hacia el apartado específico; el video puede cubrir otros temas.
export const VIDEO_BY_LESSON={
 "1-5":{key:"pivot",start:238,fit:"complementary"},
 "1-6":{key:"dashboard",start:187,fit:"direct"},
 "1-7":{key:"validacion",start:257,fit:"direct"},
 "2-2":{key:"contarsi",start:0,fit:"direct"},
 "2-3":{key:"sumarsi",start:0,fit:"direct"},
 "2-7":{key:"buscarx",start:40,fit:"direct"},
 "3-1":{key:"powerquery",start:88,fit:"complementary"},
 "3-3":{key:"powerquery",start:198,fit:"direct"},
 "3-4":{key:"powerquery",start:188,fit:"direct"},
 "3-6":{key:"dashboard",start:1048,fit:"complementary"},
 "3-8":{key:"powerquery",start:0,fit:"direct"},
 "4-1":{key:"pivot",start:67,fit:"direct"},
 "4-2":{key:"pivotmaster",start:688,fit:"direct"},
 "4-3":{key:"pivotmaster",start:1225,fit:"direct"},
 "4-4":{key:"pivotmaster",start:3139,fit:"direct"},
 "4-5":{key:"pivot",start:366,fit:"direct"},
 "4-6":{key:"dashboard",start:1048,fit:"complementary"},
 "4-7":{key:"pivotmaster",start:4371,fit:"direct"},
 "5-1":{key:"dashboard",start:0,fit:"direct"},
 "5-2":{key:"dashboard",start:187,fit:"direct"},
 "5-3":{key:"dashboard",start:489,fit:"direct"},
 "5-4":{key:"dashboard",start:1048,fit:"direct"},
 "5-5":{key:"dashboard",start:1318,fit:"direct"},
 "5-6":{key:"dashboard",start:2862,fit:"direct"},
 "5-7":{key:"dashboard",start:187,fit:"complementary"},
 "5-8":{key:"dashboard",start:0,fit:"direct"}
};
export const FIGURES={
 "1-1":{file:"Excel_Screen_copy.jpg",caption:"Referencia de la interfaz de Excel (captura de 2014; la cinta y menús actuales pueden variar).",author:"Ghanshyam Sagar Pant",license:"CC BY-SA 4.0",source:"https://commons.wikimedia.org/wiki/File:Excel_Screen_copy.jpg"},
 "1-3":{file:"Excel-formatoceldas.png",caption:"Ejemplo de configuración de formato de celdas (captura histórica; no es Excel 365).",author:"Jsmura",license:"Dominio público",source:"https://commons.wikimedia.org/wiki/File:Excel-formatoceldas.png"},
 "2-8":{file:"Screenshot_Excel_RK01.jpg",caption:"Ejemplo visual de funciones matriciales en Excel.",author:"Roderich Kahn",license:"CC BY-SA 4.0",source:"https://commons.wikimedia.org/wiki/File:Screenshot_Excel_RK01.jpg"}
};
export const SUPPORT={
 "2-2":{url:"https://support.microsoft.com/es-es/office/usar-la-funci%C3%B3n-contar-si-en-microsoft-excel-e0de10c6-f885-4e71-abb4-1f464816df34",title:"CONTAR.SI · documentación oficial"},
 "4-1":{url:"https://support.microsoft.com/es-es/excel/get-started/create-a-pivottable-to-analyze-worksheet-data",title:"Crear tablas dinámicas · Microsoft"},
 "4-2":{url:"https://support.microsoft.com/es-es/excel/get-started/create-a-pivottable-to-analyze-worksheet-data",title:"Organizar campos de una tabla dinámica"},
 "4-3":{url:"https://support.microsoft.com/es-es/excel/get-started/create-a-pivottable-to-analyze-worksheet-data",title:"Agrupación de datos · Microsoft"}
};
export function videoFor(id){const map=VIDEO_BY_LESSON[id];return map?{...VIDEOS[map.key],...map}:null}
export const imageUrl=file=>"https://commons.wikimedia.org/wiki/Special:FilePath/"+encodeURIComponent(file);
export const thumbnail=id=>"https://i.ytimg.com/vi/"+id+"/hqdefault.jpg";
export const watchUrl=v=>"https://www.youtube.com/watch?v="+v.id+(v.start?"&t="+v.start+"s":"");
export const embedUrl=v=>"https://www.youtube-nocookie.com/embed/"+v.id+"?rel=0&start="+(v.start||0)+"&autoplay=1";
export const h=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
export function videoPoster(video,{feature=false}={}){
return '<div class="video-poster '+(feature?"feature-poster":"")+'" data-poster="'+video.id+'"><img loading="'+(feature?"eager":"lazy")+'" src="'+thumbnail(video.id)+'" alt="Fotograma de '+h(video.title)+'" decoding="async"><div class="video-shade"></div><button class="video-big-play" type="button" data-play-video="'+video.id+'" aria-label="Reproducir '+h(video.title)+'"><svg viewBox="0 0 48 48" aria-hidden="true"><path d="M17 11v26l21-13z" fill="currentColor"/></svg></button><span class="poster-credit">Video de '+h(video.creator)+'</span></div>';
}
export function externalVideoCard(video,lessonId){
return '<a class="academy-video-card" href="#/leccion/'+lessonId+'"><div class="video-card-image"><img loading="lazy" src="'+thumbnail(video.id)+'" alt="Vista previa del tutorial '+h(video.title)+'"><span class="video-mini-play" aria-hidden="true">▶</span></div><div class="video-card-content"><span>CLASE EN VIDEO</span><strong>'+h(video.title)+'</strong><small>'+h(video.creator)+' · Ver y practicar →</small></div></a>';
}
