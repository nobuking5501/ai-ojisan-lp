import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = [
    {
      title: 'プロジェクト',
      links: [
        { name: 'ギネス挑戦について', target: 'guinness' },
        { name: '開発アプリ', target: 'apps' },
        { name: 'マイストーリー', target: 'story' },
        { name: 'サポートプラン', target: 'plans' },
        // { name: '資金の使い道', target: 'funding' }, // 一時的に非表示
      ]
    },
    {
      title: 'サポート',
      links: [
        { name: 'よくある質問', target: 'faq' },
        { name: 'お問い合わせ', target: 'contact' },
        { name: 'プライバシーポリシー', target: '/privacy-policy', isExternal: true },
        { name: '利用規約', target: '/terms-of-service', isExternal: true },
      ]
    }
  ]
  
  const socialLinks = [
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com/ai_ojisan' },
    { name: 'Facebook', icon: <FaFacebook />, url: 'https://facebook.com/ai.ojisan' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com/ai_ojisan' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/in/ai-ojisan' },
    { name: 'YouTube', icon: <FaYoutube />, url: 'https://youtube.com/c/ai-ojisan' },
  ]

  return (
    <footer className="bg-gray-900 text-white h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* ロゴとプロジェクト説明 */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center mr-2">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="font-bold text-lg text-white">AI-ojisan</span>
            </div>
            <p className="text-gray-400 text-xs mb-2">
              世界最速・最多の30日間AIアプリ開発記録挑戦。
              家族のマレーシア移住とIB教育を実現。
            </p>
            <div className="flex space-x-2 mb-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* フッターリンク */}
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="font-bold text-sm mb-2 text-white">{section.title}</h3>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.isExternal ? (
                      <Link
                        href={link.target}
                        className="text-gray-400 hover:text-white transition-colors cursor-pointer text-xs"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <ScrollLink
                        to={link.target}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-gray-400 hover:text-white transition-colors cursor-pointer text-xs"
                      >
                        {link.name}
                      </ScrollLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ニュースレター */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold text-sm mb-2 text-white">ニュースレター</h3>
            <p className="text-gray-400 text-xs mb-2">
              最新のプロジェクト情報をメールでお届けします。
            </p>
            <form className="mb-2">
              <div className="flex space-x-1">
                <input
                  type="email"
                  placeholder="メールアドレス"
                  className="px-2 py-1 bg-gray-800 border border-gray-700 text-white rounded-lg text-xs flex-grow"
                />
                <button
                  type="submit"
                  className="px-2 py-1 bg-primary-600 hover:bg-primary-700 text-white text-xs rounded-lg"
                >
                  登録
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-4 pt-2 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs mb-2 md:mb-0">
            &copy; {currentYear} AI-ojisan-project. All rights reserved.
          </p>
          <div className="flex space-x-3">
            <Link href="/privacy-policy" className="text-gray-500 hover:text-white text-xs transition-colors">
              プライバシー
            </Link>
            <Link href="/terms-of-service" className="text-gray-500 hover:text-white text-xs transition-colors">
              利用規約
            </Link>
            <Link href="/legal-notice" className="text-gray-500 hover:text-white text-xs transition-colors">
              特商法
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer