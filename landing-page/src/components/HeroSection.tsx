import React, { useState, useEffect } from 'react'
// import { Link as ScrollLink } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown, FaHandPointer, FaMousePointer } from 'react-icons/fa'

const HeroSection = () => {
  // ナビゲーションガイドの表示状態
  const [showGuide, setShowGuide] = useState(true);
  
  // 一定時間後にガイドを非表示
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGuide(false);
    }, 10000); // 10秒後に非表示
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative h-full flex items-center justify-center overflow-hidden bg-primary-800 pt-10">
      {/* 背景画像 */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-30" />
      
      {/* グラデーションオーバーレイ */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* コンテンツコンテナ */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          {/* タグライン */}
          <h2 className="text-accent-500 font-bold text-xl md:text-2xl mb-4">
            ギネス世界記録挑戦プロジェクト
          </h2>
          
          {/* メインタイトル */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            世界最速・最多<br className="md:hidden" />
            <span className="text-accent-400">30日間</span>で<br className="md:hidden" />
            <span className="text-accent-400">AIと共創</span>する<br className="md:hidden" />
            アプリ開発記録挑戦
          </h1>
          
          {/* サブタイトル */}
          <p className="text-white text-xl md:text-2xl mb-8 opacity-90">
            44歳の土木現場作業員が、家族のマレーシア移住と<br className="hidden md:inline" />
            子供達のIB教育という夢を実現するための挑戦
          </p>
          
          {/* CTAボタン */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a
              href="#plans"
              className="btn-primary text-lg"
            >
              プロジェクトを応援する
            </a>
            
            <a
              href="#story"
              className="btn-secondary text-lg"
            >
              ストーリーを読む
            </a>
          </div>
          
          {/* 目標金額 */}
          <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl p-4 inline-block">
            <p className="text-white mb-1">目標金額</p>
            <p className="text-white text-3xl font-bold">3,000,000<span className="text-xl">円</span></p>
          </div>
        </motion.div>
      </div>
      
      {/* スクロールダウン指示 - シンプルで統一感のあるデザイン */}
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        animate={{ 
          y: [0, 10, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 1.5
        }}
      >
        <motion.div 
          className="text-white flex flex-col items-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.href = "#guinness"}
        >
          <span className="mb-2 font-medium">下にスクロール</span>
          <div className="relative h-10 w-6 border-2 border-white rounded-full flex justify-center">
            <div className="absolute top-1 w-2 h-2 bg-white rounded-full animate-swipe"></div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* ナビゲーションガイド - デスクトップとモバイル共通 */}
      <AnimatePresence>
        {showGuide && (
          <motion.div 
            className="fixed top-24 right-8 z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-black/70 backdrop-blur-sm text-white rounded-xl p-3 shadow-lg max-w-xs">
              <p className="text-sm font-medium mb-2 text-center">ページの操作方法</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <FaMousePointer className="text-white animate-cursor flex-shrink-0" />
                  <span>マウスホイールでスクロール</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaHandPointer className="text-white flex-shrink-0" />
                  <span>スマホでは上下にスワイプ</span>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default HeroSection