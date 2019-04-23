let questionNumber = 0;

let userScore = 0;

function handleStartButton() {
    $('#start-button').on('click', function(event) {
        $('.start').hide();
        renderQuestion();
    });
}

// function loopThroughArray() {
//     for(let i = 0; i < STORE.length; i++) {
//         questionNumber ++;
//         renderQuestion(STORE[questionNumber]);
//     }
// }

function renderQuestion(questionObject) {
    let quizQuestion = `<div class="question-content">
    <img src="${questionObject.image}">
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
    </fieldset>
    </form>
    </div>`;

    $('.question-form').html(quizQuestion);
}

function checkAnswer() {
    // if else statement checking the answer text vs. the correctAnswer property
}

function generateCorrectFeedback() {

}

function generateIncorrectFeedback() {

}

function displayFeedback() {
    
}

function handleNextButton() {
    $(feedback).hide();
    questionNumber = questionNumber++;
    renderQuestion(STORE[questionNumber]);
}