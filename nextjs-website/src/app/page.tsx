import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-12">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Build faster with Next.js
        </h1>
        <p className="text-lg text-black/70 dark:text-white/70">
          A clean starter template with a navbar, footer, and three pages. Edit
          content in <code className="px-1 py-0.5 rounded bg-black/5 dark:bg-white/10">src/app</code> to customize.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/contact" className="px-5 py-2.5 rounded-md bg-foreground text-background font-medium">
            Get in touch
          </Link>
          <Link href="/about" className="px-5 py-2.5 rounded-md border border-black/10 dark:border-white/15 hover:bg-black/5 dark:hover:bg-white/10 transition">
            Learn more
          </Link>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Next.js App Router",
            desc: "Uses the modern app directory with server components by default.",
          },
          {
            title: "Tailwind CSS v4",
            desc: "Utility-first styling with zero-config PostCSS.",
          },
          {
            title: "TypeScript",
            desc: "Strict types for a smooth developer experience.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-lg border border-black/10 dark:border-white/15 p-6">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-black/70 dark:text-white/70">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
