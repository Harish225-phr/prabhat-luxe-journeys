import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { createFileRoute } from "@tanstack/react-router";
import {
  Phone, Mail, MapPin, Clock, Star, ArrowRight, Menu, X, MessageCircle,
  Car, Plane, Mountain, Bus, Briefcase, Users, Heart, Building2, Hotel,
  PartyPopper, Map as MapIcon, Sparkles, ShieldCheck, BadgeIndianRupee,
  HeadphonesIcon, Globe2, Award, CheckCircle2, ChevronLeft, ChevronRight,
  Sun, Moon, Calendar, Quote,
} from "lucide-react";

import heroShimla from "@/assets/hero-shimla.jpg";
import mallRoad from "@/assets/shimla-mallroad.jpg";
import kufri from "@/assets/kufri.jpg";
import christChurch from "@/assets/christ-church.jpg";
import vrindavan from "@/assets/vrindavan.jpg";
import khatuShyam from "@/assets/khatu-shyam.jpg";
import ayodhya from "@/assets/ayodhya.jpg";
import innova from "@/assets/innova.jpg";
import sedan from "@/assets/sedan.jpg";

import busPrabhat from "@/assets/bus-prabhat.asset.json";
import groupTravelers from "@/assets/group-travelers.asset.json";
import volvo22 from "@/assets/volvo-22.asset.json";
import volvo27 from "@/assets/volvo-27.asset.json";
import volvo40 from "@/assets/volvo-40.asset.json";
import tempoTraveller from "@/assets/tempo-traveller.asset.json";
import groupTour from "@/assets/groupimg.png"
import volvo22set from "@/assets/volvo22.png"

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prabhat Tour and Travels — Luxury Cabs & Himachal Tours in Shimla" },
      { name: "description", content: "Book luxury cabs, Volvo buses, tempo travellers & curated Himachal and pilgrimage tour packages with Prabhat Tour and Travels, Shimla." },
      { property: "og:title", content: "Prabhat Tour and Travels — Travel with Luxury" },
      { property: "og:description", content: "Premium fleet, professional drivers and unforgettable journeys across Himachal and India." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const PHONE_1 = "+917807503816";
const PHONE_2 = "+917018709289";
const WHATSAPP = "917807503816";
const EMAIL = "prabhattourandtravels09@gmail.com";

/* ---------------- Loading Screen ---------------- */
function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <div className="absolute inset-0 -m-8 rounded-full bg-gold/20 blur-2xl animate-pulse-glow" />
        <div className="relative flex items-center gap-3">
          <div className="h-12 w-12 rounded-xl bg-gold flex items-center justify-center shadow-gold">
            <Mountain className="h-6 w-6 text-gold-foreground" />
          </div>
          <div className="font-display text-3xl font-bold tracking-tight">
            <span className="gradient-gold-text">Prabhat</span>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: 240 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
        className="mt-8 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"
      />
      <p className="mt-4 text-xs uppercase tracking-[0.4em] text-muted-foreground">Travel with Luxury</p>
    </motion.div>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#fleet", label: "Fleet" },
    { href: "#tours", label: "Tours" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="h-10 w-10 rounded-xl bg-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
            <Mountain className="h-5 w-5 text-gold-foreground" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold tracking-tight">Prabhat</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Tour & Travels</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href}
               className="px-4 py-2 text-sm text-foreground/80 hover:text-gold relative group transition-colors">
              {l.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="hidden sm:grid h-10 w-10 place-items-center rounded-full glass hover:bg-gold/10 transition-colors"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a href={`tel:${PHONE_1}`}
             className="hidden md:inline-flex items-center gap-2 bg-gold text-gold-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-gold">
            <Phone className="h-4 w-4" /> Book Now
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden h-10 w-10 grid place-items-center glass rounded-full">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong mt-3 mx-5 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col py-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                   className="px-6 py-3 text-foreground/90 hover:bg-gold/10 hover:text-gold transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section id="home" ref={ref} className="relative h-screen min-h-[700px] w-full overflow-hidden grain">
      <motion.div style={{ scale }} className="absolute inset-0">
        <img src={heroShimla} alt="Himalayan mountains in Shimla at sunrise" className="h-full w-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 24 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold/60"
            style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }}
            animate={{ y: [0, -40, 0], opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-7xl px-5 h-full flex flex-col justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 self-start glass px-4 py-2 rounded-full mb-6"
        >
          <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Shimla • Himachal Pradesh</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] max-w-5xl"
        >
          Your Journey Begins With{" "}
          <span className="gradient-gold-text italic">Comfort, Luxury</span>{" "}
          <span className="text-foreground">&</span>{" "}
          <span className="gradient-text">Trust</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6 max-w-2xl text-lg text-foreground/80 leading-relaxed"
        >
          Explore Himachal Pradesh and India with our premium fleet, professional drivers,
          and unforgettable travel experiences crafted since over a decade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#booking" className="group inline-flex items-center gap-2 bg-gold text-gold-foreground px-7 py-4 rounded-full font-semibold shadow-gold hover:scale-105 transition-transform">
            Book Now <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#tours" className="inline-flex items-center gap-2 glass px-7 py-4 rounded-full font-semibold hover:bg-foreground/5 transition-colors">
            Explore Tours
          </a>
          <a href={`tel:${PHONE_1}`} className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-foreground/90 hover:text-gold transition-colors">
            <Phone className="h-4 w-4" /> Call Now
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-5 right-5 mx-auto max-w-7xl"
        >
          <div className="glass rounded-2xl p-5 grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { v: "24/7", l: "Service Available" },
              { v: "5000+", l: "Happy Travelers" },
              { v: "100%", l: "Safe Journeys" },
              { v: "PAN", l: "India Coverage" },
            ].map((s) => (
              <div key={s.l} className="text-center sm:text-left">
                <div className="font-display text-3xl font-bold gradient-gold-text">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ---------------- Counter ---------------- */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0; const start = performance.now(); const dur = 1800;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(p * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

/* ---------------- About ---------------- */
function About() {
  return (
    <section className="relative py-28 px-5">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gold/20 blur-3xl rounded-full" />
          <div className="relative rounded-3xl overflow-hidden shadow-luxe">
            <img src={groupTour} alt="Happy travelers with Prabhat Tour and Travels luxury bus" className="w-full h-[520px] object-cover" loading="lazy" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -right-6 glass-strong p-5 rounded-2xl flex items-center gap-3 shadow-luxe"
          >
            <div className="h-12 w-12 rounded-xl bg-gold grid place-items-center">
              <Award className="h-6 w-6 text-gold-foreground" />
            </div>
            <div>
              <div className="font-display text-2xl font-bold">10+ Years</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">of Excellence</div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.3em] mb-4">
            <Sparkles className="h-3.5 w-3.5" /> About Us
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
            Welcome to <span className="gradient-gold-text italic">Prabhat</span><br/>
            Tour and Travels
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            Prabhat Tour and Travels is one of the most trusted travel and transportation
            companies operating from Shimla, Himachal Pradesh. We specialize in customized
            holiday packages, luxury cab services, airport transfers, outstation journeys,
            pilgrimage tours, corporate transportation and nationwide vehicle allocations.
          </p>
          <p className="mt-4 text-foreground/75 leading-relaxed">
            With years of experience and a commitment to customer satisfaction, we ensure
            safe, comfortable and memorable travel experiences for individuals, families,
            groups and corporate clients.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5">
            {[
              { v: 5000, s: "+", l: "Happy Customers", I: Users },
              { v: 10, s: "+", l: "Years Experience", I: Award },
              { v: 24, s: "/7", l: "Customer Support", I: HeadphonesIcon },
              { v: 100, s: "+", l: "Premium Vehicles", I: Car },
            ].map(({ v, s, l, I }) => (
              <div key={l} className="glass rounded-2xl p-5 hover:bg-gold/5 transition-colors group">
                <I className="h-5 w-5 text-gold mb-3 group-hover:scale-110 transition-transform" />
                <div className="font-display text-3xl font-bold gradient-gold-text">
                  <Counter to={v} suffix={s} />
                </div>
                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */
const SERVICES = [
  { I: Car, t: "Luxury Taxi Booking", d: "Premium sedans and SUVs with chauffeurs for city and intercity rides." },
  { I: Plane, t: "Airport Transfers", d: "Punctual, comfortable transfers to and from Chandigarh & Delhi airports." },
  { I: Mountain, t: "Outstation Cabs", d: "Explore Himachal and beyond with reliable outstation cab service." },
  { I: Bus, t: "Tempo Traveller Rental", d: "Spacious 9 to 17 seater tempo travellers for groups and families." },
  { I: Bus, t: "Luxury Volvo Bus Rental", d: "22, 27 and 40 seater Volvo coaches for premium group journeys." },
  { I: Briefcase, t: "Corporate Transportation", d: "Dedicated fleet & billing solutions for offices and events." },
  { I: Users, t: "Family Tour Packages", d: "Hand-crafted Himachal itineraries built around your family." },
  { I: Heart, t: "Pilgrimage Tours", d: "Sacred journeys to Vrindavan, Khatu Shyam, Ayodhya and more." },
  { I: Hotel, t: "Hotel Booking Assistance", d: "Curated stays at handpicked partner hotels across destinations." },
  { I: Building2, t: "Group Transportation", d: "Schools, clubs and large groups — moved with ease." },
  { I: PartyPopper, t: "Wedding Transportation", d: "Decorated luxury fleets to make your big day flawless." },
  { I: MapIcon, t: "Customized Travel Plans", d: "Tell us your dream — we will design the perfect journey." },
];

function Services() {
  return (
    <section id="services" className="relative py-28 px-5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-primary/20 blur-[120px] rounded-full" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading kicker="What we offer" title={<>Premium <span className="gradient-gold-text italic">Travel Services</span></>}
          subtitle="From quick airport hops to month-long expeditions — we handle every mile with the same obsession for comfort." />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map(({ I, t, d }, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-2xl p-7 hover:bg-gold/5 transition-colors overflow-hidden"
            >
              <div className="absolute -top-20 -right-20 h-40 w-40 bg-gold/0 group-hover:bg-gold/20 blur-3xl rounded-full transition-colors duration-500" />
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-gold/20 to-accent/20 grid place-items-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  <I className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{d}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Fleet ---------------- */
const FLEET = [
  { name: "Volvo 22 Seater", cap: "22 Pax", type: "Luxury Coach", img: volvo22.url, features: ["Push-back seats", "AC + Music", "GPS Tracked"] },
  { name: "Volvo 27 Seater", cap: "27 Pax", type: "Premium Coach", img: volvo27.url, features: ["Reclining seats", "Curtains", "Long-haul ready"] },
  { name: "Volvo 40 Seater", cap: "40 Pax", type: "Group Luxury Bus", img: volvo40.url, features: ["2x2 layout", "Large luggage bay", "On-board entertainment"] },
  { name: "Tempo Traveller", cap: "9 - 17 Pax", type: "Family / Group", img: tempoTraveller.url, features: ["AC cabin", "Captain seats", "Hill-tested"] },
  { name: "Innova Crysta", cap: "6 - 7 Pax", type: "Premium SUV", img: innova, features: ["Diesel automatic", "Hill-grade", "Spacious boot"] },
  { name: "Luxury Sedan", cap: "4 Pax", type: "Executive Class", img: sedan, features: ["Chauffeur driven", "Mineral water", "Wi-Fi on request"] },
  { name: "Prabhat Express", cap: "35+ Pax", type: "AC Tourist Bus", img: busPrabhat.url, features: ["In-house fleet", "Tour-proven", "Branded"] },
];

function Fleet() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % FLEET.length);
  const prev = () => setI((p) => (p - 1 + FLEET.length) % FLEET.length);
  const v = FLEET[i];

  return (
    <section id="fleet" className="relative py-28 px-5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Our Fleet" title={<>A Fleet Built For <span className="gradient-gold-text italic">Every Journey</span></>}
          subtitle="Hatchbacks, sedans, SUVs, tempo travellers and luxury Volvo buses — all maintained to airline standards." />

        <div className="mt-16 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={v.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-10 items-center"
            >
              <div className="relative">
                <div className="absolute -inset-8 bg-gold/20 blur-3xl rounded-full" />
                <div className="relative rounded-3xl overflow-hidden glass shadow-luxe aspect-[4/3]">
                  <img src={volvo22set} alt={`${v.name} for rental at Prabhat Tour and Travels`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <div>
                <div className="text-gold text-xs uppercase tracking-[0.3em]">{v.type}</div>
                <h3 className="mt-3 font-display text-5xl font-bold">{v.name}</h3>
                <div className="mt-3 inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm">
                  <Users className="h-4 w-4 text-gold" /> {v.cap}
                </div>
                <ul className="mt-8 space-y-3">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-foreground/80">
                      <CheckCircle2 className="h-5 w-5 text-gold" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#booking" className="inline-flex items-center gap-2 bg-gold text-gold-foreground px-6 py-3 rounded-full font-semibold shadow-gold hover:scale-105 transition-transform">
                    Book {v.name} <ArrowRight className="h-4 w-4" />
                  </a>
                  <a href={`tel:${PHONE_1}`} className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full font-semibold">
                    <Phone className="h-4 w-4" /> Quick Quote
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {FLEET.map((_, idx) => (
                <button key={idx} onClick={() => setI(idx)}
                        className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-gold" : "w-6 bg-foreground/20 hover:bg-foreground/40"}`} />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={prev} className="h-12 w-12 rounded-full glass grid place-items-center hover:bg-gold/10 transition-colors">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={next} className="h-12 w-12 rounded-full bg-gold text-gold-foreground grid place-items-center hover:scale-105 transition-transform">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Shimla Tour Package ---------------- */
function ShimlaTour() {
  const spots = [
    { n: "Mall Road", img: mallRoad },
    { n: "The Ridge", img: mallRoad },
    { n: "Christ Church", img: christChurch },
    { n: "Lakkar Bazaar", img: mallRoad },
    { n: "Green Valley", img: kufri },
    { n: "Kufri Fun World", img: kufri },
  ];
  return (
    <section id="tours" className="relative py-28 px-5">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <SectionHeading align="left" kicker="Featured Package"
              title={<>Shimla <span className="gradient-gold-text italic">Mountain Escape</span></>}
              subtitle="2 Nights / 3 Days through the heart of Himachal's queen of hills." />
            <div className="mt-8 space-y-3">
              {[
                "Pickup & Drop included",
                "Accommodation Assistance",
                "Full Sightseeing Itinerary",
                "Driver & Fuel Charges",
                "Local Guidance",
                "24/7 On-trip Support",
              ].map((p) => (
                <div key={p} className="flex items-center gap-3 glass rounded-xl px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-sm">{p}</span>
                </div>
              ))}
            </div>
            <a href="#booking" className="mt-8 inline-flex items-center gap-2 bg-gold text-gold-foreground px-7 py-4 rounded-full font-semibold shadow-gold hover:scale-105 transition-transform">
              Book This Package <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {spots.map((s, i) => (
              <motion.div
                key={s.n + i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className={`relative rounded-2xl overflow-hidden group shadow-luxe ${i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
              >
                <img src={s.img} alt={`${s.n} Shimla sightseeing`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Stop {i + 1}</div>
                  <div className="font-display text-lg font-semibold">{s.n}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Pilgrimage ---------------- */
const PILGRIMAGE = [
  { n: "Vrindavan Tour", d: "4 Nights / 5 Days", img: vrindavan, desc: "Banke Bihari, Prem Mandir, ISKCON & holy ghats of Mathura." },
  { n: "Khatu Shyam Tour", d: "3 Nights / 4 Days", img: khatuShyam, desc: "Sacred darshan at Khatu Shyam Ji with Salasar Balaji combo." },
  { n: "Ayodhya Tour", d: "4 Nights / 5 Days", img: ayodhya, desc: "Shri Ram Janmabhoomi, Hanuman Garhi & Saryu aarti experience." },
];

function Pilgrimage() {
  return (
    <section className="relative py-28 px-5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Sacred Journeys"
          title={<>Pilgrimage <span className="gradient-gold-text italic">Tours</span></>}
          subtitle="Spiritual journeys curated with care, comfort and respect for tradition." />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {PILGRIMAGE.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-3xl overflow-hidden glass shadow-luxe"
            >
              <div className="relative h-80 overflow-hidden">
                <img src={p.img} alt={`${p.n} pilgrimage package`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute top-4 right-4 glass-strong rounded-full px-3 py-1 text-[10px] uppercase tracking-wider text-gold flex items-center gap-1.5">
                  <Calendar className="h-3 w-3" /> {p.d}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold">{p.n}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <a href="#booking" className="mt-5 inline-flex items-center gap-2 text-gold font-semibold text-sm group/cta">
                  Reserve seats
                  <ArrowRight className="h-4 w-4 group-hover/cta:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Choose ---------------- */
const WHY = [
  { I: Clock, t: "24/7 Availability", d: "Round-the-clock dispatch and on-trip support." },
  { I: Users, t: "Experienced Drivers", d: "Licensed, polite and trained for hill terrains." },
  { I: Award, t: "Luxury Fleet", d: "Sanitized, maintained and frequently upgraded." },
  { I: BadgeIndianRupee, t: "Affordable Pricing", d: "Premium experience without premium price tags." },
  { I: Globe2, t: "Nationwide Coverage", d: "Pan-India outstation & charter routes." },
  { I: ShieldCheck, t: "Safety First", d: "GPS tracked vehicles with verified drivers." },
  { I: Sparkles, t: "Transparent Pricing", d: "Zero hidden fees — what you see is what you pay." },
  { I: HeadphonesIcon, t: "Professional Support", d: "Real humans on call, every day of the year." },
];

function WhyChoose() {
  return (
    <section className="relative py-28 px-5 overflow-hidden">
      <div className="absolute top-0 left-1/4 h-[400px] w-[400px] bg-accent/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] bg-gold/20 blur-[120px] rounded-full" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading kicker="Why Travelers Pick Us"
          title={<>The Prabhat <span className="gradient-gold-text italic">Difference</span></>} />
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY.map(({ I, t, d }, i) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
              className="glass rounded-2xl p-6 text-center hover:bg-gold/5 transition-colors hover:-translate-y-1 transition-transform group"
            >
              <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br from-gold to-accent grid place-items-center mb-4 group-hover:rotate-6 transition-transform">
                <I className="h-7 w-7 text-gold-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
const GALLERY = [
  { src: busPrabhat.url, cat: "Vehicles", t: "Prabhat Fleet" },
  { src: groupTravelers.url, cat: "Customer Trips", t: "Group Departure" },
  { src: volvo22.url, cat: "Luxury Coaches", t: "Volvo 22-Seater" },
  { src: volvo27.url, cat: "Luxury Coaches", t: "Volvo 27-Seater" },
  { src: volvo40.url, cat: "Luxury Coaches", t: "Volvo 40-Seater" },
  { src: tempoTraveller.url, cat: "Vehicles", t: "Tempo Traveller" },
  { src: mallRoad, cat: "Shimla", t: "Mall Road" },
  { src: kufri, cat: "Shimla", t: "Kufri Snow" },
  { src: christChurch, cat: "Shimla", t: "Christ Church" },
  { src: vrindavan, cat: "Pilgrimage", t: "Vrindavan" },
  { src: khatuShyam, cat: "Pilgrimage", t: "Khatu Shyam" },
  { src: ayodhya, cat: "Pilgrimage", t: "Ayodhya" },
];

function Gallery() {
  const [lb, setLb] = useState<number | null>(null);
  const cats = ["All", "Vehicles", "Luxury Coaches", "Customer Trips", "Shimla", "Pilgrimage"];
  const [active, setActive] = useState("All");
  const items = active === "All" ? GALLERY : GALLERY.filter((g) => g.cat === active);

  return (
    <section id="gallery" className="relative py-28 px-5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Captured Moments"
          title={<>From Our <span className="gradient-gold-text italic">Travelers</span></>}
          subtitle="Real journeys, real fleet, real memories." />

        <div className="mt-10 flex flex-wrap gap-2 justify-center">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                active === c ? "bg-gold text-gold-foreground shadow-gold" : "glass hover:bg-gold/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {items.map((g, i) => (
            <motion.button
              key={g.src + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 8) * 0.05 }}
              onClick={() => setLb(i)}
              className="group relative w-full break-inside-avoid rounded-2xl overflow-hidden shadow-luxe block"
            >
              <img src={g.src} alt={g.t} loading="lazy" className="w-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold">{g.cat}</div>
                  <div className="font-display font-semibold">{g.t}</div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lb !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-background/95 backdrop-blur-xl grid place-items-center p-5"
            onClick={() => setLb(null)}
          >
            <motion.img
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              src={items[lb].src} alt={items[lb].t}
              className="max-h-[85vh] max-w-[90vw] rounded-2xl shadow-luxe"
            />
            <button onClick={() => setLb(null)} className="absolute top-5 right-5 h-12 w-12 rounded-full glass-strong grid place-items-center">
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const TESTIMONIALS = [
  { n: "Aarav Sharma", r: "Delhi → Shimla family trip", q: "Spotless Innova, polite driver, and on-time pickup. Prabhat made our Himachal trip stress-free.", s: 5 },
  { n: "Priya Mehta", r: "Corporate group of 35", q: "Booked their 40-seater Volvo for an offsite. Punctual, premium, and very professional team.", s: 5 },
  { n: "Ramesh Iyer", r: "Vrindavan pilgrimage", q: "Spiritual journey was handled with so much care. From hotels to darshan — flawless.", s: 5 },
  { n: "Neha Gupta", r: "Wedding transportation", q: "Decorated cars for our baraat looked fantastic. Highly recommend for weddings.", s: 5 },
  { n: "Vikram Singh", r: "Manali outstation", q: "Driver knew every shortcut on the hills. Felt very safe with the family.", s: 5 },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="relative py-28 px-5 overflow-hidden">
      <div className="absolute inset-0 bg-hero opacity-50" />
      <div className="relative mx-auto max-w-5xl text-center">
        <SectionHeading kicker="Travelers Love Us" title={<>What Our <span className="gradient-gold-text italic">Guests Say</span></>} />
        <div className="mt-16 relative h-80">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 glass-strong rounded-3xl p-10 sm:p-14 flex flex-col items-center justify-center shadow-luxe"
            >
              <Quote className="h-10 w-10 text-gold mb-6 opacity-60" />
              <p className="font-display text-2xl sm:text-3xl leading-relaxed max-w-3xl text-foreground/90 italic">
                "{TESTIMONIALS[i].q}"
              </p>
              <div className="mt-8 flex gap-1">
                {Array.from({ length: TESTIMONIALS[i].s }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <div className="mt-4 font-semibold">{TESTIMONIALS[i].n}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{TESTIMONIALS[i].r}</div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {TESTIMONIALS.map((_, idx) => (
            <button key={idx} onClick={() => setI(idx)}
                    className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-2 bg-foreground/20"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Booking ---------------- */
function Booking() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", pickup: "", dest: "", date: "", vehicle: "Innova Crysta", msg: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Prabhat Tour & Travels!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0APickup: ${form.pickup}%0ADestination: ${form.dest}%0ADate: ${form.date}%0AVehicle: ${form.vehicle}%0AMessage: ${form.msg}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <section id="booking" className="relative py-28 px-5">
      <div className="mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading align="left" kicker="Book Your Ride"
              title={<>Get An <span className="gradient-gold-text italic">Instant Quote</span></>}
              subtitle="Tell us where you're heading. We will reply on WhatsApp within minutes." />
            <div className="mt-8 space-y-4">
              {[
                { I: Phone, t: "Call us", v: "+91 78075 03816", h: `tel:${PHONE_1}` },
                { I: MessageCircle, t: "WhatsApp", v: "Chat instantly", h: `https://wa.me/${WHATSAPP}` },
                { I: Mail, t: "Email", v: EMAIL, h: `mailto:${EMAIL}` },
              ].map(({ I, t, v, h }) => (
                <a key={t} href={h} className="flex items-center gap-4 glass rounded-2xl p-4 hover:bg-gold/5 transition-colors group">
                  <div className="h-12 w-12 rounded-xl bg-gold/15 grid place-items-center group-hover:bg-gold/25 transition-colors">
                    <I className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{t}</div>
                    <div className="font-semibold">{v}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={submit}
            className="glass-strong rounded-3xl p-8 shadow-luxe space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
              <Field label="Phone Number" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Pickup Location" value={form.pickup} onChange={(v) => setForm({ ...form, pickup: v })} required />
              <Field label="Destination" value={form.dest} onChange={(v) => setForm({ ...form, dest: v })} required />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Travel Date" type="date" value={form.date} onChange={(v) => setForm({ ...form, date: v })} required />
              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Vehicle Type</label>
                <select value={form.vehicle} onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                        className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-gold transition-colors">
                  {FLEET.map((f) => <option key={f.name}>{f.name}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
              <textarea value={form.msg} onChange={(e) => setForm({ ...form, msg: e.target.value })} rows={3}
                        placeholder="Trip details, passenger count, special requests…"
                        className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-gold transition-colors resize-none" />
            </div>
            <button type="submit"
                    className="w-full bg-gold text-gold-foreground py-4 rounded-xl font-semibold shadow-gold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
              {sent ? <><CheckCircle2 className="h-5 w-5"/> Sent — Check WhatsApp</> : <>Get Instant Quote <ArrowRight className="h-4 w-4" /></>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">{label}</label>
      <input type={type} required={required} value={value} onChange={(e) => onChange(e.target.value)}
             className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 outline-none focus:border-gold transition-colors" />
    </div>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section id="contact" className="relative py-28 px-5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading kicker="Visit Us" title={<>Reach Our <span className="gradient-gold-text italic">Shimla Office</span></>} />
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <div className="space-y-5">
            <InfoCard I={MapPin} t="Office Address" lines={["Prabhat Tour and Travels", "Totu, Opposite Bake & Bite", "Shimla, Himachal Pradesh 171011"]} />
            <InfoCard I={Phone} t="Phone Numbers" lines={["+91 78075 03816", "+91 70187 09289"]} />
            <InfoCard I={Mail} t="Email" lines={[EMAIL]} />
            <InfoCard I={Clock} t="Business Hours" lines={["Open 24 Hours", "Monday — Sunday"]} />
          </div>
          <div className="rounded-3xl overflow-hidden glass shadow-luxe min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3416.4400685014734!2d77.12149227575141!3d31.097498667912213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057964ec968577%3A0x5c07cdc8def4d22!2sPrabhat%20Tour%20and%20Travels!5e0!3m2!1sen!2sin!4v1781863805583!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border: 0, minHeight: 500 }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Prabhat Tour and Travels Shimla location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ I, t, lines }: { I: typeof Phone; t: string; lines: string[] }) {
  return (
    <div className="glass rounded-2xl p-6 flex gap-5 hover:bg-gold/5 transition-colors">
      <div className="h-12 w-12 shrink-0 rounded-xl bg-gold/15 grid place-items-center">
        <I className="h-5 w-5 text-gold" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-gold mb-1">{t}</div>
        {lines.map((l) => <div key={l} className="text-foreground/85">{l}</div>)}
      </div>
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="relative border-t border-border bg-background pt-20 pb-8 px-5">
      <div className="mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="h-10 w-10 rounded-xl bg-gold flex items-center justify-center shadow-gold">
                <Mountain className="h-5 w-5 text-gold-foreground" />
              </div>
              <div>
                <div className="font-display text-lg font-bold">Prabhat</div>
                <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Tour & Travels</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Luxury travel and transportation from the queen of hills — Shimla.
              Premium fleet, professional drivers, unforgettable journeys.
            </p>
          </div>

          <FooterCol title="Quick Links" items={[
            { l: "Home", h: "#home" }, { l: "About", h: "#home" }, { l: "Fleet", h: "#fleet" },
            { l: "Gallery", h: "#gallery" }, { l: "Contact", h: "#contact" },
          ]} />
          <FooterCol title="Services" items={[
            { l: "Luxury Taxi", h: "#services" }, { l: "Airport Transfers", h: "#services" },
            { l: "Volvo Bus Rental", h: "#fleet" }, { l: "Tempo Traveller", h: "#fleet" },
            { l: "Wedding Transport", h: "#services" },
          ]} />

          <div>
            <h4 className="font-display text-lg font-semibold mb-5">Get in Touch</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex gap-3"><MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5"/>Totu, Shimla, HP 171011</div>
              <div className="flex gap-3"><Phone className="h-4 w-4 text-gold shrink-0 mt-0.5"/>+91 78075 03816</div>
              <div className="flex gap-3"><Mail className="h-4 w-4 text-gold shrink-0 mt-0.5"/>{EMAIL}</div>
            </div>
            <div className="mt-5 flex gap-3">
              <a href="https://www.facebook.com/prabhattourandtravels0005/" target="_blank" rel="noreferrer"
                 className="h-10 w-10 rounded-full glass grid place-items-center hover:bg-gold/15 transition-colors" aria-label="Facebook">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.5c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5V12H16l-.4 3h-2.2v7A10 10 0 0 0 22 12z"/></svg>
              </a>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer"
                 className="h-10 w-10 rounded-full glass grid place-items-center hover:bg-gold/15 transition-colors" aria-label="WhatsApp">
                <MessageCircle className="h-4 w-4" />
              </a>
              <a href={`tel:${PHONE_1}`}
                 className="h-10 w-10 rounded-full glass grid place-items-center hover:bg-gold/15 transition-colors" aria-label="Phone">
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <div>© 2026 Prabhat Tour and Travels. All Rights Reserved.</div>
          <div>Crafted with care in Shimla, Himachal Pradesh 🏔️</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { l: string; h: string }[] }) {
  return (
    <div>
      <h4 className="font-display text-lg font-semibold mb-5">{title}</h4>
      <ul className="space-y-2.5 text-sm">
        {items.map((i) => (
          <li key={i.l}>
            <a href={i.h} className="text-muted-foreground hover:text-gold transition-colors">{i.l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Section heading helper ---------------- */
function SectionHeading({ kicker, title, subtitle, align = "center" }: { kicker: string; title: React.ReactNode; subtitle?: string; align?: "center" | "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-2xl"}
    >
      <div className={`inline-flex items-center gap-2 text-gold text-xs uppercase tracking-[0.3em] ${align === "center" ? "" : ""}`}>
        <Sparkles className="h-3.5 w-3.5" /> {kicker}
      </div>
      <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">{title}</h2>
      {subtitle && <p className="mt-5 text-foreground/70 leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}

/* ---------------- WhatsApp Float ---------------- */
function WhatsAppFloat() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ delay: 2, type: "spring" }}
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] grid place-items-center shadow-luxe animate-pulse-glow hover:scale-110 transition-transform"
    >
      <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.683 5.522l-.999 3.648 3.805-.869zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.520-.075-.149-.668-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.371-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413z"/>
      </svg>
    </motion.a>
  );
}

/* ---------------- Marquee strip ---------------- */
function Marquee() {
  const items = ["✦ Shimla Tours", "✦ Luxury Volvo", "✦ Airport Transfers", "✦ Pilgrimage Packages", "✦ Wedding Fleet", "✦ Corporate Travel", "✦ 24/7 Support", "✦ Pan India Coverage"];
  return (
    <div className="overflow-hidden border-y border-border bg-gradient-to-r from-background via-card to-background py-5">
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-xl gradient-gold-text italic">{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Page ---------------- */
function HomePage() {
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(true);
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("light", !dark);
  }, [dark]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence>{loading && <LoadingScreen onDone={() => setLoading(false)} />}</AnimatePresence>
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Services />
        <Fleet />
        <ShimlaTour />
        <Pilgrimage />
        <WhyChoose />
        <Gallery />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
