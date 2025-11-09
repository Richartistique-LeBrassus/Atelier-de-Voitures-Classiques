import ClosingCall from "@/components/ClosingCall";
import Ethos from "@/components/Ethos";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-top min-h-screen relative overflow-x-hidden">
      <Hero />
      <Ethos />
      <ClosingCall />
    </div>
  );
}
