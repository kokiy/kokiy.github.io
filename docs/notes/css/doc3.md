# flex

```css
/** flex容器属性 **/

/** 设置flex容器 **/

ul {
  display: flex;
  display: inline-flex;
}

/** 控制flex项目沿主轴的排列方向 **/

ul {
  flex-direction: row;
  flex-direction: column;
  flex-direction: row-reverse;
  flex-direction: column-reverse;
}

/** flex项目超过flex容器宽度处理方式 **/

ul {
  flex-wrap: wrap;
  flex-wrap: nowrap;
  flex-wrap: wrap-reverse;
}

/** 两个属性的速记属性 {flex-flow: flex-direction flex-wrap} **/

ul {
  flex-flow: row nowrap;
}

/** flex项目之间的主轴轴对齐方式 **/

ul {
  justify-content: flex-start;
  justify-content: flex-end;
  justify-content: center;
  justify-content: space-between;
  justify-content: space-around;
}

/** flex项目之间的侧轴对齐方式(默认 stretch) **/

ul {
  align-items: flex-start;
  align-items: flex-end;
  align-items: center;
  align-items: stretch;
  align-items: baseline;
}

/** 只适用于多行flex项目在侧轴排列方式(默认 stretch)  **/

ul {
  align-content: flex-start;
  align-content: flex-end;
  align-content: center;
  align-content: stretch;
}

/** flex项目属性 **/

li {
  /** (number正负值都可以)  flex 项目按照从小到大的顺序进行排列 **/
  order: 1;
  /** number(>=0) flex 项目在容器有多余空间时候如何扩展 **/
  flex-grow: 1;
  /** number(>=0) flex 项目在容器没有多余空间时候如何缩小 **/
  flex-shrink: 1;
  /** auto(默认值) | value 单位 指定 flex 项目的初始大小  **/
  flex-basis: auto;
  /** flex: flex-grow flex-shink flex-basis  **/
  flex: 0 1 auto;
  /**  flex 项目的宽度取决于内容的大小
  flex-grow 不会改变 lex项目的初始大小
   flex-shink 为1当flex项目在必要时候缩小
   flex: auto === flex: 1 1 auto
   flex: 1 === flex: 1 1 0 **/
}

/** 改变一个项目沿着侧轴的位置 **/

li {
  align-self: auto;
  align-self: flex-start;
  align-self: flex-end;
  align-self: center;
  align-self: stretch;
}
```
