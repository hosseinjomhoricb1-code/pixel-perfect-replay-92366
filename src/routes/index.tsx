import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Phone, Linkedin, Instagram, Twitter, CheckCircle2, Star, Users, Gem, HeartHandshake, ShieldCheck, Mail, MapPin } from "lucide-react";
import { HeroScrollVideo } from "@/components/hero-scroll-video";
import villa from "@/assets/cliff-villa.jpg";
import family from "@/assets/family-home.jpg";
import beach from "@/assets/beach-villa.jpg";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LeonHome — Upgrade Your Life With Smart Homes" },
      { name: "description", content: "Architect-designed smart homes, expert agents and curated listings." },
      { property: "og:title", content: "LeonHome — Upgrade Your Life With Smart Homes" },
      { property: "og:description", content: "Architect-designed smart homes, expert agents and curated listings." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Home", href: "#home" },
  { label: "Agents", href: "#agents" },
  { label: "Work In Progress", href: "#why" },
  { label: "Collection", href: "#collection" },
  { label: "About Us", href: "#about" },
];
const team = [
  { img: t1, name: "Erika Dias", role: "Head Manager" },
  { img: t2, name: "Tiana Korsgaard", role: "Sales Marketing" },
  { img: t3, name: "Tiana Donin", role: "Property Agent" },
];
const listings = [
  { img: beach, name: "Luxury Beachfront Villa", category: "Beachfront", price: "$1,620,000" },
  { img: family, name: "Modern Family Home", category: "Family Living", price: "$4,500,000" },
  { img: villa, name: "Cliffside Retreat", category: "Cliffside", price: "$3,200,000" },
];
const features = [
  { icon: Users, title: "Expert Real Estate Agents", text: "Seasoned professionals who know every neighborhood and market trend." },
  { icon: Gem, title: "Exclusive Luxury Properties", text: "A curated portfolio of exceptional homes you won't find elsewhere." },
  { icon: HeartHandshake, title: "Personalized Service", text: "Every search tailored to your lifestyle, taste and budget." },
  { icon: ShieldCheck, title: "Trusted Property Guidance", text: "Transparent advice and support at every step of your journey." },
];

