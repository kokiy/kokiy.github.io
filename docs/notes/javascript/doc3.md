# 洋葱模型

```js
class Koa {
  constructor() {
    this.middlewares = [];
  }
  use(callback) {
    this.middlewares.push(callback);
  }
}

var app = new Koa();

app.use(async (ctx, next) => {
  console.log(1);
  await next();
  console.log(2);
});

app.use(async (ctx, next) => {
  console.log(3);
  await next();
  console.log(4);
});

app.use(async (ctx, next) => {
  console.log(5);
});

function compose(middlewares) {
  return dispatch(0);

  function dispatch(i) {
    if (i === middlewares.length) return;

    let fn = middlewares[i];

    let result = fn(null, function next() {
      // 这里的null应该是context，
      return dispatch(i + 1);
    });
    return Promise.resolve(result);
  }
}

compose(app.middlewares);
```
