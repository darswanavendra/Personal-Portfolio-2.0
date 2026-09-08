# AI Personal Portfolio 2.0 🚀

A polished, responsive, GitHub-ready personal portfolio built with **HTML + CSS + vanilla JavaScript**.

## ✨ Features

- Responsive mobile/tablet/desktop layout
- Dark/light mode with saved preference
- Animated hero typing effect
- Scroll reveal animations
- Animated portfolio statistics
- Skills toolkit + proficiency meters
- Project cards with category filters
- Experience/education timeline
- Achievements section
- Contact form that opens the visitor's email client
- Download-resume button
- Social/GitHub/LinkedIn links
- Floating **Portfolio AI** assistant that works offline
- Quick AI prompts
- No build tools, frameworks, npm or backend required
- GitHub Pages compatible
- SEO-friendly metadata and favicon
- Easy to customize

## 🚀 Deploy to GitHub Pages

1. Create a new GitHub repository, for example `my-portfolio`.
2. Upload **all files and folders** from this project.
3. Commit and push to the `main` branch.
4. In GitHub: **Settings → Pages**.
5. Under Build and deployment choose **Deploy from a branch**.
6. Select `main` and `/ (root)`.
7. Save. GitHub will publish your website.

## 🛠️ Customize before publishing

Open `index.html` and replace:
- `Your Name`
- Bio/about information
- Skills
- Projects and project links
- Experience and education
- Achievements
- GitHub / LinkedIn links
- `hello@example.com`

Open `script.js` and update the `portfolio` object:
```js
const portfolio={
  name:"Your Name",
  role:"AI Enthusiast",
  email:"hello@example.com",
  skills:["Python","JavaScript","AI"],
  projects:["Project One","Project Two"]
};
```

### Resume
Put your real PDF at:
`assets/resume.pdf`

If you don't have a resume yet, remove or replace the download link in `index.html`.

## 🤖 About the AI assistant

The included assistant is deliberately **API-key-free** so the site is safe to publish publicly on GitHub Pages. It uses a local intent/keyword engine and portfolio data, so it works immediately without a server.

For a true cloud LLM (OpenAI, Gemini, etc.), do **not** place a secret API key inside `script.js`. GitHub Pages is static and exposes client-side code. Instead, connect the UI to your own secure backend/serverless function and keep the API key in server-side environment variables.

## 📁 Structure

```
AI-Personal-Portfolio-2.0/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── favicon.svg
    └── resume.pdf   ← add your own
```

## 📜 License

Free to personalize and use for your portfolio. Replace the placeholder content with your own work and links.
