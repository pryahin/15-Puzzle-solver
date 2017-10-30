import Reader from './modules/Reader/Reader';
import Validator from './modules/Validator/Validator';

const error = {};
const reader = new Reader(error);

reader.read();

Validator(reader.input, error);

console.log(error);
