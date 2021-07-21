let digital=document.querySelector('.digital')

let hour=document.querySelector('.p_h');
let minute=document.querySelector('.p_m');
let second=document.querySelector('.p_s')







function updateBlock(){
    // criando a hora 
    let now=new Date()
    let hours=now.getHours()
    let minutes=now.getMinutes()
    let segunds=now.getSeconds()
    digital.innerHTML=`${fixzero(hours)}:${fixzero(minutes)}:${fixzero(segunds)}`
    let sDeg=((360 / 60) *segunds) -90;
    let mDeg=((360 / 60)*minutes) -90; 
    let hDeg=((360 / 12)*hours) -90;
    second.style.transform=`rotate(${sDeg}deg)`;
    minute.style.transform=`rotate(${mDeg}deg)`;
    hour.style.transform=`rotate(${hDeg}deg)` 
}


 function fixzero(time){
     if(time<10){
         return '0'+time
     }else{
         return time;
     }
 }
 // intervalo de minutos
 setInterval(updateBlock,1000)
 updateBlock()