let currentSet = 1;
let currentRound = 1;
let score = 0;
let totalScore = 0;
let countdownTimer;
let remainingTime;

// Set configurations for each round
const roundsConfig = [
  { gridSize: 2, time: 120, operation: "addition" },
  { gridSize: 2, time: 120, operation: "subtraction" },
  { gridSize: 3, time: 300, operation: "multiplication" },
  { gridSize: 3, time: 300, operation: "division" },
  { gridSize: 5, time: 900, operation: "mixed" },
];

// Function to generate equations based on the operation type
function generateEquation(operation) {
  let num1, num2, answer;
  switch (operation) {
    case "addition":
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      answer = num1 + num2;
      return { equation: `${num1} + ${num2}`, answer };
    case "subtraction":
      num1 = Math.floor(Math.random() * 20) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      answer = num1 - num2;
      return { equation: `${num1} - ${num2}`, answer };
    case "multiplication":
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      answer = num1 * num2;
      return { equation: `${num1} * ${num2}`, answer };
    case "division":
      num1 = Math.floor(Math.random() * 10) + 1;
      num2 = Math.floor(Math.random() * 9) + 1; // avoid zero
      answer = num1;
      return { equation: `${num1 * num2} / ${num2}`, answer };
    case "mixed":
      const operations = [
        "addition",
        "subtraction",
        "multiplication",
        "division",
      ];
      return generateEquation(
        operations[Math.floor(Math.random() * operations.length)]
      );
  }
}

// Function to set up the round
function setupRound() {
  const roundConfig = roundsConfig[currentRound - 1];
  const gridSize = roundConfig.gridSize;
  const operation = roundConfig.operation;
  remainingTime = roundConfig.time;

  // Reset grid and draggable container
  document.querySelector(".grid-container").innerHTML = "";
  document.querySelector(".draggable-container").innerHTML = "";

  // Generate equations and answers based on the grid size
  const equations = [];
  const answers = [];
  for (let i = 0; i < gridSize * gridSize; i++) {
    const { equation, answer } = generateEquation(operation);
    equations.push(equation);
    answers.push(answer);
  }

  // Shuffle answers for draggable boxes
  shuffleArray(answers);

  // Populate grid and draggable boxes
  populateEquations(equations, gridSize);
  populateAnswers(answers);

  // Start the countdown timer
  startCountdown();

  // set round
  document.getElementById("setRound").textContent = `Round ${currentRound}`;
}

// Function to populate equations in the grid
function populateEquations(equations, gridSize) {
  const gridContainer = document.querySelector(".grid-container");
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  equations.forEach((equation, index) => {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.id = `tile${index}`;
    tile.textContent = equation;
    tile.dataset.answer = eval(equation);
    tile.addEventListener("dragover", handleDragOver);
    tile.addEventListener("drop", handleDrop);
    gridContainer.appendChild(tile);
  });
}

// Function to populate draggable boxes with answers
function populateAnswers(answers) {
  const draggableContainer = document.querySelector(".draggable-container");
  answers.forEach((answer, index) => {
    const box = document.createElement("div");
    box.className = "draggable";
    box.id = `box${index}`;
    box.textContent = answer;
    box.draggable = true;
    box.dataset.answer = answer;
    box.addEventListener("dragstart", handleDragStart);
    box.addEventListener("dragend", handleDragEnd);
    draggableContainer.appendChild(box);
  });
}

// Countdown timer
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

// End the current round and move to the next
function endRound() {
  clearInterval(countdownTimer); // Stop the timer for the current round
  currentRound++;

  if (currentRound <= roundsConfig.length) {
    setupRound(); // Set up the next round if rounds are remaining
  } else {
    currentSet++;
    document.getElementById("currentSet").textContent = `Set ${currentSet}`;
    if (currentSet > 5) {
      // Hide both grids after the 5th set
      document.querySelector(".grid-container").style.display = "none";
      document.querySelector(".draggable-container").style.display = "none";
      alert("Game Over! You've completed 5 sets.");
    } else {
      totalScore += score;
      document.getElementById(
        "totalScore"
      ).textContent = `Total Score: ${totalScore}`; // Display total score
      resetGame(); // Reset game if all rounds are complete
    }
  }
}

// Reset the game after a set
function resetGame() {
  currentRound = 1;
  score = 0;
  setupRound();
}

// Drag and Drop Functions
let draggedElement = null;

function handleDragStart(e) {
  draggedElement = e.target;
  setTimeout(() => {
    e.target.style.visibility = "hidden";
  }, 0);
}

function handleDragEnd(e) {
  e.target.style.visibility = "visible";
}

function handleDragOver(e) {
  e.preventDefault(); // Allows drop
}

function handleDrop(e) {
  e.preventDefault();
  const targetAnswer = parseInt(e.target.dataset.answer);
  const draggedAnswer = parseInt(draggedElement.dataset.answer);

  if (targetAnswer === draggedAnswer) {
    // Correct answer
    e.target.textContent = draggedElement.textContent;
    e.target.style.backgroundColor = "lightgreen";
    draggedElement.style.display = "none"; // Hide the box
    score++;
    checkRoundCompletion();
  } else {
    // Incorrect answer
    if (score > 0) {
      score--;
    } else {
    }
    draggedElement.style.visibility = "visible";
    alert("Incorrect answer, you lost a point!");
  }

  // Update score display
  document.getElementById("score").textContent = `Score: ${score}`;
}

// Check if all answers are correct to finish the round
function checkRoundCompletion() {
  const tiles = document.querySelectorAll(".grid-container .tile");

  // Check if every tile has a correct answer (no empty tiles)
  const allCorrect = Array.from(tiles).every(
    (tile) =>
      tile.textContent !== "" && tile.style.backgroundColor === "lightgreen"
  );

  if (allCorrect) {
    endRound(); // Only advance to the next round if all answers are correct
  }
}

// Shuffle array helper function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Start the first round on page load
document.addEventListener("DOMContentLoaded", () => {
  setupRound();
});
