"use client";
import { useState } from "react";
import HeaderComponent from "./HeaderComponent";
import MainComponent from "./MainComponent";
import Footer from "./Footer";

export default function InteractiveLayout() {
  const [currentTab, setCurrentTab] = useState<string>("about");

  return (
    <div className="h-screen md:mx-[20%] flex flex-col p-1 sm:p-10 lg:px-40 lg:py-28 relative scroll-smooth">
      <div className="w-full  relative z-10 flex items-center">
        <HeaderComponent
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        />
      </div>

      <div className="flex-1 overflow-auto min-h-0 scroll-area">
        <MainComponent currentTab={currentTab} />
      </div>
    </div>
  );
}
