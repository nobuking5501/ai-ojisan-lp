import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';

const LegalNotice = () => {
  return (
    <>
      <Head>
        <title>特定商取引法に基づく表記 | AI-ojisan-project</title>
        <meta name="description" content="AI-ojisan-projectの特定商取引法に基づく表記について説明しています。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
            <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
              <FaChevronLeft className="mr-1" /> トップページに戻る
            </Link>

            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">特定商取引法に基づく表記</h1>
            
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-6">
                特定商取引法に基づく表記（返品特約など）
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200 text-sm">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 bg-gray-50 text-left text-gray-700 font-medium w-1/3">販売事業者名</th>
                      <td className="py-3 px-4 text-gray-600">AI-ojisan-project（個人事業主）</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 bg-gray-50 text-left text-gray-700 font-medium">代表者名</th>
                      <td className="py-3 px-4 text-gray-600">山田太郎</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 bg-gray-50 text-left text-gray-700 font-medium">所在地</th>
                      <td className="py-3 px-4 text-gray-600">
                        〒123-4567<br />
                        東京都渋谷区〇〇町1-2-3
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 bg-gray-50 text-left text-gray-700 font-medium">連絡先</th>
                      <td className="py-3 px-4 text-gray-600">
                        メールアドレス：contact@ai-ojisan-project.com<br />
                        ※お問い合わせはメールでお願いいたします。
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 bg-gray-50 text-left text-gray-700 font-medium">サービス名</th>
                      <td className="py-3 px-4 text-gray-600">AI-ojisan-project サポータープラン</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 bg-gray-50 text-left text-gray-700 font-medium">料金</th>
                      <td className="py-3 px-4 text-gray-600">
                        各サポータープランのページに記載された金額<br />
                        ※消費税込み
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 bg-gray-50 text-left text-gray-700 font-medium">支払方法</th>
                      <td className="py-3 px-4 text-gray-600">
                        クレジットカード決済（VISA、MasterCard、JCB、American Express、Diners Club）<br />
                        銀行振込<br />
                        その他決済サービス（PayPal、Stripe）
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 bg-gray-50 text-left text-gray-700 font-medium">支払時期</th>
                      <td className="py-3 px-4 text-gray-600">
                        クレジットカード：ご注文確定時に即時決済<br />
                        銀行振込：ご注文から7日以内にお支払いください
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 bg-gray-50 text-left text-gray-700 font-medium">サービス提供時期</th>
                      <td className="py-3 px-4 text-gray-600">
                        ご入金確認後、即時にサービス提供開始<br />
                        ※サービス内容により異なる場合があります
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 bg-gray-50 text-left text-gray-700 font-medium">返品・キャンセルについて</th>
                      <td className="py-3 px-4 text-gray-600">
                        <p>デジタルコンテンツの性質上、以下の場合を除き、返品・キャンセルはお受けしておりません：</p>
                        <ul className="list-disc pl-6 mt-2">
                          <li>サービス提供開始前のキャンセル：全額返金</li>
                          <li>当方の責任によるサービス不備：状況に応じて返金対応</li>
                        </ul>
                        <p className="mt-2">キャンセルをご希望の場合は、メールにてご連絡ください。</p>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <th className="py-3 px-4 bg-gray-50 text-left text-gray-700 font-medium">定期購入の解約</th>
                      <td className="py-3 px-4 text-gray-600">
                        定期購入プランをご利用の場合、次回の更新日の7日前までにマイページから、
                        または電子メールにて解約のご連絡をいただければ、次回以降の更新はされません。
                      </td>
                    </tr>
                    <tr>
                      <th className="py-3 px-4 bg-gray-50 text-left text-gray-700 font-medium">その他特約事項</th>
                      <td className="py-3 px-4 text-gray-600">
                        当サービスは、ギネス世界記録への挑戦をサポートするものですが、
                        記録達成を保証するものではありません。また、提供するコンテンツ、
                        期間、特典などは予告なく変更される場合があります。
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

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

export default LegalNotice;