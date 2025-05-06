# AI-Ojisan ランディングページ

このプロジェクトは、ギネス世界記録挑戦の資金調達および開発予定アプリの紹介のためのランディングページです。Claude AIと共に30日間で4つのアプリを開発するプロジェクトを紹介しています。縦スワイプ型（フルページスクロール）デザインで、スマートフォンでも快適に閲覧できます。

## 技術スタック

- Next.js (React フレームワーク)
- TypeScript
- TailwindCSS (スタイリング)
- Framer Motion (アニメーション)
- React Icons (アイコンライブラリ)
- React Intersection Observer (スクロールアニメーション)
- fullPage.js (@fullpage/react-fullpage) (フルページスクロール)

## 特徴

- モダンでレスポンシブなデザイン
- インタラクティブな要素とアニメーション
- SEO対応
- パフォーマンス最適化
- コンポーネントベースのアーキテクチャ

## インストール手順

### 前提条件

- Node.js (v14.x 以上)
- npm または yarn

### セットアップ

1. リポジトリをクローンします

```bash
git clone https://github.com/your-username/ai-ojisan-project.git
cd ai-ojisan-project/landing-page
```

2. 依存パッケージをインストールします

```bash
npm install
# または
yarn install
```

3. 開発サーバーを起動します

```bash
npm run dev
# または
yarn dev
```

4. ブラウザで `http://localhost:3000` にアクセスします

## プロジェクト構造

```
landing-page/
├── public/               # 静的ファイル
│   └── images/           # 画像ファイル
├── src/                  # ソースコード
│   ├── components/       # Reactコンポーネント
│   │   ├── Navbar.tsx    # ナビゲーションバー
│   │   ├── HeroSection.tsx  # ヒーローセクション
│   │   └── ...           # その他のコンポーネント
│   ├── pages/            # Next.jsページ
│   │   ├── _app.tsx      # アプリケーションコンポーネント
│   │   ├── _document.tsx # HTMLドキュメント
│   │   └── index.tsx     # メインページ
│   ├── styles/           # スタイルシート
│   │   └── globals.css   # グローバルスタイル
│   ├── hooks/            # カスタムフック
│   └── utils/            # ユーティリティ関数
├── tailwind.config.js    # Tailwind CSS設定
├── next.config.js        # Next.js設定
├── tsconfig.json         # TypeScript設定
└── package.json          # パッケージ依存関係
```

## 各コンポーネントの説明

### ページセクション

1. **Navbar**: ナビゲーションメニューとロゴ
2. **HeroSection**: メインビジュアルと呼びかけ文
3. **GuinnessSection**: ギネス挑戦の詳細説明
4. **AppsSection**: 開発予定の4つのアプリの紹介
5. **StorySection**: 開発者の背景ストーリー
6. **SubscriptionSection**: サポートプランの紹介
7. **FundingSection**: 資金使途の説明
8. **FaqSection**: よくある質問
9. **ContactSection**: お問い合わせフォームとSNSリンク
10. **Footer**: フッターと追加情報

## ビルドと本番デプロイ

1. 本番用ビルドを作成します

```bash
npm run build
# または
yarn build
```

2. ビルドをテストします

```bash
npm run start
# または
yarn start
```

3. ビルドファイルをお好みのホスティングサービス（Vercel, Netlify, AWS等）にデプロイします

## カスタマイズ

- `tailwind.config.js`: カラーパレットやフォントなどのデザイン設定
- `public/images/`: ロゴや画像ファイルの置き換え
- 各コンポーネントファイル: コンテンツとレイアウトの編集

## 画像ファイルについて

以下の画像ファイルをプロジェクトに追加する必要があります：

- `/public/images/logo.png`: プロジェクトロゴ
- `/public/images/hero-bg.jpg`: ヒーローセクションの背景
- `/public/images/story-bg.jpg`: ストーリーセクションの背景
- `/public/images/story-image1.jpg`: ストーリーセクション用画像
- `/public/images/guinness-challenge.jpg`: ギネス挑戦セクション用画像
- `/public/images/app1-preview.jpg` 〜 `/public/images/app4-preview.jpg`: アプリプレビュー画像

## ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。

## 連絡先

プロジェクトに関するお問い合わせは、以下までご連絡ください：

- メール: contact@ai-ojisan-project.com
- Twitter: [@ai_ojisan](https://twitter.com/ai_ojisan)