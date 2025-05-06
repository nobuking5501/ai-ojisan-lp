import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    subject: 'general',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    // ここでは実際のAPIは呼び出しません。実装時に追加します。
    try {
      // フォーム送信の処理をシミュレート
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // 成功した場合
      setSubmitted(true)
      setFormState({
        name: '',
        email: '',
        message: '',
        subject: 'general',
      })
    } catch (err) {
      setError('送信中にエラーが発生しました。後ほど再試行してください。')
    } finally {
      setLoading(false)
    }
  }

  const socialLinks = [
    { name: 'Twitter', icon: <FaTwitter className="h-6 w-6" />, url: 'https://twitter.com/ai_ojisan' },
    { name: 'Facebook', icon: <FaFacebook className="h-6 w-6" />, url: 'https://facebook.com/ai.ojisan' },
    { name: 'Instagram', icon: <FaInstagram className="h-6 w-6" />, url: 'https://instagram.com/ai_ojisan' },
    { name: 'LinkedIn', icon: <FaLinkedin className="h-6 w-6" />, url: 'https://linkedin.com/in/ai-ojisan' },
    { name: 'YouTube', icon: <FaYoutube className="h-6 w-6" />, url: 'https://youtube.com/c/ai-ojisan' },
  ]

  return (
    <section className="py-8 md:py-12 bg-primary-50">
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
              <FaEnvelope className="text-5xl text-primary-500 mx-auto" />
            </div>
            <h2 className="title-section text-primary-700">
              お問い合わせ
            </h2>
            <p className="subtitle-section">
              プロジェクトやサポートに関するご質問・ご相談はこちらからお気軽にどうぞ
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-6 text-gray-800">メッセージを送る</h3>
                
                {!submitted ? (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        お名前
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="山田 太郎"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        メールアドレス
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="example@email.com"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                        お問い合わせ内容
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      >
                        <option value="general">一般的なお問い合わせ</option>
                        <option value="support">サポート・寄付について</option>
                        <option value="apps">開発アプリについて</option>
                        <option value="partnership">パートナーシップ・メディア掲載</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        メッセージ
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="お問い合わせ内容を入力してください"
                      ></textarea>
                    </div>
                    
                    {error && (
                      <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
                        {error}
                      </div>
                    )}
                    
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full btn-primary flex items-center justify-center"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          送信中...
                        </>
                      ) : (
                        '送信する'
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <svg className="mx-auto h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <h3 className="mt-4 text-xl font-medium text-gray-900">お問い合わせありがとうございます</h3>
                    <p className="mt-2 text-gray-600">
                      メッセージを受け付けました。2営業日以内にご返信いたします。
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-primary-600 hover:text-primary-800 font-medium"
                    >
                      新しいメッセージを送る
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-6 text-gray-800">お問い合わせ先</h3>
                
                <div className="mb-8">
                  <h4 className="font-bold text-primary-700 mb-2">メールアドレス</h4>
                  <a href="mailto:info@ai-ojisan.com" className="text-gray-700 hover:text-primary-600 transition-colors">
                    info@ai-ojisan.com
                  </a>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-bold text-primary-700 mb-2">対応時間</h4>
                  <p className="text-gray-700">
                    平日 9:00〜18:00（土日祝休み）
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    ※お問い合わせの内容によっては、返信までにお時間をいただく場合がございます。
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-primary-700 mb-4">SNSでフォロー</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 rounded-full p-2 transition-colors"
                        aria-label={link.name}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto pt-8">
                  <div className="bg-primary-50 rounded-lg p-4">
                    <h4 className="font-bold text-primary-700 mb-2">プロジェクトの最新情報</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      メールマガジンに登録して、プロジェクトの最新情報をいち早くお届けします。
                    </p>
                    <div className="flex">
                      <input
                        type="email"
                        placeholder="メールアドレス"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      />
                      <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 rounded-r-lg transition-colors">
                        登録
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactSection