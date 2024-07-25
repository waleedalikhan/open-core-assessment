"use client";
import Banner from "@/components/pages/home/Banner";
import ResourcesSection from "@/components/pages/home/ResourcesSection";
import WorkTogetherSection from "@/components/pages/home/WorkTogetherSection";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <ResourcesSection />
      <WorkTogetherSection />
    </>
  );
};

export default Home;
