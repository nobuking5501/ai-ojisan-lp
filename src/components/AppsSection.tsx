import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaStar, FaLaptopCode, FaPencilAlt, FaComments, FaFileAlt } from 'react-icons/fa'

const AppsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  const apps = [
    {
      id: 1,
      title: "キャラクター設定・世界観構築アプリ",
      description: "小説や漫画、ゲームの世界観とキャラクターを簡単に作成できるアプリ。AI支援によりストーリー設定の整合性を保ちながら、魅力的な世界を構築できます。",
      icon: <FaPencilAlt className="h-12 w-12 text-white" />,
      image: "/images/app1-preview.jpg",
      features: ["キャラクタープロファイル生成", "世界観設定の整合性チェック", "ストーリーラインの自動提案", "設定の視覚化ツール"]
    },
    {
      id: 2,
      title: "記事生成アプリ",
      description: "ブログ、ニュース記事、ホワイトペーパーなど、様々な形式の記事を効率的に作成するためのアプリ。SEO対策や読者の興味を引く構成を自動提案します。",
      icon: <FaFileAlt className="h-12 w-12 text-white" />,
      image: "/images/app2-preview.jpg",
      features: ["複数の記事フォーマット", "SEO最適化の自動提案", "読みやすさと構成の分析", "参考資料の自動引用"]
    },
    {
      id: 3,
      title: "SNS投稿文生成アプリ",
      description: "各SNSプラットフォームの特性に合わせた効果的な投稿文を生成するアプリ。ハッシュタグ提案やエンゲージメント向上のための文章構成を自動的に行います。",
      icon: <FaComments className="h-12 w-12 text-white" />,
      image: "/images/app3-preview.jpg",
      features: ["プラットフォーム別最適化", "トレンドハッシュタグ分析", "エンゲージメント向上策提案", "投稿スケジュール管理"]
    },
    {
      id: 4,
      title: "ランディングページ生成アプリ",
      description: "商品やサービスを効果的にアピールするランディングページを簡単に作成できるアプリ。コンバージョン率を高めるデザインと文言を自動提案します。",
      icon: <FaLaptopCode className="h-12 w-12 text-white" />,
      image: "/images/app4-preview.jpg",
      features: ["高コンバージョンテンプレート", "A/Bテスト機能", "モバイル最適化デザイン", "SEO対策ガイド"]
    }
  ]

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-2">
            <div className="inline-block mb-2">
              <FaStar className="text-5xl text-accent-500 mx-auto" />
            </div>
            <h2 className="title-section text-primary-700 text-3xl md:text-4xl mb-4">
              開発予定のアプリ
            </h2>
            <p className="subtitle-section text-lg md:text-xl mb-8">
              30日間のチャレンジで開発・リリースする4つのアプリ<br />
              サポーターには特別価格でご提供します
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto w-full">
            {apps.map((app) => (
              <motion.div 
                key={app.id}
                variants={itemVariants}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
              >
                {/* カードヘッダー - アイコンと画像を調整 */}
                <div className="relative h-24 bg-primary-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {app.image ? (
                      <Image 
                        src={app.image} 
                        alt={app.title} 
                        fill
                        style={{objectFit: 'cover'}}
                        className="opacity-90" 
                      />
                    ) : (
                      <div className="bg-primary-500 h-full w-full flex items-center justify-center">
                        <div className="h-16 w-16 text-white">
                          {app.icon}
                        </div>
                      </div>
                    )}
                  </div>
                  {/* アイコンを右上に移動し、サイズを調整 */}
                  <div className="absolute top-2 right-2 h-12 w-12 bg-primary-500 rounded-full flex items-center justify-center z-10 shadow-md">
                    {app.icon}
                  </div>
                  
                  {/* タイトルを画像の上に配置 - 1行に収める */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 z-5">
                    <h3 className="text-base font-bold text-white truncate whitespace-nowrap overflow-hidden">{app.title}</h3>
                  </div>
                </div>
                
                <div className="p-3 flex-grow flex flex-col" style={{ marginTop: 0 }}>
                  {/* 完全にタイトルを削除し、説明文のみを表示 */}
                  <p className="text-sm text-gray-600 mt-0 mb-0 flex-grow leading-snug">{app.description}</p>
                  
                  <div className="border-t border-gray-200 pt-2 mt-auto">
                    <h4 className="font-semibold text-gray-700 mb-1 text-sm">主な機能</h4>
                    <ul className="grid grid-cols-1 gap-1">
                      {app.features.slice(0, 2).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-3.5 w-3.5 text-primary-500 mr-1 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-xs text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={itemVariants} className="mt-6 text-center">
            <div className="bg-primary-50 rounded-lg p-4 max-w-3xl mx-auto shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-primary-700">
                これらのアプリがあなたのビジネスをどう変えるか
              </h3>
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                こちらのアプリは単体でも強力ですが、組み合わせることでコンテンツ作成からマーケティングまでの一連のワークフローを効率化できます。非エンジニアでも簡単に使えるよう、直感的なインターフェースと詳細なガイドを用意します。
              </p>
              <button className="btn-primary text-sm py-2 px-6 text-white bg-primary-500 rounded-lg shadow-md hover:shadow-lg transition-all">
                アプリ詳細をもっと見る
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AppsSection