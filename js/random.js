// Function to generate random number
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

console.log("Random Number between 1 and 5: ")

// Function call
console.log( randomNumber(1, 5) );