# web-omw

> A simple CLI tool to generate ready-to-use web project templates (HTML + CSS + JS) in seconds.

## What is this?

`web-omw` is a tiny, no-frills scaffolding tool for developers, indie hackers, or anyone who wants to start building a website fast.  
Run one command — pick a template — and you get a fully-structured project folder with HTML, CSS, and JS, ready to code.

## ✨ Features

- Create a brand-new project with one command  
- Choose between two starter templates:
  - **Basic** — Clean minimal HTML + CSS + JS structure  
  - **Landing** — Simple, modern landing page scaffold (hero, about, features, contact & footer)  
- Templates use external image URLs (no bulky assets) — keeps projects light and shareable  
- Zero opinionated frameworks — you remain fully in control  
- Ideal for quick prototypes, landing pages, small sites, or learning  

## 📦 Installation & Usage

You don’t need to install globally. Just run:

```bash
npx web-omw
````

Then follow the prompts:

1. Enter your project name (e.g. `my-website`)
2. Select which template you want — `basic` or `landing`
3. Your project folder will be generated instantly

Then navigate into your project:

```bash
cd your-project-name
```

Start coding right away — open `index.html` in your browser or begin editing CSS/JS.

## 🧩 Template Details

### 🔹 Basic Template

Includes:

* `index.html` — minimal HTML structure
* `style.css` — default styles: resets, typography, basic layout
* `app.js` — placeholder JS file (empty)

Perfect for quick prototypes, simple static pages, or when you want total control.

### 🔹 Landing Template

Built for a clean, modern landing page:

* Header / navigation
* Full-screen hero section
* About section (text + image)
* Features section (cards grid)
* Contact section (form + contact info)
* Footer

Uses external image URLs for backgrounds and cards — so no need to bundle local assets.
Simply clone and edit as needed.

## ⚠️ Things to know

* Images used in the Landing template are fetched from external URLs — you’ll need an internet connection to see them properly.
* The generated folder preserves filenames exactly — if you rename CSS/JS files, update `index.html` accordingly.
* This tool is not a build pipeline — no bundling, no frameworks, no build steps.
* It’s a basic starter scaffolding tool, meant to get you coding quickly.

## 📝 License

This project is released under the **MIT License**.
You’re free to use it, modify it, and build anything you like.

---

