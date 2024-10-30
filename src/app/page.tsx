// import Image from "next/image";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Hero_bottom from "./components/Hero_bottom";
import JoinUs from "./components/JoinUs";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div>

      <Navbar />
      <Hero />
      <Hero_bottom />
      <About />
      <JoinUs />
      <Footer />
    </div>
  );
}
