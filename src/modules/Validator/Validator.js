import JsonValidation from './JsonValidation/JsonValidation';
import ArrayValidation from './ArrayValidation/ArrayValidation';

const Validation = (data, error) => {
    if (error.message !== undefined) {
        return;
    }

    if (!JsonValidation(data, error)) {
        return;
    }

    const obj = JSON.parse(data);
    ArrayValidation(obj, error)
};

export default Validation;
