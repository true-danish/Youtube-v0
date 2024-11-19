import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VideoCard = ({ videoInfo }) => {
  const [channelImg, setChannelImg] = useState("");
  const mil = Math.floor(videoInfo?.statistics?.viewCount / 1000000);
  const thou = Math.floor(videoInfo?.statistics?.viewCount / 1000);
  const now = Date.now();
  const videoDate = new Date(videoInfo?.snippet.publishedAt).getTime();
  const minute = Math.floor((now - videoDate) / 1000 / 60);
  const hour = Math.floor(minute / 60);
  const day = Math.floor(hour / 24);
  const month = Math.floor(day / 30);
  const year = Math.floor(month / 12);

  // useEffect(() => {
  //   async function fetchVideoImg() {
  //     const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${
  //       videoInfo.snippet.channelId
  //     }&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`;
  //     const resObj = await fetch(url);
  //     const data = await resObj.json();

  //     setChannelImg(data?.items[0]?.snippet?.thumbnails?.default.url);
  //   }
  //   fetchVideoImg();
  // }, []);

  return (
    <div
      className={` rounded-3xl w-full overflow-hidden  cursor-pointer grid ${""}`}
    >
      <div className="w-full  aspect-video  overflow-hidden">
        <img
          src={
            videoInfo?.snippet?.thumbnails?.maxres?.url ||
            videoInfo?.snippet?.thumbnails?.medium?.url
          }
          alt="Video Thumbnail"
          className="w-full h-full"
        />
      </div>
      <div
        className={`p-2 grid grid-flow-col
          grid-cols-[max-content_1fr]
           gap-2`}
      >
        <div className="w-10 h-10 overflow-hidden rounded-full bg-slate-300">
          {/* <img src={channelImg} alt="channel Image" className="w-full h-full" /> */}
        </div>

        <div>
          <h1 className="font-bold text-xs">{videoInfo?.snippet?.title}</h1>
          <h2 className="text-sm pt-2 text-gray-600 dark:text-gray-300">
            {videoInfo?.snippet?.channelTitle}
          </h2>
          <div className="text-sm  text-gray-600 dark:text-gray-300 grid grid-flow-col ">
            <h2>
              {mil
                ? mil +
                  "." +
                  Math.floor(
                    (videoInfo?.statistics?.viewCount % 1000000) / 100000
                  ) +
                  `M`
                : thou + `K`}{" "}
              &nbsp; views
            </h2>
            <h2>
              {(year ? year + " year " : "") ||
                (month ? month + " month " : "") ||
                (day ? day + " day " : "") ||
                (hour ? hour + " hours " : "")}
              ago
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
