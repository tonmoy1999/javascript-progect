function myTime(){
    let mainTime= new Date();
    let hours= mainTime.getHours();
    let minute=mainTime.getMinutes();
    let seconds=mainTime.getSeconds();
    let timeFormet="am";
  
   
// if(hours==0){
//     hours=12; 

    if(hours>12){
        hours=hours -12; 
        timeFormet="pm"
    }
    hours= hours<10 ? '0'+hours:hours;
    minute= minute<10 ? '0'+minute:minute;
    seconds= seconds<10 ? '0'+seconds:seconds;

    let failTime=`${hours}:${minute}:${seconds}:${timeFormet}`;
    document.getElementById("demo").innerHTML=failTime;
}
setInterval(myTime,1000);