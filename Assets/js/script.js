const control = document.getElementById('controls')
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById ('answer-buttons')

let shuffledQuestions  
let currentQuestionIndex = 0

startButton.addEventListener('click', () => {
  console.log('click')
})
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    // setNextQuestion()
})
function startGame() {
   shuffledQuestions = question.sort(() => Math.random() - .5)
   currentQuestionIndex = 0
   questionContainerElement.style.display = 'none'
//    setNextQuestion()
}

// function setNextQuestion(){
//     resetState()
//     ShowQuestions(shuffledQuestions[currentQuestionIndex])
    
// }

// function ShowQuestion (question) {
//    questionElement.innerText = question.question
//     question.Element.innerText = question.question
//     questionElement.answers.forEach(answer => {
//         const button = document.createElement('button')
//         button.innerText = answer.text 
//         button.classList.add('btn')
//         if(answer.correct){
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener('click', selectAnswer)
//         answerButtonsElement.appendChild(button)
//     })
// }

// function resetState(){
//     clearStatusClass(document.body)
//     nextButton.style.display = 'none'
//     while (answerButtonsElement.firstChild) {
//         answerButtonsElement.removeChild
//         (answerButtonsElement.firstChild)
//     }

// }



// function selectAnswer(e) {
//    const selectedButton = e.target
//    const correct = selectedButton.dataset.correct
//    setStatusClass(document.body,correct)
//    Array.from(answerButtonsElement.children).forEach(button => {
//        setStatusClass(button, button.dataset.correct)
//    })
//    if (shuffledQuestions.length > currentQuestionIndex + 1) {

//      nextButton.classList.remove('hide')
//    } else {
//     //    startButton.innerText = 'Restart'
//     //    startButton.classList = 'hide'

//    }
   
// }
// function setStatusClass(element, correct) {
//     clearStatusClass(element)
//     if (correct) {
//         element.classList.add('correct')
//     } else {
//         element.classList.add('wrong')
//     }
// }
// function clearStatusClass(element) {
//     element.classList.remove('correct')
//     element.classList.remove('wrong')
// }

const question = [
    { 
      question: 'What is 2 + 2',
      answer:[
        { text: '4', correct: true},
        { text: '22',correct: false}

     ]
    },

   {
    question:'Who is the best YouTube?' ,
    answers: [
    { text:'Web Dev Simplified', correct: true },
    { text:'Traversy Media', correct: true },
    { text:'Fun Fun Function', correct: true },
    { text:'Dev Ed', correct: true },
   ]
   },

     {
    question:'Is web development fun ?' ,
    answers: [
    { text:'kinda', correct: false },
    { text:'Yes!!!', correct: false },
    { text:'Um no', correct: false },
    { text:'IDK', correct: false },
         ] },
       

    {
      question: ' What is 4 * 2?', 
      answers: [

        {text: '6', correct: false },
        {text: '8', correct: true  },
                                
        ]
    }
]