function customSort(arr){
    return arr.sort((a, b) =>{
      if(a % 2 !== b % 2){
        return a % 2 === 0 ? 1 : -1;
      }
      return a - b;
    });
}
console.log(customSort([4,2,5,7,1,6]));
console.log(customSort([25,40,14,91,31,22,49,13,6]));
console.log(customSort([45,46,55,56,65,66,75,76,85,86]));