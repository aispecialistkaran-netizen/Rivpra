"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Pharmacovigilance() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const pillars = [
    {
      title: "Detection & Monitoring",
      desc: "Continuous surveillance for adverse effects and safety signals.",
      icon: (
        <svg className="w-5 h-5 text-[#1fb8e5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
    },
    {
      title: "GVP Compliance",
      desc: "Strict adherence to Good Pharmacovigilance Practices & regulatory laws.",
      icon: (
        <svg className="w-5 h-5 text-[#f6b11b]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
        </svg>
      ),
    },
    {
      title: "Risk Assessment",
      desc: "Scientific evaluation and proactive mitigation of potential risks.",
      icon: (
        <svg className="w-5 h-5 text-[#ddd82a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
        </svg>
      ),
    },
    {
      title: "Lifecycle Efficacy",
      desc: "Ensuring long-term drug safety from manufacturing to patient end-use.",
      icon: (
        <svg className="w-5 h-5 text-[#1fb8e5]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      ),
    },
  ];

  return (
    <section id="pharmacovigilance" className="relative w-full overflow-hidden bg-white py-12">
      {/* Background patterns */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#1fb8e5]/8 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/3 h-96 w-96 rounded-full bg-[#f6b11b]/8 blur-[100px]" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-[#1fb8e5]/40 bg-[#1fb8e5]/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#f6b11b]">
            Patient Safety &amp; Compliance
          </span>
          <h2 className="text-4xl font-black text-slate-950 lg:text-6xl">
            Pharmacovigilance
          </h2>
          <p className="mt-3 text-lg font-bold bg-gradient-to-r from-[#1fb8e5] to-[#f6b11b] bg-clip-text text-transparent">
            Our Commitment to Patient Safety
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 items-stretch">
          {/* Left card: Statement & Description (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-between rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-[#1fb8e5]/5 p-7 sm:p-9 shadow-sm"
          >
            <div>
              {/* Highlight callout box */}
              <div className="relative mb-6 rounded-2xl border border-[#1fb8e5]/20 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1fb8e5] to-[#f6b11b] text-white shadow-md">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0112 2.714z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#1fb8e5]">
                      Highest Priority
                    </h3>
                    <p className="mt-1 text-sm font-medium leading-relaxed text-slate-800">
                      At Rivpra Formulation Pvt. Ltd., patient safety is our highest priority. We are committed to ensuring the quality, safety, and efficacy of all our pharmaceutical products throughout their lifecycle.
                    </p>
                  </div>
                </div>
              </div>

              {/* Main paragraph */}
              <p className="text-sm font-light leading-relaxed text-slate-600 sm:text-base">
                Pharmacovigilance is the science and process of detecting, assessing, understanding, and preventing adverse effects or any other medicine-related problems. Our Pharmacovigilance System complies with applicable national regulatory requirements and follows <span className="font-semibold text-slate-900">Good Pharmacovigilance Practices (GVP)</span> to continuously monitor the safety profile of our products.
              </p>
            </div>

            {/* Pillars sub-grid */}
            <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 pt-6 border-t border-slate-200/80">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-3.5">
                  <div className="mt-0.5 flex-shrink-0">{pillar.icon}</div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{pillar.title}</div>
                    <div className="mt-0.5 text-[11px] text-slate-500 leading-tight">{pillar.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right card: Contact Our Pharmacovigilance Team (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-[#f6b11b]/30 bg-gradient-to-br from-[#f6b11b]/10 via-white to-[#1fb8e5]/10 p-7 sm:p-9 shadow-sm"
          >
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f6b11b]/20 text-[#f6b11b]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l- another" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-950">
                    Contact Our Team
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Pharmacovigilance Department
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-xs">
                <div className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4 pb-2 border-b border-slate-100">
                  Rivpra Formulation Pvt. Ltd.
                </div>

                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#1fb8e5]/10 text-[#1fb8e5]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Email</div>
                      <a
                        href="mailto:pharmacovigilance@rivpraformulation.com"
                        className="text-xs font-bold text-[#1fb8e5] hover:underline break-all"
                      >
                        pharmacovigilance@rivpraformulation.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#f6b11b]/10 text-[#f6b11b]">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Helpline / Phone</div>
                      <a href="tel:+9101204277177" className="text-xs font-bold text-slate-800 hover:text-[#1fb8e5]">
                        +91-0120-4277177
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Adverse event report note */}
            <div className="mt-6 rounded-2xl border border-slate-200/80 bg-white p-4 text-center">
              <span className="text-[11px] font-medium text-slate-500 block mb-2">
                Have a product safety inquiry or adverse event to report?
              </span>
              <a
                href="mailto:pharmacovigilance@rivpraformulation.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1fb8e5] to-[#f6b11b] px-4 py-2.5 text-xs font-bold text-slate-950 transition-all hover:shadow-md"
              >
                Report Adverse Event →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
