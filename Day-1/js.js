// Question no.1

let num=[1,2,3]
let num2=[4,5,6]
let result=num.concat(num2)
console.log(result)

// Question no.2

 let str="heloo**jdffdffdfj**dffggf"
 let arrayString=str.split("")
 let count=0
for(let i=0;i<arrayString.length;i++){
     if(arrayString[i]=="*"){
     count++
}
}
console.log(count)