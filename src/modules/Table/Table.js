export default class Table {
    constructor(matrix, parent = null) {
        this.parent = parent;
        this.matrix = matrix;
        this.dimension = matrix.length;
        this.h = 0;
        this.zero = {x: 0, y: 0};
        this.unique = this.matrix.toString();

        this.matrix.forEach((line, yIndex) => {
            line.forEach((element, xIndex) => {
                if (element !== ((yIndex * this.dimension) + xIndex + 1)) {
                    if (element === 0) {
                        this.zero = {x: xIndex, y: yIndex};
                    } else {
                        const Y = Math.floor((element - 1) / this.dimension);
                        const X = element - 1 - (Y * this.dimension);
                        this.h += Math.abs(yIndex - Y) + Math.abs(xIndex - X);
                    }
                }
            });
        });

        this.g = parent ? parent.g + 1 : 0;
        this.f = this.g + this.h;
    }

    moveZero({x = this.zero.x, y = this.zero.y}) {
        if (x < this.dimension && y < this.dimension && x > -1 && y > -1) {
            const copyMatrix = this.matrix.map(arr => arr.slice());
            ([copyMatrix[this.zero.y][this.zero.x], copyMatrix[y][x]] = [copyMatrix[y][x], copyMatrix[this.zero.y][this.zero.x]]);
            return new Table(copyMatrix, this);
        }
        return null;
    }

    nextStages() {
        const result = [];
        result.push(this.moveZero({x: this.zero.x + 1}));
        result.push(this.moveZero({y: this.zero.y + 1}));
        result.push(this.moveZero({x: this.zero.x - 1}));
        result.push(this.moveZero({y: this.zero.y - 1}));
        return result.filter(el => el !== null);
    }

    isSolve() {
        return this.h === 0;
    }

    getUnique() {
        return this.unique;
    }

    print() {
        const result = [];
        this.matrix.forEach(line => {
            result.push(line.join('\t'));
        });

        return result.join('\n');
    }

    printPretty() {
        // const paddingLength = (this.dimension ** 2).toString().length + 1;
        const paddingLength = Math.floor(Math.log10((this.dimension ** 2))) + 2;
        const result = [];
        this.matrix.forEach(line => {
            result.push(line.reduce((acc, num) => {
                return acc + num.toString().padStart(paddingLength);
            }, ''));
        });

        return result.join('\n');
    }
}
