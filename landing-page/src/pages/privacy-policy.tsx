import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>プライバシーポリシー | AI-ojisan-project</title>
        <meta name="description" content="AI-ojisan-projectのプライバシーポリシーについて説明しています。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
            <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
              <FaChevronLeft className="mr-1" /> トップページに戻る
            </Link>

            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">プライバシーポリシー</h1>
            
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                AI-ojisan-project（以下「当プロジェクト」）は、お客様の個人情報の保護を重要と考えており、
                個人情報の保護に関する法律、その他の関係法令を遵守します。本プライバシーポリシーにおいて、
                当プロジェクトがどのように個人情報を収集、使用、共有するかについて説明します。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3 text-gray-800">1. 収集する情報</h2>
              <p className="text-gray-600 mb-4">
                当プロジェクトでは、以下の情報を収集することがあります：
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>氏名、メールアドレス、電話番号などの連絡先情報</li>
                <li>サポータープランへの登録情報</li>
                <li>お支払い関連情報</li>
                <li>サイト訪問履歴、IPアドレス、ブラウザ情報などの利用データ</li>
                <li>アンケートやフィードバックへの回答</li>
              </ul>

              <h2 className="text-xl font-bold mt-6 mb-3 text-gray-800">2. 情報の利用目的</h2>
              <p className="text-gray-600 mb-4">
                収集した情報は、主に以下の目的で利用します：
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>サービスの提供および改善</li>
                <li>お問い合わせへの対応</li>
                <li>プロジェクトの進捗や最新情報の提供</li>
                <li>サポータープランの管理</li>
                <li>サイトの利便性向上およびパフォーマンス分析</li>
                <li>法令に基づく対応</li>
              </ul>

              <h2 className="text-xl font-bold mt-6 mb-3 text-gray-800">3. 情報の共有</h2>
              <p className="text-gray-600 mb-4">
                当プロジェクトは、以下の場合を除き、お客様の個人情報を第三者と共有することはありません：
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>お客様の同意がある場合</li>
                <li>サービス提供に必要なパートナー企業との共有（支払い処理会社など）</li>
                <li>法令に基づく開示請求があった場合</li>
                <li>当プロジェクトの権利や財産を保護する必要がある場合</li>
              </ul>

              <h2 className="text-xl font-bold mt-6 mb-3 text-gray-800">4. Cookie（クッキー）の使用</h2>
              <p className="text-gray-600 mb-4">
                当サイトでは、ユーザー体験の向上やサイト利用状況の分析のためにCookieを使用しています。
                ブラウザの設定によりCookieの受け入れを拒否することも可能ですが、一部のサービスが正常に機能しなくなる可能性があります。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3 text-gray-800">5. 情報の保護</h2>
              <p className="text-gray-600 mb-4">
                当プロジェクトは、お客様の個人情報を不正アクセス、紛失、改ざん、漏洩から保護するために
                適切なセキュリティ対策を講じています。ただし、インターネット上での完全な安全性を保証するものではありません。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3 text-gray-800">6. お子様のプライバシー</h2>
              <p className="text-gray-600 mb-4">
                当プロジェクトは、16歳未満の方からの個人情報の収集は意図的に行いません。
                16歳未満のお子様が当サイトを利用する場合は、保護者の同意と監督のもとで行ってください。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3 text-gray-800">7. プライバシーポリシーの変更</h2>
              <p className="text-gray-600 mb-4">
                当プロジェクトは、必要に応じて本プライバシーポリシーを変更することがあります。
                変更があった場合は、当サイト上に変更内容を掲載します。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3 text-gray-800">8. お問い合わせ</h2>
              <p className="text-gray-600 mb-4">
                プライバシーポリシーに関するご質問やお問い合わせは、以下の連絡先までお願いします：
              </p>
              <p className="text-gray-600 mb-8">
                メール：contact@ai-ojisan-project.com
              </p>

              <p className="text-gray-500 text-sm mt-8">
                最終更新日：2023年10月1日
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;