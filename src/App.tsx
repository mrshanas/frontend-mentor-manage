import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App: React.FC = () => {
  return (
    <main>
      <Navbar />
      <article>
        <Hero />
      </article>
    </main>
  );
};

export default App;
