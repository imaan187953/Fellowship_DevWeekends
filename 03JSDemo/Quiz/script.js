const quizData = [
  {
    question: "What does ML stand for?",
    options: [
      "Machine Learning",
      "Machine Logic",
      "Model Learning",
      "Modern Language"
    ],
    answer: "Machine Learning"
  },
  {
    question: "Which of these is a supervised learning algorithm?",
    options: [
      "Linear Regression",
      "K-Means Clustering",
      "Apriori",
      "PCA"
    ],
    answer: "Linear Regression"
  },
  {
    question: "What is the purpose of a training dataset?",
    options: [
      "To train the model",
      "To test the model",
      "To deploy the model",
      "To visualize the model"
    ],
    answer: "To train the model"
  },
  {
    question: "Which programming language is most commonly used in Machine Learning?",
    options: [
      "Python",
      "HTML",
      "CSS",
      "PHP"
    ],
    answer: "Python"
  },
  {
    question: "What does AI stand for?",
    options: [
      "Artificial Intelligence",
      "Automatic Intelligence",
      "Advanced Integration",
      "Artificial Integration"
    ],
    answer: "Artificial Intelligence"
  }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const progressElement = document.getElementById("progress");

function loadQuestion() {

  const currentQuiz = quizData[currentQuestion];

  progressElement.textContent =
    `Question ${currentQuestion + 1} of ${quizData.length}`;

  questionElement.innerHTML = `
    <i class="fa-solid fa-circle-question"></i>
    ${currentQuiz.question}
  `;

  optionsElement.innerHTML = "";

  const letters = ["A", "B", "C", "D"];

  currentQuiz.options.forEach((option, index) => {

    const button = document.createElement("button");

    button.innerHTML = `
      <span class="option-icon">${letters[index]}</span>
      <span>${option}</span>
    `;

    button.addEventListener("click", () => {

      const allButtons = document.querySelectorAll("#options button");
      allButtons.forEach(btn => btn.disabled = true);

      if (option === currentQuiz.answer) {
        score++;
        button.style.backgroundColor = "green";
      } else {
        button.style.backgroundColor = "red";
      }

      setTimeout(() => {

        currentQuestion++;

        if (currentQuestion < quizData.length) {
          loadQuestion();
        } else {
          showResult();
        }

      }, 1000);
    });

    optionsElement.appendChild(button);
  });
}

function showResult() {

  progressElement.textContent = "";

  questionElement.innerHTML = `
    <i class="fa-solid fa-trophy"></i>
    Quiz Completed!
  `;

  optionsElement.innerHTML = `
    <h2>
      <i class="fa-solid fa-brain"></i>
      Your Score: ${score} / ${quizData.length}
    </h2>

    <button class="result-btn" onclick="restartQuiz()">
      Restart Quiz
    </button>
  `;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  loadQuestion();
}

loadQuestion();