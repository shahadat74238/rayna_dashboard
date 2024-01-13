/* eslint-disable react/prop-types */
import { ArrowsUp, ControlsChevronDown } from "@heathmont/moon-icons-tw";

const Card = ({title, day, number, percent} ) => {
    return (
        <div className="p-4 rounded-md bg-white ">
            <div className=" flex justify-between items-center">
              <h2 className="text-[#101928] text-moon-14 font-bold">
                {title}
              </h2>
              <p className="text-moon-12 text-[#98A2B3]">{day} <ControlsChevronDown className="inline text-moon-14" /> </p>
            </div>

            <div className=" flex items-center mt-16 justify-between">
              <h2 className="text-moon-24 font-bold text-[#101928]">{number}</h2>
              <p className="text-[#036B26] rounded-full bg-[#E7F6EC] px-1 text-moon-12"><ArrowsUp className="inline text-moon-14" /> {percent}</p>
            </div>
          </div>
    );
};

export default Card;