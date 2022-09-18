---
title: "一次方程式と直線"
date: "2022-09-18"
---

平面上の直線について考える。

xy座標において、傾きm、切片nの直線は`y=mx+n`の1次方程式で表すことができる。
だたし、これだとx軸に並行な直線を表すことができない。x軸に並行な直線は`x=p`で表せる。

どちらの式も左辺に移行して整理することで、`ay+xb+c=0`という形になり、直線の方程式は`ay+xb+c=0`と表現できる。

`ay+xb+c=0`において、`a`か`b`は少なくともどちらか1つは0以外の数であり、`a !== 0`であれば、

```
y = -(b/a)x - c/a
```

となり、`a === 0`であれば、

```
x = -b/c
```

である。

これをCanvasで実装してみる。

```html:[data-language="HTML"]
<canvas id="canvas" width="800" height="800"></canvas>
```

```ts:[data-language="TypeScript"]
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.width = 800;
canvas.height = 800;
// Canvasの[0,0]を中心に移動
context.translate(canvas.width / 2, canvas.height / 2);

// 直線の方程式
// ay + bx + c = 0
// drawLine(a,b,c)
const drawLine = (a: number, b: number, c: number): void => {
  // ay + bx + c = 0
  // => y = -b/ax - c/a
  if (a === 0 && b === 0) {
    throw new Error("aかbのどちらかは0以外になります");
  }

  // x = -c/b
  // => y軸に並行
  if (a === 0) {
    const y = {
      from: -canvas.height / 2,
      to: canvas.height / 2,
    };
    context.beginPath();
    context.moveTo(-c / b, y.from);
    context.lineTo(-c / b, y.to);
    context.stroke();
    return;
  }

  const x = {
    from: -canvas.width / 2,
    to: canvas.width / 2,
  };
  const f = (x: number) => {
    // canvasではy軸が上から下に増加するので-1をかける
    const y = (-b / a) * x - c / a;
    return -y;
  };
  context.beginPath();
  context.moveTo(x.from, f(x.from));
  context.lineTo(x.to, f(x.to));
  context.stroke();
};

// 傾きが-1、切片が0の直線
drawLine(1, 1, 0);
// y=-200のx軸に並行な直線
drawLine(1, 0, 200);
```

以上で直線の方程式`ay+bx=0`をコードで表現できた。
