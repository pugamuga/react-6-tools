import React from "react";
import defaultIMG from "../../assets/gifOne.gif";
import MinusIcon from "./MinusIcon";
import PlusIcon from "./PlusIcon";
import Skeleton from "./Skeleton";
import { motion, AnimatePresence } from "framer-motion";

const Account = ({
  id,
  last_name,
  first_name,
  avatar,
  email,
  invates,
  setInvates,
  skeleton,
  onClickInviteId,
  isInvite,
}) => {
  return (
    <div className=" flex justify-between items-center">
      {skeleton ? (
        <Skeleton />
      ) : (
        <>
          <img
            src={avatar}
            className="object-cover w-12 h-12 rounded-full ring-1 transition-all duration-200 hover:ring-orange-500 hover:ring-2 ring-orange-300 ring-offset-1"
          />
          <div className="flex flex-col w-full px-4">
            <h1 className="">
              {first_name} {last_name}
            </h1>
            <p className="text-xs text-slate-400 font-light">{email}</p>
          </div>
            {isInvite ? (
              <MinusIcon onClickInviteId={onClickInviteId} id={id} />
            ) : (
              <PlusIcon onClickInviteId={onClickInviteId} id={id} />
            )}
        </>
      )}
    </div>
  );
};

export default Account;
