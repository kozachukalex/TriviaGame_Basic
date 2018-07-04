$(function () {

    var allAnswers = {
        questionOne: ["One", "Two", "Three", "Four"],
        questionTwo: ["One", "Two", "Three", "Four"],
        questionThree: ["One", "Two", "Three", "Four"],
        questionFour: ["One", "Two", "Three", "Four"],
        questionFive: ["One", "Two", "Three", "Four"],
        questionSix: ["One", "Two", "Three", "Four"],
        questionSeven: ["One", "Two", "Three", "Four"],
        questionEight: ["One", "Two", "Three", "Four"],
        questionNine: ["One", "Two", "Three", "Four"],
        questionTen: ["One", "Two", "Three", "Four"],
    }






    //Working Code below, testing above portion
    allAnswers.questionOne.forEach(function (option) {
        var radioButton = $("<input type = 'radio' id = 'radioButton'>")
        $("#questionOne").append(radioButton).append(" " + option + "<br>")

    })
    allAnswers.questionTwo.forEach(function (option) {
        var radioButton = $("<input type = 'radio' id = 'radioButton'>")
        $("#questionTwo").append(radioButton).append(" " + option + "<br>")

    })
    allAnswers.questionThree.forEach(function (option) {
        var radioButton = $("<input type = 'radio' id = 'radioButton'>")
        $("#questionThree").append(radioButton).append(" " + option + "<br>")

    })
    allAnswers.questionFour.forEach(function (option) {
        var radioButton = $("<input type = 'radio' id = 'radioButton'>")
        $("#questionFour").append(radioButton).append(" " + option + "<br>")

    })
    allAnswers.questionFive.forEach(function (option) {
        var radioButton = $("<input type = 'radio' id = 'radioButton'>")
        $("#questionFive").append(radioButton).append(" " + option + "<br>")

    })
    allAnswers.questionSix.forEach(function (option) {
        var radioButton = $("<input type = 'radio' id = 'radioButton'>")
        $("#questionSix").append(radioButton).append(" " + option + "<br>")

    })
    allAnswers.questionSeven.forEach(function (option) {
        var radioButton = $("<input type = 'radio' id = 'radioButton'>")
        $("#questionSeven").append(radioButton).append(" " + option + "<br>")

    })
    allAnswers.questionEight.forEach(function (option) {
        var radioButton = $("<input type = 'radio' id = 'radioButton'>")
        $("#questionEight").append(radioButton).append(" " + option + "<br>")

    })
    allAnswers.questionNine.forEach(function (option) {
        var radioButton = $("<input type = 'radio' id = 'radioButton'>")
        $("#questionNine").append(radioButton).append(" " + option + "<br>")

    })
    allAnswers.questionTen.forEach(function (option) {
        var radioButton = $("<input type = 'radio' id = 'radioButton'>")
        $("#questionTen").append(radioButton).append(" " + option + "<br>")

    })

})