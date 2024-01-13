import { Avatar, Button } from "@heathmont/moon-core-tw";
import {
  ChatCommentText,
  GenericPlus,
  GenericSearch,
  GenericUser,
  NotificationsBell,
  TimeAlarm,
} from "@heathmont/moon-icons-tw";
import TableSection from "../Table/TableSection";

const Consult_Doctor = () => {
  return (
    <div>
      <div className="px-9 bg-white flex justify-between items-center">
        <div className=" py-3 w-full relative">
          <input
            className="bg-[#F0F2F5] text-[#667185] rounded w-1/2 px-10 py-1"
            type="text"
            placeholder="Search here..."
          />
          <GenericSearch className="absolute left-2 top-4 text-moon-24" />
        </div>
        <div className="flex items-center gap-3">
          <Avatar size="sm" className="rounded-full bg-[#F0F2F5]">
            <NotificationsBell className="text-moon-24" />
          </Avatar>
          <Avatar className="rounded-full bg-[#F0F2F5]">
            <GenericUser className="text-moon-24" />
          </Avatar>
        </div>
      </div>
      {/* next body */}
      <div className="bg-[#F0F2F5] px-9 min-h-screen">
        <div className="flex justify-between items-center pt-8">
          <div>
            <h1 className="text-moon-24 font-semibold">Consult a Doctor</h1>
            <p className="text-moon-14 font-normal text-[#667185]">
              Check and filter all your medical appointments here
            </p>
          </div>
          <div>
            <Button
              className="bg-[#EB5017] text-white !rounded-md"
              iconLeft={<GenericPlus className="text-white font-medium" />}
            >
              New Consultation
            </Button>
          </div>
        </div>
        <div className="flex gap-4 mt-5">
          <div className="p-3 border border-[#FCD2C2] flex rounded-md items-center gap-2 bg-[#FFECE5]">
            <p>
              <ChatCommentText className="inline mr-2 text-moon-24" />
              Ongoing Consultations{" "}
            </p>
            <p className="px-2 font-medium rounded-full text-moon-12 text-[#AD3307] bg-[#FCD2C2]">
              4
            </p>
          </div>
          <div className="p-3 rounded-md flex gap-2 items-center bg-[#D0D5DD]">
            <p>
              <TimeAlarm className="inline mr-2 text-moon-24" />
              Closed Consultations
24
            </p>
            <p className="px-2 rounded-full text-moon-12 text-[#344054] font-medium bg-[#E4E7EC]">24</p>
          </div>
        </div>
        {/* Table */}
        <div className="mt-10">
            <TableSection />
        </div>
      </div>
    </div>
  );
};

export default Consult_Doctor;
