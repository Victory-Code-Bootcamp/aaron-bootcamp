function multiplyFirstByRest(...args) {
    if (args.length < 2) {
      throw new Error("At least two arguments are required");
    }
    
    const first = args[0];
    return args.slice(1).map(num => first * num);
  }
  
  // Example usage:
  console.log(multiplyFirstByRest(2, 3, 4, 5));
  console.log(multiplyFirstByRest(1, 2, 3));
  console.log(multiplyFirstByRest(5, 10, 15));
  
  function removeSpecifiedValues(array, ...valuesToRemove) {
    return array.filter(item => !valuesToRemove.includes(item));
  }
  
  // Example usage:
  console.log(removeSpecifiedValues([1, 2, 3, 4, 5], 2, 4));
  console.log(removeSpecifiedValues(['a', 'b', 'c', 'd'], 'b', 'd'));
  console.log(removeSpecifiedValues([1, 2, 3, 4, 5], 3));
  