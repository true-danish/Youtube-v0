import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVideoList } from "./defalultSlice";

const useGetVideoList = () => {
  const videoList = useSelector((store) => store.default.videoList);
  const dispatch = useDispatch();
  let nextPage = useRef("").current;

  useEffect(() => {
    !videoList.length && fetchVideoList();

    function create(delay) {
      let last = 0;

      return function () {
        const timeNow = Date.now();
        if (
          timeNow - last >= delay &&
          document.documentElement.scrollTop + window.innerHeight >=
            document.documentElement.scrollHeight - 500
        ) {
          last = timeNow;
          nextPage && fetchVideoList();
        }
      };
    }
    const throttleFunction = create(2000);

    window.addEventListener("scroll", throttleFunction);
    return () => {
      window.removeEventListener("scroll", throttleFunction);
    };
  }, []);

  async function fetchVideoList() {
    console.log("nextPage");
    const url = `${
      import.meta.env.VITE_VIDEO_LIST_URL + import.meta.env.VITE_YOUTUBE_API_KEY
    }&pageToken=${nextPage}`;
    const resObj = await fetch(url);

    const data = await resObj.json();
    console.log(data);
    nextPage = data.nextPageToken;

    const newArr = data.items;
    dispatch(addVideoList(newArr));
  }
  return videoList;
};

export default useGetVideoList;
