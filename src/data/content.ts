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
  /** 📐 Intrinsic size so the cover keeps its own aspect ratio */
  size: { w: number; h: number };
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
    tagline: "کد تمیز می‌نویسم، محصول واقعی می‌سازم و کیفیتش را اندازه می‌گیرم.",
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
      "با React و Next.js محصول واقعی می‌سازم؛ از آن‌هایی که کاربر واقعی دارد، سریع بالا می‌آید و نگهداری‌اش عذاب نیست. کد تمیز، Performance و چالش‌های خاصِ وب فارسی، دقیقاً همان‌جایی است که دوست دارم باشم.",
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
      "حدود سه سال است فرانت‌اند می‌نویسم و بیشترِ این مدت را با React، Next.js و TypeScript گذرانده‌ام. چیزی که بیشتر از همه دوستش دارم، لحظه‌ای است که یک ایده تبدیل می‌شود به محصولی که آدم‌های واقعی هر روز از آن استفاده می‌کنند — مثل پلتفرم نوبت‌دهی پزشکی که از احراز هویت تا کش و تست را خودم بالا آوردم، یا سامانهٔ املاکی با نقشهٔ تعاملی که با بزرگ‌شدنش خم به ابرو نیاورد.",
      "به جزئیات حساسم: تقویم شمسی که یک روز جابه‌جا نشود، رابط RTL که همه‌جایش درست بنشیند، و صفحه‌ای که قبل از پلک‌زدن کاربر لود شده باشد. SEO، Performance و دسترس‌پذیری برایم آپشن نیستند؛ بخشی از تعریفِ «تمام‌شده» هستند.",
    ],
    quote: "وصلهٔ موقت نمی‌زنم؛ می‌روم سراغ ریشهٔ مشکل.",
    focus: { title: "حوزه‌های تمرکز", items: ["React Server Components", "Performance", "معماری مقیاس‌پذیر", "SEO", "DX"] },
    languages: [
      { name: "فارسی", level: "زبان مادری" },
      { name: "English", level: "متوسط (B1)" },
    ],
    lighthouse: { eyebrow: "LIGHTHOUSE", title: "امتیاز دکتر رزرو در Google Lighthouse" },
    principles: [
      { title: "Type-safe از سر تا ته", text: "TypeScript strict و Zod در مرز داده؛ باگ‌ها قبل از اجرا گیر می‌افتند" },
      { title: "کد تمیز و کم‌حرف", text: "خوانا و قابل نگهداری؛ بدون پیچیدگی‌ای که کسی نخواسته" },
      { title: "اسکوپ حداقلی", text: "فقط چیزی که محصول واقعاً لازم دارد — نه یک قدم بیشتر" },
      { title: "کیفیت قابل اندازه‌گیری", text: "Lighthouse، تست خودکار و a11y؛ حس خوب کافی نیست، عدد می‌خواهیم" },
    ],
  },
  projects: {
    eyebrow: "SELECTED WORK",
    title: "پروژه‌های منتخب",
    description: "چند کاری که از ایده تا دیپلوی خودم جلو بردم — نه دمو، نه قالب آماده.",
    items: [
      {
        slug: "doctor-booking",
        title: "دکتر رزرو",
        subtitle: "پلتفرم نوبت‌دهی آنلاین پزشک",
        type: "Full-Stack · Production",
        description:
          "یک پلتفرم کامل نوبت‌دهی که کاربر در آن پزشک پیدا می‌کند، با تقویم شمسی نوبت می‌گیرد، نظر می‌دهد و مقاله می‌خواند — و ادمین همه‌چیز را از یک پنل مدیریت می‌کند. پشت صحنه: ۹ مدل Mongoose، ۲۰ اسکیمای Zod، احراز هویت JWT روی httpOnly cookie و کش چندلایه با Upstash Redis. مسیرهای حساس هم با Playwright تست شده‌اند.",
        image: "/images/projects/doctor-booking.jpg",
        size: { w: 1200, h: 800 },
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
          "یک SPA املاک که از روز اول برای بزرگ‌شدن طراحی شد: جست‌وجوی پیشرفته با فیلتر منطقه، نوع، قیمت و متراژ؛ ثبت آگهی چندمرحله‌ای؛ و نقشهٔ تعاملی Leaflet که می‌شود محله‌به‌محله در آن گشت. منطق تکراری را در ۱۷ هوک سفارشی جمع کردم و با memoization در بیش از ۱۰۰ نقطه، رندرها را سبک نگه داشتم.",
        image: "/images/projects/saghfinoo.jpg",
        size: { w: 1536, h: 1024 },
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
          "برای یک آتلیهٔ پوشاک کودک، فروشگاهی ساختم که هم ویترین شیکی دارد، هم حساب کاربری مشتری و هم کنسول مدیریت. Server Components پیش‌فرض است، کاتالوگ با ISR سرو می‌شود و Better Auth حساب‌ها را امن نگه می‌دارد. جزئیات خوش‌دست: قفل موجودی هنگام تسویه تا دو نفر آخرین سایز را هم‌زمان نخرند، کوپن با انقضای شمسی و پروِ مجازی لباس.",
        image: "/images/projects/malli-kids.jpg",
        size: { w: 1200, h: 670 },
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
          "یک سبد خرید سبک و تمیز که برای تمرین TypeScript strict شروع شد و به یک معماری ماژولار مرتب رسید: افزودن و حذف محصول، تغییر تعداد و محاسبهٔ لحظه‌ای مجموع — با Webpack و Bootstrap 5.",
        image: "/images/projects/shopping-cart.jpg",
        size: { w: 1536, h: 1024 },
        stack: ["TypeScript", "Webpack", "Bootstrap 5", "ESLint + Prettier"],
        metrics: [],
        github: "https://github.com/rezaian-dev/shopping-cart-ts",
        accent: "#0ea5e9",
      },
    ] as Project[],
  },
  books: {
    eyebrow: "OPEN SOURCE · PERSIAN HANDBOOKS",
    title: "کتاب‌هایی که دوست داشتم زودتر خوانده باشم",
    description: "سه راهنمای فارسی که نوشتم چون خودم دلم می‌خواست چنین منابعی وجود داشته باشد: پروژه‌محور، با تمرکز بر مدل ذهنی و «چرا»ها، نه فقط «چطور»ها. رایگان و متن‌باز.",
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
    description: "ابزارهایی که هر روز دستم است — از پیکسل‌های رابط کاربری تا لایهٔ داده.",
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
    description: "چند مسئلهٔ واقعی که سر راهم سبز شد و راه‌حلی که برایش پیدا کردم.",
    items: [
      {
        icon: "calendar",
        project: "دکتر رزرو",
        title: "رزرو نوبت با تقویم شمسی و زمان‌بندی دقیق",
        text: "تاریخ و زمان روی تقویم جلالی (jalaali-js) می‌چرخد و ساعت تهران مستقل از timezone سرور خوانده می‌شود؛ نتیجه اینکه اسلات‌ها هیچ‌وقت یک روز این‌ور و آن‌ور نمی‌شوند. هر کاربر هم فقط یک نوبت فعال در روز دارد.",
      },
      {
        icon: "shield",
        project: "دکتر رزرو",
        title: "احراز هویت و سخت‌سازی امنیتی",
        text: "JWT روی httpOnly cookie با نقش‌های admin/user و هش bcrypt؛ کدهای OTP هش می‌شوند، با مقایسهٔ timing-safe بررسی می‌شوند و Redis جلوی brute-force را می‌گیرد.",
      },
      {
        icon: "zap",
        project: "دکتر رزرو",
        title: "مهندسی Performance و SEO",
        text: "کش چندلایه با revalidateTag و Upstash Redis، تصاویر با next/image و code-splitting داینامیک؛ متادیتای داینامیک، sitemap و robots اختصاصی و ISR — حاصلش امتیاز ۱۰۰ SEO در Lighthouse.",
      },
      {
        icon: "layers",
        project: "سقفینو",
        title: "معماری فرانت‌اند مقیاس‌پذیر",
        text: "منطق تکراریِ فرم، فیلتر، اعتبارسنجی و OTP را در ۱۷ هوک سفارشی جمع کردم، ۱۰۷ کامپوننت را در دامنه‌های منطقی چیدم و با memoization در ۱۰۰+ نقطه، رندرها را زیر کنترل نگه داشتم.",
      },
    ],
  },
  contact: {
    eyebrow: "CONTACT",
    titleA: "بیایید چیزی بسازیم که",
    titleB: "واقعاً کار کند.",
    text: "برای همکاری ریموت یا حضوری آماده‌ام. اگر دنبال کسی هستید که هم به پیکسل اهمیت بدهد، هم به Performance و هم به کاربر فارسی‌زبان، خوشحال می‌شوم گپ بزنیم.",
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
    tagline: "I write clean code, ship real products, and measure the quality.",
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
      "I build real products with React and Next.js — the kind with real users, fast loads and codebases that stay pleasant to maintain. Clean code, performance and the quirks of the Persian web are exactly where I like to be.",
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
      "I've spent the last three-ish years writing front-end code, most of it in React, Next.js and TypeScript. My favourite moment is when an idea turns into something real people use every day — like the medical booking platform I took from auth to caching to tests, or the real-estate app with an interactive map that kept its cool as it grew.",
      "I care about the details: a Jalali calendar that never drifts by a day, an RTL layout that sits right everywhere, a page that's loaded before the user blinks. SEO, performance and accessibility aren't optional extras for me — they're part of what \"done\" means.",
    ],
    quote: "No quick patches — I go after the root cause.",
    focus: { title: "Focus areas", items: ["React Server Components", "Performance", "Scalable Architecture", "SEO", "DX"] },
    languages: [
      { name: "Persian", level: "Native" },
      { name: "English", level: "Intermediate (B1)" },
    ],
    lighthouse: { eyebrow: "LIGHTHOUSE", title: "Doctor Booking on Google Lighthouse" },
    principles: [
      { title: "Type-safe end to end", text: "Strict TypeScript and Zod at the data boundary; bugs get caught before runtime" },
      { title: "Clean, quiet code", text: "Readable and maintainable, without complexity nobody asked for" },
      { title: "Minimal scope", text: "Only what the product truly needs — not one step more" },
      { title: "Measurable quality", text: "Lighthouse, automated tests and a11y; a good feeling isn't enough, we want numbers" },
    ],
  },
  projects: {
    eyebrow: "SELECTED WORK",
    title: "Selected Projects",
    description: "A few things I've taken from idea to deployment myself — no demos, no templates.",
    items: [
      {
        slug: "doctor-booking",
        title: "Doctor Booking",
        subtitle: "Online medical appointment platform",
        type: "Full-Stack · Production",
        description:
          "A complete booking platform where users find a doctor, book with the Jalali calendar, leave reviews and read articles — while admins run everything from one panel. Under the hood: 9 Mongoose models, 20 Zod schemas, JWT auth on httpOnly cookies and multi-layer caching with Upstash Redis. Every sensitive flow is covered by Playwright.",
        image: "/images/projects/doctor-booking.jpg",
        size: { w: 1200, h: 800 },
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
          "A real-estate SPA designed to grow from day one: advanced search by district, type, price and area; multi-step listing creation; and an interactive Leaflet map you can browse neighbourhood by neighbourhood. Repeated logic lives in 17 custom hooks, and memoization across 100+ call sites keeps renders light.",
        image: "/images/projects/saghfinoo.jpg",
        size: { w: 1536, h: 1024 },
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
          "For a children's clothing atelier, I built a store with a polished storefront, customer accounts and an admin console. Server Components by default, an ISR-served catalogue and Better Auth keeping accounts safe. The thoughtful bits: stock locking at checkout so two people can't buy the last size at once, Jalali-expiring coupons and a virtual try-on.",
        image: "/images/projects/malli-kids.jpg",
        size: { w: 1200, h: 670 },
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
          "A light, tidy shopping cart that started as strict-TypeScript practice and ended up with a neat modular architecture: add and remove products, change quantities and watch totals update instantly — built with Webpack and Bootstrap 5.",
        image: "/images/projects/shopping-cart.jpg",
        size: { w: 1536, h: 1024 },
        stack: ["TypeScript", "Webpack", "Bootstrap 5", "ESLint + Prettier"],
        metrics: [],
        github: "https://github.com/rezaian-dev/shopping-cart-ts",
        accent: "#0ea5e9",
      },
    ],
  },
  books: {
    eyebrow: "OPEN SOURCE · PERSIAN HANDBOOKS",
    title: "The handbooks I wish I'd had earlier",
    description: "Three Persian guides I wrote because I wished they existed: project-based, focused on mental models and the \"why\", not just the \"how\". Free and open source.",
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
    description: "The tools I reach for every day — from UI pixels down to the data layer.",
    groups: fa.skills.groups,
  },
  highlights: {
    eyebrow: "TECHNICAL HIGHLIGHTS",
    title: "Technical Highlights",
    description: "A few real problems that got in my way, and how I solved them.",
    items: [
      {
        icon: "calendar",
        project: "Doctor Booking",
        title: "Jalali-calendar scheduling with precise slots",
        text: "Dates run on the Jalali calendar (jalaali-js) and Tehran wall-clock time is read independently of the server timezone — so slots never drift by a day. Each user also gets exactly one active appointment per day.",
      },
      {
        icon: "shield",
        project: "Doctor Booking",
        title: "Authentication & security hardening",
        text: "JWT on httpOnly cookies with admin/user roles and bcrypt hashing; OTP codes are hashed, compared timing-safely, and Redis keeps brute-force attempts out.",
      },
      {
        icon: "zap",
        project: "Doctor Booking",
        title: "Performance & SEO engineering",
        text: "Multi-layer caching with revalidateTag and Upstash Redis, next/image and dynamic code-splitting; dynamic metadata, dedicated sitemap/robots and ISR — good for a perfect 100 SEO score in Lighthouse.",
      },
      {
        icon: "layers",
        project: "Saghfinoo",
        title: "Scalable front-end architecture",
        text: "Form, filter, validation and OTP logic gathered into 17 custom hooks, 107 components organised into logical domains, and memoization across 100+ call sites keeping renders in check.",
      },
    ],
  },
  contact: {
    eyebrow: "CONTACT",
    titleA: "Let's build something that",
    titleB: "actually works.",
    text: "Open to remote and on-site roles. If you're looking for someone who cares about the pixels, the performance and the Persian-speaking user in equal measure, I'd love to chat.",
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
