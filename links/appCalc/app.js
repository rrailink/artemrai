// Слушаем переменную дисплея
let screen = document.getElementById('screen');

// Функция клика по кнопкам
function btnClick(value){
    screen.value += value;
}

// Функция очистики дисплея
function clearScreen(){
    screen.value = "";
}

// Функция математического вычесления результата
function findResult(){
    let result = eval(screen.value);
    screen.value = result;
}