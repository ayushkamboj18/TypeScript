"use strict";
// const x: number=1;
// console.log(x);
// let y: string="hello";
// console.log(y);
// function greet(name:string ){
//     console.log("Hello" + name);
// }
// greet("Arya");
function sum(a, b) {
    return a + b;
}
let ans = sum(10, 12);
console.log(ans);
function runAfterASec(fn) {
    console.log("I am from runAfterASec");
    setTimeout(fn, 1);
    console.log("waiting");
}
runAfterASec(function () {
    console.log("Hii there");
});
