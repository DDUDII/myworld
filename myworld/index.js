const homeMenu = document.getElementById("homeMenu");
const gameMenu = document.getElementById("gameMenu");
const musicMenu = document.getElementById("musicMenu");
const iframe = document.getElementById("iframe");

const showHome = () => {
  iframe.setAttribute("src", "home/home.html");
};

const showGame = () => {
  iframe.setAttribute("src", "game/game.html");
};

const showMusic = () => {
  iframe.setAttribute("src", "music/musicbox.html");
};

homeMenu.addEventListener("click", () => {
  showHome();
});

gameMenu.addEventListener("click", () => {
  showGame();
});

musicMenu.addEventListener("click", () => {
  showMusic();
});
