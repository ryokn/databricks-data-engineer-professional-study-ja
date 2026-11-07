# Databricks Certified Data Engineer Professional 集中対策ガイド（日本語）

確認日：2026-11-07（JST）／対象：Associate の基礎と公式トレーニングを終えた方／受験想定：2026-11-09〜15（日本語）

> **最重要：日本語で来週受けるなら「現行試験」です。** 日本語公式PDFは、現行試験の期限を **2026-11-19**、新試験への切り替えを **2026-11-20** と明記しています。新試験の提供言語は **英語のみ** と記載されています。切り替え日の適用時刻・日本語試験のその後の再提供日は要確認。予約画面で試験名・言語・日付を必ず確認してください。本書とHTML模試は、来週の日本語受験に合わせて**現行10ドメイン**を主対象にしています。

非公式のオリジナル教材です。合格保証・実際の試験問題の再現ではありません。問題・解答・解説は別ファイル `databricks-de-professional-mock-exam.html` にのみ収録しています。

## 0. 試験概要・使い方・1週間の計画

### 0.1 一次情報の版と食い違い

| 一次情報 | 版・日付・位置づけ |
|---|---|
| [日本語公式Exam Guide（2026-10パス）][JA] | 本文に数値の版番号・更新日の明記なし（**要確認**）。現行期限11/19、新試験公開11/20を明記。日本語受験の切替判断はこれを主に参照 |
| [英語公式Exam Guide（Oct 9, 2026）][EN] | Exam Published / Exam Guide Updated とも **2026-10-09**。数値の版番号なし。新9ドメイン・英語のみ・60問を記載 |
| [英語試験ページ][PAGE] | 現行10ドメイン・59問・120分・日本語を含む4言語を記載。PDFとの切替日差を区別する |
| [日本語試験ページ][JPAGE] | 現行10ドメイン。評価欄に90分、同じページのFAQに120分と不一致。**PDF両列と英語ページが一致する120分を採用**し、予約時に再確認 |

**配点の不一致（未解決）**：現行試験について、日本語PDFは「共有・フェデレーション10%／モデリング7%」と記載し、全体が106%になります。英語・日本語の試験ページは「5%／6%」で合計100%です。本書は学習時間・模試配分のために**試験ページの100%になる表を暫定採用**し、PDFの数値を勝手に修正したことにはしません。真の現行配点は**要確認**。問題数換算は保証された出題数ではありません。

### 0.2 試験情報

| 項目 | 来週の現行試験（11/19まで） | 新試験（日本語PDFでは11/20以降） |
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

換算は「59 × 配点」、約問数は四捨五入。独立した丸めなので合計が59になるとは限りません。模試40問は最大剰余法で整数配分し、同率時は公式セクション順を優先しています。

| 本書章 | 現行公式Section | 分野 | 暫定配点 | 59問換算 | 模試 |
|---|---|---|---:|---:|---:|
| 1 | 1 | Python / SQLコード開発 | 22% | 12.98 ≈13問 | 9問 |
| 2 | 6 | コスト・性能最適化 | 13% | 7.67 ≈8問 | 5問 |
| 3 | 3 | 変換・クレンジング・品質 | 10% | 5.90 ≈6問 | 4問 |
| 4 | 5 | 監視・アラート | 10% | 5.90 ≈6問 | 4問 |
| 5 | 7 | セキュリティ・コンプライアンス | 10% | 5.90 ≈6問 | 4問 |
| 6 | 9 | デバッグ・デプロイ | 10% | 5.90 ≈6問 | 4問 |
| 7 | 2 | 取り込み・取得 | 7% | 4.13 ≈4問 | 3問 |
| 8 | 8 | ガバナンス | 7% | 4.13 ≈4問 | 3問 |
| 9 | 10 | モデリング | 6%※ | 3.54 ≈4問 | 2問 |
| 10 | 4 | 共有・フェデレーション | 5%※ | 2.95 ≈3問 | 2問 |
| 合計 | | | 100% | 59.00（丸め前） | **40問** |

※現行日本語PDFの値はモデリング7%、共有10%。上の暫定採用理由を参照。

### 0.4 新試験との差分（受験日が変わった時だけ）

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

共有は取り込みへ統合。新アウトラインで明示が強まるもの：状態付きStreaming（watermark / foreachBatch / checkpoint）、serverless環境、Lakeflow ConnectのDB CDC、Iceberg、VARIANT、AI Functions、Predictive Optimization、Delta cache、ABAC、Metric Views。既存機能がすべて11/20に初登場するという意味ではありません。来週の受験では★の現行論点を先に固めます。

