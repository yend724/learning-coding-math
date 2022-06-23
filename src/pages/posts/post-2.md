---
layout: "@/layouts/PostLayout.astro"
title: "エラトステネスの篩 (ふるい)で素数を求める"
date: 2022-06-19
---

素数を求めるアルゴリズムに **エラトステネスの篩(ふるい)** というものがあることを知った。  
エラトステネスの篩 (ふるい)を使うと`2からNまで`の素数を求めることができる。

## 手順

1. 2 ~ N までの自然数を小さい順に並べる
2. 2 ~ N の自然数の中から、最も小さい数（最初は2）を p とおき p の倍数を削除する（p 自体は残す）
3. 残った自然数の中から p の次に大きい数を新たに p として、p の倍数を削除する
4. 3 の作業を繰り返し、p が √N より大きくなったら終了する
5. 残った自然数が 2 ~ N までにおける素数である

言葉だけだと難しいので実際に 2 ~ 30 までの素数を求めてみる。

1. 2 ~ 30 までの自然数を小さい順に並べる  
`{2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30}`
2. 2の倍数を削除する  
`{2,3,5,7,9,11,13,15,17,19,21,23,25,27,29}`
3. 3の倍数を削除する  
`{2,3,5,7,11,13,17,19,23,25,29}`
4. 5の倍数を削除する  
`{2,3,5,7,11,13,17,19,23,29}`
5. 6 は √30 より大きいので残った数が素数

## 実装

上記の手順をもとに`JavaScript`で実装する。

```js
// 2 ~ 30 までに存在する素数を求める
const N = 30;

// flgは素数のフラグ。最初は全て素数としてセットして、素数じゃないものはふるい落としていく
// [{flg: true, value: 0}, {flg: true, value: 1},...,{flg: true, value:30}]
const targets = Array.from({ length: N + 1 }, (_, i) => ({
  flg: true,
  value: i,
}));

// valueが 0,1 のものは　false　にする
targets[0].flg = false;
targets[1].flg = false;

// max = √N
const max = Math.sqrt(N);

// 2 ~ √N でループ
for (let i = 2; i < max; i++) {
  // flg が false なら既に素数じゃないのでスキップ
  if (!targets[i].flg) continue;

  // i（素数）の倍数をふるい落とす
  for (let j = i * 2; j <= N; j += i) {
    // 素数じゃないので flg を false に
    targets[j].flg = false;
  }
}

// targets は [{flg: false, value: 0},...] なので　　flg が true　の value だけを配列として取り出す
const primeNumbers = targets.reduce((acc, cur) => {
  if (cur.flg) {
    acc.push(cur.value);
  }
  return acc;
}, []);

console.log(primeNumbers); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
```

以上で素数を求めることができた。

## 参考

[エラトステネスの篩 - Wikipedia](https://ja.wikipedia.org/wiki/%E3%82%A8%E3%83%A9%E3%83%88%E3%82%B9%E3%83%86%E3%83%8D%E3%82%B9%E3%81%AE%E7%AF%A9)