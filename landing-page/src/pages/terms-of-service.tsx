import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaChevronLeft } from 'react-icons/fa';

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>利用規約 | AI-ojisan-project</title>
        <meta name="description" content="AI-ojisan-projectの利用規約について説明しています。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 md:p-8">
            <Link href="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
              <FaChevronLeft className="mr-1" /> トップページに戻る
            </Link>

            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">利用規約</h1>
            
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                本利用規約（以下「本規約」）は、AI-ojisan-project（以下「当プロジェクト」）が提供するウェブサイト、サービス、コンテンツ（以下「本サービス」）の利用条件を定めるものです。
                ユーザーの皆様（以下「ユーザー」）は、本規約に同意の上、本サービスをご利用ください。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3 text-gray-800">1. 本規約の適用</h2>
              <p className="text-gray-600 mb-4">
                本規約は、当プロジェクトとユーザーとの間の本サービスの利用に関わる一切の関係に適用されます。
                当プロジェクトが本サービス上で掲載する個別規定やガイドラインも、本規約の一部を構成します。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3 text-gray-800">2. 利用登録</h2>
              <p className="text-gray-600 mb-4">
                一部のサービスでは、利用登録が必要となる場合があります。当プロジェクトは、以下の場合に利用登録を拒否することがあります：
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>登録情報に虚偽や不備がある場合</li>
                <li>過去に本規約違反をしたことがある場合</li>
                <li>その他、当プロジェクトが不適切と判断した場合</li>
              </ul>

              <h2 className="text-xl font-bold mt-6 mb-3 text-gray-800">3. ユーザーの責任</h2>
              <p className="text-gray-600 mb-4">
                ユーザーは自己の責任において本サービスを利用するものとし、以下の行為を禁止します：
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当プロジェクトや第三者の知的財産権、プライバシー、名誉等を侵害する行為</li>
                <li>当プロジェクトや第三者に不利益、損害を与える行為</li>
                <li>本サービスの運営を妨害する行為</li>
                <li>他のユーザーのアカウントを不正に使用する行為</li>
                <li>その他、当プロジェクトが不適切と判断する行為</li>
              </ul>

              <h2 className="text-xl font-bold mt-6 mb-3 text-gray-800">4. 本サービスの提供の停止等</h2>
              <p className="text-gray-600 mb-4">
                当プロジェクトは、以下の場合に、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することがあります：
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>本サービスのシステム保守、更新を行う場合</li>
                <li>地震、落雷、火災、停電、天災などの不可抗力により本サービスの提供が困難になった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他、当プロジェクトが本サービスの提供が困難と判断した場合</li>
              </ul>

              <h2 className="text-xl font-bold mt-6 mb-3 text-gray-800">5. 著作権・知的財産権</h2>
              <p className="text-gray-600 mb-4">
                本サービス上で提供されるコンテンツ、情報、画像等の著作権や知的財産権は、当プロジェクトまたは権利者に帰属します。
                ユーザーは、当プロジェクトの明示的な許可なく、これらを複製、転用、販売、配布等することはできません。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3 text-gray-800">6. サービス内容の変更・終了</h2>
              <p className="text-gray-600 mb-4">
                当プロジェクトは、ユーザーに通知することなく、本サービスの内容を変更したり、
                本サービスの提供を終了したりすることができます。これによりユーザーに損害が生じた場合でも、
                当プロジェクトは一切の責任を負いません。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3 text-gray-800">7. 免責事項</h2>
              <p className="text-gray-600 mb-4">
                当プロジェクトは、本サービスに関して、その完全性、正確性、確実性、有用性等について、いかなる保証も行いません。
                ユーザーが本サービスを利用することで生じた損害については、当プロジェクトの故意または重大な過失による場合を除き、
                当プロジェクトは一切の責任を負いません。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3 text-gray-800">8. サポータープランについて</h2>
              <p className="text-gray-600 mb-4">
                サポータープランに関する詳細な条件、支払い方法、キャンセルポリシー等については、
                各プランのページに記載された内容に従うものとします。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3 text-gray-800">9. 本規約の変更</h2>
              <p className="text-gray-600 mb-4">
                当プロジェクトは、必要と判断した場合には、ユーザーに通知することなく本規約を変更することがあります。
                本規約の変更後、本サービスの利用を継続した場合、ユーザーは変更後の規約に同意したものとみなされます。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3 text-gray-800">10. 準拠法・裁判管轄</h2>
              <p className="text-gray-600 mb-4">
                本規約の解釈にあたっては、日本法を準拠法とします。
                本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
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

export default TermsOfService;