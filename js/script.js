let successCount = 0;
const bingSound = document.getElementById("bingSound");
const successMeleeSound = document.getElementById("successMeleeSound");
const celebrationSound = document.getElementById("celebrationSound");
const newRecordSound = document.getElementById("newRecordSound");

// Add event listener to keep the document focused
document.addEventListener("click", function () {
  document.getElementById("successButton").focus();
});

document.getElementById("successButton").addEventListener("click", function () {
  successCount++;
  updateCountDisplay();
  playBingSound();

  if (successCount === 5) {
    playSuccessMeleeSound();
  }

  if (successCount === 10) {
    playCelebrationSound();
  }

  if (successCount === 20) {
    playNewRecordSound();
  }
});

document.getElementById("resetButton").addEventListener("click", function () {
  successCount = 0;
  updateCountDisplay();
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    // Prevent default action (which might include triggering a click event)
    event.preventDefault();
    // Reset count on Enter key press
    successCount = 0;
    updateCountDisplay();
  }
});

function updateCountDisplay() {
  document.getElementById("count").innerText = "Success Count: " + successCount;
}

function playBingSound() {
  bingSound.currentTime = 0;
  bingSound.play();
}

function playSuccessMeleeSound() {
  successMeleeSound.currentTime = 0;
  successMeleeSound.play();
}

function playCelebrationSound() {
  celebrationSound.currentTime = 0;
  celebrationSound.play();
}

function playNewRecordSound() {
  newRecordSound.currentTime = 0;
  newRecordSound.play();
}
