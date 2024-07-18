function largestNumber(nums){
    nums.sort((a, b) => {
      return (b.toString() + a.toString()) - (a.toString() + b.toString());
    });
    const result = nums.join('');
    return result[0] === '0' ? '0' : result;
  }
console.log(largestNumber([10,2,13,7]));
console.log(largestNumber([21,36,8,45]));