function Index() {
  return (
    <main className="min-h-screen bg-frame p-3 md:p-6">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-background">
        {/* Hero */}
        <section id="home" className="relative h-[190svh] min-h-[1200px] rounded-3xl text-ink-foreground">
          <HeroScrollVideo poster={villa} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/50" />
          <header className="relative z-10 flex items-center justify-between gap-4 p-5 md:p-7">
            <span className="font-display text-2xl">◐ LeonHome</span>
            <nav className="hidden gap-2 lg:flex">
              {nav.map((n, i) => (
                <a key={n.label} href={n.href} className={`rounded-full px-4 py-1.5 text-sm ${i === 0 ? "bg-background text-foreground" : "pill-outline"}`}>{n.label}</a>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              {[Linkedin, Instagram, Twitter].map((I, i) => (
                <span key={i} className="glass hidden h-9 w-9 place-items-center rounded-full md:grid"><I className="h-4 w-4" /></span>
              ))}
              <a href="tel:+923199492086" className="ml-2 flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm text-foreground"><Phone className="h-4 w-4" />+92 319 949 2086</a>
            </div>
          </header>

          <div className="relative z-10 mt-4 px-5 md:mt-6 md:px-12">
            <p className="text-xs opacity-80">Since 2023</p>
            <h1 className="animate-rise mt-2 max-w-md text-2xl font-medium uppercase leading-snug md:max-w-xl md:text-4xl lg:text-5xl">Upgrade your life with smart home technology</h1>
          </div>
          <p aria-hidden className="pointer-events-none absolute inset-x-0 top-1/2 z-0 -translate-y-1/2 select-none text-center font-display top-[55%] text-[clamp(3.5rem,14vw,11rem)] leading-none opacity-90">LEON HOME</p>

          <div className="absolute bottom-24 right-5 z-10 hidden w-52 flex-col gap-4 md:flex">
            {[["5.9K+", "Successfully delivering innovative projects around the world"], ["10K+", "Award-winning innovative projects delivered globally"]].map(([n, t]) => (
              <div key={n} className="glass rounded-2xl p-5">
                <div className="text-4xl font-light">{n}</div>
                <p className="mt-2 text-xs opacity-85">{t}</p>
              </div>
            ))}
          </div>

          <a href="#collection" className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 rounded-full bg-background py-1.5 pl-6 pr-1.5 text-sm font-semibold text-foreground">
            <span className="whitespace-nowrap">DISCOVER MORE</span> <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-ink-foreground"><ArrowUpRight className="h-4 w-4" /></span>
          </a>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-6 px-6 py-24 md:px-14">
          <h2 className="text-center font-display text-5xl leading-tight md:text-6xl">Experience Excellence<br />In Real Estate</h2>
          <div className="mt-16 grid items-stretch gap-10 md:grid-cols-3">
            <div className="flex flex-col justify-between gap-10">
              <div>
                <h3 className="text-2xl font-medium">Your Trusted Partner in Finding the Perfect Home</h3>
                <p className="mt-4 text-sm text-muted-foreground">At LeonHome, we believe that buying or selling a home should be an exciting and stress-free experience.</p>
                <a href="#" className="mt-6 inline-block rounded-full bg-ink px-5 py-2 text-sm text-ink-foreground">About Us</a>
              </div>
              <div>
                <p className="text-sm font-medium">Our Partner:</p>
                <div className="mt-3 flex gap-5 text-sm text-muted-foreground">{["Polymath", "Boltshift", "Quotient"].map((p) => <span key={p}>● {p}</span>)}</div>
              </div>
            </div>
            <img src={villa} alt="Cliffside villa with pool at dusk" loading="lazy" width={864} height={1152} className="h-[460px] w-full rounded-3xl object-cover" />
            <div className="flex flex-col justify-between gap-10">
              <div className="divide-y">
                {[["Expert Guidance", "Our experienced agents provide professional advice and personalized support."], ["Wide Property Selection", "From luxury homes to budget-friendly apartments, we have something for everyone."]].map(([h, t]) => (
                  <div key={h} className="py-5 first:pt-0">
                    <h4 className="font-medium">{h}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{t}</p>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium">Reviews:</p>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex -space-x-3">{[t1, t2, t3].map((s) => <img key={s} src={s} alt="" className="h-10 w-10 rounded-full border-2 border-background object-cover" />)}<span className="grid h-10 w-10 place-items-center rounded-full border-2 border-background bg-ink text-xs text-ink-foreground">6k+</span></div>
                  <div className="text-sm"><span className="flex items-center gap-1 font-medium"><Star className="h-3.5 w-3.5 fill-current" />4.9</span><span className="text-muted-foreground">Customer Ratings</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="agents" className="scroll-mt-6 bg-ink px-6 py-20 text-ink-foreground md:px-14">
          <div className="grid items-center gap-12 lg:grid-cols-[2fr_1fr]">
            <div className="grid grid-cols-3 gap-4">
              {team.map((m) => (
                <figure key={m.name}>
                  <img src={m.img} alt={m.name} loading="lazy" width={736} height={912} className="aspect-[4/5] w-full rounded-2xl object-cover" />
                  <figcaption className="mt-3 text-sm">{m.name}<span className="block text-xs opacity-60">{m.role}</span></figcaption>
                </figure>
              ))}
            </div>
            <div>
              <h2 className="font-display text-5xl">Meet Our Expert Team</h2>
              <p className="mt-4 text-sm opacity-70">Our team of experienced professionals is committed to helping you find the perfect home or investment property.</p>
              <a href="#" className="mt-6 inline-block rounded-full bg-background px-5 py-2 text-sm text-foreground">View All</a>
            </div>
          </div>
        </section>

        {/* Listings */}
        <section id="collection" className="scroll-mt-6 px-6 py-24 md:px-14">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-display text-5xl leading-tight md:text-6xl">Find Your Dream Home<br />Today</h2>
            <p className="max-w-xs text-sm text-muted-foreground">Explore our latest listings in the most sought-after locations, we have the perfect home for you.</p>
          </div>
          <div className="mt-14 grid items-center gap-6 md:grid-cols-[1fr_1.8fr_1fr]">
            {listings.map((l, i) => (
              <article key={l.name} className={i === 1 ? "" : "opacity-60 transition-opacity hover:opacity-100"}>
                <div className="relative">
                  <img src={l.img} alt={l.name} loading="lazy" width={1280} height={800} className={`w-full rounded-3xl object-cover ${i === 1 ? "aspect-[16/10]" : "aspect-[4/3]"}`} />
                  <span className="glass absolute left-4 top-4 flex items-center gap-1.5 rounded-full px-3 py-1 text-xs text-ink-foreground"><CheckCircle2 className="h-3.5 w-3.5" />Available Property</span>
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-3 font-medium"><span>{l.name}</span><span className="whitespace-nowrap">{l.price}</span></div>
                <p className="mt-1 text-xs text-muted-foreground">{l.category}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why" className="scroll-mt-6 border-t px-6 py-24 md:px-14">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="font-display text-5xl leading-tight md:text-6xl">Why Choose Us</h2>
            <p className="max-w-xs text-sm text-muted-foreground">We combine deep market knowledge with a passion for exceptional homes.</p>
          </div>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title}>
                <span className="grid h-12 w-12 place-items-center rounded-full border"><f.icon className="h-5 w-5" /></span>
                <h3 className="mt-5 font-medium">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="px-3 pb-3 md:px-6 md:pb-6">
          <div className="relative overflow-hidden rounded-3xl text-ink-foreground">
            <img src={beach} alt="Luxury beachfront villa at sunset" loading="lazy" width={1280} height={800} className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-ink/55" />
            <div className="relative z-10 flex flex-col items-center px-6 py-28 text-center md:py-36">
              <h2 className="max-w-2xl font-display text-5xl leading-tight md:text-6xl">Find Your Perfect Home</h2>
              <p className="mt-5 max-w-md text-sm opacity-85">Let our experts guide you to a home that fits the life you've always imagined.</p>
              <a href="#collection" className="mt-8 inline-flex items-center gap-3 rounded-full bg-background py-1.5 pl-6 pr-1.5 text-sm font-semibold text-foreground">
                <span className="whitespace-nowrap">EXPLORE OUR COLLECTION</span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-ink-foreground"><ArrowUpRight className="h-4 w-4" /></span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-ink px-6 pb-8 pt-16 text-ink-foreground md:px-14">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
            <div>
              <span className="font-display text-2xl">◐ LeonHome</span>
              <p className="mt-4 max-w-xs text-sm opacity-70">Architect-designed smart homes, expert agents and curated listings in the world's most sought-after locations.</p>
              <div className="mt-6 flex gap-3">
                {[Linkedin, Instagram, Twitter].map((I, i) => (
                  <a key={i} href="#" aria-label="Social link" className="glass grid h-9 w-9 place-items-center rounded-full"><I className="h-4 w-4" /></a>
                ))}
              </div>
            </div>
            <nav>
              <h3 className="text-sm font-medium">Quick Links</h3>
              <ul className="mt-4 space-y-2.5 text-sm opacity-70">
                {nav.map((n) => <li key={n.label}><a href={n.href} className="hover:opacity-100">{n.label}</a></li>)}
              </ul>
            </nav>
            <div>
              <h3 className="text-sm font-medium">Categories</h3>
              <ul className="mt-4 space-y-2.5 text-sm opacity-70">
                {["Beachfront Villas", "Family Homes", "Cliffside Retreats", "City Apartments"].map((c) => <li key={c}><a href="#collection" className="hover:opacity-100">{c}</a></li>)}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium">Contact</h3>
              <ul className="mt-4 space-y-3 text-sm opacity-70">
                <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 shrink-0" />+92 319 949 2086</li>
                <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 shrink-0" />hello@leonhome.com</li>
                <li className="flex items-center gap-2.5"><MapPin className="h-4 w-4 shrink-0" />12 Coastal Avenue, Cliffside Bay</li>
              </ul>
            </div>
          </div>
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-foreground/15 pt-6 text-xs opacity-60 md:flex-row">
            <p>© 2026 LeonHome. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100">Privacy Policy</a>
              <a href="#" className="hover:opacity-100">Terms &amp; Conditions</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
