# 🦷 Enfield Medical & Dental - Premium Dental Website

A modern, responsive, and high-performance website for Enfield Medical & Dental practice built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

### 🎨 Design
- **Premium UI/UX** - Inspired by top-tier design systems (Prismo, Quora templates)
- **Smooth Animations** - Framer Motion for buttery smooth interactions
- **Fully Responsive** - Perfect on mobile, tablet, and desktop
- **Modern Gradients** - Eye-catching blue and purple color scheme
- **Glass Morphism Effects** - Contemporary design aesthetics

### 🚀 Performance
- **Next.js 14** - Latest App Router with Server Components
- **TypeScript** - Type-safe codebase
- **Optimized Images** - Next.js Image optimization
- **Fast Loading** - Optimized for Core Web Vitals
- **SEO Optimized** - Meta tags, Open Graph, and semantic HTML

### 💼 Sections
1. **Hero Section** - Captivating introduction with animated elements
2. **Stats Section** - Animated counters showing practice achievements
3. **Services Section** - Comprehensive service offerings with hover effects
4. **About Section** - Practice information and trust signals
5. **Team Section** - Meet the dentists with detailed profiles
6. **Testimonials** - Patient reviews with 5-star ratings
7. **Booking System** - Appointment scheduling with time slots
8. **Contact Form** - Multi-channel contact options

### 🔧 Technical Features
- **Smooth Scroll Navigation** - Anchor-based navigation
- **Mobile Menu** - Responsive hamburger menu
- **Form Validation** - React Hook Form with Zod
- **API Routes** - Backend endpoints for form submissions
- **Email Integration** - Nodemailer for contact/booking emails
- **Animated Counters** - Intersection Observer for number animations
- **Floating Elements** - 3D-like floating cards with parallax

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Email:** Nodemailer
- **Icons:** Lucide React
- **Database Ready:** Prisma (for future enhancements)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/enfield.git
   cd enfield
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your credentials:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-specific-password
   CONTACT_EMAIL=info@enfieldmedical.com.au
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables
   - Deploy!

### Other Platforms
- **Netlify:** Import from Git and deploy
- **Railway:** Connect GitHub and deploy
- **AWS/Digital Ocean:** Use `npm run build` and serve the `.next` folder

## 📧 Email Configuration

For Gmail:
1. Enable 2-Factor Authentication
2. Generate App Password: [Google Account Settings](https://myaccount.google.com/security)
3. Use App Password in `EMAIL_PASS` environment variable

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: { ... },
  secondary: { ... }
}
```

### Content
- **Services:** Edit `components/sections/ServicesSection.tsx`
- **Team:** Edit `components/sections/TeamSection.tsx`
- **Testimonials:** Edit `components/sections/TestimonialsSection.tsx`

## 📱 Responsive Breakpoints

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

## 🔮 Future Enhancements

- [ ] Real-time booking calendar with availability
- [ ] Patient portal with login
- [ ] Online payment integration
- [ ] Blog section for dental tips
- [ ] Multi-language support (English/Chinese)
- [ ] Live chat support
- [ ] Integration with practice management software
- [ ] SMS reminders for appointments

## 📄 License

This project is licensed under the MIT License.

## 🤝 Support

For questions or support:
- **Email:** info@enfieldmedical.com.au
- **Phone:** (02) 9747 1988
- **Address:** 10 Coronation Parade, Enfield NSW 2136

## 🙏 Credits

Built with ❤️ for Enfield Medical & Dental

**Design Inspiration:**
- Prismo Template
- Quora Template
- Modern Framer Templates

**Technologies:**
- Next.js Team
- Vercel
- Tailwind Labs
- Framer Motion

---

**Made with precision and care** 🦷✨
