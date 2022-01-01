var spin_btn=document.getElementById("btn");
var circle1=document.getElementById("main");
//function spinning(){
    
   // spin_btn.innerHTML="STOP";
    //document.getElementById("main").style.animationName="spin";
   // document.getElementById("main").style.animationIterationCount="infinite";
   // document.getElementById("main").style.animationTimingFunction="linear";
   // document.getElementById("main").style.animationDuration="2s";
   // document.getElementById("main").style.transform="rotate(360deg)";
   
//}
const rotateCircle=()=>{
    spin_btn.style.opacity="0.8";
    var max=1000;
    var min=11000;
    var deg=Math.floor(Math.random()*(max-min))+min;
    circle1.style.transform="rotateZ("+deg+"deg)";
    circle1.classList.add('active');
    setTimeout(()=>{circle1.classList.remove('active');},800);
}
