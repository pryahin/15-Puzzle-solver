const fs = require('fs');

export default class Reader {
    constructor() {
        this._input = null;
        this._output = null;
    }

    read() {
        const args = process.argv;

        try {
            this._input = Reader.read(args[2]);
            this._output = args[3] !== undefined ? Reader.read(args[3]) : null;
        } catch (e) {
            console.log('Файл не найден');
        }
    }

    static read(file = '/dev/stdin') {
        return fs.readFileSync(file, 'utf8').toString();
    }

    get input() {
        return this._input;
    }

    get output() {
        return this._output;
    }
}
