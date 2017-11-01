import Table from './../Table/Table';

export default function generatePass(size = 4, count = 20) {
    const start = Array.from(new Array((size ** 2) - 1), (val, index) => index + 1);
    start.push(0);

    const matrix = [];

    for (let i = 0; i < size; i++) {
        matrix.push(start.slice(i * size, (i + 1) * size));
    }

    let result = new Table(matrix);

    while (count > 0) {
        const next = result.nextStages();
        const rand = Math.floor(Math.random() * next.length);
        result = next[rand];
        --count;
    }
    return result;
}

function generateNoPass(size = 4, count = 40) {
    const start = Array.from(new Array((size ** 2) - 1), (val, index) => index + 1);
    ([start[(size ** 2) - 3], start[(size ** 2) - 2]] = [start[(size ** 2) - 2], start[(size ** 2) - 3]]);
    start.push(0);

    const matrix = [];

    for (let i = 0; i < size; i++) {
        matrix.push(start.slice(i * size, (i + 1) * size));
    }

    let result = new Table(matrix);

    while (count > 0) {
        const next = result.nextStages();
        const rand = Math.floor(Math.random() * next.length);
        result = next[rand];
        --count;
    }
    return result;
}
