import Experience from "./Experience";

const MainComponent = () => {
  return (
    <main className="w-[50%] relative left-[300px]">
      <div id="about" className="text-xl">
        <h3>About</h3>
      </div>

      <Experience />

      <div id="projects" className="text-xl">
        <h3>Projects</h3>\
      </div>
    </main>
  );
};

export default MainComponent;
