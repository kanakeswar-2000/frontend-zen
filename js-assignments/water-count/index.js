let no_of_glasses=8
let glasses_container=document.getElementById("glasses")
let emptyContainer=document.getElementById("empty-container")
let filledContainer=document.getElementById("filled-container")
let glasses=[]
for (let i=0;i<no_of_glasses;i=i+1){
    let glass=document.createElement("li")
    glass.classList.add("glass")
    glass.textContent="250 ml"
    glasses_container.appendChild(glass) 
    glasses.push(glass)
}

glasses.forEach((glass,i)=>{
    glass.addEventListener("click",()=>{
        glass.classList.toggle("filled")
        updateWaterLevel()

    })
})

function updateWaterLevel(){
    let filledGlasses=document.querySelectorAll(".glass.filled").length ;
    console.log(filledGlasses)

    let filledPercent=(filledGlasses/no_of_glasses) *100;
    let emptyPercent=100-filledPercent;

    emptyContainer.style.height=`${emptyPercent}%`
    if (emptyPercent===0){
        emptyContainer.textContent=""
    }else{
        emptyContainer.textContent=`${2*emptyPercent/100} L`
    }
     
    filledContainer.style.height=`${filledPercent}%`

    if(filledPercent===0){
        filledContainer.textContent=""
    }else{
        filledContainer.textContent=`${filledPercent}%`
    }
     
}