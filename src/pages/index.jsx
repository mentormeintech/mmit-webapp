import Header from "@/Components/Header";
import { MetaTags } from "@/features/MetaTags";
import { HeroSection } from "@/features/landingPage/HeroSection";
import { AboutSection } from "@/features/landingPage/AboutSection";
import { FeaturesSection } from "@/features/landingPage/FeaturesSection";
import { VisionMissionSection } from "@/features/landingPage/VisionMissionSection";

const Page = () => {
  return (
    <>
      <MetaTags title="Home &mdash; MentorMeInTech" desc="MMIT Landing page" />

      <Header />

      <HeroSection />

      <AboutSection />

      <VisionMissionSection />

      <FeaturesSection />
    </>
  );
};

export default Page;
