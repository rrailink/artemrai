// Элементы
const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');

// ОбЬявляем функции

// Добавления задач
form.addEventListener('submit', addTask);
// DELETE задачи
tasksList.addEventListener('click', deleteTask);
// DONE задачи
tasksList.addEventListener('click', doneTask);

// Функции
function addTask(e) {
    e.preventDefault();

    // Достаем текст из поля ввода
    const taskText = taskInput.value;

    // Формируем шаблон новой задачи
    const taskHTML = `
                        <li class="list-group-item d-flex justify-content-between task-item">
                        <span class="task-title">${taskText}</span>
                        <div class="task-item__buttons">
                            <button type="button" data-action="done" class="btn-action">
                                <img src="./img/tick.svg" alt="Done" width="18" height="18">
                            </button>
                            <button type="button" data-action="delete" class="btn-action">
                                <img src="./img/cross.svg" alt="Done" width="18" height="18">
                            </button>
                        </div>
                    </li>
                    `;

    // Добавляем на страницу
    tasksList.insertAdjacentHTML('beforeend', taskHTML);

    // Очищаем поле ввода
    taskInput.value = "";
    taskInput.focus();

    // Убираем "Список дел пуст" 
    if (tasksList.children.length > 1) {
        emptyList.classList.add('none');
    }
}

function deleteTask(e) {
    // Проверяем если клик был не по delete
    if (e.target.dataset.action !== 'delete') return;

    // Проверяем, что нажали на кнопку delete
    const parentNode = e.target.closest('.list-group-item');
    parentNode.remove();

    // Возвращаем "Список дел пуст"
    if (tasksList.children.length === 1) {
        emptyList.classList.remove('none');
    }
}

function doneTask(e) {
    // Проверяем, что нажали на иконки
    if (e.target.dataset.action === 'done') {
        const parentNode = e.target.closest('.list-group-item');
        const taskTitle = parentNode.querySelector('.task-title');
        taskTitle.classList.toggle('task-title--done');
    }    
}