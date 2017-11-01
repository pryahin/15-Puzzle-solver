import Solver from './modules/Solver/Solver';
import Generator from './modules/Generator/Generator';
import Table from './modules/Table/Table';

const args = process.argv;

const table = new Table(Generator(args[2], args[3]).matrix);

const solver = new Solver(table);

const solution = solver.search();
if (solution === null) {
    console.log('Нет решения');
} else {
    console.log(solution.join('\n\n'));
}
