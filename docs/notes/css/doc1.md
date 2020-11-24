# 新属性

```css
/** 粘性布局 **/

a {
  position: sticky;
}

/** 横竖屏监测代码 **/

/** 横屏 **/

@media all and (orientation: landscape) {
}

/** 竖屏 **/

@media all and (orientation: portrait) {
}

/** 多列布局 **/

a {
  /** column-width(每列宽度) column-count(定义列数) **/
  columns: 2 3;
  /** (定义列间距) **/
  column-gap: 10;
  /** (定义列边框)  **/
  column-rule: 4;
  /** (定义布局中子元素跨列效果)  **/
  column-span: 20;
  /** (列内容填充规则 balance | auto) **/
  column-fill: balance;
}
```
