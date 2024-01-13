import { Avatar } from "@heathmont/moon-core-tw";
import {
  ControlsChevronUp,
  ControlsChevronDown,
  Other3Dots,
  GenericUser,
} from "@heathmont/moon-icons-tw";
const TableSection = () => {
  const data = [
    {
      name: "Dr. Alison Ogaga",
      role: "General Practioner ",
      title: "I’m feeling uneasy",
      des: "Good morning. I'm sorry to hear that you're not feeling well. Can you tell me more about your symptoms? How long have you been feeling this way?",
      date: "1 Jul, 2023",
      time: "1:00 PM",
    },
    
    {
      name: "Dr.Jennifer Johnson",
      role: "Primary Care Physician ",
      title: "I have a rash",
      des: "Let's run some tests to understand better what might be causing these symptoms.",
      date: "1 Jul, 2023",
      time: "10:00 PM",
    },
    {
      name: "Dr. Samuel Smith",
      role: "Mental Health Professional ",
      title: "I’m suffering from anxiety",
      des: "Good afternoon. It's important that we address this. Anxiety can significantly impact your quality of life. Let's explore some strategies and perhaps treatments that can help you manage your anxiety effectively.",
      date: "1 Jul, 2023",
      time: "4:00 PM",
    },
    {
      name: "Dr. Lily Chen",
      role: "Dermatologist ",
      title: "I have a rash",
      des: "Hello, let's take a look at that rash. I'll also ask you some questions about your symptoms and any potential allergens or irritants you might have been exposed to.",
      date: "1 Jul, 2023",
      time: "8:00 PM",
    },
  ];
  return (
    <div className="">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-[#344054] uppercase bg-[#F0F2F5] border">
            <tr>
              <th scope="col" className="px-6 py-3">
                <div className="flex justify-between items-center">
                  <p>Name</p>
                  <div>
                    <ControlsChevronUp /> <ControlsChevronDown />
                  </div>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Conversation
              </th>
              <th scope="col" className="px-6 py-3">
                CategoryDate and time
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, idx) => (
              <tr key={idx} className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  <div className="flex  gap-3 items-center">
                    <div>
                      <div className="relative">
                        <Avatar
                          size="lg"
                          className=" bg-[#FFECE5] cursor-pointer text-[#F56630] rounded-full"
                        >
                          <GenericUser className="text-moon-24" />
                        </Avatar>
                        <span className="h-3 w-3 bg-green-700 absolute rounded-full right-0 bottom-1"></span>
                      </div>
                    </div>
                    <div>
                      <p className="text-[#101928] text-moon-14 font-medium
                      ">{d.name}</p>
                      <p className="text-[#475367] text-moon-14 font-normal">{d.role}</p>
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-moon-14 font-medium text-[#344054]">{d.title}</p>
                    <p className="text-moon-14 text-[#667185]">{d.des.length > 60 ? d.des.slice(0,60) : d.des}...</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="text-[#344054] font-medium text-moon-14">{d.date}</p>
                    <p className="text-[#667185] text-moon-14">{d.time}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="p-2 w-10 flex justify-center border rounded-md">
                    <Other3Dots className="text-moon-20" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableSection;
