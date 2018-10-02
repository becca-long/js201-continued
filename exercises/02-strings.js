// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"

function reverse(inputString){
    var splitString = inputString.split("")
    var reverseArray = splitString.reverse()
    var joinArray = reverseArray.join("")

    return joinArray
}

console.log(reverse("skoob"))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'

function findLongestWord(inputString){
    var splitString = inputString.split(" ")
    
    var orderedArray = splitString.sort(function(a, b) {
        return a.length < b.length
    })
    
    return orderedArray[0]

}

console.log(findLongestWord('i love chocolate'))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'

function nicer(inputSentence){
    var splitSentence = inputSentence.split(" ")
    var sentenceLength = splitSentence.length

    for (var i = 0; i < sentenceLength - 1; i++) {
        if (splitSentence[i] === 'heck') {
            splitSentence.splice(i, 1)
        }else if (splitSentence[i] === 'darn') {
            splitSentence.splice(i, 1)
        }else if (splitSentence[i] === 'dang'){
            splitSentence.splice(i, 1)
        }else if (splitSentence[i] === 'crappy'){
            splitSentence.splice(i, 1)
        }
    }

    var niceSentence = splitSentence.join(" ")
    return niceSentence
}

console.log(nicer('mom get the heck in here and bring me a darn sandwich crappy'))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

function capitalizeAll(sentence){
    var sentenceLength = sentence.length

    for (var i = 0; i < sentenceLength - 1; i++) {
        sentence.charAt(0).toUpperCase()
    }

    return sentence
}

console.log(capitalizeAll('hello world'))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']

function split(str, delimiter){

}