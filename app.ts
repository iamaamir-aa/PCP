
document.getElementById("timeRemaining")!.textContent="Hello";

const d:Date=new Date();
const year:number=  d.getFullYear();
const isLeap:boolean=isLeapYear(year);

const numOfDays:number=isLeap?366:365;


const firstDayOfYear:Date=new Date(year,0,1,0,0,0);
const totalSeconds = numOfDays * 24 * 60 * 60;
const percentPerSec:number = 100 / (totalSeconds);
function updatePercentages():void{
    const secondsPassed:number=(Date.now()-firstDayOfYear.getTime())/1000;
    const remainingTime:number= totalSeconds  - secondsPassed;

    const percentPassed=secondsPassed * percentPerSec ;
    const percentRemaining=remainingTime * percentPerSec;

    document.getElementById("timeRemaining")!.textContent=String(percentRemaining);
    document.getElementById("timePassed")!.textContent=String(percentPassed);

}


const updateInterval = setInterval(updatePercentages, 1000);

function isLeapYear(year:number):boolean{
    if(year%400 === 0  ){
    return true;
    }else if(year%100 ===0){
        return false;
    }
    else if(year%4==0){
        return true;
    }else{
    return false;
    }
}