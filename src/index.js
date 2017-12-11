import Reader from './modules/Reader/Reader';
import Validator from './modules/Validator/Validator';
import Table from './modules/Table/Table';
import Solver from './modules/Solver/Solver';

import {START, NO_SOLUTION} from './Constants/Messages';

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

const solution = solver.search();
if (solution === null) {
    console.log(NO_SOLUTION);
} else {
    console.log(solution.join('\n\n'));
}
