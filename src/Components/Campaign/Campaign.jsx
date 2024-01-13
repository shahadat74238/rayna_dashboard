import CampaignBody from "./CampaignBody";
import CampaignSide from "./CampaignSide";

const Campaign = () => {
  return (
    <div className="bg-[#F0F2F5] min-h-screen max-w-[1440px] mx-auto">
      <div className="h-10 bg-white"></div>
      <div className="mt-12">
        <div className="w-4/5 mx-auto grid grid-cols-3 gap-6">
          <div className="bg-white col-span-2 rounded-md pt-8 pb-6 px-6">
            <CampaignBody />
          </div>
          <div className="bg-white col-span-1 rounded-md p-6">
            <CampaignSide />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campaign;
