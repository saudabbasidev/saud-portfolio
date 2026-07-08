import { ArrowUpRight, Mail, MapPin, Clock3 } from "lucide-react";

export default function IntroductionSection() {
  return (
    <section className="bg-black text-white py-32 px-6 lg:px-10">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}

        {/* 

        <div className="grid lg:grid-cols-[430px_1fr] gap-16">
        
          <div>
            <p className="uppercase tracking-[0.25em] text-xs text-zinc-500">
              Introduction
            </p>

            <h2 className="mt-8 uppercase font-semibold leading-[0.9] text-[clamp(3rem,7vw,6rem)]">
              WHO'S
              <br />
              BEHIND
              <br />
              <span className="italic font-light lowercase">the code?</span>
            </h2>
          </div>

         
          <div>
            <p className="max-w-2xl text-xl text-zinc-400 leading-9">
              Hi, I'm <span className="text-white font-medium">Saud</span> — a
              full-stack developer specializing in building modern landing
              pages, high-performance websites, and scalable web applications
              with Next.js and TypeScript. I enjoy transforming ideas into
              polished, production-ready products with clean code and
              exceptional user experiences.
            </p>
          </div>
        </div>
 */}

        <div className="flex w-full max-md:flex-col justify-center gap-20">
          <div className="">
            <p className="text- uppercase tracking-[0.25em] text-zinc-500">
              Introduction
            </p>
          </div>

          <div >
            <h2 className=" text-[clamp(1.9rem,6vw,5.8rem)] text-wrap font-semibold leading-[0.95] uppercase">
              WHO'S BEHIND  
              <span className="italic font-thin normal-case itt"> the code ?</span>
            </h2>

            <p className="mt-8 max-w-2xl text-zinc-400 leading-8">
              Hi, I'm <span className="text-white font-medium">Saud</span> — a
              full-stack developer specializing in building modern landing
              pages, high-performance websites, and scalable web applications
              with Next.js and TypeScript. I enjoy transforming ideas into
              polished, production-ready products with clean code and
              exceptional user experiences.
            </p>
          </div>
        </div>

        {/* Main Content */}

        <div className="grid lg:grid-cols-[430px_1fr] gap-16 mt-24">
          {/* Image */}

          <div>
            <div className="relative overflow-hidden rounded-xl border border-zinc-800 aspect-[4/5]">
              <img
                src="/me.jpg"
                alt="Saud Abbasi"
                className="w-full h-full object-cover grayscale"
              />

              {/* Grain */}

              <div className="absolute inset-0 opacity-10 bg-[url('/noise.png')]" />
            </div>
          </div>

          {/* Info */}

          <div>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
              <Info title="Role" value="Full-Stack Developer" />

              <Info
                title="Location"
                value="Karachi, Pakistan"
                icon={<MapPin size={17} />}
              />

              <Info
                title="Availability"
                value="Available for Freelance"
                icon={<Clock3 size={17} />}
              />

              <Info
                title="Email"
                value="hello@saudabbasi.dev"
                icon={<Mail size={17} />}
              />
            </div>

            {/* Divider */}

            <div className="divider divider-neutral my-14" />

            {/* Services */}

            {/* <div>
              <p className="uppercase text-xs tracking-[0.25em] text-zinc-500 mb-8">
                I CAN HELP WITH
              </p>

              <div className="flex flex-wrap gap-4">
                {[
                  "Landing Pages",
                  "Frontend Development",
                  "Backend Development",
                  "Full-Stack Apps",
                  "Figma to Next.js",
                  "Performance & SEO",
                ].map((item) => (
                  <span
                    key={item}
                    className="badge badge-outline badge-lg rounded-full px-5 py-5 border-zinc-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div> */}

            {/* Divider */}

            {/* <div className="divider divider-neutral my-16" /> */}

            {/* Socials */}

            <div className="grid sm:grid-cols-2 gap-5">
              <SocialCard
                icon={ <img src={"https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-white-icon.png"} className="h-[22px] "/> }
                title="GitHub"
                username="@saudabbasidev"
                href="https://github.com/saudabbasidev"
              />

              <SocialCard
                icon={<img  className={"h-[18px]"}  src={"https://cdn-icons-png.flaticon.com/512/3991/3991775.png"}/>}
                title="LinkedIn"
                username="/in/saud"
                href="https://linkedin.com/in/saudabbasidev/"
              />

              <SocialCard
                icon={<Mail size={18} />}
                title="Email"
                username="Let's Talk"
                href="mailto:hello@saudabbasi.dev"
              />

              <SocialCard
                icon={<ArrowUpRight size={18} />}
                title="Resume"
                username="Download CV"
                href="#"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Info({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div>
      <p className="uppercase text-xs tracking-[0.2em] text-zinc-500">
        {title}
      </p>

      <div className="mt-4 flex items-center gap-3 text-lg">
        {icon}

        <span>{value}</span>
      </div>
    </div>
  );
}

function SocialCard({
  icon,
  title,
  username,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  username: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group border border-zinc-800 hover:border-white transition-all duration-300 rounded-xl p-6 flex justify-between items-center"
    >
      <div>
        <div className="flex items-center gap-2 text-white">
          {icon}

          <span className="font-medium">{title}</span>
        </div>

        <p className="mt-2 text-sm text-zinc-500">{username}</p>
      </div>

      <ArrowUpRight
        size={20}
        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
      />
    </a>
  );
}
