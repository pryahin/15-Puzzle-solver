import Solver from './modules/Solver/Solver';
import Generator from './modules/Generator/Generator';
import Table from './modules/Table/Table';

import {NO_SOLUTION} from './Constants/Messages';

const args = process.argv;

const table = new Table(Generator(args[2], args[3]).matrix);
console.log(`${table.printPretty()}\n__________\n`);
const solver = new Solver(table);

const solution = solver.search();
if (solution === null) {
    console.log(NO_SOLUTION);
} else {
    console.log(solution.join('\n\n'));
}
