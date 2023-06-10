var minElement =document.getElementById("minElement");
var secElement =document.getElementById("secElement");
var mSecElement=document.getElementById("msecElement");
var startBtn = document.getElementById("startBtn");
var min = 0;
var sec = 0;
var mSec = 0;

var interval;
function timer(){
  mSec++
  mSecElement.innerHTML = mSec;
if (mSec >= 100 ){
    mSec = 0
sec++
secElement.innerHTML = sec

}
else if (sec >= 59){
sec = 0
min++
minElement.innerHTML = min

}


}
function start(){
 
interval = setInterval(timer, 10)}


function stop(){
    clearInterval(interval)

}
function reset(){
clearInterval(interval)
min = 0
sec = 0
mSec = 0
minElement.innerHTML = "00"
secElement.innerHTML = "00"
mSecElement.innerHTML = "00"


}
