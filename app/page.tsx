"use client";

import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  BookOpen,
  ArrowRight,
  ArrowUpRight,
  Activity,
  Zap,
  Cpu,
  Database,
  BarChart2,
  FolderTree,
  Terminal,
  ListChecks,
  HelpCircle,
  AtSign,
  LayoutDashboard,
  Coffee,
  Download,
  Sparkles,
  Repeat,
  Palette,
  Image as ImageIcon,
  Wand2,
  Search,
  UserSearch,
  Wrench,
  Upload,
  Copy,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Brand icon paths (used for platforms lucide doesn't ship natively) */
/* ------------------------------------------------------------------ */

const GITHUB_PATH =
  "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.955-.266 1.98-.399 3-.405 1.02.006 2.045.139 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12";

const TIKTOK_PATH =
  "M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z";

const INSTAGRAM_PATH =
  "M12 2.16c3.2 0 3.58.012 4.85.07 1.17.054 1.8.249 2.23.415.56.217.96.477 1.38.896.42.42.68.819.9 1.381.16.422.36 1.057.41 2.227.06 1.266.07 1.646.07 4.85s-.01 3.584-.07 4.85c-.05 1.17-.25 1.805-.41 2.227-.22.562-.48.96-.9 1.382-.42.419-.82.679-1.38.896-.43.164-1.06.36-2.23.413-1.27.057-1.65.07-4.85.07s-3.58-.013-4.85-.07c-1.17-.053-1.8-.249-2.23-.413-.56-.217-.96-.477-1.38-.896-.42-.422-.68-.82-.9-1.382-.16-.422-.36-1.057-.41-2.227-.06-1.266-.07-1.646-.07-4.85s.01-3.584.07-4.85c.05-1.17.25-1.805.41-2.227.22-.562.48-.96.9-1.381.42-.419.82-.679 1.38-.896.43-.166 1.06-.361 2.23-.415 1.27-.058 1.65-.07 4.85-.07M12 0C8.74 0 8.33.014 7.05.072 5.78.132 4.9.333 4.14.63c-.79.306-1.46.717-2.13 1.384S.94 3.35.63 4.14C.33 4.905.13 5.775.07 7.053.01 8.333 0 8.74 0 12s.01 3.667.07 4.947c.06 1.277.26 2.148.56 2.913.31.788.72 1.459 1.38 2.126.67.666 1.34 1.079 2.13 1.384.76.296 1.64.499 2.91.558C8.33 23.986 8.74 24 12 24s3.67-.014 4.95-.072c1.27-.06 2.15-.262 2.91-.558.79-.306 1.46-.718 2.13-1.384.67-.667 1.08-1.335 1.38-2.126.3-.765.5-1.636.56-2.913.06-1.28.07-1.687.07-4.947s-.01-3.667-.07-4.947c-.06-1.277-.26-2.149-.56-2.913-.3-.789-.71-1.459-1.38-2.126C21.32 1.347 20.65.935 19.86.63c-.76-.297-1.64-.499-2.91-.558C15.67.014 15.26 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8m6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88";

const TELEGRAM_PATH =
  "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z";

const WHATSAPP_PATH =
  "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413";

function BrandIcon({
  path,
  color = "#fff",
  size = 24,
}: {
  path: string;
  color?: string;
  size?: number;
}) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
      <path d={path} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Static data                                                        */
/* ------------------------------------------------------------------ */

const SIDEBAR_LINKS: { num: string; id: string; Icon: LucideIcon; label: string; dir: "left" | "right" }[] = [
  { num: "00", id: "dashboard", Icon: LayoutDashboard, label: "Dashboard", dir: "left" },
  { num: "01", id: "docs", Icon: FolderTree, label: "API Directory", dir: "right" },
  { num: "02", id: "integration", Icon: Terminal, label: "SDK Integration", dir: "left" },
  { num: "03", id: "status", Icon: ListChecks, label: "Status Code", dir: "right" },
  { num: "04", id: "faq", Icon: HelpCircle, label: "Pertanyaan Umum", dir: "left" },
  { num: "05", id: "social", Icon: AtSign, label: "Sosial Media", dir: "right" },
];

const CATEGORY_CARDS: { id: string; Icon: LucideIcon; title: string; desc: string; count: number }[] = [
  { id: "ai", Icon: Sparkles, title: "Ai", desc: "Chat & ringkasan teks lewat model AI.", count: 6 },
  { id: "converter", Icon: Repeat, title: "Converter", desc: "Konversi format file secara instan.", count: 8 },
  { id: "canvas", Icon: Palette, title: "Canvas", desc: "Edit & olah gambar berbasis canvas.", count: 4 },
  { id: "downloader", Icon: Download, title: "Downloader", desc: "Unduh media TikTok & Instagram lewat URL.", count: 12 },
  { id: "image", Icon: ImageIcon, title: "Image", desc: "Generate & olah gambar otomatis.", count: 7 },
  { id: "maker", Icon: Wand2, title: "Maker", desc: "Buat konten visual & teks kreatif.", count: 5 },
  { id: "search", Icon: Search, title: "Search", desc: "Cari konten YouTube & sumber lain.", count: 8 },
  { id: "stalk", Icon: UserSearch, title: "Stalk", desc: "Cari info profil media sosial.", count: 6 },
  { id: "tools", Icon: Wrench, title: "Tools", desc: "Penghapus background & utilitas file.", count: 10 },
  { id: "uploader", Icon: Upload, title: "Uploader", desc: "Upload file ke hosting sementara.", count: 4 },
];

const CHART_BARS = [
  { label: "Down", value: 5420, height: 90.3, variant: "orange" },
  { label: "Tools", value: 4510, height: 75.2, variant: "green" },
  { label: "Srch", value: 4050, height: 67.5, variant: "orange" },
  { label: "Img", value: 3780, height: 63, variant: "muted" },
  { label: "Ai", value: 3340, height: 55.7, variant: "orange" },
  { label: "Upl", value: 2960, height: 49.3, variant: "muted" },
  { label: "Conv", value: 2430, height: 40.5, variant: "orange" },
  { label: "Cnvs", value: 2120, height: 35.3, variant: "muted" },
  { label: "Stlk", value: 1860, height: 31, variant: "orange" },
  { label: "Mkr", value: 1540, height: 25.7, variant: "muted" },
] as const;

const STATUS_CODES = [
  { code: "200", name: "OK", desc: "Permintaan berhasil diproses, data dikembalikan sesuai response.", variant: "green" },
  { code: "400", name: "Bad Request", desc: "Parameter yang dikirim tidak valid, salah format, atau tidak lengkap.", variant: "orange" },
  { code: "403", name: "Forbidden", desc: "API key tidak valid, kedaluwarsa, atau tidak punya akses ke endpoint ini.", variant: "orange" },
  { code: "404", name: "Not Found", desc: "Endpoint yang diminta tidak ditemukan atau path salah ketik.", variant: "orange" },
  { code: "429", name: "Too Many Requests", desc: "Rate limit terlampaui — kurangi frekuensi request lalu coba lagi.", variant: "orange" },
  { code: "500", name: "Internal Server Error", desc: "Terjadi kesalahan pada server, coba lagi beberapa saat lagi.", variant: "red" },
] as const;

const FAQ_ITEMS = [
  { q: "Apa itu Manta'X?", a: "Engine REST API terdesentralisasi buat automasi — tinggal panggil endpoint plugin yang tersedia." },
  { q: "Bagaimana cara autentikasi?", a: "Sertakan header x-api-key di setiap request ke endpoint API." },
  { q: "Endpoint apa saja yang tersedia?", a: "Downloader, AI, Search, Tools, dan kategori lainnya — lihat halaman dokumentasi untuk daftar lengkapnya." },
  { q: "Apakah data saya aman?", a: "Request diproses langsung tanpa penyimpanan data pribadi jangka panjang." },
  { q: "Bagaimana kalau endpoint error?", a: "Response akan menyertakan status dan pesan error yang jelas untuk membantu debugging." },
];

const SOCIAL_CARDS = [
  {
    name: "GitHub",
    handle: "github.com/mantax-api",
    href: "https://github.com/mantax-api",
    accent: "#e6e6e6",
    accentSoft: "rgba(230,230,230,.16)",
    iconBg: "#24292e",
    icon: <BrandIcon path={GITHUB_PATH} color="#ffffff" size={24} />,
  },
  {
    name: "TikTok",
    handle: "@mantax.api",
    href: "https://tiktok.com/@mantax.api",
    accent: "#fe2c55",
    accentSoft: "rgba(254,44,85,.16)",
    iconBg: "#010101",
    icon: <BrandIcon path={TIKTOK_PATH} color="#ffffff" size={24} />,
  },
  {
    name: "Instagram",
    handle: "@mantax.api",
    href: "https://instagram.com/mantax.api",
    accent: "#e1306c",
    accentSoft: "rgba(225,48,108,.16)",
    iconBg: "linear-gradient(135deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)",
    icon: <BrandIcon path={INSTAGRAM_PATH} color="#ffffff" size={24} />,
  },
  {
    name: "Telegram",
    handle: "t.me/mantaxapi",
    href: "https://t.me/mantaxapi",
    accent: "#229ed9",
    accentSoft: "rgba(34,158,217,.16)",
    iconBg: "#229ed9",
    icon: <BrandIcon path={TELEGRAM_PATH} color="#ffffff" size={24} />,
  },
  {
    name: "WhatsApp",
    handle: "+62 812-3456-7890",
    href: "https://wa.me/6281234567890",
    accent: "#25d366",
    accentSoft: "rgba(37,211,102,.16)",
    iconBg: "#25d366",
    icon: <BrandIcon path={WHATSAPP_PATH} color="#ffffff" size={24} />,
    full: true,
  },
];

const CODE_SNIPPETS: Record<"javascript" | "python" | "curl", string> = {
  javascript: `const axios = require("axios");
const apiUrl = "https://api.fvckers.my.id/api/download/tiktok";

async function callMantaAPI() {
  try {
    const { data } = await axios.get(apiUrl, { params: { url: "link_data" } });
    console.log(data);
  } catch (err) { console.error(err); }
}
callMantaAPI();`,
  python: `import requests
api_url = "https://api.fvckers.my.id/api/download/tiktok"

response = requests.get(api_url, params={'url': 'link_data'})
print(response.json())`,
  curl: `curl --request GET \\
  --url 'https://api.fvckers.my.id/api/download/tiktok?url=link_data'`,
};

/* ------------------------------------------------------------------ */
/*  Small reusable pieces                                              */
/* ------------------------------------------------------------------ */

type Dir = "up" | "left" | "right" | "zoom" | "fade";

function Reveal({
  as: Tag = "div",
  dir = "up",
  group,
  className = "",
  style,
  children,
  id,
}: {
  as?: keyof JSX.IntrinsicElements;
  dir?: Dir;
  group?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  id?: string;
}) {
  const Comp = Tag as any;
  const dirAttr =
    dir === "up" ? "fade-up" : dir === "left" ? "fade-left" : dir === "right" ? "fade-right" : dir === "zoom" ? "zoom-in" : "fade";
  return (
    <Comp id={id} data-aos={dirAttr} data-aos-group={group} className={className} style={style}>
      {children}
    </Comp>
  );
}

function SectionHeading({
  Icon,
  sek,
  title,
  titleAccent,
}: {
  Icon: LucideIcon;
  sek: string;
  title: string;
  titleAccent: string;
}) {
  return (
    <Reveal dir="zoom" className="flex items-center gap-3 mb-5">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: "var(--orange-soft)", border: "1px solid var(--orange-bd)" }}
      >
        <Icon className="w-5 h-5" style={{ color: "var(--orange)" }} />
      </div>
      <div>
        <span
          className="tech-font text-[10px] font-bold tracking-[3px] uppercase block"
          style={{ color: "var(--orange)" }}
        >
          {sek}
        </span>
        <h2 className="archivo text-2xl sm:text-3xl uppercase" style={{ color: "var(--text)" }}>
          {title}{" "}
          <span style={{ color: "transparent", WebkitTextStroke: "1.2px var(--muted2)" }}>{titleAccent}</span>
        </h2>
      </div>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [activeLang, setActiveLang] = useState<"javascript" | "python" | "curl">("javascript");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [latency, setLatency] = useState(14);
  const [cpu, setCpu] = useState(1.82);
  const [totalRequests, setTotalRequests] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 2200);
  };

  const copySnippet = () => {
    navigator.clipboard
      .writeText(CODE_SNIPPETS[activeLang])
      .then(() => showToast("Kode integrasi berhasil disalin!"));
  };

  /* Live latency / cpu ticker */
  useEffect(() => {
    const id = setInterval(() => {
      setLatency(Math.floor(Math.random() * (22 - 9 + 1)) + 9);
      setCpu(Number((Math.random() * (4.2 - 0.9) + 0.9).toFixed(2)));
    }, 3500);
    return () => clearInterval(id);
  }, []);

  /* Total requests counter animation (runs once on mount) */
  useEffect(() => {
    const target = 32010;
    let current = 0;
    const inc = Math.ceil(target / 80);
    const id = setInterval(() => {
      current += inc;
      if (current >= target) {
        current = target;
        clearInterval(id);
      }
      setTotalRequests(current);
    }, 20);
    return () => clearInterval(id);
  }, []);

  /* Two-way scroll reveal, staggered per data-aos-group (ported from vanilla) */
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-aos]"));
    const groups: Record<string, HTMLElement[]> = {};
    els.forEach((el) => {
      const key = el.dataset.aosGroup || `_solo_${Math.random()}`;
      (groups[key] = groups[key] || []).push(el);
    });
    Object.values(groups).forEach((list) => {
      list.forEach((el, i) => {
        el.style.transitionDelay = `${i * 90}ms`;
      });
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("aos-animate", entry.isIntersecting);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* Active section tracking for the sidebar */
  useEffect(() => {
    const sections = SIDEBAR_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0, rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  /* Sidebar item stagger reveal every time it opens */
  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".sidebar-item");
    if (sidebarOpen) {
      items.forEach((el, i) => {
        el.classList.remove("sidebar-show");
        el.style.transitionDelay = `${i * 60}ms`;
      });
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          items.forEach((el) => el.classList.add("sidebar-show"));
        });
      });
      document.body.style.overflow = "hidden";
    } else {
      items.forEach((el) => el.classList.remove("sidebar-show"));
      document.body.style.overflow = "";
    }
  }, [sidebarOpen]);

  return (
    <div className="min-h-screen no-scrollbar relative" style={{ background: "var(--bg)", color: "var(--text)" }}>
      {/* NAV */}
      <nav
        className="max-w-5xl mx-auto flex items-center justify-between px-5 py-4 border-b"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Image/icon.png" alt="Manta'X" className="w-7 h-7 rounded-md object-cover flex-shrink-0" />
          <span className="text-sm tracking-widest tech-font font-bold" style={{ color: "var(--text)" }}>
            MANTA&apos;X
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="docs.html"
            className="hidden sm:flex items-center gap-1.5 text-xs tech-font font-bold uppercase tracking-wider"
            style={{ color: "var(--muted)" }}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Docs
          </a>
          <button
            onClick={() => setSidebarOpen(true)}
            className="w-9 h-9 rounded-lg border flex items-center justify-center"
            style={{ borderColor: "var(--border)" }}
            aria-label="menu"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* SIDEBAR OVERLAY */}
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* SIDEBAR */}
      <aside
        id="sidebar"
        className={`fixed top-0 left-0 h-full w-72 max-w-[80vw] z-50 transition-transform duration-300 ease-out ${
          sidebarOpen ? "" : "-translate-x-full"
        }`}
        style={{ background: "var(--card)", borderRight: "1px solid var(--border)" }}
      >
        <div className="sidebar-decor" />
        <div className="sidebar-content">
          <div
            className="flex items-center justify-between px-5 py-4 border-b flex-shrink-0"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Image/icon.png" alt="Manta'X" className="w-7 h-7 rounded-md object-cover flex-shrink-0" />
              <span className="text-sm tracking-widest tech-font font-bold" style={{ color: "var(--text)" }}>
                MANTA&apos;X
              </span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="w-8 h-8 rounded-lg border flex items-center justify-center"
              style={{ borderColor: "var(--border)" }}
              aria-label="tutup menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav className="flex flex-col p-3 gap-1 overflow-y-auto">
            <span
              className="sidebar-item tech-font text-[9px] font-bold uppercase tracking-widest px-3 pt-2 pb-2"
              data-dir="left"
              style={{ color: "var(--muted2)" }}
            >
              Menu Utama
            </span>
            {SIDEBAR_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                data-dir={link.dir}
                className={`sidebar-item sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold ${
                  activeSection === link.id ? "active" : ""
                }`}
              >
                <span className="link-num">{link.num}</span>
                <link.Icon className="w-4 h-4" />
                {link.label}
              </a>
            ))}

            <div className="sidebar-item tech-font text-[10px] px-3 py-2 select-none" data-dir="right" style={{ color: "var(--muted2)" }}>
              // ------------------
            </div>

            <a
              href="donate.html"
              onClick={() => setSidebarOpen(false)}
              data-dir="left"
              className="sidebar-item sidebar-link donate-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold"
            >
              <Coffee className="w-4 h-4" style={{ color: "var(--orange)" }} />
              <span className="flex flex-col leading-tight">
                <span>Donate</span>
                <span className="text-[9px] font-normal" style={{ color: "var(--muted2)" }}>
                  Support to Dev
                </span>
              </span>
            </a>
          </nav>
        </div>
      </aside>

      <div className="max-w-5xl mx-auto px-5 pb-24">
        {/* HERO */}
        <header id="dashboard" className="pt-10 pb-8">
          <Reveal
            dir="fade"
            group="hero"
            className="tech-font text-[11px] font-bold tracking-[3px] uppercase mb-4"
            style={{ color: "var(--orange)" }}
          >
            SEK. 00 <span style={{ color: "var(--muted2)" }}>/</span> PLATFORM
          </Reveal>
          <h1 className="hero-head text-4xl sm:text-6xl">
            <Reveal as="span" dir="up" group="hero" className="block" style={{ color: "var(--text)" }}>
              REST API
            </Reveal>
            <Reveal as="span" dir="up" group="hero" className="block l2">
              DECENTRALIZED
            </Reveal>
            <Reveal as="span" dir="up" group="hero" className="block l3">
              FOR AUTOMATION
            </Reveal>
          </h1>
          <Reveal
            dir="up"
            group="hero"
            className="mt-6 text-sm leading-relaxed max-w-xl"
            style={{ color: "var(--muted)" }}
          >
            Engine REST API terdesentralisasi buat automasi skala besar. Downloader, AI, web search, sampai system
            tools — <span style={{ color: "var(--text)", fontWeight: 600 }}>tinggal panggil endpoint</span>,
            dapatkan hasilnya secara instan.
          </Reveal>
          <Reveal dir="up" group="hero" className="flex flex-wrap gap-2.5 mt-7">
            <a href="docs.html" className="btn-primary text-xs uppercase tracking-wider px-5 py-3 rounded-lg flex items-center gap-2">
              Buka Dokumentasi <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <button onClick={copySnippet} className="btn-outline tech-font text-xs tracking-wider px-5 py-3 rounded-lg">
              COPY EXAMPLE cURL
            </button>
          </Reveal>
          <Reveal
            dir="up"
            group="hero"
            className="flex items-center gap-2 mt-7 tech-font text-[11px]"
            style={{ color: "var(--muted)" }}
          >
            <div className="status-dot" />
            OPERASIONAL &nbsp;·&nbsp; SIAP PAKAI
          </Reveal>
        </header>

        {/* RESPONSE PREVIEW */}
        <Reveal dir="right" className="glass-panel rounded-2xl overflow-hidden mb-6">
          <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "var(--border)" }}>
            <div className="tech-font text-[10px] tracking-widest uppercase" style={{ color: "var(--muted2)" }}>
              FIG. 01 — RESPONS TEREKAM
            </div>
            <div
              className="tech-font text-[10px] font-bold px-2.5 py-1 rounded-md"
              style={{ color: "var(--green)", background: "rgba(62,207,142,.1)", border: "1px solid rgba(62,207,142,.3)" }}
            >
              200 OK
            </div>
          </div>
          <div className="tech-font text-xs leading-7 p-4" style={{ color: "var(--muted)" }}>
            <div>
              <span style={{ color: "var(--orange)" }}>$</span>{" "}
              <span style={{ color: "var(--text)" }}>GET /api/download/tiktok?url=...&amp;hd=true</span>
            </div>
            <div>x-api-key: YOUR_API_KEY</div>
            <div>
              auth: <span style={{ color: "var(--green)" }}>verified</span> · plugin:{" "}
              <span style={{ color: "var(--orange)" }}>downloader/tiktok</span> v1.0.0
            </div>
            <div>
              validasi: <span style={{ color: "var(--green)" }}>passed</span>
            </div>
          </div>
          <div
            className="tech-font text-[11px] px-4 py-3 border-t"
            style={{ borderColor: "var(--border)", color: "var(--muted2)" }}
          >
            <span style={{ color: "var(--green)", fontWeight: 700 }}>200 OK</span> — 14ms — MANTA&apos;X.API
          </div>
        </Reveal>

        {/* LIVE MONITOR */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
          <Reveal dir="up" group="stats" as="div" className="glass-panel rounded-xl p-4 flex items-center justify-between">
            <div>
              <span className="tech-font text-[9px] uppercase tracking-wider block" style={{ color: "var(--muted2)" }}>
                Engine Status
              </span>
              <span className="tech-font text-xs font-bold flex items-center gap-1.5 mt-1" style={{ color: "var(--green)" }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--green)" }} />
                ONLINE
              </span>
            </div>
            <Activity className="w-4 h-4" style={{ color: "var(--green)" }} />
          </Reveal>
          <Reveal dir="up" group="stats" as="div" className="glass-panel rounded-xl p-4 flex items-center justify-between">
            <div>
              <span className="tech-font text-[9px] uppercase tracking-wider block" style={{ color: "var(--muted2)" }}>
                Live Latency
              </span>
              <span className="tech-font text-xs font-bold mt-1 block" style={{ color: "var(--orange)" }}>
                {latency}ms
              </span>
            </div>
            <Zap className="w-4 h-4" style={{ color: "var(--orange)" }} />
          </Reveal>
          <Reveal dir="up" group="stats" as="div" className="glass-panel rounded-xl p-4 flex items-center justify-between">
            <div>
              <span className="tech-font text-[9px] uppercase tracking-wider block" style={{ color: "var(--muted2)" }}>
                CPU Usage
              </span>
              <span className="tech-font text-xs font-bold mt-1 block" style={{ color: "var(--text)" }}>
                {cpu.toFixed(2)}%
              </span>
            </div>
            <Cpu className="w-4 h-4" style={{ color: "#7fb8ff" }} />
          </Reveal>
          <Reveal dir="up" group="stats" as="div" className="glass-panel rounded-xl p-4 flex items-center justify-between">
            <div>
              <span className="tech-font text-[9px] uppercase tracking-wider block" style={{ color: "var(--muted2)" }}>
                Global Queries
              </span>
              <span className="tech-font text-xs font-bold mt-1 block" style={{ color: "var(--text)" }}>
                1,822,109
              </span>
            </div>
            <Database className="w-4 h-4" style={{ color: "#ff8a8a" }} />
          </Reveal>
        </section>

        {/* TRAFFIC DISTRIBUTION */}
        <Reveal dir="zoom" className="glass-panel rounded-2xl p-5 mb-10 min-h-[280px] flex flex-col justify-between relative">
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="tech-font text-[9px] font-bold uppercase tracking-widest" style={{ color: "var(--muted2)" }}>
                Total Request By Category
              </span>
              <span
                className="flex items-center gap-1.5 text-[9px] tech-font font-bold tracking-wider uppercase px-2 py-0.5 rounded-md"
                style={{ color: "var(--orange)", background: "var(--orange-soft)", border: "1px solid var(--orange-bd)" }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--orange)" }} />
                Live
              </span>
            </div>
            <div className="flex flex-col mt-2">
              <span className="archivo text-3xl sm:text-4xl" style={{ color: "var(--text)" }}>
                {totalRequests.toLocaleString("en-US")}
              </span>
              <span
                className="text-[9px] font-bold mt-1 uppercase tracking-widest flex items-center gap-1"
                style={{ color: "var(--muted2)" }}
              >
                <BarChart2 className="w-3 h-3" style={{ color: "var(--orange)" }} />
                Traffic Distribution
              </span>
            </div>
          </div>
          <div className="w-full h-44 mt-6 relative flex items-end">
            <div className="absolute inset-y-0 left-0 w-full flex flex-col justify-between z-0 pb-7 pointer-events-none">
              {["6K", "3K", "0"].map((l) => (
                <div key={l} className="flex items-center gap-2 w-full">
                  <span className="text-[8px] tech-font w-5 text-right" style={{ color: "var(--muted2)" }}>
                    {l}
                  </span>
                  <div className="h-px flex-1" style={{ background: "var(--border)" }} />
                </div>
              ))}
            </div>
            <div className="relative w-full h-full flex justify-between items-end pl-8 z-10 pb-7">
              {CHART_BARS.map((bar) => {
                const color =
                  bar.variant === "orange" ? "var(--orange)" : bar.variant === "green" ? "var(--green)" : "#8c8c88";
                const grad =
                  bar.variant === "orange"
                    ? "linear-gradient(to top,rgba(255,106,0,.12),var(--orange))"
                    : bar.variant === "green"
                    ? "linear-gradient(to top,rgba(62,207,142,.15),var(--green))"
                    : "linear-gradient(to top,rgba(140,140,136,.1),#8c8c88)";
                return (
                  <div key={bar.label} className="w-[8.5%] h-full flex flex-col justify-end items-center group relative cursor-pointer">
                    <div
                      className="cyber-tooltip absolute -top-8 tech-font text-[9px] font-bold px-2 py-1 rounded z-50"
                      style={{ background: "var(--card)", border: `1px solid ${color}`, color }}
                    >
                      {bar.value.toLocaleString("en-US")}
                    </div>
                    <div className="w-full rounded-t bar-grow" style={{ height: `${bar.height}%`, background: grad }} />
                    <span className="absolute -bottom-6 text-[7px] font-bold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                      {bar.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* TICKER */}
        <div className="ticker-wrap mb-14 -mx-5">
          <div className="ticker">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i}>
                <span>PLUGIN ARCHITECTURE</span>
                <span>DEVELOPER FIRST</span>
                <span>DECENTRALIZED API</span>
                <span>SCALABLE AUTOMATION</span>
              </span>
            ))}
          </div>
        </div>

        {/* DOCUMENTATION */}
        <section id="docs" className="mb-14">
          <SectionHeading Icon={FolderTree} sek="SEK. 01 / DOKUMENTASI" title="API" titleAccent="DIRECTORY" />
          <Reveal dir="left" className="text-sm max-w-lg mb-8" style={{ color: "var(--muted)" }}>
            Setiap plugin punya halaman referensinya sendiri — parameter, contoh request, dan format respons lengkap
            ada di sana.
          </Reveal>

          <Reveal dir="zoom" className="glass-panel rounded-2xl p-7 sm:p-10 flex flex-col items-center text-center gap-5">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center"
              style={{ background: "var(--orange-soft)", border: "1px solid var(--orange-bd)" }}
            >
              <BookOpen className="w-7 h-7" style={{ color: "var(--orange)" }} />
            </div>
            <div className="max-w-md">
              <h3 className="archivo text-xl uppercase mb-2.5" style={{ color: "var(--text)" }}>
                Referensi Lengkap Semua Endpoint
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                Parameter wajib &amp; opsional, contoh request per bahasa, kode status, dan rate limit — semua
                terdokumentasi rapi di satu tempat.
              </p>
            </div>
            <div className="flex items-center gap-6 sm:gap-10 py-1">
              <div className="text-center">
                <span className="archivo text-2xl block" style={{ color: "var(--orange)" }}>70</span>
                <span className="text-[9px] tech-font uppercase tracking-wider" style={{ color: "var(--muted2)" }}>Endpoint</span>
              </div>
              <div className="w-px h-8" style={{ background: "var(--border)" }} />
              <div className="text-center">
                <span className="archivo text-2xl block" style={{ color: "var(--orange)" }}>10</span>
                <span className="text-[9px] tech-font uppercase tracking-wider" style={{ color: "var(--muted2)" }}>Kategori</span>
              </div>
              <div className="w-px h-8" style={{ background: "var(--border)" }} />
              <div className="text-center">
                <span className="archivo text-2xl block" style={{ color: "var(--green)" }}>99.9%</span>
                <span className="text-[9px] tech-font uppercase tracking-wider" style={{ color: "var(--muted2)" }}>Uptime</span>
              </div>
            </div>
            <a href="docs.html" className="btn-primary px-8 py-3.5 rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2">
              Lihat Dokumentasi <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-4">
            {CATEGORY_CARDS.map((card) => (
              <Reveal
                key={card.id}
                as="div"
                dir="up"
                group="doccards"
                className="doc-card rounded-xl p-4 flex flex-col gap-3 relative"
              >
                <span
                  className="absolute top-3 right-3 tech-font text-[10px] font-bold px-2 py-1 rounded-md"
                  style={{ color: "var(--orange)", background: "var(--orange-soft)", border: "1px solid var(--orange-bd)" }}
                >
                  {card.count} EP
                </span>
                <div className="w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: "var(--orange-soft)", border: "1px solid var(--orange-bd)" }}>
                  <card.Icon className="w-6 h-6" style={{ color: "var(--orange)" }} />
                </div>
                <div>
                  <span className="text-sm font-bold block" style={{ color: "var(--text)" }}>{card.title}</span>
                  <span className="text-xs leading-relaxed block mt-1" style={{ color: "var(--muted)" }}>{card.desc}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SDK INTEGRATION */}
        <section id="integration" className="mb-14">
          <SectionHeading Icon={Terminal} sek="SEK. 02 / INTEGRASI" title="SDK" titleAccent="INTEGRATION" />
          <Reveal dir="right" className="text-sm max-w-lg mb-6" style={{ color: "var(--muted)" }}>
            Salin snippet kode integrasi di bawah ini untuk digunakan pada project-mu.
          </Reveal>
          <Reveal dir="up" className="glass-panel rounded-2xl p-4">
            <div className="flex items-center justify-between border-b pb-3 mb-4" style={{ borderColor: "var(--border)" }}>
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
                {(["javascript", "python", "curl"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`lang-tab px-3 py-1 rounded-md text-[10px] tech-font font-bold uppercase ${
                      activeLang === lang ? "active" : ""
                    }`}
                  >
                    {lang === "javascript" ? "JavaScript" : lang === "python" ? "Python" : "cURL"}
                  </button>
                ))}
              </div>
              <button
                onClick={copySnippet}
                className="flex items-center gap-1.5 text-[10px] px-3 py-1 rounded-md"
                style={{ color: "var(--muted)", background: "var(--input)", border: "1px solid var(--border)" }}
              >
                <Copy className="w-3.5 h-3.5" />
                Copy
              </button>
            </div>
            <pre
              className="tech-font text-[11px] overflow-x-auto p-4 rounded-lg leading-relaxed whitespace-pre-wrap"
              style={{ color: "var(--muted)", background: "var(--input)", border: "1px solid var(--border)" }}
            >
              {CODE_SNIPPETS[activeLang]}
            </pre>
          </Reveal>
        </section>

        {/* STATUS CODE */}
        <section id="status" className="mb-14">
          <SectionHeading Icon={ListChecks} sek="SEK. 03 / STATUS CODE" title="KODE" titleAccent="STATUS" />
          <Reveal dir="left" className="text-sm max-w-lg mb-6" style={{ color: "var(--muted)" }}>
            Setiap response API menyertakan HTTP status code standar berikut untuk membantu proses debugging.
          </Reveal>
          <div className="glass-panel rounded-2xl overflow-hidden">
            {STATUS_CODES.map((s, i) => {
              const color = s.variant === "green" ? "var(--green)" : s.variant === "red" ? "#ff6a6a" : "var(--orange)";
              const bg =
                s.variant === "green"
                  ? "rgba(62,207,142,.1)"
                  : s.variant === "red"
                  ? "rgba(255,90,90,.1)"
                  : "var(--orange-soft)";
              const bd =
                s.variant === "green"
                  ? "rgba(62,207,142,.3)"
                  : s.variant === "red"
                  ? "rgba(255,90,90,.3)"
                  : "var(--orange-bd)";
              return (
                <Reveal
                  key={s.code}
                  as="div"
                  dir="up"
                  group="statuscode"
                  className={`flex items-center gap-4 px-4 py-4 ${i < STATUS_CODES.length - 1 ? "border-b" : ""}`}
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="tech-font text-xs font-bold w-14 text-center py-1.5 rounded-md flex-shrink-0"
                    style={{ color, background: bg, border: `1px solid ${bd}` }}
                  >
                    {s.code}
                  </span>
                  <div>
                    <span className="text-sm font-bold block" style={{ color: "var(--text)" }}>{s.name}</span>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>{s.desc}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mb-14">
          <Reveal dir="fade" className="tech-font text-[11px] font-bold tracking-[3px] uppercase mb-3" style={{ color: "var(--orange)" }}>
            SEK. 04 <span style={{ color: "var(--muted2)" }}>/</span> PERTANYAAN UMUM
          </Reveal>
          <Reveal dir="right" as="h2" className="archivo text-2xl uppercase mb-5" style={{ color: "var(--text)" }}>
            PERTANYAAN <span style={{ color: "transparent", WebkitTextStroke: "1.2px var(--muted2)" }}>UMUM</span>
          </Reveal>
          <div className="glass-panel rounded-2xl overflow-hidden">
            {FAQ_ITEMS.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <Reveal
                  key={item.q}
                  as="div"
                  dir="up"
                  group="faq"
                  className="faq-item px-4"
                  style={i < FAQ_ITEMS.length - 1 ? { borderBottom: "1px solid var(--border)" } : { borderBottom: "none" }}
                >
                  <div className="faq-q flex items-center justify-between py-4" onClick={() => setOpenFaq(isOpen ? null : i)}>
                    <span className="tech-font text-[10px] w-9 flex-shrink-0" style={{ color: "var(--muted2)" }}>
                      T.{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm flex-1" style={{ color: "var(--text)", fontWeight: 600 }}>{item.q}</span>
                    <ChevronDown
                      className="faq-chevron w-4 h-4 transition-transform"
                      style={{ color: "var(--muted2)", transform: isOpen ? "rotate(180deg)" : "none" }}
                    />
                  </div>
                  <div className="faq-a" style={{ maxHeight: isOpen ? 200 : 0 }}>
                    <p className="text-xs pb-4 pl-9" style={{ color: "var(--muted)" }}>{item.a}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* SOCIAL MEDIA */}
        <section id="social" className="mb-14">
          <SectionHeading Icon={AtSign} sek="SEK. 05 / TERHUBUNG" title="SOSIAL MEDIA" titleAccent="DEV" />
          <Reveal dir="left" className="text-sm max-w-lg mb-6" style={{ color: "var(--muted)" }}>
            Follow atau hubungi langsung developer Manta&apos;X lewat kanal-kanal berikut.
          </Reveal>

          <div className="social-mesh">
            <span className="m1" />
            <span className="m2" />
            <span className="m3" />
            <span className="m4" />
            <span className="m5" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
           {SOCIAL_CARDS.map((s, i) => (
  <Reveal
    key={s.name}
    as="a"
    href={s.href}
    target="_blank"
    rel="noopener noreferrer"
    dir={i % 2 === 0 ? "left" : "right"}
    group="social"
    className={`social-card ${s.full ? "sm:col-span-2" : ""}`}
    style={{ ["--accent" as any]: s.accent, ["--accent-soft" as any]: s.accentSoft }}
  >
    <span className="glow-a" />
    <span className="glow-b" />
    <div className="social-icon" style={{ background: s.iconBg }}>
      {s.icon}
    </div>
    <div className="flex-1 min-w-0">
      <span className="block text-sm font-bold" style={{ color: "var(--text)" }}>{s.name}</span>
      <span className="block text-xs truncate" style={{ color: "var(--muted)" }}>{s.handle}</span>
    </div>
    <div className="social-go">
      <ArrowUpRight className="w-3.5 h-3.5" />
    </div>
  </Reveal>
))}
            ))}
          </div>
        </section>

        {/* CTA */}
        <Reveal dir="zoom" className="cta-block rounded-2xl p-8 mb-10 text-center">
          <div className="tech-font text-[11px] font-bold tracking-[3px] uppercase mb-3 opacity-70">SEK. 06 / MULAI</div>
          <h2 className="archivo text-2xl sm:text-3xl uppercase mb-3">
            MULAI PAKAI
            <br />
            MANTA&apos;X API
          </h2>
          <p className="text-sm max-w-md mx-auto mb-6 opacity-80">
            Daftar gratis, generate API key, dan mulai panggil endpoint. Tanpa kartu kredit, tanpa komitmen.
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            <button className="bg-black text-white text-xs uppercase tracking-wider px-5 py-3 rounded-lg font-bold flex items-center gap-2">
              Daftar Gratis <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a href="docs.html" className="border border-black/30 text-xs uppercase tracking-wider px-5 py-3 rounded-lg font-bold">
              Jelajahi Dokumentasi
            </a>
          </div>
        </Reveal>

        {/* FOOTER */}
        <footer className="pt-6 border-t" style={{ borderColor: "var(--border)" }}>
          <div className="grid grid-cols-2 gap-6 text-xs mb-8" style={{ color: "var(--muted)" }}>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="hover:text-white transition-colors">REST API</a>
              <a href="#integration" className="hover:text-white transition-colors">SDK Integration</a>
              <a href="docs.html" className="hover:text-white transition-colors">Plugins</a>
              <a href="docs.html" className="hover:text-white transition-colors">Dokumentasi</a>
            </div>
            <div className="flex flex-col gap-2.5">
              <a href="#" className="hover:text-white transition-colors">Features</a>
              <a href="#" className="hover:text-white transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <a href="#" className="hover:text-white transition-colors">Changelog</a>
            </div>
          </div>
          <div className="text-center pb-8">
            <span className="tech-font text-xs font-extrabold tracking-[0.3em] uppercase" style={{ color: "var(--text)" }}>
              MANTA&apos;X
            </span>
            <p className="text-[10px] mt-2" style={{ color: "var(--muted2)" }}>© 2026 MANTA&apos;X API DOCUMENTATION DECENTRALIZED.</p>
          </div>
        </footer>
      </div>

      {/* TOAST */}
      <div className={`toast-el ${toast ? "show" : ""}`}>
        <span>{toast}</span>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Archivo+Black&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap");

        :root {
          --bg: #0a0a0a;
          --bg2: #0e0e0e;
          --card: #131313;
          --input: #0c0c0c;
          --border: #232323;
          --borderh: #3a3a3a;
          --text: #f2f1ee;
          --muted: #8c8c88;
          --muted2: #4a4a46;
          --orange: #ff6a00;
          --orange-soft: rgba(255, 106, 0, 0.12);
          --orange-bd: rgba(255, 106, 0, 0.35);
          --green: #3ecf8e;
        }
        * { box-sizing: border-box; }
        body { font-family: "Plus Jakarta Sans", sans-serif; overflow-x: hidden; margin: 0; }
        .tech-font { font-family: "JetBrains Mono", monospace; }
        .archivo { font-family: "Archivo Black", sans-serif; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        html { scroll-behavior: smooth; }

        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.25; } }
        @keyframes tickerScroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes growUp { 0% { transform: scaleY(0); opacity: 0; } 50% { opacity: 1; } 100% { transform: scaleY(1); opacity: 1; } }

        [data-aos] { opacity: 0; transform: translateY(22px); transition: opacity 0.65s cubic-bezier(0.22, 0.68, 0, 1), transform 0.65s cubic-bezier(0.22, 0.68, 0, 1); }
        [data-aos="fade"] { transform: none; }
        [data-aos="fade-left"] { transform: translateX(34px); }
        [data-aos="fade-right"] { transform: translateX(-34px); }
        [data-aos="zoom-in"] { transform: scale(0.94); transition: opacity 0.6s cubic-bezier(0.22, 0.68, 0, 1), transform 0.6s cubic-bezier(0.22, 0.68, 0, 1); }
        [data-aos].aos-animate { opacity: 1; transform: none; }
        @media (prefers-reduced-motion: reduce) { [data-aos] { transition: none; opacity: 1; transform: none; } }

        .glass-panel { background: var(--card); border: 1px solid var(--border); }
        .hero-head { font-family: "Archivo Black", sans-serif; line-height: 1.02; letter-spacing: -0.5px; text-transform: uppercase; }
        .hero-head .l2 { color: transparent; -webkit-text-stroke: 1.4px var(--muted2); }
        .hero-head .l3 { color: var(--orange); }

        .btn-primary { background: var(--orange); color: #0a0a0a; font-weight: 700; transition: filter 0.2s; }
        .btn-primary:hover { filter: brightness(1.1); }
        .btn-outline { background: transparent; border: 1px solid var(--border); color: var(--text); transition: border-color 0.2s; }
        .btn-outline:hover { border-color: var(--borderh); }
        .status-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); box-shadow: 0 0 8px rgba(62, 207, 142, 0.6); animation: blink 2.2s ease-in-out infinite; }

        .ticker-wrap { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); overflow: hidden; padding: 12px 0; }
        .ticker { display: flex; white-space: nowrap; width: max-content; animation: tickerScroll 18s linear infinite; }
        .ticker span { font-family: "JetBrains Mono", monospace; font-size: 11px; letter-spacing: 1.5px; color: var(--muted2); text-transform: uppercase; padding: 0 22px; display: flex; align-items: center; gap: 22px; }
        .ticker span::after { content: "+"; color: var(--orange); }

        .lang-tab.active { background: var(--orange-soft); color: var(--orange); border: 1px solid var(--orange-bd); }
        .lang-tab { border: 1px solid transparent; color: var(--muted2); }

        .bar-grow { transform-origin: bottom; }
        [data-aos].aos-animate .bar-grow { animation: growUp 1s cubic-bezier(0.2, 0.8, 0.2, 1) forwards; }
        .cyber-tooltip { opacity: 0; visibility: hidden; transform: translateY(8px); transition: all 0.25s; }
        .group:hover .cyber-tooltip { opacity: 1; visibility: visible; transform: translateY(-4px); }

        .faq-item { }
        .faq-q { cursor: pointer; }
        .faq-a { overflow: hidden; transition: max-height 0.3s ease; }

        .cta-block { background: var(--orange); color: #0a0a0a; }
        .toast-el { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%) translateY(80px); background: var(--card); border: 1px solid var(--orange); color: var(--text); padding: 12px 22px; border-radius: 8px; font-family: "JetBrains Mono", monospace; font-size: 12px; z-index: 9999; transition: transform 0.3s ease; white-space: nowrap; }
        .toast-el.show { transform: translateX(-50%) translateY(0); }

        .doc-card { background: var(--card); border: 1px solid var(--border); transition: border-color 0.2s, transform 0.2s; }
        .doc-card:hover { border-color: var(--orange-bd); transform: translateY(-3px); }

        #sidebar { box-shadow: 20px 0 60px rgba(0, 0, 0, 0.5); overflow: hidden; }
        #sidebar .sidebar-decor { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        #sidebar .sidebar-decor::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 15% -10%, rgba(255, 106, 0, 0.22), transparent 55%), radial-gradient(circle at 100% 30%, rgba(62, 207, 142, 0.1), transparent 45%), radial-gradient(circle at 0% 100%, rgba(255, 106, 0, 0.08), transparent 50%); }
        #sidebar .sidebar-decor::after { content: ""; position: absolute; inset: 0; background-image: radial-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px); background-size: 18px 18px; -webkit-mask-image: linear-gradient(to bottom, black, transparent 75%); mask-image: linear-gradient(to bottom, black, transparent 75%); }
        #sidebar > .sidebar-content { position: relative; z-index: 1; display: flex; flex-direction: column; height: 100%; }
        .sidebar-link { color: var(--muted); text-decoration: none; transition: background 0.15s, color 0.15s, border-color 0.15s; border: 1px solid transparent; }
        .sidebar-link:hover { background: rgba(255, 255, 255, 0.04); color: var(--text); }
        .sidebar-link.active { background: var(--orange-soft); color: var(--orange); border-color: var(--orange-bd); }
        .sidebar-link .link-num { font-family: "JetBrains Mono", monospace; font-size: 9px; color: var(--muted2); flex-shrink: 0; }
        .sidebar-link.active .link-num { color: var(--orange); }
        .sidebar-link.donate-link { border: 1px dashed var(--orange-bd); background: rgba(255, 106, 0, 0.05); }
        .sidebar-link.donate-link:hover { background: var(--orange-soft); border-style: solid; }

        .sidebar-item { opacity: 0; transition: opacity 0.45s cubic-bezier(0.22, 0.68, 0, 1), transform 0.45s cubic-bezier(0.22, 0.68, 0, 1); }
        .sidebar-item[data-dir="left"] { transform: translateX(-26px); }
        .sidebar-item[data-dir="right"] { transform: translateX(26px); }
        .sidebar-item.sidebar-show { opacity: 1; transform: none; }

        #social { position: relative; }
        .social-mesh { position: absolute; left: -24px; right: -24px; top: -30px; height: 460px; z-index: 0; pointer-events: none; filter: blur(70px); opacity: 0.4; overflow: hidden; }
        .social-mesh span { position: absolute; width: 220px; height: 220px; border-radius: 50%; }
        .social-mesh .m1 { background: #c9c9c9; top: 0; left: 2%; }
        .social-mesh .m2 { background: #fe2c55; top: 15%; left: 28%; }
        .social-mesh .m3 { background: #962fbf; top: 0; left: 52%; }
        .social-mesh .m4 { background: #229ed9; top: 20%; left: 70%; }
        .social-mesh .m5 { background: #25d366; top: 5%; left: 85%; }

        .social-card { position: relative; display: flex; align-items: center; gap: 16px; background: linear-gradient(155deg, var(--accent-soft) 0%, var(--card) 45%, var(--card) 55%, var(--accent-soft) 100%); border: 1px solid var(--border); border-radius: 18px; padding: 16px 18px; overflow: hidden; transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s; text-decoration: none; z-index: 1; }
        .social-card::before { content: ""; position: absolute; inset: 0; pointer-events: none; mix-blend-mode: overlay; opacity: 0.5; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
        .social-card .glow-a { position: absolute; top: -45%; right: -18%; width: 150px; height: 150px; border-radius: 50%; background: var(--accent); opacity: 0.18; filter: blur(30px); pointer-events: none; }
        .social-card .glow-b { position: absolute; bottom: -55%; left: -10%; width: 110px; height: 110px; border-radius: 50%; background: var(--accent); opacity: 0.1; filter: blur(26px); pointer-events: none; }
        .social-card:hover { transform: translateY(-4px); border-color: var(--accent); box-shadow: 0 14px 34px -10px var(--accent-soft); }
        .social-icon { width: 52px; height: 52px; border-radius: 15px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; position: relative; z-index: 1; box-shadow: 0 6px 16px -6px rgba(0, 0, 0, 0.5); }
        .social-card > .flex-1 { position: relative; z-index: 1; }
        .social-go { width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; border: 1px solid var(--border); color: var(--muted); transition: all 0.25s; position: relative; z-index: 1; }
        .social-card:hover .social-go { border-color: var(--accent); color: var(--accent); transform: translateX(2px) rotate(45deg); }

        .contents { display: contents; }
      `}</style>
    </div>
  );
}
