let imageEle=document.getElementById("image")
let turnOnBtn=document.getElementById("turn-on")
let turnOffBtn=document.getElementById("turn-off")


turnOnBtn.addEventListener("click",function(){
    imageEle.src="./assets/on.png"
    turnOnBtn.style.backgroundColor="black";
    turnOffBtn.style.backgroundColor="red";
})

turnOffBtn.addEventListener("click",function(){
    imageEle.src="./assets/off.png"
    turnOffBtn.style.backgroundColor="black"
    turnOnBtn.style.backgroundColor="green"
})