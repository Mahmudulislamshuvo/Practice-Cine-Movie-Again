import { useState } from "react";
import Page from "./Page";
import { DarkmoodContext, MovieContext } from "./context";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [darkmood, setDarkmood] = useState(false);
  const [cardData, setCardData] = useState([]);
  return (
    <>
      <DarkmoodContext.Provider value={{ darkmood, setDarkmood }}>
        <MovieContext.Provider value={{ cardData, setCardData }}>
          <Page />
          <Toaster position="top-left" reverseOrder={false} />
        </MovieContext.Provider>
      </DarkmoodContext.Provider>
    </>
  );
};

export default App;
