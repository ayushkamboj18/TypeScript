// Define an enum to represent days of the week
enum DaysOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday
}

// Usage of the enum
let today: DaysOfWeek = DaysOfWeek.Wednesday;

console.log(today); // Outputs: 3 (since enum values start from 0)

// To get the name of the day from the enum value
console.log(DaysOfWeek[today]); // Outputs: "Wednesday"
