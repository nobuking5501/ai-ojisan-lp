import { useState, useEffect } from 'react'
import Image from 'next/image'
// import { Link as ScrollLink } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // スクロール位置による表示制御と fullPage.js の active セクション検出
    const handleScroll = () => {
      // 通常のスクロール検出
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        // fullPage.js の active セクション検出
        const activeSection = document.querySelector('.section.active');
        if (activeSection && activeSection.id !== 'hero') {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    // イベントリスナー設定
    window.addEventListener('scroll', handleScroll);
    
    // fullPage.js のページ変更を検出するための MutationObserver
    const observer = new MutationObserver(mutations => {
      handleScroll();
    });
    
    // DOM 監視の開始（遅延実行）
    setTimeout(() => {
      const fullPageContainer = document.querySelector('#fullpage');
      if (fullPageContainer) {
        observer.observe(fullPageContainer, { 
          attributes: true,
          childList: false,
          subtree: true
        });
      }
    }, 1000);

    // クリーンアップ
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navLinks = [
    { name: 'ホーム', target: 'hero' },
    { name: 'ギネス挑戦', target: 'guinness' },
    { name: 'アプリ紹介', target: 'apps' },
    { name: 'ストーリー', target: 'story' },
    { name: 'サポートプラン', target: 'plans' },
    { name: 'FAQ', target: 'faq' },
    { name: 'お問い合わせ', target: 'contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-primary-800 py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* ロゴ */}
        <div className="flex items-center">
          <a
            href="#hero"
            className="cursor-pointer"
          >
            <div className="flex items-center">
              <div className="w-10 h-10 bg-accent-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className={`font-bold text-xl ${
                isScrolled ? 'text-primary-500' : 'text-white'
              }`}>
                AI-ojisan
              </span>
            </div>
          </a>
        </div>

        {/* デスクトップメニュー */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.target}`}
              className={`cursor-pointer font-medium hover:text-primary-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* サポートボタン */}
        <div className="hidden md:block">
          <a
            href="#plans"
            className="btn-primary"
          >
            応援する
          </a>
        </div>

        {/* モバイルメニューボタン */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`focus:outline-none ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-2 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.target}`}
                className="block py-2 px-4 text-gray-700 hover:bg-primary-50 hover:text-primary-500 rounded-md cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#plans"
              className="block w-full text-center py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white rounded-md cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              応援する
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar