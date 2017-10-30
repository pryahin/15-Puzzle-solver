import Reader from './modules/Reader/Reader';
import Validator from './modules/Validator/Validator';

const error = {};
const reader = new Reader(error);

reader.read();

Validator(reader.input, error);

if (error.message !== undefined) {
    console.log(error);
    process.exit();
}

const input = JSON.parse(reader.input);

console.log(input);
