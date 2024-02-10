// function getIntervalArray(start, end) {
//   let arr = new Array(end - start + 1).fill(null);
//   let arr = new Array(end - start + 1).fill(null);
//   arr.length = end - start + 1;

//   arr = arr
//   .fill(null)
//   .map((item, index) => index + start);

//   return arr;
// }

// console.log(getIntervalArray(1, 5))

// let lol = [];
// lol.length = 5;
// console.log(lol.length)

// console.log(Boolean(' '));

// const counter = chunkSize;
// const resultArray = [];

// console.log(resultArray);
// return arr.map((item, index) => {
//   if (arr[index + (chunkSize - 1)]) {
//     return arr.splice(index, chunkSize);
//   }
//   return arr.splice(index);
// });

// const num = 2;
// function createNumArr(number) {
//   let array = new Array(number).fill(0);
//   let counter = 1;
//   array = array.map(() => {
//     const newNumber = counter;
//     counter += 2;
//     return newNumber;
//   });
//   return array;
// }

// console.log(createNumArr(num));

// const num = 3;

// function getIdentityMatrix(n) {
//   let matrix = new Array(n).fill(new Array(n).fill(0));
//   matrix = matrix.map((item, index) => {
//     const newElement = [...item];
//     newElement[index] = 1;
//     return newElement;
//   });
//   return matrix;
// }

// console.log(getIdentityMatrix(num));

// const num = 3;

// function getIndicesOfOddNumbers(numbers) {
//   // const resultArray = [];
//   return numbers
//     .map((item, index) => {
//       if (item % 2 !== 0) {
//         return index;
//       }
//       return null;
//     })
//     .filter((item) => item !== null);
// }

// console.log(getIndicesOfOddNumbers([1, 2, 3, 4, 5]));

// const user = {
//   name: 'John',
//   surname: 'Smith',

//   setName(value) {
//     [this.name, this.surname] = value.split(' ');
//   },

//   getName() {
//     return `${this.name} ${this.surname}`;
//   },
// };

// const admin = {
//   __proto__: user,
//   isAdmin: true,
// };

// console.log(admin.getName()); // John Smith (*)

// // срабатывает сеттер!
// admin.setName('Alice Cooper'); // (**)
// console.log(admin.name); // Alice
// console.log(admin.surname); // Cooper

function findLongestIncreasingSubsequence(nums) {
  // let result = 0;
  // let counter = 0;
  // nums.reduce((acc, cur) => {
  //   if (cur > acc) {
  //     console.log(counter);
  //     counter += 1;
  //     if (counter > result) {
  //       result = counter;
  //     }
  //     return acc * 0 + cur;
  //   }
  //   if (counter > result) {
  //     result = counter;
  //   }
  //   counter = 1;
  //   return acc * 0 + cur;
  // }, 0);
  // return result;
  // let counter = 0;
}

// console.log(findLongestIncreasingSubsequence([3, 10, 2, 1, 20]));

// function shiftArray(arr, n) {
//   const shiftNumber = n * -1;

//   arr.splice(0, 0, arr.splice(shiftNumber));
//   return arr.flat(2);
// }

// console.log(shiftArray([10, 20, 30, 40, 50], 1));

// function sortDigitNamesByNumericOrder(arr) {
//   if (arr.length === 0) return [];

//   const numbers = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//   };

//   return arr.sort((a, b) => numbers[a] - numbers[b]);
// }

// console.log(sortDigitNamesByNumericOrder(['one', 'two', 'three']));

// function swapHeadAndTail(arr) {
//   if (arr.length < 2) return arr;
//   const endHeadId = Math.floor(arr.length / 2);
//   let startTailId = endHeadId;
//   if (arr.length % 2 !== 0) {
//     startTailId = endHeadId + 1;
//   }

//   const headArr = arr.slice(0, endHeadId);
//   const tailArr = arr.slice(startTailId);

//   arr.splice(0, endHeadId, tailArr).flat(2);
//   const resultArr = arr.flat(2);
//   resultArr.splice(startTailId, resultArr.length, headArr);

//   return resultArr.flat(2);
// }

// console.log(swapHeadAndTail([1, 2, 3, 4]));

// function createChunks(arr, chunkSize) {
//   const resultArr = [];
//   let counter = chunkSize;
//   let preventIndex = 0;
//   arr.map((item, index) => {
//     if (index === counter - 1) {
//       resultArr.push(arr.slice(index - chunkSize + 1, counter));
//       preventIndex = counter;
//       counter += chunkSize;
//       return item;
//     }
//     if (index === arr.length - 1) {
//       resultArr.push(arr.slice(preventIndex));
//     }
//     return item;
//   });
//   return resultArr;
// }

// console.log(createChunks([10, 20, 30, 40, 50], 1));

function getElementByIndices(arr, indices) {
  const index = indices[0];
  let result = arr[index];

  if (typeof result === 'object') {
    indices.splice(0, 1);
    result = getElementByIndices(result, indices);
  }
  return result;
}

console.log(getElementByIndices([[[1, 2, 3]]], [0, 0, 1]));
