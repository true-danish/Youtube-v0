const Shimmer = () => {
  return (
    <div className=" p-2 grid gap-4 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] ">
      {Array.from({ length: 25 }).map((e, i) => {
        return (
          <div key={i} className="grid gap-4">
            <div className="w-full h-40 rounded-2xl bg-gray-400"></div>
            <div className="grid gap-2">
              <p className="w-full h-4 rounded-2xl bg-gray-400"></p>
              <p className="w-2/3 h-4 rounded-2xl bg-gray-400"></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shimmer;
