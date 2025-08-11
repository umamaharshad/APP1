export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/15 mt-12">
      <div className="container mx-auto px-4 py-6 text-sm text-black/70 dark:text-white/70">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Next.js Website</p>
          <p>
            Built with <a className="underline hover:no-underline" href="https://nextjs.org" target="_blank" rel="noreferrer">Next.js</a>
          </p>
        </div>
      </div>
    </footer>
  );
}