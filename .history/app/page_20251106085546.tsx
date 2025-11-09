import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-top min-h-screen relative">
      <Hero />
    </div>
  );
}
