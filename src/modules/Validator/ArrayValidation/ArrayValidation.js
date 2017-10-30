export default function ArrayValidation(data, error) {
    if (!Array.isArray(data)) {
        error.message = 'Входные данные должны быть массивом';
        return false;
    }
    if (!data.every(Array.isArray)) {
        error.message = 'Входные данные должны быть массивом массивов';
        return false;
    }
    const valid = data.reduce((valid, element) => {
        return valid * element.every(Number.isInteger);
    }, true);

    if (!valid) {
        error.message = 'Массивы должны состоять только из цифр!';
        return false;
    }
    return true;
}
