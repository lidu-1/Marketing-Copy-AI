import { useState } from "react";

const Generator = () => {
  const [input, setInput] = useState("");

  return (
    <div className="max-w-7xl mx-auto py-12">
      <div className="flex flex-col justify-center md:w-2/3 w-[100%] mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Enter your product name (optional)"
            className="w-full h-10 bg-slate-300 dark:bg-slate-800 text-gray-600 dark:text-gray-200 p-2 mb-2 rounded text-sm focus:outline-none"
          />
          <textarea
            rows={7}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void =>
              setInput(e.target.value)
            }
            value={input}
            className="w-full bg-slate-300 dark:bg-slate-800 text-gray-600 dark:text-gray-200 p-2 rounded text-sm focus:outline-none resize-none"
            placeholder="Enter your topic here"
          />
          <div className="absolute right-2 bottom-2 text-gray-400 text-sm">
            <span className={input.length > 128 ? "text-red-500" : ""}>
              {input.length}
            </span>
            /128
          </div>
        </div>
        <select
          name="tone"
          id="tone"
          className="h-10 bg-slate-300 dark:bg-slate-800 text-gray-600 dark:text-gray-200 p-2 mt-2 rounded text-sm"
        >
          <option value="Friendly">Friendly</option>
          <option value="Luxury">Luxury</option>
          <option value="Relaxed">Relaxed</option>
          <option value="Professional">Professional</option>
          <option value="Bold">Bold</option>
          <option value="Witty">Witty</option>
        </select>
        <button className="flex items-center justify-center px-5 py-3 h-12 bg-indigo-500 text-white font-semibold rounded-md mt-2 hover:bg-indigo-600">
          Generate
        </button>
        {/* output here */}
      </div>
    </div>
  );
};

export default Generator;
