# kintone-devCamp-Boost-2023

kintone devCamp Boost! (2023 年) のセッション用リポジトリです。

https://page.cybozu.co.jp/-/devcampboost/

## 目次

- [構成](#構成)
- [セットアップ](#セットアップ)
- [開発方法](#開発方法)
- [ライセンス](#ライセンス)

## 構成

kintone カスタマイズを快適に開発できるように、以下のツール群を設定済みです。

| ツール                                                                                   | 説明                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [TypeScript](https://www.typescriptlang.org/)                                            | JavaScript の代替言語(AltJS)です。<br>型による静的解析や、型推論による強力な補完機能を利用できます。                                                                                                                                              |
| [Vite](https://vitejs.dev/)                                                              | 複数の JS ファイルを 1 つのファイルにまとめるバンドラーです。                                                                                                                                                                                     |
| [Vitest](https://vitest.dev/)                                                            | JavaScript 向けのテスティングフレームワークです。                                                                                                                                                                                                 |
| [ESLint](https://eslint.org/) / [Prettier](https://prettier.io/)                         | リンターとフォーマッターです。<br/>構文の修正やインデント・改行などのスタイルの修正を自動的に行うことができます。<br/>設定は [@cybozu/eslint-config](https://cybozu.dev/ja/kintone/sdk/development-environment/eslint-config/) を使用しています。 |
| [@kintone/rest-api-client](https://www.npmjs.com/package/@kintone/rest-api-client)       | kintone REST API を JavaScript から簡単に操作するためのライブラリです。                                                                                                                                                                           |
| [@kintone/customize-uploader](https://www.npmjs.com/package/@kintone/customize-uploader) | kintone カスタマイズをアップロード/ダウンロードする CLI ツールです                                                                                                                                                                                |
| [@kintone/dts-gen](https://www.npmjs.com/package/@kintone/dts-gen)                       | kintone アプリから TypeScript 向けの型定義ファイル(.d.ts)を生成する CLI ツールです。                                                                                                                                                              |
| [Renovate](https://github.com/marketplace/renovate)                                      | 依存ライブラリの更新 PR を自動作成できるサービスです。<br>設定は [cybozu/renovate-config](https://github.com/cybozu/renovate-config) を使用しています。                                                                                           |
| [GitHub Actions](https://github.co.jp/features/actions)                                  | CI/CD サービスです。<br>自動的にコードをビルド・テスト・デプロイすることができます。                                                                                                                                                              |

## セットアップ

### 手順 1. 必須ツールのインストール

以下のツールをインストールします。

| ツール             | ダウンロードリンク                                                                                                                                                                                              |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Node.js            | https://nodejs.org/ja/download                                                                                                                                                                                  |
| Git                | [https://git-scm.com/book/ja/v2/使い始める-Git のインストール](https://git-scm.com/book/ja/v2/%E4%BD%BF%E3%81%84%E5%A7%8B%E3%82%81%E3%82%8B-Git%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB) |
| Visual Studio Code | https://code.visualstudio.com/                                                                                                                                                                                  |

※Git のインストールは任意です。

### 手順 2. リポジトリのクローン・セットアップ

開発用テンプレートリポジトリをダウンロードしてセットアップします。

Git のインストール状況と GitHub アカウントの有無で手順が異なります。  
作業内容をセッション後も保存するために Git と GitHub アカウントを用意することを推奨しています。

- [Git をインストールしている・GitHub アカウントがある](#github-アカウントを持っている場合)
- [Git をインストールしている・GitHub アカウントがない](#github-アカウントを持っていない場合)
- [Git をインストールしていない](#git-を使用しない場合)

#### GitHub アカウントを持っている場合

以下のページの「Use this template」ボタンから自分のリポジトリを作成してください。

https://github.com/mshrtsr/kintone-devCamp-Boost-2023

作成したリポジトリをクローンしてください。

```shell
## HTTPSの場合
git clone https://github.com/作成したリポジトリのオーナー/リポジトリ名.git

## SSHの場合
git clone git@github.com:作成したリポジトリのオーナー/リポジトリ名.git
```

リポジトリのディレクトリに移動し、以下のコマンドを実行してください。

```shell
npm install
npm run setup
```

#### GitHub アカウントを持っていない場合

リポジトリをクローンしてください。

```shell
## HTTPSの場合
git clone https://github.com/mshrtsr/kintone-devCamp-Boost-2023.git

## SSHの場合
git clone git@github.com:mshrtsr/kintone-devCamp-Boost-2023.git
```

リポジトリのディレクトリに移動し、以下のコマンドを実行してください。

```shell
npm install
npm run setup
```

#### Git を使用しない場合

以下の手順でリポジトリをダウンロードしてください

- [リポジトリのトップページ](https://github.com/mshrtsr/kintone-devCamp-Boost-2023)にアクセス
- このページの「Code」→「Download ZIP」から ZIP ファイルをダウンロード
- ダウンロードした ZIP ファイルを展開してください

リポジトリのディレクトリに移動し、以下のコマンドを実行してください。

```shell
npm install
npm run setup
```

### 手順 3. Visutal Studio Code のセットアップ

Visual Studio Code でリポジトリをオープンします。

拡張機能(Extensions)メニューを開いて検索バーに `@recommended` と記入し、`WORKSPACE RECOMMENDATIONS` に表示された拡張機能をインストールします。

### 手順 4. アプリの作成

カスタマイズを追加するアプリを作成します。

セッションでは「営業支援パック」の「案件管理」アプリにカスタマイズを追加します。
https://jp.cybozu.help/k/ja/user/create_app/sales_pack.html

### 手順 5. 認証情報・アプリ情報の設定

以下のファイルを編集します。

- `.env`
  - `KINTONE_BASE_URL`: kintone 環境の URL（例：https://example.cybozu.com）
  - `KINTONE_USERNAME`: ユーザ名
  - `KINTONE_PASSWORD`: パスワード
- `customize-manifest.json`
  - `app`: カスタマイズを追加するアプリのアプリ ID

### 手順 6. 動作確認

以下のコマンドを実行します。

```shell
npm run build
npm run upload
```

アプリのレコード一覧画面にアクセスしてダイアログが表示されたら成功です！

## 開発方法

### カスタマイズのビルド・アップロード

以下のコマンドを実行します。  
`src`ディレクトリ内のソースコードを変更すると自動的にカスタマイズのビルド・アップロードが行われます。

```shell
npm run start
```

### 自動テストの実行

※VSCode の Vitest 拡張機能をインストールしている場合は、拡張機能からテストを実行することを推奨します。

以下のコマンドを実行します。  
ファイルの変更に応じてテストは自動的に再実行されます。

```shell
npm run test
```

テストの書き方は Vitest の公式ドキュメントを参照してください。

[Getting Started | Guide | Vitest](https://vitest.dev/guide/#writing-tests)

### リンター・フォーマッターの実行

※VSCode の ESLint・Prettier 拡張機能をインストールしている場合はファイル保存時に自動実行されます。

以下のコマンドを実行します。

```shell
# チェックのみ
npm run lint

# 自動修正
npm run fix
```

### Tips 1. `kintone.events.on`のハンドラに型を指定する

現在、@kintone/dts-gen の提供する型では`kintone.events.on`のイベントオブジェクトの型は any になっています。

```
declare namespace kintone {
  namespace events {
    function on(event: string | string[], handler: (event: any) => any): void;
```

[js-sdk/packages/dts-gen/kintone.d.ts at master · kintone/js-sdk](https://github.com/kintone/js-sdk/blob/5e19f7ddc604cae3d63a1b76ea46bb8dbfdb6ef1/packages/dts-gen/kintone.d.ts#L3)

このテンプレートリポジトリではいくつかのイベントオブジェクトについて型定義を提供しています。  
これを指定することでイベントハンドラ内で受け取ったイベントを安全に扱うことができます。

```typescript
// eventTypes[イベントタイプ]で型を指定
kintone.events.on(
  "app.record.edit.submit",
  (event: eventTypes["app.record.edit.submit"]) => {
    console.log(event.appId);
  }
);
```

### Tips 2. @kintone/dts-gen の使い方

@kintone/dts-gen を使うことで レコードの型定義ファイルを生成することができます。

生成した型は、JS API でレコードを扱う際に指定することができます。

#### 型定義ファイルの生成方法

以下のコマンドを実行してください。

```shell
npm run generate:dts アプリID
```

`src/@types/app-アプリID.d.ts`というファイルが作成されます。

#### 型定義ファイルの使い方

イベントハンドラから取得したレコードに対して型を指定してください。

```typescript
kintone.events.on("app.record.edit.submit", (event) => {
  const record: App123.Record = event.record;
  console.log(record);
});
```

| 型                        | 説明                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------ |
| `AppアプリID.Record`      | 保存前のレコードの型定義です。<br>`app.record.edit.submit`イベントなどで使用します。 |
| `AppアプリID.SavedRecord` | 保存後のレコードの型定義です。<br>`app.record.detail.show`イベントなどで使用します。 |

### Tips 3. @kintone/rest-api-client の使い方

@kintone/rest-api-client を使うことで kintone REST API を簡単に操作することができます。

レコードの型には dts-gen で生成した`AppアプリID.SavedRecord`と、`KintoneRestAPI.Record`または`KintoneRestAPI.PartialRecord`を組み合わせて指定してください。

```typescript
import { KintoneRestAPIClient } from "@kintone/rest-api-client";

// クライアントの作成
const client = new KintoneRestAPIClient();

// レコードの取得
const records = await client.record.getAllRecords<
  KintoneRestAPI.Record<App123.SavedRecord>
>({
  app: 123,
});

// レコードの追加
const recordsToAdd: Array<KintoneRestAPI.PartialRecord<App123.SavedRecord>> =
  [{...}, {...}, {...}];
client.record.addAllRecords({ app: 1, records: recordsToAdd });
```

詳しくはドキュメントを参照してください。

https://cybozu.dev/ja/kintone/sdk/rest-api-client/kintone-javascript-client/

## ライセンス

[MIT](./LICENSE)
