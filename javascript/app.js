$(document).ready(function () {
    var index = 0;
    var countdownTimer = {
        time: 30,
        reset: function () {
            this.time = 30;
            $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
        },
        start: function () {
            counter = setInterval(countdownTimer.count, 1000);
        },
        stop: function () {
            clearInterval(counter);
        },
        count: function () {
            countdownTimer.time--;
            console.log(countdownTimer.time);

            if (countdownTimer.time >= 0) {
                $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
            }
            else {
                index++;
                answerWrong();
                countdownTimer.reset();
                if (index < questionArray.length) {
                    loadQuestion(index);
                } else {
                    $(".answerchoice").hide();
                    showScore();
                }
            }
        }
    };

    var correct = 0;
    var wrong = 0;
    var q1 = {
        question: 'Who has the highest batting average in a season?',
        possibleAnswers: ['A. Derek Jeter',
            'B. Lou Gehrig',
            'C. Babe Ruth',
            'D. Don Mattingly'],
        flags: [false, false, true, false],
        answer: 'C. Babe Ruth'
    };

    var q2 = {
        question: 'Which Yankee has the Lowest Career ERA?',
        possibleAnswers: ['A. Whitey Ford',
            'B. Mariano Rivera',
            'C. Mel Stottlemyre',
            'D. Dave Righetti'],
        flags: [false, true, false, false],
        answer: 'B. Mariano Rivera'
    };

    var q3 = {
        question: 'Which Yankee has the Most Career Home Runs?',
        possibleAnswers: ['A. Jason Giambi',
            'B. Babe Ruth',
            'C. Alex Rodriquez',
            'D. Mickey Mantle'],
        flags: [false, true, false, false],
        answer: 'B. Babe Ruth'
    };

    var q4 = {
        question: 'Who has the Most All Time Hits for the Yankees',
        possibleAnswers: ['A. Derek Jeter',
            'B. Lou Gehrig',
            'C. Willie Randolph',
            'D. Joe Dimaggio'],
        flags: [true, false, false, false],
        answer: 'A. Derek Jeter'
    };

    var q5 = {
        question: 'Which Yankee Gave up the Most All Time Hits',
        possibleAnswers: ['A. Whitey Ford',
            'B. Andy Pettitte',
            'C. Mike Mussina',
            'D. CC Sabathia'],
        flags: [false, true, false, false],
        answer: 'B. Andy Pettitte'
    };

    var q6 = {
        question: 'Which Pitcher is the All Time Leader in Yankee history ',
        possibleAnswers: ['A. Dave Righetti',
            'B. David Cone',
            'C. Roger Clemans',
            'D. Andy Pettitte'],
        flags: [false, false, false, true],
        answer: 'D. Andy Pettitte'
    };

    var q7 = {
        question: 'What Yankee has the Most RBIs in a Season',
        possibleAnswers: ['A. Joe DiMaggio',
            'B. Babe Ruth',
            'C. Lou Gehrig',
            'D. Alex Rodriguez'],
        flags: [false, false, true, false],
        answer: 'C. Lou Gehrig'
    };

    var q8 = {
        question: 'Which Yankee has the Most Stolen Bases in a Career',
        possibleAnswers: ['A. Phil Rizzuto',
            'B. Willie Randolph',
            'C. Rickey Henderson',
            'D. Derek Jeter'],
        flags: [false, false, false, true],
        answer: 'D. Derek Jeter'
    };


    var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8];

    function loadQuestion(questionSelection) {
        console.log(questionSelection);
        countdownTimer.reset();
        $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
        $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
        $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
        $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
        $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

    }

    function setup() {
        index = 0;
        $('.question').append('<button id="startButton">Start</button>');
        $('#startButton').on('click', function () {
            $(this).hide();
            countdownTimer.start();
            loadQuestion(index);
        });
    }

    function getAnswer() {


        $('.answerchoice').on('click', function () {
            console.log('alert', index);
            index++;
            console.log('click', index);
            $(".question").text('');
            $("#buttonA").text('');
            $("#buttonB").text('');
            $("#buttonC").text('');
            $("#buttonD").text('');
            loadQuestion();
        })
    }

    function answerCorrect() {
        correct++;
        alert("Correct!");
        console.log("correct");
    }

    function answerWrong() {
        wrong++;
        alert("Incorrect!");
        console.log("wrong");
    }

    function showScore() {
        $('.question').empty();
        $('.question').append("<h2><p>" + correct + " correct</p></h2>");
        $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
        countdownTimer.stop();
        $('.timer').empty();

    }

    setup();
    $('.answerchoice').on('click', function () {
        console.log($(this));
        if (this.id == 'buttonA') {
            var answerChosen = 'A';
        } else if (this.id == 'buttonB') {
            answerChosen = 'B';
        } else if (this.id == 'buttonC') {
            answerChosen = 'C';
        } else if (this.id == 'buttonD') {
            answerChosen = 'D';
        }
        if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
            answerCorrect();
        } else if (answerChosen == 'A') {
            answerWrong();
        }
        if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
            answerCorrect();
        } else if (answerChosen == 'B') {
            answerWrong();
        }
        if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
            answerCorrect();
        } else if (answerChosen == 'C') {
            answerWrong();
        }
        if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
            answerCorrect();
        } else if (answerChosen == 'D') {
            answerWrong();
        }

        $(".question").text('');
        $("#buttonA").text('');
        $("#buttonB").text('');
        $("#buttonC").text('');
        $("#buttonD").text('');
        index++;
        if (index < questionArray.length) {
            loadQuestion(index);
        } else {
            $(".answerchoice").hide();
            showScore();
        }
    });


});
