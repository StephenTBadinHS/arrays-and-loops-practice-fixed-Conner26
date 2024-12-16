function leapYears(year) {
    // A year is a leap year if:
    // 1. It is divisible by 4
    // 2. It is NOT divisible by 100, unless it is also divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true; // It is a leap year
    } else {
        return false; // It is NOT a leap year
    }
}
// Do not edit below this line
// Example usage:
console.log(leapYears(2000)); // true (leap year)
console.log(leapYears(1985)); // false (not a leap year)
console.log(leapYears(1900)); // false (not a leap year)
console.log(leapYears(1600)); // true (leap year)
