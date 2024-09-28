// Assignment #1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.

interface User{
    name:"ayush",
    age:22
}

function isLegal(person: User){
    if(person.age > 18){
        return true;
    }
    return false;
}