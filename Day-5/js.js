// Hashing : Longest Subarray with sum K

function longestSubarrayWithSumK(arr,k){
    let map=new Map()
    let prefixSum=0
    let maxLength=0;//4
    
    for(let i=0;i<arr.length;i++){
       prefixSum+=arr[i]

       if(prefixSum === k){
        maxLength = i+1
       }

       let remainingSum=prefixSum -k
       if(map.has(remainingSum)){
        maxLength=Math.max(maxLength, i-map.get(remainingSum))//4
       }

       if(!map.has(prefixSum)){
        map.set(prefixSum,i)
       }
    }
    return maxLength
}

console.log(longestSubarrayWithSumK([10, 5, 2, 7, 1, 9,54,12,3,14],15))