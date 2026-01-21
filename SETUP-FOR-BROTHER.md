# SETUP GUIDE FOR BROTHER

Hey! Danniel asked me to set up this website project for you. Everything is ready to go. Here's how to get started.

---

## 🎯 What You're Getting

A complete, professional law firm website for TECLE LAW:
- 5 pages (Home, Personal Injury, Expungement, About, Contact)
- Mobile-first responsive design
- Production-ready code (build passes, no errors)
- Ready to deploy to Vercel

**Current Status:** 80% complete, needs content updates and integrations

---

## 🚀 Quick Start (5 minutes)

### Step 1: Clone the Repository

```bash
# Go to your projects folder
cd ~/projects  # or wherever you keep projects

# Clone the repo
git clone https://github.com/donnyismail/tecle-law-website.git
cd tecle-law-website

# Install dependencies
npm install
```

### Step 2: Run the Development Server

```bash
npm run dev
```

Open your browser to: **http://localhost:3000**

You should see the website running!

---

## 📂 What's Already Done

✅ **Complete page structure** (5 pages)
✅ **Mobile-first responsive design**
✅ **Header with mobile menu**
✅ **Footer with contact info**
✅ **Brand colors configured**
✅ **Logo files downloaded and integrated**
✅ **Production build works** (`npm run build` succeeds)
✅ **No TypeScript errors**
✅ **Clean, maintainable code**

---

## 🔨 What Needs Work

### Priority 1: Content Updates (1-2 hours)

**File:** `app/about/page.tsx`
- Replace placeholder attorney bio with real bio
- Add attorney name
- Add photo (put file in `/public/attorney-photo.jpg`)

**Files to update:**
- `app/about/page.tsx` - Update bio text
- `public/` - Add attorney headshot photo

### Priority 2: Form Integration (2-4 hours)

**File:** `app/api/submit-lead/route.ts`

Currently forms just console.log the data. You need to:
- Send submissions to email (use SendGrid, Resend, or Nodemailer)
- OR send to CRM (Salesforce, HubSpot, etc.)

**Example with Resend (easiest):**
```bash
npm install resend
```

Then update `app/api/submit-lead/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  
  await resend.emails.send({
    from: 'website@teclelaw.com',
    to: 'intake@teclelaw.com',
    subject: 'New Lead from Website',
    html: `<p>Name: ${body.name}</p><p>Phone: ${body.phone}</p><p>Email: ${body.email}</p>`
  });
  
  return NextResponse.json({ success: true });
}
```

### Priority 3: LawPay Integration (4-6 hours)

The expungement page needs to link to LawPay for $1,495 payments.

**Current:** Button links to `http://pay.teclelaw.com/`
**Needed:** Integrate LawPay API or create payment links

### Priority 4: Dropbox Sign (2-3 hours)

For digital retainer agreement signatures before payment.

---

## 🎨 How to Customize

### Change Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: '#1E40AF',  // Change this
  },
  // etc
}
```

### Update Contact Info

Edit `components/layout/Footer.tsx` and `app/contact/page.tsx`

### Add New Pages

```bash
# Create new page folder
mkdir app/new-page

# Create page file
touch app/new-page/page.tsx
```

Then add content following the pattern of existing pages.

---

## 📱 Testing

### Test on Mobile
1. Open Chrome DevTools (Cmd+Option+I)
2. Click device toggle (Cmd+Shift+M)
3. Select iPhone 14 Pro
4. Navigate through all pages

### Test Build
```bash
npm run build
npm run start
# Check http://localhost:3000
```

---

## 🚀 Deploy to Vercel

### Option 1: Vercel Dashboard (Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Click "Import Project"
4. Select `donnyismail/tecle-law-website`
5. Click "Deploy"

Done! You'll get a URL like: `https://tecle-law-website.vercel.app`

### Option 2: Vercel CLI
```bash
npm install -g vercel
vercel login
vercel deploy
```

---

## 🐛 Common Issues

### Issue: "Module not found"
**Fix:** Run `npm install` again

### Issue: "Port 3000 already in use"
**Fix:** Kill the process:
```bash
lsof -ti:3000 | xargs kill
```

### Issue: Build fails
**Fix:** Check for TypeScript errors:
```bash
npm run type-check
```

---

## 📦 Dependencies Installed

- **next** - React framework
- **react** - UI library
- **typescript** - Type safety
- **tailwindcss** - Styling
- **react-hook-form** - Form handling
- **zod** - Validation
- **lucide-react** - Icons
- **framer-motion** - Animations

---

## 📁 Important Files

```
app/layout.tsx              # Main layout (header/footer)
components/layout/Header.tsx # Top navigation
components/layout/Footer.tsx # Bottom footer
app/page.tsx                # Home page
app/expungement/page.tsx    # QR landing page (most important)
tailwind.config.ts          # Brand colors
```

---

## 💡 Pro Tips

1. **Test mobile first** - QR codes mean 100% mobile traffic
2. **Keep it fast** - Optimize images, minimize dependencies
3. **Use git branches** - Don't work directly on main
4. **Test builds often** - Run `npm run build` to catch errors early
5. **Ask questions** - Reach out to Danniel if stuck

---

## 🔗 Useful Links

- **Repository:** https://github.com/donnyismail/tecle-law-website
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind Docs:** https://tailwindcss.com/docs
- **Vercel Deploy:** https://vercel.com/docs

---

## ✉️ Questions?

Contact Danniel Ismail (your brother) if you need help.

---

**You've got this! The hard part is done. Just plug in the content and ship it. 🚀**
