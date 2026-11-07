# ビルド用ファイル

- `author_questions.py`: 著者によるオリジナル設問の編集元。実行すると `questions.json` と `domains.json` を生成。
- `questions.json`: HTMLへの埋め込みデータ。選択肢別解説・公式根拠・ガイドの節を含む。
- `domains.json`: 現行Webページの暫定配点、40問配分。PDFとの不一致は本文参照。
- `template.html`: 外部依存のない日本語UI/CSS。
- `app.js`: localStorage・採点・フィルタ・JSON入出力。`__QUESTIONS__` 等をビルド時に置換。
- `build.py`: 単一HTMLを再生成（Python 3標準ライブラリ）。問題内容をJSONだけで直した場合、author_questions.pyの再実行で上書きされることに注意。
- `test.js`: Node VM＋最小DOMハーネス。出力HTMLの実際のscriptを実行して検証。ブラウザの描画テストではない。
- `check_links.py`: 公開リンクの到達確認（任意、requestsが必要）。
- `source-checks.json`: 確認日時（JST）・HTTP状態・リダイレクト先・ページタイトル。著作物の本文やPDFを含まない。
- `test-report.txt`: 最終のロジック検証結果。

GitHub公開・外部送信を行うスクリプトは含みません。
