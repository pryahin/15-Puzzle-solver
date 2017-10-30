export default function JsonValidation(data, error) {
    try {
        JSON.parse(data);
    } catch (e) {
        error.message = 'Некорректный формат входных данных';
        return false;
    }
    return true;
}
