const ChartDetails = () => {
  const chartDetails = [
    {
      title: "Africa",
      people: "121,799",
      color: "#FDD2C2",
    },
    {
      title: "Europe",
      people: "66,734",
      color: "#F77A4A",
    },
    {
      title: "Australia",
      people: "21,567",
      color: "#F56630",
    },
    {
      title: "South America",
      people: "11,387",
      color: "#EB5017",
    },
  ];
  return (
    <div className="space-y-2">
      {chartDetails.map((data) => (
        <div key={data.people} className="flex  justify-between">
          <div className="flex gap-2 items-center">
            <div
              style={{ backgroundColor: data.color }}
              className="h-2 w-2  rounded-full"
            ></div>{" "}
            <p className="text-[#667185] text-moon-14">{data.title}</p>
          </div>
          <p className="text-[#101928] text-moon-14 font-medium">{data.people}</p>
        </div>
      ))}
    </div>
  );
};

export default ChartDetails;
