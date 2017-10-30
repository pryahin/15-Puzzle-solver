export default function ContentValidation(arr, error) {
    const COUNT = arr.length ** 2;

    if (!arr.every(element => element.length === arr.length)) {
        error.message = 'Матрица должны быть размером NxN';
        return false;
    }

    const set = new Set();

    const valid = arr.reduce((valid, element) => {
        return valid * element.every(num => {
            set.add(num);
            return num >= 0 && num < COUNT;
        });
    }, true);

    if (!valid) {
        error.message = 'Некорректные числа';
        return false;
    }

    if (set.size !== COUNT) {
        error.message = 'Не должно быть повторений!';
        return false;
    }

    return true;
}
