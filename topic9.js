// console.log(1); // 4sec
// console.log(2); // 5sec
// console.log(3);


// console.log(1);

// // setTimeout, setInterval
// setTimeout(() => {
//     console.log(2);
// })

// console.log(3);

// Promises
// Async Await

// function sum(a,b){
//     return a + b;
// }

// console.log(sum(2,2));

// function sum(a,b) {
//     return new Promise((resolve, reject) => {
//         resolve(a + b);
//     })
// }


// function sum(a,b) {
//     return new Promise((resolve, reject) => {
//         if(a > 0){
//             resolve(a + b);
//         }
//         reject("Error");
//     })
// }


// console.log(sum(2,2));
// sum(2,2).then((result) => {
//     console.log(result);
// })

// sum(-2,2).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })

// sum(-2,2).then((result) => {
//     console.log(result);
// },(error) => {
//     console.log(error);
// })

// function sum(a,b) {
//     return new Promise((resolve, reject) => {
//         if(a > 0){
//             resolve(a + b);
//         }
//         reject("Error");
//     })
// }

// sum(2,2).then((result) => {
//     return result * 10;
// }).then((result) => {
//     // console.log(result);
//     // return result * 10;
//     return sum(4,4);
// }).then((result) => {
//     console.log(result);
// })

// sum(-2,2).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
//     return sum(2,2);
// }).then((result) => {
//     console.log(result);
// })