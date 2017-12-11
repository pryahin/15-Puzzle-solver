import Solver from './modules/Solver/Solver';
import Validator from './modules/Validator/Validator';
import Table from './modules/Table/Table';
import Reader from './modules/Reader/Reader';

import {NO_SOLUTION} from './Constants/Messages';

for (let i = 1; i < 12; i++) {
    const error = {};
    const reader = new Reader(error);

    reader.read([null, null, `test/inputs/${i}.txt`, `test/outputs/${i}.txt`]);

    Validator(reader.input, error);
    if (error.message !== undefined) {
        if (JSON.stringify(error) === reader.output) {
            console.log(`Test #${i}: OK!`);
        } else {
            console.log(`Test #${i}: Error`);
        }
    } else {
        const input = JSON.parse(reader.input);

        const table = new Table(input);
        const solver = new Solver(table);

        const solution = solver.search() === null ? NO_SOLUTION : 'OK';

        if (solution === reader.output) {
            console.log(`Test #${i}: OK!`);
        } else {
            console.log(`Test #${i}: Error`);
        }
    }
}
