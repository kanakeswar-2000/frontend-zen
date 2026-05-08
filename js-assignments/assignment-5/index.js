// 1 hr
console.log("-----1.------")
function greatestNumber(a,b){
    if(a>b){
        console.log(a)
    }else{
        console.log(b)
    }
}
greatestNumber(10,11)

console.log("-----2.------")
function leastNumber(a,b){
    if(a>b){
        console.log(b)
    }
    else{
        console.log(a)
    }
}
leastNumber(10,11)

console.log("-----3.-----")
function guidePedestrian(color){
    switch (color){
        case "red":
            console.log("Do not cross")
            break;
        case "green":
            console.log("It is Safe to Cross")
            break;
        case "yellow":
            console.log("Cross only if it is safe")
            break;
        default:
            console.log("Hola!You are not in the junction")
    }
}
guidePedestrian("yellow")

console.log("-----4.------")
function checkEqualityOfTwoNumbers(a,b){
    if(a==b){
        console.log("Both are Equal")
    }
    else{
        console.log("Not Equal")
    }
}
checkEqualityOfTwoNumbers(11,11)

console.log("----5.-----")
function isPositiveNumber(num){
    if(num>0){
        console.log(true)
    }else{
        console.log(false)
    }
}
isPositiveNumber(0)

console.log("----6.----")
function getGrade(marks){
    if(marks<0 || marks>100){
        return "Invalid marks"
    }
    else if(marks<35){
        return "Fail"
    }
    else if(marks<=50){
        return "D"
    }
    else if(marks<=60){
        return "C"
    }
    else if(marks<=70){
        return "B"
    }
    else if(marks<=80){
        return "A"
    }
    else if(marks<=100){
        return "Distinction"
    }
}
console.log(getGrade(800))


console.log("----7.----")
function typeOfData(data){
    let type=typeof data
    
    switch(type){
        case "number":
            return "Type is Number"
        case "string":
            return "Type is String"
        case "boolean":
            return "Type is Boolean"
        case "object":
            return "Type is Null"
        case "undefined":
            return "Type is Undefined"
    }
}
console.log(typeOfData("23"))

console.log("-----8.------")
function getResultOfMultiples(num){
    if(num%4==0 || num%5==0){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
getResultOfMultiples(18)

console.log("-----9.------")
function isAlphabet(data){
     
     if (typeof(data)==="string" && data.length===1){
        return true
     }
     return false

}
function isVowelOrConsonent(data){
     
    let isAlpha=isAlphabet(data)
    if (!isAlpha){
        return "Invalid Input"
    }
    let alpha=data.toLowerCase()
    if("aeiou".includes(alpha)){
        return "Vowel"
    }
    return "Consonent"

}
console.log(isVowelOrConsonent("a"))

console.log("----10.------")
function isEven(num){
    return num%2===0?"Even":"Odd"
}
console.log(isEven(-243.5))

/* 
    multiple values in case (switch statement) used with "or" condition
    wrong condition while checking isAlpha
*/