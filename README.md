# AXT_Markdown-Viewer

簡易的なMarkdownファイルビューワーです。  
任意ファイル群を読みやすく……を意識したつもりです。

## 規約

Copyright (c) 2023-  
AyaExpTech, Ayasaka-Koto

以下の規約のいずれかに従ってください。  
Follow one of the following licenses.

- "AeTOS for Everyone" …… https://axtech.dev/license/
- "The MIT License" …… https://licenses.opensource.jp/MIT/MIT.html

## 更新履歴

2023-04-15 `v1.1.1`
- 2件のバグ修正
    1. ファイルドロップ時にエラーが出てファイルが表示できないことがある
    2. ファイルドロップ時、ファイル名順でのソートが正常に働かない
- 一部の場合において動作を高速化
    - setTimeoutを使って無理やり実装していた部分をPromiseに置き換えた

2023-04-15 `v1.1.0`
- デザイン調整
- 綾急技研の宣伝を左下に追加
- ファイル名でソートするように変更

2023-04-15 `v1.0.0`
- 公開

2023-04-14 `v0.0.0`
- リポジトリ追加
