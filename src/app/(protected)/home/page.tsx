export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f0e0] text-zinc-950">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6">
        {/* Hero */}
        <section className="flex flex-1 flex-col items-center justify-center text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Simple URL shortening
          </p>

          <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Make long URLs
            <br />
            short & simple.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-zinc-500">
            Create clean, memorable short links in seconds. No clutter. Just a
            simple way to share your URLs.
          </p>

          <a
            href="/shorten"
            className="mt-9 text-sm font-medium underline underline-offset-8 transition-opacity hover:opacity-60"
          >
            Create a shortLy URL →
          </a>
        </section>

        {/* Footer */}
        <footer className="flex h-20 items-center justify-center border-t border-zinc-200 text-xs text-zinc-400">
          © 2026 shortLy. Simple links, simply shared.
        </footer>
      </div>
    </main>
  );
}
