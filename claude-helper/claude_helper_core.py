#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
claudeHelperCore.py - ai-ojisan-project用のClaude Helperコア機能

このモジュールは、Claude Helperの主要コンポーネント（メタデータ管理、セッション保存、検索機能など）を
一元的に利用するためのインターフェースを提供します。各種コンポーネントを自動的に検出し、
最も高度な機能を優先して使用します。
"""

import os
import sys
import logging
import argparse
import datetime
import importlib.util
from typing import Dict, List, Any, Optional, Union, Tuple, Set

# ロギング設定
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(),
        logging.FileHandler('claude_helper.log')
    ]
)

logger = logging.getLogger('claude_helper_core')

# 利用可能なコンポーネントを検出
def detect_component(module_name: str) -> bool:
    """
    指定されたモジュールが利用可能かどうかを検出します。
    
    Args:
        module_name: 検出するモジュール名
        
    Returns:
        bool: モジュールが利用可能ならTrue
    """
    module_path = os.path.join(os.path.dirname(__file__), f"{module_name}.py")
    return os.path.exists(module_path)

# フォールバック用の基本関数
def basic_save_session(session_name: str, content: str, tags: List[str] = None) -> Optional[str]:
    """
    基本的なセッション保存機能のフォールバック実装
    
    Args:
        session_name: セッション名
        content: セッション内容
        tags: タグのリスト
        
    Returns:
        Optional[str]: 保存されたファイルパスまたはNone
    """
    try:
        from datetime import datetime
        
        # ディレクトリ確認
        sessions_dir = os.path.join(os.path.dirname(__file__), "sessions")
        os.makedirs(sessions_dir, exist_ok=True)
        
        # ファイル名の作成
        date_str = datetime.now().strftime("%Y-%m-%d")
        filename = f"{date_str}_{session_name}.md"
        file_path = os.path.join(sessions_dir, filename)
        
        # ファイル保存
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
            
        logger.info(f"セッションを保存しました: {file_path}")
        return file_path
    except Exception as e:
        logger.error(f"セッションの保存に失敗しました: {e}")
        return None


class ClaudeHelperCore:
    """
    Claude Helperのコア機能を統合するクラス
    
    このクラスは、すべてのコンポーネントへの統一されたアクセスを提供し、
    利用可能な最も高度な機能を自動的に選択します。
    """
    
    def __init__(self):
        """
        ClaudeHelperCoreの初期化
        """
        logger.info("ClaudeHelperCore初期化 - AI-Ojisanプロジェクト用")
    
    def save_session(self, session_name: str, content: str, tags: List[str] = None, 
                    importance: str = 'medium', summary: str = None) -> Optional[str]:
        """
        セッションを保存します
        
        Args:
            session_name: セッション名
            content: セッション内容
            tags: タグのリスト
            importance: 重要度（'high', 'medium', 'low'）
            summary: 要約（省略可）
            
        Returns:
            Optional[str]: 保存されたファイルパスまたはNone
        """
        try:
            return basic_save_session(session_name, content, tags)
        except Exception as e:
            logger.error(f"セッションの保存に失敗しました: {e}")
            return None


# コマンドライン実行時の処理
if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Claude Helper コア機能')
    subparsers = parser.add_subparsers(dest='command', help='サブコマンド')
    
    # saveコマンド
    parser_save = subparsers.add_parser('save', help='セッションを保存')
    parser_save.add_argument('name', help='セッション名')
    parser_save.add_argument('--content', '-c', help='セッション内容（省略時は標準入力から読み込み）')
    parser_save.add_argument('--tags', help='カンマ区切りのタグリスト')
    parser_save.add_argument('--importance', choices=['high', 'medium', 'low'], default='medium', help='重要度')
    
    args = parser.parse_args()
    
    # ClaudeHelperCoreのインスタンス化
    helper = ClaudeHelperCore()
    
    # コマンドに基づいて処理を実行
    if args.command == 'save':
        # コンテンツの取得
        content = args.content
        if not content:
            print("セッション内容を入力してください（終了するには Ctrl+D）:")
            content = sys.stdin.read()
        
        # タグの処理
        tags = []
        if args.tags:
            tags = [tag.strip() for tag in args.tags.split(',')]
        
        # セッションの保存
        file_path = helper.save_session(
            args.name, 
            content, 
            tags=tags, 
            importance=args.importance
        )
        
        if file_path:
            print(f"セッションを保存しました: {file_path}")
        else:
            print("セッションの保存に失敗しました")
    
    else:
        parser.print_help()
