import { Navbar, Hero, Feature, Footer } from "@/components";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marketing Copy AI</title>
        <meta name="description" content="Our AI-driven copywriter will provide you with beautiful and eye-catching marketing copy that sells. Our AI powered writers take the best of human creativity, combines it with the power of machine learning and delivers the best quality results possible." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 dark:bg-slate-900 min-h-screen">
        <div className="max-w-5xl w-11/12 mx-auto px-3">
          <Navbar />
          <Hero />
          <Feature />
          <Footer />
        </div>
      </main>
    </>
  );
}
