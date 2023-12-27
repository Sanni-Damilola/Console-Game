// Recursive Method
console.time("Recursive: ");
const RecursiveMethod = (arr: number[], value: number) => {
  let midValue = Math.floor(arr.length / 2);
  let mid = arr[midValue];

  if (value === mid) {
    return true;
  } else if (value < mid && arr.length > 1) {
    return RecursiveMethod(arr.slice(0, midValue), value);
  } else if (value > mid && arr.length > 1) {
    return RecursiveMethod(arr.slice(midValue, arr.length), value);
  }
  return false;
};
// console.log(RecursiveMethod([1, 4, 6, 8, 29], 1));


// Recursive Method
const recursiveSearch = (arr: number[], value: number): boolean => {
  // Base case: If the array is empty, the value is not found
  if (arr.length === 0) {
    return false;
  }

  const midIndex = Math.floor(arr.length / 2);
  const midValue = arr[midIndex];

  if (value === midValue) {
    // Base case: Value found
    return true;
  } else if (value < midValue) {
    // Recursive case: Search in the left half of the array
    return recursiveSearch(arr.slice(0, midIndex), value);
  } else {
    // Recursive case: Search in the right half of the array
    return recursiveSearch(arr.slice(midIndex + 1), value);
  }
};

// Test the recursive search
const arrToSearch = [1, 4, 6, 8, 29];
const searchValue = 1;

console.time("Recursive Search");
const isValueFound = recursiveSearch(arrToSearch, searchValue);
console.timeEnd("Recursive Search");

console.log(`Is ${searchValue} found? ${isValueFound}`);
