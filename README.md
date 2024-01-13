# env-node
Node.jsの環境構築

## Node.jsのインストール
公式からインストーラをダウンロードして実行するだけでよい。

https://nodejs.org/en

### インストール確認
Node.jsのバージョン確認
```
$ node -v
v20.9.0
```
npmのバージョン確認
```
$ npm -v
10.0.0
```

## コードの実行
```
$ node server.js
```

## モジュールの使用
[npm](https://docs.npmjs.com/)を使って外部モジュールを組み込むことができる。

package.jsonの作成
```
npm init
```

```
npm install <モジュール名>
```