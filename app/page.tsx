import HeaderComponent from "@/components/HeaderComponent";
import MainComponent from "@/components/MainComponent";

export default function Home() {
  return (
    <div className="flex justify-center md:px-52 md:py-40 relative scroll-smooth">
      <HeaderComponent />
      <MainComponent />
    </div>
  );
}