### 0.5 1週間集中プラン（学習時間は提案であり公式値ではない）

毎日2〜3時間を想定。受験日未確定のため日付ではなく相対日程です。短縮版は各章の**★項目だけ**を学び、下表の短縮版を優先してください。公式トレーニング受講済み前提で基礎の読み直しは最小限です。

| 日 | 通常版 | 短縮版（約60〜90分の提案） |
|---|---|---|
| Day 1 | 0章で受験版を確認→HTML40問を未学習で解く→誤答を「要件読み落とし／知識／コード」に分類 | ★模試→誤答の章と根拠URLだけ記録 |
| Day 2 | 1章。ST/MV、AUTO CDC、制御フロー、UDF、テストの選択理由を口頭説明 | ★1.3〜1.7を中心に誤答の理由を説明 |
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

## 1. コード開発（現行22%／新23%）

### 1.1 ★PythonプロジェクトとBundles：ノートブックを「製品」にする

変換関数は `src/`、テストは `tests/`、リソース定義は `resources/`、入口は薄いノートブック／wheelタスク、環境差は `targets` に分離。**同じGitコミットを複数環境へ昇格**させる設計を選びます。prodだけ手動修正すると再現不能です。ワークスペースパスや秘密情報をコードへ固定しません。Bundleはデータそのものの複製ツールではありません。[BUNDLE]

### 1.2 外部ライブラリのインストール・依存関係

PyPI、wheel、ソースアーカイブのどこから何版を導入したか、Python／Runtime／アクセスモードとの互換性、実際に実行したタスク環境を順に確認。対話ノートブックで動いてもジョブ・pipeline・serverlessの依存が同じとは限りません。再起動や最新版への無差別アップグレードは診断ではありません。バージョンを固定し、最小のimportで切り分けます。serverlessはクラスタ設定のすべてを自由に設定できる前提にしません。

### 1.3 ★UDF：まず組み込みSQL、必要な時だけPython

| 方法 | 選択の理由 | ひっかけ |
|---|---|---|
| 組み込みSQL関数 | 最適化しやすい標準変換 | 何でもPython UDFにしない |
| SQL UDF | SQLで共通ロジックを再利用 | UDF化だけでデータアクセス権が消えるわけではない |
| Python UDF | Python固有処理が必要 | 行単位処理・実行境界のコストを考える |
| Pandas UDF | ベクトル化処理が適合 | 型、NULL、Arrow、依存関係を確認。常に最速ではない |
| UC関数 | 永続化・権限管理・共有 | ノートブックの一時関数と区別。実行環境の対応条件を確認 |

```sql
CREATE OR REPLACE FUNCTION main.study.net_amount(x DOUBLE, discount DOUBLE)
RETURNS DOUBLE
RETURN x * (1 - discount);
SELECT main.study.net_amount(100.0, 0.1);
```

### 1.4 ★Lakeflow / Auto Loaderで本番取り込み

Auto Loaderはクラウドの到着ファイルを増分検出する仕組み。チェックポイントは取り込み進捗、schemaLocationは推論スキーマの管理です。両者を「どちらか片方があれば同じ」と考えないこと。pipelineでは状態をフレームワークが管理する部分があります。ソースの再配信や業務イベントの重複は別途扱います。

```sql
-- Lakeflow pipelineのSQL。main.study.raw_eventsは専用の演習対象。
CREATE OR REFRESH STREAMING TABLE main.study.raw_events
AS SELECT * FROM STREAM read_files(
  '/Volumes/main/study/input', format => 'json'
);
```

### 1.5 ★Streaming Table / Materialized View / 通常View

| 要件 | 原則的な選択 | 注意 |
|---|---|---|
| 新規到着イベントを増分処理 | Streaming Table（ST） | 通常のappendストリームで過去更新が自然に再計算されるとは限らない |
| 入力履歴の修正も含めた集計結果を維持 | Materialized View（MV） | 更新方式はクエリやソース条件に依存。**必ず増分／必ず低コスト**とはいえない |
| 結果を物理保存せず参照時に計算 | 通常View | 高コストな処理の事前計算にはならない |

★レイテンシだけでなく「元データは追記のみか」「更新・削除をどう反映するか」「完全な結果の再計算が必要か」で決めます。

