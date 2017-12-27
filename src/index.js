import Reader from './modules/Reader/Reader';
import Validator from './modules/Validator/Validator';
import Table from './modules/Table/Table';
import Solver from './modules/Solver/Solver';

import {START, NO_SOLUTION, SEPARATOR} from './Constants/Messages';

const short = process.env.npm_config_short || false;

const error = {};
const reader = new Reader(error);

reader.read();

Validator(reader.input, error);

if (error.message !== undefined) {
    console.log(JSON.stringify(error));
    process.exit();
}

console.log(START);
const input = JSON.parse(reader.input);

const table = new Table(input);
const solver = new Solver(table);

const solution = solver.search(short);
if (solution === null) {
    console.log(NO_SOLUTION);
} else {
    console.log(solution.join(short ? SEPARATOR : '\n\n'));
}
