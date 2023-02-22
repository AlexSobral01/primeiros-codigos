var sec=0
var min=0
var hr=0
var working=false

var interval

function start(){
    if (working==false) {
       interval= setInterval(oneSec,1000)
    }
    working=true
    document.getElementById('timer')
}
function pause() {
    clearInterval(interval)
    working=false
}
function stop(){
    clearInterval(interval);
    document.getElementById('timer').innerText='00:00:00';
    sec=0
    min=0
    hr=0

}

function oneSec(){
    sec++
     if (sec==60) {
        min++
        sec=0
        if (min==60) {
              hr++
              min=0
            }
        }
        document.getElementById('timer').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)
     }
     function twoDigits(digit){
        if (digit<10) {
            return('0'+digit)
        } else {
            return(digit)
        }
     }
     