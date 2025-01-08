import Image from "next/image";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Exp from "./components/Exp";

export default function Home() {
  return (

    <div>

      <Hero></Hero>
      <Exp></Exp>
      <Projects></Projects>
    </div>
  );
}
