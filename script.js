document.addEventListener('DOMContentLoaded', () => {
    const messages = document.getElementById('messages');
    const responseOptions = document.getElementById('response-options');

    // Функция для отображения сообщения
    function addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = sender === 'bot' ? 'message-bot' : 'message-user';
        messageDiv.textContent = content;
        messages.appendChild(messageDiv);
        messages.scrollTop = messages.scrollHeight; // Прокрутка к самому низу
    }

    // Начальное сообщение от бота
    addMessage("Здравствуйте, это Григорий?", 'bot');

    // Обработка нажатия кнопок
    document.getElementById('accept-btn').addEventListener('click', () => {
        addMessage('Вы приняли звонок.', 'user');
        buttons.style.display = `none`;
    });

    document.getElementById('decline-btn').addEventListener('click', () => {
        addMessage('Звонок отклонён.', 'user');
        buttons.style.display = `none`;
    });

    document.getElementById('tele2-icon').addEventListener('click', () => {
        showResponseOptions();
    });

    // Функция для отображения вариантов ответа
    function showResponseOptions() {
        responseOptions.innerHTML = ''; // Очистка предыдущих вариантов
        const options = [
            'Здравствуйте, да, что вы хотите?',
            //'Мне неинтересно.',
            //'Где я могу узнать больше?'
        ];
        options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.addEventListener('click', () => {
                addMessage(option, 'user');
                addMessage("Мы хотим предложить вам кредит со ставкой 15% годовых.", 'bot');
                responseOptions.innerHTML = ''; // Очистка после выбора
            });
            responseOptions.appendChild(button);
        });
    }
});