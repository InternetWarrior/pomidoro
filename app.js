// mainSet
let a = setInterval(()=>{timeOut()},100)

let updateNum = 0;
let time = 1;
let sec  = 1000
let min = sec*60
let currentPosition = 0;
let settingTracker = true;
const pause = false


let pomidorTime = document.getElementById("pomodoro").value
let breakTime = document.getElementById("shortBreak").value
let longBreak = document.getElementById("numberOfPomodoro").value *2   
let longBreakTime = document.getElementById("longBreak").value


let settingBTN = document.querySelector('#settingsBTN')
let stopBTN = document.querySelector('#stop')
let settingContainer = document.querySelector('.settingsContainer')
let closeBTN = document.querySelector('#close')
let playBTN =  document.querySelector('#play')



const pauseBTN = document.querySelector('#pause')
const saveBTN = document.querySelector('#save')
const continueBTN = document.querySelector('#continue')



var backgound = document.querySelector('.background')
var settingBackground = document.querySelector('.settingsContainer')


//Progress percent 
let mine;
let line;
let sine;




// Button clicks 


stopBTN.onclick =()=> {updateData();continueFN()}
saveBTN.onclick = close
settingBTN.onclick = close
closeBTN.onclick = close


// SETTING



playBTN.onclick = play





// PAUSE BUTTON TRACKER

continueBTN.onclick =()=>continueFN()




//TIMER

let progCircle = document.querySelector(".progress")
let radious = progCircle.r.baseVal.value


let circumference = radious *2*Math.PI
progCircle.style.strokeDasharray = circumference;

function setProgress(percent){
progCircle.style.strokeDashoffset = circumference- (percent/100)*circumference
}




// Functions 



function play() {
    pauseBTN.classList.remove('hiden')
    playBTN.classList.add('hiden')
    updateData()
}


function close(){
    if (settingTracker==true){settingContainer.classList.add("settingsContainerON");settingTracker=false}
    else{
        settingContainer.classList.remove("settingsContainerON")
        settingTracker = true
    }
    
}



pauseBTN.onclick = ()=>{
    updateNum = 0
    stopBTN.classList.remove('hiden')   
    continueBTN.classList.remove('hiden')   
    pauseBTN.classList.add('hiden')
}




function continueFN(){
      
    pauseBTN.classList.remove('hiden')   
    stopBTN.classList.add('hiden')
    continueBTN.classList.add('hiden')
    updateNum= 100;
}




function timeOut(){
    let textMin = Math.floor(time/min)
    let textSec = Math.floor((time%min)/sec)
  

    time = time-updateNum
    mine = time - line 
    gine = mine/sine 
    console.log(textSec)

    

    if  (time < 0){
        let a  = quee()
        time = (a *1000 )
        mine = a*1000 
        sine = a*1000 
        line = a 
        
    }
    
    else if(time<600000){
        document.querySelector('.min').innerText= '0'+textMin
    }else if(time<60000){
        document.querySelector('.min').innerText= '00'
    }

    else if(textSec<10){
        document.querySelector('.sec').innerText= '0'+textSec
    }
     
    else{
        document.querySelector('.min').innerText=textMin
    }   
    document.querySelector('.sec').innerText= textSec

    if(textSec<10){
        document.querySelector('.sec').innerText= '0'+textSec
    }
  
    setProgress(100- Math.floor(gine*100))  
}






function pomidorPosCheck(){
    currentPosition = currentPosition+1
    return currentPosition%longBreak==0?'longbreak':currentPosition%2==0?'break':'pomidor';
    
}





function quee(){
    let pos = pomidorPosCheck()
    if(pos=='longbreak'){
        backgound.classList.add('backgroundBreak')
        settingBackground.classList.add('settingsContainerONBreak')
        
        return longBreakTime
    }else if(pos=='break'){
        backgound.classList.add('backgroundBreak')
        settingBackground.classList.add('settingsContainerONBreak')
        return breakTime
    }else if (pos=='pomidor'){
        backgound.classList.remove('backgroundBreak')
        settingBackground.classList.remove('settingsContainerONBreak')
        return pomidorTime
    }
}



function updateData(){


    time = 0
    mine = 0
    gine = 0

    currentPosition = 0

    pomidorTime = document.getElementById("pomodoro").value *60

    breakTime = document.getElementById("shortBreak").value *60
   
    longBreak = document.getElementById("numberOfPomodoro").value *2
   
    longBreakTime = document.getElementById("longBreak").value *60

    console.log('hey')

 updateNum = 100;
 
}