### 1.6 ★AUTO CDC / APPLY CHANGES：キーと順序と履歴

CDCは変更イベント、SCDはターゲットの履歴モデル。Type 1は現状を上書き、Type 2は履歴を保持。到着時刻ではなく**業務的な変更順序を表す列**でSEQUENCE BYを決めます。複数列でタイブレークするならSTRUCT。削除イベントやNULL更新をどう解釈するかも必要です。[CDC]

```sql
-- Lakeflow pipeline内。cdc_events(id, name, operation, seq) が存在する前提。
CREATE OR REFRESH STREAMING TABLE main.study.customer_history;
CREATE FLOW customer_cdc AS AUTO CDC INTO main.study.customer_history
FROM STREAM(main.study.cdc_events)
KEYS (id)
APPLY AS DELETE WHEN operation = 'DELETE'
SEQUENCE BY seq
COLUMNS * EXCEPT (operation)
STORED AS SCD TYPE 2;
```

Pythonでは `stored_as_scd_type=2` のように指定。CDC順序処理を毎バッチの単純MERGEだけで置換すると、遅延到着・同一キー複数イベント・履歴処理の責務が自前になります。CDF（変更の公開）とAUTO CDC（変更を適用）は別機能です。

### 1.7 ★Lakeflow Jobs：UI / API / CLI、If/Else、For Each、計算資源

- 制御依存とデータ依存を整理。If/Elseの分岐先は条件タスクの結果に依存させる。
- For Eachでパラメーター配列を反復する。並列化しても共有ターゲットへの競合・外部サービス上限がなくなるわけではない。
- 同じ処理を再試行しても結果が壊れない**冪等性**を作る。副作用が冪等でなければ自動再試行を盲目的に有効化しない。
- 高メモリ要件はメモリ、スキューやshuffleは実行計画を確認。単純な巨大クラスタ化は根本解決でない。
- UIだけで作って終わりにせずAPI/CLIによるジョブ定義・実行状態取得も対応づける。秘密情報はコードに埋め込まない。

### 1.8 ★単体／統合テスト・DataFrame.transform

単体テストは小さな固定入力と期待結果で変換関数を検証。統合テストは権限・テーブルI/O・依存タスクを含めて検証します。行数一致だけでは値・型の誤りを検出できません。順序を保証しないDataFrameの表示順だけに依存するテストは避けます。

```python
from pyspark.testing.utils import assertDataFrameEqual, assertSchemaEqual

def keep_valid(df):
    return df.filter('id IS NOT NULL AND amount >= 0')

actual = input_df.transform(keep_valid)
assertDataFrameEqual(actual, expected_df)
assertSchemaEqual(actual.schema, expected_df.schema)
```

### 1.9 状態付きStreaming（新試験で明示、現行理解の補助）

watermarkは処理タイムアウトではなくイベント時刻ベースの遅延と状態保持の管理。checkpointはオフセット・状態・コミット等の復旧情報。クエリごとに永続的で独立した場所を使います。

| 概念 | 誤解しない点 |
|---|---|
| append / update / complete | 「新規行／更新された結果／全結果」。利用可否は演算・sinkと整合させる |
| watermark | しきい値以内の遅延を守る保証と、それを超えた遅延の挙動を区別。正確な破棄時点を断定しない |
| foreachBatch | **デフォルトat-least-once**。外部sinkにはbatchId等の冪等制御が必要 |
| exactly-once | ソース・状態・sink全体の条件が必要。checkpointだけで外部APIの二重送信を防げない |

根拠：[FOREACH]。新ガイドの「exactly-once状態復旧」と、任意の外部sinkのend-to-end保証を混同しないでください。

## 2. コスト・性能最適化（現行13%／新15%）

### 2.1 ★UC managed tablesが減らす運用

管理対象テーブルはデータライフサイクルと最適化をプラットフォームと統合しやすい。外部テーブルは外部保存先の運用責務を持ちます。管理対象だから権限・課金・リカバリ設計が不要ではありません。新ガイドで明示されるPredictive OptimizationはUC管理対象テーブルの保守を自動化します。対応形式・計算資源・有効化条件を公式で確認し、「外部テーブルにも必ず適用」としません。[PO]

### 2.2 ★最適化手法を症状から選ぶ

