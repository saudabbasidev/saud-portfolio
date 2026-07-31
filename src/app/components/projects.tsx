import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Homestead",
    category: "Landing Page",
    year: "2026",
    description:
      "An AI SaaS platform built with Next.js, TypeScript and MongoDB featuring authentication, subscriptions, dashboards and server actions.",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "DaisyUI"],
    image: "https://homestead-saud-project.vercel.app/preview.avif",
    live: "https://homestead-saud-project.vercel.app",
    github: "https://github.com/saudabbasidev/homestead-landing-page",
  },

  {
    id: 2,
    title: "Logisti",
    category: "Landing Page",
    year: "2026",
    description:
      "High-converting landing page developed from a Figma design with smooth interactions, responsive layouts and excellent Lighthouse scores.",
    stack: ["Next.js", "React", "TailwindCSS", "DaisyUI"],
    image: "https://logisti-saud-project.vercel.app/preview.png",
    live: "https://logisti-saud-project.vercel.app",
    github: "https://github.com/saudabbasidev/logisti-landing-page",
  },

  {
    id: 3,
    title: "Greenly- Your Future Garden",
    category: "Landing Page",
    year: "2024",
    description:
      "A responsive landscaping business landing page built with React and Tailwind CSS, designed to highlight services, build trust, and generate customer inquiries.",
    stack: ["Next.js", "TypeScript", "React", "Tailwindcss"],
    image: "https://greenly-saud-project.vercel.app/preview.avif",
    live: "https://greenly-saud-project.vercel.app",
    github: "https://github.com/saudabbasidev/AI-LMS",
  },
  {
    id: 3,
    title: "Beanro- Your Morning Starts Here",
    category: "Landing Page",
    year: "2024",
    description:
      "A modern and responsive cafe landing page built with React and Tailwind CSS, featuring a clean UI, menu showcase, and clear call-to-action for customers.",
    stack: ["Next.js", "TypeScript", "React", "Tailwindcss"],
    image: "https://cafe-saud-project.vercel.app/preview.avif",
    live: "https://cafe-saud-project.vercel.app",
    github: "https://github.com/saudabbasidev/AI-LMS",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-black text-white py-32 px-4 sm:px-6 lg:px-10"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-[420px_1fr] gap-12 mb-24">
          <div>
            <p className="uppercase text-xs tracking-[0.25em] text-zinc-500">
              Selected Work
            </p>
          </div>

          <div>
            <h2 className="uppercase font-semibold leading-[0.9] tracking-tight text-[clamp(3rem,7vw,6rem)]">
              FEATURED
              <br />
              <span className="italic font-light lowercase itt text-[clamp(3rem,7vw,5rem)]">
                {" "}
                projects & case studies
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-zinc-400 leading-8">
              Every project is crafted with performance, scalability and
              attention to detail. From landing pages to full-stack web
              applications, my focus is building products that help businesses
              grow.
            </p>
          </div>
        </div>

        {/* Projects */}
        <div className="space-y-14">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`grid items-center gap-8 lg:gap-12 py-6 ${
                index % 2 === 0
                  ? "lg:grid-cols-[1.05fr_.95fr]"
                  : "lg:grid-cols-[.95fr_1.05fr]"
              }`}
            >
              {/* Image */}
              <div
                className={`${
                  index % 2 === 1 ? "lg:order-2" : ""
                } group relative overflow-hidden rounded-xl border border-zinc-800`}
              >
                {/* Perfect for 1200x630 OG images */}
                <div className="relative aspect-[1.91/1] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={300}

                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  [{project.category}] • {project.year}
                </p>

                <h3 className="mt-3 text-2xl font-semibold leading-tight sm:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-zinc-400 sm:text-base">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <p
                      key={tech}
                      className="badge badge-outline rounded-full border-zinc-700 px-3 py-3 text-xs"
                    >
                      {tech}
                    </p>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm rounded-none border-white bg-white text-black hover:bg-transparent hover:text-white"
                  >
                    Live Demo
                    <ArrowUpRight size={16} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline rounded-none border-zinc-700 hover:border-white"
                  >
                    <img
                      src="/github.svg"
                      alt="GitHub"
                      className="w-4 rounded-full bg-white"
                    />
                    Github
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
