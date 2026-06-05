// Question no.1


findNumbers = function(nums) {
    let count=0
    for(let i=0;i<nums.length;i++){
       let numLength=Array.from(String(nums[i]),Number)
       let countNumbers=0
       for(let j=0;j<numLength.length;j++){
          countNumbers++
       }
       if(countNumbers%2===0){
          count++
       }
    }
    return count
    
};

console.log(findNumbers([12,345,2,6,7896]))


// Question 2

let insertionSortList = function(head) {
   let n=head.length
   for(let i=1;i<n;i++){
    let key=head[i]
    let j=i-1 

    while(j>=0 && head[j]>key){
        head[j+1]=head[j]
        j--
    }
    head[j+1]=key
   }
   return head
};

console.log(insertionSortList([4,2,1,3]))

