let a = 1
let b = 1
let temp;

console.log(a);
console.log(b);

for (let x = 3; x <= 7; x++){
    temp = a + b;
    console.log(temp);
    a = b;
    b = temp;
}

// let n = 50
// let a = 1
// let b = 1

// console.log(a);
// console.log(b);



// for(let x = 2; b <= n; x++){
//     let temp = a + b;
//     if(temp>n){
//         break;
//     }
//     console.log(temp);
//     a = b;
//     b = temp;
// }