"use client";

import { useEffect, useState, type FormEvent } from "react";

const LAUNCH = new Date("2026-12-15T10:00:00Z").getTime();

function useCountdown() {
  const [diff, setDiff] = useState(0);

  useEffect(() => {
    const tick = () => setDiff(Math.max(0, LAUNCH - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff % 86_400_000) / 3_600_000);
  const minutes = Math.floor((diff % 3_600_000) / 60_000);
  const seconds = Math.floor((diff % 60_000) / 1000);

  return {
    days: String(days).padStart(3, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

const MARQUEE_ITEMS = [
  "Nethmi Shoes",
  "Coming Soon",
  "Est. MMXXVI",
  "Crafted, Not Manufactured",
  "Volume 01 — Inaugural",
];

export default function Page() {
  const { days, hours, minutes, seconds } = useCountdown();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "ok">("idle");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setStatus("ok");
    setEmail("");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <main className="grain relative min-h-screen overflow-hidden bg-ink text-cream">
      {/* atmospheric color wash */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-[20%] left-[10%] h-[680px] w-[680px] rounded-full bg-oxblood/25 blur-[180px] [animation:drift_18s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-15%] right-[-5%] h-[520px] w-[520px] rounded-full bg-oxblood/15 blur-[160px] [animation:drift_22s_ease-in-out_infinite_reverse]" />
        <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-cream/[0.04] blur-[120px]" />
      </div>

      <div className="stripes relative z-10">
        {/* MARQUEE */}
        <div className="relative overflow-hidden border-b border-cream/10 py-3">
          <div className="flex w-max animate-[marquee_55s_linear_infinite] whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.42em] text-muted">
            {[0, 1].map((set) => (
              <div key={set} className="flex shrink-0 items-center">
                {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, i) => (
                  <span
                    key={`${set}-${i}`}
                    className="mx-6 inline-flex items-center gap-6"
                  >
                    <span>{item}</span>
                    <span className="inline-block h-[5px] w-[5px] rotate-45 bg-oxblood" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* HEADER */}
        <header className="mx-auto flex max-w-[1440px] items-center justify-between px-6 pt-8 md:px-12 md:pt-10">
          <div className="reveal flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em]">
            <span className="inline-block h-2 w-2 rounded-full bg-oxblood [animation:pulse-dot_2.2s_ease-in-out_infinite]" />
            <span>Nethmi / Atelier</span>
          </div>
          <div
            className="reveal hidden font-mono text-[11px] uppercase tracking-[0.32em] text-muted md:block"
            style={{ animationDelay: "0.1s" }}
          >
            № 001 · Est. MMXXVI · Colombo
          </div>
        </header>

        {/* HERO */}
        <section className="mx-auto max-w-[1440px] px-6 pt-16 md:px-12 md:pt-24 lg:pt-28">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-12 md:col-span-2">
              <div
                className="reveal font-mono text-[11px] uppercase leading-relaxed tracking-[0.3em] text-muted"
                style={{ animationDelay: "0.2s" }}
              >
                ◢ Vol. 01
                <br />
                Inaugural
              </div>
            </div>

            <div className="col-span-12 md:col-span-8">
              <h1 className="font-serif leading-[0.84]">
                <span
                  className="reveal block text-[clamp(4rem,13vw,12rem)] font-light italic tracking-tight"
                  style={{ animationDelay: "0.25s" }}
                >
                  Nethmi
                </span>
                <span
                  className="reveal -mt-2 block pl-[10vw] text-[clamp(2.75rem,8.5vw,7.5rem)] font-extralight tracking-[-0.02em] text-cream/95"
                  style={{ animationDelay: "0.45s" }}
                >
                  shoes<span className="text-oxblood">.</span>
                </span>
              </h1>
            </div>

            <div className="col-span-12 md:col-span-2 md:text-right">
              <div
                className="reveal font-mono text-[11px] uppercase leading-relaxed tracking-[0.3em] text-muted"
                style={{ animationDelay: "0.6s" }}
              >
                A study in
                <br />
                form &amp; sole
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-12 gap-4 md:mt-14 md:gap-6">
            <div className="col-span-12 md:col-span-6 md:col-start-4">
              <p
                className="reveal font-serif text-2xl font-light italic leading-snug text-cream/90 md:text-3xl"
                style={{ animationDelay: "0.7s" }}
              >
                An exceptional footwear house,
                <br />
                quietly preparing its first walk.
              </p>
              <div
                className="reveal mt-6 h-px w-24 bg-cream/30"
                style={{ animationDelay: "0.8s" }}
              />
            </div>
          </div>
        </section>

        {/* COUNTDOWN */}
        <section className="mx-auto mt-20 max-w-[1440px] px-6 md:mt-28 md:px-12">
          <div
            className="reveal mb-6 flex items-center gap-4"
            style={{ animationDelay: "0.85s" }}
          >
            <div className="h-px flex-1 bg-cream/15" />
            <div className="font-mono text-[10px] uppercase tracking-[0.42em] text-muted">
              Launching in
            </div>
            <div className="h-px flex-1 bg-cream/15" />
          </div>

          <div
            className="reveal grid grid-cols-4 gap-2 md:gap-5"
            style={{ animationDelay: "0.95s" }}
          >
            {[
              { value: days, label: "Days" },
              { value: hours, label: "Hours" },
              { value: minutes, label: "Minutes" },
              { value: seconds, label: "Seconds" },
            ].map((u) => (
              <div
                key={u.label}
                className="group relative overflow-hidden border border-cream/10 bg-cream/[0.015] px-2 py-6 backdrop-blur-sm transition-colors duration-500 hover:border-oxblood/50 md:py-10"
              >
                <div className="absolute left-3 top-3 font-mono text-[9px] uppercase tracking-[0.32em] text-muted">
                  {u.label}
                </div>
                <div className="text-center font-serif text-[clamp(2.5rem,7vw,6rem)] font-extralight tabular-nums leading-none text-cream">
                  {u.value}
                </div>
                <div className="absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-[0.32em] text-oxblood">
                  ◢
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-oxblood transition-transform duration-700 group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </section>

        {/* SIGNUP */}
        <section className="mx-auto mt-20 max-w-[1440px] px-6 md:mt-28 md:px-12">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <div
              className="reveal col-span-12 md:col-span-4"
              style={{ animationDelay: "1.05s" }}
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.32em] text-muted">
                ─── Private Preview
              </div>
              <h2 className="mt-4 font-serif text-3xl font-light italic leading-tight md:text-4xl">
                Be among the first
                <br />
                to step inside.
              </h2>
            </div>

            <div
              className="reveal col-span-12 md:col-span-7 md:col-start-6"
              style={{ animationDelay: "1.15s" }}
            >
              <form onSubmit={submit} className="group/form">
                <label
                  htmlFor="email"
                  className="block font-mono text-[10px] uppercase tracking-[0.42em] text-muted"
                >
                  Your Email Address
                </label>
                <div className="mt-3 flex items-end gap-4 border-b border-cream/30 pb-3 transition-colors duration-500 focus-within:border-cream">
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@studio.com"
                    className="min-w-0 flex-1 bg-transparent font-serif text-xl font-light italic text-cream outline-none placeholder:text-muted/40 md:text-2xl"
                  />
                  <button
                    type="submit"
                    className="group/btn shrink-0 font-mono text-[11px] uppercase tracking-[0.32em] text-cream"
                  >
                    <span className="inline-flex items-center gap-2">
                      Notify Me
                      <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1.5">
                        →
                      </span>
                    </span>
                  </button>
                </div>
                <div className="mt-4 h-5 font-mono text-[10px] uppercase tracking-[0.32em]">
                  {status === "ok" ? (
                    <span className="text-oxblood">
                      ✓ Saved. We will write only when it matters.
                    </span>
                  ) : (
                    <span className="text-muted/60">
                      No spam. One thoughtful letter, when we open the doors.
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mx-auto mt-24 max-w-[1440px] px-6 pb-10 md:mt-32 md:px-12">
          <div className="flex flex-col gap-4 border-t border-cream/10 pt-6 md:flex-row md:items-center md:justify-between">
            <div className="font-mono text-[10px] uppercase tracking-[0.42em] text-muted">
              © MMXXVI Nethmi Atelier — All Rights Reserved
            </div>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.42em]">
              <span className="text-muted">Powered by</span>
              <span className="inline-flex items-center gap-2 text-cream">
                <span className="inline-block h-[6px] w-[6px] rotate-45 bg-oxblood" />
                Clever Project
              </span>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
