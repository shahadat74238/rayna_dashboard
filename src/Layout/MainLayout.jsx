import { Button, Drawer } from "@heathmont/moon-core-tw";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../Components/Sidebar/SideBar";
import { GenericBurgerRegular } from '@heathmont/moon-icons-tw';

const MainLayout = () => {
  const [isStartOpen, setIsStartOpen] = useState(false);
  const handleStartClick = () => setIsStartOpen(true);
  return (
    <div className="lg:flex max-w-[1440px] mx-auto">
      <div className="block lg:hidden">
        <Button
          className={isStartOpen ? "hidden" : "block"}
          variant="outline"
          onClick={handleStartClick}
        >
          <GenericBurgerRegular className="text-3xl" />
        </Button>
        <Drawer open={isStartOpen} setOpen={setIsStartOpen}>
          <Drawer.Panel position="start" className="z-10" >
            <SideBar />
          </Drawer.Panel>
        </Drawer>
      </div>
      <div className="w-72 hidden border-r lg:block  ">
        <SideBar />
      </div>
      <div className=" w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
