let no_of_glasses=8
let glasses_container=document.getElementById("glasses")
let emptyContainer=document.getElementById("empty-container")
let filledContainer=document.getElementById("filled-container")
let glasses=[]
for (let i=0;i<no_of_glasses;i=i+1){
    let glass=document.createElement("li")
    glass.classList.add("glass")
    glass.textContent="250 ml"
    glass.id=i;
    glasses_container.appendChild(glass) 
    glasses.push(glass)
}

glasses.forEach((glass,i)=>{
    glass.addEventListener("click",()=>{
        updateWaterLevel(i)

    })
})

function updateFilled(n){
    for (let i=0 ;i<no_of_glasses;i=i+1){
        let glass=document.getElementById(i)
        if (i<=n){
             
            glass.classList.add("filled")
        }
        else{
            glass.classList.remove("filled")
        }
    }
}

function updateWaterLevel(i){
    updateFilled(i)
    filledGlasses=i+1 ;
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

/* Learning Points :
    1.if condition wrong in updateFilled function
    2.if condition not identified in updateWaterLevel function
*/