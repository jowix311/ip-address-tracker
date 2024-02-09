import IPDetails from "./components/ip-detail/ip-detail.component";
import PatternBackgroundMobile from "../src/assets/pattern-bg-mobile.png";
import PatternBackgroundDesktop from "../src/assets/pattern-bg-desktop.png";

function App() {
  return (
    <div className="relative h-full">
      <div className="m-auto grid h-full w-[375px] grid-rows-[auto_1fr] md:w-auto">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={PatternBackgroundDesktop}
          />
          <img
            src={PatternBackgroundMobile}
            alt="background pattern md:m"
            className="md:h-[280px] mx-auto"
          />
        </picture>

        <div className="h-full bg-gray-300">1</div>
      </div>
      <div className="absolute left-1/2 top-0  grid -translate-x-1/2 transform">
        <IPDetails />
      </div>
    </div>
  );
}

export default App;
