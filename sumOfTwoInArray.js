function hasPairWithSum(arr, target){
    const complements = new Set();
    for(const num of arr){
      if(complements.has(num)){
        return true;
      }
      complements.add(target - num);
    }
    return false;
}
console.log(hasPairWithSum([1,3,5,7,16,4],8));
console.log(hasPairWithSum([2,3,5,7,16,4],12));
console.log(hasPairWithSum([1,3,5,7,16,4],18));
console.log(hasPairWithSum([12,17,14,11,19,8],20));
console.log(hasPairWithSum([5,10,16,19,23,28],32));