import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { closeSidebar } from "../utils/defalultSlice";

const useWatchPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState(useLocation().state.video);
  const id = videoInfo?.id;
  const { description, categoryId } = videoInfo?.snippet;

  const [category, setCategory] = useState([]);
  let v = searchParams.get("v");
  if (v.includes("object")) v = "";
  console.log(v);
  const sidebar = useSelector((store) => store.default.showSidebar);
  const dispatch = useDispatch();

  async function fetchSimilarVideo() {
    console.log(categoryId);
    const url = `${
      import.meta.env.VITE_VIDEO_LIST_URL + import.meta.env.VITE_YOUTUBE_API_KEY
    }&videoCategoryId=${categoryId}`;
    console.log(url);
    const resObj = await fetch(url);
    const data = await resObj.json();
    console.log(data);
    setCategory(data.items);
  }

  async function doThis() {
    const url = `${
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&key=" +
      import.meta.env.VITE_YOUTUBE_API_KEY
    }&id=${id.videoId}`;
    const resObj = await fetch(url);
    const data = await resObj.json();
    const result = data.items.filter((e) => e.id === id.videoId);
    console.log(result[0]);
    setVideoInfo(result[0]);
  }

  useEffect(() => {
    dispatch(closeSidebar());
    if (categoryId) fetchSimilarVideo();
    else {
      doThis();
    }
    window.scrollTo(0, 0);
  }, [videoInfo]);

  return { category, description, sidebar, v, id };
};

export default useWatchPage;
