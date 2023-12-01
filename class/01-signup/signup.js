const emailInput = document.getElementById("emailInput");
const nameInput = document.getElementById("nameInput");
const passwordInput = document.getElementById("passwordInput");
const passwordConfirmInput = document.getElementById("passwordConfirmInput");
const female = document.getElementById("female");
const male = document.getElementById("male");
const other = document.getElementById("other");
const agreedCheck = document.getElementById("agreedCheck");
const signupBtn = document.getElementById("signupBtn");
const emailWarning = document.getElementById("emailWarning");
const nameWarning = document.getElementById("nameWarning");
const passwordWarning = document.getElementById("passwordWarning");
const passwordConfirmWarning = document.getElementById(
  "passwordConfirmWarning"
);
const genderWarning = document.getElementById("genderWarning");
const agreedCheckWarning = document.getElementById("agreedCheckWarning");

const isEmailValid = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

signupBtn.addEventListener("click", () => {
  const emailValue = emailInput.value;

  if (!isEmailValid(emailValue)) {
    alert("올바른 이메일 형식이 아닙니다.");
    return;
  }
});
