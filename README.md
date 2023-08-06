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

### 手順 1. 必須ツールのインストール

以下のツールをインストールします。

| ツール             | ダウンロードリンク                                                                                                                                                                                              |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Node.js            | https://nodejs.org/ja/download                                                                                                                                                                                  |
| Git                | [https://git-scm.com/book/ja/v2/使い始める-Git のインストール](https://git-scm.com/book/ja/v2/%E4%BD%BF%E3%81%84%E5%A7%8B%E3%82%81%E3%82%8B-Git%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB) |
| Visual Studio Code | https://code.visualstudio.com/                                                                                                                                                                                  |

### 手順 2. リポジトリのクローン・セットアップ

開発用テンプレートリポジトリをダウンロードしてセットアップします。

GitHub アカウントを持っている場合は、テンプレートから自分のリポジトリを作成することを推奨しています。

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

### 手順 3. アプリの作成

カスタマイズを追加するアプリを作成します。

セッションでは「営業支援パック」の「案件管理」アプリにカスタマイズを追加します。
https://jp.cybozu.help/k/ja/user/create_app/sales_pack.html

### 手順 4. 認証情報・アプリ情報の設定

以下のファイルを編集します。

- `.env`
  - `KINTONE_BASE_URL`: kintone 環境の URL（例：https://example.cybozu.com）
  - `KINTONE_USERNAME`: ユーザ名
  - `KINTONE_PASSWORD`: パスワード
- `customize-manifest.json`
  - `app`: カスタマイズを追加するアプリのアプリ ID

### 手順 5. 動作確認

以下のコマンドを実行します。

```shell
npm run build
npm run upload
```

アプリのレコード一覧画面にアクセスしてダイアログが表示されたら成功です！

## 開発方法

以下のコマンドを実行します。

```shell
npm run start
```

`src`ディレクトリ内のソースコードを変更すると自動的にカスタマイズのビルド・アップロードが行われます。

### `kintone.events.on`のハンドラに型を指定する

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

### レコードの型定義ファイルを使う

イベントハンドラから取得したレコードに対して型を指定することができます。

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

#### 型定義ファイルの生成方法

以下のコマンドを実行してください。

```shell
npm run generate:dts アプリID
```

`src/@types/app-アプリID.d.ts`というファイルが作成されます。

### @kintone/rest-api-client の使い方

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
