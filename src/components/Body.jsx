import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import VideoContainer from "./VideoContainer";
import ButtonList from "./ButtonList";

const Body = () => {
  const sidebar = useSelector((store) => store.default.showSidebar);
  console.log("body");
  return (
    <main
      className={`grid grid-flow-col grid-cols-[0px_1fr]  ${
        sidebar ? "md:grid-cols-[200px_1fr]" : "md:grid-cols-[100px_1fr]"
      }   `}
    >
      {/* Sidebar */}

      <Sidebar />

      <section className=" mt-14  dark:bg-[hsl(0,0%,6%)] dark:text-white p-4 col-[2_/_span_1]">
        <ButtonList />
        <VideoContainer />
      </section>
    </main>
  );
};

export default Body;
