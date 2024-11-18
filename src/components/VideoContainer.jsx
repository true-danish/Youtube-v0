import VideoCard from "./VideoCard";
import useGetVideoList from "../utils/useGetVideoList";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const videoList = useGetVideoList();

  return (
    <section className="mt-16 md:mt-12 p-2 grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
      {videoList.length ? (
        videoList.map((video) => {
          return (
            <Link
              key={video.id}
              state={{
                category: video.snippet.categoryId,
                description: video.snippet.description,
              }}
              to={"/watch?v=" + video.id}
            >
              <VideoCard videoInfo={video} />
            </Link>
          );
        })
      ) : (
        <Shimmer />
      )}
    </section>
  );
};

export default VideoContainer;
