import React from "react";

const PhotoCard = ({ name, photos, category, setNothing }) => {
  return (
    <div className="bg-white h-[320px] w-1/3  hover:shadow-xl hover:ring-2 ring-violet-200 rounded-md shadow-md min-w-[300px] p-4 flex flex-col gap-y-2">
      <img
        src={photos[0]}
        className=" object-cover w-full h-[50%] rounded-md"
      />
      <div
        className=" max-h-[40%] h-[40%] flex gap-x-2  justify-center"
        id="small"
      >
        <img
          src={photos[1]}
          className="object-cover  h-[100px] w-[85px] rounded-md "
        />
        <img
          src={photos[2]}
          className="object-cover  h-[100px] w-[85px] rounded-md "
        />
        <img
          src={photos[3]}
          className="object-cover  h-[100px] w-[85px] rounded-md "
        />
      </div>
      <div id="name" className="h-[10%] ">
        <h1 className="">{name}</h1>
      </div>
    </div>
  );
};

export default PhotoCard;
