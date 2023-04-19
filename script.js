/**
 * jQueryライクで書くためにdocument.querySelectorのエイリアスを定義
 * @param {String} s - CSSセレクタ
 * @returns {NodeList}
 */
const $ = s => document.querySelectorAll(s);
/**
 * ファイル一覧
 * @type {File[]}
 */
let fileList = [];

/**
 * ファイルを変換したHTML一覧
 * @type {Element[]}
 */
let htmlList = [];

/**
 * 現在開いているファイル
 * @type {Number}
 */
let nowOpen = 0;

/**
 * 任意のファイルを読み込みます
 * @param {Number} fileID - 読み込むファイルがfileListの何番目か
 * @returns {Undefined}
 */
const loadFile = (fileID) => {
    $(`#viewer`)[0].innerHTML = "";
    $(`#viewer`)[0].appendChild(htmlList[fileID]);
    nowOpen = fileID;
    $(`#list>button.now`)[0] ? $(`#list>button.now`)[0].classList.remove("now") : 0;
    $(`#list>button`)[fileID].classList.add("now");
};

window.addEventListener("load", function () {
    /**
     * bodyにファイルがドラッグされはじめたら#dropの色をちょっと青っぽくする
     */
    $(`body`)[0].addEventListener("dragover", (event) => {
        // 1. 規定の動作はとりあえず止めておく
        event.preventDefault();
        // 2. dragクラスを追加してオーバーレイ表示の色を変える
        $(`#overlay`)[0].classList.add("drag");
    });

    /**
     * bodyにファイルがドラッグされはじめたら#dropの色をちょっと青っぽくする
     */
    $(`body`)[0].addEventListener("dragleave", event => {
        // 1. 規定の動作はとりあえず止めておく
        event.preventDefault();
        // 2. dragクラスを削除してオーバーレイ表示の色を戻す
        $(`#overlay`)[0].classList.remove("drag");
    });

    /**
     * bodyにファイルがドラッグされはじめたら#dropの色をちょっと青っぽくする
     */
    $(`body`)[0].addEventListener("drop", event => {
        // 1. 規定の動作はとりあえず止めておく
        event.preventDefault();
        // 2. dragクラスを削除してオーバーレイ表示の色を戻す
        $(`#overlay`)[0].classList.remove("drag");
        // 3. ファイル一覧のオブジェクトを取得してArrayに
        let files = Array.from(event.dataTransfer.files);
        // 4. 取得したファイルをグローバル配列`fileList`へ
        fileList.push(...files);
        // 5. fileListを名前順にソート
        fileList.sort((a, b) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        })
        // 6. すべてのファイルに対してmd→htmlを行いグローバル配列`htmlList`に格納
        htmlList = [];
        const promises = [];
        for (let i = 0; i < fileList.length; i++) {
            promises.push(new Promise((resolve) => {
                // ⅰ. とりあえず読ませる
                const reader = new FileReader();
                reader.readAsText(fileList[i]);
                reader.onload = (event) => {
                    // ⅱ. 文書を保管するためのarticle要素を用意
                    let article = document.createElement("article");
                    // ⅲ. 読み込んだtextをmarkedに渡してhtml文字列にparse
                    article.innerHTML = marked.parse(reader.result);
                    console.log(article);
                    // ⅳ. htmlListにぶん投げる
                    htmlList[i] = article;
                    resolve();
                };
            }));
        }
        Promise.all(promises).then(() => {
            // 7. div#listの中のbuttonを再生成
            $(`#list`)[0].innerHTML = "";
            for (let i = 0; i < fileList.length; i++) {
                let button = document.createElement("button");
                let title = document.createElement("b");
                let name = document.createElement("sub");
                title.innerText = (htmlList[i].querySelector(`h1`) ?? { "innerText": "" }).innerText;
                name.innerText = fileList[i].name;
                button.appendChild(title);
                button.appendChild(name);
                button.setAttribute('onclick', `loadFile(${i})`);
                $(`#list`)[0].appendChild(button);
            }
            // 7. とりあえず一番最初のファイルを開いておく(すでに開いたことがあればそれが開く)
            loadFile(nowOpen);
        });
    });
});