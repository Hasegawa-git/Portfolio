# Portfolio

個人で開発したアプリケーションとインフラ構成をまとめたポートフォリオリポジトリです。  
React + Vite で開発したアプリを、Terraform + AWS で自動デプロイする仕組みを構築しています。  
GitHub Actions を用いた CI/CD も導入し、コードの更新からデプロイまでを自動化しています。

**今後も続々と開発予定です。**

## ✅ アプリ一覧

### [QuizHub](https://quiz.takahiro-hasegawa.net)
- Portfolio内のリポジトリ: [Portfolio/apps/QuizHub](https://github.com/Hasegawa-git/Portfolio/tree/main/apps/QuizHub)
- 1〜2分で完走できるクイズアプリ
- **スタック**: React, Vite, Tailwind CSS
- **特徴**:
  - 8ジャンル × 各3問 = ライトに楽しめる構成
  - 回答直後に即フィードバック
  - ベストスコア更新を狙える仕組み

### [MovieNavi](https://movie.takahiro-hasegawa.net)
- Portfolio内のリポジトリ: [Portfolio/apps/Movie](https://github.com/Hasegawa-git/Portfolio/tree/main/apps/MovieNavi)
- 見たい映画を素早く検索できるアプリ
- **スタック**: React, Vite, Tailwind CSS
- **特徴**:
  - TMDB API から映画データを取得
  - 検索バーで映画を素早く絞り込み
  - レスポンシブデザイン対応


## ✅ インフラ構成

- **AWS**
  - S3 (フロントエンドホスティング)
  - CloudFront (CDN, HTTPS対応, OAC導入)
  - Route53 (独自ドメイン管理)
  - ACM (SSL証明書)
- **Terraform**
  - モジュール化構成
    - `base` (Route53, ACM)
    - `frontend` (S3 + CloudFront + Route53レコード)
    - `backend` (将来のAPI用, 現在はプレースホルダー)


## ✅ CI/CD

- **GitHub Actions**
  - `deploy-infra.yml`: Terraform を用いたインフラ自動デプロイ
  - `deploy-app.yml`: アプリのビルド & S3 デプロイ
- **フロー**
  - `infra/` に変更があると Terraform Apply が自動実行
  - `apps/` に変更があると Vite Build → S3 Sync が自動実行


