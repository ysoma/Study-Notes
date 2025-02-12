// Date: 2025/02/10
// Creator: ysoma
// Ref: JavaScript: The Definitive Guide, 7th Edition
// Chapter 9. Class
// ------------------------------------------------

// 文による宣言と式による宣言
let Square = class { constructor(x) { this.area = x * x; } };
new Square(3).area // => 9

// おまけ
// クラス宣言の本体中のコードは、暗黙的にstrictモードとなる。
// よって、8進数リテラルやwith文は使えない。
// 変数を使う前に、必ず宣言する必要がある。
// 関数宣言と異なり、クラス宣言は「巻き上げ」が行われない。


// staticメソッド
// staticメソッドは、プロトタイプオブジェクトのプロパティではなく
// コンストラクタ関数のプロパティとして定義される。

// 例9-3の再掲とstaticメソッドの追加

class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
        this.length = to - from;
    }

    // staticメソッドの追加
    static parse(s) {
        let matches = s.match(/^\((\d+)\.\.\.(\d+)\)$/);
        if (!matches) {
            throw new TypeError(`Cannot parse Range from "${s}".`);
        }
        return new Range(parseInt(matches[1]), parseInt(matches[2]));
    }

    includes(x) { return this.from <= x && x <= this.to; }

    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) {
            yield x;
        }
    }

    toString() { return `(${this.from}...${this.to})`; }
}

// インスタンスに対して呼び出すのではなく、コンストラクタに対して呼び出す
let range = new Range(0, 3);
let range2 = Range.parse("(1...4)");

console.log(range2);