#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
save_session.py - Claudeのセッションを保存するスクリプト

このスクリプトはClaude AIとの対話セッションを保存し、検索可能な形式で整理します。
セッション名を指定して実行すると、テンプレートに沿った形式でファイルに保存します。
"""

import os
import sys
import json
import datetime
import argparse
from typing import List, Optional, Dict, Any

# 現在の日時をフォーマット
def get_formatted_datetime() -> str:
    """
    現在の日時を「YYYY-MM-DD HH:MM:SS」形式で返します。
    
    Returns:
        str: フォーマットされた日時文字列
    """
    now = datetime.datetime.now()
    return now.strftime("%Y-%m-%d %H:%M:%S")

# 日付のみをフォーマット
def get_formatted_date() -> str:
    """
    現在の日付を「YYYY-MM-DD」形式で返します。
    
    Returns:
        str: フォーマットされた日付文字列
    """
    now = datetime.datetime.now()
    return now.strftime("%Y-%m-%d")

# テンプレートを読み込む
def load_template() -> str:
    """
    セッションテンプレートを読み込みます。
    
    Returns:
        str: テンプレート文字列
    """
    template_path = os.path.join(os.path.dirname(__file__), "session_template.md")
    
    # デフォルトテンプレート
    default_template = """# セッション記録: {task_name}

## 実施日時
{date_time}

## タスク名
{task_name}

## 指示内容
{instruction}

## Claude応答
{response}

## メモ
{notes}"""
    
    if os.path.exists(template_path):
        try:
            with open(template_path, 'r', encoding='utf-8') as f:
                return f.read()
        except Exception as e:
            print(f"テンプレートの読み込みに失敗しました: {e}")
            return default_template
    else:
        print("テンプレートファイルが見つからないため、デフォルトを使用します")
        # テンプレートをファイルに保存
        try:
            with open(template_path, 'w', encoding='utf-8') as f:
                f.write(default_template)
            print(f"デフォルトテンプレートを保存しました: {template_path}")
        except Exception as e:
            print(f"テンプレートの保存に失敗しました: {e}")
        
        return default_template

# メタデータを作成
def create_metadata(session_name: str, tags: List[str] = None) -> Dict[str, Any]:
    """
    セッションのメタデータを作成します。
    
    Args:
        session_name: セッション名
        tags: タグのリスト
        
    Returns:
        Dict[str, Any]: メタデータ辞書
    """
    now = datetime.datetime.now()
    
    metadata = {
        "title": session_name,
        "date": now.strftime("%Y-%m-%d"),
        "time": now.strftime("%H:%M:%S"),
        "tags": tags or [],
        "importance": "medium",
        "last_modified": now.strftime("%Y-%m-%d %H:%M:%S")
    }
    
    return metadata

# メタデータを保存
def save_metadata(metadata: Dict[str, Any], session_id: str) -> bool:
    """
    セッションのメタデータをJSONファイルに保存します。
    
    Args:
        metadata: メタデータ辞書
        session_id: セッションID
        
    Returns:
        bool: 保存に成功した場合はTrue
    """
    try:
        # ディレクトリ確認
        metadata_dir = os.path.join(os.path.dirname(__file__), "sessions", "metadata")
        os.makedirs(metadata_dir, exist_ok=True)
        
        # メタデータ保存
        metadata_path = os.path.join(metadata_dir, f"{session_id}.json")
        with open(metadata_path, 'w', encoding='utf-8') as f:
            json.dump(metadata, f, ensure_ascii=False, indent=2)
        
        return True
    except Exception as e:
        print(f"メタデータの保存に失敗しました: {e}")
        return False

# セッションファイルを作成して保存
def save_session_file(task_name: str, instruction: str = "", response: str = "", notes: str = "") -> Optional[str]:
    """
    セッションファイルを作成して保存します。
    
    Args:
        task_name: タスク名
        instruction: 指示内容
        response: Claude応答
        notes: メモ
        
    Returns:
        Optional[str]: 保存されたファイルパスまたはNone
    """
    try:
        # ディレクトリ確認
        sessions_dir = os.path.join(os.path.dirname(__file__), "sessions")
        os.makedirs(sessions_dir, exist_ok=True)
        
        # テンプレート読み込み
        template = load_template()
        
        # 現在の日時
        date_time = get_formatted_datetime()
        
        # テンプレート適用
        content = template.format(
            task_name=task_name,
            date_time=date_time,
            instruction=instruction or "（未入力）",
            response=response or "（未入力）",
            notes=notes or "（未入力）"
        )
        
        # ファイル名作成
        date_str = get_formatted_date()
        filename = f"{date_str}_{task_name}.md"
        file_path = os.path.join(sessions_dir, filename)
        
        # ファイル保存
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"セッションを保存しました: {file_path}")
        
        # バックアップディレクトリにも保存
        backup_dir = os.path.join(os.path.dirname(__file__), "sessions_backup")
        os.makedirs(backup_dir, exist_ok=True)
        backup_path = os.path.join(backup_dir, filename)
        
        with open(backup_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        # セッションIDを取得（ファイル名から拡張子を除いたもの）
        session_id = os.path.splitext(filename)[0]
        
        return session_id
    
    except Exception as e:
        print(f"セッションの保存に失敗しました: {e}")
        return None

# メイン関数
def main(args):
    """
    メイン関数
    
    Args:
        args: コマンドライン引数
    
    Returns:
        Optional[str]: 保存されたファイルパスまたはNone
    """
    # 引数の解析
    if isinstance(args, list):
        parser = argparse.ArgumentParser(description='Claudeセッションを保存')
        parser.add_argument('task_name', help='タスク名')
        parser.add_argument('--instruction', '-i', help='指示内容（省略時は標準入力から読み込み）')
        parser.add_argument('--response', '-r', help='Claude応答')
        parser.add_argument('--notes', '-n', help='メモ')
        parser.add_argument('--tags', '-t', help='カンマ区切りのタグリスト')
        
        parsed_args = parser.parse_args(args)
        task_name = parsed_args.task_name
        instruction = parsed_args.instruction
        response = parsed_args.response
        notes = parsed_args.notes
        tags_str = parsed_args.tags
    else:
        # 直接辞書として渡された場合
        task_name = args
        instruction = ""
        response = ""
        notes = ""
        tags_str = ""
    
    # 指示内容が省略された場合は標準入力から読み込み
    if not instruction:
        print("指示内容を入力してください（終了するには Ctrl+D）:")
        instruction = sys.stdin.read()
    
    # タグの処理
    tags = []
    if tags_str:
        tags = [tag.strip() for tag in tags_str.split(',')]
    
    # セッションファイルの保存
    session_id = save_session_file(task_name, instruction, response, notes)
    
    # 保存に失敗した場合
    if not session_id:
        return None
    
    # メタデータの作成と保存
    metadata = create_metadata(task_name, tags)
    save_metadata(metadata, session_id)
    
    return session_id

# コマンドライン実行時の処理
if __name__ == "__main__":
    main(sys.argv[1:])
