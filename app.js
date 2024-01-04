/* Created and coded by Abhilash Narayan */
/* Quiz source: w3schools.com */
var quiz = {
    "JS": [

       { "id": 1,
        "question": "What is the capital city of France?",
        "options": [
            { "a": "Berlin" ,
            
                "b": "Paris",
                "c": "Madrid",
                "d": "Rome"
            }
        ],
        "answer": "Paris",
        "score": 0,
        "status": ""
    },
    {
        "id": 2,
        "question": "Which planet is known as the Red Planet?",
        "options": [
            { "a": "Mars" ,
            "b": "Jupiter" ,
             "c": "Venus" ,
             "d": "Mercury" }
        ],
        "answer": "Mars",
        "score": 0,
        "status": ""
    },
    {
        "id": 3,
        "question": "In which year did the Titanic sink?",
        "options": [
            { "a": "1912" ,
             "b": "1921" ,
             "c": "1905" ,
             "d": "1933" }
        ],
        "answer": "1912",
        "score": 0,
        "status": ""
    },
    {
        "id": 4,
        "question": "What is the largest mammal in the world?",
        "options": [
            { "a": "Elephant" ,
             "b": "Blue Whale" ,
             "c": "Giraffe" ,
             "d": "Hippopotamus" }
        ],
        "answer": "Blue Whale",
        "score": 0,
        "status": ""
    },
    {
        "id": 5,
        "question": "Which country is known as the Land of the Rising Sun?",
        "options": [
            { "a": "China" ,
             "b": "Japan" ,
             "c": "South Korea" ,
             "d": "India" }
        ],
        "answer": "Japan",
        "score": 0,
        "status": ""
    },
    {
        "id": 6,
        "question": "What is the capital city of Australia?",
        "options": [
            { "a": "Canberra" ,
             "b": "Sydney" ,
             "c": "Melbourne" ,
             "d": "Brisbane" }
        ],
        "answer": "Canberra",
        "score": 0,
        "status": ""
    },
    {
        "id": 7,
        "question": "Which element has the chemical symbol 'O'?",
        "options": [
             {"a": "Oxygen" ,
             "b": "Gold" ,
             "c": "Silver" ,
            "d": "Iron" }
        ],
        "answer": "Oxygen",
        "score": 0,
        "status": ""
    },
    {
        "id": 8,
        "question": "What is the capital city of Brazil?",
        "options": [
            { "a": "Sao Paulo" ,
             "b": "Rio de Janeiro" ,
             "c": "Brasilia" ,
            "d": "Buenos Aires" }
        ],
        "answer": "Brasilia",
        "score": 0,
        "status": ""
    },
    {
        "id": 9,
        "question": "Which famous scientist developed the theory of general relativity?",
        "options": [
            { "a": "Isaac Newton" ,
             "b": "Albert Einstein" ,
             "c": "Galileo Galilei" ,
             "d": "Stephen Hawking" }
        ],
        "answer": "Albert Einstein",
        "score": 0,
        "status": ""
    },
    {
        "id": 10,
        "question": "What is the largest ocean on Earth?",
        "options": [
            { "a": "Indian Ocean" ,
             "b": "Atlantic Ocean" ,
             "c": "Arctic Ocean" ,
            "d": "Pacific Ocean" }
        ],
        "answer": "Pacific Ocean",
        "score": 0,
        "status": ""
    }


    ]
 
    }
    var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentque].id + '.');
    $("#question").html(quiz.JS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentque].options[0]) {
    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentque].answer) {
    if (quiz.JS[this.currentque].score == "") {
    quiz.JS[this.currentque].score = 1;
    quiz.JS[this.currentque].status = "correct";
    }
    } else {
    quiz.JS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });
    

