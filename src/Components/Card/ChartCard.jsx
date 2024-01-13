/* eslint-disable react/prop-types */
import { ArrowsUp, ControlsChevronDown } from "@heathmont/moon-icons-tw";
import layer from "../../assets/layer.png";
import CardChart from "../Chart/CardChart";

const ChartCard = ({ title, number, percent }) => {
  return (
    <div className="p-4 border rounded-lg bg-white ">
      <div className=" flex justify-between items-center">
        <div className="border p-2 rounded-lg">
          <img src={layer} alt="Layer Image" />
        </div>
        <p className="text-moon-12 text-[#98A2B3]">
          Last 30 days <ControlsChevronDown className="inline text-moon-14" />{" "}
        </p>
      </div>

      <div className=" flex items-center mt-16 justify-between">
        <div>
          <h2 className="text-moon-16 text-[#101928]">{title}</h2>
          <div className="flex gap-2 items-center">
            <p className="text-moon-18 font-semibold text-[#101928]">
              {number}
            </p>
            <p className="text-[#036B26] rounded-full bg-[#E7F6EC] px-1 text-moon-12">
              <ArrowsUp className="inline text-moon-14" />
              {percent}
            </p>
          </div>
        </div>
        <div>
          <CardChart />
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
