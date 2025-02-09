import { Button } from "@/components/ui/button";
import Image from "next/image";
import HomePage from "./pages/HomePage";
import Test from "./test/page";
import Test2 from "./test2/page";
import Test3 from "./test3/page";
import Test4 from "./test4/page";
import Test5 from "./test5/page";
import Test6 from "./page6/page";

export default function Home() {
  return (
    <main className="bg-black">
      {/* <HomePage /> */}
      <Test/>
      <Test2/>
      <Test4/>
      {/* <Test3/> */}
      <Test6/>
      <Test5/>
    </main>
  );
}
