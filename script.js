let score = 0;
let time = 30;
let timer;
let currentA = 0, currentB = 0;

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");

function generateQuestion() {
  currentA = Math.floor(Math.random() * 9) + 1;
  currentB = Math.floor(Math.random() * 9) + 1;
  questionEl.textContent = `${currentA} × ${currentB} = ?`;
  answerEl.value = '';
  answerEl.focus();
}

function checkAnswer() {
  const userAnswer = parseInt(answerEl.value);
  const correct = currentA * currentB;

  if (userAnswer === correct) {
    score += 1;
    resultEl.textContent = "✅ 正確！";
    new Audio('sounds/correct.mp3').play();
  } else {
    resultEl.textContent = `❌ 錯誤！正確答案是 ${correct}`;
    new Audio('sounds/wrong.mp3').play();
  }

  scoreEl.textContent = `得分：${score}`;
  generateQuestion();
}

function startTimer() {
  timer = setInterval(() => {
    time--;
    timerEl.textContent = `倒數：${time} 秒`;
    if (time <= 0) {
      clearInterval(timer);
      questionEl.textContent = "遊戲結束！";
      answerEl.disabled = true;
    }
  }, 1000);
}

generateQuestion();
startTimer();