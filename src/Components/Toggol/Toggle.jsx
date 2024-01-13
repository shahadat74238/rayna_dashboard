const Toggle = () => {
  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-[#E4E7EC] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white   after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#F56630]"></div>
      </label>
    </div>
  );
};

export default Toggle;
