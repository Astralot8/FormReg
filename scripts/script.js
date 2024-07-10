// 1. Создайте обработчик события полной загрузки страницы и добавляйте новый код только в эту функцию. Внимание, в этом случае невозможно будет использовать подход с указанием функции в атрибуте html. То есть в JS коде вам надо находить элементы, и для них создавать функции-обработчики нужных событий.

window.onload = function(){

    // 2. В поле "Full Name" запретите вводить цифры.
    const fullName = document.getElementById('fullName');
    fullName.onkeydown = (event) => {
        if ('1234567890'.indexOf(event.key) != -1)
            event.preventDefault();
    }

    // 3. В поле "Your username" запретите вводить точки и запятые.
    const userName = document.getElementById('userName');
    userName.onkeydown = (event) => {
        if(',.'.indexOf(event.key) != -1){
            event.preventDefault();
        }
    }

    // 4. При изменении значения чекбокса выводите в консоль соответствующее сообщение: “Согласен” или “Не согласен”.
    const formAgree= document.getElementById('form-agree');
    formAgree.onchange = function(){
        console.log(this.checked ? "Согласен" : "Не согласен");
    }

    // 5. При нажатии на кнопку “Sign Up”:
    // • Проверьте на существование значения в каждом текстовом поле. Если какое-то поле не заполнено, выведите сообщение об ошибке, используя alert. Сообщение должно быть следующего вида: "Заполните поле E-mail".
    // • Пароль должен содержать не менее 8 символов. Если пароль короче, то выведите сообщение об ошибке через alert.
    // • Проверьте совпадают ли пароли из двух текстовых полей. Если пароли не совпадают, выведите сообщение об ошибке, используя alert.
    // • Проверьте выбран ли чекбокс. Если чекбокс не выбран, выведите сообщение об ошибке, используя alert.
    // • Если код прошёл все проверки успешно - должен появиться попап с текстом «На вашу почту выслана ссылка, перейдите по ней, чтобы завершить регистрацию» и кнопкой «ОК». При нажатии на кнопку «ОК» окно закрывается, форма очищается и пользователя перебрасывает на страницу логина (см. п.6). Модального окна в макете нет, его нужно создать самостоятельно, соблюдая общую стилистику макета.

    // 6. При нажатии на ссылку «Already have an account?», а также на кнопку «ОК» в попапе реализовать имитацию перехода на страницу логина. Для этого с исходной страницей с помощью JS нужно произвести следующие действия:
    // • Текст "Get your free account" заменить на "Log in to the system".
    // • Блоки с полями "Full Name", "E-mail", "Repeat Password" удалить.
    // • Блок с чекбоксом также удалить.
    // • Текст в кнопке заменить на «Sign In».
    // • Ссылку "Already have an account?" удалить.
    // • Заменить слушатель события для кнопки «Sign In»: нужно проверить только то, что оба поля (Username и Password) заполнены. Если какое-то из полей не заполнено - вывести ошибку. Если оба заполнены - вывести через alert сообщение "Добро пожаловать, username!", где username - значение из соответствующего поля.

    // При обработке нажатия на кнопку “Sign Up” можно пойти 2 путями (на выбор):
    // 1. Сделать кнопку в форме type="button" и обрабатывать событие нажатия на кнопку
    // 2. Сделать кнопку в форме type="submit" и обрабатывать событие отправки формы с предотвращением отправки в случае ошибок

    const mainForm = document.getElementById('main-form');
    const mainTitle = document.getElementById('mainTitle');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const mainLink = document.getElementById('mainLink');
    const singUpButton = document.getElementById('form-button');
    const closePopUpButton= document.getElementById('popup-button');
    const popUp = document.getElementById('popup');
    
    // function validation(form) {
    //     let result = true;
    //     const allInputs = document.querySelectorAll('input');
    //     for (const input of allInputs) {
    //         if (input.value == "" || formAgree.checked == false){
    //             result = false;
    //         }
    //     }
    //     return result;
    // };

    function validateSingUp () {
        if(!fullName.value){
            alert('Заполните поле Full Name.');
            return;
        }
        if(!userName.value){
            alert('Заполните поле Your username.');
            return;
        }
        if(!email.value){
            alert('Заполните поле E-mail.');
            return;
        }
        if(!password.value){
            alert('Заполните поле Password.');
            return;
        }

        if(password.value.length < 8){
            alert('Ваш пароль меньше 8 символов, придумайте новый пароль.');
            return;
        };

        if(!confirmPassword.value){
            alert('Заполните поле Repeat Password.');
            return;
        }
        if(password.value !== confirmPassword.value){
            alert('Введенные пароли не совпадают.')
            return;
        }
        if(formAgree.checked == false){
            alert('Необходимо принять Terms of Service and Privacy Statement');
            return;
        }

        popUp.classList.add('open');

    };

    function validateSingIn(){
        if(!userName.value){
            alert('Заполните поле Your username.');
            return;
        }
        if(!password.value){
            alert('Заполните поле Password.');
            return;
        }
        if(userName.value && password.value){
            alert('Добро пожаловать, ' + userName.value + '!');
            return;
        }
    }

    singUpButton.addEventListener('click', validateSingUp);

    const fullNameDiv = document.getElementById('fullNameDiv');
    const emailDiv = document.getElementById('emailDiv');
    const comfPassDiv = document.getElementById('comfPassDiv');
    const formAgreeDiv = document.getElementById('formAgreeDiv');
    

    function logIn(){
        mainTitle.innerText = "Log in to the system";
        fullNameDiv.remove();
        emailDiv.remove();
        comfPassDiv.remove();
        formAgreeDiv.remove();
        mainLink.remove();
        singUpButton.innerText = "Sing In";
        singUpButton.removeEventListener('click', validateSingUp);
        singUpButton.addEventListener('click', validateSingIn);
    }

    closePopUpButton.onclick = () => {
        popUp.classList.remove('open');
        mainForm.reset();
        logIn();
    };

    mainLink.onclick = logIn;
};


