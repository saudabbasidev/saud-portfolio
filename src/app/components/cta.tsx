import React from "react";
import ContactForm from "./form";

const CtaSection = () => {
  return (
    <>
      <section>
        <section className="bg-black text-white py-28 px-6 lg:px-10">
          <div className="">
            {/* Header */}
            <div className="flex flex-col mb-10 py-10">
              <div>
                <p className="uppercase text-xs tracking-[0.25em] text-zinc-500">
                  Contact
                </p>
              </div>

              <div className="md:text-center"
              data-aos="fade-up"
              >
                <h2 className="text-[clamp(2.76rem,6vw,5.8rem)] font-semibold leading-[1] uppercase" id="contact">
                  LET'S BUILD
                  <br />
                  <span className="font-light italic lowercase itt">
                    something amazing
                  </span>
                  <br />
                  TOGETHER.
                </h2>

                <p className="mt-8 mx-auto max-w-xl text-zinc-400 leading-8">
                  Whether it's a landing page, a full-stack application, or
                  turning a Figma design into production-ready code, I'd love to
                  hear about your project.
                </p>
              </div>
            </div>
<section >

          <ContactForm/>
</section>
          </div>
        </section>
      </section>
      <p className="text-center max-sm:text-sm max-xs:text-xs p-10 text-zinc-400" >
        Copyright © 2025 Saud Abbasi. All rights reserved.
      </p>
    </>
  );
};

export default CtaSection;
