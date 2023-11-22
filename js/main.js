window.addEventListener("DOMContentLoaded", (event) => {
  window.addEventListener("resize", checkScreenSize);
  var isMusicPlaying = localStorage.getItem("isMusicPlaying") === "true";

  if (isMusicPlaying) {
    document.querySelector("audio").play();
  }

  function checkScreenSize() {
    var screenWidth = window.innerWidth;
    var screenSizeLimit = 600;
    var alertMessage = "";

    if (screenWidth < screenSizeLimit) {
      alertMessage =
        "Por favor, deite o celular para uma melhor experiência (;";
    }

    if (alertMessage) {
      alert(alertMessage);
    }
  }

  checkScreenSize();
  document.querySelectorAll(".actions").forEach(function (link) {
    link.addEventListener("click", function () {
      localStorage.setItem(
        "isMusicPlaying",
        document.querySelector("audio").paused
      );
    });
  });

  document.addEventListener("keydown", navigatePage);
});

const INITIAL_TEAM = 1;
const FINAL_TEAM = 9;

const imageElement = document.getElementById("teamImage");

const leftBtn = document.getElementById("leftButton");
const rightBtn = document.getElementById("rightButton");

leftBtn.addEventListener("click", previousTeam);
rightBtn.addEventListener("click", nextTeam);

let crrTeam = 1;

function previousTeam() {
  crrTeam = crrTeam - 1 >= INITIAL_TEAM ? crrTeam - 1 : FINAL_TEAM;

  changeImage();
}

function nextTeam() {
  crrTeam = crrTeam + 1 <= FINAL_TEAM ? crrTeam + 1 : INITIAL_TEAM;

  changeImage();
}

changeImage();

function changeImage() {
  imageElement.src = `../img/Equipe${crrTeam}.jpg`;
}
