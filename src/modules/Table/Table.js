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

    moveZero({x: _x = this.zero.x, y: _y = this.zero.y}) {
        if (_x < this.dimension && _y < this.dimension && _x > -1 && _y > -1) {
            const copyMatrix = this.matrix.slice();
            [copyMatrix[this.zero.y][this.zero.x], copyMatrix[_y][_x]] = [copyMatrix[_y][_x], copyMatrix[this.zero.y][this.zero.x]];
            return new Table(copyMatrix);
        }
        return null;
    }
}
