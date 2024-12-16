function sumAll(start, end) {
    let sum = 0;

    // Ensure the smaller number is the starting point
    let min = Math.min(start, end);
    let max = Math.max(start, end);

    // Loop from the minimum to the maximum and sum the numbers
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    return sum;
}
// Do not edit below this line
// Example usage
console.log(sumAll(1, 4)); 
// Output: 10
console.log(sumAll(4, 1)); 
// Output: 10 (order doesn't matter)
