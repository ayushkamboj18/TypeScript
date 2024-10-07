function identitiy<T>(arg:T){
    return arg;
}

let Output1 = identitiy("String");
let Output2 = identitiy(1);

console.log(Output1,Output2);