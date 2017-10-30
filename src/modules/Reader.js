const fs = require('fs');

export default class Reader {
    constructor() {
        this._input = null;
        this._output = null;
    }

    read() {
        const args = process.argv;
        console.log(args);

        this._input = args[2] !== undefined ? Reader.readFromFile(args[2]) : Reader.readFromStdin();
        this._output = args[3] !== undefined ? Reader.readFromFile(args[3]) : null;
    }

    static readFromFile(file) {
        return fs.readFileSync(file, 'utf8');
    }

    static readFromStdin() {
        let result = '';
        process.stdin.setEncoding('utf8');

        process.stdin.on('readable', () => {
            const chunk = process.stdin.read();
            if (chunk !== null) {
                result += chunk;
            }
        });

        return result;
    }
};
