import { Button } from "@heathmont/moon-core-tw";
import { useState } from "react";

const CampaignBody = () => {
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  const handleChange = () => {
    setState(!state);
  };const handleChange2 = () => {
    setState2(!state2);
  };
  console.log(state);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-[#1A1A21] font-semibold text-moon-24">
          Create New Email Campaign
        </h1>
        <p className="text-[#8C94A6] text-moon-16">
          Fill out these details to build your broadcast
        </p>
      </div>
      <div className="mt-8">
        <form>
          <div>
            <p className="text-[#475367] text-moon-14 font-medium">
              Campaign Subject
            </p>
            <input
              className="p-4 border w-full rounded-md focus:outline-[#FCD2C2] "
              type="text"
              placeholder="Enter Subject"
            />
          </div>
          <div className="mt-6">
            <p className="text-[#475367] text-moon-14 font-medium">
              Preview text
            </p>
            <textarea
              className="px-4 py-6 w-full focus:outline-[#FCD2C2] rounded-md border"
              placeholder="Enter text here..."
            />
          </div>
          <p className="text-moon-14 font-medium text-[#667185] mt-2">
            Keep this simple of 50 character
          </p>
          <div className="mt-6 grid grid-cols-2 gap-5">
            <div>
              <p className="text-[#475367] text-moon-14 font-medium mb-1">
                “From” Name
              </p>
              <input
                className="p-4 border w-full rounded-md focus:outline-[#FCD2C2] "
                type="text"
                placeholder="From Anne"
              />
            </div>
            <div>
              <p className="text-[#475367] text-moon-14 font-medium mb-1">
                “From” Email
              </p>
              <input
                className="p-4 border w-full rounded-md focus:outline-[#FCD2C2] "
                type="text"
                placeholder="Anne@example.com"
              />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <p
                className={
                  state2
                    ? "text-[#1D2739] text-moon-14 font-medium"
                    : "text-[#667185] text-moon-14 font-medium"
                }
              >
                Run only once per customer
              </p>
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={handleChange2}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white   after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#F56630]"></div>
                </label>
              </div>
            </div>
            <div className="mt-6 flex justify-between items-center">
              <p
                className={
                  state
                    ? "text-[#1D2739] text-moon-14 font-medium"
                    : "text-[#667185] text-moon-14 font-medium"
                }
              >
                Run only once per customer
              </p>
              <div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={handleChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white   after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#F56630]"></div>
                </label>
              </div>
            </div>
            <p className="mt-4 text-[#667185] text-moon-14">
              You can set up a{" "}
              <span className="text-[#8F2802]">
                custom domain or connect your email service provider
              </span>{" "}
              to change this.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-6">
            <div>
              <Button
                variant="outline"
                className="border border-[#EB5017] text-[#EB5017] font-semibold !rounded-md w-full"
              >
                OutlineSave Draft
              </Button>
            </div>
            <div>
              <Button className="bg-[#EB5017] text-white text-moon-16 font-semibold !rounded-md w-full">
                Next Step
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignBody;
