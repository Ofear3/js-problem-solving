// 1. Find missing number in array

let array = [1,2,4,5];
let sum = 0;
const out = console.log;
for(let item of array) sum+=item;
let n=array[(array.length-1)];
let res = (n*(n+1)) / 2;
out(`The actual sum of the array will be: ${res}`);
let ans = res - sum;
out(`The missing number is: ${ans}`);

// 2. Two sum problem (find pairs that sum to target)
let arr= [1,2,3,4,5,6,7,8,9];
let target = 8;

for(let i=0; i<arr.length; i++) {
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]+arr[j]===target) out(`The pari is ${arr[i]} , ${arr[j]}`);
    }
}

// 3. Validate parentheses in expression

function isValid(arr) {
  let stack = [];
  let map = {
    ')': '(',
    '}': '{',
    ']': '['
  };

  for (let ch of arr) {
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch);
    } else if (ch === ')' || ch === '}' || ch === ']') {
      if (stack.pop() !== map[ch]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

out(isValid("(){}[]"));   // true
out(isValid("([{}])"));  // true
out(isValid("(]"));      // false
out(isValid("((())"));   // false


// 4. Find first non-repeating character
function firstNonRepeatingChar(str) {
  let count = {}; 

  for (let ch of str) {
    if (count[ch]) count[ch]++;
    else count[ch] = 1;
  }

  for (let ch of str) {
    if (count[ch] === 1) return ch;
  }

  return null; 
}


let str = "hello";
console.log(firstNonRepeatingChar(str)); // w


// 5. Merge overlapping intervals