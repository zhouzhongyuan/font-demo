1. 已经有了`font-family`,为什么还要使用外部字体呢？
> 因为`font-famlily`仅支持机器有的字体，机器上没有的字体无法展示。例如你写了`font-family:'康熙字典体'`，绝大部分人的电脑上没有康熙字典体这种字体，应该会显示成默认的字体。

缺点：
- 每个机器的情况千差万别，不能保持显示效果的一致性。
- 不可预测性。

2. 常说的’内部字体‘和’外部字体‘，指的是什么？

- 内部字体：机器自带的字体。
- 外部字体：非内部字体。可以来自自己的服务器，也可来自第三方的服务器（例，Google的字体）。


## Demo

demo01 How to use external font
demo02 How to use fontmin
demo03 How to use icon-font
demo04 How to use font-spider