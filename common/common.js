// Функция для генерации случайного целого числа в заданном диапазоне
function getRandomInteger(min, max) {
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
  }

  // Функция для возврата назад
  function returnBack() {
	history.back();
	return false;
  }
  
 // Функция для отображения страницы с правилами
function showRulesPage(pageUrl) {
    window.location.href = pageUrl;
}

// Функция для возврата назад
function returnBack() {
    history.back();
    return false;
}

// Создаем кнопки "помощь" и "выход" при загрузке страницы
window.onload = function () {
    // Создаем кнопку "помощь"
    let helpElement = document.createElement('button');
    helpElement.setAttribute('id', "help");
    helpElement.innerText = "?";
    helpElement.onclick = function() {
        // Проверяем текущий URL страницы
        if (window.location.href.includes("winter.html")) {
            // Если текущая страница - winter.html, открываем страницу с правилами для зимы
            showRulesPage("winterhelp.html");
        } else if (window.location.href.includes("flowers.html")) {
            // Если текущая страница - spring.html, открываем страницу с правилами для весны
            showRulesPage("springhelp.html");
        } else if (window.location.href.includes("summer.html")) {
            // Если текущая страница - spring.html, открываем страницу с правилами для весны
            showRulesPage("summerhelp.html");
        } else if (window.location.href.includes("autumn.html")) {
            // Если текущая страница - spring.html, открываем страницу с правилами для весны
            showRulesPage("autumnhelp.html");
        } else if (window.location.href.includes("bear.html")) {
            // Если текущая страница - spring.html, открываем страницу с правилами для весны
            showRulesPage("bearhelp.html");
        } else if (window.location.href.includes("bunny.html")) {
            // Если текущая страница - spring.html, открываем страницу с правилами для весны
            showRulesPage("bunnyhelp.html");
        } else if (window.location.href.includes("fish.html")) {
            // Если текущая страница - spring.html, открываем страницу с правилами для весны
            showRulesPage("fishhelp.html");
        } else if (window.location.href.includes("squirrel.html")) {
            // Если текущая страница - spring.html, открываем страницу с правилами для весны
            showRulesPage("squirrelhelp.html");
        } else if (window.location.href.includes("car.html")) {
            // Если текущая страница - spring.html, открываем страницу с правилами для весны
            showRulesPage("carhelp.html");
        } else if (window.location.href.includes("chicken.html")) {
            // Если текущая страница - spring.html, открываем страницу с правилами для весны
            showRulesPage("chickenhelp.html");
        } else if (window.location.href.includes("map.html")) {
            // Если текущая страница - spring.html, открываем страницу с правилами для весны
            showRulesPage("maphelp.html");
        } else if (window.location.href.includes("vases.html")) {
            // Если текущая страница - spring.html, открываем страницу с правилами для весны
            showRulesPage("vaseshelp.html");
        } else if (window.location.href.includes("code.html")) {
            // Если текущая страница - spring.html, открываем страницу с правилами для весны
            showRulesPage("codehelp.html");
        } else if (window.location.href.includes("folders.html")) {
            // Если текущая страница - spring.html, открываем страницу с правилами для весны
            showRulesPage("foldershelp.html");
        } else if (window.location.href.includes("loading.html")) {
            // Если текущая страница - spring.html, открываем страницу с правилами для весны
            showRulesPage("loadinghelp.html");
        } else if (window.location.href.includes("net.html")) {
            // Если текущая страница - spring.html, открываем страницу с правилами для весны
            showRulesPage("nethelp.html");
        } 
    };
    document.body.prepend(helpElement);

    // Создаем кнопку "выход"
    let exitElement = document.createElement('button');
    exitElement.setAttribute('id', "exit");
    exitElement.innerText = "×";
    exitElement.onclick = returnBack;
    document.body.prepend(exitElement);

    // Инициализация задачи
    setTask(); // Предполагается, что у вас уже есть функция setTask()
};
