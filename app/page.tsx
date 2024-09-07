import GlowEffect from "@/components/GlowEffect";
import HeaderComponent from "@/components/HeaderComponent";
import MainComponent from "@/components/MainComponent";

export default function Home() {
  return (
    <>
      <GlowEffect />
      <div className="flex justify-center md:px-40 md:py-40 relative scroll-smooth">
        <HeaderComponent />
        <MainComponent />
      </div>
    </>
  );
}
