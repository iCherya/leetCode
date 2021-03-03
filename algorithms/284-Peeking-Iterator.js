class PeekingIterator {
    constructor(iterator) {
        this.iterator = iterator;
        this.nextElement = this._next();
    }
    _next() {
        return this.iterator.hasNext() ? this.iterator.next() : null;
    }
    peek() {
        return this.nextElement;
    }
    next() {
        const next = this.nextElement;
        this.nextElement = this._next();
        return next;
    }
    hasNext() {
        return this.nextElement !== null;
    }
}
