import { Link, useLocation, useSearchParams } from "react-router-dom";
import Sidebar2 from "./Sidebar2";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { closeSidebar } from "../utils/defalultSlice";
import VideoCard from "./VideoCard";

export const WatchPage = () => {
  console.log("watch page");
  let [searchParams, setSearchParams] = useSearchParams();
  const { category: categoryId, description } = useLocation().state;
  const [category, setCategory] = useState([]);
  const v = searchParams.get("v");
  const sidebar = useSelector((store) => store.default.showSidebar);
  const dispatch = useDispatch();

  async function fetchSimilarVideo() {
    const url = `${
      import.meta.env.VITE_VIDEO_LIST_URL + import.meta.env.VITE_YOUTUBE_API_KEY
    }&videoCategoryId=${categoryId}`;

    const resObj = await fetch(url);
    const data = await resObj.json();
    console.log(data);
    setCategory(data.items);
  }
  useEffect(() => {
    dispatch(closeSidebar());
    fetchSimilarVideo();
  }, [searchParams]);

  return (
    <main className="mt-24 md:mt-14 p-8 dark:bg-[hsl(0,0%,6%)] dark:text-white grid grid-cols-[3fr_1fr]  max-md:grid-cols-1 ">
      {sidebar && <Sidebar2 />}
      <section className="">
        <iframe
          className="w-full h-[400px] md:h-[600px]"
          src={"https://www.youtube.com/embed/" + v}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div className="text-xs whitespace-pre-wrap">{description}</div>
      </section>

      <section className="grid grid-cols-1 p-4 text-3xl row-span-12">
        {category.map((video) => (
          <div
            onClick={() => {
              fetchSimilarVideo();
            }}
            className="w-full"
            key={video.id}
          >
            <Link state={video.snippet.categoryId} to={"/watch?v=" + video.id}>
              <VideoCard videoInfo={video} />
            </Link>
          </div>
        ))}
      </section>
      <section className="bg-orange-500 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maiores
        dolores unde tempore est rem accusamus numquam modi nobis eius dolor
        voluptatibus ducimus quaerat nesciunt, molestiae aliquam officia
        assumenda amet recusandae fuga, quasi vero doloribus nulla et. Sunt
        tenetur nisi laborum veritatis, iusto officia perferendis aspernatur
        velit fuga similique omnis eius aliquam, dignissimos amet rem voluptate
        eveniet accusamus exercitationem sed ratione, doloribus quae praesentium
        perspiciatis? Eveniet, velit itaque voluptas facere atque doloribus.
        Quidem, sapiente iusto veniam illum repellat nisi ratione provident
        libero suscipit est saepe nobis voluptas dolor quisquam repudiandae quia
        in tempora, odit aut vitae adipisci voluptates unde laboriosam!
      </section>
    </main>
  );
};
