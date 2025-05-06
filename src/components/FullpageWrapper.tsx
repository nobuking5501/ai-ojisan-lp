import React, { ReactNode, useEffect, useRef } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Navbar from './Navbar';

interface FullpageWrapperProps {
  children: ReactNode;
  anchors: string[];
  sectionsColors?: string[];
}

const FullpageWrapper: React.FC<FullpageWrapperProps> = ({ 
  children, 
  anchors,
  sectionsColors = [] 
}) => {
  // 無料版または開発中は空の文字列を使用
  const licenseKey = '';
  
  // fullpageApiのリファレンスを保持
  const fullpageApiRef = useRef<any>(null);
  
  // マウスホイールとキーボードのイベントを追加
  useEffect(() => {
    // スロットリング関数 - 連続したイベントの発火を防ぐ
    let isScrolling = false;
    
    const handleWheel = (e: WheelEvent) => {
      // スロットリング
      if (isScrolling) return;
      isScrolling = true;
      
      // スムーズなスクロール動作
      setTimeout(() => {
        isScrolling = false;
      }, 700); // スクロール速度に合わせて調整
      
      // fullpageApiが利用可能な場合
      if (fullpageApiRef.current) {
        if (e.deltaY > 0) {
          // 下へスクロール
          fullpageApiRef.current.moveSectionDown();
        } else if (e.deltaY < 0) {
          // 上へスクロール
          fullpageApiRef.current.moveSectionUp();
        }
      }
    };
    
    // キーボードのイベントハンドラ
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!fullpageApiRef.current) return;
      
      // 上下キーとページアップ/ダウンキー
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        fullpageApiRef.current.moveSectionDown();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        fullpageApiRef.current.moveSectionUp();
      }
    };
    
    // ホイールイベントの追加  
    window.addEventListener('wheel', handleWheel, { passive: false });
    // キーボードイベントの追加
    window.addEventListener('keydown', handleKeyDown);
    
    // クリーンアップ関数
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <Navbar />
      <ReactFullpage
        licenseKey={licenseKey}
        scrollingSpeed={800} // スクロール速度を調整
        autoScrolling={true} // 自動スクロールを有効化
        verticalCentered={true} // コンテンツを縦方向に中央揃え
        navigation={true} // サイドナビゲーションを表示
        navigationPosition="right" // ナビゲーションを右側に表示
        navigationTooltips={anchors} // ナビゲーションのツールチップ
        showActiveTooltip={true} // アクティブなツールチップを常に表示
        anchors={anchors} // アンカー名を設定
        sectionsColor={sectionsColors} // セクションの背景色
        keyboardScrolling={true} // キーボードでのスクロールを有効化
        animateAnchor={true} // アンカーのアニメーションを有効化
        
        // マウスホイールでのスクロールを有効化し、感度を調整
        scrollBar={false} // スクロールバーを非表示
        scrollOverflow={false} // コンテンツがオーバーフローした場合のスクロール（falseにして全体スクロールを優先）
        
        // フィット設定
        fitToSection={true} // セクションを画面にフィットさせる
        fitToSectionDelay={300} // フィットするまでの遅延
        
        // レイアウト設定
        paddingTop="90px" // ナビゲーションバーの高さ分のパディングを増やす
        
        // モバイル設定
        responsiveWidth={768} // この幅以下で通常スクロールに切り替える
        
        // マウスホイール設定
        normalScrollElements=".fp-overflow" // スクロール可能な要素
        
        // スクロール挙動
        scrollOverflowReset={false} // スクロール位置をリセットしない
        scrollOverflowOptions={{
          scrollbars: true,
          mouseWheel: true,
          hideScrollbars: false,
          fadeScrollbars: false,
          disableMouse: false
        }}
        
        // タッチとマウス設定
        touchSensitivity={10} // タッチ感度を最大にする（低いほど感度が高い）
        recordHistory={true} // ブラウザ履歴に記録
        
        // スクロールカスタマイズ
        bigSectionsDestination="top" // 大きなセクションのスクロール位置
        
        // マウスホイールに特に敏感に反応するよう設定
        css3={true} // CSS3アニメーションを使用（スムーズなスクロール）
        easing="ease" // イージング効果
        easingcss3="ease" // CSS3イージング
        
        // 追加の操作方法
        dragAndMove={true} // ドラッグでの移動を有効化
        fadingEffect={false} // フェードエフェクト
        controlArrows={true} // 矢印コントロールを表示
        
        // スワイプ
        continuousVertical={false} // 連続的な縦スクロール
        loopBottom={false} // 最後のセクションから最初に戻る
        loopTop={false} // 最初のセクションから最後に移動
        
        // マウスホイールを有効化（最も重要）
        onLeave={(origin, destination, direction) => {
          console.log(`Moving from section ${origin.index} to ${destination.index} in direction ${direction}`);
          return true; // スクロールを許可
        }}
        afterLoad={(origin, destination, direction) => {
          // APIリファレンスを更新
          fullpageApiRef.current = destination.fullpageApi;
        }}
        render={({ state, fullpageApi }) => {
          // APIリファレンスを更新
          if (fullpageApi && !fullpageApiRef.current) {
            fullpageApiRef.current = fullpageApi;
          }
          return (
            <ReactFullpage.Wrapper>
              {React.Children.map(children, (child, index) => {
                // アンカー名の取得
                const anchorId = anchors[index] || '';
                
                return (
                  <div key={index} className="section" data-anchor={anchorId}>
                    <div className="fp-overflow">
                      {child}
                    </div>
                  </div>
                );
              })}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default FullpageWrapper;