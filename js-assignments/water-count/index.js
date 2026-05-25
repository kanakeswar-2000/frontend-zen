let no_of_glasses=8
let glasses_container=document.getElementById("glasses")
let glasses=[]
for (let i=0;i<no_of_glasses;i=i+1){
    let glass=document.createElement("li")
    glass.classList.add("glass")
    glasses_container.appendChild(glass) 
    glasses.push(glass)
}

glasses.forEach((glass,i)=>{
    glass.addEventListener("click",()=>{
        glass.classList.add("filled")
        updateWaterLevel()

    })
})