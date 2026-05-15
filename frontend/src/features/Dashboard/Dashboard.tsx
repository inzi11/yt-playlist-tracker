import { useState } from "react";
import ReportCard from "../../ui/ReportCard/ReportCard";
import "./Dashboard.css";
import { Tooltip } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DashboardSectionCard from "../../Layouts/DashbaordSectionCard/DashboardSectionCard";
import RecentlyWatchedItems from "../../ui/RecentlyWatchedItems/RecentlyWatchedItems";

const Dashboard = () => {
  const formattedData = [
    {
      title: "Videos Watched",
      report: 84,
      color: "blue-500",
      footer: "This week",
      growthperc: 6,
      reportType: "number",
    },
    {
      title: "Hours Learned",
      report: 42,
      color: "green-500",
      footer: "This week",
      growthperc: 3.5,
      reportType: "hours",
    },
    {
      title: "Completion Rate",
      report: "61",
      color: "purple-500",
      footer: "This week",
      growthperc: "4",
      reportType: "percentage",
    },
    {
      title: "Streak",
      report: 12,
      color: "orange-500",
      footer: "Personal Best!",
      reportType: "days",
    },
  ];

  const [openCards, setOpenCards] = useState(false);


  const recentlyWatchedDummy = [
  {
    icon: "💻",
    title: "JavaScript Basics — Variables & Functions",
    subtitle: "Web Dev Bootcamp · Ep 5",
    time: "2h ago",
  },
  {
    icon: "🎨",
    title: "Color Theory & Accessibility",
    subtitle: "UI/UX Masterclass · Ep 28",
    time: "Yesterday",
  },
  {
    icon: "📐",
    title: "Matrix Multiplication Visualised",
    subtitle: "Linear Algebra · Ep 8",
    time: "2d ago",
  },
  {
    icon: "🐍",
    title: "Pandas DataFrames Deep Dive",
    subtitle: "Python for Data Science · Ep 21",
    time: "3d ago",
  },
];

  const handelOpenCards = () => {
    setOpenCards((prev) => !prev);
  };
  return (
    <div className="py-7 px-8.5 w-full">
      <div className="mb-10">
        <div className="flex justify-between ">
          <h1 className="text-xl font-bold text-(--light-tx)">
            Good Evening, Inzi 👋
          </h1>

          <button
            className="bg-(--c-accent) hover:bg-(--c-accentH) duration-200 ease-in-out text-sm h-fit py-1.75 rounded-lg px-2 text-(--light-surf) font-semibold"
            
          >
            + Add playlist
          </button>
        </div>

        {/* flexible date here? */}
        <div>Wednesday, March 2026 · 12-day streak going strong</div>
      </div>

      {/* cards section */}
      <div className="min-h-33 lg:h-33" >
      <div className="flex flex-col relative py-2 ">
        
  
        <div
    className={`${
      openCards
        ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full"
        : "relative w-72 card-effect"
              } gap-3 duration-200  ease-in-out transition-all`}
           style={{transitionTimingFunction: "cubic-bezier(0, 0.74, 0.62, 0.76)"}} 
  >
    {formattedData.map((items, i) => (
      <div
        key={i}
        className={openCards ? "" : " report-card w-70 absolute"}
        style={!openCards ? ({ "--i": i } as React.CSSProperties) : {}}
      >
        <ReportCard {...items} />
      </div>
    ))}
        </div>
      

      {/* tootip section */}
  
  <Tooltip
    title={openCards ? "Close Cards" : "Open Cards"}
          placement="right" 
          className="hidden lg:block absolute bottom-full hover:translate-x-1 hover:scale-105   transition-all duration-200 ease-in-out"
  >
    <span onClick={handelOpenCards}>
      {openCards ? <ArrowBackIcon /> : <ArrowForwardIcon />  }
    </span>
        </Tooltip>
        
      </div>
      </div>
      

      {/* dashbaord cards  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

        <DashboardSectionCard title="Recently watched" >
          <RecentlyWatchedItems items={recentlyWatchedDummy} />
        </DashboardSectionCard>
        
        <DashboardSectionCard title="Recently watched" >
          <RecentlyWatchedItems items={recentlyWatchedDummy} />
        </DashboardSectionCard>

      </div>
      

    </div>
  );
};

export default Dashboard;
