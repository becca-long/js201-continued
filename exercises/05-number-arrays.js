// Write a function "max" that takes an array of numbers returns the highest
// number in the array.

function max(array) {
    array.sort(function(a, b) {
        return a - b
    })

    var orderedArray = array.reverse()

    return orderedArray[0]
}

console.log(max( [5, 8, 2, 1] ))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which takes an array of numbers and returns a
// new array containing only the positive numbers in the given array.

function positives(array) {
    var onlyPositives = []
    for (var i = 0; i < array.length; i++){
        if (array[i] > 0){
            onlyPositives.push(array[i])
        }
    }

    return onlyPositives
}

console.log(positives([-5, 1, 4, -10, 11]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js

function evens(array){
    var onlyEvens = []
    for (var i = 0; i < array.length; i++){
        if (array[i]%2 == 0){
            onlyEvens.push(array[i])
        }
    }
    return onlyEvens
}

console.log(evens([2, 3, 5, 6, 2, 8, 9, 10, 14, 13]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js

function odds(array){
    var onlyOdds = []
    for (var i = 0; i < array.length; i++){
        if (array[i]%2 !== 0){
            onlyOdds.push(array[i])
        }
    }

    return onlyOdds
}

console.log(odds([2, 3, 5, 6, 2, 8, 9, 10, 14, 13]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]

function integers(array) {
    var onlyIntegers = []
    for (var i = 0; i < array.length; i++){
        if (Number.isInteger(array[i])){
            onlyIntegers.push(array[i])
        }
    }
    return onlyIntegers
}

console.log(integers([2, 3.4, 6, 8.76, 3, 9]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]

function squareDance(array) {
    var squareNumbers = []
    for (var i = 0; i < array.length; i++){
        squareNumbers.push((array[i] * array[i]))
    }
    return squareNumbers
}

console.log(squareDance([1, 2, 3]))