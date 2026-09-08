// 📝 Single source of truth for ALL site content (FA + EN) — edit texts, links and projects here

export const locales = ["fa", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fa";

export const links = {
  github: "https://github.com/rezaian-dev",
  linkedin: "https://www.linkedin.com/in/mr-rezaian",
  telegram: "https://t.me/rezaian_dev",
  email: "mrezaian.dev@gmail.com",
  phone: "+989018106646",
  resume: "/MohammadReza_Rezaian_Resume.pdf",
  photo: "/images/profile.jpg",
};

type Metric = { value: string; label: string };

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  type: string;
  description: string;
  image: string;
  stack: string[];
  metrics: Metric[];
  github?: string;
  demo?: string;
  client?: boolean;
  accent: string;
};

export type Book = {
  /** 🌫️ Key into blurData placeholders */
  blur: "js-guide" | "react-guide" | "next-guide";
  title: string;
  subtitle: string;
  chapters: string;
  image: string;
  read: string;
  github: string;
  accent: string;
};

const fa = {
  ui: {
    resume: "رزومه",
    downloadResume: "دانلود رزومه",
    viewProjects: "مشاهدهٔ پروژه‌ها",
    sourceCode: "سورس‌کد",
    liveDemo: "دموی زنده",
    readOnline: "مطالعهٔ آنلاین",
    clientProject: "پروژهٔ کارفرما",
    privateSource: "سورس‌کد به دلیل قرارداد با کارفرما خصوصی است.",
    sendEmail: "ارسال ایمیل",
    theme: "تغییر تم",
    language: "English",
    menu: "منو",
    scroll: "ادامه",
  },
  footer: {
    tagline: "کد تمیز، محصول واقعی، کیفیت قابل سنجش.",
    navTitle: "دسترسی سریع",
    connectTitle: "ارتباط",
    status: "آمادهٔ همکاری",
    localTime: "ساعت تهران",
    backToTop: "بازگشت به بالا",
    rights: "تمامی حقوق محفوظ است.",
    crafted: "با دقت طراحی و مهندسی شده در کرج",
  },
  nav: [
    { href: "#about", label: "درباره" },
    { href: "#projects", label: "پروژه‌ها" },
    { href: "#books", label: "کتاب‌ها" },
    { href: "#skills", label: "مهارت‌ها" },
    { href: "#contact", label: "تماس" },
  ],
  hero: {
    available: "آمادهٔ همکاری — ریموت و حضوری",
    greeting: "سلام، من",
    name: "محمدرضا رضائیان",
    suffix: "هستم.",
    role: "Front-End Engineer",
    roleSub: "React & Next.js",
    tagline:
      "سازندهٔ محصولات Production-grade با React و Next.js؛ متمرکز بر معماری تمیز، Performance و حلِ چالش‌های واقعیِ وب فارسی.",
    location: "کرج · ریموت و حضوری",
    floatA: { value: "100", label: "امتیاز SEO · Lighthouse" },
    floatB: { value: "۳+", label: "سال تجربهٔ عملی" },
    stats: [
      { value: "۳+", label: "سال تجربه" },
      { value: "۳", label: "محصول Production" },
      { value: "۱۰۰", label: "امتیاز SEO" },
      { value: "۳", label: "کتاب فنی فارسی" },
    ],
  },
  about: {
    eyebrow: "ABOUT",
    title: "مهندسی، درست انجام‌شده.",
    paragraphs: [
      "مهندس Front-End متمرکز بر Next.js، React و TypeScript با تجربهٔ ساخت محصولات واقعیِ Production-grade. سازندهٔ یک پلتفرم فول‌استکِ نوبت‌دهی پزشکی (احراز هویت امن، کش چندلایه و تست خودکار سه‌لایه) و یک SPA مقیاس‌پذیر املاک با نقشهٔ تعاملی و ۱۷ هوک سفارشی.",
      "مسلط بر معماری کامپوننت‌محور، SEO، Performance و دسترس‌پذیری؛ با تجربهٔ عملی در تقویم شمسی، منطقهٔ زمانی تهران و رابط‌های RTL.",
    ],
    quote: "به جای وصلهٔ موقت، علتِ ریشه‌ای را برطرف می‌کنم.",
    focus: { title: "حوزه‌های تمرکز", items: ["React Server Components", "Performance", "معماری مقیاس‌پذیر", "SEO", "DX"] },
    languages: [
      { name: "فارسی", level: "زبان مادری" },
      { name: "English", level: "متوسط (B1)" },
    ],
    lighthouse: { eyebrow: "LIGHTHOUSE", title: "امتیاز دکتر رزرو در Google Lighthouse" },
    principles: [
      { title: "Type-safety کامل", text: "TypeScript strict و Zod در مرز داده" },
      { title: "کد تمیز و کم‌حجم", text: "خوانا، قابل نگهداری، بدون پیچیدگی اضافه" },
      { title: "اسکوپ حداقلی", text: "فقط آنچه محصول واقعاً نیاز دارد" },
      { title: "کیفیت قابل سنجش", text: "Lighthouse، تست خودکار و a11y" },
    ],
  },
  projects: {
    eyebrow: "SELECTED WORK",
    title: "پروژه‌های منتخب",
    description: "محصولات واقعی که end-to-end توسعه داده و دیپلوی شده‌اند — نه دمو، نه قالب.",
    items: [
      {
        slug: "doctor-booking",
        title: "دکتر رزرو",
        subtitle: "پلتفرم نوبت‌دهی آنلاین پزشک",
        type: "Full-Stack · Production",
        description:
          "پلتفرم کامل نوبت‌دهی با Next.js App Router؛ جست‌وجو و رزرو پزشک با تقویم شمسی، نظرات و امتیازدهی، مقالات با ویرایشگر Tiptap و پنل مدیریت کامل. لایهٔ دادهٔ امن با ۹ مدل Mongoose و ۲۰ اسکیمای Zod، احراز هویت JWT روی httpOnly cookie و کش چندلایه با Upstash Redis.",
        image: "/images/projects/doctor-booking.jpg",
        stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "MongoDB", "Redis", "Zod", "Playwright"],
        metrics: [
          { value: "۱۶۷", label: "کامپوننت" },
          { value: "۲۶", label: "API Route" },
          { value: "۱۷", label: "فایل تست" },
          { value: "۱۰۰", label: "SEO" },
        ],
        github: "https://github.com/rezaian-dev/doctor-booking",
        accent: "#3b82f6",
      },
      {
        slug: "saghfinoo",
        title: "سقفینو",
        subtitle: "پلتفرم جامع خرید، فروش و اجارهٔ ملک",
        type: "Front-End · Scalable SPA",
        description:
          "SPA مقیاس‌پذیر املاک با معماری Domain-Driven؛ جست‌وجوی پیشرفته بر اساس منطقه، نوع، قیمت و متراژ، ثبت آگهی چندمرحله‌ای، نقشهٔ تعاملی Leaflet برای جست‌وجوی محله‌به‌محله و بهینه‌سازی Performance با memoization در بیش از ۱۰۰ نقطه.",
        image: "/images/projects/saghfinoo.jpg",
        stack: ["React 18", "Vite", "React Router 7", "MUI", "Tailwind", "React Hook Form", "React-Leaflet"],
        metrics: [
          { value: "۱۰۷", label: "کامپوننت" },
          { value: "۱۷", label: "هوک سفارشی" },
          { value: "۱۲", label: "صفحه" },
        ],
        github: "https://github.com/rezaian-dev/saghfinoo",
        accent: "#ef4444",
      },
      {
        slug: "malli-kids",
        title: "ملی‌کیدز",
        subtitle: "فروشگاه آنلاین آتلیهٔ پوشاک کودک",
        type: "Full-Stack · Client Work",
        description:
          "فروشگاه کامل با سه سطح ویترین، حساب مشتری و کنسول مدیریت روی Next.js 16؛ Server Components به‌صورت پیش‌فرض، ISR برای کاتالوگ، احراز هویت با Better Auth، قفل موجودی هنگام تسویه، کوپن با انقضای جلالی و پرو مجازی لباس.",
        image: "/images/projects/malli-kids.jpg",
        stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "MongoDB", "Better Auth", "Zod", "Leaflet"],
        metrics: [
          { value: "۳", label: "سطح دسترسی" },
          { value: "RSC", label: "معماری" },
          { value: "ISR", label: "کاتالوگ" },
        ],
        client: true,
        accent: "#a855f7",
      },
      {
        slug: "shopping-cart-ts",
        title: "ShoppingCart",
        subtitle: "سبد خرید مدرن با TypeScript",
        type: "Front-End · Open Source",
        description:
          "اپلیکیشن سبک و رسپانسیو سبد خرید با TypeScript strict، Webpack و Bootstrap 5؛ افزودن و حذف محصول، به‌روزرسانی تعداد و محاسبهٔ پویای مجموع با معماری ماژولار.",
        image: "/images/projects/shopping-cart.jpg",
        stack: ["TypeScript", "Webpack", "Bootstrap 5", "ESLint + Prettier"],
        metrics: [],
        github: "https://github.com/rezaian-dev/shopping-cart-ts",
        accent: "#0ea5e9",
      },
    ] as Project[],
  },
  books: {
    eyebrow: "OPEN SOURCE · PERSIAN HANDBOOKS",
    title: "سه مرجع فارسی برای توسعه‌دهندگان",
    description: "مجموعهٔ راهنماهای پروژه‌محور با تمرکز بر مدل ذهنی، تحلیل رفتار و تصمیم‌گیری فنی — رایگان و متن‌باز.",
    items: [
      {
        title: "مرجع فارسی JavaScript ES2025",
        subtitle: "از مدل ذهنی زبان تا معماری و کد آمادهٔ Production",
        chapters: "۳۸ فصل",
        blur: "js-guide",
        image: "/images/projects/js-guide.jpg",
        read: "https://rezaian-dev.github.io/javascript-persian-guide/",
        github: "https://github.com/rezaian-dev/javascript-persian-guide",
        accent: "#facc15",
      },
      {
        title: "راهنمای جامع React 19.2",
        subtitle: "از اولین کامپوننت تا معماری رابط کاربری در Production",
        chapters: "۳۷ فصل",
        blur: "react-guide",
        image: "/images/projects/react-guide.jpg",
        read: "https://rezaian-dev.github.io/react-19-persian-guide/",
        github: "https://github.com/rezaian-dev/react-19-persian-guide",
        accent: "#22d3ee",
      },
      {
        title: "راهنمای جامع Next.js 16",
        subtitle: "از App Router و Server Components تا معماری و استقرار",
        chapters: "۳۷ فصل",
        blur: "next-guide",
        image: "/images/projects/next-guide.jpg",
        read: "https://rezaian-dev.github.io/nextjs-16-persian-guide/",
        github: "https://github.com/rezaian-dev/nextjs-16-persian-guide",
        accent: "#e2e8f0",
      },
    ] as Book[],
  },
  skills: {
    eyebrow: "SKILLS",
    title: "جعبه‌ابزار",
    description: "ابزارهایی که هر روز با آن‌ها محصول می‌سازم — از رابط کاربری تا لایهٔ داده.",
    groups: [
      { group: "Core", items: ["React", "Next.js", "TypeScript", "JavaScript"] },
      { group: "UI & Styling", items: ["Tailwind CSS", "shadcn/ui", "MUI", "RTL"] },
      { group: "State & Data", items: ["SWR", "React Hook Form", "Context", "Redis"] },
      { group: "Backend-for-Frontend", items: ["API Routes", "MongoDB", "Zod", "JWT / RBAC"] },
      { group: "Quality & Tooling", items: ["Playwright", "Git", "Vite", "Accessibility"] },
      { group: "Architecture", items: ["Clean Code", "Component-Driven", "Performance", "SEO"] },
    ],
  },
  highlights: {
    eyebrow: "TECHNICAL HIGHLIGHTS",
    title: "برجسته‌های فنی",
    description: "چند نمونه از مسئله‌های واقعی که در محصولات حل کرده‌ام.",
    items: [
      {
        icon: "calendar",
        project: "دکتر رزرو",
        title: "رزرو نوبت با تقویم شمسی و زمان‌بندی دقیق",
        text: "مدیریت تاریخ و زمان بر پایهٔ تقویم جلالی (jalaali-js) با خواندن ساعت تهران مستقل از timezone سرور تا اسلات‌ها جابه‌جا نشوند؛ قانون «یک نوبت فعال در روز» برای هر کاربر.",
      },
      {
        icon: "shield",
        project: "دکتر رزرو",
        title: "احراز هویت و سخت‌سازی امنیتی",
        text: "JWT روی httpOnly cookie با نقش‌های admin/user و هش رمز با bcrypt؛ کد OTP هش‌شده با مقایسهٔ timing-safe، throttle و محافظت brute-force مبتنی بر Redis.",
      },
      {
        icon: "zap",
        project: "دکتر رزرو",
        title: "مهندسی Performance و SEO",
        text: "کش چندلایه با revalidateTag و Upstash Redis، بهینه‌سازی تصویر با next/image و code-splitting داینامیک؛ متادیتای داینامیک، sitemap و robots اختصاصی و ISR.",
      },
      {
        icon: "layers",
        project: "سقفینو",
        title: "معماری فرانت‌اند مقیاس‌پذیر",
        text: "استخراج منطق تکرارشونده در ۱۷ هوک سفارشی (فیلتر، فرم، اعتبارسنجی، OTP)، رندر بهینه با memoization در ۱۰۰+ نقطه و سازمان‌دهی ۱۰۷ کامپوننت در دسته‌های منطقی.",
      },
    ],
  },
  contact: {
    eyebrow: "CONTACT",
    titleA: "بیایید چیزی بسازیم که",
    titleB: "واقعاً کار کند.",
    text: "آمادهٔ همکاری ریموت و حضوری هستم. اگر به یک مهندس فرانت‌اند با تمرکز بر کیفیت، Performance و تجربهٔ کاربر فارسی نیاز دارید، خوشحال می‌شوم صحبت کنیم.",
    channels: {
      email: "ایمیل",
      phone: "تلفن",
      telegram: "تلگرام",
      linkedin: "لینکدین",
      github: "گیت‌هاب",
    },
    phoneDisplay: "۰۹۰۱ ۸۱۰ ۶۶۴۶",
  },
};

