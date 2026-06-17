// fibonicci series 


let n=10,first=0,second=1;
process.stdout.write(first + " " + second + " ")
fibo(n-2,first,second)

function fibo(n,first,second){
    if(n===0) return 
    let third=first +second
    process.stdout.write(third + " ")
    fibo(n-1,second,third)
}



