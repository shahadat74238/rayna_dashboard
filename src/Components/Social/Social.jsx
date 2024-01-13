import { Button } from "@heathmont/moon-core-tw";
import fb from "../../assets/FB.png";
import pi from "../../assets/Pin.png";
import t from "../../assets/T.png";

const Social = () => {
    return (
        <div className="bg-white p-6 rounded-md">
            <div className="py-6">
                <h1 className="text-moon-20 font-semibold text-[#1A1A21]">Social Networks</h1>
                <p className="text-moon-14 text-[#8C94A6]">Connect your socials to third-party applications so they can share information with each other.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-center border rounded-md justify-between p-6">
                    <div>
                        <img src={fb} alt="" />
                        <p className="text-[#1A1A21] font-medium text-moon-16">Facebook</p>
                    </div>
                    <div><Button variant="outline" className="border-[#F56630] text-moon-14 border text-[#F56630] rounded-xl">Outline</Button></div>
                </div>
                <div className="flex items-center border rounded-md justify-between p-6">
                    <div>
                        <img src={pi} alt="" />
                        <p className="text-[#1A1A21] font-medium text-moon-16">Pinterest</p>
                    </div>
                    <div><Button variant="outline" className="border-[#F56630] text-moon-14 border text-[#F56630] rounded-xl">Outline</Button></div>
                </div>
                <div className="flex items-center border rounded-md justify-between p-6">
                    <div>
                        <img src={t} alt="" />
                        <p className="text-[#1A1A21] font-medium text-moon-16">Tumblr</p>
                    </div>
                    <div><Button variant="outline" className="border-[#F56630] text-moon-14 border text-[#F56630] rounded-xl">Outline</Button></div>
                </div>
            </div>
        </div>
    );
};

export default Social;