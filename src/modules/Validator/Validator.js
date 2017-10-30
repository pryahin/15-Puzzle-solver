import JsonValidation from './JsonValidation/JsonValidation';
import ArrayValidation from './ArrayValidation/ArrayValidation';
import ContentValidation from './ContentValidation/ContentValidation';

const Validation = (data, error) => {
    if (error.message !== undefined) {
        return;
    }

    if (!JsonValidation(data, error)) {
        return;
    }

    const obj = JSON.parse(data);
    if (!ArrayValidation(obj, error)) {
        return;
    }

    ContentValidation(obj, error);
};

export default Validation;
