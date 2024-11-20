let currentRound = 1;
let score = 0;
let totalScoreCounter = document.getElementById("totalScore");
let countdownTimer;
let remainingTime;
let answeredQuestion = 0;
let lastClickedElement = null;
let set = 1;
let totalTotalScore = document.getElementById("totalTotalScore");
let gridSize;
let isPaused = false;
let gridContainer = document.getElementById("gridContainer");
let imageCanvas = document.getElementById("imageCanvas");

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

  remainingTime = 10;
  startCountdown();
}

function generateEquationRound2() {
  currentRound = 2;
  document.getElementById("nextRoundButton").style.display = "none";
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

  remainingTime = 1;
  startCountdown();
}

function generateEquationRound3() {
  currentRound = 3;
  document.getElementById("nextRoundButton").style.display = "none";
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

  remainingTime = 1;
  startCountdown();
}

function generateEquationRound4() {
  currentRound = 4;
  document.getElementById("nextRoundButton").style.display = "none";
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

  remainingTime = 1;
  startCountdown();
}

function generateEquationRound5() {
  currentRound = 5;
  document.getElementById("nextRoundButton").style.display = "none";
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

  remainingTime = 10;
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
        document.getElementById("round1A").style.display = "none";
        document.getElementById("round1Q").style.display = "none";
        document.getElementById("nextRoundButton").style.display = "block";
        gridContainer.style.display = "grid";
        pauseCountdown();
        createImageGrid();
      } else if (answeredQuestion === 8) {
        document.getElementById("round2A").style.display = "none";
        document.getElementById("round2Q").style.display = "none";
        document.getElementById("nextRoundButton").style.display = "block";
        gridContainer.style.display = "grid";
        pauseCountdown();
        createImageGrid();
      } else if (answeredQuestion === 17) {
        document.getElementById("round3A").style.display = "none";
        document.getElementById("round3Q").style.display = "none";
        document.getElementById("nextRoundButton").style.marginTop = "50px";
        document.getElementById("nextRoundButton").style.display = "block";
        gridContainer.style.display = "grid";
        pauseCountdown();
        createImageGrid();
      } else if (answeredQuestion === 26) {
        document.getElementById("round4A").style.display = "none";
        document.getElementById("round4Q").style.display = "none";
        document.getElementById("nextRoundButton").style.display = "block";
        gridContainer.style.display = "grid";
        pauseCountdown();
        createImageGrid();
      } else if (answeredQuestion === 51) {
        document.getElementById("round5A").style.display = "none";
        document.getElementById("round5Q").style.display = "none";
        document.getElementById("nextGameButton").style.display = "block";
        gridContainer.style.marginTop = "-50px";
        imageCanvas.style.margin = "-2px";
        gridContainer.style.gap = "0px";
        gridContainer.style.display = "grid";
        console.log("got here");
        pauseCountdown();
        createImageGrid();
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
    if (!isPaused) {
      remainingTime--;
      timerElement.textContent = `Time Left: ${remainingTime} seconds`;
      if (remainingTime <= 0) {
        clearInterval(countdownTimer);
        endRound();
      }
    }
  }, 1000);
}

function pauseCountdown() {
  isPaused = !isPaused; 
}

function nextSet() {
  document.getElementById("round5A").style.display = "none";
  document.getElementById("round5Q").style.display = "none";
  document.getElementById("nextGameButton").style.display = "none";
  document.getElementById("roundEnd").style.display = "block";
  gridContainer.style.display = "none";
  
  totalTotalScore.textContent = `Total Score = ${score}`;
}

function endRound() {
  if (currentRound === 1) {
    answeredQuestion = 4;
    gridContainer.style.display = "none";
    generateEquationRound2();
    console.log("1");
  } else if (currentRound === 2) {
    answeredQuestion = 8;
    gridContainer.style.display = "none";
    generateEquationRound3();
    console.log("2");
  } else if (currentRound === 3) {
    answeredQuestion = 17;
    gridContainer.style.display = "none";
    generateEquationRound4();
    console.log("3");
  } else if (currentRound === 4) {
    answeredQuestion = 26;
    gridContainer.style.display = "none";
    generateEquationRound5();
    console.log("4");
  } else if (currentRound === 5) {
    console.log("5");
    answeredQuestion = 51;
    createImageGrid();
    gridContainer.style.display = "grid";
    gridContainer.style.marginTop = "-50px";
    gridContainer.style.gap = "0px";
    gridContainer.style.display = "grid";
    document.getElementById("round5A").style.display = "none";
    document.getElementById("round5Q").style.display = "none";
    document.getElementById("nextGameButton").style.display = "block";
  }
}

