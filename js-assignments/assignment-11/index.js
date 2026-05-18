 
 
 

class Car{
    constructor(isRunning,speed){
        this.isRunning=isRunning;
        this.speed=speed
    }
    changeIsRunning(){
        let accelerate=document.getElementById("accelerate")
        let decelerate=document.getElementById("decelerate")

        let button=document.getElementById("button");
        let status=document.getElementById("status")
        this.isRunning=!this.isRunning
        let buttonText=this.isRunning?"Stop":"Start"
        button.textContent=buttonText
        let statusText=this.isRunning?"Running":"Stopped"
        status.textContent=statusText
        if (!this.isRunning){
            this.speed=0
            accelerate.style.backgroundColor="";
            decelerate.style.backgroundColor="";
            button.style.backgroundColor="green"
        }
        else{
            accelerate.style.backgroundColor="blue"
            button.style.backgroundColor="red"
        }
    }
    increaseSpeed(){
        let decelerate=document.getElementById("decelerate")
        let status=document.getElementById("status")
        if (this.isRunning) {
            let updatedspeed=this.speed + 10
            this.speed=updatedspeed
            status.textContent=`Car Speed is ${updatedspeed} kmph`
            decelerate.style.backgroundColor="blue"
        }
    }
    decreaseSpeed(){
        let status=document.getElementById("status")
        let decelerate=document.getElementById("decelerate")
        if (this.speed>=10){
            let updatedspeed=this.speed - 10
            this.speed=updatedspeed
            if (this.speed===0){
                status.textContent="Running"
                decelerate.style.backgroundColor=""
            }
            else {
                status.textContent=`Car Speed is ${updatedspeed} kmph`
            }
        }
    }
    
}

let carObj=new Car(false,0)

function pressAccelerator(){
    carObj.increaseSpeed()
}

function pressDecelerator(){
    carObj.decreaseSpeed()
}
function toggleStatus(){
    carObj.changeIsRunning()
}