| 症状・要件 | 主な候補 | 違う目的のもの |
|---|---|---|
| 小さなファイルが多く読み取りが非効率 | OPTIMIZEによるcompaction | VACUUMは小ファイル結合ではない |
| フィルタ時に不要ファイルを読み過ぎる | 統計・データスキッピング・適切なクラスタリング | クラスタのCPU追加だけで不要I/Oは消えない |
| 頻繁な行削除・更新による書き換え負担 | Deletion vectors | 即座の物理消去を保証しない |
| 多様で変化する検索列に対応 | Liquid Clustering、条件が合えばCLUSTER BY AUTO | 高カーディナリティ列の細かすぎるpartitioningを避ける |
| 変更分だけ下流へ伝搬 | CDF | OPTIMIZEだけでは更新・削除イベントは得られない |

Liquid Clusteringは従来のpartitioning/ZORDERと同時に重ねるものではありません。同一テーブルでの互換性と移行条件を確認。キー変更後に既存全データが一瞬ですべて再配置されるという理解も誤りです。[LIQUID]

### 2.3 ★Data skipping / pruning / Query Profile

「読み取ったファイル・バイトが多い」→フィルタと統計・データ配置。「特定taskだけ極端に遅い」→キー分布・スキュー。「shuffleやspillが大きい」→join/集約・データ量・メモリ。「小さい表とのjoin」→broadcast候補だが実サイズを確認。**計測→ボトルネック特定→変更→再計測**で答えを選びます。broadcastは大きな表を無条件に配布する命令ではありません。

### 2.4 ★CDFで更新・削除を伝搬

```sql
ALTER TABLE main.study.orders
SET TBLPROPERTIES (delta.enableChangeDataFeed = true);
-- CDFを有効化した後の有効な履歴versionを指定する。
SELECT _change_type, _commit_version, order_id
FROM table_changes('main.study.orders', 12, 15);
```

`insert / delete / update_preimage / update_postimage`を解釈。集計・最新状態への適用でpreimageとpostimageを両方新規売上として足さないこと。有効化前の変更が後から全部復元できるわけではありません。CDFは保持期間の制約があり、永続の監査履歴の代替ではありません。[CDF]

### 2.5 Liquid / partition / ZORDERの比較

| 方法 | 判断の軸 | 落とし穴 |
|---|---|---|
| partition | 安定した低〜中カーディナリティ、適切なpartitionサイズ | user_id等で過度に細分化すると小ファイル問題 |
| ZORDER | 非LiquidのDeltaで複数検索列へのデータ配置 | Liquidと同時適用しない |
| Liquid Clustering | 検索パターンの変化、データ偏り、配置柔軟性 | すべての遅延が配置だけで解消するわけではない |

### 2.6 キャッシュ（新試験で明示）

disk/Delta cacheは繰り返し読むファイルのI/O、Spark cacheはDataFrameの再利用、SQL結果キャッシュはクエリ結果の再利用と目的が違います。初回読み取り・動的な外部更新・計算資源の入れ替えまで万能ではありません。まず無駄なスキャン／shuffleを減らしてから再利用を考えます。

## 3. 変換・クレンジング・品質（現行10%／新「データ操作」12%）

### 3.1 ★Window / join / aggregation

最新1件抽出は `row_number` と**決定的な同順位の解消**。`rank`では同順位が複数行残り得ます。joinはキーの一意性とNULLを先に確認。多対多join後のSUMは意図せず膨らみます。WHEREでouter join先の列を絞ると実質inner joinになるケースに注意。

```sql
SELECT * EXCEPT (rn) FROM (
  SELECT *, row_number() OVER (
    PARTITION BY customer_id ORDER BY changed_at DESC, event_id DESC
  ) AS rn
  FROM main.study.customer_events
) WHERE rn = 1;
```

集約前の行フィルタはWHERE、集約後の条件はHAVING。`count(*)` と `count(nullable_col)` はNULLに対する挙動が異なります。

### 3.2 ★不正データの隔離：パイプラインとクラシックAuto Loader

| 方法 | 違反行 | 他の正常行 | 適した要件 |
|---|---|---|---|
| EXPECT（既定の記録） | 残す・メトリクス記録 | 処理継続 | 観測してからルールを強化 |
| ON VIOLATION DROP ROW | 捨てる | 処理継続 | 品質未達行は不要 |
| ON VIOLATION FAIL UPDATE | 更新を失敗 | 対象フローの更新を止める | 不整合を公開してはいけない |
| quarantine分岐 | 不正側へ保存 | 正常側へ保存 | 後で原因分析・再処理が必要 |

