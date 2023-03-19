import Heading from "./Heading";
import { FaRobot } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { MdFeedback } from "react-icons/md";
import FeatureItem from "./FeatureItem";

const features = [
  {
    title: "AI-Powered Copy Generation",
    icon: FaRobot,
    description:
      "Our app uses OpenAI's GPT-3 to generate quality marketing copy that captures your product/service essence.",
  },
  {
    title: "Save Time and Money",
    icon: BiTimeFive,
    description:
      "Our app creates compelling marketing copy quickly and affordably, without the need for a professional copywriter.",
  },
  {
    title: "Real-Time Feedback",
    icon: MdFeedback,
    description:
      "Our app offers instant feedback to improve your marketing messages and drive better results.",
  },
];

const Feature = () => {
  return (
    <section className="py-12 min-h-screen flex flex-col justify-center items-center">
      <Heading>Our Features</Heading>
      <div className="flex flex-col items-center">
        <p className="text-md text-gray-500 dark:text-gray-400 my-3 md:w-2/3 text-center">
          Revolutionize your marketing with Marketing Copy AI. Our powerful
          artificial intelligence technology generates high-quality, engaging
          content in seconds, so you can focus on growing your business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
        {features.map((feature) => (
          <FeatureItem
            key={feature.title}
            title={feature.title}
            icon={feature.icon}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Feature;
