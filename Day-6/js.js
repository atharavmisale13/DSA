function countJewelsInStones(jewels, stones) {
      let set=new Set(jewels) 
      let count=0
        for(let i=0;i<stones.length;i++){
             if(set.has(stones[i])){
                count = count + 1
             }
        }

      return count 
      
}
console.log(countJewelsInStones("aA","aAAbbbb"))
