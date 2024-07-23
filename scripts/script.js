window.onload = function () {
  const fullName = document.getElementById("fullName");
  fullName.onkeydown = (event) => {
    if ("1234567890".indexOf(event.key) != -1) event.preventDefault();
  };

  const userName = document.getElementById("userName");
  userName.onkeydown = (event) => {
    if (",.".indexOf(event.key) != -1) {
      event.preventDefault();
    }
  };

  const formAgree = document.getElementById("form-agree");
  formAgree.onchange = function () {
    console.log(this.checked ? "Согласен" : "Не согласен");
  };

  const mainForm = document.getElementById("main-form");
  const mainTitle = document.getElementById("mainTitle");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const mainLink = document.getElementById("mainLink");
  const singUpButton = document.getElementById("form-button");
  const closePopUpButton = document.getElementById("popup-button");
  const popUp = document.getElementById("popup");

  function validateSingUp() {
    if (!fullName.value) {
      alert("Заполните поле Full Name:)");
      return;
    }
    if (!userName.value) {
      alert("Заполните поле Your username:)");
      return;
    }
    if (!email.value) {
      alert("Заполните поле E-mail:)");
      return;
    }
    if (!password.value) {
      alert("Заполните поле Password:)");
      return;
    }

    if (password.value.length < 8) {
      alert("Ваш пароль меньше 8 символов, придумайте новый пароль:)");
      return;
    }

    if (!confirmPassword.value) {
      alert("Заполните поле Repeat Password:)");
      return;
    }
    if (password.value !== confirmPassword.value) {
      alert("Введенные пароли не совпадают:)");
      return;
    }
    if (formAgree.checked == false) {
      alert("Необходимо принять Terms of Service and Privacy Statement:)");
      return;
    }

    popUp.classList.add("open");
  }

  function validateSingIn() {
    if (!userName.value) {
      alert("Заполните поле Your username:)");
      return;
    }
    if (!password.value) {
      alert("Заполните поле Password:)");
      return;
    }
    if (userName.value && password.value) {
      alert("Добро пожаловать, " + userName.value + "!");
      return;
    }
  }

  singUpButton.addEventListener("click", validateSingUp);

  const fullNameDiv = document.getElementById("fullNameDiv");
  const emailDiv = document.getElementById("emailDiv");
  const comfPassDiv = document.getElementById("comfPassDiv");
  const formAgreeDiv = document.getElementById("formAgreeDiv");

  function logIn() {
    mainTitle.innerText = "Log in to the system";
    fullNameDiv.remove();
    emailDiv.remove();
    comfPassDiv.remove();
    formAgreeDiv.remove();
    mainLink.remove();
    singUpButton.innerText = "Sing In";
    singUpButton.removeEventListener("click", validateSingUp);
    singUpButton.addEventListener("click", validateSingIn);
  }

  closePopUpButton.onclick = () => {
    popUp.classList.remove("open");
    mainForm.reset();
    logIn();
  };

  mainLink.onclick = logIn;

  console.log("change script.js in dev-2");
};