```sql
CREATE OR REFRESH STREAMING TABLE main.study.valid_orders (
  CONSTRAINT positive_amount EXPECT (amount >= 0) ON VIOLATION DROP ROW
) AS SELECT * FROM STREAM(main.study.raw_orders);
```

★DROPは隔離ではありません。隔離が要件なら、同じルールから正常・不正の二つの出力を設計します。`NOT (条件)` でNULLがUNKNOWNになってどちらにも入らない事故に注意し、`coalesce(条件, false)` 等で意味を明確にします。クラシックAuto Loaderの `_rescued_data` は型不一致や未知の列等の救済情報であり、負の売上などの業務品質を自動判定する列ではありません。[EXPECT]

### 3.3 新試験追加の半構造化・AI関数（今週は後回し可）

VARIANTは揺れるJSON構造の保持とパス抽出。単なる正規表現処理に置換しない。`parse_json`の失敗と、パスがない／JSON nullの違いを確認します。[VARIANT]

```sql
WITH x AS (SELECT parse_json('{"customer":{"id":42}}') AS payload)
SELECT variant_get(payload, '$.customer.id', 'INT') AS id FROM x;
```

`ai_query`等のAI Functionsは推論呼び出し。ルールベース判定で足りるものまで使わず、機密データの送信・モデル権限・コスト・失敗処理・出力の品質検証を含めて設計します。新試験で明示された論点であり、現行範囲の拡張を勝手に断定しません。

## 4. 監視・アラート（現行10%／新10%）

### 4.1 ★System tablesと診断ツールの役割

| 確認したいもの | 最初に見るもの |
|---|---|
| 期間・ワークロード別の利用量 | `system.billing.usage`。金額換算は価格・期間等を確認 |
| 誰がどの操作をしたか | `system.access.audit`等の監査情報 |
| ジョブの実行・タスク推移 | Jobs UI/API、`system.lakeflow`の関連テーブル |
| パイプラインの品質違反・flow状態 | Pipeline event log |
| クエリ演算子の時間・スキャン・shuffle | Query Profile |
| Sparkのstage/task、スキュー、spill | Spark UI |
| import例外・driver起動失敗 | driver/cluster logsとタスク出力 |

```sql
SELECT usage_date, sku_name, SUM(usage_quantity) AS quantity
FROM system.billing.usage
GROUP BY usage_date, sku_name;
```

これは利用量であってドルではありません。単位の異なるSKUを無差別に合計して「コスト」と呼ばないこと。価格表と結合する場合はSKU・クラウド・価格有効期間・通貨等を確認。利用可能なsystem tableは権限・リージョン・提供状態に依存します。[SYSTEM]

### 4.2 ★REST API / CLI / SDKでジョブ・パイプラインを監視

ジョブ定義ID、実行ID、タスク実行を区別。UIで原因を追い、継続監視にはAPI/CLI/SDKの取得結果を使います。「APIが200だった」ことと「実行が成功した」ことは別です。runのlife-cycle、result、taskの状態を確認します。

### 4.3 ★イベントログで品質とflowを確認

品質違反が増えたなら期待条件・失敗行数・flow進捗を調べる。請求の全体傾向をイベントログだけで代替しません。複数の観測源を実行ID・時間帯で関連づけます。ログを読む権限と元データを読む権限を混同しないこと。

### 4.4 ★SQL AlertsとJob通知

SQL結果のしきい値評価と、ジョブ失敗・所要時間の通知は役割が違います。品質ゼロ件も異常か、遅延更新のテーブルを読んでいないか、実行頻度と評価窓が合うかを設計。SQLが正しいだけでは通知先・評価スケジュールまで正しいとはいえません。新ガイドはLakehouse alertsを広い監視領域として記載します。

## 5. セキュリティ・コンプライアンス（現行10%／新8%）

### 5.1 ★最小権限：UCとワークスペースACL

ジョブの実行権限、ノートブックの編集権限、データのSELECT権限、クラウド認証は別です。個人でなく適切なグループ／サービスプリンシパルに必要な範囲だけ付与します。

```sql
GRANT USE CATALOG ON CATALOG main TO `study_analysts`;
GRANT USE SCHEMA ON SCHEMA main.study TO `study_analysts`;
GRANT SELECT ON TABLE main.study.orders TO `study_analysts`;
```

