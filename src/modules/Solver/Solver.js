import PriorityQueue from './../../modules/PriorityQueue/PriorityQueue';

export default class Solver {
    constructor(table) {
        this.closed = new Map();
        this.opened = new Map();
        this.length = table.matrix.length;

        this.opened.set(table.getUnique(), table);
    }

    getMin() {
        return this.opened.get([...this.opened.keys()].reduce((curMin, key) => {
            const f = this.opened.get(key).f;
            if (f < curMin.min) {
                curMin.min = f;
                curMin.key = key;
            }
            return curMin;
        }, {
            min: +Infinity,
            key: null
        }).key);
    }

    isSolveable() {
        const curNode = this.getMin();
        const array = curNode.getUnique().split(',').map(val => +val);

        let n = curNode.zero.y + 1;
        array.forEach((value, index) => {
            if (value !== 0) {
                for (let i = index + 1; i < array.length; i++) {
                    if (array[i] < value && array[i] !== 0) {
                        n++;
                    }
                }
            }
        });
        return n % 2 === 0;
    }

    _getChain(solution, short = false) {
        const result = [];
        while (solution) {
            result.push(short ? (solution.zero.y * solution.dimension) + solution.zero.x + 1 : solution.printPretty());
            solution = solution.parent;
        }
        return result.reverse();
    }

    search(short = false) {
        if (this.length === 4) {
            if (!this.isSolveable()) {
                return null;
            }
        }

        while (this.opened.size !== 0) {
            const curNode = this.getMin();
            // console.log(`opened: ${this.opened.size} closed: ${this.closed.size} table: ${curNode.getUnique()}`);

            if (curNode.isSolve()) {
                return this._getChain(curNode, short);
            }

            this.opened.delete(curNode.getUnique());
            this.closed.set(curNode.getUnique(), curNode);

            const nextStages = curNode.nextStages();
            nextStages.forEach(table => {
                if (this.closed.has(table.getUnique())) {
                    return;
                }
                const repeat = this.opened.get(table.getUnique());
                if (!repeat) {
                    this.opened.set(table.getUnique(), table);
                } else {
                    if (table.g < repeat.g) {
                        this.opened.set(table.getUnique(), table);
                    }
                }
            });
        }

        return null;
    }
}
