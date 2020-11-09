// ЗДЕСЬ БУДУТ КАСТОМНЫЕ ОШИБКИ; этот вариант работает!! Но нужно исправить тексты!
    export default function setCustomValidity (target) {
        target.setCustomValidity('');

        if (!target.validity.valid){
             if (target.validity.valueMissing) {
                target.setCustomValidity('Это поле обязательно');
            } else if (target.validity.tooShort) {
                target.setCustomValidity(`Введенное значение должно быть длинее ${target.minLength} символов`);
            } else if (target.validity.tooLong) {
                target.setCustomValidity(`Введенное значение должно быть короче ${target.maxLength} символов`)
            } else if (target.name === 'email' & target.validity.patternMismatch) {
                target.setCustomValidity('Неверное значение: почта должна быть введена в формате "example@mail.ru"')
            } else if (target.name === 'tel' & target.validity.patternMismatch) {
                target.setCustomValidity('Неверное значение: телефон может содержать только цифры')
            } 
        } 
    }

  