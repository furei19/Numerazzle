let currentRound = 1;
let score = 0;
let totalScoreCounter = document.getElementById("totalScore");
let countdownTimer;
let remainingTime;
let answeredQuestion = 0;
let lastClickedElement = null;
let set = 1;
let totalTotalScore = document.getElementById("totalTotalScore");
let setScore;

window.onload = generateEquationRound1();

function generateEquationRound1() {
  currentRound = 1;

  document.getElementById("setRound").textContent = `Round: 1`;
  document.getElementById("round1A").style.display = "grid";
  document.getElementById("round1Q").style.display = "grid";
  const questions = [];
  const answers = [];

  for (let row = 1; row <= 2; row++) {
    for (let col = 1; col <= 2; col++) {
      let num1 = Math.floor(Math.random() * 10) + 1;
      let num2 = Math.floor(Math.random() * 10) + 1;
      let answer = num1 + num2;

      const questionKey = `round1q-${row}-${col}`;
      questions.push({
        key: questionKey,
        text: `${num1} + ${num2}`,
        answer: answer,
      });
      answers.push(answer);
    }
  }

  shuffleArray(answers);

  for (let row = 1; row <= 2; row++) {
    for (let col = 1; col <= 2; col++) {
      const answerElement = document.getElementById(`round1-${row}-${col}`);
      answerElement.textContent = answers.pop();
    }
  }

  questions.forEach((q) => {
    const questionElement = document.getElementById(q.key);
    questionElement.textContent = q.text;
    questionElement.setAttribute("data-answer", q.answer);
  });

  remainingTime = 120;
  startCountdown();
}

function generateEquationRound2() {
  currentRound = 2;
  document.getElementById("setRound").textContent = `Round: 2`;
  document.getElementById("round1A").style.display = "none";
  document.getElementById("round1Q").style.display = "none";
  document.getElementById("round2A").style.display = "grid";
  document.getElementById("round2Q").style.display = "grid";

  const questions = [];
  const answers = [];

  for (let row = 1; row <= 2; row++) {
    for (let col = 1; col <= 2; col++) {
      let num1 = Math.floor(Math.random() * 10) + 1;
      let num2 = Math.floor(Math.random() * 10) + 1;
      let answer = num1 - num2;

      const questionKey = `round2q-${row}-${col}`;
      questions.push({
        key: questionKey,
        text: `${num1} - ${num2}`,
        answer: answer,
      });
      answers.push(answer);
    }
  }

  shuffleArray(answers);

  for (let row = 1; row <= 2; row++) {
    for (let col = 1; col <= 2; col++) {
      const answerElement = document.getElementById(`round2-${row}-${col}`);
      answerElement.textContent = answers.pop();
    }
  }

  questions.forEach((q) => {
    const questionElement = document.getElementById(q.key);
    questionElement.textContent = q.text;
    questionElement.setAttribute("data-answer", q.answer);
  });

  remainingTime = 120;
  startCountdown();
}

function generateEquationRound3() {
  currentRound = 3;
  document.getElementById("setRound").textContent = `Round: 3`;
  document.getElementById("round2A").style.display = "none";
  document.getElementById("round2Q").style.display = "none";
  document.getElementById("round3A").style.display = "grid";
  document.getElementById("round3Q").style.display = "grid";

  const questions = [];
  const answers = [];

  for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
      let num1 = Math.floor(Math.random() * 10) + 1;
      let num2 = Math.floor(Math.random() * 10) + 1;
      let answer = num1 * num2;

      const questionKey = `round3q-${row}-${col}`;
      questions.push({
        key: questionKey,
        text: `${num1} * ${num2}`,
        answer: answer,
      });
      answers.push(answer);
    }
  }

  shuffleArray(answers);

  for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
      const answerElement = document.getElementById(`round3-${row}-${col}`);
      answerElement.textContent = answers.pop();
    }
  }

  questions.forEach((q) => {
    const questionElement = document.getElementById(q.key);
    questionElement.textContent = q.text;
    questionElement.setAttribute("data-answer", q.answer);
  });

  remainingTime = 360;
  startCountdown();
}

function generateEquationRound4() {
  currentRound = 4;
  document.getElementById("setRound").textContent = `Round: 4`;
  document.getElementById("round3A").style.display = "none";
  document.getElementById("round3Q").style.display = "none";
  document.getElementById("round4A").style.display = "grid";
  document.getElementById("round4Q").style.display = "grid";

  const questions = [];
  const answers = [];

  for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
      let num1 = Math.floor(Math.random() * 10) + 1;
      let num2 = Math.floor(Math.random() * 10) + 1;
      let answer = parseFloat((num1 / num2).toFixed(2));

      const questionKey = `round4q-${row}-${col}`;
      questions.push({
        key: questionKey,
        text: `${num1} / ${num2}`,
        answer: answer,
      });
      answers.push(answer);
    }
  }

  shuffleArray(answers);

  for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
      const answerElement = document.getElementById(`round4-${row}-${col}`);
      answerElement.textContent = answers.pop();
    }
  }

  questions.forEach((q) => {
    const questionElement = document.getElementById(q.key);
    questionElement.textContent = q.text;
    questionElement.setAttribute("data-answer", q.answer);
  });

  remainingTime = 360;
  startCountdown();
}

