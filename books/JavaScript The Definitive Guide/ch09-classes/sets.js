/**
 * AbstractSetクラスでは、has()抽象メソッドのみを定義する
 */
class AbstractSet {
    has(x) { throw new Error("Abstract method"); }
}