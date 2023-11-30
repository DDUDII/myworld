const word = document.getElementById("word");
const wordForm = document.getElementById("wordForm");
const wordInput = document.getElementById("wordInput");
const wordBtn = document.getElementById("wordBtn");
const wordResult = document.getElementById("wordResult");
const retryBtn = document.getElementById("retryBtn");

let isPassed = null;

const formEventHandler = wordForm.addEventListener("submit", (event) => {
  event.preventDefault();
});

const clickWordBtn = wordBtn.addEventListener("click", () => {
  const currentWord = word.innerText;
  const userInput = wordInput.value;
  const lastStr = currentWord[currentWord.length - 1];
  const firstStr = userInput[0];

  if (userInput === "") {
    alert("단어를 입력해주세요.");
    return;
  }

  if (lastStr === firstStr) {
    wordResult.innerText = "통과 🎉";
    isPassed = true;
    word.innerText = wordInput.value;
    wordInput.value = "";
  } else {
    wordResult.innerText = "땡! 🚫 ";
    isPassed = false;
    alert("틀렸습니다!");
    wordInput.value = "";
  }
});
