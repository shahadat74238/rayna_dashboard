import { useMemo } from "react";
import { Table } from "@heathmont/moon-table-tw";

const makeData = (length) => {
  return Array.from({ length }).map((_, index) => {
    return {
      firstName: "Test",

      status: Math.floor(index * 100),
      activity: Math.floor(index * 100),
    };
  });
};

const TableSection = () => {
  const columnsInitial = [
    {
      Header: "First Name",
      accessor: "firstName",
    },

    {
      Header: "Activity",
      accessor: "activity",
    },
    {
      Header: "Status",
      accessor: "status",
    },
  ];
  const columns = useMemo(() => columnsInitial, []);
  const data = useMemo(() => makeData(5), []);
  

  return (
    <div className="">
      <Table columns={columns} data={data}   />
    </div>
  );
};

export default TableSection;
