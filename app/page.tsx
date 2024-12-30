import GlowEffect from "@/components/ui/GlowEffect";
import HeaderComponent from "@/components/HeaderComponent";
import MainComponent from "@/components/MainComponent";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
      <GlowEffect />
      <div className="flex flex-col lg:flex-row lg:justify-center p-1 sm:p-10 lg:px-40 lg:py-28 relative scroll-smooth">
        <Layout />
      </div>
    </>
  );
}
