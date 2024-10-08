const questions = [
    {
        question: "Manakah dari pertanyaan berikut yang benar menegai variabel di Javascript?",
        answers: [
            { text: "Variabel di JavaScript harus dideklarasikan dengan tipe data", correct: false },
            { text: "Variabel di JavaScript hanya dapat menyimpan tipe data angka", correct: false },
            { text: "Variabel di JavaScript dapat menyimpan berbagai tipe data tanpa deklarasi tipe", correct: true },
            { text: "Variabel di JavaScript tidak bisa diubah setelah dideklarasikane", correct: false },
        ]
    },
    {
        question: "Fungsi console.log() dalam JavaScript digunakan untuk?",
        answers: [
            { text: "Menampilkan output di layar", correct: false },
            { text: "Menampilkan pesan di konsol browser", correct: true },
            { text: "Menulis data ke file", correct: false },
            { text: "Membuat elemen HTML baru", correct: false },
        ]
    },
    {
        question: "Jika ada dua variabel satu berisi angka 5 dan satu lagi berisi string'5', apa yang akan terjadi jika kedua variabel tersebut dibandingkan menggunakan operator == ?",
        answers: [
            { text: "true", correct: true },
            { text: "false", correct: false },
            { text: "undefined", correct: false },
            { text: "null", correct: false },
        ]
    },
    {
        question: "Manakah dari berikut ini adalah cara yang benar untuk membuat fungsi di JavaScript?",
        answers: [
            { text: "function myFunction {}", correct: false },
            { text: "function: myFunction()", correct: false },
            { text: "function myFunction() {}", correct: true },
            { text: "func myFunction() {}", correct: false },
        ]
    },
    {
        question: "Bagaimana cara mendeklarasikan array di JavaScript?",
        answers: [
            { text: "let arr = (1, 2, 3);", correct: false },
            { text: "let arr = <1, 2, 3>;", correct: false },
            { text: "let arr = {1, 2, 3};", correct: false },
            { text: "let arr = [1, 2, 3];", correct: true },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    //  nextButton.style.display = "none"
    showQuestion();
}

function showQuestion() {

    // resetState();
    answerButton.innerHTML = "";

    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer));
        answerButton.appendChild(button);
      
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}


function resetState() {
    nextButton.style.display = "none";
    while(answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(answer) {
    const selectedBtn = answer.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
            } 
            button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}



function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

// function selectAnswer(answer) {
//     if (answer.correct) {
//         score++;
//         alert("Correct answer!");
//     } else {
//         alert("Wrong answer!");
//     }

//     currentQuestionIndex++;

//     if (currentQuestionIndex < questions.length) {
//         // nextButton.style.display = "block";
//         // nextButton.onclick = () => {
//         // nextButton.style.display = "none";
//         showQuestion();
//     } else {
//         alert("Quiz finished! Your score is: " + score);
//         nextButton.innerHTML = "Restart";
//         nextButton.addEventListener("click", startQuiz);
//         // nextButton.onclick = startQuiz;
//     }
// }

startQuiz();
