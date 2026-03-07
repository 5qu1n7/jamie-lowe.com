# Jamie Lowe Real Estate Website

Professional real estate website for Jamie Lowe, specializing in military relocation, VA loans, and new construction homes in San Antonio, Texas.

## 🎯 Features

- ✅ **Military-Focused Content** - Specialized guides for military home buyers, VA loans, and military relocation
- ✅ **Community Pages** - Detailed information on San Antonio military-friendly communities
- ✅ **Service Pages** - For Buyers, For Sellers, Military Relocation, New Construction
- ✅ **Blog System** - 8 comprehensive blog posts on military real estate
- ✅ **Interactive Map** - Leaflet.js powered community map
- ✅ **Integrations** - OneReal widget, Google Business embed, Calendly, Formspree
- ✅ **Newsletter** - Brevo email newsletter signup
- ✅ **Responsive Design** - Mobile-friendly earth tone theme
- ✅ **Performance** - Fast static site generation

## 🚀 Project Structure

```text
jamie-lowe-website/
├── src/
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogLayout.astro
│   ├── components/
│   │   ├── Navigation.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ValueProp.astro
│   │   ├── TestimonialCard.astro
│   │   ├── BlogCard.astro
│   │   ├── OneRealWidget.astro
│   │   ├── CalendlyEmbed.astro
│   │   ├── ContactForm.astro
│   │   ├── CommunityMap.astro
│   │   └── ... (more components)
│   ├── pages/
│   │   ├── index.astro (Home)
│   │   ├── about.astro
│   │   ├── buyers.astro
│   │   ├── sellers.astro
│   │   ├── military-relocation.astro
│   │   ├── new-construction.astro
│   │   ├── communities.astro
│   │   ├── contact.astro
│   │   └── blog/
│   │       ├── index.astro
│   │       ├── military-buyers-guide.astro
│   │       ├── va-loans-explained.astro
│   │       └── ... (6 more blog posts)
│   └── styles/
│       ├── global.css
│       └── variables.css
├── public/
├── dist/ (generated on build)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 Quick Start

### Local Development

```sh
# Install dependencies
npm install

# Start development server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📋 Post-Launch Configuration Tasks

### 1. Formspree Contact Form Setup
1. Go to https://formspree.io
2. Create account and set up form for jamie.lowe.real@gmail.com
3. Copy your form ID
4. Update `/src/components/ContactForm.astro` - replace `YOUR_FORM_ID` with your actual Formspree ID

### 2. Google Analytics Setup
1. Create GA4 property at https://analytics.google.com
2. Get your GA4 Measurement ID (G-XXXXXXXXXX)
3. Update `/src/layouts/BaseLayout.astro` - replace both instances of `G-XXXXXXXXXX` with your actual ID

### 3. Landbot Chatbot Setup
1. Create account at https://landbot.io (free tier: 250 conversations/month)
2. Create chatbot with Q&A knowledge base trained on site content
3. Get your embed URL
4. Update `/src/components/Landbot.astro` - replace the configUrl

### 4. Brevo Newsletter Setup
1. Create free account at https://www.brevo.com (free tier: 300 contacts, unlimited campaigns)
2. Set up email list and form
3. Update `/src/components/NewsletterSignup.astro` with your Brevo form action

### 5. Calendly Integration
- Already embedded with link to https://calendly.com/jamie-lowe
- Update URL if needed in multiple components

### 6. OneReal Widget
- OneReal widget is embedded with San Antonio coordinates
- No additional setup needed

## 📱 Pages Overview

### Home (`/`)
- Hero section with call-to-actions
- Why Choose Jamie Lowe (6 value propositions)
- Property search with OneReal widget
- Service offerings
- Featured communities
- Client testimonials
- Blog preview
- Newsletter signup

### About (`/about`)
- Professional biography
- Credentials and experience
- What makes Jamie different
- Client testimonials
- Call-to-action buttons

### For Buyers (`/buyers`)
- Home buying journey (4 steps)
- Buyer advantages
- OneReal property search
- Financing options (VA, Conventional, FHA, USDA)
- Call-to-action section

### For Sellers (`/sellers`)
- Selling process (4 steps)
- Seller advantages
- Selling strategy guide
- Home selling tips

### Military Relocation (`/military-relocation`)
- PCS relocation services
- Military benefits overview
- Why San Antonio for military families
- PCS checklist
- Call-to-action section

### New Construction (`/new-construction`)
- Why buy new construction
- New construction process
- Helpful tips
- Builder information
- Common mistakes to avoid

### Communities (`/communities`)
- Interactive Leaflet.js map
- Detailed community information (8 communities)
- Community comparison cards

### Contact (`/contact`)
- Contact information
- Contact form (Formspree)
- Calendly scheduling embed

### Blog (`/blog`)
- Blog index with all 8 articles
- Individual blog post pages with professional styling

## 🎨 Design

### Color Palette (Earth Tones)
- **Primary**: Warm tan/beige (#D4A574)
- **Secondary**: Sage green (#9CAF88)
- **Accent**: Warm brown (#8B7355)
- **Neutral**: Off-white background (#F5F3F0)
- **Text**: Dark brown (#3E2723)

### Responsive Design
- Mobile-first approach
- Breakpoints at 768px for tablet/desktop
- Optimized touch targets
- Flexible grid layouts

## 🔧 Customization

### Content Updates
- Edit page content in `src/pages/` files
- Update blog posts in `src/pages/blog/` files
- Modify components in `src/components/` directory

### Styling
- Global styles in `src/styles/global.css`
- Variables in `src/styles/variables.css`
- Component-specific styles in `<style>` blocks

### Colors
Update CSS variables in `src/styles/variables.css` to change the entire color scheme globally.

## 🚀 Deployment to Cloudflare Pages

### Prerequisites
- Cloudflare account (free tier available)
- GitHub repository with this code
- Domain (jamie-lowe.com)

### Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial Jamie Lowe website"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to https://dash.cloudflare.com
   - Navigate to Pages → Create project → Connect to Git
   - Select your GitHub repository
   - Build configuration:
     - Framework preset: Astro
     - Build command: `npm run build`
     - Build output directory: `dist`
   - Deploy!

3. **Connect Custom Domain**
   - In Cloudflare Pages settings, add your domain (jamie-lowe.com)
   - Update domain DNS to point to Cloudflare
   - SSL/TLS certificate auto-installed

### Performance Optimization
- Cloudflare automatic asset compression
- Global CDN distribution
- Image optimization
- Cache management

## 📊 Analytics & Monitoring

- Google Analytics 4: Track visitor behavior
- Formspree: Monitor form submissions
- Calendly: Track consultation bookings
- Brevo: Monitor newsletter engagement
- Landbot: Track chatbot conversations

## 🛠️ Free Tools Used

- **Hosting**: Cloudflare Pages (free)
- **Framework**: Astro (free, open-source)
- **Chatbot**: Landbot (250 conversations/month free)
- **Email**: Brevo (300 contacts, unlimited campaigns free)
- **Analytics**: Google Analytics 4 (free)
- **Forms**: Formspree (50 submissions/month free)
- **Scheduling**: Calendly (free 1:1 meetings)
- **Maps**: Leaflet.js + OpenStreetMap (free, open-source)
- **Property Search**: OneReal (public widget)

## 📝 License

This website is created for Jamie Lowe Real Estate. All content is proprietary.

## 🤝 Support

For website updates and maintenance, contact your developer.

---

**Website Built With**: Astro + Earth Tone Design + Military Focus 🎖️
