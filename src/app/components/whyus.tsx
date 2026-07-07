import React from "react";

const WhyusSection = () => {
  const services = [
    {
      id: "01",
      title: "Landing Page Development",
      description:
        "Pixel-perfect, responsive landing pages built from Figma with clean code, smooth animations, and a strong focus on conversions.",
    },
    {
      id: "02",
      title: "Frontend Development",
      description:
        "Modern interfaces built with Next.js, React, TypeScript, and Tailwind CSS. Fast, accessible, responsive, and easy to maintain.",
    },
    {
      id: "03",
      title: "Backend Development",
      description:
        "Scalable APIs, authentication, databases, and server-side logic using Next.js, MongoDB, Mongoose, Clerk, and NextAuth.",
    },
    {
      id: "04",
      title: "Full-Stack Applications",
      description:
        "Complete web applications from frontend to backend, including dashboards, authentication, CRUD operations, and third-party integrations.",
    },
    {
      id: "05",
      title: "Figma to Next.js",
      description:
        "Transform Figma designs into production-ready websites with clean architecture, reusable components, and responsive layouts.",
    },
    {
      id: "06",
      title: "Performance & SEO",
      description:
        "Optimized Core Web Vitals, metadata, Open Graph, semantic HTML, image optimization, and technical SEO for maximum performance.",
    },
  ];

  return (
    <>
      <section className=" py-10">
        <div className="flex justify-center items-center gap-4 my-10">
          <p className="text- uppercase tracking-[0.25em] text-gray-100 font-bold">
            Expertise
          </p>
          <p className="text-sm pt-0.5  text-zinc-500"> [DESCRIPTION] </p>
        </div>
        
        <h1 
        
        data-aos="fade-up"
        className="text-[clamp(1.76rem,6vw,5.8rem)] text-center px-2 font-semibold leading-[1.1] uppercase my-20">
          Imagine you work with one <br /> freelancer that has
          <span className="text-zinc-500 italic lowercase  "> oversight </span>
          <br />
          over your business.
        </h1>

        <div>
          <div className="flex flex-col  gap-10 items-center sm:p-10 px-3 mt-10">
            {services.map((service) => (
              <div
              data-aos="fade-up"
                key={service.id}
                className="collapse border-b border-zinc-800 rounded-none"
              >
                <input type="checkbox" />

                <div className="collapse-title px-0">
                  <div className="flex justify-between items-center">
                    <h3 className="uppercase font-semibold">{service.title}</h3>

                    <span className="text-zinc-500">[{service.id}]</span>
                  </div>
                </div>

                <div className="collapse-content px-0 text-zinc-400 leading-7">
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyusSection;
