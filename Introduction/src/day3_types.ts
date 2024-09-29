// Let’s say you want to print the id of a user, which can be a number or a string.

type argument = number | string | boolean

function print(id : argument){
    console.log(id);
}
print(312432);
print("3424");
print(true);

// What if you want to create a type that has every property of multiple types/ interfaces

type Employee = {
    name: string;
    startDate: Date;
}
  
type Manager = {
    name: string;
    department: string;
}
  
type TeamLead = Employee & Manager;
  
const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
}
  