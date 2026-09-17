# DevOps Training Website

A simple static website used to practice CI/CD. Code is stored in GitHub, tested and packaged by GitHub Actions, then deployed to an AWS S3 bucket. The site can later be served through Amazon CloudFront.

## Technologies used

- HTML, CSS, and vanilla JavaScript
- GitHub Actions
- AWS S3
- Amazon CloudFront (optional, configured later in AWS)

## Project structure

```text
devops-cicd-website/
├── .github/workflows/deploy.yml
├── .gitignore
├── README.md
├── index.html
├── style.css
└── script.js
```

## How GitHub Actions works

The workflow file is `.github/workflows/deploy.yml`. It runs automatically on every push to the `main` branch.

Pipeline:

```text
Push to main
    ↓
Test
    ↓
Build/Package
    ↓
Deploy to S3
```

Jobs:

1. **test** – Checks that `index.html`, `style.css`, and `script.js` exist, and that `index.html` contains `DevOps Training`.
2. **build** – Copies the three website files into a package and uploads it as a GitHub Actions artifact.
3. **deploy** – Downloads the artifact, configures AWS credentials from GitHub Secrets, and syncs only the website files to S3.

## Required GitHub Secrets

Add these secrets in GitHub: **Settings → Secrets and variables → Actions**.

| Secret | Purpose |
| --- | --- |
| `AWS_ACCESS_KEY_ID` | AWS access key |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key |
| `AWS_REGION` | AWS region of the S3 bucket |
| `S3_BUCKET` | S3 bucket name |

Do not put credentials in the repository.

## Deployment flow

1. Push changes to `main`.
2. GitHub Actions runs the test job.
3. If tests pass, the website files are packaged as an artifact.
4. The deploy job uploads `index.html`, `style.css`, and `script.js` to the S3 bucket.
5. Updating the version text (for example, from `1.0` to `2.0`) and pushing to `main` deploys the new version automatically.
