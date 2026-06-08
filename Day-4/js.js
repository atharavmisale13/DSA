function countSubarray(arr,k){
    let map=new Map()
    let sum=0,count=0
    map.set(sum,1)

    for(let i=0;i<arr.length;i++){
        sum +=arr[i]
        if(map.has(sum-k))count += map.get(sum-k)
        
        map.set(sum,(map.get(sum) ||0) + 1)    
    }
    return count
}
console.log(countSubarray([10,2,-2,-10],-10))