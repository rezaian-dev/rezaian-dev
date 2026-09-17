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
  blur: "js-guide" | "react-guide" | "next-guide" | "git-guide";
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
    liveWebsite: "وب‌سایت زنده",
    readOnline: "مطالعهٔ آنلاین",
    clientProject: "پروژهٔ کارفرما",
    privateSource: "سورس‌کد این پروژه طبق قرارداد با کارفرما خصوصیه.",
    sendEmail: "ارسال ایمیل",
    theme: "تغییر تم",
    language: "English",
    menu: "منو",
    scroll: "بریم پایین",
  },
  footer: {
    tagline: "کد تمیز می‌نویسم، محصول واقعی می‌سازم و کیفیتش رو با عدد نشون می‌دم.",
    navTitle: "میان‌بُر",
    connectTitle: "در تماس باشیم",
    status: "آمادهٔ همکاری",
    localTime: "ساعت تهران",
    backToTop: "بازگشت به بالا",
    rights: "همهٔ حقوق محفوظه.",
    crafted: "با حوصله و دقت، توی کرج طراحی و کدنویسی شده",
  },
  nav: [
    { href: "#about", label: "درباره" },
    { href: "#projects", label: "پروژه‌ها" },
    { href: "#work", label: "نحوه کار" },
    { href: "#books", label: "کتاب‌ها" },
    { href: "#skills", label: "مهارت‌ها" },
    { href: "#contact", label: "تماس" },
  ],
  hero: {
    available: "آمادهٔ همکاری — ریموت یا حضوری",
    greeting: "سلام، من",
    name: "محمدرضا رضائیان",
    suffix: "هستم.",
    role: "Front-End Engineer",
    roleSub: "React & Next.js",
    tagline:
      "با React و Next.js محصول واقعی می‌سازم؛ از اون‌هایی که کاربر واقعی داره، سریع بالا می‌آد و نگهداریش کابوس نیست. کد تمیز، Performance و چالش‌های خاص وب فارسی دقیقاً همون‌جاییه که دوست دارم باشم.",
    location: "کرج · ریموت یا حضوری",
    floatA: { value: "100", label: "امتیاز SEO · Lighthouse" },
    floatB: { value: "۳+", label: "سال تجربهٔ واقعی" },
    stats: [
      { value: "۳+", label: "سال تجربه" },
      { value: "۳", label: "محصول روی هوا" },
      { value: "۱۰۰", label: "امتیاز SEO" },
      { value: "۴", label: "کتاب فنی فارسی" },
    ],
  },
  about: {
    eyebrow: "ABOUT",
    title: "مهندسی، همون‌طور که باید.",
    paragraphs: [
      "حدود سه ساله فرانت‌اند می‌نویسم و بیشترِ این مدت رو با React، Next.js و TypeScript گذروندم. چیزی که از همه بیشتر دوستش دارم، اون لحظه‌ایه که یه ایده تبدیل می‌شه به محصولی که آدم‌های واقعی هر روز باهاش کار می‌کنن — مثل پلتفرم نوبت‌دهی پزشکی که از احراز هویت تا کش و تست رو خودم بالا آوردم، یا سامانهٔ املاکی با نقشهٔ تعاملی که هرچی بزرگ‌تر شد، خم به ابرو نیاورد.",
      "روی جزئیات حساسم: تقویم شمسی‌ای که یه روز جابه‌جا نشه، رابط RTL‌ای که همه‌جاش درست بشینه، و صفحه‌ای که قبل از پلک‌زدن کاربر لود شده باشه. SEO، Performance و دسترس‌پذیری برام آپشن نیستن؛ بخشی از تعریف «تموم‌شده» هستن.",
    ],
    quote: "کارِ خوب اتفاقی نیست؛ حاصلِ *وسواس روی جزئیاتیه که هیچ‌کس نمی‌بینه* — تا وقتی که نباشن.",
    focus: { title: "حوزه‌های تمرکز", items: ["React Server Components", "Performance", "معماری مقیاس‌پذیر", "SEO", "DX"] },
    languages: [
      { name: "فارسی", level: "زبان مادری" },
      { name: "English", level: "متوسط (B1)" },
    ],
    lighthouse: { eyebrow: "LIGHTHOUSE", title: "امتیاز دکتر رزرو در Google Lighthouse" },
    principles: [
      { title: "Type-safe از سر تا ته", text: "TypeScript strict و Zod روی مرز داده؛ باگ‌ها قبل از اجرا گیر می‌افتن" },
      { title: "کد تمیز و کم‌حرف", text: "خوانا و قابل نگهداری؛ بدون پیچیدگی‌ای که هیچ‌کس نخواسته" },
      { title: "اسکوپ حداقلی", text: "فقط چیزی که محصول واقعاً لازم داره — نه یه قدم بیشتر" },
      { title: "کیفیت قابل اندازه‌گیری", text: "Lighthouse، تست خودکار و a11y؛ حس خوب کافی نیست، عدد می‌خوایم" },
    ],
  },
  projects: {
    eyebrow: "SELECTED WORK",
    title: "پروژه‌های منتخب",
    description: "چند تا کار که از ایده تا دیپلوی خودم جلو بردم — نه دمو، نه قالب آماده.",
    items: [
      {
        slug: "doctor-booking",
        title: "دکتر رزرو",
        subtitle: "پلتفرم نوبت‌دهی آنلاین پزشک",
        type: "Full-Stack · Production",
        description:
          "یه پلتفرم کامل نوبت‌دهی که کاربر توش پزشک پیدا می‌کنه، با تقویم شمسی نوبت می‌گیره، نظر می‌ده و مقاله می‌خونه — و ادمین همه‌چیز رو از یه پنل مدیریت می‌کنه. پشت صحنه: ۹ مدل Mongoose، ۲۰ اسکیمای Zod، احراز هویت JWT روی httpOnly cookie و کش چندلایه با Upstash Redis. مسیرهای حساس هم با Playwright تست شدن.",
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
          "یه SPA املاک که از روز اول برای بزرگ‌شدن طراحی شد: جست‌وجوی پیشرفته با فیلتر منطقه، نوع، قیمت و متراژ؛ ثبت آگهی چندمرحله‌ای؛ و نقشهٔ تعاملی Leaflet که می‌شه محله‌به‌محله توش گشت. منطق تکراری رو توی ۱۷ هوک سفارشی جمع کردم و با memoization توی بیشتر از ۱۰۰ نقطه، رندرها رو سبک نگه داشتم.",
        image: "/images/projects/saghfinoo.jpg",
        size: { w: 1400, h: 933 },
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
          "برای یه آتلیهٔ پوشاک کودک، فروشگاهی ساختم که هم ویترین شیکی داره، هم حساب کاربری مشتری و هم کنسول مدیریت. App Router و Server Components پیش‌فرضه، کاتالوگ با ISR سرو می‌شه و Better Auth حساب‌ها رو امن نگه می‌داره. سبد، موجودی، کوپن و سفارش روی MongoDB می‌شینن و با Zod چک می‌شن؛ موجودی موقع تسویه قفل می‌شه تا دو نفر آخرین سایز رو هم‌زمان نخرن. استیت کلاینت با Zustand و مقدار اولیه‌ٔ SSR-aware بالا می‌آد، OTP و Redis جلوی سوءاستفاده رو می‌گیرن. جزئیات خوش‌دستش: کوپن با انقضای شمسی و پروِ مجازی لباس.",
        image: "/images/projects/malli-kids.jpg",
        size: { w: 1200, h: 670 },
        stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "MongoDB", "Redis", "Better Auth", "Zustand", "Zod", "Motion"],
        metrics: [
          { value: "۳", label: "سطح دسترسی" },
          { value: "RSC", label: "معماری" },
          { value: "ISR", label: "کاتالوگ" },
        ],
        demo: "https://mallikids.ir",
        client: true,
        accent: "#a855f7",
      },
      {
        slug: "shopping-cart-ts",
        title: "ShoppingCart",
        subtitle: "سبد خرید مدرن با TypeScript",
        type: "Front-End · Open Source",
        description:
          "یه سبد خرید سبک و تمیز که برای تمرین TypeScript strict شروع شد و به یه معماری ماژولار مرتب رسید: اضافه و حذف محصول، تغییر تعداد و محاسبهٔ لحظه‌ای جمع کل — با Webpack و Bootstrap 5.",
        image: "/images/projects/shopping-cart.jpg",
        size: { w: 1400, h: 933 },
        stack: ["TypeScript", "Webpack", "Bootstrap 5", "ESLint + Prettier"],
        metrics: [],
        github: "https://github.com/rezaian-dev/shopping-cart-ts",
        accent: "#0ea5e9",
      },
    ] as Project[],
  },
  books: {
    eyebrow: "OPEN SOURCE · PERSIAN HANDBOOKS",
    title: "کتاب‌هایی که کاش زودتر داشتم",
    description: "چهار تا راهنمای فارسی که نوشتم چون خودم دلم می‌خواست همچین منابعی وجود داشته باشه: پروژه‌محور، با تمرکز روی مدل ذهنی و «چرا»ها، نه فقط «چطور»ها. رایگان و متن‌باز.",
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
      {
        title: "مرجع جامع Git و GitHub ۲۰۲۶",
        subtitle: "از صفر تا سطح حرفه‌ای — یک کتاب، دو مسیر: ترمینال و VS Code",
        chapters: "۳۶ فصل",
        blur: "git-guide",
        image: "/images/projects/git-guide.jpg",
        read: "https://rezaian-dev.github.io/git-github-persian-guide/",
        github: "https://github.com/rezaian-dev/git-github-persian-guide",
        accent: "#f97316",
      },
    ] as Book[],
  },
  skills: {
    eyebrow: "SKILLS",
    title: "جعبه‌ابزار",
    description: "ابزارهایی که هر روز دستمه — از پیکسل‌های رابط کاربری تا لایهٔ داده.",
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
    description: "چند تا مسئلهٔ واقعی که سر راهم سبز شد و راه‌حلی که براش پیدا کردم.",
    items: [
      {
        icon: "calendar",
        project: "دکتر رزرو",
        title: "رزرو نوبت با تقویم شمسی و زمان‌بندی دقیق",
        text: "تاریخ و زمان روی تقویم جلالی (jalaali-js) می‌چرخه و ساعت تهران مستقل از timezone سرور خونده می‌شه؛ نتیجه اینکه اسلات‌ها هیچ‌وقت یه روز این‌ور و اون‌ور نمی‌شن. هر کاربر هم فقط یه نوبت فعال در روز داره.",
      },
      {
        icon: "shield",
        project: "دکتر رزرو",
        title: "احراز هویت و سخت‌سازی امنیتی",
        text: "JWT روی httpOnly cookie با نقش‌های admin/user و هش bcrypt؛ کدهای OTP هش می‌شن، با مقایسهٔ timing-safe چک می‌شن و Redis جلوی brute-force رو می‌گیره.",
      },
      {
        icon: "zap",
        project: "دکتر رزرو",
        title: "مهندسی Performance و SEO",
        text: "کش چندلایه با revalidateTag و Upstash Redis، تصاویر با next/image و code-splitting داینامیک؛ متادیتای داینامیک، sitemap و robots اختصاصی و ISR — نتیجه‌ش امتیاز ۱۰۰ SEO توی Lighthouse.",
      },
      {
        icon: "layers",
        project: "سقفینو",
        title: "معماری فرانت‌اند مقیاس‌پذیر",
        text: "منطق تکراریِ فرم، فیلتر، اعتبارسنجی و OTP رو توی ۱۷ هوک سفارشی جمع کردم، ۱۰۷ کامپوننت رو توی دامنه‌های منطقی چیدم و با memoization توی ۱۰۰+ نقطه، رندرها رو زیر کنترل نگه داشتم.",
      },
    ],
  },
  contact: {
    eyebrow: "CONTACT",
    titleA: "بیاین یه چیزی بسازیم که",
    titleB: "واقعاً کار کنه.",
    text: "برای همکاری ریموت یا حضوری آماده‌م. اگه دنبال کسی هستین که هم به پیکسل اهمیت بده، هم به Performance و هم به کاربر فارسی‌زبان، خوشحال می‌شم گپ بزنیم.",
    channels: {
      email: "ایمیل",
      phone: "تلفن",
      telegram: "تلگرام",
      linkedin: "لینکدین",
      github: "گیت‌هاب",
    },
    phoneDisplay: "۰۹۰۱ ۸۱۰ ۶۶۴۶",
  },
  work: {
    eyebrow: "HOW I WORK",
    title: "این‌طوری کار می‌کنم.",
    description: "ابزارها مهم‌اند؛ چیزی که تکرار می‌شه، عادت‌های کاریه — نه شعار.",
    items: [
      {
        title: "اول علت، بعد وصله",
        text: "وقتی یه چیزی تو UI می‌پره، معمولاً قبل از عوض‌کردن ظاهر یا گذاشتن workaround سعی می‌کنم بفهمم مشکل از رندرِ، از state، از تایمینگ اسکرول یا از معماری. اسکرول منوی موبایل همین سایت خراب شده بود؛ به‌جای یه offset الکی، content-visibility رو برداشتم و بعد از باز شدن قفل اسکرول، با جای واقعی بخش پریدم.",
      },
      {
        title: "منبع حقیقت را پیدا می‌کنم",
        text: "تاریخ نوبت نباید به timezone سرور بند باشد؛ آخرین سایز موجودی هم نباید روی خوش‌بینی کلاینت باشد. معمولاً می‌گردم ببینم حقیقت کجاست — ساعت تهران، ردیف موجودی، یا یک فایل محتوا — و همان را منبع می‌گذارم.",
      },
      {
        title: "اندازه می‌گیرم، بعد نگه می‌دارم یا حذف می‌کنم",
        text: "حس خوب کافی نیست. Motion و Radix را آوردم؛ بعد از اندازه‌گیری از باندل برداشتم و انیمیشن را CSS کردم. امتیاز Lighthouse دکتر رزرو را نگه می‌دارم چون بدون عدد، «سریعه» فقط یه ادعاست.",
      },
      {
        title: "محدودیت را می‌خوانم، breakpoint جدید نمی‌سازم",
        text: "اگر صفحه در ۳۲۰ پیکسل می‌شکند، اول می‌پرسم مشکل از عرض ذاتی است، از wrap، از padding یا از دکمه‌ای که nowrap شده. دکمه‌های CTA و کاشی‌های فوتر همین‌جا پیکسل‌به‌پیکسل وسط شدن — نه با یه media query اضافه.",
      },
    ],
  },
  strengths: {
    eyebrow: "STRENGTHS",
    title: "چیزی که تو کار دیده می‌شه.",
    items: [
      {
        title: "تشخیص لایهٔ مشکل",
        text: "جزئیات برایم یه پاسِ بصری نیست. وقتی RTL یا ۳۲۰ پیکسل به هم می‌ریزه، اول لایه را جدا می‌کنم: سایز، wrap، constraint یا اسکرول. بعد دست می‌برم.",
      },
      {
        title: "مالکیت کل مسیر",
        text: "فایلِ دارای error معمولاً کل داستان نیست. منوی موبایل باگِ کلیک نبود؛ قفل اسکرول هنوز برداشته نشده بود. جریان را تا مرز واقعی‌اش دنبال می‌کنم.",
      },
      {
        title: "کیفیتی که بشود اندازه گرفت",
        text: "SEO صد، Playwright روی مسیرهای حساس، Zod روی مرز داده. اگر نشود اندازه گرفت، برایم هنوز تمام نشده.",
      },
      {
        title: "وب فارسی را جدی می‌گیرم",
        text: "تقویم جلالی که یک روز جابه‌جا نشه، کوپن با انقضای شمسی، RTL که همه‌جاش درست بشینه. این‌ها لبه‌کاری نیستن؛ خودِ محصول‌اند.",
      },
    ],
  },
  growth: {
    eyebrow: "WHERE I'M IMPROVING",
    title: "جایی که هنوز روی خودم کار می‌کنم.",
    items: [
      {
        title: "مرز خراب و فقط دقیق‌تر",
        text: "گاهی روی جزئیاتی می‌مونم که می‌دونم می‌شه دقیق‌ترشان کرد — وسط‌چین یک کاشی، یک انیمیشن، یک جمله. دارم تمرین می‌کنم زودتر بپرسم: این واقعاً مشکل داره، یا فقط وسوسهٔ پولیش بیشتره؟",
      },
      {
        title: "وابستگی را قبل از ورود می‌سنجم",
        text: "Motion و Radix را اول اضافه کردم، بعد از روی باندل برداشتم. درسش این بود که سوال «این لازم است؟» باید قبل از install بیاید، نه بعد از دیدن وزنش.",
      },
    ],
  },
  personality: {
    eyebrow: "WORKING PERSONALITY",
    title: "یک توصیف شخصی، نه یک تشخیص.",
    lead: "از نظر شخصی خودم را بیشتر نزدیک به INTJ می‌بینم؛ نه به‌عنوان یک برچسب قطعی، بلکه چون بعضی از الگوهای فکری و کاری این تیپ به سبک کار کردنم نزدیک‌اند.",
    traits: [
      "قبل از تغییر، ترجیح می‌دم سیستم را بخوانم.",
      "کار عمیق را دوست دارم — چهار handbook فارسی از همین‌جا آمده.",
      "معمولاً اول خودم تا ریشه می‌روم.",
      "به پیامد معماری فکر می‌کنم: قفل موجودی، استیت SSR-aware، timezone.",
      "کیفیت بلندمدت را به میان‌بر ترجیح می‌دم.",
    ],
  },
  softSkills: {
    eyebrow: "IN PRACTICE",
    title: "مهارت‌های نرم، همان‌طور که دیده می‌شوند.",
    items: [
      {
        title: "صورت‌بندی مسئله",
        text: "ترجیح می‌دم قبل از راه‌حل، مسئله را دقیق بنویسم — حتی در کامیت. «اسکرول بعد از unlock منو با offset اندازه‌گیری‌شده» یعنی همه دربارهٔ یک مشکل مشخص حرف می‌زنیم.",
      },
      {
        title: "مالکیت مسیر",
        text: "وقتی چیزی می‌شکنه، معمولاً فقط فایل error را باز نمی‌کنم. مسیر کامل را می‌روم تا مرز مشکل معلوم شود — از رندر تا data flow تا قفل اسکرول.",
      },
      {
        title: "یادگیری با مدل ذهنی",
        text: "برای یک فریم‌ورک بیشتر روی مدل ذهنی و trade-offش وقت می‌گذارم تا APIها. handbookهای فارسی را همین‌طور نوشتم: چرا این تصمیم، نه فقط چطور این هوک.",
      },
    ],
  },
  beyond: {
    eyebrow: "BEYOND THE CODE",
    title: "بیرون از کد",
    text: "بیشتر وقتم را یا صرف فهمیدن «چرا»ی یک مسئله می‌کنم، یا صرف نوشتنش به فارسی تا نفر بعدی کمتر سردرگم شود. محصول واقعی برای اکوسیستم RTL برایم از دموی زیبا جذاب‌تر است — و کیفیت را معمولاً جایی می‌سنجم که کسی نگاه نمی‌کند.",
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
    liveWebsite: "Live Website",
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
    { href: "#work", label: "How I work" },
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
      { value: "4", label: "Persian Tech Books" },
    ],
  },
  about: {
    eyebrow: "ABOUT",
    title: "Engineering, done right.",
    paragraphs: [
      "I've spent the last three-ish years writing front-end code, most of it in React, Next.js and TypeScript. My favourite moment is when an idea turns into something real people use every day — like the medical booking platform I took from auth to caching to tests, or the real-estate app with an interactive map that kept its cool as it grew.",
      "I care about the details: a Jalali calendar that never drifts by a day, an RTL layout that sits right everywhere, a page that's loaded before the user blinks. SEO, performance and accessibility aren't optional extras for me — they're part of what \"done\" means.",
    ],
    quote: "Good work isn't luck. It's *obsessing over the details nobody notices* — until they're missing.",
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
        size: { w: 1400, h: 933 },
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
          "For a children's clothing atelier, I built a store with a polished storefront, customer accounts and an admin console. App Router and Server Components by default, an ISR-served catalogue, Better Auth on accounts. Cart, inventory, coupons and orders live on MongoDB and get checked with Zod; stock locks at checkout so two people can't buy the last size at once. Client state comes up through Zustand with SSR-aware initial values, and OTP plus Redis keep abuse out. The thoughtful bits: Jalali-expiring coupons and a virtual try-on.",
        image: "/images/projects/malli-kids.jpg",
        size: { w: 1200, h: 670 },
        stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "MongoDB", "Redis", "Better Auth", "Zustand", "Zod", "Motion"],
        metrics: [
          { value: "3", label: "Access Tiers" },
          { value: "RSC", label: "Architecture" },
          { value: "ISR", label: "Catalogue" },
        ],
        demo: "https://mallikids.ir",
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
        size: { w: 1400, h: 933 },
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
    description: "Four Persian guides I wrote because I wished they existed: project-based, focused on mental models and the \"why\", not just the \"how\". Free and open source.",
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
      {
        title: "Git & GitHub 2026 — Persian Guide",
        subtitle: "From zero to pro — one book, two tracks: the terminal and VS Code",
        chapters: "36 chapters",
        blur: "git-guide",
        image: "/images/projects/git-guide.jpg",
        read: "https://rezaian-dev.github.io/git-github-persian-guide/",
        github: "https://github.com/rezaian-dev/git-github-persian-guide",
        accent: "#f97316",
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
  work: {
    eyebrow: "HOW I WORK",
    title: "This is how I actually work.",
    description: "Tools matter. What repeats is the working habits — not the slogans.",
    items: [
      {
        title: "Cause first, patch later",
        text: "When something jumps in the UI, I usually try to tell whether it's rendering, state, scroll timing or architecture — before I change how it looks. The mobile-menu scroll on this site was broken; instead of a magic offset, I dropped content-visibility and scrolled after the lock released, using the section's real position.",
      },
      {
        title: "Find the source of truth",
        text: "Appointment dates shouldn't depend on the server timezone. The last size in stock shouldn't depend on an optimistic client. I look for where the truth lives — Tehran wall-clock, the inventory row, a single content file — and I treat that as the source.",
      },
      {
        title: "Measure, then keep or cut",
        text: "A good feeling isn't enough. I brought in Motion and Radix, then took them out of the bundle after measuring, and moved the animation to CSS. I keep the Lighthouse numbers for Doctor Booking because \"it's fast\" without a number is just a claim.",
      },
      {
        title: "Read the constraint, don't add a breakpoint",
        text: "If a page breaks at 320px, I first ask whether it's intrinsic width, wrapping, padding, or a nowrap button. The CTA buttons and footer tiles here were pixel-centred that way — not by sprinkling another media query.",
      },
    ],
  },
  strengths: {
    eyebrow: "STRENGTHS",
    title: "What tends to show up in the work.",
    items: [
      {
        title: "Naming the layer",
        text: "Detail isn't a visual pass for me. When RTL or 320px falls apart, I separate the layer first: size, wrap, constraint, or scroll. Then I touch the code.",
      },
      {
        title: "Owning the whole path",
        text: "The file with the error is rarely the whole story. The mobile menu wasn't a click bug; the scroll lock hadn't been released yet. I follow the flow until the real boundary shows up.",
      },
      {
        title: "Quality I can measure",
        text: "SEO 100, Playwright on the sensitive paths, Zod at the data boundary. If I can't measure it, I don't really consider it done.",
      },
      {
        title: "Treating the Persian web as the product",
        text: "A Jalali calendar that doesn't drift, coupons that expire on a Shamsi date, RTL that sits right. These aren't extras. They're the work.",
      },
    ],
  },
  growth: {
    eyebrow: "WHERE I'M IMPROVING",
    title: "Things I'm still working on.",
    items: [
      {
        title: "Broken vs. just more polished",
        text: "I sometimes stay on details I know could be more precise — a tile's alignment, an animation, a sentence. What I'm practising is asking sooner: is this actually wrong, or am I just tempted to polish it further?",
      },
      {
        title: "Weighing a dependency before it lands",
        text: "I added Motion and Radix first, then took them out of the bundle. The lesson: \"do we need this?\" should come before install, not after I've seen the weight.",
      },
    ],
  },
  personality: {
    eyebrow: "WORKING PERSONALITY",
    title: "A self-description, not a diagnosis.",
    lead: "Personally I see myself as closer to INTJ — not as a hard label, but because some of that type's thinking and working patterns sit close to how I actually work.",
    traits: [
      "I like to understand the system before I change it.",
      "Deep work is where I'm happiest — the four Persian handbooks came from that.",
      "I usually try to get to the root on my own first.",
      "I think about architectural consequences: stock locks, SSR-aware state, timezones.",
      "I prefer long-term quality over a shortcut I'll pay for later.",
    ],
  },
  softSkills: {
    eyebrow: "IN PRACTICE",
    title: "Soft skills, as they show up.",
    items: [
      {
        title: "Framing the problem",
        text: "I'd rather name the problem precisely before offering a solution — even in commit messages. \"Scroll after the menu unlock, via a measured offset\" means we're all talking about the same bug.",
      },
      {
        title: "Owning the path",
        text: "When something breaks, I don't usually stop at the file with the error. I walk the whole flow until the real boundary is clear — render, data, or a scroll lock.",
      },
      {
        title: "Learning the model",
        text: "When I pick up a framework, I spend more time on its mental model and trade-offs than on its APIs. That's how I wrote the Persian handbooks: why this decision, not just how this hook.",
      },
    ],
  },
  beyond: {
    eyebrow: "BEYOND THE CODE",
    title: "Outside the editor",
    text: "A lot of my time goes into understanding why something works the way it does, or writing that down in Persian so the next person is less lost. Real products for an RTL ecosystem interest me more than a pretty demo — and I tend to measure quality in the places nobody's looking.",
  },
};

const dictionaries: Record<Locale, Content> = { fa, en };

export function getContent(locale: Locale): Content {
  return dictionaries[locale] ?? fa;
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
