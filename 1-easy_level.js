// 1. Reverse a string

let str = "hello";
let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
  rev = rev + str[i];
}
console.log("Reversed:", rev);

// 2. Check palindrome

let word = "madam";
let revWord = "";

for (let i = word.length - 1; i >= 0; i--) {
  revWord += word[i];
}

if (word === revWord) {
  console.log("Palindrome");
} else {
  console.log("Not Palindrome");
}

// 3. Find longest word in array

let words = ["apple", "banana", "cherry", "watermelon"];
let longest = words[0];

for (let i = 1; i < words.length; i++) {
  if (words[i].length > longest.length) {
    longest = words[i];
  }
}
console.log("Longest word:", longest);

// 4. Capitalize first letter of each word

let sentence = "hello world";
let result = "";
let capitalizeNext = true;

for (let i = 0; i < sentence.length; i++) {
  if (capitalizeNext && sentence[i] !== " ") {
    result += sentence[i].toUpperCase();
    capitalizeNext = false;
  } else {
    result += sentence[i];
  }

  if (sentence[i] === " ") {
    capitalizeNext = true;
  }
}
console.log("Capitalized:", result);

// 5. Count vowels in string

let text = "hello";
let count = 0;

for(let item of text) {
    if("aeiou".includes(item)) count++;
}

console.log("Vowel count:", count);
