import { AnimatedGridPattern } from "./components/ui/animated-grid-pattern";
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className="fixed inset-0 z-0 h-full w-full text-white/20"
      />
      <Header />
      <main className="main-content">
        <Home />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
