import { FaSkype, FaVimeoV } from "react-icons/fa";
import { PiMetaLogoBold } from "react-icons/pi";

export const SponsorsSection = () => {
  return (
    <section
      id="sponsors"
      className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-8 py-20 text-7xl xl:px-20"
    >
      <FaSkype />
      <FaVimeoV />
      <PiMetaLogoBold />
    </section>
  );
};
