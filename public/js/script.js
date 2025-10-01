document.addEventListener('DOMContentLoaded',()=>{
	const loader=document.getElementById('loader');
	const fill=document.querySelector('.loader-progress-fill');
	const pct=document.querySelector('.loader-percentage');
	if(!loader||!fill||!pct) return;
	let p=0;const iv=setInterval(()=>{p+=10; if(p>=100){p=100;clearInterval(iv);setTimeout(()=>loader.classList.add('fade-out'),300);}fill.style.width=p+'%';pct.textContent=p+'%';},200);
});
