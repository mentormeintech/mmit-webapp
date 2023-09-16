import Header from "@/Components/Header";
import { MetaTags } from "@/features/MetaTags";

import Footer from "@/Components/Footer";
import {
  AboutSection,
  FeaturesSection,
  HeroSection,
  SponsorsSection,
  VisionMissionSection,
} from "@/features/landingPage";
import { FAQSection } from "@/features/landingPage/FAQSection";

const Page = () => {
  return (
    <>
      <MetaTags title="Home &mdash; MentorMeInTech" desc="MMIT Landing page" />

      <Header />

      <HeroSection />

      <AboutSection />

      <VisionMissionSection />

      <FeaturesSection />

      <SponsorsSection />

      <FAQSection />

      <Footer />
    </>
  );
};

export default Page;
