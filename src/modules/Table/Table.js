class Table {
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
}
