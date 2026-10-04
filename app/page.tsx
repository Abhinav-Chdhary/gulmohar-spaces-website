import Image from "next/image";
import { HeroCarousel } from "@/components/hero-carousel";
import { ProcessSection } from "@/components/process-section";
import { SiteHeader } from "@/components/site-header";

const projects = [
  { id: 1, className: "project-card project-card--one", position: "50% 49%" },
  { id: 2, className: "project-card project-card--two", position: "53% 50%" },
  { id: 3, className: "project-card project-card--three", position: "42% 51%" },
  { id: 4, className: "project-card project-card--four", position: "62% 51%" },
];

export default function Home() {
  return (
    <main id="main-content">
      <SiteHeader />

      <section className="hero" id="top" aria-label="Gulmohar Spaces introduction">
        <HeroCarousel />
      </section>

      <section className="intro" id="about">
        <p className="section-kicker">INTERIORS | PLANNING | ART</p>
        <h1>
          <span className="intro__line">Spaces for ambition,</span>
          <span className="intro__line intro__line--second">
            <img className="intro__smile" src="/decorations/smile.svg" alt="" aria-hidden="true" />
            connection and {" "}
            <span className="intro__ease">
              ease
              <img className="intro__circle" src="/decorations/circle.svg" alt="" aria-hidden="true" />
              <img className="intro__heart" src="/decorations/heart.svg" alt="" aria-hidden="true" />
            </span>
          </span>
        </h1>
        <p className="intro__copy">
          We work with founders, families and individuals who are building lives with intention,
          pursuing growth while staying grounded in creativity, connection and everyday living.
          Inspired by their story we create spaces that support who they are becoming :)
        </p>
      </section>

      <section className="work" id="projects">
        <img className="scallop scallop--top" src="/decorations/scallop-divider.svg" alt="" aria-hidden="true" />
        <div className="work__inner">
          <div className="work__heading">
            <p className="section-kicker section-kicker--gold">EXPLORE WORK</p>
            <img className="work__arrow" src="/decorations/down-left-arrow.svg" alt="" aria-hidden="true" />
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className={project.className} key={project.id}>
                <div className="project-card__image">
                  <Image
                    className="project-card__photo"
                    fill
                    src="/reference/project-bedroom.jpg"
                    alt={`Green bedroom interior, project study ${project.id}`}
                    sizes="(min-width: 900px) 32vw, 86vw"
                    style={{ objectPosition: project.position }}
                  />
                  <img
                    className={`gold-tape gold-tape--${project.id}`}
                    src={project.id === 2 ? "/decorations/tape-horizontal.svg" : "/decorations/tape-vertical.svg"}
                    alt=""
                    aria-hidden="true"
                  />
                </div>
                <p className="project-card__name">PROJECT NAME</p>
                <p className="project-card__location">BANGALORE</p>
              </article>
            ))}
          </div>

          <a className="view-all" href="mailto:hello@gulmoharspaces.com">
            <span>VIEW ALL</span>
            <img src="/decorations/right-arrow.svg" alt="" aria-hidden="true" />
          </a>
        </div>
        <img className="scallop scallop--bottom" src="/decorations/scallop-divider.svg" alt="" aria-hidden="true" />
      </section>

      <section className="testimonial" aria-label="Founder note">
        <div className="testimonial__inner">
          <div className="testimonial__portrait">
            <Image
              fill
              src="/reference/founder-portrait.png"
              alt="Portrait of Priya, founder of Gulmohar Spaces"
              sizes="180px"
            />
            <img className="testimonial__slashes" src="/decorations/double-slash.svg" alt="" aria-hidden="true" />
          </div>
          <blockquote>
            <p>“I never thought i’d do this shi, I have been so confused all my life and then this career confused me even more, fuck everyone who thinks this is cool, idgf”</p>
            <cite>
              - priya c, founder
              <img className="testimonial__heart" src="/decorations/heart.svg" alt="" aria-hidden="true" />
            </cite>
          </blockquote>
        </div>
      </section>

      <ProcessSection />
    </main>
  );
}
