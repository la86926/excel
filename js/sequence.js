export function sequence(L){
const menu=L.menu||"Inicio > Herramientas";
if(L.kind==="formula")return [
{type:"select",target:L.range||"A1:H11",duration:1500,caption:"Identificamos el rango "+(L.range||"A1:H11")+".",label:"Identificar datos"},
{type:"select",target:L.target||"J2",duration:1000,caption:"Seleccionamos la celda "+(L.target||"J2")+" para escribir el cálculo.",label:"Elegir celda"},
{type:"type",target:L.target||"J2",value:L.formula,duration:Math.min(6200,1900+L.formula.length*100),caption:"Escribimos la fórmula carácter por carácter, con sus referencias de celda.",label:"Escribir fórmula"},
{type:"result",target:L.target||"J2",duration:1500,caption:"Presionamos Entrar. Excel calcula el resultado: "+L.result+".",label:"Observar resultado"},
{type:"result",target:L.target||"J2",duration:1450,caption:"Comprobamos el resultado y después lo reproducimos en el archivo descargable.",label:"Comprobar"}];
if(L.kind==="menu")return [
{type:"select",target:L.focus||"A1:H11",duration:1650,caption:"Seleccionamos "+(L.focus||"A1:H11")+" para aplicar la operación.",label:"Seleccionar datos"},
{type:"menu",target:"A1",value:menu,duration:2200,caption:"Abrimos la herramienta en Excel 365: "+menu+".",label:"Abrir herramienta"},
{type:"effect",target:L.focus||"B2",duration:1900,caption:L.result,label:"Aplicar cambio"},
{type:"effect",target:L.focus||"A1:H11",duration:1400,caption:"Compara el estado inicial y el resultado. Practica los mismos pasos en Excel.",label:"Comprobar"}];
if(L.kind==="pivot")return [
{type:"select",target:"A1:H11",duration:1500,caption:"Seleccionamos una tabla que tenga encabezados y registros completos.",label:"Elegir origen"},
{type:"menu",target:"A1",value:menu,duration:2000,caption:"Creamos una tabla dinámica en una hoja nueva usando Insertar > Tabla dinámica.",label:"Insertar tabla dinámica"},
{type:"field",target:"C1",duration:1900,caption:"Arrastramos Área a Filas. Así se reúnen los registros por categoría.",label:"Arrastrar a Filas"},
{type:"pivot",target:"A1",duration:1700,caption:L.pivotMode==="cross"?"Estado va a Columnas y Código a Valores, con Recuento.":L.pivotMode==="month"?"Agrupamos las fechas en meses y contamos códigos.":L.pivotMode==="percent"?"Mostramos los recuentos como porcentaje del total general.":L.pivotMode==="slicer"?"La segmentación permite ver solamente la categoría Química.":"Colocamos Código en Valores, configurado como Recuento.",label:"Construir resumen"},
{type:"pivot",target:"A1",duration:1500,caption:L.result,label:"Observar resumen"}];
if(L.kind==="chart")return [
{type:"select",target:"C1:C11",duration:1500,caption:"Preparamos los recuentos por área: 4, 3 y 3.",label:"Seleccionar datos"},
{type:"menu",target:"C1",value:menu,duration:1800,caption:"Elegimos un gráfico de columnas para comparar categorías.",label:"Insertar gráfico"},
{type:"chart",target:"C1",duration:1800,caption:"Las alturas expresan recuentos distintos; no son una decoración.",label:"Leer gráfico"},
{type:"chart",target:"C1",duration:1450,caption:L.result,label:"Resultado"}];
if(L.kind==="query")return [
{type:"select",target:"A1:H11",duration:1500,caption:"Seleccionamos el origen y verificamos los encabezados.",label:"Revisar origen"},
{type:"menu",target:"A1",value:menu,duration:1800,caption:"Abrimos la herramienta de Excel. El esquema siguiente no reproduce el editor real.",label:"Abrir herramienta"},
{type:"effect",target:"C2:C11",duration:1650,caption:"Revisamos tipos, normalizamos texto y eliminamos errores.",label:"Transformar"},
{type:"pivot",target:"A1",duration:1800,caption:L.result,label:"Cargar"}];
return [
{type:"select",target:"A1:H11",duration:1400,caption:"Partimos de registros consistentes para alimentar el panel.",label:"Preparar datos"},
{type:"menu",target:"A1",value:menu,duration:1750,caption:"Realizamos esta acción en Excel: "+menu+".",label:"Configurar"},
{type:"dashboard",target:"H2",duration:1900,caption:"Añadimos tres indicadores: 10 registros, 3 pendientes, 3 áreas.",label:"Indicadores"},
{type:"dashboard",target:"H2",duration:1750,caption:"Incorporamos un gráfico con los recuentos por área: 4, 3 y 3.",label:"Gráfico"},
{type:"dashboard",target:"H2",duration:1750,caption:"Añadimos una segmentación para filtrar por categoría.",label:"Segmentación"},
{type:"dashboard",target:"H2",duration:1550,caption:L.result,label:"Resultado"}];
}