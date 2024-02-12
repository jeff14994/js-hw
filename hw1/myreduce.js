if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function(callback, initialValue) {
    // This refers to the array on which myReduce is called
    const arr = this;
    let accumulator = initialValue;
    let startIndex = 0;

    // If initialValue is not provided, use the first element of the array as initialValue
    // and start iteration from the second element
    if (initialValue === undefined) {
      if (arr.length === 0) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      accumulator = arr[0];
      startIndex = 1;
    }

    for (let i = startIndex; i < arr.length; i++) {
      // Execute the callback for each element
      accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
  };
}
