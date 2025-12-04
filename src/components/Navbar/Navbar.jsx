import logo from "../../assets/logo.svg";
import ring from "../../assets/ring.svg";
import shopingCart from "../../assets/shopping-cart.svg";
import sun from "../../assets/icons/sun.svg";
import moon from "../../assets/icons/moon.svg";
import { useContext, useState } from "react";
import CartDetails from "../CartDetails";
import { DarkmoodContext, MovieContext } from "../../context";

const Navbar = () => {
  const [showCard, setShowcard] = useState(false);
  const { cardData } = useContext(MovieContext);
  const { darkmood, setDarkmood } = useContext(DarkmoodContext);

  const handleOpenModal = () => {
    if (cardData.length > 0) {
      setShowcard(true);
    } else {
      alert("Your cart is empty");
    }
  };

  return (
    <>
      {showCard && <CartDetails setShowcard={setShowcard} />}
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
              onClick={() => setDarkmood(!darkmood)}
            >
              <img
                src={darkmood ? sun : moon}
                width="24"
                height="24"
                alt="sun"
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block relative"
              href="#"
              onClick={handleOpenModal}
            >
              <img src={shopingCart} width="24" height="24" alt="cart" />

              {/* Number Indicator (Badge) */}
              {cardData.length > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#12CF6F] text-xs font-bold text-white shadow-sm ring-1 ring-white dark:ring-[#12CF6F]">
                  {cardData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
