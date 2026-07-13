# ImranTheExploitHunter

Official portfolio website of **Imran Chowdhury (ImranTheExploitHunter)** — Cyber
Security Researcher specializing in Red Team Operations, Threat Intelligence,
Malware Analysis, Web/Network/Cloud Security and Digital Forensics.

## 📁 Project structure

```
ImranTheExploitHunter/
├── index.html          → main page (all sections: About, Skills, Certifications,
│                          Research Areas, Projects, Blogs, Timeline, Statistics,
│                          Contact, FAQ)
├── style.css            → all site styling
├── script.js            → scroll reveal, FAQ accordion
├── robots.txt            → crawler rules
├── sitemap.xml            → sitemap for search engines
├── manifest.json          → PWA / web app manifest
├── favicon.ico            → browser tab icon
├── Logo.jpg               → hero logo (placeholder — replace with your real logo)
├── assets/
│   ├── images/
│   │   ├── og-image.jpg      → social share preview image (placeholder)
│   │   └── certs/            → certification badge images (placeholders)
│   │       ├── oscp.png
│   │       ├── cdrp.png
│   │       ├── ecppt.png
│   │       ├── ewptx.png
│   │       ├── emapt.png
│   │       ├── ejpt.png
│   │       └── pt1.png
│   ├── icons/
│   │   ├── favicon.svg
│   │   ├── apple-touch-icon.png
│   │   ├── icon-192.png
│   │   └── icon-512.png
│   └── fonts/            → empty — reserved for self-hosted fonts (site
│                            currently loads Orbitron & Rajdhani from Google Fonts)
└── README.md
```

## 🔗 Certification verification links

In `index.html`, each certification card has a `<a class="verifyLink" href="#">`
— replace the `#` with your real verification URL for each certificate
(OffSec, INE/eLearnSecurity, etc.).

## ➕ Adding a new certification later

Copy one `.certCard` block in the Certifications section of `index.html`,
paste it above the "More Coming" placeholder card, then update the image
path, verify link, and title/description. No CSS changes needed — sizing
is automatic.

## 🚀 Deploying (e.g. GitHub Pages)

1. Push this folder to a GitHub repository.
2. Enable GitHub Pages (Settings → Pages → deploy from `main` branch, root).
3. Update all `https://imrantheexploithunter.org` references in `index.html`,
   `robots.txt`, and `sitemap.xml` if your final domain differs.
4. Replace the placeholder assets listed above.

## 🛠 Tech

Plain HTML/CSS/JS — no build step, no dependencies. Fonts via Google Fonts
CDN; live GitHub stats badge via github-readme-stats.
