export default class PriorityQueue {
    constructor() {
        this.data = new Map();
    }

    _heapify(i) {
        const l = (i * 2) + 1;
        const r = (i * 2) + 2;
        let largest = l < this.data.length && this.data[l].f < this.data[i].f ? l : i;
        if (r < this.data.length && this.data[r].f < this.data[largest].f) {
            largest = r;
        }
        if (largest !== i) {
            ([this.data[i], this.data[largest]] = [this.data[largest], this.data[i]]);
            this._heapify(largest);
        }
    }

    get size() {
        return this.data.length;
    }

    get(unique) {
        return this.data.find((el, i) => el.getUnique() === unique);
    }

    _Parent(i) {
        return Math.floor((i - 1) / 2);
    }

    push(element) {
        let i = this.data.length;
        while (i > 0 && this.data[this._Parent(i)].f < element.f) {
            this.data[i] = this.data[this._Parent(i)];
            i = this._Parent(i);
        }
        this.data[i] = element;
    }

    extractMin() {
        if (this.data.length <= 0) {
            return null;
        }
        const min = this.data[0];
        this.data[0] = this.data.pop();
        this._heapify(0);
        return min;
    }
}