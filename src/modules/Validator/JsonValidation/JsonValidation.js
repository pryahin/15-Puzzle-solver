import {NOT_JSON} from '../../../Constants/Messages';

export default function JsonValidation(data, error) {
    try {
        JSON.parse(data);
    } catch (e) {
        error.message = NOT_JSON;
        return false;
    }
    return true;
}
