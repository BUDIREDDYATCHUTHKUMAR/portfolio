# Budireddy Atchuth Kumar Portfolio

Full-stack developer portfolio built with:

- React + Vite frontend
- Express backend
- API-driven portfolio data

## Project Path

Workspace root:

```text
C:\Users\Atchuth\portfolio
```

## Important Files

Frontend:

- `frontend/src/pages/OverviewPage.jsx`
- `frontend/src/pages/ProjectsPage.jsx`
- `frontend/src/styles.css`
- `frontend/src/components/ProfilePhotoCard.jsx`

Backend:

- `backend/src/data/portfolio.js`
- `backend/src/server.js`
- `backend/src/services/github.js`

## Folder Structure

```text
portfolio/
  backend/
    scripts/
      build.mjs
    src/
      data/
        portfolio.js
      services/
        github.js
      server.js
  frontend/
    public/
      profile-photo.jpg
    src/
      components/
      hooks/
      lib/
      pages/
      App.jsx
      main.jsx
      styles.css
    index.html
    vite.config.js
  package.json
  README.md
```

## Add Your Photo

Put your photo here:

```text
frontend/public/profile-photo.jpg
```

Use the exact name:

```text
profile-photo.jpg
```

If the file is missing, the portfolio shows initials instead of the image.

## Run Locally

Open PowerShell in:

```text
C:\Users\Atchuth\portfolio
```

Install dependencies once:

```powershell
npm.cmd install
```

Run frontend and backend together:

```powershell
npm.cmd run dev
```

Open:

```text
http://localhost:5173
```

## Run Production Build

Build the app:

```powershell
npm.cmd run build
```

Start the production server:

```powershell
$env:NODE_ENV="production"
$env:PORT="4001"
node backend/src/server.js
```

Open:

```text
http://localhost:4001
```

## Update Portfolio Content

Update your:

- email
- summary
- skills
- projects
- links

in:

```text
backend/src/data/portfolio.js
```

Update layout in:

```text
frontend/src/pages/OverviewPage.jsx
```

Update styling in:

```text
frontend/src/styles.css
```

## Free Deployment

Recommended free setup: deploy the full app as one Render Web Service.

This project includes `render.yaml`, so Render can detect the build and start commands automatically.

### Before Deploying

Make sure your latest code is pushed to GitHub.

```powershell
git add .
git commit -m "Prepare portfolio for free deployment"
git push
```

### Deploy on Render

1. Go to `https://render.com`.
2. Sign in with GitHub.
3. Click `New +`.
4. Choose `Blueprint`.
5. Select this portfolio repository.
6. Render will read `render.yaml`.
7. Click `Apply`.

Render will run:

```text
npm install && npm run build
```

Then it will start:

```text
npm run start
```

After deployment, Render gives you a public URL like:

```text
https://atchuth-portfolio.onrender.com
```

Free Render services can sleep after inactivity, so the first request may take a little longer.

## Other Deployment Options

### Render

1. Create a new Web Service from this repository.
2. Build command:

```text
npm install && npm run build
```

3. Start command:

```text
npm run start
```

4. Set `NODE_VERSION=20`
5. Optionally set `GITHUB_TOKEN` to increase GitHub API limits

### Vercel + Render

Frontend on Vercel:

- Install command: `npm install`
- Build command: `npm run build --workspace frontend`
- Output directory: `frontend/dist`

Backend on Render:

- Build command: `npm install && npm run build --workspace backend`
- Start command: `npm run start --workspace backend`

Set:

```text
VITE_API_BASE_URL=<your-render-backend-url>
```

## Environment Variables

Backend:

- `PORT=4000`
- `GITHUB_TOKEN=optional_personal_access_token`
- `GITHUB_USERNAME=BUDIREDDYATCHUTHKUMAR`

Frontend:

- `VITE_API_BASE_URL=http://localhost:4000`
