import ClosingCall from "@/components/ClosingCall";
import Ethos from "@/components/Ethos";
import HeritageEssence from "@/components/HeritageEssence";
import Hero from "@/components/Hero";
import ShowcaseHighlight from "@/components/ShowcaseHighlight";
import Image from "next/image";

export default function Home() {
  return (
    /*<div className="flex flex-col items-center justify-top min-h-screen relative">
      <Hero />
      <Ethos />
      {/*<ShowcaseHighlight />*/
      /*<ClosingCall />
    </div>*/
    <div className="relative h-[300vh]">
      <Hero />
      <div className="relative h-[200vh]">
        <section className="sticky top-0 h-screen z-20">
          <Ethos />
        </section>
      </div>
      <ClosingCall />
    </div>
  );
}
