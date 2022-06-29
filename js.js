//

// ===================Player Switching Function==========================

//
function switches() {
  document.querySelector(`.div-${activePlayer}`).style.background = "black";
  document.querySelector(`.cscore-${activePlayer}`).textContent = 0;
  score = 0;
  if (activePlayer == 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  document.querySelector(`.cscore-${activePlayer}`).textContent = score;
  document.querySelector(`.div-${activePlayer}`).style.background = "green";

  alert("You got 1 , player switches");
  //
}
//
// =========================Rolling Dice And Game Starts Here=========================
//
let score = 0;
let activePlayer = 0;
document.querySelector(`.div-${activePlayer}`).style.background = "green";
let cscore = [0, 0];
let playing = true;
document.querySelector(".roll").addEventListener("click", function () {
  if (playing) {
    let number = Math.trunc(Math.random() * 5) + 1;
    document.querySelector(".dice-n").textContent = number;
    document.querySelector(`.div-${activePlayer}`).style.background = "green";
    if (number !== 1) {
      score += number;
      document.querySelector(`.cscore-${activePlayer}`).textContent = score;
    } else {
      document.querySelector(".dice-n").textContent = 1;
      setTimeout(switches, 100);
    }
  }
});
//

// =================================== Hold Button Confi=================================

//
document.querySelector(".hold").addEventListener("click", function () {
  if (playing) {
    cscore[activePlayer] += score;
    document.querySelector(`#hs${activePlayer}`).textContent =
      cscore[activePlayer];
    document.querySelector(".div-0").style.background = "green";
    document.querySelector(".div-1").style.background = "green";
    document.querySelector(`.div-${activePlayer}`).style.background = "black";
    if (cscore[activePlayer] >= 200) {
      document.querySelector(
        "#winner"
      ).textContent = `player-${activePlayer} wins🏆`;
      document.querySelector(".div").style.background = "green";
      document.querySelector(`.cscore-${activePlayer}`).background = "black";
      document.querySelector(".dice-n").textContent = "?";
      playing = false;
    }
    score = 0;
    document.querySelector(`.cscore-${activePlayer}`).textContent = score;

    if (activePlayer == 0) {
      activePlayer = 1;
    } else {
      activePlayer = 0;
    }
  }
});
//

// ===================================Try Again Button Confi=================================

//
document.querySelector(".try-again").addEventListener("click", function () {
  document.querySelector("#winner").textContent = `Let's Play`;
  score = 0;
  activePlayer = 0;
  cscore = [0, 0];
  playing = true;
  document.querySelector("#hs0").textContent = "0";
  document.querySelector("#hs1").textContent = "0";
  document.querySelector(".cscore-0").textContent = "0";
  document.querySelector(".cscore-1").textContent = "0";
  document.querySelector(".div-0").style.background = "black";
  document.querySelector(".div-1").style.background = "black";
  document.querySelector("#winner").style.background = `black`;
  alert("Are You Sure Play Again");
  document.querySelector(".div-0").style.background = "green";
  document.querySelector(".dice-n").textContent = "?";
});
