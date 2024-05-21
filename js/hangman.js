const wordEl = document.getElementById('word')
wrongLettersEl = document.getElementById('wrong-letters')
const playAgainBtn = document.getElementById('play-button')
const popup = document.getElementById('popup-container')
const notification = document.getElementById('notification-container')
const finalMessage = document.getElementById('final-message')
const figureParts = document.querySelectorAll('.figure-part')

const word = ['application', 'programming', 'interface', 'wizard']

let selectedIndex = Math.floor(word.length * Math.random())
let selectedWord = word[selectedIndex]

const correctLetters = []
const wrongLetters = []

//show hidden words
function displayWord() {
    wordEl.innerHTML = `
    ${selectedWord
        .split('')
        .map(letter => `
         <span class="letter">
         ${correctLetters.includes(letter) ? letter : ''}
         </span>
        `).join('')
    }
    `
    const innerWord = wordEl.replace(/\n/g, ''))

    if(innerWord == selectedWord) {
        finalMessage.innerText = 'Congratulations! You won!'
        popup.style.display = 'flex'
    }
}

//udpate the wrong letters
function updateWrongLettersEl() {
    wrongLettersEl.innerHTML() = `
        ${wrongLetters.length > 0 ? '<p>Wrong</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>)}
        `
}

//display parts
figureParts.forEach((part, index) => {
    const error = wrongLe
})

//Show Notification
function showNotification() {
    notification.classList.add('show')

    setTimeout(() => {
        notification.classList.remove('show')

    })
}

//keydown letter press
window.addEventListener('keydown', e => {

    if(e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key

        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)) {
                correctLetters.push(letter)

                updateWrongLettersEl()
            } else {
                showNotification()
            }
        }
    }
})
displayWord()