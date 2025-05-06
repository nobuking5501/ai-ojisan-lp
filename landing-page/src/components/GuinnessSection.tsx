import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMedal, FaRocket, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa'

const GuinnessSection = () => {
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

  const milestones = [
    { text: "プロジェクト計画立案", date: "Day 1-3" },
    { text: "アプリ開発環境構築", date: "Day 4-5" },
    { text: "4つのアプリ開発", date: "Day 6-25" },
    { text: "テスト・リリース", date: "Day 26-30" },
  ]

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-6">
            <div className="inline-block mb-4">
              <FaMedal className="text-6xl text-accent-500 mx-auto" />
            </div>
            <h2 className="title-section text-primary-700">
              ギネス世界記録への挑戦
            </h2>
            <p className="subtitle-section">
              Claude AIと共に30日間で4つのアプリを開発・リリースする<br />
              世界初の挑戦に、あなたのサポートが必要です
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4 items-center">
            <motion.div variants={itemVariants} className="bg-primary-50 rounded-xl p-4 shadow-lg">
              <h3 className="text-xl font-bold text-primary-700 mb-3">挑戦内容</h3>
              
              <div className="space-y-3">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 bg-primary-500 rounded-full flex items-center justify-center">
                      <FaRocket className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">世界最速・最多の記録挑戦</h4>
                    <p className="text-gray-700">
                      「非プログラマーがAI技術のみで30日間という最短期間で最多4つの実用的アプリを同時開発・リリースする」という前例のない世界記録への挑戦です。
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 bg-primary-500 rounded-full flex items-center justify-center">
                      <FaCalendarAlt className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">30日間のスケジュール</h4>
                    <p className="text-gray-700">
                      厳しい時間制限の中で、計画・開発・テスト・リリースの全工程を完了させます。すべての過程はギネス公式審査員によって監視されます。
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-12 w-12 bg-primary-500 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">公式審査基準</h4>
                    <p className="text-gray-700">
                      完成したアプリは実用性、安定性、独自性などの厳格な基準で審査されます。ギネス公式認定には各分野の専門家による証言も必要です。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-40 w-full">
                  <Image 
                    src="/images/guinness-challenge.jpg" 
                    alt="ギネス挑戦イメージ" 
                    fill
                    style={{objectFit: 'cover'}}
                  />
                </div>
                
                <div className="p-3">
                  <h3 className="text-lg font-bold mb-2 text-gray-800">30日間のマイルストーン</h3>
                  
                  <div className="relative">
                    {/* タイムライン線 */}
                    <div className="absolute h-full w-0.5 bg-primary-200 left-3 top-0"></div>
                    
                    {/* マイルストーン */}
                    <div className="space-y-2">
                      {milestones.map((milestone, index) => (
                        <div key={index} className="flex ml-2">
                          <div className="flex-shrink-0 mr-4 relative">
                            <div className="h-6 w-6 bg-primary-500 rounded-full z-10 relative"></div>
                          </div>
                          <div>
                            <p className="font-bold">{milestone.text}</p>
                            <p className="text-primary-500 text-sm">{milestone.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-2 pt-2 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">目標金額</p>
                        <p className="text-2xl font-bold text-primary-700">3,000,000円</p>
                      </div>
                      <button className="btn-primary">
                        プロジェクトを応援する
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants} className="mt-6 text-center">
            <h3 className="text-xl font-bold mb-3 text-gray-800">ギネス世界記録の価値</h3>
            <p className="max-w-3xl mx-auto text-sm text-gray-600">
              この挑戦は単なる記録ではなく、AIと人間の共創が生み出す新しい可能性の証明です。
              私のような非エンジニアでもアイデアを実現できる時代の象徴として、
              多くの人に希望を与えるプロジェクトになると信じています。
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default GuinnessSection