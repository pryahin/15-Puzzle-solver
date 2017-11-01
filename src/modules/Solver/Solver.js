class Solver {
    constructor(table) {
        this.closed = new Map();
        this.opened = new Map();

        this.opened.set(table.getUnique(), table);
    }

    getMin() {
        return [...this.opened.keys()].reduce((curMin, key) => {
            return Math.min(curMin, this.opened.get(key).f);
        }, +Infinity);
    }

    isSolveable() {
        return true;
    }

    _getChain(solution) {
        const result = [];
        while (solution) {
            result.push(solution.matrix);
            solution = solution.parent;
        }
        return result.reverse();
    }

    start() {
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
        }
    }
}
