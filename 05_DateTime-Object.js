// Exploring Date Object in JavaScript: Creation, Formatting, and Manipulation

// Create a new Date object representing the current date and time
let mydate = new Date();

// Various methods to display date and time in different formats
console.log(mydate.toLocaleDateString()); // Localized date format (e.g., MM/DD/YYYY or DD/MM/YYYY)
console.log(mydate.toLocaleTimeString()); // Localized time format (e.g., HH:MM:SS AM/PM)
console.log(mydate.toLocaleString()); // Most comprehensive localized date and time representation
console.log(mydate.toDateString()); // Readable date string (e.g., "Wed Jun 03 2020")
console.log(mydate.toTimeString()); // Time portion of the date
console.log(mydate.toISOString()); // ISO 8601 formatted date string
console.log(mydate.toUTCString()); // UTC (Coordinated Universal Time) date string
console.log(mydate.toString()); // Full string representation of the date
console.log(mydate.toJSON()); // JSON-formatted date string

// Type checking (common interview questions)
console.log(typeof mydate); // Returns "object"
console.log(typeof Date); // Returns "function"

// Creating specific dates
// Note: Months are zero-indexed (0 = January, 11 = December)
console.log(new Date(2024, 2, 23)); // Creates a date for March 23, 2024 (at midnight)
console.log(new Date(2024, 2, 23, 10, 40)); // Creates a date for March 23, 2024, at 10:40 AM

// Timestamp-related methods
console.log(Date.now()); // Current timestamp in milliseconds since January 1, 1970
console.log(Math.floor(Date.now() / 1000)); // Convert timestamp to seconds

// Getting specific components of the current date
let newDate = new Date();
console.log(newDate.getDate()); // Day of the month (1-31)
console.log(newDate.getDay()); // Day of the week (0-6, where 0 is Sunday)
console.log(newDate.getFullYear()); // Four-digit year
console.log(newDate.getHours()); // Hours (0-23)
console.log(newDate.getMinutes()); // Minutes (0-59)
console.log(newDate.getSeconds()); // Seconds (0-59)
