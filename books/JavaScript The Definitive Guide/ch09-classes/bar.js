Range.prototype = {
    constructor: Range,
}

// 定義済みのRange.prototypeを拡張する。自動的に生成される。
// Range.prototype.constructorを上書きしない

Range.prototype.includes = function (x) {
    return this.from <= x && x <= this.to;
};

Range.prototype.toString = function () {
    return "(" + this.from + "..." + this.to + ")";
}