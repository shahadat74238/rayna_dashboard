import { GenericSearch } from '@heathmont/moon-icons-tw';

const Home = () => {
    return (
        <div className="px-9 w-full  min-h-screen">
           <div className="bg-white py-3 w-full relative">
                <input className="bg-[#F0F2F5] text-[#667185] rounded w-1/2 px-10 py-1" type="text" placeholder="Search here..." />
                <GenericSearch className='absolute left-2 top-4 text-moon-24'/>
           </div>
            
        </div>
    );
};

export default Home;