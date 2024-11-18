import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faCircleHalfStroke,
  faMagnifyingGlass,
  faUserLarge,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDark, toggleSidebar } from "../utils/defalultSlice";
import ButtonList from "./ButtonList";

const Header = () => {
  const dispatch = useDispatch();
  function handleDark() {
    dispatch(toggleDark());
  }

  function handleSidebar() {
    dispatch(toggleSidebar(true));
  }

  return (
    <header className="fixed top-0 w-full dark:bg-[hsl(0,0%,6%)] bg-white grid grid-cols-[1fr_3fr_1fr] max-w-[2000px] mx-auto max-md:grid-rows-2 items-center content-center justify-center p-2 ">
      <section className="grid grid-flow-col items-center  grid-cols-[max-content_max-content] gap-6 pl-8">
        <div onClick={handleSidebar}>
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            className=" cursor-pointer"
          />
        </div>

        <Link to="/">
          <div>
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-red-600 text-4xl  "
            />
          </div>
        </Link>
      </section>

      <section className="max-md:col-span-full max-w-2xl w-full">
        <div className="[border:1px_solid_black] dark:[border:1px_solid_gray] dark:bg-[hsl(0,0%,6%)]  rounded-full  overflow-hidden pl-4  grid grid-flow-col place-items-center grid-cols-[max-content_1fr_max-content] ">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="lg"
            className="dark:text-white "
          />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            className="outline-none border-none p-2 pl-4 w-full dark:bg-[hsl(0,0%,6%)] "
          />
          <button className="w-16 bg-slate-100 p-2 dark:text-black ">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          </button>
        </div>
      </section>

      <section
        onClick={handleDark}
        className="grid grid-flow-col justify-center items-center gap-6  col-[3_/_span_1] row-[1_/_span_1]"
      >
        <FontAwesomeIcon
          icon={faCircleHalfStroke}
          size="xl"
          className="dark:text-white cursor-pointer"
        />
        <FontAwesomeIcon
          icon={faUserLarge}
          size="xl"
          className="dark:text-white cursor-pointer"
        />
      </section>
    </header>
  );
};

export default Header;
