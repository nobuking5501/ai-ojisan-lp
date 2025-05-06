import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMoneyBillWave, FaRegCheckCircle } from 'react-icons/fa'

// 円グラフ用のコンポーネント
const PieChart = () => {
  const items = [
    { label: 'ギネス公式認定費用', percentage: 40, color: 'bg-primary-500' },
    { label: '開発環境整備', percentage: 25, color: 'bg-accent-500' },
    { label: '専門家証人謝礼', percentage: 15, color: 'bg-primary-300' },
    { label: 'イベント開催費', percentage: 10, color: 'bg-accent-300' },
    { label: 'プロジェクト運営費', percentage: 10, color: 'bg-primary-200' },
  ]

  // 円グラフの描画に必要な計算
  let cumulativePercentage = 0
  
  return (
    <div className="relative">
      <div className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden">
        {items.map((item, index) => {
          const startPercentage = cumulativePercentage
          cumulativePercentage += item.percentage
          
          return (
            <div
              key={index}
              className={`absolute ${item.color}`}
              style={{
                top: '50%',
                left: '50%',
                width: '100%',
                height: '100%',
                transformOrigin: '0 0',
                transform: `rotate(${startPercentage * 3.6}deg) skew(${90 - item.percentage * 3.6}deg)`,
              }}
            ></div>
          )
        })}
      </div>
      
      <div className="mt-3 space-y-1">
        {items.map((item, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-2 h-2 rounded-full mr-1 ${item.color}`}></div>
            <span className="text-xs text-gray-700 flex-1">{item.label}</span>
            <span className="font-bold text-xs">{item.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const FundingSection = () => {
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

  const fundingItems = [
    {
      title: 'ギネス公式認定費用',
      amount: '1,200,000円',
      details: '申請料、審査料、認定官派遣費用、認定証発行費など'
    },
    {
      title: '開発環境整備',
      amount: '750,000円',
      details: 'サーバー費用、API使用料、開発ツール、クラウドサービス利用料など'
    },
    {
      title: '専門家証人謝礼',
      amount: '450,000円',
      details: 'IT専門家、公証人、翻訳者などへの謝礼'
    },
    {
      title: 'イベント開催費',
      amount: '300,000円',
      details: '記録達成時のオンラインイベント開催費用'
    },
    {
      title: 'プロジェクト運営費',
      amount: '300,000円',
      details: '会計・法務対応、コミュニティ運営費用など'
    }
  ]

  return (
    <section className="h-screen flex items-center justify-center bg-white">
      <div className="container mx-auto px-3">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-2">
            <div className="inline-block mb-1">
              <FaMoneyBillWave className="text-2xl text-accent-500 mx-auto" />
            </div>
            <h2 className="title-section text-primary-700 text-xl md:text-2xl">
              資金の使い道
            </h2>
            <p className="subtitle-section text-xs md:text-sm">
              いただいたサポート資金は透明性を持って以下の用途に使用します
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 items-center relative">
            <motion.div variants={itemVariants} className="order-2 md:order-1 relative z-10">
              <div className="bg-white rounded-xl shadow-lg p-4">
                <h3 className="text-lg font-bold mb-3 text-gray-800">資金使途の詳細</h3>
                
                <div className="space-y-2 max-h-[35vh] overflow-y-auto pr-2">
                  {fundingItems.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mr-2">
                        <div className="h-5 w-5 bg-primary-50 rounded-full flex items-center justify-center">
                          <FaRegCheckCircle className="h-3 w-3 text-primary-500" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <h4 className="font-bold text-gray-800 text-xs">{item.title}</h4>
                          <span className="font-bold text-primary-600 text-xs">{item.amount}</span>
                        </div>
                        <p className="text-xs text-gray-600">{item.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-3 border-t border-gray-100 pt-3">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-800">目標金額</span>
                    <span className="font-bold text-lg text-primary-600">3,000,000円</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-2 bg-primary-50 rounded-xl p-2">
                <h3 className="text-xs font-bold mb-1 text-primary-700">透明性の確保について</h3>
                <p className="text-xs text-gray-700">
                  プロジェクトの進行に合わせて資金の使途を定期的に報告。サポーターの皆様には詳細な収支報告を月次でお届けし、財務状況を常に透明に保ちます。
                </p>
                <div className="mt-1">
                  <button className="bg-primary-100 hover:bg-primary-200 text-primary-700 font-bold py-1 px-2 rounded text-xs transition-colors duration-200">
                    詳細な資金計画を見る
                  </button>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="order-1 md:order-2 relative">
              <div className="transform scale-75 md:scale-90 opacity-30">
                <PieChart />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FundingSection