import Image from "next/image";
const services = [
  { title: "FULL-STACK DEVELOPER", tag: "NEXT.JS + NODE.JS" },
  { title: "FRONTEND ENGINEER", tag: "REACT + TYPESCRIPT" },
  { title: "FIGMA TO CODE", tag: "PIXEL-PERFECT" },
  { title: "UI/UX IMPLEMENTATION", tag: "TAILWIND CSS" },
  { title: "DATABASE & BACKEND", tag: "MONGODB + REST APIS" },
  { title: "PERFORMANCE & SEO", tag: "NEXT.JS OPTIMIZATION" },
];

export default function ExpertiseSection() {
  return (
    <section className="bg-black text-white py-24 my-12 px-6 lg:px-10">
      <div className="w-full">
        {/* Header */}
        <div className="flex w-full max-md:flex-col justify-between gap-12">
          <div className="flex w-50 gap-4">
            <p className="text- uppercase tracking-[0.25em] text-zinc-500">
              Expertise
            </p>
            <p className="text-sm pt-0.5 text-gray-300"> [DESCRIPTION] </p>
          </div>

          <div 
          data-aos="fade-up"
          >
            <h2 className=" text-[clamp(1.9rem,6vw,5.8rem)] text-wrap font-semibold leading-[0.95] uppercase">
              Everything You Need  <br />
              <span className="italic font-thin normal-case itt"> 
                to build exceptional web products
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-zinc-400 leading-8">
              I help startups, founders, and businesses build fast, scalable
              websites and web applications using modern technologies. From a
              Figma file to a fully deployed product, I handle the entire
              development process.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-lg:flex-col gap-14 mt-20">
          {/* Accordion */}
          <div className="flex flex-col  gap-10 items-center lg:w-1/2">
            {services.map((service, index) => (
              <div
              data-aos="fade-up"
                key={index}
                className="collapse border-b border-zinc-800 rounded-none"
              >
                <div className="collapse-title px-0">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="uppercase font-semibold">
                        {service.title}
                      </h3>
                    </div>

                    <span className="text-zinc-500">[{service.tag}]</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/banner.png"
              alt="Development"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
