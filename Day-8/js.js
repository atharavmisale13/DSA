// Two Sum using Map()

function twoSum(nums,target){
    let map =new Map()

    for(let i=0;i<nums.length;i++){
        let compli=target-nums[i]

        if(map.has(compli)){
            return [map.get(compli),i]
        }else{
            map.set(nums[i],i)
        }
    }
}
console.log(twoSum([2,7,11,15],9))