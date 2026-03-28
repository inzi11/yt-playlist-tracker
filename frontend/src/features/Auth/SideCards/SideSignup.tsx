import ProdLogo from "../../../ui/ProdLogo/ProdLogo";
import ProgressCard from "../../../ui/progressCard/ProgressCard";

type Item = {
  title: string;
  items: number;
  time: number;
  completion: number;
};

const SideSignup = () => {
  const item: Item[] = [
    {
      title: "The Complete Web Dev",
      items: 62,
      time: 4,
      completion: 30,
    },
    {
      title: "The Complete Web Dev",
      items: 62,
      time: 4,
      completion: 60,
    },
    {
      title: "The Complete Web Dev",
      items: 62,
      time: 4,
      completion: 77,
    },
  ];

  return (
    <div className="relative w-105 mx-auto rounded-r-xl">
      <div className="relative bg-(--c-cards) border w-full border-(--c-border)  p-8 shadow-2xl shadow-black/60 overflow-hidden text-(--c-text) " >

      <section className="py-3 flex flex-col gap-8 ">
          <div className="flex flex-col gap-4 pb-4  ">
          <ProdLogo />
          </div>
          
          <div className="flex flex-col gap-2 w-full">

            <div className="pb-4 w-[60%] font-serif ">
            Track every playlist. Finish what you{" "}
            <span className="text-(--c-accent)">start.</span>
            </div>
               

            <div className=" flex flex-col w-full gap-2">
        {item.map((item, index) => (
          <div key={index} >
            <ProgressCard {...item} />
          </div>
        ))}
            </div>
          </div>

        <div className="text-micro text-(--c-textS) w-[68%]">
          Join learners who actually finish their playlists. Track progress, set
          goals, build streaks.
        </div>
        </section>
        </div>

    </div>
  );
};

export default SideSignup;
