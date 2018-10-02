// Write a function "gcd" that returns the Greatest Common Divisor of two numbers
// If no GCD exists, return 1
// Greatest Common Divisor --> https://tinyurl.com/gr84qca
//
// Examples:
// gcd(5, 1) --> 1
// gcd(3, 15) --> 3
// gcd(50, 20) --> 10

function gcd(firstNumber, secondNumber) {
    var gcdArray = []

    for (var i = 0; i <= secondNumber; i++){
        if( (firstNumber % i == 0) && (secondNumber % i == 0)){
            gcdArray.push(i)
        }
    }

    var orderedArray = gcdArray.reverse()

    return orderedArray[0]
}

console.log(gcd(5, 1))