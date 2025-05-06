import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCrown, FaCheck, FaStar, FaRocket } from 'react-icons/fa'
import { paymentLinks } from '@/config/payment-links'

const SubscriptionSection = () => {
  const [isYearly, setIsYearly] = useState(false)
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

  const plans = [
    {
      id: 'basic',
      name: 'サポーター',
      icon: <FaStar className="h-12 w-12 text-accent-400" />,
      price: {
        monthly: 2980,
        yearly: 29800,
      },
      description: '基本的なサポート特典が含まれるプラン',
      features: [
        'ギネス挑戦の全過程へのアクセス',
        '開発中アプリの使用権',
        'サポーター専用Discord参加権',
        'ギネス挑戦者との月1回のQ&Aセッション',
      ],
      highlighted: false,
      bgClass: 'bg-white',
    },
    {
      id: 'pro',
      name: 'プロサポーター',
      icon: <FaCrown className="h-12 w-12 text-accent-500" />,
      price: {
        monthly: 5980,
        yearly: 59800,
      },
      description: 'より密な関わりと特別特典があるプラン',
      features: [
        '「サポーター」プランの全特典',
        '開発アプリの永続ライセンス',
        'アプリ機能リクエスト権（毎月1回）',
        'ギネス認定書への名前掲載',
        'サポーター専用ウェビナー参加権',
      ],
      highlighted: true,
      bgClass: 'bg-primary-50',
    },
    {
      id: 'business',
      name: 'ビジネスサポーター',
      icon: <FaRocket className="h-12 w-12 text-primary-500" />,
      price: {
        monthly: 9800,
        yearly: 98000,
      },
      description: 'ビジネス利用に最適化されたプラン',
      features: [
        '「プロサポーター」プランの全特典',
        'ビジネス向け拡張機能の利用権',
        '優先サポート&カスタマイズ対応',
        'ビジネスケースでの活用コンサルティング',
        'チーム利用ライセンス（最大5ユーザー）',
      ],
      highlighted: false,
      bgClass: 'bg-white',
    },
    {
      id: 'partner',
      name: 'パートナー',
      icon: <FaCrown className="h-12 w-12 text-primary-700" />,
      price: {
        monthly: 29800,
        yearly: 298000,
      },
      description: 'プロジェクトへの深い関与と全面的なサポート',
      features: [
        '「ビジネスサポーター」プランの全特典',
        'ギネス挑戦への公式パートナー認定',
        'ギネス認定証での企業ロゴ掲載',
        'カスタム機能の優先開発対応',
        '完全カスタマイズ可能なプレミアムライセンス',
        '月次戦略ミーティング（1時間）',
      ],
      highlighted: false,
      bgClass: 'bg-white',
    },
  ]

  return (
    <section className="h-screen flex items-center bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-4">
            <h2 className="title-section text-primary-700 text-2xl md:text-3xl">
              サポートプラン
            </h2>
            <p className="subtitle-section text-sm md:text-base mb-2">
              あなたのサポートが、世界初のギネス記録挑戦を支えます<br />
              応援いただいた方には感謝を込めて特別な特典をご用意しています
            </p>
            
            {/* 料金切り替えスイッチ */}
            <div className="flex items-center justify-center mt-2 mb-4">
              <span className={`mr-2 text-base ${!isYearly ? 'font-bold text-primary-600' : 'text-gray-500'}`}>
                月額
              </span>
              <label className="relative inline-block w-12 h-6">
                <input
                  type="checkbox"
                  className="opacity-0 w-0 h-0"
                  checked={isYearly}
                  onChange={() => setIsYearly(!isYearly)}
                />
                <span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-primary-300 transition-all duration-300 rounded-full
                  ${isYearly ? 'bg-primary-500' : ''}`}
                >
                  <span className={`absolute h-4 w-4 left-1 bottom-1 bg-white rounded-full transition-all duration-300
                    ${isYearly ? 'transform translate-x-6' : ''}`}
                  ></span>
                </span>
              </label>
              <span className={`ml-2 text-base ${isYearly ? 'font-bold text-primary-600' : 'text-gray-500'}`}>
                年額 <span className="bg-accent-100 text-accent-700 px-1 py-0.5 rounded-full text-xs font-bold">お得</span>
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 max-h-[65vh] overflow-y-auto py-2">
            {plans.map((plan) => (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                className={`rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 
                  ${plan.highlighted ? 'border-2 border-primary-500 md:transform md:-translate-y-1' : ''} ${plan.bgClass}`}
              >
                <div className={`p-3 ${plan.highlighted ? 'bg-primary-500 text-white' : 'bg-gray-50'}`}>
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className={`text-base font-bold ${plan.highlighted ? 'text-white' : 'text-gray-800'}`}>
                      {plan.name}
                    </h3>
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ml-auto
                      ${plan.highlighted ? 'bg-white' : 'bg-primary-50'}`}>
                      {React.cloneElement(plan.icon, { className: "h-4 w-4" })}
                    </div>
                  </div>
                  <div className="mb-1">
                    <span className="text-xl font-bold">
                      ¥{isYearly ? plan.price.yearly.toLocaleString() : plan.price.monthly.toLocaleString()}
                    </span>
                    <span className={`text-xs ${plan.highlighted ? 'text-white opacity-80' : 'text-gray-500'}`}>
                      /{isYearly ? '年' : '月'}
                    </span>
                  </div>
                  <p className={`${plan.highlighted ? 'text-white opacity-90' : 'text-gray-600'} text-xs mb-1`}>
                    {plan.description}
                  </p>
                </div>
                
                <div className="p-2">
                  <ul className="space-y-1">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheck className="h-3 w-3 text-primary-500 mr-1 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href={isYearly ? paymentLinks[plan.id].yearly : paymentLinks[plan.id].monthly}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`block w-full mt-3 py-1.5 px-2 rounded-md font-bold text-sm transition-colors duration-200 text-center
                      ${plan.highlighted 
                        ? 'bg-primary-500 hover:bg-primary-600 text-white' 
                        : 'bg-white hover:bg-gray-50 text-primary-600 border border-primary-500'}`}
                  >
                    {plan.highlighted ? '今すぐ応援する' : 'サポートする'}
                  </a>
                </div>
                
                {plan.highlighted && (
                  <div className="bg-primary-500 text-white text-center py-0.5 text-xs font-bold">
                    一番人気
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={itemVariants} className="mt-4 bg-gray-50 rounded-lg p-3 max-w-4xl mx-auto">
            <h3 className="text-base font-bold mb-2 text-center text-gray-800">
              サポートに関するよくある質問
            </h3>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <h4 className="font-bold text-primary-700 mb-1">サブスクリプションはいつでも解約できますか？</h4>
                <p className="text-gray-600">
                  はい、いつでも解約可能です。年額プランは初年度満了後に更新。
                </p>
              </div>
              <div>
                <h4 className="font-bold text-primary-700 mb-1">支払い方法は何がありますか？</h4>
                <p className="text-gray-600">
                  クレジットカード、銀行振込、PayPalに対応しています。
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default SubscriptionSection