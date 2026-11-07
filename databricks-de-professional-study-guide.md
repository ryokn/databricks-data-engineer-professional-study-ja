# Databricks Certified Data Engineer Professional 体系的学習ガイド（日本語）

確認日：2026-11-07（JST）／対象：初学者〜実務者／現行試験（2026-11-19まで）を主対象

> **最重要：日本語で11/19までに受けるなら「現行試験」です。** 日本語公式PDFは、現行試験の期限を **2026-11-19**、新試験への切り替えを **2026-11-20** と明記しています。新試験の提供言語は **英語のみ** と記載されています。切り替え日の適用時刻・日本語試験のその後の再提供日は要確認。予約画面で試験名・言語・日付を必ず確認してください。本書とHTML模試は、11/19までの日本語受験に合わせて**現行10ドメイン**を主対象にしています。

非公式のオリジナル教材です。合格保証・実際の試験問題の再現ではありません。問題・解答・解説は別ファイル `databricks-de-professional-mock-exam.html` にのみ収録しています。

## 0. 試験概要・範囲対応・使い方・学習計画

### 0.1 一次情報の版と食い違い

| 一次情報 | 版・日付・位置づけ |
|---|---|
| [日本語公式Exam Guide（2026-10パス）][JA] | 本文に数値の版番号・更新日の明記なし（**要確認**）。現行期限11/19、新試験公開11/20を明記。日本語受験の切替判断はこれを主に参照 |
| [英語公式Exam Guide（Oct 9, 2026）][EN] | Exam Published / Exam Guide Updated とも **2026-10-09**。数値の版番号なし。新9ドメイン・英語のみ・60問を記載 |
| [英語試験ページ][PAGE] | 現行10ドメイン・59問・120分・日本語を含む4言語を記載。PDFとの切替日差を区別する |
| [日本語試験ページ][JPAGE] | 現行10ドメイン。評価欄に90分、同じページのFAQに120分と不一致。**PDF両列と英語ページが一致する120分を採用**し、予約時に再確認 |

**配点の不一致（未解決）**：現行試験について、日本語PDFは「共有・フェデレーション10%／モデリング7%」と記載し、全体が106%になります。英語・日本語の試験ページは「5%／6%」で合計100%です。本書は学習時間・模試配分のために**試験ページの100%になる表を暫定採用**し、PDFの数値を勝手に修正したことにはしません。真の現行配点は**要確認**。問題数換算は保証された出題数ではありません。

### 0.2 試験情報

| 項目 | 現行試験（11/19まで） | 新試験（日本語PDFでは11/20以降） |
|---|---|---|
| 採点対象 | 多肢選択59問 | 多肢選択60問 |
| 採点対象外 | 最大10問の可能性（日本語PDF） | 最大10問の可能性（日本語PDF）。英語PDFでは上限数を記載せず |
| 時間 | 120分（採点対象外への時間を含む） | 120分 |
| 受験料 | USD 200＋適用税 | USD 200＋適用税 |
| 言語 | 英語・**日本語**・ブラジルポルトガル語・韓国語 | **英語のみと記載**。日本語再提供日は要確認 |
| 受験方法 | オンライン監督付き／テストセンター | 同左 |
| 補助資料 | 不可 | 不可 |
| 前提資格 | 必須なし（Associate合格も必須ではない） | 同左 |
| 推奨経験 | 日本語PDFでは関連業務1年以上を強く推奨 | 同左 |
| 有効期限 | 2年。維持には現行試験を再受験 | 同左 |
| 合格点 | **非公開**（公式ページFAQ）。70%等を公式基準として扱わない | 同左 |

推奨トレーニング（両版共通、日本語PDF・英語PDF）：
- 講師主導：**Advanced Data Engineering with Databricks**
- 自習：**Advanced Techniques with Apache Spark™ Declarative Pipeline**（英語PDFの表記）
- 自習：**Databricks Data Privacy**
- 自習：**Databricks Performance Optimization**
- 自習：**Automated Deployment with Declarative Automation Bundles**

受講済みなら再受講を最優先にせず、演習で説明できない設計判断だけコースに戻ります。コースの日本語提供状況はAcademy上で要確認。

### 0.3 現行試験の配点と本書の章順

換算は「59 × 配点」、約問数は四捨五入。独立した丸めなので合計が59になるとは限りません。模試60問は概ね配点に比例させ、少数分野の全目標確認のため一部を調整しています。出題数の再現ではありません。

| 本書章 | 現行公式Section | 分野 | 暫定配点 | 59問換算 | 模試 |
|---|---|---|---:|---:|---:|
| 1 | 1 | Python / SQLコード開発 | 22% | 12.98 ≈13問 | 13問 |
| 2 | 6 | コスト・性能最適化 | 13% | 7.67 ≈8問 | 8問 |
| 3 | 3 | 変換・クレンジング・品質 | 10% | 5.90 ≈6問 | 6問 |
| 4 | 5 | 監視・アラート | 10% | 5.90 ≈6問 | 6問 |
| 5 | 7 | セキュリティ・コンプライアンス | 10% | 5.90 ≈6問 | 6問 |
| 6 | 9 | デバッグ・デプロイ | 10% | 5.90 ≈6問 | 5問 |
| 7 | 2 | 取り込み・取得 | 7% | 4.13 ≈4問 | 5問 |
| 8 | 8 | ガバナンス | 7% | 4.13 ≈4問 | 4問 |
| 9 | 10 | モデリング | 6%※ | 3.54 ≈4問 | 3問 |
| 10 | 4 | 共有・フェデレーション | 5%※ | 2.95 ≈3問 | 4問 |
| 合計 | | | 100% | 59.00（丸め前） | **60問** |

※現行日本語PDFの値はモデリング7%、共有10%。上の暫定採用理由を参照。

### 0.4 現行Exam Outlineの全項目対応表

本書は日本語公式PDFの現行10ドメインを、**意味のある45学習目標＋8親項目＋1原文の継続断片**として対応づけています。これは独自の整理数であり、公式が「45目標」と公表したという意味ではありません。Section 6の改行断片も省略せず別見出しにしました。

全54行に本文見出しと少なくとも1問の対応を設定。問題は複数目標を同時に扱うことがあります。**対応があることは、その目標の全仕様を一問で網羅する保証ではありません。** 試験ガイドの目的に沿って本文・比較・演習を組み合わせてください。模試の問題文・解答・解説はHTMLだけに収録します。

