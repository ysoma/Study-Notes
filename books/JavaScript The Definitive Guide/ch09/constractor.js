// Date: 2025/02/10
// Creator: ysoma
// Ref: JavaScript: The Definitive Guide, 7th Edition
// Chapter 9. Class
// ------------------------------------------------

// 9-2.コンストラクタを使ったRange Class

// クラスは大文字から始めるのが慣例、newを使って呼び出す。
function Range(from, to) {
    this.from = from;
    this.to = to;
}

// 全Rangeオブジェクトが、このオブジェクトを継承する。
// この例の場合は、プロパティ名は「prototype」でなければならない。
Range.prototype = {
    // xが範囲内であればtrueを返す
    // xが範囲外であればfalseを返す
    // このメソッドは数値だけでなくDateやStringでも動作する
    includes: function (x) { return this.from <= x && x <= this.to; },

    // クラスのインスタンスを反復可能にするジェネレータ関数。
    // このメソッドは数値の範囲に対してしか動作しない。
    [Symbol.iterator]: function* () {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },

    // rangeオブジェクトの文字列表現を返す。
    toString: function () { return "(" + this.from + "..." + this.to + ")"; },
};

// 以下はRangeオブジェクトを使った例
let r = new Range(1, 3); // Rangeオブジェクトを作成(newを使っている)
r.includes(2); // => true: 2は範囲内である
r.toString(); // => "(1...3)"
[...r]; // => [1, 2, 3]: Rangeオブジェクトは反復可能である

console.log(r instanceof Range); // true