export type Content = typeof fa;

const en: Content = {
  ui: {
    resume: "Resume",
    downloadResume: "Download Resume",
    viewProjects: "View Projects",
    sourceCode: "Source Code",
    liveDemo: "Live Demo",
    readOnline: "Read Online",
    clientProject: "Client Work",
    privateSource: "Source is private under client agreement.",
    sendEmail: "Send Email",
    theme: "Toggle theme",
    language: "فارسی",
    menu: "Menu",
    scroll: "Scroll",
  },
  footer: {
    tagline: "Clean code. Real products. Measurable quality.",
    navTitle: "Quick links",
    connectTitle: "Connect",
    status: "Open to work",
    localTime: "Tehran time",
    backToTop: "Back to top",
    rights: "All rights reserved.",
    crafted: "Designed & engineered with care in Karaj",
  },
  nav: [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#books", label: "Books" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ],
  hero: {
    available: "Open to work — Remote & On-site",
    greeting: "Hi, I'm",
    name: "Mohammadreza Rezaian",
    suffix: "",
    role: "Front-End Engineer",
    roleSub: "React & Next.js",
    tagline:
      "I build production-grade products with React and Next.js — focused on clean architecture, performance, and solving real infrastructure challenges of the Persian web.",
    location: "Karaj, Iran · Remote & On-site",
    floatA: { value: "100", label: "SEO Score · Lighthouse" },
    floatB: { value: "3+", label: "Years of Experience" },
    stats: [
      { value: "3+", label: "Years Experience" },
      { value: "3", label: "Production Products" },
      { value: "100", label: "SEO Score" },
      { value: "3", label: "Persian Tech Books" },
    ],
  },
  about: {
    eyebrow: "ABOUT",
    title: "Engineering, done right.",
    paragraphs: [
      "Front-End engineer focused on Next.js, React and TypeScript with hands-on experience shipping real production-grade products: a full-stack medical appointment platform (secure auth, multi-layer caching, three-tier automated tests) and a scalable real-estate SPA with an interactive map and 17 custom hooks.",
      "Strong in component-driven architecture, SEO, performance and accessibility — with practical experience in the Jalali calendar, Tehran timezone handling and RTL interfaces.",
    ],
    quote: "I fix the root cause instead of applying a quick patch.",
    focus: { title: "Focus areas", items: ["React Server Components", "Performance", "Scalable Architecture", "SEO", "DX"] },
    languages: [
      { name: "Persian", level: "Native" },
      { name: "English", level: "Intermediate (B1)" },
    ],
    lighthouse: { eyebrow: "LIGHTHOUSE", title: "Doctor Booking on Google Lighthouse" },
    principles: [
      { title: "Full Type-safety", text: "TypeScript strict and Zod at the data boundary" },
      { title: "Clean, lean code", text: "Readable, maintainable, no extra complexity" },
      { title: "Minimal scope", text: "Only what the product truly needs" },
      { title: "Measurable quality", text: "Lighthouse, automated tests and a11y" },
    ],
  },
  projects: {
    eyebrow: "SELECTED WORK",
    title: "Selected Projects",
    description: "Real products developed end-to-end and deployed — not demos, not templates.",
    items: [
      {
        slug: "doctor-booking",
        title: "Doctor Booking",
        subtitle: "Online medical appointment platform",
        type: "Full-Stack · Production",
        description:
          "Complete booking platform on Next.js App Router: doctor search and reservation with the Jalali calendar, reviews and ratings, Tiptap-powered articles and a full admin panel. Secure data layer with 9 Mongoose models and 20 Zod schemas, JWT auth on httpOnly cookies and multi-layer caching with Upstash Redis.",
        image: "/images/projects/doctor-booking.jpg",
        stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "MongoDB", "Redis", "Zod", "Playwright"],
        metrics: [
          { value: "167", label: "Components" },
          { value: "26", label: "API Routes" },
          { value: "17", label: "Test Files" },
          { value: "100", label: "SEO" },
        ],
        github: "https://github.com/rezaian-dev/doctor-booking",
        accent: "#3b82f6",
      },
      {
        slug: "saghfinoo",
        title: "Saghfinoo",
        subtitle: "Real-estate platform for buying, selling and renting",
        type: "Front-End · Scalable SPA",
        description:
          "Scalable real-estate SPA with a domain-driven architecture: advanced search by district, type, price and area, multi-step listing creation, an interactive Leaflet map for neighbourhood-level search, and performance tuned with memoization across 100+ call sites.",
        image: "/images/projects/saghfinoo.jpg",
        stack: ["React 18", "Vite", "React Router 7", "MUI", "Tailwind", "React Hook Form", "React-Leaflet"],
        metrics: [
          { value: "107", label: "Components" },
          { value: "17", label: "Custom Hooks" },
          { value: "12", label: "Pages" },
        ],
        github: "https://github.com/rezaian-dev/saghfinoo",
        accent: "#ef4444",
      },
      {
        slug: "malli-kids",
        title: "Malli Kids",
        subtitle: "Online store for a children's clothing atelier",
        type: "Full-Stack · Client Work",
        description:
          "Full e-commerce with storefront, customer account and admin console on Next.js 16: Server Components by default, ISR for the catalogue, Better Auth, stock locking at checkout, Jalali-expiring coupons and a virtual try-on flow.",
        image: "/images/projects/malli-kids.jpg",
        stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "MongoDB", "Better Auth", "Zod", "Leaflet"],
        metrics: [
          { value: "3", label: "Access Tiers" },
          { value: "RSC", label: "Architecture" },
          { value: "ISR", label: "Catalogue" },
        ],
        client: true,
        accent: "#a855f7",
      },
      {
        slug: "shopping-cart-ts",
        title: "ShoppingCart",
        subtitle: "Modern shopping cart in TypeScript",
        type: "Front-End · Open Source",
        description:
          "Lightweight, responsive shopping cart built with strict TypeScript, Webpack and Bootstrap 5 — add/remove products, update quantities and dynamic totals with a modular architecture.",
        image: "/images/projects/shopping-cart.jpg",
        stack: ["TypeScript", "Webpack", "Bootstrap 5", "ESLint + Prettier"],
        metrics: [],
        github: "https://github.com/rezaian-dev/shopping-cart-ts",
        accent: "#0ea5e9",
      },
    ],
  },
  books: {
    eyebrow: "OPEN SOURCE · PERSIAN HANDBOOKS",
    title: "Three Persian handbooks for developers",
    description: "Project-based guides focused on mental models, behaviour analysis and technical decision-making — free and open source.",
    items: [
      {
        title: "JavaScript ES2025 — Persian Guide",
        subtitle: "From the language's mental model to production-ready architecture",
        chapters: "38 chapters",
        blur: "js-guide",
        image: "/images/projects/js-guide.jpg",
        read: "https://rezaian-dev.github.io/javascript-persian-guide/",
        github: "https://github.com/rezaian-dev/javascript-persian-guide",
        accent: "#facc15",
      },
      {
        title: "React 19.2 — Persian Guide",
        subtitle: "From the first component to UI architecture in production",
        chapters: "37 chapters",
        blur: "react-guide",
        image: "/images/projects/react-guide.jpg",
        read: "https://rezaian-dev.github.io/react-19-persian-guide/",
        github: "https://github.com/rezaian-dev/react-19-persian-guide",
        accent: "#22d3ee",
      },
      {
        title: "Next.js 16 — Persian Guide",
        subtitle: "From App Router and Server Components to architecture and deployment",
        chapters: "37 chapters",
        blur: "next-guide",
        image: "/images/projects/next-guide.jpg",
        read: "https://rezaian-dev.github.io/nextjs-16-persian-guide/",
        github: "https://github.com/rezaian-dev/nextjs-16-persian-guide",
        accent: "#e2e8f0",
      },
    ],
  },
  skills: {
    eyebrow: "SKILLS",
    title: "Toolbox",
    description: "The tools I ship products with every day — from the UI down to the data layer.",
    groups: fa.skills.groups,
  },
  highlights: {
    eyebrow: "TECHNICAL HIGHLIGHTS",
    title: "Technical Highlights",
    description: "A few real problems I've solved in shipped products.",
    items: [
      {
        icon: "calendar",
        project: "Doctor Booking",
        title: "Jalali-calendar scheduling with precise slots",
        text: "Date/time handling on the Jalali calendar (jalaali-js), reading Tehran wall-clock time independent of the server timezone so slots never drift; a “one active appointment per day” rule per user.",
      },
      {
        icon: "shield",
        project: "Doctor Booking",
        title: "Authentication & security hardening",
        text: "JWT on httpOnly cookies with admin/user roles and bcrypt password hashing; hashed OTP codes with timing-safe comparison, throttling and Redis-backed brute-force protection.",
      },
      {
        icon: "zap",
        project: "Doctor Booking",
        title: "Performance & SEO engineering",
        text: "Multi-layer caching with revalidateTag and Upstash Redis, next/image optimisation and dynamic code-splitting; dynamic metadata, dedicated sitemap/robots and ISR.",
      },
      {
        icon: "layers",
        project: "Saghfinoo",
        title: "Scalable front-end architecture",
        text: "Repeated logic extracted into 17 custom hooks (filters, forms, validation, OTP), optimised rendering with memoization across 100+ call sites and 107 components organised into logical domains.",
      },
    ],
  },
  contact: {
    eyebrow: "CONTACT",
    titleA: "Let's build something that",
    titleB: "actually works.",
    text: "Open to remote and on-site roles. If you need a front-end engineer focused on quality, performance and real user experience, I'd love to talk.",
    channels: {
      email: "Email",
      phone: "Phone",
      telegram: "Telegram",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    phoneDisplay: "+98 901 810 6646",
  },
};

const dictionaries: Record<Locale, Content> = { fa, en };

export function getContent(locale: Locale): Content {
  return dictionaries[locale] ?? fa;
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
