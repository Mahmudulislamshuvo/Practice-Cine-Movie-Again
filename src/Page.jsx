import { useContext } from "react";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { DarkmoodContext } from "./context";

const Page = () => {
  const { darkmood } = useContext(DarkmoodContext);

  return (
    <div className={`min-h-screen w-full ${darkmood ? "dark" : ""}`}>
      <div className="font-[Sora] text-dark dark:text-white">
        <Navbar />
        <div className="container grid lg:grid-cols-[218px_1fr] gap-5">
          <Sidebar />
          <Content />
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Page;
