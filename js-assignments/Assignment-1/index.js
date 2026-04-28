console.log(1)
console.log("You progress, the nation follows")

console.log(2)
let sentence="You progress the nation follows"
let words=sentence.split(" ")
for (let word of words){
    console.log(word)
}

console.log(3)
console.log("I'm Javascript!")

function displayInput(){
    console.log(4)
    let ele=document.getElementById("q-4-input")
    let d_ele=document.getElementById("q-4")
    let value=ele.value
    console.log(value)
    d_ele.textContent=value
}


console.log(5)
let name
let copiedName
name="John"
copiedName="John"
console.log(copiedName)

console.log(6)
let x
console.log(x)

function typeData(){
    console.log(7.)
    let ele=document.getElementById("q-7-input")
    let d_ele=document.getElementById("q-7")
    let value=ele.value
    console.log(typeof(value))
    d_ele.textContent=typeof(value)
}

function greetUser(){
    console.log(8.)
    let ele=document.getElementById("q-8-input")
    let d_ele=document.getElementById("q-8")
    let name=ele.value
    console.log(`Congratulations ${name}`)
    d_ele.textContent=`Congratulations ${name}`
}

function swapNumbers(){
    console.log(9.)
    let ele=document.getElementById("q-9-input")
    let d_ele=document.getElementById("q-9")
    let arr=ele.value.split(",")
    let nums=arr[1]+","+arr[0]
    console.log(nums)
    d_ele.textContent=nums
}

function avgNumbers(){
    console.log(11.)
    let ele=document.getElementById("q-11-input")
    let d_ele=document.getElementById("q-11")
    let [a,b]=ele.value.split(",")
    let avg=(parseInt(a)+parseInt(b))/2
    console.log(avg)
    d_ele.textContent=avg

}

function costPriceCalculation(){
    console.log(12.)
    let ele=document.getElementById("q-12-input")
    let d_ele=document.getElementById("q-12")
    let[sp,p]=ele.value.split(",")
    let cp=(parseInt(sp)-parseInt(p))/15
    console.log(cp)
    d_ele.textContent=cp
}

function marksCalculation(){
    console.log(13.)
    let ele=document.getElementById("q-13-input")
    let d_ele=document.getElementById("q-13")
    let [a,b,c,d,e]=ele.value.split(",")
    let total=parseInt(a)+parseInt(b)+parseInt(c)+parseInt(d)+parseInt(e)
    let percentage=Math.round(total/5 ,1)
    console.log(`Total: ${total}, Percentge: ${percentage}`)
    d_ele.textContent=`Total: ${total}, Percentge: ${percentage}`
}

function areaOfTriangle(){
    console.log(14.)
    let ele=document.getElementById("q-14-input")
    let d_ele=document.getElementById("q-14")
    let [a,b]=ele.value.split(",")
    let area=(parseInt(a)*parseInt(b))/2
    console.log(area)
    d_ele.textContent=area
}

function areaOfCircle(){
    console.log(15.)
    let ele=document.getElementById("q-15-input")
    let d_ele=document.getElementById("q-15")
    let radius=parseInt(ele.value)
    let area=3.14 * radius *radius
    console.log(area)
}