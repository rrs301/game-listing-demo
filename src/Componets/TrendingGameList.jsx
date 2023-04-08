import React from "react";

function TrendingGameList({ gameList }) {
  return (
    <div className="hidden md:block">
      <h2 className="font-bold text-[30px]">Trending Games</h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
         lg:grid-cols-4 gap-6 mt-5"
      >
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div
                className="pb-14  
                hover:scale-110 transition-all  relative duration-300 cursor-pointer"
                onClick={() => getMovieDetails(item.id)}
                key={item.id}
              >
                
                <img
                  src={item.background_image}
                  width={1080}
                  className="w-full h-[350px] rounded-t-xl object-cover"
                />
                <div className="  p-2 h-[80px] w-full backdrop-blur-sm
                bg-blue-400 rounded-b-xl">
                  <h2 className="   text-[20px] font-bold ">
                    {item.name}
                    {/* <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                      {item.metacritic}
                    </span> */}
                  </h2>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default TrendingGameList;
