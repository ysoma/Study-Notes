/**
 * 9.5.2 extendsとsuperによるサブクラス化
 */

class EZArray extends Array {
    get first() { return this[0]; }
    get last() { return this[this.length - 1]; }
}

let a = new EZArray();
a instanceof EZArray // true
a instanceof Array // true
a.push(1, 2, 3, 4);
a.length // 4
a.pop(); // 4
a.first // 1
a.last // 3
a[1] // 2
Array.isArray(a) // true
EZArray.isArray(a) // true