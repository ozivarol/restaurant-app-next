import Image from "next/image";
import {MdShoppingCart} from "react-icons/md"
import Title from "./Title";
const {josefinSansClass} = require("../../assets/font")
const CampaignsItem = () => {
  return (
    <div className="bg-secondary flex-1 rounded-md py-5 px-[1rem] flex items-center gap-x-4">
      <div className="relative md:w-[11rem] md:h-[11rem] w-[9rem] h-[9rem]  after:content-['']   border-[0.25rem] border-primary rounded-full overflow-hidden">
        <Image
          className="hover:scale-105 transition-all"
          src="/images/o1.jpg"
          alt=""
          fill={true}
        />
      </div>
      <div className="text-white">
        <Title addClass={`${josefinSansClass} text-2xl`}>Tasty Thursdays</Title>
        <div className="font-dancing my-1">
          <span className={`${josefinSansClass} text-6xl`}>20%</span>
          <span className={`${josefinSansClass} text-sm inline-block ml-1`}>Off</span>
        </div>
        <button className={`${josefinSansClass} btn-primary flex items-center gap-x-2`}>
          Order Now <MdShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-[5.625rem] gap-6 flex-wrap">
      <CampaignsItem />
      <CampaignsItem/>
    </div>
  );
};

export default Campaigns;