★テーブルにSELECTがあっても親のUSE CATALOG / USE SCHEMAが必要。逆にUSEだけでは行データを読めません。必要以上にcatalog全体へSELECTを広げるのは最小権限ではありません。[PRIV]

### 5.2 ★行フィルタ・列マスク／ABAC

| 要件 | 制御 |
|---|---|
| 部門ごとに見える行を変える | 行フィルタ／適切な動的ビュー |
| 同じ行のPII列だけ隠す | 列マスク |
| 多数のテーブルにタグ基準で統一ポリシー | ABAC（新アウトラインで明示） |

マスクは利用時の表示制御であり、保存ファイルの物理消去ではありません。マスクされたSELECT結果だけで生データへの別経路の権限が安全とは判断しません。ABACは通常のコメント・タグを付けるだけで成立するわけではなく、governed tagsとポリシーを設計します。[ABAC]

### 5.3 ★匿名化と仮名化を区別

ハッシュ化：同じ入力が同じ値になるなら結合・追跡はできるが、辞書攻撃や再識別リスクを残す。トークン化：置換と対応管理。抑制：値・列を出さない。一般化：年齢を範囲、位置を粗くするなど。**ハッシュ化＝不可逆だから必ず法的匿名化**とは答えません。用途と再識別可能性で判断します。

### 5.4 ★PII検出とバッチ・Streamingの制御

検出は所在を発見する工程、マスキングは利用制御、削除は保持制御。検出しただけでは保護は完了しません。bronze→silver→gold、隔離テーブル、再処理入力、ログにPIIが漏れないかを一貫して追います。取り込み経路が複数でも同じポリシーを適用する設計が必要です。

### 5.5 ★消去要求：DELETEで終わらない

1. 対象者・キーとbronze/silver/gold/派生物の範囲を特定。
2. 論理削除を実施し、CDCや再取り込みによる復活を防ぐ。
3. 旧ファイル・履歴・削除ベクター・バックアップ・外部共有先を保持ルールと照合。
4. 必要な物理再書き込み（対応テーブルではREORG等）と、安全な保持期間後のVACUUMを検討。
5. 監査証跡・実施結果と、他の実行中読み取りへの影響を確認。

★DELETEは論理的非表示、VACUUMは不要な古いデータファイルの削除。**ゼロ時間VACUUMを無条件に選ばない**。復旧・長時間実行・ストリームの遅延読取りを壊し得ます。法令の期限とプラットフォームの保持・複製条件を担当者と確認します。[VACUUM]

## 6. デバッグ・デプロイ（現行10%／新10%）

### 6.1 ★診断情報の選択

OOMならdriverかexecutorか、スキューか、collectしすぎか、データ量増加かを切り分け。ModuleNotFoundErrorならインストール先・タスク環境・importパス。権限エラーなら実行主体とUC／ワークスペース／クラウド側を分けます。遅延は待ち時間・起動・実処理・外部I/Oに分解。データ品質の原因にはPipeline event logと入力の変化を確認します。

### 6.2 ★repair run / パラメーターのoverride

上流が成功・下流だけ失敗した時、原因を直して失敗タスクと必要な依存タスクをrepairする方法を検討。毎回全タスクを再実行して副作用を増やさない。パラメーター変更は再処理範囲を明確にし、先に成功した出力との整合を確認。repairはコードのバグを自動修正しません。

### 6.3 ★Bundleを使った再現可能なデプロイ

```yaml
# 構造の最小例。実際のリソース定義はresources/に配置。
bundle:
  name: dep-study
include:
  - resources/*.yml
targets:
  dev:
    mode: development
    default: true
  prod:
    mode: production
```

```bash
# 例示のみ。本教材はDatabricks環境へのデプロイを実行しない。
databricks bundle validate -t dev
databricks bundle deploy -t dev
databricks bundle run -t dev <resource-key>
```

validateは設定の妥当性、deployはリソース配備、runは実行。validateだけでは業務データの正しさは保証しません。CIはテストと検証、CDは承認と環境の分離を含める。バンドルのdeploy stateを異なるプロジェクトで共有しない設計にします。[BUNDLE]

### 6.4 ★Git folders（旧Repos）をCI/CDへつなぐ

