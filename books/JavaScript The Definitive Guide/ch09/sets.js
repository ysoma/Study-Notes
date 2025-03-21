/**
 * AbstractSetクラスでは、has()抽象メソッドのみを定義する
 */
class AbstractSet {
    has(x) { throw new Error("Abstract method"); }
}

/**
 * NotSetは、AbstractSetの具象サブクラス
*/
class NotSet extends AbstractSet {
    constructor(set) {
        super();
        this.set = set;
    }
    has(x) {
        return !this.set.has(x);
    }
    toString() {
        return `{ x | x ∉ ${this.set.toString()} }`;
    }
}

/**
 * RangeSetは、AbstractSetの具象サブクラス
 */
class RangeSet extends AbstractSet {
    constructor(from, to) {
        super();
        this.from = from;
        this.to = to;
    }
    has(x) {
        return x >= this.from && x <= this.to;
    }
    toString() {
        return `{ x | ${this.from} ≤ x ≤ ${this.to} }`;
    }
}