document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("container");const e=document.getElementById("canvas1"),t=document.getElementById("fileupload");e.width=window.innerWidth,e.height=window.innerHeight;const n=e.getContext("2d");let o,a;const i=new AudioContext;audio1.play(),o=i.createMediaElementSource(audio1),a=i.createAnalyser(),o.connect(a),a.connect(i.destination),a.fftSize=512;const r=a.frequencyBinCount,c=new Uint8Array(r);let l;e.width,function t(){l=0,n.clearRect(0,0,e.width,e.height),a.getByteFrequencyData(c),function(t,o,a,i,r){for(let o=0;o<t;o++){i=4*r[90],n.save(),n.translate(e.width/2,e.height/2),n.rotate(6.184*o);const t=272+0*o;n.fillStyle="hsl("+t+",100%,50%)",n.beginPath(),n.arc(100,i/2,i/2,0,Math.PI/4),n.fill(),n.stroke(),n.restore()}for(let o=0;o<t;o++){i=2.5*r[o],n.save(),n.translate(e.width/2,e.height/2),n.rotate(5.184*o);const t=180+.02*o;n.fillStyle="hsl("+t+",100%,50%)",n.beginPath(),n.arc(10,i/2,i/2,0,Math.PI/4),n.fill(),n.stroke(),n.restore()}for(let o=0;o<t;o++){i=2.5*r[o],n.save(),n.translate(e.width/2,e.height/2),n.rotate(20.184*o);const t=160+.08*o;n.fillStyle="hsl("+t+",100%,50%)",n.beginPath(),n.arc(50,i/2,i/2,0,Math.PI/6),n.fill(),n.stroke(),n.restore()}for(let o=0;o<t;o++){i=2.5*r[o],n.save(),n.translate(e.width/2,e.height/2),n.rotate(4.184*o);const t=150+.08*o;n.fillStyle="hsl("+t+",100%,50%)",n.beginPath(),n.arc(10,i/2,i/2,0,Math.PI/6),n.fill(),n.stroke(),n.restore()}}(r,0,0,2,c),requestAnimationFrame(t)}(),t.addEventListener("change",(function(){const e=this.files,t=document.getElementById("audio1");t.src=URL.createObjectURL(e[0]),t.load(),t.resume(),t.play()})),t.addEventListener("click",(function(){const e=this.files,t=document.getElementById("audio1");t.src=URL.createObjectURL(e[0]),t.load(),t.resume(),t.play()}));const s=document.querySelector(".dropbtn"),d=document.querySelector(".modal-wrapper"),h=document.querySelector(".close-button");s.addEventListener("click",(()=>{d.classList.add("active")})),h.addEventListener("click",(()=>{d.classList.remove("active")}))}));
//# sourceMappingURL=main.js.map