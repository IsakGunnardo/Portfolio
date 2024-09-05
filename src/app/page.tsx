import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function HomePage() {
  return (
    <div
      id="home"
      className="  px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 flex flex-col"
    >

        <Home />
        <About />
        <Projects />
        <Contact />

    </div>
  );
}
