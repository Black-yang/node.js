// rest参数
// function fn(...rest) {
//     let sum=0;
//     for (let i = 0; i < rest.length; i++) {
//         sum += rest[i];
//         // return sum;
//     }
//     console.log(sum);
// }

// fn(1, 2, 3, 4, 5);
// 扩展运算符
let max=[1,2,4];
console.log(Math.max(...max));