// Объявляем функцию рекурсию
function numberCount (value) {
    if (value > 0) {
        console.log(value);
        return numberCount(value - 1);
    } else {
        return value;
    }
};

// Вызываем
numberCount(9);
