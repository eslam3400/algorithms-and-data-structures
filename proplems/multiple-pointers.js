const helper = require('../helper');

/**
  Multiple Pointers - countUniqueValues
  Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

  countUniqueValues([1,1,1,1,1,2]) // 2
  countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
  countUniqueValues([]) // 0
  countUniqueValues([-2,-1,-1,0,1]) // 4
  Time Complexity - O(n)

  Space Complexity - O(n)

  Bonus

  You must do this with constant or O(1) space and O(n) time.
*/
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let count = 1;
  let pointer = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[pointer] != arr[i]) {
      count++;
      pointer = i;
    }
  }
  return count;
}

/**
  Multiple Pointers - averagePair
  Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

  Bonus Constraints:

  Time: O(N)

  Space: O(1)

  Sample Input:

  averagePair([1,2,3],2.5) // true
  averagePair([1,3,3,5,6,7,10,12,19],8) // true
  averagePair([-1,0,3,4,5,6], 4.1) // false
  averagePair([],4) // false
*/
function averagePair(arr, target) {
  if (arr.length == 0) return false;
  
  const sum = target * 2;
  let startPointer = 0;
  let endPointer = arr.length - 1;
  
  while (true){
    if (startPointer > endPointer) break;
    if (arr[startPointer] + arr[endPointer] > sum) endPointer--;
    if (arr[startPointer] + arr[endPointer] < sum) startPointer++;
    if (arr[startPointer] + arr[endPointer] == sum) return true;
  }

  return false;
}