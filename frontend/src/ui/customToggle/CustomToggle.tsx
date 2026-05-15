
import type { SvgIconProps } from "@mui/material";

interface customToggleType{
  toggleOptions: { first: string, second: string, icon1?: React.ComponentType<SvgIconProps>, icon2?: React.ComponentType<SvgIconProps>  }, 
  handleToggle: React.Dispatch<React.SetStateAction<boolean>>
  isActive: boolean
}

const CustomToggle = ({toggleOptions, handleToggle, isActive}: customToggleType) => {
  return (
    <div className="flex border border-solid rounded-full px-1.25 py-0.75 shadow-sm text-md font-medium dark:border-(--c-borderS) dark:bg-(--c-cards) dark:text-(--c-text) 
     border-(--light-surf3) text-(--light-tx3) bg-(--light-surf2)" 
    >
        <button
          className={`px-3.5 py-1.75 rounded-full duration-300  ease-linear  ${ isActive ? "dark:bg-(--c-hover) dark:text-(--c-text)  bg-(--light-surf) text-(--light-tx) shadow-sm" : ""} `}
          onClick={() => {
            handleToggle(true);
          }}
      >
          {toggleOptions.first}
        </button>
        <button
          className={`px-3.5 py-1.75 rounded-full duration-300  ease-linear ${ isActive ? "" : "dark:bg-(--c-hover) dark:text-(--c-text)  bg-(--light-surf) text-(--light-tx) shadow-sm"}`}
          onClick={() => {
            handleToggle(false);
          }}
      >
        
          {toggleOptions.second}
        </button>
      </div>
  )
}

export default CustomToggle;
