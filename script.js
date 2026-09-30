/* MUSIC: change the video ID in V */
(function(){const V='https://youtu.be/-uyCMdjWK5Y',f=document.getElementById('yt');let done=false;
const cmd=(c,a)=>f.contentWindow&&f.contentWindow.postMessage(JSON.stringify({event:'command',func:c,args:a||[]}),'*');
f.src='https://www.youtube.com/embed/'+V+'?autoplay=1&mute=1&loop=1&playlist='+V+'&controls=0&enablejsapi=1&playsinline=1';
const ev=['pointerdown','touchend','click','keydown'];
function go(){if(done)return;done=true;cmd('unMute');cmd('setVolume',[80]);cmd('playVideo');ev.forEach(e=>removeEventListener(e,go,true))}
ev.forEach(e=>addEventListener(e,go,true));
})();

/* SCROLL ANIMATIONS */
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
const g=[...document.querySelectorAll('.gallery figure')];
addEventListener('scroll',()=>{const y=scrollY*.04;g.forEach((f,i)=>f.style.setProperty('--py',(i%2?0:-1)*Math.min(y,24)+'px'))},{passive:true});
