// Date: 2025/02/10
// Creator: ysoma
// Ref: JavaScript: The Definitive Guide, 7th Edition
// Chapter 9. Class
// ------------------------------------------------

// 9-1.単純なJavaScriptクラス

function range(from, to) {
    let r = Object.create(range.methods);

    r.from = from;
    r.to = to;

    return r;
}

// このプロトタイプオブジェクトで定義したメソッドは全rangeオブジェクトで継承される
range.methods = {
    // xが範囲内であればtrueを返す
    // xが範囲外であればfalseを返す
    // このメソッドは数値だけでなくDateやStringでも動作する
    includes(x) { return this.form <= x && x <= this.to; },

    // クラスのインスタンスを反復可能にするジェネレータ関数。
    // このメソッドは数値の範囲に対してしか動作しない。
    // ジェネレータ関数は12章で後述
    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    },

    // rangeオブジェクトの文字列表現を返す。
    toString() { return "(" + this.from + "..." + this.to + ")"; },
};

// 以下はrangeオブジェクトを使った例
let r = range(1, 3); // rangeオブジェクトを作成
let r2 = range(2, 4); // 別のrangeオブジェクトを作成
r.includes(2); // => true: 2は範囲内である
r.toString(); // => "(1...3)"
[...r]; // => [1, 2, 3]: rangeオブジェクトは反復可能である

range.methods.isPrototypeOf(r); // => true: rはrange.methodsを継承している