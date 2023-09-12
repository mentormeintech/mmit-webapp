import Header from "@/Components/Header";
import { MetaTags } from "@/features/MetaTags";
import { HeroSection } from "@/features/landingPage/HeroSection";

const Page = () => {
  return (
    <>
      <MetaTags title="Home &mdash; MentorMeInTech" desc="MMIT Home page" />

      <Header />

      <HeroSection />
    </>
  );
};

export default Page;
