import React from "react";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl underline">Manage</h1>
    </div>
  );
};

export default App;
