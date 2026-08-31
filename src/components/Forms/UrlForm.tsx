"use client";

import UrlApis from "@/lib/api/UrlApis";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateUrlForm() {
  const [title, setTitle] = useState("Untitled url");
  const [url, setUrl] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const { setLoading } = useAuthStore();
  const router = useRouter();

  const handleUrlChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;

    setUrl(textarea.value);

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    await UrlApis.createShortUrl({ title, url, expiryDate })
      .then((res) => {
        console.log({ res });
        if (res.id) router.push("/my-urls/" + res.id);
      })
      .catch((e) => console.log({ e }))
      .finally(() => setLoading(false));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
      <div>
        <label
          htmlFor="title"
          className="mb-2 block text-sm font-medium text-zinc-800"
        >
          Title
        </label>

        <input
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Your short url"
          required
          autoFocus
          className="block w-full resize-none overflow-hidden rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-400"
        />
      </div>
      <div>
        <label
          htmlFor="url"
          className="mb-2 block text-sm font-medium text-zinc-800"
        >
          URL
        </label>

        <textarea
          id="url"
          name="url"
          value={url}
          onChange={handleUrlChange}
          placeholder="https://example.com/your-long-url"
          rows={1}
          required
          className="block w-full resize-none overflow-hidden rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-400"
        />
      </div>

      <div>
        <label
          htmlFor="expiryDate"
          className="mb-2 block text-sm font-medium text-zinc-800"
        >
          Expiry date
        </label>

        <input
          id="expiryDate"
          name="expiryDate"
          type="date"
          value={expiryDate}
          onChange={(event) => setExpiryDate(event.target.value)}
          className="w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-500 focus:ring-1 focus:ring-zinc-400"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
      >
        Create shortLy URL →
      </button>
    </form>
  );
}
