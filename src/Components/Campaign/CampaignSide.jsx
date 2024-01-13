import { Button } from "@heathmont/moon-core-tw";

const CampaignSide = () => {
  const data = [
    
    {
      title: "Create Segments",
      des: "Get full control over your audience",
    },
    {
      title: "Bidding strategy",
      des: "Optimize your campaign reach with adsense",
    },
    {
      title: "Site Links",
      des: "Setup your customer journey flow",
    },
    {
      title: "Review Campaign",
      des: "Double check your campaign is ready to go!",
    },
  ];
  return (
    <div className="grid grid-rows-5">
      <div className="space-y-4 row-span-2">
      <div  className="flex gap-4 items-center">
            <div>
            <div className="h-10 w-10 bg-[#F56630]  flex items-center justify-center rounded-full">
                <p className="text-white text-moon-20">1</p>
            </div>
            </div>
            <div>
                <h2 className="text-[#101928] text-moon-16 font-medium">Create New Campaign</h2>
                <p className="text-[#667185] text-moon-12">Fill out these details and get your campaign</p>
            </div>
          </div>
        {data.map((d, idx) => (
          <div key={idx} className="flex gap-4 items-center">
            <div>
            <div className="h-10 w-10 border flex items-center justify-center rounded-full">
                <p className="text-[#98A2B3] text-moon-20">{idx+2}</p>
            </div>
            </div>
            <div>
                <h2 className="text-[#8791a0] text-moon-16 font-medium">{d.title}</h2>
                <p className="text-[#667185] text-moon-12">{d.des}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="row-span-2"></div>
      <div className="row-span-1 w-full">
        <h1 className="text-[#344054] font-semibold text-moon-16">Need Help?</h1>
        <p className="text-[#98A2B3] w-3/4 text-moon-14">Get to know how your campaign can reach a wider audience.</p>
        <Button variant="outline" className="border text-[#667185] !rounded-md px-4">Contact Us</Button>
      </div>
    </div>
  );
};

export default CampaignSide;
