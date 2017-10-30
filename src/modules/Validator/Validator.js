import JsonValidation from './JsonValidation/JsonValidation';

const Validation = (data, error) => {
    JsonValidation(data, error);

    return error;
};

export default Validation;
