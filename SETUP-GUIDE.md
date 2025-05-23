# 縦スワイプ型ランディングページのセットアップガイド

このガイドでは、AI-ojisan-projectの縦スワイプ型ランディングページをセットアップして実行する方法を説明します。

## 前提条件

- Node.js (v14.x 以上)
- npm または yarn
- PowerShell（Windowsの場合）

## インストール手順

### 1. パッケージのインストール

PowerShellを開き、以下のコマンドを実行してください：

```powershell
# プロジェクトディレクトリに移動
cd C:\Users\user\Desktop\ai-ojisan-project\landing-page

# 依存パッケージのインストール
npm install
```

### 2. 開発サーバーの起動

ポート4000でアプリケーションを起動します：

```powershell
# 開発サーバーを起動
npm run dev
```

インストールと起動が完了したら、Webブラウザで以下のURLにアクセスしてください：

```
http://localhost:4000
```

## 画像の追加

現在、プレースホルダー画像が使用されているため、実際の画像ファイルを追加する必要があります。以下の画像ファイルを`public/images/`ディレクトリに配置してください：

1. logo.png - プロジェクトロゴ（推奨サイズ: 200x200px）
2. hero-bg.jpg - ヒーローセクションの背景画像（推奨サイズ: 1920x1080px）
3. story-bg.jpg - ストーリーセクションの背景画像（推奨サイズ: 1920x1080px）
4. story-image1.jpg - ストーリーセクション用の画像（推奨サイズ: 600x400px）
5. guinness-challenge.jpg - ギネス挑戦セクション用の画像（推奨サイズ: 800x600px）
6. app1-preview.jpg～app4-preview.jpg - アプリのプレビュー画像（推奨サイズ: 800x450px）
7. og-image.jpg - OGP用の画像（推奨サイズ: 1200x630px）

## 動作確認

以下の機能を確認してください：

### 1. 縦スワイプ操作

- スマートフォンでの縦スワイプでページが切り替わるか
- デスクトップでのマウスホイールやトラックパッド操作でページが切り替わるか
- キーボードの上下キーでページが切り替わるか

### 2. ナビゲーション

- 画面右側のナビゲーションドットが表示されるか
- ドットをクリックすると対応するセクションに移動するか
- ナビゲーションメニューのリンクをクリックすると対応するセクションに移動するか

### 3. レスポンシブデザイン

- スマートフォンやタブレットで適切に表示されるか
- 画面サイズによってレイアウトが調整されるか
- 小さい画面でもコンテンツが読みやすいか

## トラブルシューティング

### 1. 画像が表示されない

画像ファイルが正しい場所に配置されているか確認してください。一時的な対応として、コンポーネント内のImage要素を以下のように変更できます：

```jsx
<Image 
  src="https://placehold.jp/3d4070/ffffff/800x450.png?text=AI-ojisan-App-Preview" 
  alt="アプリプレビュー" 
  width={800}
  height={450}
/>
```

### 2. スタイルが適用されない

CSSインポートが正しく行われているか確認してください。`src/styles/globals.css`に以下のインポート文があることを確認してください：

```css
@import './fullpage-override.css';
```

### 3. 縦スワイプが動作しない

以下の点を確認してください：

- fullPage.jsが正しくインストールされているか
- `FullpageWrapper.tsx`のコンポーネントが正しく設定されているか
- モバイルデバイスでのタッチイベントが有効になっているか

## カスタマイズ

ランディングページのカスタマイズについては、`FULLPAGE-USAGE.md`を参照してください。セクションの追加や各種設定の変更方法が記載されています。

## デプロイ

本番環境へのデプロイは以下の手順で行います：

```powershell
# 本番用ビルドを作成
npm run build

# ビルドをテスト
npm run start
```

ビルドされたアプリケーションは、Vercel、Netlify、AWS Amplifyなどのサービスにデプロイできます。

## 補足情報

- 本ランディングページは、Next.js、TypeScript、TailwindCSS、fullPage.jsを使用して構築されています
- 縦スワイプ操作はfullPage.jsライブラリによって実現されています
- デザインはレスポンシブで、スマートフォンからデスクトップまであらゆるデバイスに対応しています

詳細なカスタマイズ方法や拡張方法については、`README.md`および`FULLPAGE-USAGE.md`を参照してください。