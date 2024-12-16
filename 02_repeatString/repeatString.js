function repeatString(string, num) {
    let result = "";
     // Initialize an empty string to hold the result

    // Loop `num` times to concatenate the string
    for (let i = 0; i < num; i++) {
        result += string;
    }

    return result; 
    // Return the final repeated string
}

// Example usage
console.log(repeatString('hey', 3));
 // Output: 'heyheyhey'
