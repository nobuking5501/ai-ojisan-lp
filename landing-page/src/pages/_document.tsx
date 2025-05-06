import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta charSet="utf-8" />
        <meta name="description" content="世界最速・最多の30日間AIアプリ開発記録挑戦。非エンジニアがAI技術のみで4つのアプリを同時開発するギネス世界記録に挑戦するAI-ojisan-projectへようこそ！" />
        <meta name="keywords" content="AI, Claude, アプリ開発, ギネス世界記録, クラウドファンディング, AI-ojisan" />
        <meta property="og:title" content="AI-ojisan-project - 世界最速・最多の30日間AIアプリ開発記録挑戦" />
        <meta property="og:description" content="44歳の土木現場作業員が、家族のマレーシア移住と夢の実現のために、世界最速・最多となる30日間で4つのアプリを同時開発・リリースする挑戦。" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ai-ojisan-project.com" />
        <meta property="og:image" content="https://ai-ojisan-project.com/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}