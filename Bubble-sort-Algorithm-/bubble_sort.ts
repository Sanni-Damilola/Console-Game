const testData1: number[] = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 1000)
);

console.log("here", testData1);

// for (let i = 0; i <= 5; i++) {
//   for (let j = 5; j >= 0; j--) {
//     console.log(i, j);
//   }
// }

// console.time("code");
// const sort = (arr: number[]) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[i]) {
//         let rev: number = arr[i];
//         arr[i] = arr[j];
//         arr[j] = rev;
//       }
//     }
//   }
//   return arr;
// };

// console.log(sort([9, 7, 5, 6, 4, 2, 3, 1]));

// const end: any = new Date();

// console.timeEnd("code");
