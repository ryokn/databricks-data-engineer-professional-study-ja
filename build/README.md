# ビルド用ファイル

- `questions.json`: オリジナル模試の編集元。選択肢別解説・公式根拠・ガイドの節・対応表IDを含む。
- `domains.json`: 現行Webページの暫定配点と、その配点に合わせた問題数。PDFとの不一致は学習ガイド0章を参照。
- `coverage.json`: 現行アウトライン54行（45学習目標＋8親項目＋1原文の継続断片）と、ガイド節・模試番号の対応。
- `author_questions.py`: 上記3ファイルと学習ガイドの整合を検証する。問題文は書き換えない。廃止した40問生成へは戻さない。
- `checks.py`: 検証の実装。問題数はデータから決まり、40問を固定しない。
- `template.html`: 外部依存のない日本語UI/CSS。問題数は `__COUNT__`。
- `app.js`: localStorage・採点・フィルタ・JSON入出力。`__QUESTIONS__` と `__DOMAINS__` をビルド時に置換。保存キーは `dep-study-ja-current-20261109-v3`。選択肢の位置が変わったため、v1とv2の保存内容は引き継がない。
- `build.py`: 検証に通ったデータから単一HTMLを再生成（Python 3標準ライブラリ）。
- `test.js`: Node VM＋最小DOMハーネス。出力HTMLの実際のscriptを実行し、対応表の各行に1問以上あることも検証する。ブラウザの描画テストではない。
- `check_links.py`: 公開リンクの到達確認（任意、requestsが必要）。ガイド、README、テンプレート、問題の根拠URLを対象にする。
- `source-checks.json`: 確認日時（JST）・HTTP状態・リダイレクト先・ページタイトル。著作物の本文やPDFを含まない。
- `test-report.txt`: 最終のロジック検証結果。

GitHub公開・外部送信を行うスクリプトは含みません。公式PDFはリポジトリに置きません。
