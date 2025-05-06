# Claude Helper for AI-Ojisan Project

このディレクトリは、AI-Ojisanプロジェクトの開発をサポートするためのClaude Helperツールを含んでいます。Claudeとのセッションを保存、整理、検索する機能を提供します。

## 使い方

主な機能は以下のように使用します：

### セッションの保存

```bash
python save_session.py "セッション名" --tags "tag1,tag2,tag3"
```
指示内容は標準入力から読み取られます。コマンド実行後にターミナルで入力してください。

オプション：
- `--instruction` または `-i`: 指示内容を直接指定
- `--response` または `-r`: Claudeの応答を指定
- `--notes` または `-n`: セッションに関するメモを指定
- `--tags` または `-t`: カンマ区切りのタグリスト

### プロンプトテンプレートの活用

`prompt-templates/` ディレクトリには、プロジェクトのさまざまな目的に合わせたプロンプトテンプレートが用意されています。

例：
- `website_design.txt`: Webサイト設計に関するプロンプト
- `landing_page.txt`: ランディングページ作成に関するプロンプト
- `blog_content.txt`: ブログ記事の計画と作成に関するプロンプト

## ディレクトリ構造

- `sessions/`: 保存されたセッションファイルが格納されるディレクトリ
  - `metadata/`: セッションのメタデータファイルが格納されるディレクトリ
- `sessions_backup/`: セッションのバックアップファイルが格納されるディレクトリ
- `prompt-templates/`: 組み込みのプロンプトテンプレートが格納されるディレクトリ
- `error_logs/`: エラーログが格納されるディレクトリ
- `checkpoints_backup/`: 重要なチェックポイントのバックアップが格納されるディレクトリ
- `recovery_backups/`: リカバリー用バックアップが格納されるディレクトリ

## コアファイル

- `claude_helper_core.py`: Claude Helperのコア機能を統合するモジュール
- `save_session.py`: セッションを保存するモジュール
- `session_template.md`: セッションファイルのテンプレート
- `config.json`: 設定ファイル

## 今後の拡張予定機能

- セッション検索機能
- メタデータ管理の強化
- エラーハンドリングの強化
- 自動要約生成
- セッション履歴の可視化
