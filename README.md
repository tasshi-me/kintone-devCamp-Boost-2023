# kintone-devCamp-Boost-2023

kintone devCamp Boost! (2023) のセッション用リポジトリです。

https://page.cybozu.co.jp/-/devcampboost/

kintone カスタマイズ開発を快適に行うためのツールを設定済みです。

| ツール                                                                                   | 説明                                                                                                                                                                                                                                       |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [TypeScript](https://www.typescriptlang.org/)                                            | 型による静的解析を利用できる JavaScript の代替言語(AltJS)です。                                                                                                                                                                            |
| [Vite](https://vitejs.dev/)                                                              | 複数の JS ファイルを 1 つのファイルにまとめるバンドラーです。                                                                                                                                                                              |
| [ESLint](https://eslint.org/)/[Prettier](https://prettier.io/)                           | リンターとフォーマッターです。構文の修正やインデント・改行などのスタイルの修正を自動的に行うことができます。<br/>設定は[@cybozu/eslint-config](https://cybozu.dev/ja/kintone/sdk/development-environment/eslint-config/)を使用しています。 |
| [@kintone/rest-api-client](https://www.npmjs.com/package/@kintone/rest-api-client)       | kintone REST API を JavaScript から簡単に操作するためのライブラリです。                                                                                                                                                                    |
| [@kintone/customize-uploader](https://www.npmjs.com/package/@kintone/customize-uploader) | kintone カスタマイズをアップロード/ダウンロードするための CLI ツールです                                                                                                                                                                   |
| [@kintone/dts-gen](https://www.npmjs.com/package/@kintone/dts-gen)                       | kintone アプリから TypeScript 向けの型定義ファイル(.d.ts)を生成する CLI ツールです。                                                                                                                                                       |

## セットアップ

### 1. 必須ツールのインストール

以下のツールをインストールします。

- Node.js
  - https://nodejs.org/ja/download
- Git
  - [https://git-scm.com/book/ja/v2/使い始める-Git のインストール](https://git-scm.com/book/ja/v2/%E4%BD%BF%E3%81%84%E5%A7%8B%E3%82%81%E3%82%8B-Git%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
- Visual Studio Code
  - https://code.visualstudio.com/

### 2. リポジトリのセットアップ

リポジトリをクローンしてください

```shell
git clone git@github.com:mshrtsr/kintone-devCamp-Boost-2023.git
```

リポジトリのディレクトリに移動し、依存パッケージのダウンロードを行ってください

```shell
cd kintone-devCamp-Boost-2023
npm install
```

以下のコマンドが正常に終了することを確認します。

```shell
npm run build
```

### 3. アプリの作成

プラグインを追加するアプリを作成します。
動作確認のため、任意のアプリで良いですが、セッションでは[営業支援パック](https://kintone-sol.cybozu.co.jp/apps/030-sfa-pack.html)の顧客情報アプリを利用します
