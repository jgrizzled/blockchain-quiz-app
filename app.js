'use strict'

const QUIZ_STATE = {
  questionIndex: 0,
  score: 0
}

const main = $('main')

//initialize with start button handler
$(() => {
  main.find('#start-quiz-button').on('click', startQuiz)
})

//reset quiz state and show first question
function startQuiz(e) {
  e.preventDefault()
  QUIZ_STATE.questionIndex = 0
  QUIZ_STATE.score = 0
  renderQuestion()
}

//show current quiz question
function renderQuestion() {
  //build html
  let html = `
    <header id="info-bar">
      <h3>Question ${QUIZ_STATE.questionIndex+1}/${QUESTIONS.length}</h3>
      <h3>Score ${QUIZ_STATE.score}/${QUESTIONS.length}</h3>
    </header>
    <p class="question-text">${QUESTIONS[QUIZ_STATE.questionIndex].questionText}</p>
    <form>
  `
  //build answer buttons
  for(let i = 0; i < QUESTIONS[QUIZ_STATE.questionIndex].answers.length; i++) {
    html += `
      <button class="quiz-button ${QUESTIONS[QUIZ_STATE.questionIndex].answers[i].correct ? 'correct' : 'incorrect'}">
        <span class="button-bullet">•</span>
        <p class="answer-text">${QUESTIONS[QUIZ_STATE.questionIndex].answers[i].text}</p>
      </button>
    `
  }
  html += '</form>'
  main.html(html)
  //add handlers to answer buttons
  main.find('button.correct').on('click', {correct: true}, renderAnswerModal)
  main.find('button.incorrect').on('click', {correct: false}, renderAnswerModal)
}

//show quiz answer popup
function renderAnswerModal(e) {
  e.preventDefault()
  if(e.data.correct)
    QUIZ_STATE.score++
  //prevent answer buttons from being clicked 
  main.find('button').off()
  main.find('button').on('click', (e) => {e.preventDefault()})
  //build html
  let html = `
    <dialog open>
      <h3>${e.data.correct?'Correct!':'Incorrect.'}</h3>
      <p>${QUESTIONS[QUIZ_STATE.questionIndex].explanation}</p>
    `
  //button should say "finish" if quiz is over
  if(QUIZ_STATE.questionIndex+1 == QUESTIONS.length) {
    html += `
        <form><input type="button" id="finish-button" value="Finish"></form>
      </dialog>
    `
    main.append(html)
    main.find('#finish-button').on('click', renderSummary)
  } else {
    html += `
        <form><input type="button" id="next-button" value="Next Question"></form>
      </dialog>
    `
    main.append(html)
    main.find('#next-button').on('click', (e) => {
      e.preventDefault()
      //go to next question
      QUIZ_STATE.questionIndex++
      renderQuestion()
    })
  }
}

//show quiz final summary
function renderSummary(e) {
  e.preventDefault()
  main.html(`
  <div id="summary">
    <h2>Quiz complete!</h2>
    <h3>Your score: ${QUIZ_STATE.score}/${QUESTIONS.length}</h3>
  </div>
  <form>
    <input type="button" id="restart-button" value="Restart Quiz">
  </form>
  `)
  main.find('#restart-button').on('click', startQuiz)
}