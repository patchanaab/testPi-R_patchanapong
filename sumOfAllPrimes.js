function isPrime(num){
    if(num <= 1){
        return false;
    }
    if(num <= 3){
        return true
    }
    if(num % 2 === 0 || num % 3 === 0){
        return false;
    }
    for(let i = 5; i * i <= num; i += 6){
      if(num % i === 0 || num % (i + 2) === 0){
        return false;
        }
    }
    return true;
}
  
function sumOfPrimes(n){
    let sum = 0;
    for (let i = 2; i <= n; i++){
      if (isPrime(i)) {
        sum += i;
      }
    }
    return sum;
}
console.log(sumOfPrimes(10));
console.log(sumOfPrimes(59));
console.log(sumOfPrimes(12));
console.log(sumOfPrimes(61));