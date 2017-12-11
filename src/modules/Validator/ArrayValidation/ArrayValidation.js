import {MATRIX_ERROR, MATRIX_MIN_SIZE, INVALID_CELL} from '../../../Constants/Messages';

export default function ArrayValidation(data, error) {
    if (!Array.isArray(data)) {
        error.message = MATRIX_ERROR;
        return false;
    }
    if (data.length === 0) {
        error.message = MATRIX_ERROR;
        return false;
    }
    if (data.length === 1) {
        error.message = MATRIX_MIN_SIZE;
    }
    if (!data.every(Array.isArray)) {
        error.message = MATRIX_ERROR;
        return false;
    }

    const valid = data.reduce((valid, element) => {
        return valid * element.every(Number.isInteger);
    }, true);
    if (!valid) {
        error.message = INVALID_CELL;
        return false;
    }
    return true;
}
