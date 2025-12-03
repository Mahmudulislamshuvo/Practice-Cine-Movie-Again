import { useState } from "react";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { MovieContext } from "./context";

const App = () => {
  const [cardData, setCardData] = useState([]);

  return (
    <div className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
      <MovieContext.Provider value={{ cardData, setCardData }}>
        <Navbar />
        <div className="container grid lg:grid-cols-[218px_1fr] gap-5">
          <Sidebar />
          <Content />
        </div>
      </MovieContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
