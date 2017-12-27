import Solver from './modules/Solver/Solver';
import Validator from './modules/Validator/Validator';
import Table from './modules/Table/Table';
import Reader from './modules/Reader/Reader';

import {NO_SOLUTION, OK, ERROR} from './Constants/Messages';

for (let i = 1; i < 16; i++) {
    const error = {};
    const reader = new Reader(error);

    reader.read([null, null, `test/inputs/${i}.txt`, `test/outputs/${i}.txt`]);

    Validator(reader.input, error);
    if (error.message !== undefined) {
        console.log(`Test #${i}: ${JSON.stringify(error) === reader.output ? OK : ERROR}`);
    } else {
        const input = JSON.parse(reader.input);

        const table = new Table(input);
        const solver = new Solver(table);

        process.stdout.write(`Test #${i}: `);

        const solution = solver.search() === null ? NO_SOLUTION : OK;

        console.log(solution === reader.output ? OK : ERROR);
    }
}
