import React, { useState } from "react";
import Account from "./Account";
import Search from "./Search";

const MainFour = () => {
  const [search, setSearch] = useState("");
  const placeHolderSearch = (event) => {
    setSearch(event.target.value);
  };

  const usersData = async () => {
    const users = await fetch("https://reqres.in/api/users")
      .then((res) => res.json)
      .then((json) => {
        let user = json.data;
        console.log(user);
      });
    return users;
  };
  usersData();

  return (
    <div className="h-screen bg-gradient-to-t from-purple-200 to-violet-200 flex justify-center items-center">
      <div className="bg-white h-[500px] w-[400px] rounded-lg shadow-2xl shadow-purple-300">
        <div className="container flex h-full p-8 flex-col justify-between relative">
          <input
            onChange={placeHolderSearch}
            value={search}
            placeholder={`     Search user...`}
            type="text"
            className=" ring-1  ring-slate-200 p-3 rounded-lg font outline-none focus:ring-1 focus:ring-slate-400 text-sm"
          />
          {search ? null : (
            <div className=" absolute top-[42px] left-[45px]">
              <Search />
            </div>
          )}
          <div className="h-full  my-2 scrollbar-thin scrollbar-thumb-violet-100 hover:scrollbar-thumb-violet-200
              scrollbar-thumb-rounded-full">
            <div className=" flex flex-col gap-y-5 p-1 px-4 cursor-default">
              <Account />
              <Account />
              <Account />
              <Account />
              <Account />
              <Account />
             
             
              
            </div>
          </div>
          <button className="bg-orange-600 rounded-xl shadow-md shadow-orange-200 ">
            <h1 className="text-white py-3">Send invite</h1>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainFour;
