import GlowEffect from "@/components/ui/GlowEffect";
import HeaderComponent from "@/components/HeaderComponent";
import MainComponent from "@/components/MainComponent";

export default function Home() {
  return (
    <>
      <GlowEffect />
      <div className="flex justify-center md:px-40 md:py-28 relative scroll-smooth">
        <HeaderComponent />
        <MainComponent />
      </div>
    </>
  );
}
