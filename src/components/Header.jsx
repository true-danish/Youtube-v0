import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faCircleHalfStroke,
  faMagnifyingGlass,
  faUserLarge,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import useHeader from "../utils/useHeader";

const Header = () => {
  const {
    handleSidebar,
    handleDark,
    handleSubmit,
    input,
    db,
    suggestion,
    suggestContainer,
    searchQuery,
  } = useHeader();

  return (
    <header className="fixed top-0 w-full dark:bg-[hsl(0,0%,6%)] bg-white grid grid-cols-[1fr_3fr_1fr] max-w-[2000px] mx-auto max-md:grid-rows-2 items-center content-center justify-center p-2 ">
      {/* Logo */}
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
      {/* Search */}
      <section className="max-md:col-span-full max-w-2xl w-full justify-self-center ">
        <div className="[border:1px_solid_black] dark:[border:1px_solid_gray] dark:bg-[hsl(0,0%,6%)]  rounded-full  overflow-hidden pl-4  grid grid-flow-col place-items-center grid-cols-[max-content_1fr] ">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="lg"
            className="dark:text-white "
          />
          <form onSubmit={handleSubmit} className="w-full flex">
            <input
              autoComplete="off"
              ref={input}
              onChange={db}
              type="search"
              name="search"
              id="search"
              placeholder="Search"
              className="outline-none border-none p-2 pl-4 w-full dark:bg-[hsl(0,0%,6%)] "
            />
            <button className="w-16 bg-slate-100 p-2 dark:text-black ">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
            </button>
          </form>
        </div>
        <div
          ref={suggestContainer}
          onClick={searchQuery}
          className="fixed p-2 rounded-2xl max-w-2xl w-full  bg-white text-black dark:bg-[hsl(0,0%,6%)] dark:text-white"
        >
          {suggestion &&
            suggestion.map((e) => (
              <p
                className="cursor-pointer hover:bg-slate-400 p-2 rounded-xl"
                key={e}
              >
                {e}
              </p>
            ))}
        </div>
      </section>
      {/* dark mode */}
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
