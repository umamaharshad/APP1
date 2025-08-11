import Link from "next/link";

export default function NotFound() {
  return (
    <section className="text-center max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-black/70 dark:text-white/70 mb-6">The page you are looking for does not exist.</p>
      <Link href="/" className="px-5 py-2.5 rounded-md bg-foreground text-background font-medium">
        Go home
      </Link>
    </section>
  );
}