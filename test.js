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

const num = 3;

function getIndicesOfOddNumbers(numbers) {
  // const resultArray = [];
  return numbers
    .map((item, index) => {
      if (item % 2 !== 0) {
        return index;
      }
      return null;
    })
    .filter((item) => item !== null);
}

console.log(getIndicesOfOddNumbers([1, 2, 3, 4, 5]));
