import { NavLink } from "react-router-dom";
import logo from "../../../src/assets/logo.png";
import gDrive from "../../../src/assets/g-drive.png";
import paypal from "../../../src/assets/paypal.png";

import {
  GenericHome,
  ChatCommentText,
  GenericSettings,
  GenericLogOut,
  GenericDelete,
  MediaHeadphones,
} from "@heathmont/moon-icons-tw";
import { Avatar } from "@heathmont/moon-core-tw";

const SideBar = () => {
  return (
    <div className="w-full py-6 bg-white   border-r">
      <div className="mx-6 my-2">
        <img className="scale-100" src={logo} alt="Loading Logo" />
      </div>
      <div className="lg:grid lg:grid-rows-5  mb-6">
        <div className="mx-2 pb-3 lg:row-span-2">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "link_active" : "link_normal "
                }
              >
                {" "}
                <GenericHome className="inline mr-2 text-moon-24 font-semibold" />{" "}
                <span className="text-[#101928] ">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/consult_doctor"
                className={({ isActive }) =>
                  isActive ? "link_active" : "link_normal "
                }
              >
                {" "}
                <ChatCommentText className="inline mr-2 text-moon-24 font-semibold" />{" "}
                <span className="text-[#101928]">Consult a Doctor</span>
              </NavLink>
            </li>
          </ul>
          <hr className="my-4" />
          <p className="text-[#98A2B3] px-4">Integrations</p>
          <ul className="mt-3">
            <li>
              <p className="cursor-pointer flex gap-3 items-center px-4 py-1 lg:py-3">
                <img className="h-4" src={gDrive} alt="png" />
                <span className="text-[#101928] ">Google Drive</span>
              </p>
            </li>
            <li>
              <p className="cursor-pointer flex gap-3 items-center px-4 py-1 lg:py-3 ">
                <img src={paypal} alt="" /><span className="text-[#101928] ">Paypal</span>
              </p>
            </li>
          </ul>
        </div>
        <div className=" lg:row-span-1"></div>
        <div className="mx-2  lg:row-span-2">
          <ul>
            <li>
              <p className="link_normal">
                <GenericSettings className="inline text-moon-24 text-[#101928] mr-2 " />{" "}
                Settings
              </p>
            </li>
            <li>
              <p className="link_normal">
                <MediaHeadphones className="inline text-moon-24 text-[#101928] mr-2 " />{" "}
                Help Center
              </p>
            </li>
            <li>
              <p className="link_normal">
                <GenericDelete className="inline text-moon-24 text-[#101928] mr-2 " />{" "}
                Refer family & friends
              </p>
            </li>
          </ul>
          <div className="flex gap-3 px-6 py-3 mt-5">
            <div className="relative">
              <Avatar
                size="lg"
                className=" bg-[#FFECE5] cursor-pointer text-[#F56630] rounded-full"
              >
               <img src="https://xsgames.co/randomusers/assets/avatars/male/46.jpg" alt="loading" />
              </Avatar>
              <span className="h-3 w-3 bg-green-700 absolute rounded-full right-0 bottom-1"></span>
            </div>
            <div>
              <h1 className="text-moon-14 text-[#101928] font-medium">
                User Name
              </h1>
              <p className="text-moon-14 text-[#101928] font-normal">
                admin@demo.ui
              </p>
            </div>
            <div className="flex cursor-pointer items-center text-moon-24">
              <GenericLogOut />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
