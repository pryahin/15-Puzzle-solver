export default class Table {
    constructor(matrix) {
        this.matrix = matrix;
        this.dimension = matrix.length;
        this.h = 0;
        this.zero = {x: 0, y: 0};

        this.matrix.forEach((line, yIndex) => {
            line.forEach((element, xIndex) => {
                if (element !== ((yIndex * this.dimension) + xIndex + 1)) {
                    if (element === 0) {
                        this.zero = {x: xIndex, y: yIndex};
                    } else {
                        this.h++;
                    }
                }
            });
        });
    }

    moveZero({x: x = this.zero.x, y: y = this.zero.y}) {
        if (x < this.dimension && y < this.dimension && x > -1 && y > -1) {
            const copyMatrix = this.matrix.map(arr => arr.slice());
            ([copyMatrix[this.zero.y][this.zero.x], copyMatrix[y][x]] = [copyMatrix[y][x], copyMatrix[this.zero.y][this.zero.x]]);
            return new Table(copyMatrix);
        }
        return null;
    }

    nextStages() {
        const result = [];
        result.push(this.moveZero({x: this.zero.x - 1}));
        result.push(this.moveZero({x: this.zero.x + 1}));
        result.push(this.moveZero({y: this.zero.y - 1}));
        result.push(this.moveZero({y: this.zero.y + 1}));
        return result.filter(el => el !== null);
    }
}
