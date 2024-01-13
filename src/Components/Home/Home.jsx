import { Button } from "@heathmont/moon-core-tw";
import {
  GenericSearch,
  GenericPlus,
  ControlsChevronDown,
  ArrowsDown,
} from "@heathmont/moon-icons-tw";
import Card from "../Card/Card";
import ChartCard from "../Card/ChartCard";
import SideChart from "../Chart/SideChart";
import chartUp from "../../assets/chart-up.png";
import ChartDetails from "../Chart/ChartDetails";
import Social from "../Social/Social";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" w-full">
      <div className="px-9">
        <div className="bg-white py-3 w-full relative">
          <input
            className="bg-[#F0F2F5] text-[#667185] rounded w-1/2 px-10 py-1"
            type="text"
            placeholder="Search here..."
          />
          <GenericSearch className="absolute left-2 top-4 text-moon-24" />
        </div>
      </div>
      <div className="bg-[#F0F2F5]  px-9 ">
        <div className="flex justify-between items-center pt-8">
          <div>
            <h1 className="text-moon-24 font-semibold">Overview</h1>
            <p className="text-moon-14 font-normal text-[#667185]">
              You’ve <span className="text-[#CC400C]">1,237</span> unread
              messages this month
            </p>
          </div>
          <div>
            <Link to="/campaign">
            <Button
              className="bg-[#EB5017] text-white !rounded-md"
              iconLeft={<GenericPlus className="text-white font-medium" />}
            >
              New Campaign
            </Button>
            </Link>
          </div>
        </div>
        {/* card Container */}
        <div className="grid gap-4 grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Card 1*/}
          <Card
            title="Delivered"
            number="4,639"
            day="Last 30 days"
            percent="2.71%"
          />
          {/* Card 2*/}
          <div className="p-4 rounded-md bg-white ">
            <div className=" flex justify-between items-center">
              <h2 className="text-[#101928] text-moon-14 font-bold">Opened</h2>
              <p className="text-moon-12 text-[#98A2B3]">
                Last 30 days{" "}
                <ControlsChevronDown className="inline text-moon-14" />{" "}
              </p>
            </div>

            <div className=" flex items-center mt-16 justify-between">
              <h2 className="text-moon-24 font-bold text-[#101928]">1,264</h2>
              <p className="text-[#9E0A05] rounded-full bg-[#FBEAE9] px-1 text-moon-12">
                <ArrowsDown className="inline text-moon-14" /> 8%{" "}
              </p>
            </div>
          </div>
          {/* Card 3*/}
          <Card
            title="Clicked"
            number="2,103"
            day="Last 30 days"
            percent="5.26%"
          />

          {/* Card 4*/}
          <Card
            title="Avg. Views"
            number="1,503"
            day="Last 30 days"
            percent="1.43%"
          />
        </div>
        {/* Char section */}
        <div className="grid md:grid-cols-7 lg:grid-cols-7 grid-cols-1 gap-6 mt-4">
          {/* main Chart */}
          <div className="md:col-span-4 lg:col-span-5 rounded-md bg-white p-4">
            {/* Title  */}
            <div>
              <h2 className="text-moon-20 font-bold">Metrics</h2>
              <p className="text-[#667185] text-moon-14">
                Monitor your customer behaviour
              </p>
            </div>
            <div>
              <div className="grid gap-4 mt-4 grid-cols-1 lg:grid-cols-2">
                <ChartCard title="Customer PR" number="20,502" percent="10%" />
                <ChartCard title="Unique PPV" number="14,295" percent="5%" />
              </div>
              <div className="mt-4">
                <ChartCard
                  title="Total Campaign Reach"
                  number="270,258"
                  percent="20%"
                />
              </div>
            </div>
          </div>
          {/* Side chart */}
          <div className="md:col-span-3 lg:col-span-2 rounded-md mt-4 md:mt-0 bg-white px-5 py-6">
            <p className="font-medium text-[#475367] text-moon-14">
              Active Subscribers
            </p>
            <div className="mt-4 flex gap-2 items-center">
              <p className="text-moon-24 font-semibold">13,450 </p>
              <p className="text-[#667185] text-moon-14">views</p>
            </div>
            <div className="flex gap-2">
              <img src={chartUp} alt="chart png" />
              <p className="text-moon-14 text-[#98A2B3]">
                <span className="text-[#099137]">45%</span>(+69,008)
              </p>
            </div>
            <SideChart />
            <div className="mt-5">
              <ChartDetails />
            </div>
          </div>
        </div>
          {/* Social */}
          <div className="mt-4  ">
            <Social />
          </div>
      </div>
    </div>
  );
};

export default Home;
