document.addEventListener("DOMContentLoaded", function () {
    // Sample JSON data
    var jsonData = {
        "question": [
            {
                "id": "question1",
                "title": "Câu hỏi 1: Đâu là thủ đô của Pháp?",
                "answerA": "A. Paris",
                "answerB": "B. London",
                "answerC": "C. Berlin",
                "answerD": "D. Rome",
                "correct_ans": "A",
                "details": "Paris thì chắc chắn là thủ đô của Pháp rồi"
            },
            {
                "id": "question2",
                "title": "Câu hỏi 2: Trái Đất có bao nhiêu châu lục?",
                "answerA": "A. 5",
                "answerB": "B. 6",
                "answerC": "C. 7",
                "answerD": "D. 8",
                "correct_ans": "C",
                "details": "Trái Đất có 7 châu lục nhé"
            },
            {
                "id": "question3",
                "title": "Câu hỏi 3: Ai là người đẹp trai nhất thế giới",
                "answerA": "A. David Beckham",
                "answerB": "B. Ronaldo",
                "answerC": "C. Còn ai ngoài anh",
                "answerD": "D. Mr Bean",
                "correct_ans": "C",
                "details": "Yeah sir, chắc chắn là vậy rồi"
            }
        ]
    };

    // Update result details
    var totalQuestions = jsonData.question.length;
    document.getElementById("totalQuestions").textContent = totalQuestions;

    // Student's answers
    var studentAnswers = ["A", "B", "C"];

    // Calculate correct answers and user score
    var correctAnswers = 0;
    for (var i = 0; i < totalQuestions; i++) {
        var questionId = jsonData.question[i].id;
        var selectedAnswer = studentAnswers[i];
        var correctAnswer = jsonData.question[i].correct_ans;
        var questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        var questionTitle = document.createElement("h4");
        questionTitle.textContent = jsonData.question[i].title;
        questionDiv.appendChild(questionTitle);
        var answerDiv = document.createElement("div");
        var studentAnswer = document.createElement("p");
        studentAnswer.textContent = "Câu trả lời của bạn " + jsonData.question[i]["answer" + selectedAnswer];
        if (selectedAnswer === correctAnswer) {
            studentAnswer.classList.add("correct-answer");
            correctAnswers++;
        } else {
            studentAnswer.classList.add("wrong-answer");
        }
        answerDiv.appendChild(studentAnswer);
        var correctAnswerPara = document.createElement("p");
        correctAnswerPara.textContent = "Câu trả lời đúng: " + jsonData.question[i]["answer" + correctAnswer];
        answerDiv.appendChild(correctAnswerPara);
        var detailsBtn = document.createElement("button");
        detailsBtn.textContent = "Chi tiết";
        detailsBtn.classList.add("btn", "btn-secondary", "details-btn");
        detailsBtn.dataset.details = jsonData.question[i].details;
        answerDiv.appendChild(detailsBtn);
        questionDiv.appendChild(answerDiv);
        document.getElementById("reviewQuestions").appendChild(questionDiv);
    }

    // Show details answer when clicking on "Details Answer" button
    var detailsBtns = document.querySelectorAll(".details-btn");
    detailsBtns.forEach(function(btn) {
        btn.addEventListener("click", function() {
            var detailsPara = document.createElement("p");
            detailsPara.textContent = "Lời giải: " + this.dataset.details;
            detailsPara.classList.add("details-answer");
            this.parentNode.appendChild(detailsPara);
            this.disabled = true; // Disable button after clicked
        });
    });

    // Display review questions and answers when clicking the review button
    document.getElementById("reviewButton").addEventListener("click", function() {
        document.getElementById("reviewQuestions").style.display = "block";
    });

    var userScore = (correctAnswers / totalQuestions) * 10; // Convert to 10-point scale
    userScore = userScore.toFixed(2); // Round to two decimal places
    document.getElementById("correctAnswers").textContent = correctAnswers;
    document.getElementById("userScore").textContent = userScore + "/10";
});
