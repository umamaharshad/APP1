export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>About</h1>
      <p>
        This starter demonstrates a minimal multi-page website using the Next.js
        App Router and Tailwind CSS. You can extend it with API routes, dynamic
        data, and more.
      </p>
      <h2>Tech stack</h2>
      <ul>
        <li>Next.js 15 App Router</li>
        <li>React 19</li>
        <li>TypeScript</li>
        <li>Tailwind CSS v4</li>
      </ul>
    </section>
  );
}