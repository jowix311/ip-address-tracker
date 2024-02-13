import IPDetails from "./components/ip-detail/ip-detail.component";
import PatternBackgroundMobile from "../src/assets/pattern-bg-mobile.png";
import PatternBackgroundDesktop from "../src/assets/pattern-bg-desktop.png";
import Map from "./components/map/map.component";

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
            alt="background pattern"
            className="mx-auto md:h-[280px]"
          />
        </picture>
        <div className="relative z-0">
          <Map />
        </div>
      </div>
      <div className="absolute left-1/2 top-0  grid -translate-x-1/2 transform">
        <IPDetails />
      </div>
    </div>
  );
}

export default App;
