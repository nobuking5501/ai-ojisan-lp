# 縦スワイプ型ランディングページについて

このプロジェクトでは、fullPage.js（@fullpage/react-fullpage）を使用して縦スワイプ型のランディングページを実装しています。以下にその詳細と使用方法を説明します。

## 実装の概要

1. **fullPage.jsの導入**
   - `@fullpage/react-fullpage`をインストール
   - SSR（サーバーサイドレンダリング）無効化のためにNext.jsの`dynamic`インポートを使用

2. **FullpageWrapperコンポーネント**
   - 各セクションを`<div className="section">`でラップ
   - ナビゲーションドットとツールチップを自動生成
   - セクションごとに背景色を設定可能
   - アンカーリンクでのナビゲーション機能

3. **CSS調整**
   - `fullpage-override.css`でスタイルをカスタマイズ
   - モバイル対応のための調整
   - セクションの高さ設定

## 主な機能

### フルページスクロール
- 1画面ごとのスワイプでセクション間を移動
- マウスホイールやトラックパッドでのスムーズな移動
- キーボードの上下キーでも操作可能

### ナビゲーション
- 画面右側のドットでセクション位置を表示
- ドットにカーソルを合わせるとツールチップでセクション名表示
- ナビゲーションメニューからのリンクでもジャンプ可能

### レスポンシブ対応
- モバイルデバイスでのスワイプジェスチャーサポート
- 768px未満では通常スクロールに自動切り替え（configurable）
- 各セクションは常に画面サイズに合わせて表示

## 使用方法

### セクションの追加
新しいセクションを追加するには、以下の手順に従います：

1. 新しいセクションコンポーネントを作成
2. `index.tsx`の`FullpageWrapper`内に配置
3. `anchors`配列にセクションのアンカー名を追加
4. `sectionsColors`配列に背景色を追加

```typescript
// index.tsxでのセクション追加例
const anchors = [
  'hero',
  'guinness',
  'newSection', // 新しいセクション
  // ...
];

const sectionsColors = [
  '#1f2937',
  '#ffffff',
  '#f0f0f0', // 新しいセクションの背景色
  // ...
];

// ...

<FullpageWrapper anchors={anchors} sectionsColors={sectionsColors}>
  <HeroSection />
  <GuinnessSection />
  <NewSection /> {/* 新しいセクション */}
  {/* ... */}
</FullpageWrapper>
```

### カスタマイズ

#### スクロール速度変更
```typescript
// FullpageWrapper.tsxを編集
<ReactFullpage
  scrollingSpeed={1000} // ミリ秒単位（数値を大きくするとゆっくりに）
  // ...
/>
```

#### ナビゲーション表示の変更
```typescript
// FullpageWrapper.tsxを編集
<ReactFullpage
  navigation={true} // falseにするとナビゲーションドットを非表示
  navigationPosition="right" // "left"にすると左側に表示
  showActiveTooltip={true} // falseにするとツールチップを非表示
  // ...
/>
```

#### レスポンシブ設定
```typescript
// FullpageWrapper.tsxを編集
<ReactFullpage
  responsiveWidth={768} // この幅より狭いと通常スクロールになる
  // ...
/>
```

## 注意点

1. **画像のロード**
   - 必要な画像ファイルを`public/images/`に配置するか、プレースホルダーに変更してください
   - 画像が表示されない場合、コンソールでエラーを確認してください

2. **モバイル表示**
   - 実機でテストして、スワイプ操作の動作を確認してください
   - 高さの短いモバイルデバイスでは、コンテンツが切れる可能性があります

3. **パフォーマンス**
   - 画像の最適化をして、読み込み時間を短縮してください
   - アニメーションが重くなる場合は、一部を無効化することを検討してください

## トラブルシューティング

### セクションの高さが正しく表示されない
- `fullpage-override.css`の`.section`クラスの高さ設定を確認してください
- 特定のブラウザ/デバイスでのみ発生する場合は、対応するメディアクエリを追加してください

### スクロールが滑らかでない
- `scrollingSpeed`の値を調整してみてください
- 重いアニメーションや大きな画像がないか確認してください

### ナビゲーションリンクが機能しない
- アンカー名が`anchors`配列と正確に一致しているか確認してください
- リンクが`#anchor-name`形式になっているか確認してください