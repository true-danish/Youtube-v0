import { faPlaystation } from "@fortawesome/free-brands-svg-icons";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import {
  faCirclePause,
  faDisplay,
  faFlag,
  faGamepad,
  faGear,
  faHistory,
  faHome,
  faInfo,
  faPlay,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Sidebar2 = () => {
  return (
    <aside className="fixed top-14 h-screen z-10 bg-white  dark:bg-[hsl(0,0%,6%)] w-48 ">
      <section className="grid gap-4 p-4 [border-bottom:1px_solid_gray]">
        <Link to="/">
          <div className="grid grid-flow-col gap-2 cursor-pointer hover:bg-slate-500 hover:rounded-full p-2">
            <FontAwesomeIcon icon={faHome} size="lg" />
            <p className="text-xs">Home</p>
          </div>
        </Link>

        <div className="grid grid-flow-col gap-2 cursor-pointer hover:bg-slate-500 hover:rounded-full p-2">
          <FontAwesomeIcon icon={faPlay} size="lg" />
          <p className="text-xs">Shorts</p>
        </div>
        <div className="grid grid-flow-col gap-2 cursor-pointer hover:bg-slate-500 hover:rounded-full p-2">
          <FontAwesomeIcon icon={faDisplay} size="lg" />
          <p className="text-xs">Subscription</p>
        </div>
      </section>

      <section className="grid gap-2 p-4 [border-bottom:1px_solid_gray]">
        <div className="grid grid-flow-col gap-2 cursor-pointer hover:bg-slate-500 hover:rounded-full p-2">
          <FontAwesomeIcon icon={faHistory} size="lg" />
          <p className="text-xs">History</p>
        </div>
        <div className="grid grid-flow-col gap-2 cursor-pointer hover:bg-slate-500 hover:rounded-full p-2">
          <FontAwesomeIcon icon={faGamepad} size="lg" />
          <p className="text-xs">Playlist</p>
        </div>
        <div className="grid grid-flow-col gap-2 cursor-pointer hover:bg-slate-500 hover:rounded-full p-2">
          <FontAwesomeIcon icon={faPlaystation} size="lg" />
          <p className="text-xs">Your Videos</p>
        </div>
        <div className="grid grid-flow-col gap-2 cursor-pointer hover:bg-slate-500 hover:rounded-full p-2">
          <FontAwesomeIcon icon={faCirclePause} size="lg" />
          <p className="text-xs">Watch Later</p>
        </div>
        <div className="grid grid-flow-col gap-2 cursor-pointer hover:bg-slate-500 hover:rounded-full p-2">
          <FontAwesomeIcon icon={faThumbsUp} size="lg" />
          <p className="text-xs">Liked Videos</p>
        </div>
      </section>
      <section className="grid gap-2 p-4 [border-bottom:1px_solid_gray]">
        <div className="grid grid-flow-col gap-2 cursor-pointer hover:bg-slate-500 hover:rounded-full p-2">
          <FontAwesomeIcon icon={faGear} size="lg" />
          <p className="text-xs">Settings</p>
        </div>
        <div className="grid grid-flow-col gap-2 cursor-pointer hover:bg-slate-500 hover:rounded-full p-2">
          <FontAwesomeIcon icon={faFlag} size="lg" />
          <p className="text-xs">Report History</p>
        </div>
        <div className="grid grid-flow-col gap-2 cursor-pointer hover:bg-slate-500 hover:rounded-full p-2">
          <FontAwesomeIcon icon={faQuestion} size="lg" />
          <p className="text-xs">Help</p>
        </div>
        <div className="grid grid-flow-col gap-2 cursor-pointer hover:bg-slate-500 hover:rounded-full p-2">
          <FontAwesomeIcon icon={faInfo} size="lg" />
          <p className="text-xs">Send Feedback</p>
        </div>
      </section>
    </aside>
  );
};

export default Sidebar2;
