import GlowEffect from "@/components/ui/GlowEffect";
import InteractiveLayout from "@/components/InteractiveLayout";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <GlowEffect />
      <div className="relative w-full">
        <div className="fixed inset-x-0 top-0 h-64 md:h-80 lg:h-96 w-full overflow-hidden">
          <div
            style={{
              backgroundImage:
                'url("https://i.pinimg.com/1200x/7d/a7/90/7da7909a10bff01fbefdbd4d93e414b4.jpg")',
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
            className="w-full h-full"
          />

          <div className="absolute inset-0 bg-black/80" />
        </div>
      </div>

      <InteractiveLayout />
      <div className="fixed bottom-0 w-full p-2 text-center">
        <Footer />
      </div>
    </>
  );
}
