'use-strict';

let questionNumber = 0;
let userScore = 0;

function handleStartButton() {
    $('button.start').on('click', function(event) {
        $('.start').hide();
        renderQuestion(STORE[questionNumber]);
        renderQuizInfo();
    });
    console.log('handle start working')
}

function renderQuestion(questionObject) {
    if(questionNumber < STORE.length) {
    let quizQuestion = `<div class="question-content">
    <img src="${questionObject.image}" class="blurred">
    <h2>${questionObject.question}</h2>
    <form>
    <fieldset>
    <label>
    <input name="answer" type="radio"><span class="question-text">
    ${questionObject.answer1}</span></input>
    </label>

    <label>
    <input name="answer" type="radio"><span class="question-text">
    ${questionObject.answer2}</span></input>
    </label>

    <label>
    <input name="answer" type="radio"><span class="question-text">
    ${questionObject.answer3}</span></input>
    </label>

    <label>
    <input name="answer" type="radio"><span class="question-text">
    ${questionObject.answer4}</span></input>
    </label>
    <button type="submit" class="submit-button">Submit</button>
    </fieldset>
    </form>
    </div>`;

    $('.question').html(quizQuestion);
    } else {
        displayResults();
    }
}

function renderQuizInfo() {
    let quizInfo = `<p>Question: ${questionNumber += 1}/10</p>
    <p>Score: ${userScore}</p>`;
    $('.quiz-info').html(quizInfo);
}

function handleSubmit() {
    $('.question').on('click', '.submit-button', function(event) {
        event.preventDefault;
        checkAnswer(event);
        displayFeedback(event);
    });
}

function checkAnswer(event) {
    let checkedAnswer = $('input:checked');
    let userAnswer = checkedAnswer.val();
    // if else statement checking the answer text vs. the correctAnswer property
    if(userAnswer === STORE[questionNumber].correctAnswer) {
        generateCorrectFeedback();
    } else {
        generateIncorrectFeedback();
    }
    console.log('checkAnswer ran');
}

function generateCorrectFeedback() {
    let feedback = `<div class="correct-feedback">
    <img src="${STORE[questionNumber].image}">    
    <p>Correct Feedback Message Goes Here</p>
    <button class="next-button">Next</button>
    </div>`;
    displayFeedback(feedback);
}

function generateIncorrectFeedback() {
    let feedback = `<div class="incorrect-feedback">
    <img src="${STORE[questionNumber].image}">    
    <p>Incorrect Feedback Message Goes Here</p>
    <button class="next-button">Next</button>
    </div>`;
    displayFeedback(feedback);
}

function displayFeedback(feedbackDiv) {
    $('.question-content').remove();
    $('.feedback').html(feedbackDiv);
    // $('.feedback').find('img').toggleClass('blurred');
}

function handleNextButton() {
 $('.feedback').on('click', '.next-button', function(event) {
    $('.feedback').hide();
    questionNumber = questionNumber++;
    renderQuestion(STORE[questionNumber]);
 });     
}

// function displayResults() {
//     if(userScore > )
// }

function runQuizApp() {
    handleStartButton();
    handleSubmit();
    handleNextButton();
}

$(runQuizApp);