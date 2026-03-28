# Gazi Musa Al Sathman — Portfolio

Personal academic/research portfolio hosted on GitHub Pages.

## Live site
`https://SathmanGazi.github.io`

---

## How to update content

**Everything is in `data.js`. You never need to touch `index.html`.**

Open `data.js` and edit the fields directly:

- Update `tagline`, `title`, `location` at the top
- Add a new project → add an object to the `projects` array
- Add a new job → add an object to the `experience` array
- Update research interests → edit the `research_interests` array

Then commit and push. GitHub Pages rebuilds automatically within ~60 seconds.

---

## How to deploy (first time)

1. Go to your GitHub repo: `github.com/SathmanGazi`
2. Create a new repo named exactly: `SathmanGazi.github.io`
3. Upload all files from this folder (drag and drop in GitHub UI, or use git)
4. Go to repo Settings → Pages → Source → Deploy from branch → `main` → `/root`
5. Save. Your site will be live at `https://SathmanGazi.github.io` within 2 minutes.

---

## How to add your CV PDF

1. Drop your CV PDF file into the `/assets/` folder
2. Name it exactly `Gazi_Academic_CV.pdf`
3. Commit and push

The CV download button will work automatically.

---

## File structure

```
SathmanGazi.github.io/
├── index.html        ← never edit this
├── data.js           ← edit ALL content here
├── README.md
└── assets/
    └── Gazi_Academic_CV.pdf   ← drop your CV here
```

---

## To add a project link

In `data.js`, find your project in the `projects` array and add the URL to the `link` field:

```js
{
  name: "My Project",
  link: "https://github.com/SathmanGazi/my-project"
}
```

Leave `link: ""` if you don't want a button shown.
