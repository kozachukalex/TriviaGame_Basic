$(function () {

    // Note on possible change - Use less CSS, use more jquery to populate elements when required instead of display none/block
    var myQuiz = {
        questions: [
            "1) What town does the Simpson family live in?",
            "2) What year did The Simpsons air?",
            "3) Where does Homer Simpson work?",
            "4) Where did the Simpson's find their dog?",
            "5) What is the name of the local police chief?",
        ],
        choices: [
            ["Shelbyville", "Springfield", "Townsend", "Detroit"],
            ["1987", "1988", "1989", "1990"],
            ["Nuclear Plant", "Toy Factory", "Planet Express", "Post Office"],
            ["Animal Shelter", "Puppy Mill", "Adoption Fair", "Dog Tracks"],
            ["Wiggum", "Lou", "Garcia", "fitz"],
        ],
        correctAnswers: { // questionNumber : correct answer index
            "0": "1",
            "1": "2",
            "2": "0",
            "3": "3",
            "4": "0",
        }
    }
    function prepare() {
        timeRunning = false;
        t = 60;
        currentTime = timeConverter(t);
        $("#timer").text(currentTime);
    }

    function makeQuestions() {
        $("#quiz").css('background', 'rgb(0, 0, 0, 0.7)');

        for (i = 0; i < myQuiz.questions.length; i++) {
            var value = 0
            var question = myQuiz.questions[i];
            var $questionBox = $("<div>", { class: "questionBox" }).append("<h3>" + question);
            var $answerBox = $("<div>", { class: "answerBox", value: i})

            $("#quiz").append($questionBox).append($answerBox)

            myQuiz.choices[i].forEach(function (option) {
                $($answerBox).append("<label id='label'><input id='radioButton' type='radio' name=" + i + " value=" + value + ">" + option)
                value++;
            })
        }
    }
    
    function timer() {
        intervalId = setInterval(count, 1000)
        currentTime = timeConverter(t)
        $("#timer").text(currentTime)
        if (timeRunning) {
            count()

        }
    }

    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "0";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }

    function count() {
        t--;
        currentTime = timeConverter(t);
        $("#timer").text(currentTime)
        if (t === 0) {
            clearInterval(intervalId)
            alert("Out of time! Here's how you did")
            createScore()
        }
    }

    function createScore() {
        clearInterval(intervalId)
        var correct = 0

        $("#submit").remove()
        $answerBox = $(".answerBox");
        $answerBox.each(function () {
            var questionNumber = $(this).attr('value');
            var answer = $(this).find("input:checked");
            var key = answer.attr("name")
            var val = answer.attr("value")
            if (answer.length === 0){   //ugly way of getting this done. Could remove name from labels, keep to element, and just pull var key from element #answerBox instead of label
                var correctAnswer = myQuiz.correctAnswers[questionNumber]
                $("#incorrect").append(myQuiz.questions[questionNumber] + "<span class='wrongAnswer'> You did answer. </span> <br> <div class='correctAnswer'>Correct Answer: " + myQuiz.choices[questionNumber][correctAnswer] + "</div><br>")   
                     
            }

            else if (myQuiz.correctAnswers[key] !== val) {
                var correctAnswer = myQuiz.correctAnswers[key]
                $("#incorrect").append(myQuiz.questions[key] + "<span class='wrongAnswer'> " + myQuiz.choices[key][val] + "</span> <br> <div class='correctAnswer'>Correct Answer: " + myQuiz.choices[key][correctAnswer] + "</div><br>")
            }
            else {
                correct++;
            }

        })
        $("#quiz").remove();
        $("#tally").css('display', 'block')
        var totalCorrect = correct * 20;
        $("#score").append("<h2> Final Score: " + totalCorrect + "%")


    }

    $("#start").on('click', function () {
        $("#submit").css('display', 'block')
        $("#content").css('display', 'block');
        $(this).remove();
        makeQuestions()
        setTimeout(timer(), 1000);

        timeRunning = true;
    })

    $("#submit").on('click', function () {
        createScore();
    })

    //calling prepare in order to create initial timer
    prepare();


})