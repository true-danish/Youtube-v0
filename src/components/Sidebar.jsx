import {
  faDisplay,
  faHome,
  faPlay,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import Sidebar2 from "./Sidebar2";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sidebar = useSelector((store) => store.default.showSidebar);
  return sidebar ? (
    <Sidebar2 />
  ) : (
    <aside className="fixed top-20 text-center max-md:-translate-x-full min-h-screen h-full w-max grid  grid-rows-[repeat(4,max-content)] gap-8 p-2 justify-center items-center">
      <Link to="/">
        <div className="cursor-pointer hover:bg-slate-500 rounded-md p-2">
          <FontAwesomeIcon icon={faHome} size="lg" />
          <p className="text-xs">Home</p>
        </div>
      </Link>
      <div className="cursor-pointer hover:bg-slate-500 rounded-md p-2">
        <FontAwesomeIcon icon={faPlay} size="lg" />
        <p className="text-xs">Shorts</p>
      </div>
      <div className="cursor-pointer hover:bg-slate-500 rounded-md p-2">
        <FontAwesomeIcon icon={faDisplay} size="lg" />
        <p className="text-xs">Subscription</p>
      </div>
      <div className="cursor-pointer hover:bg-slate-500 rounded-md p-2">
        <FontAwesomeIcon icon={faUser} size="lg" />
        <p className="text-xs">You</p>
      </div>
    </aside>
  );
};

export default Sidebar;
