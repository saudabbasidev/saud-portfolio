import React from "react";

const Reviewsectio = () => {
  const testimonials = [
    {
      review:
        "Working with Saud was seamless. He transformed our Figma design into a fast, polished website with incredible attention to detail.",
      name: "John Anderson",
      role: "Founder",
      source: "LinkedIn",
    },
    {
      review:
        "Excellent communication, clean code, and delivered ahead of schedule. I wouldn't hesitate to work together again.",
      name: "Sarah Williams",
      role: "Startup CEO",
      source: "LinkedIn",
    },
    {
      review:
        "One of the best developers we've hired. Every interaction was professional and the final product exceeded expectations.",
      name: "Michael Brown",
      role: "Product Manager",
      source: "LinkedIn",
    },
  ];
  return (
    <>
      <section className="relative overflow-hidden bg-black py-32 text-white">
        {/* Circles */}
        <div className="absolute inset-0 flex justify-center pointer-events-none">
          
          <div 
          data-aos="fade-up"
          className="absolute h-[900px] w-[900px] rounded-full border border-white/10"></div>
          <div className="absolute h-[650px] w-[650px] rounded-full border border-white/10"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Heading */}

          <div className="mx-auto max-w-5xl text-center"
          data-aos="fade-up"
          >
            <h2 className="text-[clamp(3rem,6vw,6rem)] font-semibold uppercase leading-[0.95]">
              DON'T TAKE MY WORD
              <br />
              FOR IT.
              <span className="font-light italic lowercase text-zinc-400">
                {" "}
                hear it{" "}
              </span>
              DIRECTLY
              <br />
              FROM MY CLIENTS.
            </h2>
          </div>

          {/* Testimonials */}

          <div className="mt-32 flex gap-12 overflow-x-auto px-6 ">
            {testimonials.map((item) => (
              <article
              data-aos="fade-up"
                key={item.name}
                className="min-w-[420px] max-w-[420px] flex-shrink-0"
              >
                <p className="mb-8 text-yellow-400 tracking-[0.1em] select-none">[★★★★★]</p>

                <p className="leading-8 text-balance text-zinc-300 max-sm:text-sm">{item.review}</p>

                <div className="mt-10 flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full bg-zinc-300"></div>

                  <div className="text-xs uppercase tracking-wide">
                    <span className="">{item.name}</span>

                    <span className="text-zinc-500">
                      {" "}
                      [ {item.role} ] / [ FROM {item.source.toUpperCase()} ]
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Reviewsectio;
