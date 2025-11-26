import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import WhereToBuy from "./components/WhereToBuy/WhereToBuy";
import Footer from "./components/Footer/Footer";
import AppStore from "./components/AppStore/AppStore";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <AppStore />
      <Footer />
    </div>
  );
}
