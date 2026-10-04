"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const processSteps = [
  {
    number: "01.",
    title: "Discovery",
    subtitle: "Understanding you, your space and what matters.",
    copy: "We begin with a conversation and a site visit to understand the people, the place and the possibilities. We look at how you live or work, what is and isn't working, what you need from the space, your aspirations, timeline and budget. This is where we establish the foundation for the project and begin to understand the story behind it.",
  },
  {
    number: "02.",
    title: "Vision",
    subtitle: "Finding the feeling before finding the look.",
    copy: "Before we reach for references or moodboards, we spend time with what we have learned. We ask what the space should evoke and what kind of experience we want to create within it. From this comes the larger design direction, which begins to inform the planning, materials, colours, art and details.",
  },
  {
    number: "03.",
    title: "Design Development",
    subtitle: "Turning an idea into a space that works.",
    copy: "The vision takes shape through space planning, layouts, material exploration, furniture, lighting, art and 3D visualisations. We develop the details alongside the larger idea, refining the design through conversations and feedback until the space feels both considered and true to you.",
  },
  {
    number: "04.",
    title: "Documentation & Execution",
    subtitle: "Making the design real, with care at every step.",
    copy: "Once the design is resolved, we translate it into the drawings, specifications and material selections needed to bring it to life. We coordinate with vendors and craftspeople, oversee the work on site and stay closely involved as the space takes shape.",
  },
  {
    number: "05.",
    title: "Styling, Layering & Handover",
    subtitle: "The details that make a space feel lived in.",
    copy: "A space is not finished when construction is finished. We bring together lighting, textiles, art, plants, objects and the smaller details that give the space its character, then hand over a space that is ready to be lived in and to continue evolving with you.",
  },
];

export function ProcessSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!videoOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVideoOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [videoOpen]);

  return (
    <>
      <section className="process-reference" id="process">
        <img
          className="process-reference__tape"
          src="/decorations/tape-vertical.svg"
          alt=""
          aria-hidden="true"
        />
        <div className="process-reference__inner">
          <div className="process-reference__label">
            <p>Process</p>
          </div>

          <p className="process-reference__lead">
            Every project begins with a conversation. We want to understand not just what you want
            your space to look like, but what is changing in your life, what the space needs to
            support, and how you want to feel when you are in it.
          </p>

          <div className="process-reference__list">
            {processSteps.map((step) => (
              <article key={step.number}>
                <div className="process-reference__heading">
                  <span>{step.number}</span>
                  <h2>{step.title}</h2>
                </div>
                <div className="process-reference__copy">
                  <h3>{step.subtitle}</h3>
                  <p>{step.copy}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="process-film">
            <button type="button" onClick={() => setVideoOpen(true)} aria-label="Play process film">
              <Image
                fill
                src="/reference/process-room.webp"
                alt="Warm living room interior featured in the process film"
                sizes="(min-width: 900px) 680px, 92vw"
              />
              <span className="process-film__play" aria-hidden="true"><span /></span>
            </button>
            <p>Alternatively, you can watch Priya explain it herself.</p>
          </div>
        </div>
      </section>

      {videoOpen && (
        <div
          className="process-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="process-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setVideoOpen(false);
          }}
        >
          <button className="process-modal__close" type="button" onClick={() => setVideoOpen(false)}>
            Close
          </button>
          <div className="process-modal__card">
            <div className="process-modal__image">
              <Image fill src="/reference/process-room.webp" alt="" sizes="min(800px, 92vw)" />
            </div>
            <p id="process-modal-title">Process film coming soon.</p>
            <a href="mailto:hello@gulmoharspaces.com">Get in touch in the meantime</a>
          </div>
        </div>
      )}
    </>
  );
}
