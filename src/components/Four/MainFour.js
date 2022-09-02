import React, { useEffect, useState } from "react";
import Account from "./Account";
import Search from "./Search";
import Skeleton from "./Skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { easings } from "react-spring";

const MainFour = () => {
  const [users, setUsers] = useState([]);
  const [skeleton, setSkeleton] = useState(true);
  const [invites, setInvites] = useState([]);
  const [send, setSend] = useState(false);

  const onClickInviteId = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
        console.log(json.data);
        setSkeleton(false);
      })
      .catch((error) => {
        console.log(error);
        setSkeleton(true);
      });
  }, []);

  const [search, setSearch] = useState("");
  const placeHolderSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="h-screen bg-gradient-to-t from-purple-200 to-violet-200 flex justify-center items-center">
      <div className="bg-white h-[500px] w-[400px] rounded-lg shadow-2xl shadow-purple-300">
        {send ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              default: {
                duration: 0.4,
                ease: [0, 0.71, 0.2, 1.01],
              },
              scale: {
                type: "spring",
                damping: 7,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            className=" container h-full w-full p-24"
          >
            <div className="flex justify-start items-center flex-col">
              <div className=" bg-violet-200 w-[150px] h-[150px] flex justify-center rounded-full">
                <h1 className=" text-[200px] ml-8 -mt-[90px]">🎉</h1>
              </div>
              <h1 className=" text-4xl text-center pt-8">Success!</h1>
              <p className="text-slate-500 mt-2">
                {invites.length} users get invates!
              </p>
              <div className=" flex w-full justify-center pt-8">
                <button
                  onClick={() => {
                    window.location.reload(false);
                  }}
                  className="bg-orange-600 rounded-xl shadow-md shadow-orange-200 w-full hover:ring-2 
              transition-all duration-200 hover:ring-orange-700 hover:opacity-90 active:scale-90"
                >
                  <h1 className="text-white py-3">Back</h1>
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
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
            <div
              className="h-full  my-2 scrollbar-thin scrollbar-thumb-violet-100 hover:scrollbar-thumb-violet-200
              scrollbar-thumb-rounded-full"
            >
              <div className=" flex flex-col gap-y-5 p-1 px-4 cursor-default">
                {users
                  .filter((item) => {
                    const fullName = (
                      item.first_name + item.last_name
                    ).toLowerCase();
                    return (
                      fullName.includes(search.toLowerCase()) ||
                      item.email.includes(search.toLowerCase())
                    );
                  })
                  .map((item, index) => {
                    return (
                      <Account
                        {...item}
                        key={index}
                        invites={invites}
                        setInvites={setInvites}
                        skeleton={skeleton}
                        onClickInviteId={onClickInviteId}
                        isInvite={invites.includes(item.id)}
                      />
                    );
                  })}
              </div>
            </div>
            {invites.length > 0 ? (
              <button
                onClick={() => {
                  setSend(true);
                }}
                className="bg-orange-600 rounded-xl shadow-md shadow-orange-200 hover:ring-2 
              transition-all duration-300 hover:ring-orange-700 hover:opacity-90 active:scale-90"
              >
                <h1 className="text-white py-3">Send invite</h1>
              </button>
            ) : (
              <button className="rounded-xl shadow-md bg-slate-700 opacity-80 transition-all duration-300">
                <h1 className="text-white py-3">Send invite</h1>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MainFour;
