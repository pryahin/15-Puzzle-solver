import Reader from './modules/Reader/Reader';
import Validator from './modules/Validator/Validator';
import Table from './modules/Table/Table';
import Solver from './modules/Solver/Solver';

const error = {};
const reader = new Reader(error);

reader.read();

Validator(reader.input, error);

if (error.message !== undefined) {
    console.log(error);
    process.exit();
}

console.log('start...');
const input = JSON.parse(reader.input);

const table = new Table(input);
const solver = new Solver(table);

const solution = solver.search();
if (solution === null) {
    console.log('Нет решения');
} else {
    console.log(solution.join('\n\n'));
}
