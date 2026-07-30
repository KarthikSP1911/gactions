import Image from "next/image";
import { Counter } from "@/components/Counter";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-950 font-sans text-white p-8">
      <main className="flex flex-col items-center justify-center max-w-2xl w-full text-center gap-12">
        <header className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={120}
              height={24}
              priority
            />
          </div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent sm:text-4xl">
            CI/CD GitHub Actions Demo Project
          </h1>
          <p className="text-slate-400 max-w-md">
            This is a mock application designed to demonstrate automated
            linting, formatting, testing, and building.
          </p>
        </header>

        <section className="w-full">
          <Counter />
        </section>

        <footer className="text-xs text-slate-600 flex gap-4 mt-8">
          <a
            href="https://nextjs.org/docs"
            className="hover:underline hover:text-slate-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Next.js Docs
          </a>
          <span>•</span>
          <a
            href="https://playwright.dev"
            className="hover:underline hover:text-slate-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Playwright Docs
          </a>
          <span>•</span>
          <a
            href="https://vitest.dev"
            className="hover:underline hover:text-slate-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vitest Docs
          </a>
        </footer>
      </main>
    </div>
  );
}
