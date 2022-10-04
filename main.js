const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const score = document.getElementById("scoreSpan");
let scores = [];
let counter = 0;
const loadScores = () => {
  scores = JSON.parse(localStorage.getItem("scores"));
  if (scores === null) scores = [];
};
const saveNewScore = () => {
  scores.push(counter);
  localStorage.setItem("scores", JSON.stringify(scores));
};
function jump() {
  if (dispatchEvent.classList != "jump") {
    dino.classList.add("jump");
    setTimeout(function () {
      dino.classList.remove("jump");
    }, 300);
  }
}
let checkAlive = setInterval(function () {

  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  if (cactusLeft > 0 && cactusLeft < 70 && dinoTop >= 143) {
    const score_max = Math.max(...scores);
    saveNewScore();
    if (counter > score_max) {
      alert("New RANK! Game score: " + Math.floor(counter / 100));
    } else {
      alert("Game score: " + Math.floor(counter / 100));
    }
    counter = 0;
    location.reload();
    dino.style.animationPlayState = "paused";
    cactus.style.animationPlayState = "paused";
    alert("Juego Terminado");
    window.location.reload();
  } else {
    counter++;
    score.innerHTML = Math.floor(counter / 100);
  }
}, 10);
document.addEventListener("keydown", function (event) {
  jump();
});
