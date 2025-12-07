## Arthur Emig – Developer Portfolio

This is a small, modern portfolio site for **Arthur Emig**, built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**, and ready to be deployed on **Firebase Hosting**.

### Tech stack

- **Frontend**: React + TypeScript (Vite)
- **Styling**: Tailwind CSS
- **Build tool**: Vite
- **Hosting**: Firebase Hosting

---

### Getting started locally

From the project root:

```bash
pnpm install      # or: npm install  /  yarn install
pnpm run dev      # or: npm run dev
```

Then open the printed `http://localhost:5173` URL in your browser.

---

### Customizing with your real data

Most text content is intentionally easy to change:

- **Hero & introduction**: `src/components/Hero.tsx`
- **About**: `src/components/About.tsx`
- **Experience**: `src/components/Experience.tsx`
- **Projects**: `src/components/Projects.tsx`
- **Skills**: `src/components/Skills.tsx`
- **Contact + quick details**: `src/components/Contact.tsx`
- **Navbar & footer links**: `src/components/Navbar.tsx`, `src/components/Footer.tsx`

Look for comments like “Replace these placeholders” and update roles, dates, and project info to match your LinkedIn profile and GitHub.

Also be sure to:

- Replace the placeholder email address in `Contact.tsx` (`your.email@here.com`).
- Replace the placeholder GitHub URL in `Footer.tsx` (`your-github-handle`).

---

### Build for production

```bash
pnpm run build    # or: npm run build
```

The static production build will be output to the `dist` directory.

---

### Deploying to Firebase Hosting

1. **Install Firebase CLI (once per machine)**

   ```bash
   npm install -g firebase-tools
   ```

2. **Log in to Firebase**

   ```bash
   firebase login
   ```

3. **Create a Firebase project (if you don't already have one)**

   - Go to the Firebase Console.
   - Click **Add project** and follow the steps.

4. **Initialize Firebase in this folder**

   From the project root:

   ```bash
   firebase init hosting
   ```

   When prompted:

   - Select your Firebase project.
   - **Public directory**: type `dist`
   - Configure as a SPA: **Yes** (this repo already includes a `firebase.json` SPA rewrite, but saying “Yes” is fine).

5. **Build and deploy**

   ```bash
   pnpm run build       # or: npm run build
   firebase deploy
   ```

   After deploy, Firebase will print your live hosting URL (you can later attach a custom domain in the Firebase console).

---

### Notes

- This project was generated manually to run with Vite’s React + TS structure and Tailwind styling, so you can tweak any part of the stack as you like.
- If you want analytics or contact forms (e.g. with Firebase, Formspree, or a small backend), we can add that next. 


