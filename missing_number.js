function findMissingNumber(arr) {
    const n = arr.length + 1;//5
    const numberSet = new Set(arr); 
  
    for (let i = 1; i <= n; i++) {
      if (!numberSet.has(i)) {
          return i;
      }
    }
  }
  
  console.log(findMissingNumber([1,3,4,5]));