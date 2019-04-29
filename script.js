'use-strict';

let questionNumber = 0, userScore = 0;

function handleStartButton() {
    $('button.start').on('click', function(event) {
        $('.start').hide();
        renderQuestion(STORE[questionNumber]);
        renderQuizInfo();
    });
    console.log('handle start working')
    console.log(questionNumber);
}

function renderQuestion(questionObject) {
    if(questionNumber < STORE.length) {
        let quizQuestion = `<div class="question-content">
        <img src="${questionObject.image}" class="blurred question-image">
        <h2>${questionObject.question}</h2>
        <form>
        <fieldset>
        <label>
        <input name="answer" type="radio" value="${questionObject.answer1}"><span class="question-text">
        ${questionObject.answer1}</span></input>
        </label>

        <label>
        <input name="answer" type="radio" value="${questionObject.answer2}"><span class="question-text">
        ${questionObject.answer2}</span></input>
        </label>

        <label>
        <input name="answer" type="radio" value="${questionObject.answer3}"><span class="question-text">
        ${questionObject.answer3}</span></input>
        </label>

        <label>
        <input name="answer" type="radio" value="${questionObject.answer4}"><span class="question-text">
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
    let quizInfo = `<p>Question: ${questionNumber + 1}/10</p>
    <p>Score: ${userScore}</p>`;
    $('.quiz-info').html(quizInfo);
}

function handleSubmit() {
    $('.question').on('click', '.submit-button', function(event) {
        event.preventDefault;
        checkAnswer(event);
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
    console.log(userAnswer);
    console.log(STORE[questionNumber].correctAnswer);
}

function generateCorrectFeedback() {
    let feedback = `<div class="correct-feedback">
    <img src="${STORE[questionNumber].image}" class="question-image">    
    <p>That's Correct!</p>
    <button class="next-button">Next</button>
    </div>`;
    displayFeedback(feedback);
    userScore++;
    renderQuizInfo();
    console.log('generateCorrectFeedback ran');
}

function generateIncorrectFeedback() {
    let feedback = `<div class="incorrect-feedback">
    <img src="${STORE[questionNumber].image}" class="question-image">    
    <p>Nope! The correct answer is "${STORE[questionNumber].correctAnswer}".</p>
    <button class="next-button">Next</button>
    </div>`;
    displayFeedback(feedback);
    console.log('generateIncorrectFeedback ran');
}

function displayFeedback(feedbackDiv) {
    $('.question-content').remove();
    $('.feedback').html(feedbackDiv);
    renderQuizInfo();
    $('.feedback').show();
    console.log('displayFeedback ran');
}

function handleNextButton() {
 $('.feedback').on('click', '.next-button', function(event) {
    if (questionNumber < 10) {
        $('.feedback').hide();
        questionNumber++;
        renderQuestion(STORE[questionNumber]);
        renderQuizInfo();
        console.log('handleNextButton ran');
    } else {
        displayResults();
    }
 });     
}

function displayResults() {
    
    if (userScore > 7) {
        let userResults = `<div class="quiz-results">
            <img class="question-image" src="images/top-tier.jpg">    
            <p>Results for users who score an 8 or higher</p>
            </div>`;
        $('.results').html(userResults);
    } else if (userScore > 4) {
        let userResults = `<div class="quiz-results">
            <img class="question-image" src="images/middle-tier.jpg">    
            <p>Results for users who score a 5 or higher</p>
            </div>`;
        $('.results').html(userResults);
    } else {
        let userResults = `<div class="quiz-results">
            <img class="question-image" src="images/bottom-tier.jpg">    
            <p>Results for users who score a 4 or lower</p>
            </div>`;
        $('.results').html(userResults);
    }
}

function runQuizApp() {
    handleStartButton();
    handleSubmit();
    handleNextButton();
}

$(runQuizApp);