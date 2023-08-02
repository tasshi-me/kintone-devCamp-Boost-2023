# kintone-devCamp-Boost-2023

kintone devCamp Boost! (2023 年) のセッション用リポジトリです。

https://page.cybozu.co.jp/-/devcampboost/

## 目次

- [構成](#構成)
- [セットアップ](#セットアップ)

## 構成

kintone カスタマイズを快適に開発できるように以下を設定済みです。

| ツール                                                                                   | 説明                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [TypeScript](https://www.typescriptlang.org/)                                            | JavaScript の代替言語(AltJS)です。<br>型による静的解析や、型推論による強力な補完機能を利用できるす。                                                                                                                                            |
| [Vite](https://vitejs.dev/)                                                              | 複数の JS ファイルを 1 つのファイルにまとめるバンドラーです。                                                                                                                                                                                   |
| [ESLint](https://eslint.org/) / [Prettier](https://prettier.io/)                         | リンターとフォーマッターです。<br/>構文の修正やインデント・改行などのスタイルの修正を自動的に行うことができます。<br/>設定は[@cybozu/eslint-config](https://cybozu.dev/ja/kintone/sdk/development-environment/eslint-config/)を使用しています。 |
| [@kintone/rest-api-client](https://www.npmjs.com/package/@kintone/rest-api-client)       | kintone REST API を JavaScript から簡単に操作するためのライブラリです。                                                                                                                                                                         |
| [@kintone/customize-uploader](https://www.npmjs.com/package/@kintone/customize-uploader) | kintone カスタマイズをアップロード/ダウンロードするための CLI ツールです                                                                                                                                                                        |
| [@kintone/dts-gen](https://www.npmjs.com/package/@kintone/dts-gen)                       | kintone アプリから TypeScript 向けの型定義ファイル(.d.ts)を生成する CLI ツールです。                                                                                                                                                            |
| [Renovate](https://github.com/marketplace/renovate)                                      | 依存ライブラリの更新 PR を自動作成してくれます。<br>設定は[cybozu/renovate-config](https://github.com/cybozu/renovate-config)を使用しています。                                                                                                 |

## セットアップ

### 1. 必須ツールのインストール

以下のツールをインストールします。

- Node.js
  - https://nodejs.org/ja/download
- Git
  - [https://git-scm.com/book/ja/v2/使い始める-Git のインストール](https://git-scm.com/book/ja/v2/%E4%BD%BF%E3%81%84%E5%A7%8B%E3%82%81%E3%82%8B-Git%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
- Visual Studio Code
  - https://code.visualstudio.com/

### 2. リポジトリのクローン・セットアップ

リポジトリをクローンしてください。

```shell
git clone git@github.com:mshrtsr/kintone-devCamp-Boost-2023.git
```

リポジトリのディレクトリに移動し、以下のコマンドを実行してください。

```shell
npm install
npm run setup
```

### 3. アプリの作成

カスタマイズを追加するアプリを作成します。

### 4. 認証情報・アプリ情報の設定

以下のファイルを編集します。

- `.env`
  - `KINTONE_BASE_URL`: kintone 環境の URL（例：https://example.cybozu.com）
  - `KINTONE_USERNAME`: ユーザ名
  - `KINTONE_PASSWORD`: パスワード
- `customize-manifest.json`
  - `app`: カスタマイズを追加するアプリのアプリ ID

### 5. 型定義ファイルの生成

以下のコマンドを実行してください。

```shell
npm run generate:dts アプリID
```

`src/@types/app-アプリID-fields.d.ts`というファイルが作成されます。
