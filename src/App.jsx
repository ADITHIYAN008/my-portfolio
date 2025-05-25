import Lenis from "@studio-freight/lenis";
import NavBar from "./components/NavBar";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 5, // smoothness (default is 1.2)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
      smooth: true,
      direction: "vertical", // or 'horizontal'
      gestureDirection: "vertical",
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <NavBar />
    </div>
  );
};

export default App;
