"use client";

import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    // TODO: call forgot-password API
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-[#f8f0df]">
      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          {/* Heading */}
          <div className="mb-10 text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-[#d8cfbd] bg-white/30">
              <Mail size={22} strokeWidth={1.7} className="text-[#3c2d11]" />
            </div>

            <h1 className="text-3xl font-semibold tracking-tight">
              Forgot your password?
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              No worries. Enter your email and we&apos;ll help you get back into
              your account.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email address
              </label>

              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-12 w-full rounded-xl border border-[#d8cfbd] bg-white/40 px-4 text-sm outline-none transition focus:border-[#3c2d11] focus:bg-white/60"
              />
            </div>

            <button
              type="submit"
              className="h-12 w-full rounded-xl bg-[#3c2d11] text-sm font-medium text-[#f8f0df] transition hover:opacity-90"
            >
              Send reset link
            </button>
          </form>

          {/* Back */}
          <div className="mt-8 text-center">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-[#3c2d11]"
            >
              <ArrowLeft size={15} />
              Back to login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
