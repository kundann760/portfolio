import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Education,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <main className="relative z-0 bg-primary">
        <header className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </header>

        <About />
        <Tech />
        <Experience />
        <Works />
        <Education />
        <Feedbacks />

        <footer className="relative z-0">
          <Contact />
          <StarsCanvas />
        </footer>
      </main>
    </BrowserRouter>
  );
};

export default App;
