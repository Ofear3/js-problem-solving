// 1. Find missing number in array

let array = [1,2,4,5];
let sum = 0;
for(let item of array) sum+=item;
let n=array.length;
let res = n*(n+1) / 2;
console.log(res);
let ans = sum-res;

console.log(ans);

// 2. Two sum problem (find pairs that sum to target)


// 3. Validate parentheses in expression


// 4. Find first non-repeating character


// 5. Merge overlapping intervals