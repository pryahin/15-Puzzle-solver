export default class Solver {
    constructor(table) {
        this.closed = new Map();
        this.opened = new Map();

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
        return true;
    }

    _getChain(solution) {
        const result = [];
        while (solution) {
            result.push(solution.printPretty());
            solution = solution.parent;
        }
        return result.reverse();
    }

    search() {
        if (!this.isSolveable()) {
            return false;
        }

        while (this.opened.size !== 0) {
            const curNode = this.getMin();

            if (curNode.isSolve()) {
                return this._getChain(curNode);
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
