import CreateUrlForm from "@/components/Forms/CreateUrlForm";

export default function ShortenPage() {
  return (
    <main className="min-h-screen bg-[#fffaf0] px-6 py-20 text-zinc-950">
      <div className="mx-auto max-w-1/2 ">
        <h1 className="text-4xl font-semibold tracking-tight">
          Create a shortLy URL
        </h1>

        <p className="mt-3 text-zinc-500">
          Enter a URL and optionally set an expiry date.
        </p>

        <div className="mt-10 ">
          <CreateUrlForm />
        </div>
      </div>
    </main>
  );
}
