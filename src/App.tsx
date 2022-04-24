import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <main>
      <Navbar />
      <article>
        <Hero />
        <About />
        <Carousel />
      </article>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default App;