function nextRound() {
  if (currentRound === 1) {
    answeredQuestion = 4;
    document.getElementById("round1A").style.display = "none";
    document.getElementById("round1Q").style.display = "none";
    gridContainer.style.display = "none";
    pauseCountdown();
    generateEquationRound2();
  } else if (currentRound === 2) {
    answeredQuestion = 8;
    document.getElementById("round2A").style.display = "none";
    document.getElementById("round2Q").style.display = "none";
    gridContainer.style.display = "none";
    pauseCountdown();
    generateEquationRound3();
  } else if (currentRound === 3) {
    answeredQuestion = 17;
    document.getElementById("round3A").style.display = "none";
    document.getElementById("round3Q").style.display = "none";
    gridContainer.style.display = "none";
    pauseCountdown();
    generateEquationRound4();
  } else if (currentRound === 4) {
    answeredQuestion = 26;
    document.getElementById("round4A").style.display = "none";
    document.getElementById("round4Q").style.display = "none";
    gridContainer.style.display = "none";
    pauseCountdown();
    generateEquationRound5();
  } else if (currentRound === 5) {
    document.getElementById("round5A").style.display = "none";
    document.getElementById("round5Q").style.display = "none";
    document.getElementById("roundEnd").style.display = "block";
    totalTotalScore.textContent = `Total Score = ${score}`;
  }
}

function nextGame() {
  location.reload(true);
}

function getRandomImage() {
  const images = ["/images/math1.png", "/images/math2.png", "/images/math3.png", "/images/math4.png", "/images/math5.png", "/images/math6.png"];
  return images[Math.floor(Math.random() * images.length)];
}

function createImageGrid() {
  let gridSize;
  if (currentRound === 1 || currentRound === 2) {
    gridSize = 2;
  } else if (currentRound === 3 || currentRound === 4) {
    gridSize = 3;
  } else if (currentRound === 5) {
    gridSize = 5;
  }

  const selectedImage = getRandomImage();

  console.log(selectedImage);

  // Define grid layout based on selected size
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 100px)`;
  gridContainer.innerHTML = ''; // Clear any previous items

  const img = new Image();
  img.src = selectedImage;

  img.onload = () => {
    // Scale the canvas to match the total grid size based on gridSize
    const totalCanvasSize = gridSize * 100; // e.g., 200px for 2x2, 300px for 3x3, etc.
    const canvas = document.getElementById("imageCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = totalCanvasSize;
    canvas.height = totalCanvasSize;

    // Draw the image scaled to fit the grid entirely, maintaining high resolution
    ctx.drawImage(img, 0, 0, totalCanvasSize, totalCanvasSize);

    // Calculate slice dimensions based on the scaled grid size
    const sliceWidth = totalCanvasSize / gridSize;
    const sliceHeight = totalCanvasSize / gridSize;

    // Insert each sliced image into a grid cell
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        // Create a canvas for each grid cell slice
        const sliceCanvas = document.createElement("canvas");
        const sliceCtx = sliceCanvas.getContext("2d");

        sliceCanvas.width = 100;
        sliceCanvas.height = 100;

        // Draw the scaled slice onto the 100x100 canvas
        sliceCtx.drawImage(
          canvas,
          col * sliceWidth, row * sliceHeight, sliceWidth, sliceHeight,
          0, 0, 100, 100
        );

        // Convert the slice canvas to an image and add it to the grid cell
        const imgSlice = new Image();
        imgSlice.src = sliceCanvas.toDataURL();
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.appendChild(imgSlice);
        gridContainer.appendChild(gridItem);
      }
    }
  };
}
