import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./hero/page";
import ContactAddress from "./contactaddress/page";
import About from "./about/page";
import RoadmapPage from "./roadmap/page";
import SocialGrid from "./socials/page";

export default function Home() {
  return (
    <main className="bg-black">
      {/* <HomePage /> */}
      <Hero />
      {/* <Test2/> */}
      {/* <Test3/> */}
      <About />
      <ContactAddress />
      <RoadmapPage />
      <SocialGrid />
      {/* <Test5 /> */}
    </main>
  );
}
