const number = document.getElementById("number");
const getNumBtn = document.getElementById("getNumBtn");
const timer = document.getElementById("timer");
const numInput = document.getElementById("numInput");
const sendNumBtn = document.getElementById("sendNumBtn");
const resultText = document.getElementById("resultText");

let intervalId;

let time = 30;
const updateTimer = () => {
  if (time >= 0) {
    let min = String(Math.floor(time / 60)).padStart(2, "0");
    let sec = String(time % 60).padStart(2, "0");
    timer.innerText = `${min}:${sec}`;
    time = time - 1;
    if (time < 0) {
      alert("인증번호를 다시 받아주세요. ");
      number.innerText = "000000";
    }
  } else {
    clearInterval(intervalId);
  }
};

const startTimer = () => {
  intervalId = setInterval(updateTimer, 1000);
};
const makeNewNum = () => {
  const newNum = String(Math.floor(100000 + Math.random() * 900000));
  number.innerText = newNum;
  number.style.color = "#" + newNum;
  resultText.innerText = "";
};

const clickGetNumBtn = getNumBtn.addEventListener("click", function () {
  clearInterval(intervalId);
  time = 30;
  startTimer();
  makeNewNum();
});

const clickSendNumBtn = sendNumBtn.addEventListener("click", () => {
  const enterNum = numInput.value;
  const newNum = number.innerText;

  if (enterNum === "") {
    alert("인증번호를 입력해주세요.");
    return;
  }

  if (enterNum === newNum) {
    clearInterval(intervalId);
    resultText.innerText = "인증되었습니다.";
    numInput.value = "";
    number.innerText = "";
    timer.innerText = "";
  } else {
    alert("인증번호가 일치하지 않습니다.");
  }
});