| ID | Outlineの項目（要約） | 本書の節 | 模試番号 |
|---|---|---|---|
| D1.A | Pythonとツールの使用（親項目） | [1.A](#sec-1-a) | 01、02、03 |
| D1.1 | Bundlesに適したPythonプロジェクト | [1.1](#sec-1-1) | 01 |
| D1.2 | PyPI・wheel・ソースアーカイブと依存 | [1.2](#sec-1-2) | 02 |
| D1.3 | Pandas/Python UDF | [1.3](#sec-1-3) | 03 |
| D1.B | ETLの構築とテスト（親項目） | [1.B](#sec-1-b) | 04、05、06、07、08、09、41、42、43、44 |
| D1.4 | Lakeflow/Auto Loaderのバッチ・Streaming | [1.4](#sec-1-4) | 04、05 |
| D1.5 | UI/API/CLIによるJobsの自動化 | [1.5](#sec-1-5) | 07、20 |
| D1.6 | STとMVの利点・欠点 | [1.6](#sec-1-6) | 05 |
| D1.7 | AUTO CDC（旧APPLY CHANGES） | [1.7](#sec-1-7) | 06 |
| D1.8 | Structured StreamingとLakeflowの比較 | [1.8](#sec-1-8) | 41 |
| D1.9 | If/Else・For Each | [1.9](#sec-1-9) | 07、42 |
| D1.10 | 環境・依存・高メモリ・追加再試行 | [1.10](#sec-1-10) | 08、43 |
| D1.11 | 単体/統合テスト・transform・デバッガー | [1.11](#sec-1-11) | 09、44 |
| D2.1 | 各種形式・メッセージバス・クラウドから取り込み | [7.1](#sec-7-1) | 31、33、45 |
| D2.2 | Deltaでバッチ/Streamingの追記専用パイプライン | [7.2](#sec-7-2) | 32、46 |
| D3.1 | Window・join・aggregation | [3.1](#sec-3-1) | 15、16、47 |
| D3.2 | Lakeflow/クラシックAuto Loaderの隔離 | [3.2](#sec-3-2) | 17、18、48 |
| D4.1 | Delta SharingのD2D/D2O | [10.1](#sec-10-1) | 40、49 |
| D4.2 | ガバナンスのあるFederation | [10.2](#sec-10-2) | 39 |
| D4.3 | 任意のcomputeへライブ共有 | [10.3](#sec-10-3) | 40、50 |
| D5.A | モニタリング（親項目） | [4.A](#sec-4-a) | 19、20、21、51 |
| D5.1 | system tablesで利用・費用・監査・workload | [4.1](#sec-4-1) | 19 |
| D5.2 | Query Profiler UIとSpark UI | [4.2](#sec-4-2) | 51 |
| D5.3 | REST API/CLIでjob/pipeline監視 | [4.3](#sec-4-3) | 20 |
| D5.4 | Pipeline event logの監視 | [4.4](#sec-4-4) | 21 |
| D5.B | アラート通知（親項目） | [4.B](#sec-4-b) | 22、52 |
| D5.5 | SQL Alertsの品質監視 | [4.5](#sec-4-5) | 22 |
| D5.6 | Jobs UI/APIで状態・性能の通知 | [4.6](#sec-4-6) | 52 |
| D6.1 | UC managed tablesと保守削減 | [2.1](#sec-2-1) | 53 |
| D6.1-cont | 原文の「オーバーヘッドとメンテナンスの負担」 | [2.1.1](#sec-2-1-1) | 53 |
| D6.2 | Deletion vectors・Liquid等の最適化 | [2.2](#sec-2-2) | 10、11、14 |
| D6.3 | data skipping・file pruning | [2.3](#sec-2-3) | 54 |
| D6.4 | CDFでStreamingの制限・遅延に対処 | [2.4](#sec-2-4) | 12、55 |
| D6.5 | Profileでskipping/join/shuffle分析 | [2.5](#sec-2-5) | 13 |
| D7.A | セキュリティ適用（親項目） | [5.A](#sec-5-a) | 23、24、25、56 |
| D7.1 | Workspace ACLと最小権限 | [5.1](#sec-5-1) | 23、56 |
| D7.2 | 行フィルタ・列マスク | [5.2](#sec-5-2) | 24 |
| D7.3 | ハッシュ/トークン/抑制/一般化 | [5.3](#sec-5-3) | 25 |
| D7.B | コンプライアンス（親項目） | [5.B](#sec-5-b) | 26、57 |
| D7.4 | バッチ/StreamingでPII検出・マスク | [5.4](#sec-5-4) | 57 |
| D7.5 | 保持に準拠するパージ | [5.5](#sec-5-5) | 26 |
| D8.1 | 説明・メタデータで発見性 | [8.1](#sec-8-1) | 35、58 |
| D8.2 | UC権限継承 | [8.2](#sec-8-2) | 23、34、36 |
| D9.A | デバッグ（親項目） | [6.A](#sec-6-a) | 27、30、59 |
| D9.1 | Spark UI/logs/system/Profileで診断 | [6.1](#sec-6-1) | 30、51 |
| D9.2 | repairとparameter override | [6.2](#sec-6-2) | 27 |
| D9.3 | event log/Spark UIでpipelineデバッグ | [6.3](#sec-6-3) | 59 |
| D9.B | CI/CDデプロイ（親項目） | [6.B](#sec-6-b) | 28、29 |
| D9.4 | Bundlesでbuild/deploy | [6.4](#sec-6-4) | 28 |
| D9.5 | Git foldersによるGitベースCI/CD | [6.5](#sec-6-5) | 29 |
| D10.1 | スケーラブルなDeltaモデル | [9.1](#sec-9-1) | 37、60 |
| D10.2 | Liquidによる配置判断の簡素化 | [9.2](#sec-9-2) | 60 |
| D10.3 | Liquidとpartition/ZORDERの比較 | [9.3](#sec-9-3) | 11、60 |
| D10.4 | ディメンショナルモデル | [9.4](#sec-9-4) | 16、38 |

### 0.5 1週間集中プラン（学習時間は提案であり公式値ではない）

毎日2〜3時間を想定。受験日未確定のため日付ではなく相対日程です。短縮版は各章の**★項目だけ**を学び、下表の短縮版を優先してください。基礎ができている方は短縮版、初学者は下の3〜4週間案を選んでください。

| 日 | 通常版 | 短縮版（約60〜90分の提案） |
|---|---|---|
| Day 1 | 0章で受験版を確認→HTML60問を未学習で解く→誤答を「要件読み落とし／知識／コード」に分類 | ★模試→誤答の章と根拠URLだけ記録 |
| Day 2 | 1章。ST/MV、AUTO CDC、制御フロー、UDF、テストの選択理由を口頭説明 | ★1.6〜1.11を中心に誤答の理由を説明 |
| Day 3 | 2・3章。性能の診断順、CDF、重複除去、品質の隔離を小さなSQLで確認 | ★性能比較表・CDF・品質比較表 |
| Day 4 | 5・8章。UC権限不足、マスク、削除要請、継承をシナリオで確認 | ★USE/SELECTの区別・DELETE/VACUUM・継承 |
| Day 5 | 4・6章。ログの選択、ジョブ修復、Bundleのdev/prod差分を確認 | ★監視の使い分け・repair・validate/deploy/run |
| Day 6 | 7・9・10章。取り込み・共有・フェデレーション・粒度を比較→模試をリセットして再実施 | ★比較表と未解決の誤答だけ。正答番号暗記を避ける |
| Day 7 | 公式サンプルの観点整理→直前チェック→予約・本人確認・受験環境確認 | ★直前チェックだけ。新しい問題集を増やさない |

模試の正答率は公式合否を予測しません。同じ模試の高得点より、各不正解選択肢がなぜ要件に合わないかを説明できることを優先します。再演習は解説が見える状態ではなくリセットして行います。進捗保存を残したい場合はHTMLのJSONエクスポートを先に使ってください。

### 0.6 新旧名称（単純に同一扱いしない）

| 旧名・別表記 | 現行資料の表記・注意 |
|---|---|
| Delta Live Tables / DLT | Lakeflow Declarative Pipelines、Lakeflow Pipelines。現在の公式ドキュメントは **Spark Declarative Pipelines on Lakeflow** とも表記 |
| Apache Spark Declarative Pipelines / SDP | OSSの宣言型フレームワーク。Databricks版が追加機能を持つ。**AUTO CDC等のDatabricks拡張がOSSにも全部あるとは限らない** |
| Databricks Asset Bundles / DABs | **Declarative Automation Bundles**。`databricks bundle` CLIのコマンド名とは区別 |
| APPLY CHANGES | **AUTO CDC**。既存APIも残るが新規では推奨APIを確認 |
| Repos | **Git folders**。Git管理だけではデプロイ・テスト・権限設定まで完了しない |
| Workflows / Jobs | **Lakeflow Jobs**（制御フロー、依存、再実行） |
| Delta Sharing | 新ガイドは **OpenSharing（D2D / Databricks-to-Open）**。現行試験ではDelta Sharing表記も読む |
| SQL Alerts | 新ガイドは **Databricks Lakehouse alerts** と対象範囲を拡張して表記 |
| Delta cache | ドキュメント上のdisk cacheの名称とも照合。Spark `cache()`やSQL結果キャッシュと同一ではない |


### 0.7 初学者向け3〜4週間プラン

期間は学習計画の提案であり、公式の必要学習時間ではありません。データ操作の初歩から始める方は、用語→最小コード→比較→模試→実機で再現の順に進めます。実機で使えない有料・Preview機能は公式画面・構成図で条件を追い、機能を使うための支出を前提にしません。

| 週 | 学ぶ範囲 | 到達点 |
|---|---|---|
| 第1週 | 用語・Delta/UCの基礎、1章、7章 | バッチ/Streaming、状態、依存、テストの役割を説明 |
| 第2週 | 3章、2章、9章 | 粒度と品質を守り、症状に合う最適化を選択 |
| 第3週 | 5章、8章、10章 | 権限・保護・削除・共有をライフサイクルで設計 |
| 第4週 | 4章、6章、公式サンプル、模試と未達項目 | 診断源を選び、修復と配備を再現可能に説明 |

3週間にする場合は第3・4週の演習を並行します。現行試験の期限を越える場合は付録Aの新試験へ読み替え、受験言語を再確認してください。各対応表の行で「説明できる」「最小例を追える」「誤選択肢の理由がわかる」を記録すると、問題番号の暗記に偏りにくくなります。

### 0.8 初学者のための用語と例の前提

| 用語 | 最初に押さえる意味 |
|---|---|
| DataFrame / SQL | 分散データの表と、それを変換する表現 |
| Delta Lake | トランザクションログを持つテーブル形式。業務重複の自動除去とは別 |
| Unity Catalog / UC | データ等の名前・権限・メタデータを統制する仕組み |
| catalog.schema.table | テーブルの三階層の名前 |
| bronze/silver/gold | 原本に近い層、検証済み層、利用目的別の層という設計パターン |
| batch / Streaming | 有界な入力を処理する方式／継続する到着を処理する方式 |
| checkpoint | 増分処理の進捗や状態を復旧するための保存物 |
| 冪等性 | 同じ処理を繰り返しても業務上の結果を重複させない性質 |

コードの`main.study`は専用演習catalog/schema、入力表やパスは例です。存在・権限・対応Runtimeを確認して読み替え、prodへそのまま実行しないでください。変数や関数を外部で定義する例はその前提を注記しています。数値は架空の演習条件で、プラットフォームの制限や費用を推測したものではありません。


## 1. Python・SQLによるコード開発（現行Section 1：22%）

<a id="sec-1-a"></a>
### 1.A 開発のためのPythonとツールの使用

データ処理をチームで維持するための開発基盤です。「誰かのノートブックで動く」状態から、環境が違っても同じコードを配備・検証できる状態に進みます。プロジェクト構造、依存関係、UDFを下記の個別項目で学びます。

<a id="sec-1-1"></a>
#### 1.1 ★Bundlesに適したスケーラブルなPythonプロジェクト構造

**何か**：変換ロジック、実行入口、テスト、リソース設定を分離した構成です。**なぜ**：環境ごとの手作業が増えると、同じコミットでも動作が変わるため。**仕組み**：再利用する変換をモジュール化し、Declarative Automation Bundles（旧Databricks Asset Bundles / DABs）のtargetsでdev/prod差を表します。

| 置き場所の例 | 役割 | 混同しないもの |
|---|---|---|
| `src/` | 再利用する処理 | 本番固有の保存先・秘密情報 |
| `tests/` | 期待結果と照合 | 本番データへの副作用 |
| `resources/`、`databricks.yml` | ジョブ等の定義と環境差 | データそのもののバックアップ |

**頻出・罠**：ノートブック複製を環境分離と思わない。同一ソースをテストして昇格させる。Bundleで配備しただけではデータ品質を保証しません。

```text
project/
  databricks.yml
  resources/jobs.yml
  src/transforms.py
  tests/test_transforms.py
```

根拠：[BUNDLE]。

<a id="sec-1-2"></a>
#### 1.2 ★PyPI・wheel・ソースアーカイブの導入と依存関係の切り分け

**何か**：コードが必要とする外部Pythonパッケージを、実行環境へ揃える工程。**なぜ**：対話ノートブックとジョブで環境が異なるとimportや型の互換性で失敗します。**仕組み**：パッケージの配布元・版・Python/Runtime互換性・実際のタスク環境を記録して、最小importで切り分けます。

| 配布形態 | 主な用途 | 注意 |
|---|---|---|
| PyPIパッケージ | 公開・社内インデックスの依存 | 版固定、ネットワーク、依存競合 |
| wheel | 自作処理の配布 | 対応Python・プラットフォーム |
| ソースアーカイブ | ソースからインストール | ビルド依存・再現性 |

```python
# そのタスクと同じ環境で、バージョンとimport先を確認する例。
import importlib.metadata as metadata
print(metadata.version('requests'))
```

**頻出・罠**：Notebookで成功してもジョブ・pipeline・serverlessでの導入を証明しません。すべてを最新版へ上げてから原因調査すると再現不能になり得ます。serverlessでは環境の依存指定を確認します。根拠：[LIBRARY]、[SERVERLESS]。

<a id="sec-1-3"></a>
#### 1.3 ★Pandas UDF・Python UDFの開発と選択

**何か**：標準関数で表現しにくい処理をユーザー定義関数として呼び出す仕組み。**なぜ**：独自の処理を分散処理へ組み込む必要があるため。**仕組み**：Python UDFはPython処理、Pandas UDFはバッチ単位のベクトル化処理を活用します。型・NULL・依存関係の契約を明確にします。

| 候補 | 適する場合 | 罠 |
|---|---|---|
| 組み込みSQL | trim/lower等で十分 | 不要なUDF化をしない |
| Python UDF | Python固有のロジック | 行単位の境界コスト・外部副作用 |
| Pandas UDF | ベクトル化が適合する計算 | 常に最速ではない。戻り型を守る |

```python
import pandas as pd
from pyspark.sql.functions import pandas_udf
@pandas_udf('double')
def add_fee(x: pd.Series) -> pd.Series:
    return x * 1.1
```

**頻出・罠**：SQLで済むものを外部HTTP APIのUDFにしない。collectしてdriverで全件処理するのは分散UDFの代わりではありません。UC関数として共有する場合は権限と対応環境も確認。根拠：[UDF]。

<a id="sec-1-b"></a>
### 1.B Lakeflow Pipelines・SQL・SparkによるETLパイプラインの構築とテスト

ETLは抽出・変換・格納の流れです。本番では変換式だけでなく、進捗、再実行、品質、ジョブ依存、実行環境を同時に設計します。Lakeflowの宣言型処理と、自分で状態や書き込みを制御するStructured Streamingを区別します。

<a id="sec-1-4"></a>
#### 1.4 ★Lakeflow PipelinesとAuto Loaderによるバッチ／Streamingの本番パイプライン

**何か**：クラウドへ届くファイル等を取り込み、依存するテーブルを継続的に作る仕組み。**なぜ**：手動の全件読取りでは到着の追跡、再処理、品質確認が属人化するため。**仕組み**：Auto Loaderが増分取り込みを支え、Lakeflowが依存関係・状態・更新を管理します。

```sql
-- Lakeflow pipeline内。専用演習VolumeのJSONを想定。
CREATE OR REFRESH STREAMING TABLE main.study.raw_events
AS SELECT * FROM STREAM read_files(
  '/Volumes/main/study/input', format => 'json'
);
```

| 概念 | 役割 |
|---|---|
| schemaLocation | 推論したスキーマの管理（クラシックの設定） |
| checkpoint | 読取り進捗・状態・復旧の管理 |
| triggered / continuous | 更新の実行方式。テーブル種類とは別の軸 |

**頻出・罠**：schemaLocationだけで進捗は復元できません。pipelineが管理する状態とクラシックジョブの自前checkpointを混ぜない。取り込みのexactly-onceと業務イベントの重複除去も別です。根拠：[AUTO]、[LDP]。

<a id="sec-1-5"></a>
#### 1.5 ★JobsのUI・API・CLIによるETLの作成と自動化

**何か**：複数タスクの依存と実行を管理するLakeflow Jobs。**なぜ**：ノートブックを個別に手動実行すると順序や回復が不安定になるため。**仕組み**：ジョブ定義を作り、スケジュールやトリガーでrunを起動し、task結果を追跡します。

```bash
# コマンド例。実行・外部変更は本教材では行わない。
databricks jobs get <job-id>
databricks jobs get-run <run-id>
```

| 識別子 | 指すもの |
|---|---|
| job_id | 再利用されるジョブの定義 |
| run_id | 一回の実行 |
| task_key | 定義内のタスク |

**頻出・罠**：API呼出しが成功してもrun成功とは限りません。UIで作った定義をソース管理せずprodへ手コピーすると再現性を失います。根拠：[JOBS]。

<a id="sec-1-6"></a>
#### 1.6 ★Streaming TableとMaterialized Viewの利点・欠点

**何か**：STは到着行の増分処理、MVはクエリ結果の物理保存と更新に使います。**なぜ**：同じSQLに見えても、入力履歴の変更や再計算の意味が異なるため。**仕組み**：STはストリーミングの意味で処理し、MVは結果全体を維持する更新計画を使います。

| 要件 | 第一候補 | 条件 |
|---|---|---|
| 改変されないログの新規到着分 | ST | 追記前提と重複を検討 |
| 過去データの修正を含む集計 | MV | 増分可否・完全再計算のコストを確認 |
| 物理保存せず参照時に計算 | 通常View | 元の計算負担が残る |

```sql
-- Lakeflow pipeline内のMVの例。
CREATE OR REFRESH MATERIALIZED VIEW main.study.daily_sales
AS SELECT sale_date, SUM(amount) AS total
FROM main.study.sales GROUP BY sale_date;
```

**頻出・罠**：「MVなら必ず増分で安い」「STなら更新・削除も自動反映」と断定しない。鮮度、入力の変更、保持したい結果の意味を先に確認。根拠：[LDP]。

<a id="sec-1-7"></a>
#### 1.7 ★AUTO CDC（旧APPLY CHANGES）による変更適用

**何か**：CDCイベントからターゲットの現在状態や履歴を維持する処理。**なぜ**：到着順が乱れた同一キーの更新を、単純なappendで扱えないため。**仕組み**：キー、SEQUENCE BY、削除の意味、SCD Type 1/2を定義します。

```sql
CREATE OR REFRESH STREAMING TABLE main.study.customer_history;
CREATE FLOW customer_cdc AS AUTO CDC INTO main.study.customer_history
FROM STREAM(main.study.cdc_events)
KEYS (id)
APPLY AS DELETE WHEN operation = 'DELETE'
SEQUENCE BY seq
COLUMNS * EXCEPT (operation)
STORED AS SCD TYPE 2;
```

| 指定 | 意味 |
|---|---|
| Type 1 | 最新状態を保持し、更新履歴は残さない |
| Type 2 | 属性の履歴と有効期間を管理 |
| sequence | 変更の業務的順序。到着時刻と同じとは限らない |

**頻出・罠**：CDFは変更を公開する機能、AUTO CDCは変更の適用。遅延到着・同じ順序値・NULL更新・削除を考慮します。OSSのSpark Declarative PipelinesにDatabricksのAUTO CDC拡張がすべてあるとは限りません。根拠：[CDC]。

<a id="sec-1-8"></a>
#### 1.8 ★Structured StreamingとLakeflow Pipelinesの使い分け

**何か**：Structured Streamingは自分で実行・状態・sinkを組み立てるAPI、Lakeflowはテーブル等の定義から依存と更新を管理する宣言型の仕組みです。**なぜ**：運用工数と自由度のトレードオフを判断するため。**仕組み**：標準的な取り込み・品質・CDCを宣言するか、特殊な外部sink等を自前制御するかで選びます。

| 判断軸 | Structured Streaming | Lakeflow |
|---|---|---|
| 独自の書き込み制御 | 自分で組み込みやすい | 対応する宣言型機能を確認 |
| 依存・品質・更新の運用 | 実装責務が大きい | 統合して管理しやすい |
| checkpoint・再実行 | 自前設定と整合確認 | フレームワーク管理の範囲がある |

```python
# 任意sinkを扱う形の例。外部副作用には別途冪等性が必要。
query = (events.writeStream.foreachBatch(write_idempotently)
         .option('checkpointLocation', checkpoint_dir).start())
```

**頻出・罠**：コード量だけではなく運用制約から選ぶ。foreachBatchは既定でat-least-once。checkpointだけで外部APIの二重処理を防げません。根拠：[FOREACH]、[LDP]。

<a id="sec-1-9"></a>
#### 1.9 ★If/Else・For Eachによる制御フロー

**何か**：If/Elseは条件分岐、For Eachは入力配列ごとの反復。**なぜ**：品質結果や対象一覧に応じて同じジョブを柔軟に動かすため。**仕組み**：条件結果への依存を作り、For Eachの入れ子タスクへ各要素をパラメーターとして渡します。

```text
For Each Inputs: [{"table":"sales"},{"table":"orders"}]
入れ子タスクのtable引数: {{input.table}}
条件分岐: 品質判定 → If/Else → 公開 または 隔離レポート
```

| 方式 | 適するもの | 注意 |
|---|---|---|
| If/Else | 真偽で異なる処理 | 前タスクの終了だけでは分岐しない |
| For Each | 同じ処理を複数入力へ適用 | 並列度と同一ターゲットへの競合 |

**頻出・罠**：For Eachの配列と巨大な業務データ本体を混同しない。For EachをFor Eachの入れ子タスクにすることはできないと公式に記載されています。下流依存は親For Eachに設定します。根拠：[FOREACHJOB]。

<a id="sec-1-10"></a>
#### 1.10 ★環境・依存・高メモリ・自動最適化の再試行設定

**何か**：ワークロードに合う実行資源と、再試行の動作を選ぶ設定。**なぜ**：メモリ不足と、二重の外部副作用では解決策が違うため。**仕組み**：実行環境の依存を定義し、ノートブックの高メモリ要件や、serverless自動最適化による追加再試行を確認します。

| 制約 | 判断 |
|---|---|
| ノートブックタスクのメモリ不足 | 実行計画・driver/executorを診断し、対応する高メモリ設定を検討 |
| 非冪等な副作用がありat-most-onceが必要 | 明示的retryだけでなくserverless auto-optimizationも確認 |
| 環境にないライブラリ | タスクと同じ環境へ互換依存を宣言 |

```text
Retry Policy:
  業務上の再試行を許可するか？
  Enable serverless auto-optimization (may include additional retries) は適切か？
```

**頻出・罠**：`max_retries=0`だけで追加再試行も完全に止まると決めつけない。公式はat-most-once要件の例としてauto-optimization無効化を案内。高メモリは確認時点でPublic Preview・notebook taskのみと記載。提供条件は要確認。根拠：[SERVERLESS]。

<a id="sec-1-11"></a>
#### 1.11 ★ユニット／統合テスト・DataFrame.transform・組み込みデバッガー

**何か**：単体テストは小さな変換の正しさ、統合テストは実際のI/Oや権限・依存の接続を確認します。**なぜ**：実行成功や行数一致だけでは、誤った値・型を見逃すため。**仕組み**：変換を関数へ分離し、固定入力と期待DataFrame・スキーマを比較します。

```python
from pyspark.testing.utils import assertDataFrameEqual, assertSchemaEqual

def keep_valid(df):
    return df.filter('id IS NOT NULL AND amount >= 0')
actual = input_df.transform(keep_valid)
assertDataFrameEqual(actual, expected_df)
assertSchemaEqual(actual.schema, expected_df.schema)
```

| 道具 | 役割 | 罠 |
|---|---|---|
| assertDataFrameEqual / assertSchemaEqual | 期待結果・型の検証 | 行順やNULL/型の前提を明確に |
| 組み込みデバッガー | breakpoint、step、変数確認 | 確認時点でPython用。全executorの状態が見える道具ではない |
| 統合テスト | テーブル・権限・ジョブ連携 | 単体テストだけでは代替不可 |

**頻出・罠**：デバッガーで一度通すことと、自動回帰テストは別。Notebookデバッガーの対応compute/Runtimeは公式で確認。根拠：[TEST]、[DEBUGGER]。

## 2. コスト・性能最適化（現行Section 6：13%）

<a id="sec-2-1"></a>
### 2.1 ★Unity Catalog managed tablesが運用を減らす理由

**何か**：UCがメタデータだけでなくデータのライフサイクルも管理するテーブル。**なぜ**：ファイル配置、統計、保守を個々の開発者に任せると運用が増えるため。**仕組み**：プラットフォームの保守・最適化と統合し、権限をテーブル名で扱います。

```sql
CREATE TABLE main.study.orders (id BIGINT, amount DECIMAL(12,2)) USING DELTA;
```

| 種類 | 主な責務 |
|---|---|
| UC managed | UCが保存・ライフサイクル・最適化を管理 |
| external | メタデータをUC管理、外部保存先の運用責務は残る |
| foreign | 外部システム上のデータを表現 |

**頻出・罠**：managedでも権限・保持・費用の設計は必要。外部テーブルにもmanaged専用の機能が必ず効くとは限りません。根拠：[MANAGED]、[PO]。

<a id="sec-2-1-1"></a>
#### 2.1.1 原文の継続項目：オーバーヘッドとメンテナンスの負担

日本語PDFでは「理解する」の次に「オーバーヘッドとメンテナンスの負担。」が別の黒丸になっています。意味は2.1の継続と読み、見落としを防ぐため見出しを分けました。独立した新しい公式出題目標と断定するものではありません。

**基礎**：保守負担はファイル整理・統計更新・安全な古いデータ削除等の作業量です。**頻出・罠**：自動化は保守を統合しますが、データ品質や法的保持要件の判断まで代行しません。SQL例・比較は2.1を参照。根拠：[MANAGED]、[PO]。

<a id="sec-2-2"></a>
### 2.2 ★Deletion vectors・Liquid Clustering等のDelta最適化

**何か**：更新・削除時の書き換えや、読み取りのファイル量を減らす機能。**なぜ**：CPU追加だけではI/Oや小ファイルの負担を減らせないため。**仕組み**：DVは行の無効化を管理し、Liquidは検索パターンに沿うデータ配置、OPTIMIZEはファイル整理を担います。

```sql
OPTIMIZE main.study.orders;
```

| 手法 | 主な目的 | 罠 |
|---|---|---|
| OPTIMIZE | 小ファイルのcompaction等 | VACUUMと同じではない |
| Deletion vectors | 行変更の書き換え負担抑制 | 即時物理消去ではない |
| Liquid Clustering | データ配置・検索効率 | partition/ZORDERと無条件に併用不可 |

**頻出・罠**：問題の症状が更新書き換え、ファイル数、不要スキャンのどれかを見分けます。根拠：[LIQUID]、[DV]、[OPTIMIZE]。

<a id="sec-2-3"></a>
### 2.3 ★Data skippingとfile pruningの仕組み

**何か**：クエリに不要なファイルを読まない最適化。**なぜ**：大規模データではI/O量が支配的になりやすいため。**仕組み**：フィルタと統計、partitionやデータ配置を使い、対象を絞り込みます。

```sql
SELECT SUM(amount) FROM main.study.orders
WHERE order_date >= DATE '2026-11-01' AND order_date < DATE '2026-12-01';
```

| 観測 | 確認すること |
|---|---|
| 対象が少ないのにスキャンが多い | フィルタ、統計、配置 |
| 絞り込み列へ複雑な変換を適用 | predicateが最適化されるか実行計画で確認 |

**頻出・罠**：結果の行数と読んだファイル量は別。高カーディナリティ列で過細分化すると小ファイル問題も起こります。根拠：[SKIPPING]、[QUERY]。

<a id="sec-2-4"></a>
### 2.4 ★CDFでStreaming Tableの変更追跡制限と遅延に対処

**何か**：Deltaの行変更を公開するChange Data Feed。**なぜ**：通常のappendストリームでは更新・削除を下流へ正しく伝えられないため。**仕組み**：変更種別・commit情報を読み、必要な更新・削除を適用します。

```sql
ALTER TABLE main.study.orders
SET TBLPROPERTIES (delta.enableChangeDataFeed = true);
SELECT _change_type, _commit_version, id
FROM table_changes('main.study.orders', 12, 15);
```

| 種別 | 現在状態への適用の考え方 |
|---|---|
| insert / update_postimage | 新規作成・更新後を反映 |
| delete | 対象を削除 |
| update_preimage | 更新前。用途に応じ処理、単純な新規売上として足さない |

**頻出・罠**：有効化前の全変更を復元する機能ではありません。保持期間と下流遅延を整合させ、永久監査履歴とは区別。CDFを読むだけでターゲットへ自動適用されるわけでもありません。根拠：[CDF]。

<a id="sec-2-5"></a>
### 2.5 ★Query Profileでdata skipping・join・shuffleを分析

**何か**：SQLの演算子やI/O、実行時間を観察する道具。**なぜ**：遅い理由を測定せずに設定を変えても、費用だけ増えるため。**仕組み**：スキャン、join、shuffle、spill等を追い、改善後に再計測します。

```sql
EXPLAIN FORMATTED
SELECT f.id, d.category FROM main.study.orders f
JOIN main.study.products d ON f.product_id = d.product_id;
```

| 症状 | 第一に検討 |
|---|---|
| 大量スキャン | pruning・統計・配置 |
| 一部taskだけ極端に遅い | キー偏り・skew |
| 大きなshuffle/spill | join/集約のデータ量・戦略・メモリ |

**頻出・罠**：broadcastは小さい側の実サイズと資源を確認。何でも巨大クラスタ化、何でもbroadcastは避けます。根拠：[QUERY]。

## 3. 変換・クレンジング・品質（現行Section 3：10%）

<a id="sec-3-1"></a>
### 3.1 ★Window関数・join・aggregationによる大規模変換

**何か**：Windowは行を残してグループ内の順序・集計を計算し、GROUP BYは粒度を変え、joinは関係を結びます。**なぜ**：似た出力でも重複・NULL・期間の意味で誤集計するため。**仕組み**：粒度、キー一意性、順序、window frameを先に決めます。

```sql
SELECT * EXCEPT (rn) FROM (
  SELECT *, ROW_NUMBER() OVER (
    PARTITION BY customer_id ORDER BY changed_at DESC, event_id DESC
  ) AS rn FROM main.study.customer_events
) WHERE rn = 1;
```

| 道具 | 要確認の契約 |
|---|---|
| ROW_NUMBER / RANK | 一件だけ残すか、同順位を残すか |
| ROWS / RANGE frame | 物理行ベースか、順序値ベースか |
| LEFT JOIN | 右側のWHERE条件で実質innerにならないか |
| SUM / COUNT | NULL、重複、join後の粒度 |

**頻出・罠**：非一意dimensionをjoinしてSUMすると金額が膨らみます。SUM(DISTINCT amount)は正しいキー対応の代わりではありません。集約前のWHEREと集約後のHAVINGを区別。根拠：[WINDOW]、[JOIN]。

<a id="sec-3-2"></a>
### 3.2 ★LakeflowとクラシックAuto Loaderで不正データを隔離

**何か**：正常データと不正データを分離し、検証・修復可能にする品質設計。**なぜ**：破棄だけでは原因分析や再処理の要件を満たさないため。**仕組み**：同じ品質規則からvalidフラグを作り、正常・隔離の二系統へ分岐します。

```sql
SELECT *, coalesce(amount >= 0 AND customer_id IS NOT NULL, false) AS valid
FROM main.study.raw_orders;
```

| 方法 | 違反行 | 影響 |
|---|---|---|
| EXPECT（記録） | 保持 | メトリクスで観測 |
| DROP ROW | 破棄 | 他の正常行は継続 |
| FAIL UPDATE | 更新を失敗 | 不整合の公開を止める |
| quarantine | 別出力へ保存 | 原因分析・再処理を可能に |

**頻出・罠**：`NOT(condition)`はNULLを自動的にtrueにしません。`_rescued_data`は解析・スキーマの救済で、負額等の業務ルールを自動判定しません。クラシックではforeachBatch等で分岐先と再実行の冪等性を設計し、複数出力が自動で一つの原子的更新になると考えない。根拠：[EXPECT]、[AUTO]、[FOREACH]。

## 4. モニタリング・アラート（現行Section 5：10%）

<a id="sec-4-a"></a>
### 4.A モニタリング

モニタリングは継続的に状態・品質・費用を把握する工程です。アプリの成功終了、データ品質の達成、予算内であることは別の観測対象であり、単一のログだけではすべてを証明できません。

<a id="sec-4-1"></a>
#### 4.1 ★system tablesでリソース・費用・監査・ワークロードを観測

**何か**：Databricks運用情報をUC上でクエリ可能にしたテーブル群。**なぜ**：個々の画面やログを集めるだけでは横断分析が難しいため。**仕組み**：billing、compute、access、lakeflow等を適切なキーと時間で関連づけます。

```sql
SELECT usage_date, sku_name, usage_unit, SUM(usage_quantity) AS quantity
FROM system.billing.usage
GROUP BY usage_date, sku_name, usage_unit;
```

| 対象 | 主な参照先 |
|---|---|
| 利用量 | system.billing.usage |
| 監査 | system.access.audit等 |
| ジョブ実行 | system.lakeflowの関連テーブル |

**頻出・罠**：利用量≠ドル。価格と結合するならSKU・クラウド・有効期間・通貨等を確認。system tableの権限・提供リージョン・保持条件は個別に確認します。根拠：[SYSTEM]。

<a id="sec-4-2"></a>
#### 4.2 ★Query Profiler UIとSpark UIでワークロードを監視

**何か**：Query Profileはクエリの演算計画、Spark UIはjob/stage/task等の実行情報。**なぜ**：スキャン過多と一部taskのスキューでは観察すべき粒度が違うため。**仕組み**：時間帯・run・クエリを対応づけ、分布とボトルネックを確認します。

| 道具 | 向く問い | 代用できないもの |
|---|---|---|
| Query Profile | どのSQL演算子が重いか | 全社の課金集計 |
| Spark UI | 特定taskの遅延・spill・偏り | 品質ルールごとの違反数 |
| system tables | 横断的な傾向 | すべての局所的な実行詳細 |

```sql
EXPLAIN FORMATTED SELECT customer_id, SUM(amount)
FROM main.study.orders GROUP BY customer_id;
```

**頻出・罠**：EXPLAINは計画であり実測値ではありません。計画とUIの実行結果を合わせて確認。根拠：[QUERY]、[SPARKUI]。

<a id="sec-4-3"></a>
#### 4.3 ★REST API・CLIでジョブ／パイプラインを監視

**何か**：運用情報をプログラムから取得する公開インターフェース。**なぜ**：人手で画面を見続けずに継続監視するため。**仕組み**：ジョブ定義とrunを区別し、非同期状態を取得、必要なtask結果を判定します。

```bash
databricks jobs get-run <run-id>
databricks pipelines get <pipeline-id>
```

**頻出・罠**：HTTP 200は情報取得の成功。runのライフサイクル／resultやflowの更新結果は別です。定義IDと実行IDの取り違え、ページング・取得間隔・権限にも注意。根拠：[JOBS]、[CLI]。

<a id="sec-4-4"></a>
#### 4.4 ★Lakeflow Pipeline event logで健全性と品質を監視

**何か**：パイプラインの更新・flow・品質等のイベント情報。**なぜ**：ジョブが成功しても大量のDROPがあればデータ品質は悪化しているため。**仕組み**：イベントの種類、実行、flow、期待条件のメトリクスを関連づけます。

```sql
-- pipeline_idと参照権限がある演習環境の例。
SELECT timestamp, event_type, details
FROM event_log('<pipeline-id>')
ORDER BY timestamp DESC;
```

| 調査対象 | event logが役立つ点 |
|---|---|
| DROP行の増加 | 期待条件ごとの品質統計 |
| 更新失敗 | 対象flow・エラーの文脈 |

**頻出・罠**：公式はevent deliveryがbest-effortであり、全イベントの到達を保証しないと説明しています。品質メトリクスにも利用条件があります。event logは全社の請求台帳ではありません。event logへの権限と元テーブルの権限も同義ではない。根拠：[EVENTLOG]。

<a id="sec-4-b"></a>
### 4.B アラート通知

通知は観測結果を担当者へ届ける工程です。しきい値の評価、鮮度、実行時刻、宛先、ミュート条件が揃って初めて運用上の検知になります。

<a id="sec-4-5"></a>
#### 4.5 ★SQL Alertsによるデータ品質監視

**何か**：SQL結果を条件評価して通知する機能。**なぜ**：正常終了でも欠損や件数異常を検出する必要があるため。**仕組み**：不正件数や鮮度をクエリにし、評価タイミング・閾値・通知先を設計します。

```sql
SELECT count_if(amount < 0 OR amount IS NULL) AS invalid_rows,
       MAX(ingested_at) AS last_ingest
FROM main.study.orders;
```

**頻出・罠**：古い正常値を毎分評価しても、当日のデータ未着を発見できません。ゼロ行を正常とするか欠測とするかを決める。品質検査SQLと通知設定は別工程です。新ガイドはLakehouse alertsという広い表記も使用。根拠：[ALERT]。

<a id="sec-4-6"></a>
#### 4.6 ★Lakeflow JobsのUI／Jobs APIで状態・性能の通知を設定

**何か**：ジョブやタスクの開始・成功・失敗・実行時間等に基づく通知。**なぜ**：業務データの条件だけでなく実行障害・遅延を知るため。**仕組み**：job-level/task-level、duration閾値、宛先、retry時の通知条件を分けて設定します。

| 条件 | 設計ポイント |
|---|---|
| タスク再試行ごとの失敗を検知 | task-level通知とmute条件 |
| ジョブ全体の長時間化 | expected durationとDuration Warning |
| 一部失敗を含む成功状態 | 通知イベントと実際のresultの意味 |

```text
通知設計票：対象(job/task) → イベント → 閾値 → 宛先 → 再試行中のmute
```

**頻出・罠**：公式はjob-level通知が失敗タスクのretryごとには送られないと説明。Succeeded with failuresは通知上の成功として扱われる点に注意。Slack等への実通知は本教材では送信しません。根拠：[NOTIFY]。

## 5. セキュリティ・コンプライアンス（現行Section 7：10%）

<a id="sec-5-a"></a>
### 5.A データセキュリティメカニズムの適用

認証は「誰か」、認可は「何をしてよいか」です。ワークスペースのジョブ・ノートブックと、UCのデータには異なるアクセス制御があります。行・列の可視制御と、保存データの削除も分けます。

<a id="sec-5-1"></a>
#### 5.1 ★Workspace ACLと最小権限

**何か**：ジョブ・ノートブック等に対する閲覧・実行・編集等の許可。**なぜ**：データを読めることと本番ジョブを変更できることは異なるため。**仕組み**：グループやサービスプリンシパルへ必要な操作だけ付与し、ジョブ実行主体のデータ権限も確認します。

| 層 | 保護するもの |
|---|---|
| Workspace ACL | ジョブ・ノートブック等 |
| UC権限 | catalog/schema/table等 |
| クラウド側認証 | ストレージや外部サービス |

```sql
-- データ読取り側の最小例。これだけでジョブ編集権限は得ない。
GRANT USE CATALOG ON CATALOG main TO `study_analysts`;
GRANT USE SCHEMA ON SCHEMA main.study TO `study_analysts`;
GRANT SELECT ON TABLE main.study.orders TO `study_analysts`;
```

**頻出・罠**：SELECTがあっても親のUSE権限が必要。ジョブを起動する権限とrun-as主体の権限を混同しない。根拠：[ACL]、[PRIV]。

<a id="sec-5-2"></a>
#### 5.2 ★行フィルターと列マスク

**何か**：行フィルターは見える行、列マスクは見える列値を制御。**なぜ**：全行の集計は許すがPIIは伏せる等の要件を満たすため。**仕組み**：利用者の属性等に応じる関数・ポリシーをテーブル／列へ適用します。

| 要件 | 選択 |
|---|---|
| 自部門の行だけ | 行フィルター |
| 全取引は見せるがemailを伏せる | 列マスク |
| 複数テーブルにタグで統一制御 | ABACは新試験で明示、対応条件を確認 |

```sql
-- 専用演習環境の例。関数と列の型・適用権限を先に確認。
CREATE OR REPLACE FUNCTION main.study.mask_email(s STRING)
RETURNS STRING
RETURN CASE WHEN is_account_group_member('pii_readers') THEN s ELSE '***' END;
ALTER TABLE main.study.customers ALTER COLUMN email
SET MASK main.study.mask_email;
```

**頻出・罠**：マスクは物理消去ではない。動的ビューだけ保護しても元テーブルへの別経路が開いていれば要件を満たさない。根拠：[MASK]。

<a id="sec-5-3"></a>
#### 5.3 ★ハッシュ化・トークン化・抑制・一般化

**何か**：識別情報を加工する方法。**なぜ**：分析の有用性を保ちながら個人の識別リスクを下げるため。**仕組み**：用途に応じ、置換・削除・粒度低下等を選びます。

| 方法 | 使い方 | 注意 |
|---|---|---|
| ハッシュ化 | 一貫した置換で照合 | 辞書攻撃・再識別。匿名化とは限らない |
| トークン化 | 代替値へ置換 | 対応表と鍵の保護 |
| 抑制 | 不要な値や列を出さない | 分析可能性が減る |
| 一般化 | 年齢帯等へ粒度を落とす | 組み合わせによる再識別 |

```sql
SELECT sha2(email, 256) AS email_hash FROM main.study.customers;
```

**頻出・罠**：例のハッシュだけで「完全匿名化」と主張しない。決定的ハッシュは同じ入力を照合でき、候補が狭い入力は推測可能です。法的分類は再識別可能性と利用条件で評価。根拠：[MASK]。

<a id="sec-5-b"></a>
### 5.B コンプライアンスの確保

技術設定だけでなく、情報の所在、利用目的、保持期限、削除・監査の手順を一貫させることです。特定の関数を使っただけで法令遵守が完了するわけではありません。

<a id="sec-5-4"></a>
#### 5.4 ★PIIを検出・マスクするバッチ／Streamingパイプライン

**何か**：PIIの所在を把握し、各経路で保護する設計。**なぜ**：silverだけマスクしてもbronze、隔離、ログ等に漏れ得るため。**仕組み**：分類→アクセス制御→マスク→観測を、再処理を含む全経路へ適用します。

```text
入力 → bronze → 検証・隔離 → silver → gold
           各保存物・ログ・再処理入力に同じ保護方針を適用
```

| 工程 | 達成すること | それだけでは未達のもの |
|---|---|---|
| PII検出 | 所在の発見 | アクセス拒否 |
| マスク | 利用時の可視制御 | 原本の消去 |
| 監査 | 利用の追跡 | 不正利用の自動防止すべて |

**頻出・罠**：バッチだけにルールを適用し、ストリームの別入口を放置しない。検査のエラー出力やサンプルログにも実値を書き過ぎない。根拠：[CLASSIFY]、[MASK]。

<a id="sec-5-5"></a>
#### 5.5 ★保持ポリシーに準拠したパージ

**何か**：不要な個人データ等を安全に削除するライフサイクル管理。**なぜ**：SQLのDELETEだけでは古いファイルや再取り込み経路が残るため。**仕組み**：対象範囲を洗い出し、論理削除・再導入防止・物理整理・保持・監査を組み合わせます。

```sql
-- 例示。対象と保持要件を確認した専用環境でのみ実行する。
DELETE FROM main.study.customers WHERE customer_id = 123;
-- 旧ファイル整理は長時間読み取りや保持規則の確認後に検討する。
```

| 操作 | 意味 |
|---|---|
| DELETE | 現在の論理状態から除去 |
| 必要なREORG等 | DV等で残るデータの物理再書き込みを検討 |
| VACUUM | 保持条件を満たした不要ファイルを削除 |

**頻出・罠**：ゼロ時間保持でのVACUUMを一般解にしない。bronze/silver/gold、バックアップ、共有先、再処理の復活も対象範囲に含めます。根拠：[VACUUM]、[DV]。

## 6. デバッグ・デプロイ（現行Section 9：10%）

<a id="sec-6-a"></a>
### 6.A デバッグとトラブルシューティング

デバッグは失敗した層を特定し、根拠を集めて原因を狭める工程です。driver、executor、外部I/O、認可、品質、依存関係のどこで止まったかを先に確認します。

<a id="sec-6-1"></a>
#### 6.1 ★Spark UI・cluster logs・system tables・Query Profileを使う診断

**何か**：異なる粒度の診断情報を組み合わせる方法。**なぜ**：import例外をshuffle指標で調べても原因は見つからないため。**仕組み**：失敗の段階と実行ID・時刻を揃えて追います。

| 症状 | まず確認 |
|---|---|
| import時に失敗 | タスク出力・driver logs・依存 |
| 一部taskの遅延 | Spark UI、キー分布 |
| SQLの大量スキャン | Query Profile |
| 長期的な実行・費用増加 | system tables |

```python
# driverへ全件collectせず、小さな再現入力で切り分ける。
small = spark.createDataFrame([(1, 10.0)], 'id long, amount double')
small.explain('formatted')
```

**頻出・罠**：OOMはdriverかexecutorかを区別。大きなcollectやスキューを資源追加だけで隠さない。根拠：[SPARKUI]、[QUERY]、[SYSTEM]。

<a id="sec-6-2"></a>
#### 6.2 ★失敗runの修復とパラメーターoverride

**何か**：原因修正後、必要なタスクを選んで実行を回復する仕組み。**なぜ**：成功した高コストな上流まで毎回再実行すると副作用と費用が増えるため。**仕組み**：repair対象・後続依存・再処理範囲のパラメーターを確認し、既存出力との整合を保ちます。

```text
A成功 → B失敗 → C未実行
原因修正 → Bと必要なCをrepair
期間引数を変える場合 → Aの既存出力と処理範囲が整合するか確認
```

**頻出・罠**：repairはバグの自動修正ではありません。引数を変えたのに既存checkpointや出力の意味を見直さないと不整合になります。根拠：[REPAIR]。

<a id="sec-6-3"></a>
#### 6.3 ★Pipeline event logとSpark UIでLakeflow／Sparkをデバッグ

**何か**：flowの失敗理由と分散実行のボトルネックを結びつける調査。**なぜ**：品質ルール違反とshuffleのメモリ不足では修正が異なるため。**仕組み**：event logで対象flow・期待条件・エラーを絞り、必要ならSpark UIや入力サンプルで確認します。

```sql
SELECT timestamp, event_type, details
FROM event_log('<pipeline-id>')
WHERE event_type IN ('flow_progress', 'update_progress')
ORDER BY timestamp DESC;
```

**頻出・罠**：FAIL UPDATEのエラーを無条件にDROPへ変えて隠さない。原因が品質なら入力／規則、資源なら実行計画と分布を調べます。根拠：[EVENTLOG]、[SPARKUI]。

<a id="sec-6-b"></a>
### 6.B CI/CDのデプロイ

CIは変更を検証する工程、CDは検証した成果物を環境へ配備する工程です。Gitに置いただけ、validateが通っただけでは、本番の設定・依存・権限・業務結果は保証されません。

<a id="sec-6-4"></a>
#### 6.4 ★Declarative Automation Bundlesでリソースをbuild/deploy

**何か**：ジョブ等のリソースと環境差を宣言する仕組み。**なぜ**：UIでの手作業の差を減らし、同じ定義を昇格するため。**仕組み**：`databricks.yml`、resources、targetsをソース管理し、検証・配備・実行を分離します。

```bash
databricks bundle validate -t dev
databricks bundle deploy -t dev
databricks bundle run -t dev <resource-key>
```

| 工程 | 保証する範囲 |
|---|---|
| validate | 設定の検証 |
| deploy | リソースの配備 |
| run | ワークロード実行の開始・追跡 |

**頻出・罠**：validateは業務品質テストではありません。環境の保存先・実行主体・アクセス権、deploy stateの分離まで確認。根拠：[BUNDLE]。

<a id="sec-6-5"></a>
#### 6.5 ★Git folders（旧Repos）によるGitベースCI/CD

**何か**：コード変更を履歴・レビュー・配備へつなげる運用。**なぜ**：本番UI上の手動修正とGitが乖離すると次の配備で消えるため。**仕組み**：特定コミットやタグをテストし、同じソースを環境別設定で昇格します。

```text
変更 → PR/レビュー → 単体・統合テスト → Bundle検証
     → dev/staging配備 → 承認 → 同一コミットをprodへ
```

**頻出・罠**：Git pullだけでジョブ設定・依存・権限がすべて同期されるとは限りません。秘密情報をGitへ入れず、環境差は設定に分離。根拠：[GIT]、[BUNDLE]。

## 7. 取り込み・取得（現行Section 2：7%）

<a id="sec-7-1"></a>
### 7.1 ★メッセージバス／クラウドから各種フォーマットを取り込む

**何か**：入力源とフォーマットに対応する読取り方式を選ぶ設計。**なぜ**：ファイルとメッセージバスでは進捗・認証・スキーマの扱いが違うため。**仕組み**：ソースコネクタで取り込み、フォーマットのreaderで解釈、状態と救済を管理します。

| 現行Outlineの形式 | 読み方の軸 |
|---|---|
| Delta Lake / Parquet / ORC / AVRO | 対応するテーブル・ファイルreaderとスキーマ |
| JSON / CSV / XML | パース、型、壊れた入力・救済を検討 |
| Text / Binary | 文字列行やバイナリの意味を定義 |
| Kafka等のメッセージバス | 専用source・認証・offsetとpayloadのdecode |

```python
parquet_df = spark.read.format('parquet').load(parquet_path)
# Kafkaをファイルパスとして読むのではなく、対応sourceを使う。
# 認証情報等の必要設定は環境に応じて別途指定する。
kafka_df = (spark.readStream.format('kafka')
            .option('kafka.bootstrap.servers', broker)
            .option('subscribe', topic).load())
```

**頻出・罠**：列挙された全形式が同じAuto Loaderオプションで読めるという意味ではありません。クラウド別コネクタ、Runtime、ライブラリ対応は公式で確認。`_rescued_data`を業務品質の判定器と思わない。根拠：[AUTO]、[FORMAT]、[KAFKA]。

<a id="sec-7-2"></a>
### 7.2 ★DeltaでバッチとStreamingの追記専用パイプラインを作る

**何か**：履歴を上書きせず、新規データをDeltaへ足すパターン。**なぜ**：同じ保存層からバッチ分析と増分処理を接続しやすくするため。**仕組み**：追記の契約、schema、checkpointと再実行時の重複防止を合わせます。

```python
batch_df.write.format('delta').mode('append').saveAsTable('main.study.events')
stream_df = spark.readStream.table('main.study.events')
# start()する時はクエリ固有の永続checkpointとsinkを指定する。
```

| 上流の契約 | 下流の設計 |
|---|---|
| 追記のみ | 通常の増分readを検討 |
| UPDATE/DELETEあり | CDF等で変更を適用する設計を検討 |

**頻出・罠**：変更コミットを読み飛ばしても下流が正しい現在状態になるとは限りません。appendモードだけで業務イベントの二重登録まで防げるわけでもありません。根拠：[CDF]、[STREAMDELTA]。

## 8. ガバナンス（現行Section 8：7%）

<a id="sec-8-1"></a>
### 8.1 ★説明・タグ等のメタデータで発見性を高める

**何か**：データの意味・責任者・分類をカタログへ記録すること。**なぜ**：列名だけでは正しい粒度や使い方がわからず誤利用されるため。**仕組み**：コメントで意味を説明し、タグで分類・検索を一貫させます。

```sql
COMMENT ON TABLE main.study.orders IS '注文単位。返品は別レコード。責任部署は営業分析。';
```

| 道具 | 適するもの |
|---|---|
| コメント | 粒度・制約・更新頻度等の文脈 |
| タグ | 機密分類・部門等の統一属性 |
| 権限／ポリシー | アクセスの強制 |

**頻出・罠**：「confidential」と書いただけではSELECTを拒否しません。PII実値をタグやコメントへ拡散しない。governed tagsとABACの連携は一般タグだけの動作と区別。根拠：[COMMENTS]、[TAGS]。

<a id="sec-8-2"></a>
### 8.2 ★Unity Catalogの権限継承モデル

**何か**：catalog/schemaで付与した適用可能な権限が配下へ及ぶ仕組み。**なぜ**：大量の現在・将来のオブジェクトを個別付与せず管理するため。**仕組み**：どの親やグループから権限を得ているかを評価します。

```sql
-- 広い範囲へ付与する例。最小権限として妥当か先に評価。
GRANT SELECT ON SCHEMA main.study TO `study_analysts`;
```

| 区別 | 正しい理解 |
|---|---|
| SELECTとUSE | テーブル読取りと親の使用権限は別 |
| 直接付与と継承 | 子の直接GRANTを外しても親の権限が残り得る |
| SELECTと所有権 | 読取り可能でも所有者になるわけではない |

**頻出・罠**：すべての権限が同じ対象へ同じように継承されるとは限りません。ALL PRIVILEGES、MANAGE、所有権の意味はリファレンスで確認。根拠：[PRIV]。

## 9. モデリング（現行Section 10：Web6%／日本語PDF7%：要確認）

<a id="sec-9-1"></a>
### 9.1 ★大規模データ向けのスケーラブルなDeltaモデル

**何か**：正しい業務粒度と効率的な保存・更新を両立するモデル。**なぜ**：高速な誤集計も、正しいが運用不能な表も本番要件を満たさないため。**仕組み**：一行の意味、キー、履歴、更新方式、配置、ファイル粒度を分けて決めます。

```sql
CREATE TABLE main.study.sales_lines (
  order_id BIGINT, line_id BIGINT, product_id BIGINT, amount DECIMAL(12,2)
) USING DELTA;
```

| 設計層 | 問い |
|---|---|
| 論理モデル | 一行は注文か明細か、どの金額を加算できるか |
| 更新モデル | 追記か、upsertか、履歴保持か |
| 物理モデル | 検索・joinに合う配置とファイルサイズか |

**頻出・罠**：Liquidを有効にしても粒度不一致は修正されません。冗長列の追加で更新整合性を悪化させない。根拠：[MANAGED]、[LIQUID]。

<a id="sec-9-2"></a>
### 9.2 ★Liquid Clusteringでレイアウト判断を簡素化

**何か**：クラスタリングキーに基づき検索に適した配置を維持する方式。**なぜ**：静的なpartition設計がデータの増加や検索の変化へ追随しにくいため。**仕組み**：利用パターンに応じたキーと最適化を選びます。

```sql
CREATE TABLE main.study.clicks (
  user_id BIGINT, event_time TIMESTAMP, page STRING
) USING DELTA CLUSTER BY (user_id);
```

**頻出・罠**：キー変更だけで全ファイルが即座に再配置されるとは限りません。対応Runtime・形式・既存表の状態を確認。新試験ではCLUSTER BY AUTOも明示。根拠：[LIQUID]。

<a id="sec-9-3"></a>
### 9.3 ★Liquidとpartitioning／ZORDERを比較

**何か**：物理的にデータをまとめる異なる方式。**なぜ**：誤ったpartitioningは小ファイル・偏りを増やすため。**仕組み**：表サイズ、検索列、カーディナリティ、運用工数で選びます。

| 方法 | 適する条件の考え方 | 罠 |
|---|---|---|
| partition | 安定した列で十分なデータ量をまとめる | user_id等で細分化し過ぎる |
| ZORDER | 非LiquidのDeltaで検索列の配置 | Liquidと同じ表へ重ねない |
| Liquid | 変化するアクセスや配置の柔軟性 | 不要なjoin・全件collectまで解消はしない |

```sql
-- 非Liquidの既存Deltaで検討する例。Liquid表には適用しない。
OPTIMIZE main.study.legacy_events ZORDER BY (customer_id);
```

**頻出・罠**：どの方法も無条件に併用すればよいわけではありません。根拠：[LIQUID]、[PARTITION]。

<a id="sec-9-4"></a>
### 9.4 ★分析向けディメンショナルモデル

**何か**：測定イベントのfactと、分析軸のdimensionを分けたモデル。**なぜ**：売上等を共通の粒度・属性・履歴で解釈するため。**仕組み**：キーと履歴期間を定義し、factが正しいdimensionの版へ対応するよう結合します。

```sql
SELECT f.order_id, d.segment, f.amount
FROM main.study.sales f JOIN main.study.customer_dim d
ON f.customer_id = d.customer_id
AND f.sold_at >= d.valid_from
AND (f.sold_at < d.valid_to OR d.valid_to IS NULL);
```

| モデル | 効果／注意 |
|---|---|
| Type 1 dimension | 最新へ上書き、過去属性を失う |
| Type 2 dimension | 履歴保持。業務キーだけで全履歴へjoinしない |
| fact粒度 | ヘッダー／明細の総額を重複SUMしない |

**頻出・罠**：履歴を保存することと、factが正しい版へ結びつくことは別です。根拠：[CDC]、[JOIN]。

## 10. 共有・フェデレーション（現行Section 4：Web5%／日本語PDF10%：要確認）

<a id="sec-10-1"></a>
### 10.1 ★Delta SharingのD2Dとオープン共有D2O

**何か**：管理下のデータを受信者へ安全に提供する仕組み。**なぜ**：CSVの手配布や管理者ログイン共有では制御・鮮度を維持しにくいため。**仕組み**：shareへ対象を追加し、受信者の環境に合う認証・参照方式を選びます。

| 方式 | 受信側 |
|---|---|
| D2D | Databricks間。受信側metastore等を識別 |
| D2O / open sharing | Databricks外。対応クライアントと認証を確認 |

```text
provider → share（許可した対象のみ）→ recipient
```

**頻出・罠**：すべてを公開バケットへ置く方法ではありません。受信者へ共有元の管理者アカウントを渡さない。新ガイドはOpenSharing表記も使用。根拠：[SHARE]。

<a id="sec-10-2"></a>
### 10.2 ★適切なガバナンスを持つLakehouse Federation

**何か**：外部システム上のデータをUC経由で問い合わせる仕組み。**なぜ**：全面コピーを避けつつ統制した参照が必要な場合があるため。**仕組み**：connectionとforeign catalogを用い、接続資格情報・外部権限・UC権限を整合させます。

```sql
-- 管理者が接続とforeign catalogを設定済みの例。
SELECT * FROM external_sales.public.orders LIMIT 10;
```

| 層 | 確認事項 |
|---|---|
| connection | 外部認証・到達性 |
| foreign catalog | 外部オブジェクトのUC表現 |
| 実行 | pushdown、ソース負荷、対応機能 |

**頻出・罠**：UCのSELECTだけで外部認証も不要にはなりません。ソース側負荷がゼロになる保証もない。根拠：[FED]。

<a id="sec-10-3"></a>
### 10.3 ★任意のコンピューティング基盤へのライブデータ共有

**何か**：受信者の利用基盤に合う共有方式で、許可したデータを参照させる設計。**なぜ**：毎日の独立コピー配布では鮮度・更新・権限変更が追いにくいため。**仕組み**：対応する共有クライアントを使い、鮮度とアクセスのライフサイクルを管理します。

| 要件 | 候補 |
|---|---|
| 管理下データを他者へ提供 | Delta Sharing / OpenSharing |
| 外部DBをコピーせず自分が照会 | Federation |
| ローカル保持して継続変換 | 取り込み・CDC |

```text
受信側：認証・対応クライアント・共有テーブルの参照
確認：共有停止後の新規アクセスと、既に取得済みのコピーの扱いを分ける
```

**頻出・罠**：「任意の基盤」は無条件に全機能が同じという意味ではありません。共有を失効しても受信者が既に保存したコピーを魔法のように消せるとは考えない。根拠：[SHARE]。

## 11. 公式サンプル問題の要点（転載なし）

英語・日本語の公式PDFには10個のサンプルがあります。以下は**問われる論点の要約**であり、問題文・選択肢の翻訳／複製ではありません。日本語PDFのサンプル冒頭には10/9に触れる旧記述が残りますが、冒頭の11/19・11/20の明示と区別して読んでください。

| サンプルのテーマ | 覚える判断軸 |
|---|---|
| STとMV | 到着行だけか、修正を含む全体結果か |
| 状態付きStreaming | watermarkによる状態管理とcheckpointによる復旧を分離 |
| DB変更取り込み | managed CDCと一括ロード・ファイル取り込みを区別 |
| 半構造化データ | VARIANTによる保持・パス抽出と固定スキーマの使い分け |
| 運用／コスト観測 | system tablesと局所診断ログの役割 |
| 更新時の書き換え抑制 | deletion vectorsと物理ファイル整理の違い |
| 統一したPIIポリシー | ABACとgoverned tags、個別マスク設定の違い |
| UC継承 | 将来の子オブジェクトと親のUSE権限の条件 |
| 環境別デプロイ | Bundleのtargetsと再現可能な配備 |
| 指標と事前集計 | Metric ViewとMVは責務が違う |

新アウトライン向けのサンプルなので、現行試験に全テーマが同じ比重で出るという意味ではありません。

## 12. 模擬試験（HTML版）

[`databricks-de-professional-mock-exam.html`](databricks-de-professional-mock-exam.html) をブラウザで開いてください。**現行10ドメイン向けオリジナル60問**、答え合わせ・選択肢別の解説・根拠リンク・ドメイン別スコア・復元・進捗JSON出力に対応。模試配分は0.3の暫定配点に従います。

### 追加の演習問題（外部リソース）

リンクは2026-11-07（JST）に実ページ到達を確認。第三者の問題は本パックへコピー・翻訳転載していません。実際の品質・著作権由来・合格効果まで保証するものではありません。

**公式（最優先）**
1. [日本語公式Exam Guide][JA]：受験日別の範囲と公式サンプル。丸暗記でなく判断理由を説明。
2. [英語公式Exam Guide][EN]：新旧語の対応とサンプルの根拠。ただし11/19までの日本語受験は現行版が対象。
3. [公式試験ページ][PAGE]／[日本語ページ][JPAGE]：登録・Academyへの入口。受講済みの演習ラボを再利用し、失敗ケースを一つ追加する。
4. [公式AI Prep Guide](https://www.databricks.com/sites/default/files/2026-06/ai-prep-guide-any-databricks-certification.pdf)：最新の公式範囲を根拠に、未知のシナリオと実機確認のチェックリストを作る。AI回答のコマンド・権限は公式で検証。

**日本語の追加候補**
- [Yota Arahata「【日本語試験問題集】Databricks認定データエンジニア-プロフェッショナル-」](https://www.udemy.com/course/databricks-data-engineer-professional-jp-ay/)：日本語の練習問題と解説。商品ページは2026年10月更新を表示。購入前に**現行10ドメインへの適合**とサンプル説明を確認。新しい名称だけで最新版対応と判断しない。
- [立石のぞみ「本番形式 模擬試験 全6回」](https://www.udemy.com/course/databricks-data-engineer-professional-jp-nt/)：ページは**2026-10-09の新9ドメイン対応**を明示。11/19までの日本語現行試験とは範囲と配点が違うため、現行版の主教材にせず共通テーマの補強候補。ページの「新試験に日本語なし」「70%」を、現行日本語の提供状況や公式合格点に読み替えない。

**英語の追加候補**
- [Alex Cole: Comprehensive Resource Guide](https://www.alexcole.net/databricks-certified-data-engineer-professional-comprehensive-resource-guide/)：試験目標から公式ドキュメントとデモへ辿れる補助資料。2026-10-09更新、新アウトライン中心。問題集ではなくハンズオンの索引として利用。
- [CertLake](https://www.certlake.com/)：英語の練習・診断候補。説明ページでProfessional向け練習と根拠リンクを案内。無料／有料の現行条件と現行試験への対応は利用前に確認。問題の中身を本パックへ再配布しない。

**使い方**：短期対策では教材を増やし過ぎず、誤答分野を一つ選び、未見の10〜15問または同等の小演習→根拠の確認→なぜ他の選択肢が違うか説明、のサイクルを回します。英語問題は元サイト上で理解を補助し、独自の日本語メモは論点だけにします。

**dumpへの警告**：「real exam questions」「本試験そのまま」「流出問題」「合格保証」等を売るサイトや問題集は避けてください。Udemy等のプラットフォーム上でも出所を確認します。試験規約違反・著作権・誤情報のリスクがあります。過去の受験者に実際の問題を提供してもらう方法も使いません。

## 13. ★直前チェックリスト

### 前日まで
- [ ] 受験日が11/19以前か、予約言語が日本語か、現行／新の試験名を確認した。
- [ ] 公式PDFと予約の時間表記を確認した（日本語Web本文の90分をそのまま信じない）。
- [ ] 配点の公式不一致を把握した。模試の配点を本試験の保証と考えていない。
- [ ] ST / MV / view、CDF / AUTO CDC、DROP / quarantineを説明できる。
- [ ] OPTIMIZE / VACUUM / deletion vectors、Liquid / partition / ZORDERの目的を区別できる。
- [ ] SELECTとUSE権限、UCとworkspace ACL、匿名化と仮名化を区別できる。
- [ ] Query Profile / Spark UI / event log / system tablesを症状から選べる。
- [ ] Bundle validate / deploy / run、Git管理とCD、repairと全再実行を区別できる。
- [ ] join前の粒度・キー一意性・Type 2有効期間を確認できる。
- [ ] 予約メールの本人確認・名前一致・持ち物・変更締切・オンライン受験要件を確認した（本書は未検証の細則を断定しない）。

### 当日
- [ ] オンラインなら公式のシステムチェック、ネットワーク・カメラ等を確認。会場なら移動・受付条件を確認。
- [ ] 問題の「最小運用」「最小コスト」「更新・削除も反映」「生データ非公開」「再実行可」などの制約に線を引くつもりで読む。
- [ ] 120分÷採点59問だけを厳密な1問時間にしない。採点対象外もあり識別不能。
- [ ] わからない問題で長時間止まらず、利用可能な見直し機能は当日の画面案内に従う。

## 14. 出典・要確認事項

**試験情報はPDFと試験ページ、機能の仕様は公式ドキュメントを優先。** ドキュメントは2026-11-07（JST）に確認。リンク先はクラウドや製品更新により条件が異なります。コードは最小の説明例であり、実機上での実行テストは本教材作成時には行っていません。専用演習環境・権限・対応Runtimeで検証してください。

要確認一覧：現行配点の不一致／日本語PDF自身の更新日・版番号／日本語ページの90分記述／切替日の時刻・地域別適用／11/20以降の日本語試験再提供／予約時の最新細則／各機能のクラウド・Runtime・提供状態。

## 付録A. 11/20以降の新試験へ読み替える

日本語公式PDFは2026-11-20の切替を明記。英語PDFの公開・更新日は2026-10-09で、言語版・資料間の時期表記に差があります。日付境界の適用時刻、予約で選択できる版・言語を確認してください。

### A.1 新試験のドメインと配点

| 新Section | 新分野 | 新配点 | 60問換算 |
|---|---|---:|---:|
| 1 | Python / SQLコード開発 | 23% | 13.8 ≈14問 |
| 5 | コスト・性能最適化 | 15% | 9.0 ≈9問 |
| 2 | 取り込み・取得 | 12% | 7.2 ≈7問 |
| 3 | データ操作 | 12% | 7.2 ≈7問 |
| 4 | 監視・アラート | 10% | 6.0 ≈6問 |
| 8 | デバッグ・デプロイ | 10% | 6.0 ≈6問 |
| 6 | セキュリティ・コンプライアンス | 8% | 4.8 ≈5問 |
| 7 | ガバナンス | 5% | 3.0 ≈3問 |
| 9 | モデリング | 5% | 3.0 ≈3問 |

共有は取り込みへ統合。新アウトラインで明示が強まるもの：状態付きStreaming（watermark / foreachBatch / checkpoint）、serverless環境、Lakeflow ConnectのDB CDC、Iceberg、VARIANT、AI Functions、Predictive Optimization、Delta cache、ABAC、Metric Views。既存機能がすべて11/20に初登場するという意味ではありません。現行版の受験では★の現行論点を先に固めます。

### A.2 このガイドを新試験に使う手順

1. まず現行版の基礎・比較・運用判断を学ぶ。共有は新Section 2へ、監視は新Section 4へ読み替える。
2. 下表の追加・強化項目を公式の新Outlineとドキュメントで学び直す。
3. 本HTML60問は現行版の確認用。**新試験の範囲・配点を再現する模試ではなく、新範囲の追加演習が必要**です。
4. 11/20以降の日本語提供は本PDFでは確認できず、新試験は英語のみと記載。予約と新情報を再確認する。

| 新試験で追加・明示が強い領域 | 本書の土台 | 追加で読む公式根拠 |
|---|---|---|
| 状態付きStreaming、watermark、output modes、foreachBatch、checkpoint | 1.4、1.8、7.2 | [foreachBatch][FOREACH]と新Outline |
| serverless環境・性能モード・依存、SQL/UC UDF | 1.2、1.3、1.10 | [serverless][SERVERLESS]、[UDF][UDF] |
| Lakeflow ConnectのDB CDC、Iceberg | 1.7、7章 | [Connect][CONNECT]と新Outlineの対象・条件 |
| VARIANT・parse_json・variant_get | 3章の型と品質 | [VARIANT][VARIANT] |
| AI Functions / ai_query | 3章の変換・品質、5章のPII | 新Outlineと[AI関数][AIQUERY] |
| Predictive Optimization、CLUSTER BY AUTO、Delta/disk cache | 2章、9章 | [PO][PO]、[Liquid][LIQUID]、[cache][CACHE] |
| ABAC・governed tags | 5.2、8.1 | [ABAC][ABAC] |
| OpenSharing・Clean Rooms | 10章 | [共有][SHARE]、[Clean Rooms][CLEAN] |
| Lakehouse alertsとSDK監視 | 4章 | [alerts][ALERT]、[SDK][SDK] |
| Metric ViewsとMV | 1.6、9.4 | [Metric Views][METRIC] |

**新試験での取り違え防止**：watermarkは処理タイムアウトでなくイベント時刻と状態保持の意味を持つ。foreachBatchは自動で外部sinkのexactly-onceを保証しない。Metric Viewは指標定義・意味の再利用、MVは結果の事前計算が中心。ABACは通常タグだけで成立する制御ではない。VARIANTは揺れる構造を保持・抽出するための型であり、解析成功と業務品質の達成は別です。

### A.3 継続して要確認とする事項

既存の配点・時間・版番号・切替時刻・言語再提供の不一致は0章と14章のままです。追加して、現行OutlineのSection 6にある改行断片の解釈、serverless高メモリのPreview/タスク対応、Notebookデバッガーの言語・compute/Runtime条件、共有受信側の対応クライアント・機能差を、利用環境に合わせて確認してください。資料の数値や機能を別のクラウドへ無条件に一般化しません。


[JA]: https://www.databricks.com/jp/sites/default/files/2026-10/databricks-certified-data-engineer-professional-exam-guide-oct-2026-ja.pdf
[EN]: https://www.databricks.com/sites/default/files/2026-10/Databricks-Certified-Data-Engineer-Professional-Exam-Guide-9-Oct-2026.pdf
[PAGE]: https://www.databricks.com/learn/certification/data-engineer-professional
[JPAGE]: https://www.databricks.com/jp/learn/certification/data-engineer-professional
[BUNDLE]: https://docs.databricks.com/aws/en/dev-tools/bundles/
[CDC]: https://docs.databricks.com/aws/en/ldp/cdc
[FOREACH]: https://docs.databricks.com/aws/en/structured-streaming/foreach
[EXPECT]: https://docs.databricks.com/aws/en/ldp/expectations
[LIQUID]: https://docs.databricks.com/aws/en/tables/clustering
[PO]: https://docs.databricks.com/aws/en/optimizations/predictive-optimization
[CDF]: https://docs.databricks.com/aws/en/tables/features/change-data-feed
[PRIV]: https://docs.databricks.com/aws/en/data-governance/unity-catalog/access-control/privileges-reference
[ABAC]: https://docs.databricks.com/aws/en/data-governance/unity-catalog/abac/
[VARIANT]: https://docs.databricks.com/aws/en/semi-structured/variant
[SYSTEM]: https://docs.databricks.com/aws/en/admin/system-tables/
[CONNECT]: https://docs.databricks.com/aws/en/ingestion/lakeflow-connect/
[FED]: https://docs.databricks.com/aws/en/query-federation/
[METRIC]: https://docs.databricks.com/aws/en/uc-semantics/metric-views
[VACUUM]: https://docs.databricks.com/aws/en/tables/operations/vacuum

[LIBRARY]: https://docs.databricks.com/aws/en/libraries/
[SERVERLESS]: https://docs.databricks.com/aws/en/jobs/run-serverless-jobs
[UDF]: https://docs.databricks.com/aws/en/udf/
[AUTO]: https://docs.databricks.com/aws/en/ingestion/cloud-object-storage/auto-loader/
[LDP]: https://docs.databricks.com/aws/en/ldp/
[FOREACHJOB]: https://docs.databricks.com/aws/en/jobs/for-each
[TEST]: https://docs.databricks.com/aws/en/notebooks/testing
[DEBUGGER]: https://docs.databricks.com/aws/en/notebooks/debugger
[MANAGED]: https://docs.databricks.com/aws/en/tables/managed
[DV]: https://docs.databricks.com/aws/en/delta/deletion-vectors
[OPTIMIZE]: https://docs.databricks.com/aws/en/delta/optimize
[SKIPPING]: https://docs.databricks.com/aws/en/delta/data-skipping
[QUERY]: https://docs.databricks.com/aws/en/sql/user/queries/query-profile
[WINDOW]: https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-window-functions
[JOIN]: https://docs.databricks.com/aws/en/sql/language-manual/sql-ref-syntax-qry-select-join
[JOBS]: https://docs.databricks.com/aws/en/jobs/
[SPARKUI]: https://docs.databricks.com/aws/en/compute/troubleshooting/debugging-spark-ui
[CLI]: https://docs.databricks.com/aws/en/dev-tools/cli/
[EVENTLOG]: https://docs.databricks.com/aws/en/ldp/monitor-event-logs
[ALERT]: https://docs.databricks.com/aws/en/sql/user/alerts/
[NOTIFY]: https://docs.databricks.com/aws/en/jobs/notifications
[ACL]: https://docs.databricks.com/aws/en/security/auth/access-control/
[MASK]: https://docs.databricks.com/aws/en/data-governance/unity-catalog/filters-and-masks/
[CLASSIFY]: https://docs.databricks.com/aws/en/data-governance/unity-catalog/data-classification
[REPAIR]: https://docs.databricks.com/aws/en/jobs/repair-job-failures
[GIT]: https://docs.databricks.com/aws/en/repos/
[FORMAT]: https://docs.databricks.com/aws/en/ingestion/
[KAFKA]: https://docs.databricks.com/aws/en/connect/streaming/kafka
[STREAMDELTA]: https://docs.databricks.com/aws/en/delta/delta-streaming
[COMMENTS]: https://docs.databricks.com/aws/en/comments
[TAGS]: https://docs.databricks.com/aws/en/database-objects/tags
[PARTITION]: https://docs.databricks.com/aws/en/tables/partitions
[SHARE]: https://docs.databricks.com/aws/en/delta-sharing/
[AIQUERY]: https://docs.databricks.com/aws/en/sql/language-manual/functions/ai_query
[CACHE]: https://docs.databricks.com/aws/en/optimizations/disk-cache
[CLEAN]: https://docs.databricks.com/aws/en/clean-rooms/
[SDK]: https://docs.databricks.com/aws/en/dev-tools/sdk-python/
