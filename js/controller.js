import {sequence} from "./sequence.js";
import {draw,playerHtml} from "./view.js";
export class DemoController {
 constructor(host,lesson,options={}) {
  this.host=host;this.lesson=lesson;this.steps=sequence(lesson);this.speed=Number(options.prefs?.speed)||1;this.captions=options.prefs?.captions!==false;this.index=Math.min(Math.max(Number(options.startStep)||0,0),this.steps.length-1);this.progress=0;this.running=false;this.frame=null;this.last=null;this.onChange=options.onChange||(()=>{});this.onStep=options.onStep||(()=>{});
  host.innerHTML=playerHtml();host.querySelector("#demo-speed").value=String(this.speed);
  this.onClick=e=>{const b=e.target.closest("[data-action],[data-step]");if(!b)return;if(b.hasAttribute("data-step")){this.seek(Number(b.dataset.step));return}const a=b.dataset.action;if(a==="toggle")this.toggle();if(a==="back")this.back();if(a==="next")this.next();if(a==="restart")this.restart();if(a==="captions"){this.captions=!this.captions;this.onChange({speed:this.speed,captions:this.captions});this.paint()}if(a==="fullscreen"){const f=this.host.querySelector(".player-frame");if(document.fullscreenElement)document.exitFullscreen?.();else f.requestFullscreen?.()}};
  this.onSpeed=e=>{this.speed=Number(e.target.value);this.onChange({speed:this.speed,captions:this.captions});this.paint()};
  this.onKey=e=>{if(!this.host.contains(document.activeElement)&&document.activeElement!==this.host)return;if(e.target.closest("select,input,button"))return;if(e.code==="Space"){e.preventDefault();this.toggle()}if(e.code==="ArrowRight")this.next();if(e.code==="ArrowLeft")this.back()};
  host.addEventListener("click",this.onClick);host.querySelector("#demo-speed").addEventListener("change",this.onSpeed);document.addEventListener("keydown",this.onKey);this.paint();
 }
 destroy(){this.pause();this.host.removeEventListener("click",this.onClick);this.host.querySelector("#demo-speed")?.removeEventListener("change",this.onSpeed);document.removeEventListener("keydown",this.onKey)}
 paint(){draw(this.host,this.lesson,this.steps,this.index,this.progress,this.running,this.captions,this.speed)}
 seek(i){this.pause();this.index=Math.min(this.steps.length-1,Math.max(0,i));this.progress=0;this.onStep(this.index);this.paint()}
 back(){this.seek(this.index-1)}
 next(){this.seek(this.index+1)}
 restart(){this.seek(0)}
 toggle(){this.running?this.pause():this.play()}
 pause(){this.running=false;this.last=null;if(this.frame)cancelAnimationFrame(this.frame);this.frame=null;const icon=this.host.querySelector("#play-icon");if(icon)icon.textContent="▶"}
 play(){if(this.running)return;if(this.index===this.steps.length-1&&this.progress>=1){this.index=0;this.progress=0}this.running=true;this.last=null;this.paint();this.frame=requestAnimationFrame(t=>this.tick(t))}
 tick(timestamp){if(!this.running)return;if(this.last!==null)this.progress+=(timestamp-this.last)*this.speed/this.steps[this.index].duration;this.last=timestamp;if(this.progress>=1){if(this.index===this.steps.length-1){this.progress=1;this.running=false;this.last=null;this.paint();this.onStep(this.index);return}this.index++;this.progress=0;this.onStep(this.index)}this.paint();this.frame=requestAnimationFrame(t=>this.tick(t))}
}