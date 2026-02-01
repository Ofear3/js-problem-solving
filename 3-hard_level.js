// 1. Implement bubble sort

function bubbleSort(arr) {
  let n = arr.length;
  for(let i=0; i<n-1; i++) {
    for(let j=0; j<n-1-i; j++) {
      if(arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; 
      }
    }
  }
  return arr;
}


console.log(bubbleSort([5,2,9,1,5,6]));


// 2. Implement binary search

function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;

  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    if(arr[mid] === target) return mid;
    else if(arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1; 
}


let sortedArr = [1,2,3,4,5,6,7];
console.log(binarySearch(sortedArr, 4)); // 3
console.log(binarySearch(sortedArr, 10)); // -1


// 3. Find prime factors of number



// 4. Calculate power without Math.pow()

function power(base,iteration){
    let res = 1; 
    for(let i=0; i<iteration; i++) res*=base;
    return res;
} 

console.log("The power of 2 to the power 5 is: ",power(2,5));


// 5. Generate all permutations of string