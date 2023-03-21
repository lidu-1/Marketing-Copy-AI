import { useRouter } from "next/router";
import { HiOutlineArrowDown } from "react-icons/hi";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="py-12">
      <div className="text-center flex flex-col justify-center min-h-[70vh]">
        <h1 className="text-3xl sm:text-4xl md:text-5xl sm:px-10 md:px-14 lg:px-20 font-bold text-gray-400">
          Say Goodbye to Writer&apos;s Block.{" "}
          <span className="md:block gradient-text-2">
            Say Hello to AI-Powered Copywriting.
          </span>
        </h1>
        <p className="text-md text-gray-500 dark:text-gray-400 my-3">
          Generate Persuasive Marketing Copy in Minutes.
        </p>
        <button
          onClick={() => router.push("/dashboard")}
          className="px-5 py-3 bg-indigo-500 text-white font-semibold rounded-md mt-2 hover:bg-indigo-600 mx-auto"
        >
          Get started
        </button>
        <a>
          <HiOutlineArrowDown className="w-6 h-6 mx-auto mt-12 text-indigo-500 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
