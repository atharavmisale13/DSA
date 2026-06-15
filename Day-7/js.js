//convert binary to decimal

let binary=1101;
let decimal=0;
let count=0;

while(binary>0){
    let bit=binary%10;
    decimal=decimal + (bit * Math.pow(2,count));
    binary=Math.floor(binary/10)
    count++
}
console.log(decimal)

//convert decimal to binary

let num=20;
let ans="";

while(num>0){
    let bit=num%2
    ans=bit + ans
    num=Math.floor(num/2)
}

console.log(ans)


