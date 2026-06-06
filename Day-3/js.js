// 387. First Unique Character in a String 
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.


function firstnonrepeatingElement(s){
  let map=new Map()

  for(let char of s){
      if(map.has(char)){
        map.set(char,map.get(char)+1)
      }else{
        map.set(char,1)
      }
  }

  for(let i=0;i<s.length;i++){
     if(map.get(s[i])===1){
        return i
     }
  }
  return -1
}
console.log(firstnonrepeatingElement("leetcode"))

