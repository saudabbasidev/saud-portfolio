"use client";

import { useState } from "react";

const ContactForm = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setResult("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string,
    );

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        form.reset();
      } else {
        setResult("❌ Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("❌ Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-20 max-w-200 mx-auto" id="contact">
      {/* First Row */}

      <div className="grid gap-12"
      data-aos="fade-up"
      >
        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-zinc-400">
            Name
          </label>

          <input
            type="text"
            name="name"
            required
            placeholder="John Anderson"
            className="mt-4 w-full border-b border-zinc-400 bg-transparent pb-4 outline-none placeholder:text-zinc-600 focus:border-white transition-colors"
          />
        </div>

        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-zinc-400">
            Email
          </label>

          <input
            type="email"
            name="email"
            required
            placeholder="john@company.com"
            className="mt-4 w-full border-b border-zinc-400 bg-transparent pb-4 outline-none placeholder:text-zinc-600 focus:border-white transition-colors"
          />
        </div>
      </div>

      {/* Second Row */}

      <div className="grid md:grid-cols-3 items-center gap-12"
      data-aos="fade-up"
      >
        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-zinc-400">
            Project Type
          </label>

          <select
            name="project_type"
            className="select mt-4 w-full border-b border-none border-white  bg-black pb-4 text-zinc-300"
          >
            <option>Landing Page</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Full Stack</option>
          </select>
        </div>

        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-zinc-400">
            Budget
          </label>

          <select
            name="budget"
            className="select mt-4 w-full border-b border-none border-white  bg-black pb-4 text-zinc-300"
          >
            <option>&lt; $500</option>
            <option>$1k - $3k</option>
            <option>$3k - $5k</option>
            <option>$5k+</option>
          </select>
        </div>

        <div>
          <label className="text-xs uppercase tracking-[0.2em] text-zinc-400">
            Timeline
          </label>

          <select
            name="timeline"
            className="select border-none mt-4 w-full border-b border-zinc-800 bg-black pb-4 outline-none text-zinc-300"
          >
            <option>ASAP</option>
            <option>2–4 Weeks</option>
            <option>1–2 Months</option>
            <option>Flexible</option>
          </select>
        </div>
      </div>

      {/* Details */}

      <div
      data-aos="fade-up"
      >
        <label className="text-xs uppercase tracking-[0.2em] text-zinc-400">
          Project Details
        </label>

        <textarea
          name="message"
          required
          rows={7}
          placeholder="Tell me about your project, goals, references, Figma file, or anything else I should know..."
          className="mt-6 w-full border-b border-white bg-transparent pb-4 outline-none placeholder:text-zinc-600 focus:border-white transition-colors resize-none"
        />
      </div>

      {/* Submit */}

      <div className="flex items-center justify-between border-t border-zinc-900 pt-12">
        <div>
          <p className="text-sm text-zinc-500">
            Usually replying within 24 hours.
          </p>

          {result && <p className="mt-3 text-sm text-green-400">{result}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="border border-white px-6 py-3 uppercase tracking-[0.2em] text-sm transition hover:bg-white hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Sending..." : "Send Inquiry"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
