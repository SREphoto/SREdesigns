# Deployment Guide for SREdesigns.com

This document outlines the exact steps to launch your high-performance React portfolio on your custom domain ([sredesigns.com](https://sredesigns.com/)) using Vercel and Google Domains.

## 1. Initial Source Setup

* **Repository**: Your code is currently hosted at `https://github.com/SREphoto/SREdesigns.git`.
* **Sync**: Any changes made locally are pushed to GitHub via `git push origin main`. Vercel will listen for these changes and redeploy automatically.

## 2. Vercel Hosting Setup

1. **Login**: Go to [Vercel](https://vercel.com/) and sign in with your GitHub account (`SREphoto`).
2. **Import**: Click **"Add New" > "Project"** and select the **SREdesigns** repository.
3. **Deploy**: Use the default settings (Framework: Vite, Build: `npm run build`, Output: `dist`). Click **"Deploy"**.
4. **Verify**: Your site will be live at a temporary URL like `sredesigns.vercel.app`.

## 3. Custom Domain Configuration (Google Domains)

1. **Add Domain**: In your Vercel Project dashboard, go to **Settings > Domains**.
2. **Input Domain**: Enter `sredesigns.com` and click Add.
3. **DNS Records**: Vercel will provide specific values for your DNS. You will need:
    * **A Record**: Value `76.76.21.21` (typically).
    * **CNAME Record**: For `www.sredesigns.com`, value `cname.vercel-dns.com`.
4. **Google Domains Update**:
    * Log in to your [Google/Squarespace Domains dashboard](https://domains.squarespace.com/).
    * Go to the **DNS** tab for `sredesigns.com`.
    * Under **Custom records**, create the A and CNAME records with values from Vercel.
    * Delete any old records pointing to Squarespace's "Coming Soon" page.

## 4. Maintenance & Updates

* **Automatic Deploy**: Whenever you or I commit new code to GitHub, the live site updates in ~60 seconds.
* **SSL/HTTPS**: Vercel provides high-end SSL encryption automatically.

## 5. Portfolio Expansion

The portfolio is designed to be a "living" document. The `App.jsx` file contains the `ProjectCard` components representing all active Antigravity projects.

---
*Created on 2025-12-20*
