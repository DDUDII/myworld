const homeMenu = document.getElementById("homeMenu");
const gameMenu = document.getElementById("gameMenu");
const musicMenu = document.getElementById("musicMenu");
const iframe = document.getElementById("iframe");

const showHome = () => {
  iframe.setAttribute("src", "home/home.html");
  setActiveMenu(homeMenu);
};

const showGame = () => {
  iframe.setAttribute("src", "game/game.html");
  setActiveMenu(gameMenu);
};

const showMusic = () => {
  iframe.setAttribute("src", "music/musicbox.html");
  setActiveMenu(musicMenu);
};

const setActiveMenu = (menu) => {
  [homeMenu, gameMenu, musicMenu].forEach((item) => {
    item.classList.remove("active");
  });
  menu.classList.add("active");
};

homeMenu.addEventListener("click", showHome);
gameMenu.addEventListener("click", showGame);
musicMenu.addEventListener("click", showMusic);
