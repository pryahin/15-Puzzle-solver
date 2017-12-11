import {MATRIX_SIZE, INCORRECT_NUMBER, REPEAT_NUMBER} from '../../../Constants/Messages';

export default function ContentValidation(arr, error) {
    const COUNT = arr.length ** 2;

    if (!arr.every(element => element.length === arr.length)) {
        error.message = MATRIX_SIZE;
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
        error.message = INCORRECT_NUMBER;
        return false;
    }

    if (set.size !== COUNT) {
        error.message = REPEAT_NUMBER;
        return false;
    }

    return true;
}