function generateEquationRound5() {
  currentRound = 5;
  document.getElementById("setRound").textContent = `Round: 5`;
  document.getElementById("round1A").style.display = "none";
  document.getElementById("round1Q").style.display = "none";
  document.getElementById("round4A").style.display = "none";
  document.getElementById("round4Q").style.display = "none";
  document.getElementById("round5A").style.display = "grid";
  document.getElementById("round5Q").style.display = "grid";

  const questions = [];
  const answers = [];

  for (let row = 1; row <= 5; row++) {
    for (let col = 1; col <= 5; col++) {
      let num1 = Math.floor(Math.random() * 10) + 1;
      let num2 = Math.floor(Math.random() * 10) + 1;
      let answer;
      let operator;

      const operatorChoice = Math.floor(Math.random() * 4);
      switch (operatorChoice) {
        case 0:
          operator = "+";
          answer = num1 + num2;
          break;
        case 1:
          operator = "-";
          answer = num1 - num2;
          break;
        case 2:
          operator = "*";
          answer = num1 * num2;
          break;
        case 3:
          operator = "/";
          answer = parseFloat((num1 / num2).toFixed(2));
          questionText = `${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`;
          break;
      }

      const questionKey = `round5q-${row}-${col}`;
      questions.push({
        key: questionKey,
        text: `${num1} ${operator} ${num2}`,
        answer: answer,
      });
      answers.push(answer);
    }
  }

  shuffleArray(answers);

  for (let row = 1; row <= 5; row++) {
    for (let col = 1; col <= 5; col++) {
      const answerElement = document.getElementById(`round5-${row}-${col}`);
      answerElement.textContent = answers.pop();
    }
  }

  questions.forEach((q) => {
    const questionElement = document.getElementById(q.key);
    questionElement.textContent = q.text;
    questionElement.setAttribute("data-answer", q.answer);
  });

  remainingTime = 900;
  startCountdown();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getAnswer(element) {
  clickedAnswer = element;
  if (lastClickedElement && lastClickedElement !== element) {
    lastClickedElement.style.backgroundColor = "";
    lastClickedElement.style.color = "";
  }

  element.style.backgroundColor = "lightgreen";
  lastClickedElement = element;

}

function checkAnswer(element) {
  clickedQuestion = element;
  if (clickedQuestion && clickedAnswer) {
    let correctAnswer = clickedQuestion.getAttribute("data-answer");
    if (clickedAnswer.textContent === correctAnswer) {
      score++;
      answeredQuestion++;
      clickedQuestion.style.backgroundColor = "lightgreen";
      clickedAnswer.style.display = "none";
      totalScoreCounter.textContent = `Total Score = ${score}`;
      if (answeredQuestion === 4) {
        document.getElementById("setRound").textContent = `Round: 2`;
        generateEquationRound2();
      } else if (answeredQuestion === 8) {
        document.getElementById("setRound").textContent = `Round: 3`;
        generateEquationRound3();
      } else if (answeredQuestion === 17) {
        document.getElementById("setRound").textContent = `Round: 4`;
        generateEquationRound4();
      } else if (answeredQuestion === 26) {
        document.getElementById("setRound").textContent = `Round: 5`;
        generateEquationRound5();
        console.log("answered questions", answeredQuestion);
      } else if (answeredQuestion === 51) {
        nextSet();
      }
    } else {
      alert("Incorrect answer, score -1");
      score--;
      lastClickedElement.style.backgroundColor = "";
      lastClickedElement.style.color = "";
      totalScoreCounter.textContent = `Total Score = ${score}`;
    }
    clickedQuestion = null;
    clickedAnswer = null;
  }
}

function startCountdown() {
  const timerElement = document.getElementById("timer");
  clearInterval(countdownTimer);
  countdownTimer = setInterval(() => {
    remainingTime--;
    timerElement.textContent = `Time Left: ${remainingTime} seconds`;
    if (remainingTime <= 0) {
      clearInterval(countdownTimer);
      endRound();
    }
  }, 1000);
}

function nextSet() {
  document.getElementById("round5A").style.display = "none";
  document.getElementById("round5Q").style.display = "none";
  document.getElementById("roundEnd").style.display = "block";
  totalTotalScore.textContent = `Total Score = ${setScore}`;
}

function endRound() {
  if (currentRound === 1) {
    generateEquationRound2();
  } else if (currentRound === 2) {
    generateEquationRound3();
  } else if (currentRound === 3) {
    generateEquationRound4();
  } else if (currentRound === 4) {
    generateEquationRound5();
  } else if (currentRound === 5) {
    nextSet();
  }
}

function nextGame() {
  location.reload(true);
}