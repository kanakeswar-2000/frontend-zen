 
let arr1=["hello",1]
console.log(arr1)

console.log("-------2. -----")
let arr2=["Bulls", 1, 2, 23, "one", "two", "White Sox", "three", 45, 3, 4, 5]
console.log([["Bulls",23,[1,2,3,4,5,["one"]]],["White Sox",45]])

console.log("-------3. -----")
let arr3=[2,4]
console.log(arr3[1])

console.log("-------4. -----")
let arr4=[18,64,99]
arr4[0]=45
arr4[2]="fifty four"
console.log(arr4)

console.log("-------5. ------")
let arr5=[[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]]
console.log(arr5[2][1])
console.log(arr5[3][0][2])

console.log("-------6. -----")
let arr6=["John", [2], 23]
arr6.push(["dog",3])
console.log(arr6)

console.log("-------7. -----")
let arr7=["John", [2], 23]
no_of_items=arr7.length
console.log(no_of_items)

console.log("-------8. ------")
let arr8=["john",[2],23]
let removedEle=arr8.pop()
console.log(removedEle)

console.log("-------9. ------")
let arr9=["John",[2],23]
let firstEle=arr9.shift()
console.log(firstEle)

console.log("-------10. -----")
let arr10=["John",[2],23]
arr10.unshift("Good Evening")
console.log(arr10)

console.log("-------11. -----")
let arr11=["John",[2],23]
arr11.splice(1,1)
console.log(arr11)

console.log("-------12. ------")
let arr12=[2, 4, 5, 1, 7, 5, 2, 1]
arr12.splice(1,4)
console.log(arr12)

console.log("-------13. --------")
let arr13=[10, 11, 12, 13, 14, 15]
let newArr=arr13.slice(2,4)
console.log(newArr)

console.log("-------14. -------")
let arr14=[1, "two", 3, "four"]
let index1=arr14.indexOf(3)
console.log(index1)

console.log("-------15. -------")
let arr15=[1, "two", 3, "four"]
let index2=arr15.indexOf(5)
console.log(index2)