レビュー済みのコミット／タグとデプロイ成果物を追跡。Git pullだけでジョブ設定やライブラリがすべて一致したと考えない。devとprodはパラメーター・データ先・権限を分離し、同じソースを昇格します。prodのノートブックをその場で修正してGitへ戻さない運用を避けます。

## 7. 取り込み・取得（現行7%／新12%）

### 7.1 ★ソースとフォーマットから入口を決める

| ソース／目的 | 入口の候補 | 注意 |
|---|---|---|
| クラウドストレージへの継続的ファイル到着 | Auto Loader | フォーマット・スキーマ・救済列・到着検出を設計 |
| Kafka等のイベントバス | 対応Structured Streamingコネクタ | オフセットとイベント重複、認証を区別 |
| 小規模な既存ファイルの一括処理 | バッチ読取り等 | わざわざ常時ストリーム化しない |
| RDBMSの更新・削除まで取り込む | 新アウトラインはLakeflow Connectのmanaged CDCを明示 | JDBC全件上書きはCDCと同じではない |

現行の列挙はDelta / Parquet / ORC / AVRO / JSON / CSV / XML / Text / Binary。**列挙されるすべてが同じAuto Loaderオプションで読めるという意味ではありません**。必要なコネクタと読取り方式を選びます。新ガイドはIcebergを明示。クラウド別の対応差をAWSの例から全環境へ一般化しません。[CONNECT]

### 7.2 ★Deltaの追記パイプラインと更新の違い

追記専用の上流から増分読取りする設計と、UPDATE/DELETEがある上流の読取りを分ける。変更コミットをスキップすれば下流も正しく更新される、とは限りません。下流への変更反映が要件ならCDFやCDCを検討。チェックポイント削除による全再取込みは重複と再処理の影響を伴います。

### 7.3 スキーマと救済データ

推論スキーマの保存、意図的な型の指定、スキーマ進化、想定外データの救済を区別。新規列の到着と、既存列が不正な値になることは別の故障です。`_rescued_data`をそのまま破棄する前に監視・隔離と再処理の要件を確認します。

## 8. ガバナンス（現行7%／新5%）

### 8.1 ★コメント・タグ・データ発見性

コメントは意味・所有者・更新頻度・制約の説明、タグは分類や検索の一貫した属性。タグを付けただけでSELECTが許可／拒否されるわけではありません。governed tagとABACポリシーが結びつくケースを区別。個人情報そのものをタグやコメントに記録しないこと。

```sql
COMMENT ON TABLE main.study.orders IS '注文単位の検証済みデータ。個人情報列は別途制御。';
```

### 8.2 ★権限継承：親から将来の子へ、ただし万能でない

catalog/schemaへの適用可能な権限は配下の現在・将来の対象へ継承されます。テーブルだけのSELECT付与が親のUSEまで自動付与するわけではありません。親のSELECTを持つなら子の個別GRANTを外すだけでアクセスを止められると考えないこと。どこから権限が来たか、グループ所属も調べます。

★所有権・MANAGE・ALL PRIVILEGES・実際のデータ操作権限を同一視しない。権限によって継承可能な対象が違うためリファレンスを確認。[PRIV]

## 9. モデリング（現行ページ6%／現行日本語PDF7%：要確認、新5%）

### 9.1 ★粒度とデータ配置

先に「1行は何か」を決める。注文ヘッダーと明細を無条件にjoinして注文合計をSUMすると明細数だけ重複します。粒度が違うfact同士は必要な粒度に集約してから結合を検討。物理レイアウトは検索・joinのアクセスパターンとデータサイズで決め、業務の正しい粒度とは別の層として判断します。小ファイルはcompaction、高カーディナリティを細かく分け過ぎない設計。[LIQUID]

### 9.2 ★ディメンショナルモデル

factは測定イベント、dimensionは分析軸。代理キー・業務キー・履歴の有効期間を区別。Type 1更新で過去時点の属性を失いたくないならType 2を検討。Type 2のdimensionをfactへ結合する時は業務キーだけでなく有効期間や該当する代理キーを扱います。

新試験：**Metric Viewは指標定義の統一とガバナンス、MVは結果の事前計算**が主目的。Metric Viewだけを作って全クエリ結果が自動で物理保存されると考えない。[METRIC]

## 10. 共有・フェデレーション（現行ページ5%／現行日本語PDF10%：要確認、新では取り込みへ統合）

### 10.1 ★D2D / Open Sharing（D2O）

