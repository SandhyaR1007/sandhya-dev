import GlowEffect from "@/components/ui/GlowEffect";
import HeaderComponent from "@/components/HeaderComponent";
import MainComponent from "@/components/MainComponent";

export default function Home() {
  return (
    <>
      <GlowEffect />
      <div className="flex flex-col md:flex-row md:justify-center p-1 sm:p-10 md:px-40 md:py-28 relative scroll-smooth">
        <HeaderComponent />
        <MainComponent />
      </div>
    </>
  );
}
