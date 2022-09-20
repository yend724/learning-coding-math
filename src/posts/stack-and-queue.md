---
title: "スタックとキュー"
date: "2022-09-21"
---

基本的なデータ構造であるスタックとキューについて学ぶ。

## スタック

スタックは最初に入れたデータが最後に取り出されるデータ構造のこと。日本語にすると「積み重ね」の意味を持つ。

イメージ的には本などが積み重なった状態を想像するとわかりやすい。最後に載せたモノを最初に取りだせて、最初に置いたモノを最後に取りだせる。このような構造は、先入れ後出しなので **FILO(First In Last Out)** とも呼ばれる。

スタックにデータを追加することをプッシュといい、スタックからデータを取り出すことをポップという。

```ts:[data-language="TypeScript"]
class Stack {
  list: number[];
  constructor() {
    this.list = [];
  }
  push(item: number) {
    this.list.push(item);
    console.log('stack.list =>', this.list);
  }
  pop() {
    if (this.list.length > 0) {
      const popped = this.list.pop();
      console.log('stack.list =>', this.list);
      return popped;
    }
    return null;
  }
}

const stack = new Stack();
console.log(stack.list); // []
// pushで追加する
stack.push(0); // stack.list => [0]
stack.push(1); // stack.list => [0, 1]
// popで取りだす
const poped = stack.pop(); // stack.list => [0]
console.log(poped); // 1
```

## キュー

キューは最初に入れたデータが最初に取りだせるデータ構造のこと。スタックとは反対の概念。

イメージ的はレジに並ぶ行列を想像するとわかりやすい。最初に並んだ人が最初に処理されて、最後に並んだ人が最後に処理される。
このような構造は、先入れ先出しなので **FIFO(First In First Out)** とも呼ばれる。

キューにデータを入れることをエンキューといい、キューからデータを取り出すことをデキューという。

```ts:[data-language="TypeScript"]
class Queue {
  public list: number[];
  constructor() {
    this.list = [];
  }
  enqueue(item: number) {
    this.list.push(item);
    console.log('queue.list =>', this.list);
  }
  dequeue() {
    if (this.list.length > 0) {
      const dequeued = this.list.shift();
      console.log('queue.list =>', this.list);
      return dequeued;
    }
    return null;
  }
}

const queue = new Queue();
console.log(queue.list); // []
// enqueueで追加する
queue.enqueue(0); // queue.list => [0]
queue.enqueue(1); // queue.list => [0,1]
// dequeueで取り出す
const dequeued = queue.dequeue(); // queue.list => [1]
console.log(dequeued); // 0
```

以上で`TypeScript`を使ったスタックとキューの実装ができた。