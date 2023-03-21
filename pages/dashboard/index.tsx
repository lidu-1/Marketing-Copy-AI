import { Generator } from "@/components";
import Head from "next/head";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>App - Marketing Copy AI</title>
        <meta
          name="description"
          content="Our AI-driven copywriter will provide you with beautiful and eye-catching marketing copy that sells. Our AI powered writers take the best of human creativity, combines it with the power of machine learning and delivers the best quality results possible."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 dark:bg-slate-900 min-h-screen">
        <div className="max-w-5xl w-11/12 mx-auto px-3">
          <div className="py-6">
            <button
              onClick={() => router.push("/")}
              className="flex items-center gap-2 bg-indigo-500 text-white px-3 py-2 rounded"
            >
              <BiArrowBack />
              Home
            </button>
            <Generator />
          </div>
        </div>
      </main>
    </>
  );
}