Databricks間の共有と、Databricksを使わない受信者へのオープンプロトコル経由の共有を区別。D2Dは受信側metastore等の識別、D2Oは受信側の利用方法・認証・資格情報の保護を確認します。どちらも全データを公開バケットに置く方法ではありません。

### 10.2 ★Federationと共有の比較

| 要件 | 主に検討する仕組み | コスト・制約 |
|---|---|---|
| 外部DBを大規模コピーせず問い合わせ | Lakehouse Federation | ソース負荷、pushdown、ネットワーク、対応システムと権限 |
| 管理下データを別組織／プラットフォームへ共有 | Delta Sharing / OpenSharing | 受信者の認証・アクセス制御・対応機能 |
| データを取り込みローカルに保持して継続加工 | ingest / CDC | 保存・鮮度・複製の責務 |
| 生データを直接開示せず共同分析 | Clean Rooms（新アウトラインで明示） | 許可された処理・出力・協業ポリシーの設計 |

Federationはconnection（接続資格情報等）とforeign catalog（外部オブジェクトのUC表現）を区別。UC権限があっても外部側の認証・ネットワークが不要にはなりません。ソースDBの負荷を完全にゼロにする機能でもありません。[FED]

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

新アウトライン向けのサンプルなので、来週の現行試験に全テーマが同じ比重で出るという意味ではありません。

## 12. 模擬試験（HTML版）

[`databricks-de-professional-mock-exam.html`](databricks-de-professional-mock-exam.html) をブラウザで開いてください。**現行10ドメイン向けオリジナル40問**、答え合わせ・選択肢別の解説・根拠リンク・ドメイン別スコア・復元・進捗JSON出力に対応。模試配分は0.3の暫定配点に従います。

### 追加の演習問題（外部リソース）

リンクは2026-11-07（JST）に実ページ到達を確認。第三者の問題は本パックへコピー・翻訳転載していません。実際の品質・著作権由来・合格効果まで保証するものではありません。

**公式（最優先）**
1. [日本語公式Exam Guide][JA]：受験日別の範囲と公式サンプル。丸暗記でなく判断理由を説明。
2. [英語公式Exam Guide][EN]：新旧語の対応とサンプルの根拠。ただし来週の日本語受験は現行版が対象。
3. [公式試験ページ][PAGE]／[日本語ページ][JPAGE]：登録・Academyへの入口。受講済みの演習ラボを再利用し、失敗ケースを一つ追加する。
4. [公式AI Prep Guide](https://www.databricks.com/sites/default/files/2026-06/ai-prep-guide-any-databricks-certification.pdf)：最新の公式範囲を根拠に、未知のシナリオと実機確認のチェックリストを作る。AI回答のコマンド・権限は公式で検証。

**日本語の追加候補**
- [Yota Arahata「【日本語試験問題集】Databricks認定データエンジニア-プロフェッショナル-」](https://www.udemy.com/course/databricks-data-engineer-professional-jp-ay/)：日本語の練習問題と解説。商品ページは2026年10月更新を表示。購入前に**現行10ドメインへの適合**とサンプル説明を確認。新しい名称だけで最新版対応と判断しない。
- [立石のぞみ「本番形式 模擬試験 全6回」](https://www.udemy.com/course/databricks-data-engineer-professional-jp-nt/)：ページは**2026-10-09の新9ドメイン対応**を明示。来週の日本語現行試験とは範囲と配点が違うため、今週の主教材にせず共通テーマの補強候補。ページの「新試験に日本語なし」「70%」を、現行日本語の提供状況や公式合格点に読み替えない。

**英語の追加候補**
- [Alex Cole: Comprehensive Resource Guide](https://www.alexcole.net/databricks-certified-data-engineer-professional-comprehensive-resource-guide/)：試験目標から公式ドキュメントとデモへ辿れる補助資料。2026-10-09更新、新アウトライン中心。問題集ではなくハンズオンの索引として利用。
- [CertLake](https://www.certlake.com/)：英語の練習・診断候補。説明ページでProfessional向け練習と根拠リンクを案内。無料／有料の現行条件と現行試験への対応は利用前に確認。問題の中身を本パックへ再配布しない。

**使い方**：今週は教材を増やし過ぎず、誤答分野を一つ選び、未見の10〜15問または同等の小演習→根拠の確認→なぜ他の選択肢が違うか説明、のサイクルを回します。英語問題は元サイト上で理解を補助し、独自の日本語メモは論点だけにします。

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
