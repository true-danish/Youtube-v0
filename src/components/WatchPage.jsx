import { Link } from "react-router-dom";
import Sidebar2 from "./Sidebar2";

import VideoCard from "./VideoCard";
import useWatchPage from "../utils/useWatchPage";
import CommentSection from "./CommentSection";

export const WatchPage = () => {
  const { category, description, sidebar, v, id } = useWatchPage();
  return (
    <main className="mt-24 md:mt-14 p-8 dark:bg-[hsl(0,0%,6%)] dark:text-white grid grid-cols-[3fr_1fr]  max-md:grid-cols-1 ">
      {sidebar && <Sidebar2 />}
      <section className="">
        <iframe
          className="w-full h-[400px] md:h-[600px]"
          src={"https://www.youtube.com/embed/" + (v || id) + "?autoplay=1"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          autoPlay
        ></iframe>

        <div className="text-xs whitespace-pre-wrap">{description}</div>
      </section>

      <section className="grid grid-cols-1 p-4 text-3xl row-span-12">
        {category.map((video) => (
          <div className="w-full" key={video.id}>
            <Link
              state={{
                category: video.snippet.categoryId,
                description: video.snippet.description,
              }}
              to={"/watch?v=" + video.id}
            >
              <VideoCard videoInfo={video} />
            </Link>
          </div>
        ))}
      </section>
      {/* Comments section */}
      <CommentSection />
    </main>
  );
};
