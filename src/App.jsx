import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
      <Navbar />
      <div className="container grid lg:grid-cols-[218px_1fr] gap-5">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default App;
