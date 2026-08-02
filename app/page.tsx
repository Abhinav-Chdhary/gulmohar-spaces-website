import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Instagram, Mail, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";

const projects = [
  { name: "A house for slow mornings", location: "Alibaug · Residential", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1500&q=85", className: "md:col-span-7" },
  { name: "The quiet office", location: "Mumbai · Workplace", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85", className: "md:col-span-5 md:mt-32" },
  { name: "Courtyard in green", location: "Goa · Hospitality", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1500&q=85", className: "md:col-span-5" },
  { name: "A familiar kind of new", location: "Bengaluru · Residential", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1500&q=85", className: "md:col-span-7 md:mt-24" },
];

const instagram = [
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=700&q=80",
];

export default function Home() {
  return (
    <main id="main-content" className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Gulmohar Spaces",
            description: "Interior architecture and design studio for homes and hospitality spaces across India.",
            url: "https://gulmoharspaces.com",
            email: "hello@gulmoharspaces.com",
            areaServed: "IN",
            serviceType: ["Interior architecture", "Interior design", "Turnkey interiors"],
          }),
        }}
      />
      <section id="top" className="relative min-h-[770px] bg-ink text-paper md:min-h-screen">
        <SiteHeader />
        <Image priority fill sizes="100vw" className="object-cover object-center opacity-75" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2200&q=90" alt="A warm, restrained living room" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/5 to-ink/65" />
        <div className="relative z-10 mx-auto flex min-h-[770px] max-w-[1440px] flex-col justify-end px-5 pb-8 pt-36 md:min-h-screen md:px-10 md:pb-10">
          <Reveal className="max-w-5xl">
            <p className="eyebrow mb-5 text-paper/80">Interior architecture · India</p>
            <h1 className="display max-w-4xl text-[clamp(3.6rem,8.8vw,8.4rem)] leading-[.83] tracking-[-.045em]">Spaces that<br /><i className="font-normal">settle into you.</i></h1>
          </Reveal>
          <div className="mt-12 flex items-end justify-between border-t border-white/30 pt-4 md:mt-16">
            <p className="max-w-[250px] text-sm leading-relaxed text-paper/85">We design lived-in interiors that make room for ritual, rest and all the life in between.</p>
            <a className="flex h-12 w-12 items-center justify-center rounded-full border border-paper/60 transition hover:bg-paper hover:text-ink" href="#projects" aria-label="Explore our work"><ArrowDownRight size={20} /></a>
          </div>
        </div>
      </section>

      <section id="about" className="bg-paper px-5 py-24 md:px-10 md:py-36">
        <Reveal className="mx-auto grid max-w-[1240px] gap-10 md:grid-cols-12">
          <p className="eyebrow md:col-span-3">Our point of view</p>
          <div className="md:col-span-8 md:col-start-5">
            <h2 className="display text-4xl leading-[.96] tracking-[-.03em] md:text-6xl">The best spaces do not announce themselves. They simply feel <i className="text-moss">right.</i></h2>
            <div className="mt-10 grid gap-7 border-t border-ink/20 pt-6 text-sm leading-relaxed text-ink/75 md:grid-cols-2">
              <p>Gulmohar Spaces is an interior design studio for those who care how their homes hold a day. We balance clarity with character, creating rooms that are generous, grounded and entirely personal.</p>
              <p>From the first pencil line to the final cushion, we make decisions with a sense of material, light and the people who will call the space their own.</p>
            </div>
            <a href="#services" className="mt-10 inline-flex items-center gap-2 border-b border-ink pb-1 text-[11px] font-bold uppercase tracking-[.15em]">Meet the studio <MoveRight size={16} /></a>
          </div>
        </Reveal>
      </section>

      <section id="projects" className="bg-stone px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-[1440px]">
          <Reveal className="mb-14 flex items-end justify-between md:mb-20"><div><p className="eyebrow mb-4">Selected work</p><h2 className="display text-5xl tracking-[-.04em] md:text-7xl">Made to be lived in.</h2></div><a href="#contact" className="hidden items-center gap-2 text-[11px] font-bold uppercase tracking-[.15em] md:flex">View all work <ArrowUpRight size={16} /></a></Reveal>
          <div className="grid gap-x-7 gap-y-16 md:grid-cols-12 md:gap-y-24">
            {projects.map((project) => <Reveal key={project.name} className={project.className}>
              <a href="#contact" className="group block"><div className="image-zoom relative aspect-[1.12/1] overflow-hidden bg-moss"><Image fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" src={project.image} alt={project.name} /></div><div className="mt-4 flex items-start justify-between gap-4"><div><h3 className="display text-2xl leading-none md:text-3xl">{project.name}</h3><p className="mt-2 text-[10px] font-bold uppercase tracking-[.14em] text-ink/60">{project.location}</p></div><ArrowUpRight className="mt-1 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" size={18} /></div></a>
            </Reveal>)}
          </div>
        </div>
      </section>

      <section id="services" className="bg-ink px-5 py-24 text-paper md:px-10 md:py-36">
        <div className="mx-auto grid max-w-[1240px] gap-14 md:grid-cols-12"><Reveal className="md:col-span-4"><p className="eyebrow text-paper/60">What we do</p><h2 className="display mt-5 text-5xl leading-none tracking-[-.04em] md:text-6xl">A complete view, down to the smallest detail.</h2></Reveal>
          <div className="md:col-span-7 md:col-start-6">{[["01", "Interior architecture", "Space planning, detailing and a material language that gives the whole project a quiet coherence."], ["02", "Turnkey interiors", "From custom furniture to the final installation, one considered process and a single point of accountability."], ["03", "Styling & finishing", "The last layer: art, objects, textiles and lighting selected to make a space feel immediately, unmistakably yours."]].map(([number, title, text]) => <Reveal key={number} className="grid grid-cols-[42px_1fr] gap-4 border-t border-white/20 py-7 last:border-b"><span className="text-[10px] font-bold tracking-wider text-brass">{number}</span><div><h3 className="display text-3xl">{title}</h3><p className="mt-3 max-w-md text-sm leading-relaxed text-paper/65">{text}</p></div></Reveal>)}</div>
        </div>
      </section>

      <section className="bg-paper px-5 py-24 md:px-10 md:py-36"><div className="mx-auto grid max-w-[1240px] gap-12 md:grid-cols-12"><Reveal className="md:col-span-3"><p className="eyebrow">Why Gulmohar</p></Reveal><Reveal className="md:col-span-8 md:col-start-5"><blockquote className="display text-4xl leading-[.98] tracking-[-.035em] md:text-6xl">“Our work has a certain ease to it—because we have done the hard work of noticing everything.”</blockquote><div className="mt-12 grid gap-8 border-t border-ink/20 pt-7 md:grid-cols-3">{[["Curious listening", "Every project begins with a conversation about how you want to feel, not just what you need."], ["Material intelligence", "We draw from place, craft and the honest character of materials to make rooms with staying power."], ["Calm collaboration", "A rigorous, transparent process makes room for the delight of watching your home come together."]].map(([title, text]) => <div key={title}><h3 className="text-sm font-bold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-ink/65">{text}</p></div>)}</div></Reveal></div></section>

      <section className="bg-moss px-5 py-24 text-paper md:px-10 md:py-36"><Reveal className="mx-auto max-w-[950px] text-center"><p className="eyebrow text-paper/60">A note from our clients</p><blockquote className="display mt-8 text-4xl leading-[1.02] tracking-[-.03em] md:text-6xl">“They gave us a home that feels like it has always known us—unforced, warm and deeply our own.”</blockquote><p className="mt-8 text-[10px] font-bold uppercase tracking-[.17em] text-paper/70">— Rhea & Kunal, Bandra</p></Reveal></section>

      <section className="bg-stone px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-[1440px]"><Reveal className="mb-10 flex items-end justify-between"><div><p className="eyebrow mb-3">Follow the process</p><h2 className="display text-4xl tracking-[-.035em] md:text-5xl">In the studio</h2></div><a href="#contact" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.15em]"><Instagram size={16} /> @gulmoharspaces</a></Reveal><div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">{instagram.map((image, index) => <Reveal key={image} className={index === 1 ? "md:mt-10" : ""}><a className="image-zoom relative block aspect-square overflow-hidden" href="#contact"><Image fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover" src={image} alt="Gulmohar Spaces studio inspiration" /></a></Reveal>)}</div></div></section>

      <section id="contact" className="bg-paper px-5 py-24 md:px-10 md:py-36"><Reveal className="mx-auto max-w-[1240px] border-t border-ink/30 pt-10 md:pt-14"><p className="eyebrow">Let&apos;s make room for it</p><div className="mt-8 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end"><h2 className="display max-w-3xl text-5xl leading-[.9] tracking-[-.045em] md:text-8xl">A home that feels like <i className="text-clay">you.</i></h2><Button asChild><a href="mailto:hello@gulmoharspaces.com">Tell us about your project <ArrowUpRight size={16} /></a></Button></div></Reveal></section>

      <footer className="bg-ink px-5 py-10 text-paper md:px-10"><div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-10 md:flex-row md:items-end"><div><span className="display text-3xl">gulmohar</span><span className="ml-1 text-[9px] font-bold uppercase tracking-[.3em]">spaces</span><p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">Interior architecture and design for homes and hospitality spaces across India.</p></div><div className="flex gap-7 text-[10px] font-bold uppercase tracking-[.14em] text-paper/70"><a className="hover:text-paper" href="mailto:hello@gulmoharspaces.com"><Mail size={15} /></a><a className="hover:text-paper" href="#top">Instagram</a><a className="hover:text-paper" href="#top">LinkedIn</a></div><p className="text-[10px] uppercase tracking-[.12em] text-paper/45">© 2026 Gulmohar Spaces</p></div></footer>
    </main>
  );
}
