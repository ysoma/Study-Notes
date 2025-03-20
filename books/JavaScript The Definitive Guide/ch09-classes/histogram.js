/**
 * 値が何回追加されたかを管理するSetのようなクラス。
 * Setと同じようにadd()とremove()を呼び出す。
 * 指定された値が追加された回数を調べるときはcount()を呼び出す。
 * デフォルトのイテレータは少なくとも1度追加された値を返す。
 * [キー, 回数]のペアについて巡回したい場合はentries()を使う。
 */

class Histogram {
    // 初期化処理では、移譲先となるMapオブジェクトを作成する。
    constructor() {
        this.map = new Map();
    }

    // 指定されたキーに対して、マップ中の値が回数
    // マップ中にキーが存在しない場合はゼロ
    count(key) {
        return this.map.get(key) || 0;
    }

    // countがゼロより大きい場合は、Setのhas()メソッドと同じようにtrueを返す。
    has(key) {
        return this.count(key) > 0;
    }

    // Histogramのsizeは、Map中のエントリ数を返す
    get size() {
        return this.map.size;
    }

    // キーを追加するときは、Map中の回数をインクリメント
    add(key) {
        this.map.set(key, this.count(key) + 1);
    }

    // キーを削除するときは、Map中の回数をデクリメント
    remove(key) {
        let count = this.count(key);
        if (count === 1) {
            this.map.delete(key);
        } else if (count > 1) {
            this.map.set(key, count - 1);
        }
    }

    // Histogramを巡回するときは、保存しているキーを返す
    [Symbol.iterator]() {
        return this.map.keys();
    }

    // 他の処理はMapオブジェクトに移譲
    entries() { return this.map.entries(); }
    keys() { return this.map.keys(); }
    values() { return this.map.values(); }
}