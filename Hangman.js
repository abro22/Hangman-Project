

//array of answers 
// array of js objects 
// random number for clues - answers 

// array to keep track of letters used 

// function uses parameter - use it on the letter buttons 
//buttons call functions for the letter 


/// gives us random word 
const wordChoice = Math.floor(Math.random() * 5)

console.log(wordChoice)

//-----
const words = ["dog", "bird", "fish", "tiger", "monkey", "horse"]
const hiddenWords = ["---", "----", "----", "-----", "------", "-----"]
const hints = ["Woof", "Chirp", "Girgle", "Roar", "Ooh Ooh ahh ahh", "neighhh"]

const hangmanImg = document.querySelector('.HangBoxContent img')

//------
const word = words[wordChoice]
let hiddenWord = hiddenWords[wordChoice]
const hint = hints[wordChoice]


let livesLeft = 6


//---
const wordElement = document.getElementById("word")
const hintElement = document.getElementById("hint")
const livesElement = document.getElementById("lives")


//------
// wordElement.textContent = word
wordElement.textContent = hiddenWord
hintElement.textContent = hint
livesElement.textContent = livesLeft

//-----on click 

// function hintButton() {
//     if (hintElement.checked === true) {
//         hintElement.textContent = hint
//     }
// }

function clickedLetter(letter) {


    if (word.includes(letter) === true) {
        let indexOfLetter = word.indexOf(letter)
        let stringArray = hiddenWord.split('')
        stringArray[indexOfLetter] = letter
        let newHidden = stringArray.join("")
        hiddenWord = newHidden
        wordElement.textContent = newHidden
    } else {
        livesLeft--
        livesElement.textContent = livesLeft
        hangmanImg.src = `images2/hangman-${livesLeft}.svg`
    } if
        (livesLeft <= 0)
        livesElement.textContent = "You lose";



}






