// why TS -> because of giving type 

const x: number=1;
console.log(x);

let y: string="hello";
console.log(y);

// understanding data types of an argument 

function greet(name:string ){
    console.log("Hello" + name);
}
greet("Arya");

// understanding type return from function

function sum(a:number, b:number): number{
    return a+b;
}
let ans = sum(10,12);
console.log(ans);


// give function as an input in a function

function runAfterASec(fn: () => void){
    console.log("I am from runAfterASec");
    setTimeout(fn,1);
    console.log("waiting");
}

runAfterASec(function(){
    console.log("Hii there");
})

