$(function () {

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



    function makeQuestions() {

        for (i = 0; i < myQuiz.questions.length; i++) {
            var value = 0
            var question = myQuiz.questions[i];
            var $questionBox = $("<div>", { class: "questionBox" }).append("<h3>" + question);
            var $answerBox = $("<div>", { class: "answerBox" })

            $("#quiz").append($questionBox).append($answerBox)

            myQuiz.choices[i].forEach(function (option) {
                $($answerBox).append("<label><input id='radioButton' type='radio' name=" + i + " value=" + value + ">" + option)
                value++;
            })
        }
    }
    $("#start").on('click', function () {
        $("#content").css('display', 'block');
        $(this).remove();
    })
    $("#submit").on('click', function createScore() {
        var correct = 0

        $(this).remove()  
        $answerBox = $(".answerBox");
        $answerBox.each(function () {
            var answer = $(this).find("input:checked");
            var key = answer.attr("name")
            var val = answer.attr("value")
            if (myQuiz.correctAnswers[key] !== val) {
                var correctAnswer = myQuiz.correctAnswers[key]
                $("#incorrect").append(myQuiz.questions[key] + "<span class='wrongAnswer'> " + myQuiz.choices[key][val] + "</span> <br> <div class='correctAnswer'>Correct Answer: " + myQuiz.choices[key][correctAnswer] + "</div><br>")
            }
            else if (myQuiz.correctAnswers[key] === val) {
                correct++;
            }
        })
        $("#quiz").remove();
        var totalCorrect = correct * 20;
        $("#tally").css('display','block')
        $("#score").append("<h2> Final Score: " + totalCorrect + "%")
        

    })

    makeQuestions()
})