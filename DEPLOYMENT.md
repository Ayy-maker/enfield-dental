# 🚀 Deployment Guide - Enfield Medical & Dental

## GitHub Setup

### 1. Create GitHub Repository

Go to [GitHub](https://github.com/new) and create a new repository:

**Repository Settings:**
- **Name:** `enfield`
- **Description:** Premium dental website for Enfield Medical & Dental
- **Visibility:** Public or Private (your choice)
- **DO NOT** initialize with README (we already have one)

### 2. Push Code to GitHub

Run these commands in your terminal:

```bash
cd /Users/ayush/projects/Enfield

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/enfield.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Vercel Deployment (Recommended)

### Why Vercel?
- ✅ Made by Next.js creators - perfect optimization
- ✅ Free tier with great limits
- ✅ Automatic deployments on git push
- ✅ Custom domain support
- ✅ Edge functions built-in

### Steps:

1. **Sign up at [Vercel](https://vercel.com)**
   - Use GitHub account for easy integration

2. **Import Project**
   - Click "Add New Project"
   - Select your `enfield` repository
   - Click "Import"

3. **Configure Build Settings**
   Vercel auto-detects Next.js, but verify:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build`
   - **Output Directory:** `.next`
   - **Install Command:** `npm install`

4. **Add Environment Variables**
   Click "Environment Variables" and add:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   CONTACT_EMAIL=info@enfieldmedical.com.au
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Get your live URL: `https://enfield-xxx.vercel.app`

6. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add `enfieldmedical.com.au` or `www.enfieldmedical.com.au`
   - Follow DNS configuration instructions

---

## Alternative: Netlify Deployment

### Steps:

1. **Sign up at [Netlify](https://netlify.com)**

2. **New Site from Git**
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub → Select `enfield` repository

3. **Build Settings**
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Base directory:** (leave empty)

4. **Environment Variables**
   Site settings → Environment variables → Add:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-gmail-app-password
   CONTACT_EMAIL=info@enfieldmedical.com.au
   ```

5. **Deploy**

---

## Email Configuration

### Gmail Setup (for contact forms):

1. **Enable 2-Factor Authentication**
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Turn on 2-Step Verification

2. **Generate App Password**
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Other (Custom name)"
   - Name it "Enfield Website"
   - Copy the 16-character password

3. **Add to Environment Variables**
   Use this as `EMAIL_PASS` in your deployment platform

### Alternative Email Services:

**SendGrid** (Free tier: 100 emails/day)
- Sign up at [sendgrid.com](https://sendgrid.com)
- Get API key
- Update API routes to use SendGrid SDK

**Resend** (Modern, developer-friendly)
- Sign up at [resend.com](https://resend.com)
- Very generous free tier
- Better deliverability than Gmail

---

## Custom Domain Configuration

### DNS Settings for `enfieldmedical.com.au`:

**For Vercel:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.19
```

**For Netlify:**
```
Type: CNAME
Name: www
Value: your-site.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

---

## Post-Deployment Checklist

- [ ] Test all forms (contact, booking)
- [ ] Verify email delivery
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Set up analytics (Google Analytics/Plausible)
- [ ] Configure sitemap at `/sitemap.xml`
- [ ] Submit to Google Search Console
- [ ] Test on multiple browsers
- [ ] Enable SSL certificate (automatic on Vercel/Netlify)

---

## Performance Optimization

### Already Implemented:
✅ Next.js Image Optimization
✅ Framer Motion lazy loading
✅ Tailwind CSS purging
✅ Code splitting
✅ Font optimization

### Additional Optimizations:
- Add real images (replace emoji placeholders)
- Implement `next/image` for all images
- Add `loading="lazy"` to images
- Consider CDN for static assets

---

## Monitoring & Analytics

### Recommended Tools:

**Analytics:**
- Google Analytics 4
- Plausible (privacy-friendly)
- Vercel Analytics (built-in)

**Error Tracking:**
- Sentry
- LogRocket

**Uptime Monitoring:**
- UptimeRobot (free)
- Pingdom

---

## Support & Maintenance

### Regular Tasks:
- Monitor form submissions
- Check email deliverability
- Update packages monthly: `npm update`
- Review Vercel/Netlify logs
- Backup database (if implemented)

### Security:
- Keep dependencies updated
- Never commit `.env` files
- Use environment variables for secrets
- Enable HTTPS (auto on Vercel/Netlify)

---

## Troubleshooting

### "Module not found" errors:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails on Vercel:
- Check Node.js version (use 18.x or 20.x)
- Verify all environment variables are set
- Check build logs for specific errors

### Forms not sending emails:
- Verify `EMAIL_USER` and `EMAIL_PASS` in environment variables
- Check Gmail app password is correct
- Ensure 2FA is enabled on Gmail account

---

## Need Help?

**Documentation:**
- [Next.js Docs](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

**Contact:**
- Email: info@enfieldmedical.com.au
- GitHub Issues: Create an issue in your repository

---

**🎉 Your website is production-ready and optimized for success!**
