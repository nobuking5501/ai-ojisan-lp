import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import StorySection from '@/components/StorySection'
import StorySection2 from '@/components/StorySection2'
import GuinnessSection from '@/components/GuinnessSection'
import AppsSection from '@/components/AppsSection'
import SubscriptionSection from '@/components/SubscriptionSection'
import FaqSection from '@/components/FaqSection'
import FundingSection from '@/components/FundingSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

// SSRを無効化してクライアントサイドのみでfullPageをロード
const FullpageWrapper = dynamic(
  () => import('@/components/FullpageWrapper'),
  { ssr: false }
);

export default function Home() {
  // fullPageで使用するセクションアンカー
  // 重要: 配置順序をコンポーネントの順序と一致させる
  const anchors = [
    'hero',       // 1. HeroSection
    'guinness',   // 2. GuinnessSection
    'apps',       // 3. AppsSection
    'story',      // 4. StorySection (1ページ目)
    'story2',     // 5. StorySection2 (2ページ目)
    'plans',      // 6. SubscriptionSection
    // 'funding',    // 7. FundingSection - 一時的に非表示 (「資金の使い道」)
    'faq',        // 7. FaqSection
    'contact',    // 8. ContactSection
    'footer'      // 9. Footer
  ];

  // セクションの背景色
  const sectionsColors = [
    '#1f2937', // hero (dark blue)
    '#ffffff', // guinness (white)
    '#f9fafb', // apps (light gray)
    '#f9fafb', // story (light gray)
    '#f3f4f6', // story2 (light gray with gradient)
    '#ffffff', // plans (white)
    // '#ffffff', // funding (white) - 一時的に非表示 (「資金の使い道」)
    '#f9fafb', // faq (light gray)
    '#eef2ff', // contact (light blue)
    '#1f2937'  // footer (dark blue)
  ];

  return (
    <>
      <Head>
        <title>AI-ojisan-project | 世界最速・最多の30日間AIアプリ開発記録挑戦</title>
        <meta name="description" content="44歳の土木現場作業員が、家族のマレーシア移住と夢の実現のために、世界最速・最多となる30日間で4つのアプリを同時開発・リリースする挑戦。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <FullpageWrapper anchors={anchors} sectionsColors={sectionsColors}>
          <HeroSection />
          <GuinnessSection />
          <AppsSection />
          <StorySection />
          <StorySection2 />
          <SubscriptionSection />
          {/* FundingSection - 一時的に非表示 (「資金の使い道」検索キーワード) */}
          {/* <FundingSection /> */}
          <FaqSection />
          <ContactSection />
          <Footer />
        </FullpageWrapper>
      </main>
    </>
  )
}