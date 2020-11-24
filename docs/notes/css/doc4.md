# 知识片段

## 百分比的参照物

1. 参照于包含块的高度：`top`、`bottom`、`height`
2. 参照于包含块的宽度：`left`、`right`、`width`、`margin`（四个方向）、`padding`（四个方向）
3. 参照于自身的尺寸：`transform:translate(50%,30%)`;水平方向参照于自身的宽度，垂直方向参照于自身的高度
4. 参照于背景区（`background-origin` 指定）的尺寸：`background-size`  水平方向参照于自身的宽度，垂直方向参照于自身的高度
5. 参照于(背景区-图片的位图像素值)：`background-position`

## h5 长按图片禁止弹窗

```css
img {
  -webkit-touch-callout: none;
  pointer-events: none;
}
```
