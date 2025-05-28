/**
  Frequency Counter - validAnagram
  Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

  Examples:

  validAnagram('', '') // true
  validAnagram('aaz', 'zza') // false
  validAnagram('anagram', 'nagaram') // true
  validAnagram("rat","car") // false) // false
  validAnagram('awesome', 'awesom') // false
  validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
  validAnagram('qwerty', 'qeywrt') // true
  validAnagram('texttwisttime', 'timetwisttext') // true
  Note: You may assume the string contains only lowercase alphabets.

  Time Complexity - O(n)
 */
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const charCount1 = {};
  const charCount2 = {};

  for (let char of str1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
  }

  for (let char of str2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
  }

  for (let char in charCount1) {
    if (!(char in charCount2)) {
      return false;
    }
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
}

/**
  Frequency Counter - sameFrequency
  Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

  Your solution MUST have the following complexities:

  Time: O(N)

  Sample Input:

  sameFrequency(182,281) // true
  sameFrequency(34,14) // false
  sameFrequency(3589578, 5879385) // true
  sameFrequency(22,222) // false
*/
function sameFrequency(number1, number2) {
  const map = {};

  for (const element of number1.toString().split('')) {
    if (map[element]) map[element] += 1;
    else map[element] = 1;
  };

  for (const element of number2.toString().split('')) {
    if (!map[element] || map[element] == 0) return false;
    map[element] -= 1;
  }

  for (const key in map) {
    if (map[key] != 0) return false;
  }

  return true;
}

/**
  Frequency Counter / Multiple Pointers - areThereDuplicates
  Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

  Examples:

  areThereDuplicates(1, 2, 3) // false
  areThereDuplicates(1, 2, 2) // true 
  areThereDuplicates('a', 'b', 'c', 'a') // true 
  Restrictions:

  Time - O(n)

  Space - O(n)

  Bonus:

  Time - O(n log n)

  Space - O(1)
*/
function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
}