import { writingTones } from "@/utils/constant";
import { ChangeEvent, useState } from "react";
import { PulseLoader } from "react-spinners";

const Generator = () => {
  const [output, setOutput] = useState("");
  const [productTitle, setProductTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tone, setTone] = useState("");

  const [loading, setLoading] = useState(false);
  const [isCopy, setIsCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(output.trim());
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 500);
  };

  const submit = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productTitle, description, tone }),
      });
      const output: { result: string } = await response.json();
      const { result } = output;
      setOutput(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="flex flex-col justify-center md:w-2/3 w-[100%] mx-auto">
        <div className="relative">
          <input
            type="text"
            value={productTitle}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setProductTitle(e.target.value)
            }
            placeholder="Enter your product name (optional)"
            className="w-full h-10 bg-slate-300 dark:bg-slate-800 text-gray-600 dark:text-gray-200 p-2 mb-2 rounded text-sm focus:outline-none"
          />
          <textarea
            rows={7}
            value={description}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>): void =>
              setDescription(e.target.value)
            }
            className="w-full bg-slate-300 dark:bg-slate-800 text-gray-600 dark:text-gray-200 p-2 rounded text-sm focus:outline-none resize-none"
            placeholder="Describe your product"
          />
          <div className="absolute right-2 bottom-2 text-gray-400 text-sm">
            <span className={description.length > 224 ? "text-red-500" : ""}>
              {description.length}
            </span>
            /224
          </div>
        </div>
        <select
          value={tone}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setTone(e.target.value)
          }
          name="tone"
          id="tone"
          className="h-10 bg-slate-300 dark:bg-slate-800 text-gray-600 dark:text-gray-200 p-2 mt-2 rounded text-sm"
        >
          <option value="default">Select Tone (Optional)</option>
          {writingTones.map((tone) => (
            <option key={tone} value={tone}>
              {tone}
            </option>
          ))}
        </select>
        <button
          onClick={submit}
          className={`flex items-center justify-center px-5 py-3 h-12 bg-indigo-500 text-white font-semibold rounded-md mt-2 hover:bg-indigo-600 ${
            loading || description === "" ? "cursor-not-allowed opacity-50" : ""
          }`}
          disabled={loading || description === ""}
        >
          {loading ? <PulseLoader size={12} color="white" /> : "Generate"}
        </button>
        {/* output here */}
        {output && (
          <div
            className={`rounded-md ${
              loading ? "hidden" : "block"
            } bg-slate-300 dark:bg-slate-800 p-4 mt-2`}
          >
            <span className="text-indigo-500 text-md font-semibold">
              Your Marketing Copy ✨:
            </span>
            <p className="text-sm text-gray-600 dark:text-gray-200 pt-2">
              {output}
            </p>
            <div className="grid justify-items-end">
              <button
                onClick={handleCopy}
                className="w-full md:w-fit text-center border border-indigo-500 p-3 rounded-lg text-sm text-indigo-500 hover:bg-indigo-500 hover:text-white mt-3 cursor-pointer transition duration-300"
              >
                {isCopy ? "Copied" : "Copy to Clipboard"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Generator;
