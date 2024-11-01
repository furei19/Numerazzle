let currentSet = 1;
let currentRound = 1;
let score = 0;
let totalScore = 0;
let countdownTimer;
let remainingTime;

const roundsConfig = [
  { gridSize: 2, time: 120, operation: "addition" },
  { gridSize: 2, time: 120, operation: "subtraction" },
  { gridSize: 3, time: 300, operation: "multiplication" },
  { gridSize: 3, time: 300, operation: "division" },
  { gridSize: 5, time: 900, operation: "mixed" },
];

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
      num2 = Math.floor(Math.random() * 9) + 1;
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

function setupRound() {
  const roundConfig = roundsConfig[currentRound - 1];
  const gridSize = roundConfig.gridSize;
  const operation = roundConfig.operation;
  remainingTime = roundConfig.time;

  const draggableContainer = document.querySelector(".draggable-container");
  draggableContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  draggableContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  document.querySelector(".grid-container").innerHTML = "";
  draggableContainer.innerHTML = "";

  const equations = [];
  const answers = [];
  for (let i = 0; i < gridSize * gridSize; i++) {
    const { equation, answer } = generateEquation(operation);
    equations.push(equation);
    answers.push(answer);
  }

  shuffleArray(answers);
  populateEquations(equations, gridSize);
  populateAnswers(answers);

  startCountdown();
  document.getElementById("setRound").textContent = `Round ${currentRound}`;
}

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
    addTouchDragListeners(box);
    draggableContainer.appendChild(box);
  });
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

function endRound() {
  clearInterval(countdownTimer);
  currentRound++;
  if (currentRound <= roundsConfig.length) {
    setupRound();
  } else {
    currentSet++;
    document.getElementById("currentSet").textContent = `Set ${currentSet}`;
    if (currentSet > 5) {
      document.querySelector(".grid-container").style.display = "none";
      document.querySelector(".draggable-container").style.display = "none";
      alert("Game Over! You've completed 5 sets.");
    } else {
      totalScore += score;
      document.getElementById(
        "totalScore"
      ).textContent = `Total Score: ${totalScore}`;
      resetGame();
    }
  }
}

function resetGame() {
  currentRound = 1;
  score = 0;
  setupRound();
}

let draggedElement = null;

function addTouchDragListeners(element) {
  element.addEventListener("touchstart", handleTouchStart, { passive: false });
  element.addEventListener("touchmove", handleTouchMove, { passive: false });
  element.addEventListener("touchend", handleTouchEnd, { passive: false });
}

function handleTouchStart(e) {
  e.preventDefault();
  draggedElement = e.target;
  draggedElement.style.position = "absolute";
  draggedElement.style.zIndex = 1000;
  draggedElement.style.border = "2px solid blue"; // Visual feedback
  moveAt(e.touches[0]);
}

function handleTouchMove(e) {
  e.preventDefault();
  if (!draggedElement) return;
  moveAt(e.touches[0]);
}

function moveAt(touch) {
  draggedElement.style.left =
    touch.clientX - draggedElement.offsetWidth / 2 + "px";
  draggedElement.style.top =
    touch.clientY - draggedElement.offsetHeight / 2 + "px";
}

function handleTouchEnd(e) {
  if (!draggedElement) return;

  const touch = e.changedTouches[0];
  const dropzone = document.elementFromPoint(touch.clientX, touch.clientY);

  if (dropzone && dropzone.classList.contains("tile")) {
    const targetAnswer = parseInt(dropzone.dataset.answer);
    const draggedAnswer = parseInt(draggedElement.dataset.answer);

    if (targetAnswer === draggedAnswer) {
      dropzone.textContent = draggedElement.textContent;
      dropzone.style.backgroundColor = "lightgreen";
      draggedElement.style.display = "none"; // Make the dragged element disappear
      score++;
      checkRoundCompletion();
    } else {
      if (score > 0) score--;
      alert("Incorrect answer, you lost a point!");
    }
  } else {
    // If not dropped on a valid tile, revert to original position
    draggedElement.style.position = "";
    draggedElement.style.zIndex = "";
    draggedElement.style.border = ""; // Reset visual feedback
  }

  document.getElementById("score").textContent = `Score: ${score}`;
  draggedElement = null;
}

function handleDragOver(e) {
  e.preventDefault(); // Prevent default to allow drop
}

function handleDrop(e) {
  e.preventDefault(); // Prevent default behavior for drop event

  if (!draggedElement) return; // Ensure there is a dragged element

  const targetAnswer = parseInt(e.target.dataset.answer);
  const draggedAnswer = parseInt(draggedElement.dataset.answer);

  if (targetAnswer === draggedAnswer) {
    e.target.textContent = draggedElement.textContent;
    e.target.style.backgroundColor = "lightgreen";
    draggedElement.style.display = "none"; // Make the dragged element disappear
    score++;
    checkRoundCompletion();
  } else {
    if (score > 0) score--;
    alert("Incorrect answer, you lost a point!");
  }

  document.getElementById("score").textContent = `Score: ${score}`;
}

function handleDragStart(e) {
  draggedElement = e.target;
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e) {
  const targetAnswer = parseInt(e.target.dataset.answer);
  const draggedAnswer = parseInt(draggedElement.dataset.answer);

  if (targetAnswer === draggedAnswer) {
    e.target.textContent = draggedElement.textContent;
    e.target.style.backgroundColor = "lightgreen";
    draggedElement.style.display = "none";
    score++;
    checkRoundCompletion();
  } else {
    if (score > 0) score--;
    alert("Incorrect answer, you lost a point!");
  }
  document.getElementById("score").textContent = `Score: ${score}`;
}

function checkRoundCompletion() {
  const tiles = document.querySelectorAll(".grid-container .tile");
  const allCorrect = Array.from(tiles).every(
    (tile) =>
      tile.textContent !== "" && tile.style.backgroundColor === "lightgreen"
  );
  if (allCorrect) endRound();
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupRound();
});
