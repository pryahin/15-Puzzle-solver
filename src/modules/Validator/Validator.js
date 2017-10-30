import JsonValidation from './JsonValidation/JsonValidation';

const Validation = (data, error) => {
    if (error.message !== undefined) {
        return;
    }

    JsonValidation(data, error);
};

export default Validation;
