// Задание 3. Напишите функцию которая рандомно возвращает 
// значение цвета в формате #FFFFFF

// Объявляем функцию генерации цвета
function getColor () {
    var symbols = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += symbols[Math.floor(Math.random() * 16)];
    };
    return color;
};

// Выводим 
console.log(getColor());
