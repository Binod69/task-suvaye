const Loading = () => {
  return (
    <>
      <div
        className=" max-w-containerSmall w-full lg:h-64 space-y-5 rounded-cardRadius mt-10 animate-pulse dark:bg-gray-300 p-4 isolate
    overflow-hidden
    shadow-xl shadow-black/5
    before:border-t before:border-rose-100/10"
      >
        <div className="h-10 mt-2 rounded-lg dark:bg-gray-200" />
        <div className="space-y-5">
          <div className="h-4 w-3/5 rounded-lg dark:bg-gray-200" />
          <div className="h-4 w-4/5 rounded-lg dark:bg-gray-200" />
          <div className="h-4 w-2/5 rounded-lg dark:bg-gray-200" />
        </div>
      </div>
    </>
  );
};

export default Loading;
