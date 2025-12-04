import tradingSvg from "../../assets/icons/trending.svg";
import newReleaseSvg from "../../assets/icons/newRelease.svg";
import commingSoonSvg from "../../assets/icons/commingSoon.svg";
import favouriteSvg from "../../assets/icons/favourite.svg";
import watchLaterSvg from "../../assets/icons/watchLater.svg";

const Sidebar = () => {
  return (
    <div>
      <aside>
        <ul className="space-y-2">
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-[#00d991] text-black"
              href="#"
            >
              <img src={tradingSvg} width="24" height="24" alt="" />
              <span>Trending</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={newReleaseSvg} width="24" height="24" alt="" />
              <span>New Releases</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={commingSoonSvg} width="24" height="24" alt="" />
              <span>Coming Soon</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={favouriteSvg} width="24" height="24" alt="" />
              <span>Favourites</span>
            </a>
          </li>
          <li>
            <a
              className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
              href="#"
            >
              <img src={watchLaterSvg} width="24" height="24" alt="" />
              <span>Watch Later</span>
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
