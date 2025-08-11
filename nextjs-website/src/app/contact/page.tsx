"use client";

import { useState } from "react";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    setStatus(`Thanks${name ? `, ${name}` : ""}! We'll get back to you soon.`);
    e.currentTarget.reset();
  }

  return (
    <section className="max-w-xl">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-black/70 dark:text-white/70 mb-6">
        Send a quick note with your name, email, and message.
      </p>

      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-foreground/30"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-foreground/30"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-md border border-black/10 dark:border-white/15 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-foreground/30"
          />
        </div>
        <div className="flex items-center gap-3">
          <button type="submit" className="px-5 py-2.5 rounded-md bg-foreground text-background font-medium">
            Send
          </button>
          {status && <p className="text-sm text-emerald-600 dark:text-emerald-400">{status}</p>}
        </div>
      </form>
    </section>
  );
}