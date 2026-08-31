"use client";

import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Check,
  Copy,
  ExternalLink,
  Pencil,
  Power,
  Trash2,
  BarChart3,
  Globe2,
  Monitor,
  QrCode,
  ExternalLinkIcon,
} from "lucide-react";
import Link from "next/link";
import UrlApis from "@/lib/api/UrlApis";
import { useParams } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { UrlItem } from "@/lib/types";

export default function ShortUrlDetailsPage() {
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState(true);
  const [urlDetails, setUrlDetails] = useState<UrlItem>();
  const params = useParams();
  const { setLoading } = useAuthStore();

  const fetchUrlDetails = async () => {
    // setLoading(true);
    try {
      const details = await UrlApis.fetchUrlById(Number(params.id));
      setUrlDetails(details);
    } catch (error) {
      console.log(error);
    } finally {
      // setLoading(false);
    }
  };

  // Static data for now
  const shortUrl =
    process?.env?.NEXT_PUBLIC_CLIENT_URL || "" + urlDetails?.shortCode;
  const uniqueVisits = 873;
  const todayVisits = 42;

  const handleCopy = async () => {
    // await navigator.clipboard.writeText(shortUrl);
    const shortUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL ?? ""}${urlDetails?.shortCode ?? ""}`;

    await navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    console.log("Effecting");
    fetchUrlDetails();
  }, []);

  return (
    <main className="min-h-screen bg-[#f8f0df] text-[#111111]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 md:px-10">
        {/* Main */}
        <section className="flex-1 py-1 md:py-2">
          {/* Back */}
          <Link
            href="/my-urls"
            className="mb-10 inline-flex items-center gap-2 text-sm text-gray-500 transition-colors hover:text-black"
          >
            <ArrowLeft size={16} />
            Back to your links
          </Link>

          {/* Title */}
          <div className="mb-12">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
              URL Details
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              {urlDetails?.title ?? ""}
            </h1>
          </div>

          {/* URL Overview */}
          <div className="border-y border-gray-300/70 py-10">
            {/* Short URL */}
            <div className="text-center">
              <p className="mb-4 text-sm text-gray-500">Short URL</p>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <span className="break-all text-2xl font-semibold tracking-tight md:text-3xl">
                  {shortUrl}
                </span>

                <button
                  onClick={handleCopy}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#111111] bg-[#111111] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-transparent hover:text-[#111111]"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Copied" : "Copy"}
                </button>

                <Link
                  href={shortUrl || ""}
                  target="_blank"
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#111111] bg-[#111111] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-transparent hover:text-[#111111]"
                >
                  {<ExternalLinkIcon size={16} />}
                  Open
                </Link>
              </div>
            </div>

            {/* Long URL */}
            <div className="mt-12">
              <p className="mb-3 text-sm text-gray-500">Redirects to</p>

              <div className="flex items-start justify-between gap-4">
                <a
                  href={urlDetails?.longUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="break-all text-base leading-7 text-gray-700 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-black"
                >
                  {urlDetails?.longUrl}
                </a>

                <ExternalLink
                  size={18}
                  className="mt-1 shrink-0 text-gray-400"
                />
              </div>
            </div>

            {/* Meta */}
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-gray-500">
              <span>
                Created{" "}
                <strong className="font-medium text-gray-700">
                  {urlDetails?.created_at}
                </strong>
              </span>

              <span className="hidden h-1 w-1 rounded-full bg-gray-400 sm:block" />

              <span className="flex items-center gap-2">
                <span
                  className={`h-2 w-2 rounded-full ${
                    urlDetails?.active ? "bg-green-600" : "bg-gray-400"
                  }`}
                />
                <strong className="font-medium text-gray-700">
                  {urlDetails?.active ? "Active" : "Disabled"}
                </strong>
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 border-b border-gray-300/70 py-7">
            <button className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/30 px-5 py-2.5 text-sm font-medium transition-all hover:border-gray-500 hover:bg-white/60">
              <Pencil size={16} />
              Edit
            </button>

            <button
              onClick={() => setActive(!active)}
              className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/30 px-5 py-2.5 text-sm font-medium transition-all hover:border-gray-500 hover:bg-white/60"
            >
              <Power size={16} />
              {active ? "Disable" : "Enable"}
            </button>

            <button className="inline-flex items-center gap-2 rounded-full border border-red-200 px-5 py-2.5 text-sm font-medium text-red-600 transition-all hover:border-red-400 hover:bg-red-50">
              <Trash2 size={16} />
              Delete
            </button>
          </div>

          {/* Analytics */}
          <div className="pt-16">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
                  Analytics
                </p>

                <h2 className="text-3xl font-semibold tracking-tight">
                  Link performance
                </h2>
              </div>

              <BarChart3
                size={28}
                strokeWidth={1.5}
                className="hidden text-gray-400 sm:block"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 border border-gray-300/70 sm:grid-cols-3">
              <Stat
                label="Total visits"
                value={urlDetails?.clickCount?.toLocaleString() || ""}
                description="All time"
              />

              <Stat
                label="Unique visitors"
                value={uniqueVisits.toLocaleString()}
                description="Estimated unique users"
                border
              />

              <Stat
                label="Today's visits"
                value={todayVisits.toLocaleString()}
                description="Since midnight"
                border
              />
            </div>

            {/* Coming Soon Analytics */}
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <ComingSoonCard
                icon={<BarChart3 size={22} />}
                title="Visits over time"
                description="Track clicks and visitor activity across days, weeks and months."
              />

              <ComingSoonCard
                icon={<Globe2 size={22} />}
                title="Visitor locations"
                description="See where your visitors are coming from around the world."
              />

              <ComingSoonCard
                icon={<Monitor size={22} />}
                title="Devices & browsers"
                description="Understand how people access your short link."
              />

              <ComingSoonCard
                icon={<QrCode size={22} />}
                title="QR code"
                description="Generate and download a QR code for this short link."
              />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-300/70 py-8 text-center text-sm text-gray-400">
          © 2026 shortLy. Simple links, simply shared.
        </footer>
      </div>
    </main>
  );
}

/* ---------- Components ---------- */

function Stat({
  label,
  value,
  description,
  border = false,
}: {
  label: string;
  value: string;
  description: string;
  border?: boolean;
}) {
  return (
    <div
      className={`px-6 py-7 ${
        border ? "border-t border-gray-300/70 sm:border-l sm:border-t-0" : ""
      }`}
    >
      <p className="text-sm text-gray-500">{label}</p>

      <p className="mt-2 text-3xl font-semibold tracking-tight">{value}</p>

      <p className="mt-1 text-xs text-gray-400">{description}</p>
    </div>
  );
}

function ComingSoonCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative min-h-40 overflow-hidden border border-gray-300/70 p-6">
      <div className="absolute right-5 top-5 rounded-full border border-gray-300 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-gray-400">
        Coming soon
      </div>

      <div className="flex h-full flex-col justify-between gap-8">
        <div className="text-gray-400">{icon}</div>

        <div>
          <h3 className="text-lg font-medium">{title}</h3>

          <p className="mt-1 max-w-md text-sm leading-6 text-gray-500">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
