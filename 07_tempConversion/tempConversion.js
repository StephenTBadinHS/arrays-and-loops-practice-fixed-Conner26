// Function to convert Fahrenheit to Celsius
function convertToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9);
    return Math.round(celsius * 10) / 10; // Rounds to 1 decimal place
}

// Function to convert Celsius to Fahrenheit
function convertToFahrenheit(celsius) {
    let fahrenheit = (celsius * (9 / 5)) + 32;
    return Math.round(fahrenheit * 10) / 10;
     // Rounds to 1 decimal place
}
// Do not edit below this line
// Example usage
console.log(convertToCelsius(32)); 
// Output: 0.0
console.log(convertToCelsius(100)); 
// Output: 37.8
console.log(convertToFahrenheit(0));
 // Output: 32.0
console.log(convertToFahrenheit(37.8)); 
// Output: 100.0

// Exporting the functions for use in other files (module.exports if needed)
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};