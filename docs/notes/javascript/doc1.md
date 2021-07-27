# 优秀函数片段

## 节流

函数节流就是预定一个函数只有在大于等于执行周期时才执行，周期内调用不执行。好像水滴攒到一定重量才会落下一样 目的是频繁触发中缩减频率

```js
var throttle = (fun, delay) => {
  let last = 0;
  return () => {
    let now = +new Date();
    if (now - last > delay) {
      fun.apply(this, arguments);
      last = now;
    }
  };
};
```

## 防抖

函数防抖就是在函数需要频繁触发情况时，只有足够空闲的时间，才执行一次。好像公交司机会等人都上车后才出站一样 目的是频繁触发中只执行一次

```js
var debounce = (fun, delay) => {
  var timer = null;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fun, delay);
  };
};
```

## `for in` 和 `for of`

`for in`
先输出的是对象的属性名，再是对象原型中的属性和方法,果不想让其输出原型中的属性和方法，可以使用 hasOwnProperty 方法进行过滤 or Object.keys 获取的就是自身可枚举的属性

`for of`
遍历 Itrator 类型的 value, 比如 Map Array

## 浅层 clone

```js
const shallowClone = (target) => {
  if (typeof target === 'object' && target !== null) {
    const cloneTarget = Array.isArray(target) ? [] : {};
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = target[prop];
      }
    }
    return cloneTarget;
  }
  return target;
};
```

## 深层 clone 简单情况

```js
function deepClone(target) {
  if (target === null) {
    return null;
  }
  if (typeof target !== 'object') {
    return target;
  }
  const cloneTarget = Array.isArray(target) ? [] : {};
  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
      cloneTarget[prop] = deepClone(target[prop]);
    }
  }
  return cloneTarget;
}
```

## 深度 clone 考虑时间正则等类型

```js
const isObject = (target) =>
  (typeof target === 'object' || typeof target === 'function') &&
  target !== null;

function deepClone(target, map = new Map()) {
  // 先判断该引用类型是否被 拷贝过
  if (map.get(target)) {
    return target;
  }
  // 获取当前值的构造函数：获取它的类型
  let constructor = target.constructor;
  // 检测当前对象target是否与 正则、日期格式对象匹配
  if (/^(RegExp|Date)$/i.test(constructor.name)) {
    return new constructor(target); // 创建一个新的特殊对象(正则类/日期类)的实例
  }
  if (isObject(target)) {
    map.set(target, true); // 为循环引用的对象做标记
    const cloneTarget = Array.isArray(target) ? [] : {};
    for (let prop in target) {
      if (target.hasOwnProperty(prop)) {
        cloneTarget[prop] = deepClone(target[prop], map);
      }
    }
    return cloneTarget;
  } else {
    return target;
  }
}
```

## 深层 clone 新思路

```js
const deepClone2 = (target) => {
  const getType = (value) =>
    Object.prototype.toString
      .call(value)
      .replace(/^(\[object\s)(\S+)(\]$)/g, (m, $1, $2) => $2)
      .toLowerCase();
  const type = getType(target);
  const actions = {
    string: (val) => new String(val).valueOf(),
    number: (val) => new Number(val).valueOf(),
    boolean: (val) => new Boolean(val).valueOf(),
    regexp: (val) => new RegExp(val).valueOf(),
    date: (val) => new Date(val),
    null: () => null,
    undefined: () => undefined,
    array: (val) => val.map((item) => deepClone2(item)),
    object: (val) =>
      Object.entries(val).reduce(
        (pre, [k, v]) => ({
          ...pre,
          [k]: deepClone2(v),
        }),
        {},
      ),
    default: (val) => val,
  };
  action = actions[type] || actions.default;
  return action(target);
};
```

## canvas 高清方案

```js
getCtx(canvas) {
  // Get the device pixel ratio, falling back to 1.
  const dpr = window.devicePixelRatio || 1
  // Get the size of the canvas in CSS pixels.
  const rect = canvas.getBoundingClientRect()
  // Give the canvas pixel dimensions of their CSS
  // size * the device pixel ratio.
  canvas.width = rect.width * dpr
  canvas.height = rect.height * dpr
  const ctx = canvas.getContext('2d')
  // Scale all drawing operations by the dpr, so you
  // don't have to worry about the difference.
  ctx.scale(dpr, dpr)
  return ctx
}
```

## 获取数据类型

```js
const getDataType = (value) =>
  Object.prototype.toString
    .call(value)
    .replace(/^(\[object\s)(\S+)(\]$)/g, (m, $1, $2) => $2)
    .toLowerCase();
```

## 单例模式

```js
function _utils() {
  const data = require('@umijs/utils');
  _utils = function _utils() {
    return data;
  };
  return data;
}
```

## compose

```js
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)));
}
```
## componsePromise
```js
function composePromsie(...funcs) {
  return (arg) =>
    funcs.reduce((sequence, currentFunc) =>
          sequence.then(result => currentFunc(result))
          , Promise.resolve(arg))
    }
```
