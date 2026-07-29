import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="relative h-screen w-screen overflow-hidden flex items-center justify-center text-white">
      {/* Hero Background */}
      <Image
        src="/hero.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Grain Overlay */}
      <Image
        src="/grain.avif"
        alt=""
        fill
        aria-hidden
        sizes="100vw"
        quality={40}
        className="object-cover opacity-6 pointer-events-none"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <article className="relative z-10 lg:px-10 px-2 max-w-[100rem] mx-auto">
        <h1 className="text-left font-semibold 2xl:text-9xl xl:text-8xl text-nowrap leading-none lg:text-[5.4rem] md:text-7xl sm:text-6xl text-[2.91rem] max-sm:leading-none max-xs:text-4xl">
          HIGH-END{" "}
          <span className="lowercase italic font-thin itt">websites</span>
        </h1>

        <div className="flex justify-between w-full">
          <p className="text-balance font-extralight max-lg:text-sm max-w-110 sm:mt-2 max-md:text-xs mt-2 max-sm:text-[8px] max-xs:text-[6.3px] 2xl:text-lg">
            Hey! I'm Saud, a full-stack developer building fast, modern
            websites, web apps, and I will make sure your websites are as
            high-end as this one.
          </p>

          <h1 className="px-2 text-right text-nowrap font-semibold 2xl:text-9xl xl:text-8xl lg:text-[5.4rem] md:text-7xl sm:text-6xl text-[2.91rem] max-xs:text-4xl">
            FOR
            <span className="lowercase italic font-thin itt"> businesses</span>
          </h1>
        </div>
      </article>

      {/* Bottom Bar */}
      <div className="absolute bottom-1 z-10 lg:px-10 px-4 flex gap-2 max-w-360 w-full justify-between max-sm:justify-center p-5 max-sm:text-sm">
        <div className="font-bold flex gap-2 justify-center max-sm:hidden">
          <p>
            10+ <span className="text-gray-300">[PROJECTS]</span>
          </p>
          <p>
            1Y <span className="text-gray-300">[EXPERIENCE]</span>
          </p>
        </div>

        <div className="flex gap-1 items-center font-bold justify-center max-sm:flex-col">
          <Image
            src="/arr.svg"
            alt=""
            width={16}
            height={16}
            className="animate-bounce mt-1.5"
          />
          SEE WORK
        </div>
      </div>
    </main>
    // <main className="bg-[url(/hero-2.webp)] bg-cover h-screen w-screen text-white flex items-center flex-col justify-center">
    //   <div className="absolute inset-0 opacity-12 pointer-events-none bg-[url('/grain.avif')]" />
    //   <article className="lg:px-10 px-2 max-w-400 relative z-10 mx-auto">
    //     <h1 className="text-left font-semibold 2xl:text-9xl xl:text-8xl text-nowrap leading-none lg:text-[5.4rem] md:text-7xl sm:text-6xl text-[2.91rem] max-sm:leading-none  max-xs:text-4xl">
    //       HIGH-END{" "}
    //       <span className=" lowercase italic font-thin up itt">websites</span>
    //     </h1>
    //     <div className="flex justify-between w-full ">
    //       <p className="text-balance font-extralight max-lg:text-sm max-w-110 sm:mt-2 max-md:text-xs mt-2 max-sm:text-[8px] max-xs:text-[6.3px] 2xl:text-lg">
    //         Hey! I'm Saud, a full-stack developer building fast, modern
    //         websites, web apps. and I will make sure your websites will high-end
    //         like this one.
    //       </p>
    //       <h1 className="px-2 text-right text-nowrap font-semibold  2xl:text-9xl  xl:text-8xl lg:text-[5.4rem] md:text-7xl max-xl: sm:text-6xl  text-[2.91rem] max-xs:text-4xl">
    //         FOR
    //         <span className=" lowercase italic font-thin  itt">
    //           {" "}
    //           businesses
    //         </span>
    //       </h1>
    //     </div>
    //   </article>

    //   <div className="flex-0 absolute bottom-1 max-sm:text-sm lg:px-10 px-4 flex gap-2 max-w-360 w-full justify-between max-sm:justify-center p-5">
    //     <h1 className="font-bold flex gap-2 justify-center max-sm:hidden">
    //       <p>
    //         10+ <span className="text-gray-300 ">[PROJECTS]</span>{" "}
    //       </p>
    //       <p>
    //         1Y <span className="text-gray-300">[EXPERIENCE]</span>{" "}
    //       </p>
    //     </h1>
    //     <h1 className="flex gap-1 items-center font-bold justify-center max-sm:flex-col">
    //       <img src="/arr.svg" alt="" className="h-4 animate-bounce mt-1.5" />
    //       SEE WORK
    //     </h1>
    //   </div>
    // </main>
    //
  );
};

export default HeroSection;
