import logo from "../../assets/logo.svg";
import ring from "../../assets/ring.svg";
import shopingCart from "../../assets/shopping-cart.svg";
import sun from "../../assets/icons/sun.svg";

const Navbar = () => {
  return (
    <div>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="logo" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="ring" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={sun} width="24" height="24" alt="sun" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={shopingCart} width="24" height="24" alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
