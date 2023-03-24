import Heading from "./Heading";
import FeatureItem from "./FeatureItem";
import { features } from "@/utils/constant";

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
