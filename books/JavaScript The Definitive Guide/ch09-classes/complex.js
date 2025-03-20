/**
 * 複素数を表すComplexクラス
 */

class Complex {
    constructor(real, imaginary) {
        this.r = real; // 実部
        this.i = imaginary; // 虚部
    }

    // 加算と乗算用のインスタンスメソッド
    plus(that) {
        return new Complex(this.r + that.r, this.i + that.i);
    }
    times(that) {
        return new Complex(this.r * that.r - this.i * that.i, this.r * that.i + this.i * that.r);
    }
    static sum(c, d) {
        return c.plus(d);
    }
    static product(c, d) {
        return c.times(d);
    }

    // その他のインスタンスメソッド
    get real() {
        return this.r;
    }
    get imaginary() {
        return this.i;
    }
    get magnitude() {
        return Math.hypot(this.r, this.i);
    }
    toString() {
        return `{${this.r},${this.i}}`;
    }
    equals(that) {
        return that instanceof Complex && this.r === that.r && this.i === that.i;
    }
}

Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);


// 以下はComplexクラスの利用例
let c = new Complex(2, 3);
let d = new Complex(c.i, c.r);
console.plus(d).toString(); // => "{5,5}"
c.magnitude;
Complex.product(c, d); // => new Complex(0, 13); 静的メソッド
Complex.ZERO.toString(); // => "{0,0}"


Complex.prototype.conj = function () { return new Complex(this.r, -this.i); };