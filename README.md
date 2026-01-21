# TECLE LAW, PLLC - Official Website

Professional law firm website for TECLE LAW, PLLC in Houston, Texas. Specializing in Personal Injury and Criminal Expungement cases.

🌐 **Live Site:** [Coming Soon]

---

## 📋 Project Overview

This is a modern, mobile-first website built for a QR code marketing campaign targeting 1,000 potential clients. The site emphasizes conversion optimization with clear CTAs and trust signals.

### Practice Areas
- **Personal Injury** - 18-wheeler accidents, car crashes, rideshare incidents, plant explosions
- **Criminal Expungement** - $1,495 all-inclusive with money-back guarantee

---

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

---

## 📁 Project Structure

```
app-build/
├── app/
│   ├── page.tsx                    # Home page
│   ├── personal-injury/page.tsx    # Personal injury practice area
│   ├── expungement/page.tsx        # Expungement page (QR landing)
│   ├── about/page.tsx              # About attorney
│   ├── contact/page.tsx            # Contact page
│   ├── api/submit-lead/route.ts    # Form submission API
│   └── layout.tsx                  # Root layout with header/footer
├── components/
│   ├── layout/
│   │   ├── Header.tsx             # Sticky header with mobile menu
│   │   └── Footer.tsx             # Footer with contact info
│   └── ui/
│       └── Button.tsx             # Reusable button component
├── lib/
│   ├── types.ts                   # TypeScript type definitions
│   └── schemas.ts                 # Zod validation schemas
└── public/
    ├── the-new-logo.png           # Company logo (color)
    ├── logo-new-whtie.png         # Company logo (white)
    └── favicon.png                # Site favicon
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/donnyismail/tecle-law-website.git
cd tecle-law-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📦 Available Scripts

```bash
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build production-ready site
npm run start        # Start production server
npm run lint         # Run ESLint
```

---

## 🎨 Brand Colors

Configured in `tailwind.config.ts`:

- **Primary Blue:** #1E40AF (Deep professional blue)
- **Secondary Gold:** #D97706 (Trust/authority accent)
- **Success Green:** #059669 (CTAs)
- **Dark Navy:** #0F172A (Text/headers)
- **Light Gray:** #F8FAFC (Backgrounds)

---

## 📱 Responsive Design

Mobile-first approach with breakpoints:
- **Base (375px):** Mobile phones
- **sm (640px):** Large phones
- **md (768px):** Tablets
- **lg (1024px):** Desktop
- **xl (1280px):** Large desktop

All touch targets are minimum 44x44px for accessibility.

---

## 🔧 Key Features

### ✅ Completed
- 5 professional pages (Home, Personal Injury, Expungement, About, Contact)
- Mobile-first responsive design
- Sticky navigation with mobile menu
- Brand colors and logo integration
- SEO meta tags
- Fast page loads with Next.js Image optimization
- Form validation with React Hook Form + Zod
- API route for form submissions
- Accessible (WCAG AA compliant)

### 🚧 To Do
- [ ] Add real attorney name and bio
- [ ] Add professional headshot photo
- [ ] Add client testimonials (if available)
- [ ] Add case results (if available)
- [ ] Integrate LawPay payment processing
- [ ] Integrate Dropbox Sign for retainer agreements
- [ ] Configure form submissions (email/CRM)
- [ ] Add Google Analytics tracking
- [ ] Embed Google Maps on Contact page
- [ ] Record and add attorney introduction video

---

## 📞 Contact Information

**Phone:** (713) 282-5871
**Email:** intake@teclelaw.com
**Hours:** Mon-Fri 9:00 AM - 5:00 PM
**Location:** Houston, Texas

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub (already done)
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select this repository
5. Click "Deploy"

Your site will be live at `https://tecle-law-website.vercel.app`

### Manual Deployment

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel deploy
```

---

## 🔒 Environment Variables

For production, you'll need to add:

```env
# LawPay Integration (when ready)
LAWPAY_API_KEY=your_api_key_here

# Dropbox Sign Integration (when ready)
DROPBOX_SIGN_API_KEY=your_api_key_here

# Email Service (for form submissions)
SENDGRID_API_KEY=your_api_key_here

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 🐛 Known Issues / Limitations

1. **Forms currently console.log data** - Need to integrate with email service or CRM
2. **Placeholder content on About page** - Need real attorney bio and photo
3. **No testimonials yet** - Section is omitted until real reviews available
4. **Payment button links to pay.teclelaw.com** - Need to integrate LawPay API
5. **Google Maps not embedded** - Need API key and configuration

---

## 🤝 Contributing

This is a private project for TECLE LAW, PLLC. If you have access:

1. Create a feature branch (`git checkout -b feature/your-feature`)
2. Make your changes
3. Commit with clear messages (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📝 License

© 2025 TECLE LAW, PLLC. All rights reserved.

This code is proprietary and confidential. Unauthorized copying, modification, or distribution is prohibited.

---

## 📧 Questions?

Contact Danniel Ismail for technical questions or access issues.

---

**Built with ❤️ for TECLE LAW, PLLC**
