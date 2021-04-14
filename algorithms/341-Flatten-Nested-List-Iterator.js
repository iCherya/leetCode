/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
class NestedIterator {
    constructor(nestedList) {
        this.data = [];
        this.traverse(nestedList);
    }

    traverse(list) {
        list.forEach((element) => {
            if (element.isInteger()) {
                this.data.push(element.getInteger());
            } else {
                this.traverse(element.getList());
            }
        });
    }

    hasNext() {
        return this.data.length;
    }

    next() {
        return this.data.shift();
    }
}
