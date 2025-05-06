import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaArrowDown } from 'react-icons/fa'

const StorySection = () => {
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

  const scrollToNext = () => {
    // 次のセクションへスクロール
    const element = document.querySelector('[data-anchor="story2"]');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gray-50 h-screen flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={variants} className="title-section text-primary-700 text-3xl md:text-4xl mb-2">
            夢を諦めなかった物語
          </motion.h2>
          
          <motion.p variants={variants} className="subtitle-section text-lg md:text-xl mb-6">
            44歳、送電線業界の重機管理職・北村信樹（AI-ojisan）の挑戦
          </motion.p>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <motion.div variants={variants} className="space-y-4">
              <div className="bg-white rounded-xl shadow-lg p-4 relative transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 left-6 -translate-y-1/2 bg-primary-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-bold mt-3 mb-2 text-gray-800">挫折からの再起</h3>
                <p className="text-gray-600">
                  <strong>絶望の淵から希望へ</strong>。自営業の失敗と自殺未遂から立ち上がり、現在は送電線建設会社で重機管理の道を歩んでいます。「諦めた時がすべての終わり」という信念が、未来を切り開く原動力です。
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-4 relative transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="absolute top-0 left-6 -translate-y-1/2 bg-primary-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-bold mt-3 mb-2 text-gray-800">揺るぎない家族の夢</h3>
                <p className="text-gray-600">
                  <strong>困難を乗り越え、夢へ向かって</strong>。妻エリカ、りほ、りきとの家族4人。財産を失う大きな試練に直面しても、マレーシア・デザパークシティへの移住と子どもたちへのIB教育という夢を決して諦めません。
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={variants} className="flex flex-col space-y-4">
              <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/images/story-image3.jpg" 
                  alt="送電線建設現場での日常" 
                  fill
                  style={{objectFit: 'cover'}}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center p-4">
                  <div className="max-w-md text-center">
                    <h4 className="text-xl font-bold text-white mb-2">現場から未来を切り拓く</h4>
                    <p className="text-sm text-white/90">
                      <strong>朝5時、夢のための一日が始まる</strong>。送電線建設の現場で重機管理の仕事に従事する毎日。体力的に厳しくとも、家族との幸せな未来のために、昼は土木、夜はコードを書く二足のわらじで挑戦を続けています。
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-lg p-4 text-white">
                <h3 className="text-xl font-bold mb-2">
                  限界を超える挑戦
                </h3>
                <p className="text-sm">
                  <strong>不可能を可能に</strong>。この挑戦は単なる記録ではなく、革命です。AIの力で、プログラミング経験ゼロから短期間で実用アプリを開発できる証明。夢を諦めかけているすべての人に、新時代の可能性を示すための挑戦です。
                </p>
                <div className="mt-3 flex justify-center">
                  <blockquote className="italic text-white/90 text-sm font-serif text-center font-bold">
                    "家族と海のそばで、笑顔で暮らす未来を<br />必ず、実現します"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* 次のページへのナビゲーション */}
          <motion.div 
            variants={variants} 
            className="flex justify-center mt-6"
            whileHover={{ y: [0, 5, 0], transition: { repeat: Infinity, duration: 1 } }}
          >
            <button
              onClick={scrollToNext}
              className="bg-primary-500 text-white rounded-full p-3 shadow-lg flex items-center space-x-2 transform transition-transform hover:scale-105"
            >
              <span className="font-bold text-sm">もっと詳しく知る</span>
              <FaArrowDown className="h-4 w-4" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default StorySection