import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCalendarAlt, FaClock, FaLaptopCode, FaHeart } from 'react-icons/fa'

const StorySection2 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        staggerChildren: 0.3
      }
    }
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={variants} className="title-section text-primary-700 text-3xl mb-2">
            可能性を切り拓く日々
          </motion.h2>
          
          <motion.p variants={variants} className="subtitle-section text-lg mb-6">
            <strong>限られた時間で無限の可能性を</strong> — Claudeと共に挑む革新の軌跡
          </motion.p>

          <div className="grid md:grid-cols-2 gap-4">
            <motion.div variants={variants} className="bg-white rounded-xl shadow-lg p-4 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-500 rounded-full w-8 h-8 flex items-center justify-center">
                <FaCalendarAlt className="text-white text-sm" />
              </div>
              
              <h3 className="text-lg font-bold text-center mt-3 mb-3 text-primary-700">挑戦者の一日</h3>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center">
                  <div className="bg-primary-100 rounded-lg p-1 mr-2 flex-shrink-0">
                    <span className="font-bold text-primary-700 text-xs">5:00</span>
                  </div>
                  <span>起床・出勤準備</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary-100 rounded-lg p-1 mr-2 flex-shrink-0">
                    <span className="font-bold text-primary-700 text-xs">5:30</span>
                  </div>
                  <span>出勤</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary-100 rounded-lg p-1 mr-2 flex-shrink-0">
                    <span className="font-bold text-primary-700 text-xs">6:00</span>
                  </div>
                  <span>仕事開始</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary-100 rounded-lg p-1 mr-2 flex-shrink-0">
                    <span className="font-bold text-primary-700 text-xs">17:00</span>
                  </div>
                  <span>仕事終了</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary-100 rounded-lg p-1 mr-2 flex-shrink-0">
                    <span className="font-bold text-primary-700 text-xs">18:00</span>
                  </div>
                  <span>帰宅・家族時間</span>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary-100 rounded-lg p-1 mr-2 flex-shrink-0">
                    <span className="font-bold text-primary-700 text-xs">21:00</span>
                  </div>
                  <span>開発作業開始</span>
                </div>
              </div>
              
              <div className="mt-3 bg-primary-50 rounded-lg p-2">
                <h4 className="font-bold text-primary-700 text-sm mb-1">週間スケジュール</h4>
                <div className="flex flex-wrap gap-1 text-xs">
                  <span className="bg-primary-100 text-primary-700 rounded-full px-2 py-1 font-medium">平日: 21:00～深夜 開発</span>
                  <span className="bg-primary-100 text-primary-700 rounded-full px-2 py-1 font-medium">休日: 17:00～21:00 開発</span>
                  <span className="bg-primary-100 text-primary-700 rounded-full px-2 py-1 font-medium">GW: 家族と開発を両立</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={variants} className="flex flex-col space-y-4">
              <div className="bg-white rounded-xl shadow-lg p-4 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-500 rounded-full w-8 h-8 flex items-center justify-center">
                  <FaLaptopCode className="text-white text-sm" />
                </div>
                
                <h3 className="text-lg font-bold text-center mt-3 mb-2 text-primary-700">AI革命との邂逅</h3>
                
                <p className="text-xs text-gray-700 mb-2">
                  <strong>運命の出会いが人生を変えた</strong>。ITとは無縁の私がClaudeと出会い、眠っていた可能性が目覚めました。生活必需品を削ってでもAI代を捻出し、Claude API、MCP、Claude Codeの驚異的な能力を最大限に引き出しながら、技術的な限界を突破し続けています。
                </p>
                
                <div className="flex flex-wrap gap-1">
                  <span className="bg-primary-100 text-primary-700 rounded-full px-2 py-0.5 text-xs">Claude API</span>
                  <span className="bg-primary-100 text-primary-700 rounded-full px-2 py-0.5 text-xs">Claude MCP</span>
                  <span className="bg-primary-100 text-primary-700 rounded-full px-2 py-0.5 text-xs">Claude Code</span>
                  <span className="bg-primary-100 text-primary-700 rounded-full px-2 py-0.5 text-xs">Next.js</span>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-lg p-4 text-white">
                <h3 className="text-lg font-bold mb-2 text-center">
                  AI時代の夢実現
                </h3>
                <p className="text-xs mb-2">
                  <strong>不可能を可能に</strong>。マレーシア・デザパークシティへの移住と子どもたちへのIB教育という夢に向け、与えられた環境の中で限界を突破する挑戦を続けています。
                </p>
                <p className="text-xs">
                  この挑戦は<strong>革命の証明</strong>です。AIの力で、プログラミング経験ゼロの人でも想像を形にできる時代が来ました。同じ境遇のすべての人に、新時代の可能性を示し、夢への希望を届けます。
                </p>
                <blockquote className="italic text-white/90 text-xs font-serif mt-2 text-center font-bold">
                  "どんな状況でも、夢を諦めなければ道は開ける。<br />AI時代の今こそ、その可能性は<span class="underline">無限大</span>です。"
                </blockquote>
              </div>
            </motion.div>
          </div>
          
          {/* 底部のセクション - 技術とビジョン */}
          <motion.div variants={variants} className="mt-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 relative">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-base text-primary-600 mb-1">AI×人間の無限の可能性</h4>
                <p className="text-xs text-gray-700">
                  <strong>ゼロからの革命</strong>。プログラミング未経験でも、Claudeとの協働で不可能を可能に。Google Apps Scriptから始まり、Next.jsでの本格アプリ開発、Vercelデプロイまで実現。これは技術革命であり、新時代の幕開けです。
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-base text-primary-600 mb-1">世界が注目する挑戦</h4>
                <p className="text-xs text-gray-700">
                  <strong>前人未到の30日間</strong>。4つのアプリを同時開発・リリースする世界最速・最多の記録に挑戦。「Claudeで人生を逆転させる証明者」として、AI時代の新たな地図を描き、多くの人の人生を変える可能性を証明します。
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default StorySection2