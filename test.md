# 表示のテスト

## 4.1 区切り線

***

---

___

## 4.2 見出し

### h3
#### h4
##### h5
###### h6

## 4.4 コードブロックのインデント記法

    a simple
      indented code block

## 4.5 コードブロックのフェンシング記法

```js
console.log("Hello, World!");
```

~~~html
<!-- チルダもOK -->
~~~

## 4.7 リンク参照記法

[foo]: https://example.com "example"
[foo]

## 4.8 段落

段落〜〜〜  
改行できる

ここは別の段落

## 4.10 表

| foo | bar |
| --- | --- |
| baz | bim |

## 5.1 引用ブロック

> 段落
>> 二重
>>> 三重

## 5.2 リスト

- 箇条書き
- できるって
- 大事

* 別の
* 箇条書き

+ 使える記号は3種類

1. 順序付きも
2. できる
    * ネストしても
        * OK

1) GFM
2) これでもいいらしい

## 5.3 タスクリスト

- [ ] foo
- [x] bar
    - [x] baz

## 6.1 エスケープいろいろ

\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~

&nbsp; &amp; &copy; &AElig; &Dcaron;
&frac34; &HilbertSpace; &DifferentialD;
&ClockwiseContourIntegral; &ngE;

```
& © Æ Ď ¾ ℋ ⅆ ∲ ≧̸
```

&#35; &#1234; &#992; &#0;

```
# Ӓ Ϡ �
```

## 6.3 コードスパン

`true`, `false`

`` foo ` bar ``

↑「foo ` bar」が表示されてほしい

仕様が`code{white-space: pre-wrap;}`つけとけと言ってた

## 6.4 強調

*斜め*  
**太字**  
***両方***

***`こういうこともできる`***

## 6.5 取り消し線

~~消える~~ 消えない, ~チルダは1つでもいい~

## 6.6 リンク

[text](https://example.com)  
[リンク先にスペースを含めたり……](<https://example.com?test=a b>)

[bar][foo] ←ちょっと前に定義してるのでこれで飛べる

## 6.7 画像

![desc](https://axtech.dev/img/z0000.png)

## 6.8 自動リンク

<https://example.com>

www.example.com ←これも拡張機能で通る？