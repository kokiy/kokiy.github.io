# 选择器

```css
/** 属性选择器: **/

/** 如果该属性之中包含val的内容 **/

[attr*='val'] {
  color: red;
}

/** 如果该属性开头包含val的内容 **/

[attr^='val'] {
  color: red;
}

/** 如果该属性结尾包含该属性的内容 **/

[attr$='val'] {
  color: red;
}

/** 表明选择带有class的input **/

input['class'] {
  color: red;
}

/** 伪类选择器 **/

a:hover {
  color: red;
}

a:visited {
  color: red;
}

a:link {
  color: red;
}

/** 鼠标在元素上按下还没有松开)时使用的样式,也说被激活 **/

a:active {
  color: red;
}

/** 选择第一行元素 **/

a::first-line {
  color: #f00;
}

/** 选择某个元素的文字的首字母 **/

a::first-letter {
  color: #f00;
}

/** 选择器将样式绑定到页面的根元素中 **/

:root {
  color: #f00;
}

/** 选择器将样式绑定到页面的根元素中 **/

:not(li) {
  color: #f00;
}

/** 某个元素为空时,显示的样式 **/

a:empty {
  color: #f00;
}

/** 用户点击页面中的超链接跳到链接处时,该样式起作用;(target元素就是该元素的id被当做页面的超链接来使用;) **/

:target {
  color: #f00;
}

/** 要想选择ul 下的li 标签 --> 是li:firstchild 而不是ul:firstchild;   注意:以下只能是标签选择器,不能是类选择器. **/

/** 父元素中的第一个子元素  **/

li:first-child {
  color: #f00;
}

li:last-child {
  color: #f00;
}

/** 父元素的第 n 个子元素 **/

li:nth-child(1) {
  color: red;
}

li:nth-child(2n + 1) {
  color: #f0f;
}

li:nth-last-child(3) {
  color: red;
}

li:nth-child(odd) {
  color: red;
}

li:nth-child(even) {
  color: red;
}

li:nth-last-child(odd) {
  color: red;
}

li:nth-last-child(even) {
  color: red;
}

li:nth-of-type(1) {
  color: red;
}

/** 选择器匹配属于父元素的特定类型的第 N 个子元素的每个元素.**/

li:nth-of-type(3) {
  color: #ff0;
}

/** 选择器匹配属于父元素的特定类型的第 N 个子元素的每个元素，从最后一个子元素开始计数。 **/

li:nth-last-of-type(1) {
  color: red;
}
```
