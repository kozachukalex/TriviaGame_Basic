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
        correctAnswers: { // questionNumber : answer index
            "0": "1",
            "1": "2",
            "2": "0",
            "3": "3",
            "4": "0",
        }
    }

    function makeQuestions() {

        for (i = 0; i < myQuiz.questions.length; i++) { //checks number of questions, allows scaling
            var value = 0
            var question = myQuiz.questions[i];
            var $questionBox = $("<div>", { class: "questionBox" }).append("<h3>"+question);
            var $answerBox = $("<div>", { class: "answerBox" }) //creates the div to add options

            $("#quiz").append($questionBox).append($answerBox)

            myQuiz.choices[i].forEach(function (option) {  //Combination of forEach and increasing counter lets me set increasing value. allows me to change number of choices
                $($answerBox).append("<label><input id='radioButton' type='radio' name=" + i + " value=" + value + ">" + option)
                value++;
            })





        }
    }
    makeQuestions()






    $("#submit").on('click', function () {

        $answerBox = $(".answerBox"); // checks for each answerBox which is checked
        $answerBox.each(function () {
            var answer = $(this).find("input:checked");
            key = answer.attr("name")   // pulls out name/value to check against answers array
            val = answer.attr("value")

            if (myQuiz.correctAnswers[key] !== val) {
                var correctAnswer = myQuiz.correctAnswers[key]
                $("#incorrect").append(myQuiz.questions[key] + "<span class='wrongAnswer'> " + myQuiz.choices[key][val] +"</span> <br> <div class='correctAnswer'>Correct Answer: "+ myQuiz.choices[key][correctAnswer]+ "</div")
            }
            else if (myQuiz.correctAnswers[key] === val) {
            }
        })

    })
})