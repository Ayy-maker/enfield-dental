# 🔧 Troubleshooting - White Screen Issue

## Problem: Only White Background Showing

If you're seeing a blank white screen on http://localhost:3000, follow these steps:

---

## ✅ Quick Fixes

### 1. **Hard Refresh Browser (Most Common Fix)**

**Mac:**
```
Cmd + Shift + R
```

**Windows:**
```
Ctrl + Shift + R
```

**Why:** Browser cache might be serving old files

---

### 2. **Clear Browser Cache**

**Chrome:**
1. Open Chrome Settings
2. Privacy and Security → Clear browsing data
3. Select "Cached images and files"
4. Click "Clear data"

**Safari:**
1. Safari → Preferences → Advanced
2. Check "Show Develop menu"
3. Develop → Empty Caches

**Firefox:**
1. History → Clear Recent History
2. Select "Cache"
3. Clear Now

---

### 3. **Try Incognito/Private Window**

**Mac:**
- Chrome: `Cmd + Shift + N`
- Safari: `Cmd + Shift + N`
- Firefox: `Cmd + Shift + P`

**Windows:**
- Chrome/Edge: `Ctrl + Shift + N`
- Firefox: `Ctrl + Shift + P`

**Why:** Bypasses all caching and extensions

---

### 4. **Restart Development Server**

```bash
cd /Users/ayush/projects/Enfield

# Kill existing processes
lsof -ti:3000 | xargs kill -9

# Clear Next.js cache
rm -rf .next

# Start fresh
npm run dev
```

Wait for "Ready in..." message, then open http://localhost:3000

---

### 5. **Check Browser Console for Errors**

**Open Console:**
- Mac: `Cmd + Option + I`
- Windows: `F12` or `Ctrl + Shift + I`

**Look for:**
- Red error messages
- Failed network requests
- JavaScript errors

**Common Errors:**
- `Failed to load resource` - Check network tab
- `Syntax Error` - Code issue (tell me the error)
- `Module not found` - Missing dependency

---

## 🔍 Advanced Troubleshooting

### Check if Server is Running

```bash
ps aux | grep "next dev"
```

Should show a process running. If not, start it:
```bash
npm run dev
```

---

### Check if CSS is Loading

```bash
curl -s http://localhost:3000 | grep "stylesheet"
```

Should show `stylesheet` in output.

---

### Verify Tailwind is Working

```bash
curl -s http://localhost:3000/_next/static/css/app/layout.css | head -20
```

Should show CSS content starting with `*,::before,::after`

---

### Test with cURL

```bash
curl -s http://localhost:3000 | grep "HeroSection"
```

Should show "HeroSection" - means React is rendering.

---

### Rebuild Everything Fresh

```bash
cd /Users/ayush/projects/Enfield

# Stop server
lsof -ti:3000 | xargs kill -9

# Clean everything
rm -rf .next node_modules/.cache

# Rebuild
npm run build

# Start dev
npm run dev
```

---

## 🌐 Try Different Browser

If one browser doesn't work:
1. Chrome - Download from google.com/chrome
2. Firefox - Download from mozilla.org/firefox
3. Safari - Built into Mac
4. Edge - Download from microsoft.com/edge

---

## 📱 Test on Mobile (Same Network)

1. Find your computer's IP:
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

2. On your phone, visit:
```
http://YOUR_IP_ADDRESS:3000
```

Example: `http://192.168.1.5:3000`

---

## 🔧 Common Issues & Solutions

### Issue: "Cannot GET /"
**Solution:** Server not running. Run `npm run dev`

### Issue: "ERR_CONNECTION_REFUSED"
**Solution:** Port 3000 blocked. Kill process or change port:
```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

### Issue: CSS Not Loading
**Solution:** 
```bash
rm -rf .next
npm run dev
```

### Issue: JavaScript Errors
**Solution:** Check browser console (F12) and send me the error message

### Issue: Images Not Showing
**Solution:** Check images exist:
```bash
ls -la public/images/
```

Should show:
- hero-image.png
- team-photo.jpg
- office-1.jpg
- office-2.jpg

---

## ✅ Verification Checklist

Run these commands to verify everything:

```bash
# 1. Check if server is running
ps aux | grep "next dev" | grep -v grep

# 2. Check if port 3000 is open
lsof -i:3000

# 3. Test if page loads
curl -s http://localhost:3000 | grep "Enfield Medical"

# 4. Check if CSS loads
curl -s http://localhost:3000 | grep "stylesheet"

# 5. Verify images exist
ls public/images/

# 6. Check Node version (should be 18+)
node --version
```

---

## 🆘 Still Not Working?

### Screenshot What You See

1. Take screenshot of browser showing white screen
2. Open browser console (F12)
3. Take screenshot of any errors
4. Take screenshot of Network tab

### Send Me:
1. Browser you're using (Chrome/Safari/Firefox)
2. Any error messages from console
3. Output of: `npm run dev`
4. Output of: `curl http://localhost:3000 | head -50`

---

## 🚀 Expected Result

You should see:

1. **Navigation Bar** at top
   - Logo: "Enfield Medical & Dental"
   - Menu items
   - "Book Now" button

2. **Hero Section**
   - Large headline: "Your Smile, Our Passion"
   - Teal/cyan gradient colors
   - Image or gradient box
   - Two buttons

3. **Stats Section**
   - Teal gradient background
   - 4 animated numbers

4. **More sections below...**

---

## 💡 Prevention

To avoid this in future:

1. Always use `npm run dev` to start server
2. Wait for "Ready in..." message before opening browser
3. Use hard refresh after making changes
4. Keep browser console open to spot errors early

---

## ✅ Success Indicators

**Website is working if you see:**
- ✅ Colorful teal/cyan gradients
- ✅ "Enfield Medical & Dental" text
- ✅ Navigation menu
- ✅ Large "Your Smile, Our Passion" heading
- ✅ Animated sections
- ✅ Images (or colored boxes)
- ✅ Footer at bottom

**Not working if you see:**
- ❌ Completely white page
- ❌ No text at all
- ❌ Only plain black text on white
- ❌ Error messages
- ❌ "Cannot connect" message

---

**If none of these work, send me the error messages and I'll help you fix it!**
