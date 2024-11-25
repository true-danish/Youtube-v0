const ButtonList = () => {
  const list = ["All", "Movies", "Live", "Games"];
  return (
    <div className="   w-max  max-md:mt-8 grid grid-flow-col gap-4 grid-cols-[repeat(auto-fit,minmax(0,max-content))] ">
      {list.map((e, i) => {
        return (
          <button
            key={i}
            className="cursor-pointer rounded-lg px-4 py-2 w-max dark:bg-slate-900 hover:bg-slate-500"
          >
            {e}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonList;
