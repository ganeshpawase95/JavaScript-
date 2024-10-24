function checkNumber(num) {
    // if (num <= 1) {
    //     return num === 0 ? "Neither Even, Odd nor Prime" : "Odd";
    // }
    
    // Check if the number is even
    if (num % 2 === 0) {
        return "Even";
    }
    
    // Check if the number is prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return "Odd";
        }
    }
    
    return "Prime";
}

// Example usage:
console.log(checkNumber(2));
console.log(checkNumber(10)); 


