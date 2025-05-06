import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from 'react-icons/fa'

interface FaqItemProps {
  question: string
  answer: string
  isOpen: boolean
  toggleOpen: () => void
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="flex items-center justify-between w-full py-4 text-left font-bold text-gray-800 hover:text-primary-600 transition-colors duration-200"
        onClick={toggleOpen}
      >
        <span>{question}</span>
        {isOpen ? (
          <FaChevronUp className="h-4 w-4 text-primary-500" />
        ) : (
          <FaChevronDown className="h-4 w-4 text-gray-500" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="pb-4 text-gray-600">
          {answer}
        </div>
      </div>
    </div>
  )
}

const FaqSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openFaqs, setOpenFaqs] = useState<number[]>([0]) // 最初のFAQを開いた状態にする

  const toggleFaq = (index: number) => {
    if (openFaqs.includes(index)) {
      setOpenFaqs(openFaqs.filter((i) => i !== index))
    } else {
      setOpenFaqs([...openFaqs, index])
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  const faqs = [
    {
      question: 'ギネス世界記録挑戦の具体的な内容は何ですか？',
      answer: '「非プログラマーがClaude AIと共に30日間で4つの実用的なアプリを開発・リリースする」という世界初の挑戦です。開発するアプリは、キャラクター設定・世界観構築アプリ、記事生成アプリ、SNS投稿文生成アプリ、ランディングページ生成アプリの4つです。この挑戦は、AIと人間のコラボレーションによる創造の可能性を広げるものです。'
    },
    {
      question: 'プロジェクトの資金はどのように使われますか？',
      answer: '目標金額300万円は以下の用途に使用されます：\n1. ギネス世界記録の公式認定費用（申請料、審査料、認定料）\n2. 開発環境の整備（サーバー費用、API使用料、開発ツール）\n3. 専門家証人への謝礼（IT専門家、公証人等）\n4. 記録達成時のイベント開催費\n5. プロジェクト運営費（会計・法務対応等）\nすべての支出は透明性を持って報告します。'
    },
    {
      question: 'IT知識がない方がアプリ開発に挑戦できるのですか？',
      answer: 'はい、それが本プロジェクトの大きな特徴です。私自身も土木現場で働くIT未経験者ですが、AI技術という強力なパートナーの力を借りることで、アイデアを形にすることができます。このプロジェクトは、AIと人間のコラボレーションによって、専門知識がなくても価値あるものを生み出せることを証明する挑戦でもあります。'
    },
    {
      question: 'サポーターになると、どのような特典がありますか？',
      answer: 'サポーターの方には、プラン内容に応じて以下の特典をご用意しています：\n- 開発過程の詳細な記録へのアクセス\n- 開発されるアプリの優先利用権\n- サポーター専用のコミュニティ参加権\n- ギネス記録証明書への名前掲載\n- 開発者との定期的なQ&Aセッション\n- アプリ機能へのリクエスト権\nより詳細な特典はサポートプランのセクションをご確認ください。'
    },
    {
      question: '開発予定のアプリはどのように使えるのですか？',
      answer: '開発される4つのアプリは、クリエイター、マーケター、ブロガー、ビジネスオーナーなど幅広いユーザーに役立つツールです。コンテンツ作成の効率化、アイデア発想の支援、マーケティング素材の作成など、日々の創造的な業務をサポートします。具体的な機能や使用例はアプリ紹介セクションをご覧ください。サポーターの方には、一般リリース前の先行アクセスと特別価格でのご提供を予定しています。'
    },
    {
      question: 'プロジェクトの進捗はどのように確認できますか？',
      answer: 'プロジェクトの進捗は以下の方法で定期的に共有します：\n- サポーター専用の進捗報告メール（週1回）\n- 公式ブログでの開発日記\n- サポーター専用Discordでのリアルタイム更新\n- 月次のオンラインミーティング\n特にサポーターの方には、開発過程での苦労や発見、成功体験など、より詳細な情報を共有いたします。'
    },
    {
      question: 'ギネス記録に失敗した場合はどうなりますか？',
      answer: 'ギネス記録の認定には厳格な基準がありますが、万が一認定に至らなかった場合でも以下のように対応します：\n1. 開発したアプリは予定通りリリースします\n2. サポーターへの特典は変わらず提供します\n3. 失敗の原因分析と学びを詳細に共有します\n4. 状況によっては再挑戦のプランを検討します\nこのプロジェクトの本質は「挑戦すること」と「AIとの共創可能性を示すこと」にあり、その価値は記録の成否に関わらず提供できると考えています。'
    },
    {
      question: 'マレーシア移住とIB教育という夢について、もっと詳しく知りたいです',
      answer: '私の夢は、子供たちに国際的な視野と創造的な問題解決能力を身につけさせるためのIB（国際バカロレア）教育を受けさせることです。マレーシアは教育の質が高く、多文化・多言語環境でありながら生活コストが比較的抑えられるため、この夢を実現するのに理想的な場所だと考えています。このプロジェクトは、その夢への第一歩であり、AIと共に価値を創造するという新しい働き方のモデルケースになればと思っています。'
    }
  ]

  return (
    <section className="py-8 md:py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-6">
            <div className="inline-block mb-4">
              <FaQuestionCircle className="text-5xl text-primary-500 mx-auto" />
            </div>
            <h2 className="title-section text-primary-700">
              よくある質問
            </h2>
            <p className="subtitle-section">
              プロジェクトやサポートに関するよくあるご質問にお答えします
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-6 md:p-8">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaqs.includes(index)}
                  toggleOpen={() => toggleFaq(index)}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-4 text-center">
            <p className="text-gray-700 mb-6">
              ここに載っていない質問がありますか？<br />
              お気軽にお問い合わせください。
            </p>
            <a
              href="#contact"
              className="btn-primary inline-block"
            >
              お問い合わせ
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FaqSection