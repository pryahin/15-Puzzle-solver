import Reader from './modules/Reader/Reader';
import Validator from './modules/Validator/Validator';

const reader = new Reader();
let error = {};

reader.read();

Validator(reader.input, error);

console.log(error);
