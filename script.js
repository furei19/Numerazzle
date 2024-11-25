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
const triviaBox = document.getElementById("triviaBox");

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
  document.getElementById("nextRoundButton").style.display = "none";
  triviaBox.style.display = "none";
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
  document.getElementById("nextRoundButton").style.display = "none";
  triviaBox.style.display = "none";
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
  document.getElementById("nextRoundButton").style.display = "none";
  triviaBox.style.display = "none";
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
  document.getElementById("nextRoundButton").style.display = "none";
  triviaBox.style.display = "none";
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
  triviaBox.style.display = "none";
  gridContainer.style.display = "none";

  document.getElementById("roundEnd").style.display = "block";
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
  const images = ["images/math1.png", "images/math2.png", "images/math3.png", "images/math4.png", "images/math5.png", "images/math6.png"];
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

  const name = document.getElementById("name");
  const trivia = document.getElementById("trivia");
  triviaBox.style.display = "block";
  console.log("Got here");
  if (selectedImage === "images/math1.png" ) {
    name.textContent = "Galileo Galilei";
    trivia.textContent = "Galileo was never married, but he did start a family So according to this tradition, Galileo never tied the knot. That said, the academic was associated with a woman named Marina Gamba, with whom he raised three children: Virginia (born in 1600), Livia (born in 1601), and Vincenzo (born in 1606).";
  } else if (selectedImage === "images/math2.png" ) {
    name.textContent = "Isaac Newton";
    trivia.textContent = "Newton did witness an apple falling from a tree one day and this got him thinking about what actually caused the apple to fall to the ground. Newton later developed his theory of Gravity, believing that Earth has a force that pulls objects down, which prevents objects from aimlessly floating around.";
  } else if (selectedImage === "images/math3.png" ) {
    name.textContent = "Daniel Bernoulli";
    trivia.textContent = "He lived for his work; he never married and had no children. He considered marriage when he was younger, but the woman in question turned out to be very mean with money, which he found off-putting. Bernoulli respected simplicity of lifestyle and frugality, but not meanness.";
  } else if (selectedImage === "images/math4.png" ) {
    name.textContent = "Archemedes";
    trivia.textContent = "He was in the service of King Hiero II of Syracuse. At that time, he developed many inventions. Archimedes made out a pulley system designed to help the sailors move objects up and down that are weighty.";
  } else if (selectedImage === "images/math5.png" ) {
    name.textContent = "Euclid";
    trivia.textContent = "He wrote the 13 Elements. Because of his work in the field of geometry he is called the father of geometry. Most geometry is so named Euclidian Geometry because of his thirteen Elements which summarized most of the geometry during his time. By the 1700's the Elements was the text book.";
  } else if (selectedImage === "images/math6.png" ) {
    name.textContent = "Pythagoras";
    trivia.textContent = "One of the few Pythagoras facts that can be nailed down with any certainty is that he traveled extensively. He likely spent time in Babylon and Egypt as a child or a young man.";
  }
}
