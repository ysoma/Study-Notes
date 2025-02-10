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
        this.length = to - from;
    }

    includes(x) { return this.from <= x && x <= this.to; }

    // 本のコードでは、降順なrangeに対しては未対応
    // 一旦、超愚直なやり方で書いてみる。
    *[Symbol.iterator]() {
        if (this.from < this.to) {
            for (let x = Math.ceil(this.from); x <= this.to; x++) {
                yield x;
            }
        }
        else {
            for (let x = Math.ceil(this.from); x >= this.to; x--) {
                yield x;
            }
        }
    }

    toString() { return `(${this.from}...${this.to})`; }
}

// クラスの継承
// SpanはRangeに似たクラス。
// Spanは開始位置と長さを指定して範囲を指定する。
class Span extends Range {
    constructor(start, length) {
        if (length >= 0) {
            super(start, start + length);
        } else {
            super(start + length, start);
        }
    }
}

// 以下はRangeオブジェクトを使った例
let range = new Range(0, -3); // startからendまでの範囲を表すオブジェクト
let span = new Span(-1, -3); // startから始まる長さlengthの範囲を表すオブジェクト


console.log("[toString()]");
console.log("range.toString():", range.toString());
console.log("span.toString():", span.toString());

console.log("[length]");
console.log("range.length:", range.length);
console.log("span.length:", span.length);

console.log("[iterator]");
console.log("range iterator:", [...range]);
console.log("span iterator", [...span]);
