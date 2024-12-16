function removeFromArray(array, ...args) {
    // Filter the array and remove elements that are in `args`
    return array.filter(item => !args.includes(item));
}
// Do not edit below this line
// Example usage
console.log(removeFromArray([1, 2, 3, 4], 3)); 
// Output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4, 5], 2, 3)); 
// Output: [1, 4, 5]


