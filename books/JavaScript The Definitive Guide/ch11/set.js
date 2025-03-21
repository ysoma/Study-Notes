/**
 * 11章 JavaScript標準ライブラリ
 */

// Set
// Setは重複を許さない値の集合を表すクラス
let s = new Set();
let t = new Set([1, s]);
let unique = new Set("Mississippi"); // Set { 'M', 'i', 's', 'p' }

s.add([1, 2, 3]);
s.delete([1, 2, 3]); // false, 同値であっても異なるオブジェクト

// setのhas()は配列のincludes()よりも高速
// for ofループ, スプレッド演算子, forEach()メソッドで反復処理が可能