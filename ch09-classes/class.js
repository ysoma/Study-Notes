// Date: 2025/02/10
// Creator: ysoma
// Ref: JavaScript: The Definitive Guide, 7th Edition
// Chapter 9. Class
// ------------------------------------------------

// 9-3. お待ちかねのclassキーワード

class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    includes(x) { return this.from <= x && x <= this.to; }

    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    }

    toString() { return `(${this.from}...${this.to})`; }
}

// 以下はRangeオブジェクトを使った例
let r = new Range(1, 3); // Rangeオブジェクトを生成
r.includes(2); // => true: 2は範囲内である
r.toString(); // => "(1...3)"
[...r]; // => [1, 2, 3]: Rangeオブジェクトは反復可能である