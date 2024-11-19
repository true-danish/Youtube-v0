import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSearchVideoList, toggleDark } from "./defalultSlice";

const useHeader = () => {
  const [suggestion, setSuggestion] = useState(null);
  const input = useRef(null);
  const suggestContainer = useRef(null);
  const dispatch = useDispatch();
  let fired = false;

  async function handleSubmit(e) {
    e?.preventDefault();
    fired = true;
    if (input.current.value === "") return;
    const url = `${
      import.meta.env.VITE_VIDEO_SEARCH_API +
      import.meta.env.VITE_YOUTUBE_API_KEY
    }&q=${input.current.value}`;
    const resObj = await fetch(url);
    const data = await resObj.json();
    console.log(data);
    const newArr = data.items.filter((e) => {
      if (e.id.videoId) return true;
    });
    dispatch(addSearchVideoList(newArr));
  }

  function searchQuery(e) {
    input.current.value = e.target.innerText;
    handleSubmit();
  }

  function handleDark() {
    dispatch(toggleDark());
  }

  function removeSuggestion(e) {
    setSuggestion(null);
  }

  useEffect(() => {
    window.addEventListener("click", removeSuggestion);

    return () => {
      window.removeEventListener("click", removeSuggestion);
    };
  }, []);

  function handleSidebar() {
    dispatch(toggleSidebar(true));
  }
  async function fetchSuggestion() {
    if (input.current.value === "" || fired) {
      setSuggestion(null);
      fired = false;
      return;
    }
    const resObj = await fetch(
      "https://thingproxy.freeboard.io/fetch/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        input.current.value
    );
    const data = await resObj.json();
    console.log(data);
    setSuggestion(data[1]);
  }

  function debounce(cb, delay) {
    // console.log("debounce");
    let id;
    return function (...p) {
      clearTimeout(id);
      id = setTimeout(() => {
        cb(...p);
      }, delay);
    };
  }
  const db = debounce(fetchSuggestion, 2000);

  return {
    db,
    suggestion,
    suggestContainer,
    input,
    handleDark,
    handleSidebar,
    handleSubmit,
    searchQuery,
  };
};

export default useHeader;
