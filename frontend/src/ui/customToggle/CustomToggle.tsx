
import type { SvgIconProps } from "@mui/material";

interface customToggleType{
  toggleOptions: { first: string, second: string, icon1?: React.ComponentType<SvgIconProps>, icon2?: React.ComponentType<SvgIconProps>  }, 
  handleToggle: React.Dispatch<React.SetStateAction<boolean>>
  isActive: boolean
}

const CustomToggle = ({toggleOptions, handleToggle, isActive}: customToggleType) => {
  return (
    <div className="flex border border-solid rounded-full px-0.75 py-0.5 text-sm dark:border-(--c-borderS) dark:bg-(--c-cards) dark:text-(--c-text) 
     border-(--light-surf3) text-(--light-tx3) bg-(--light-surf2)" 
    >
        <button
          className={`px-1.75 py-0.75 rounded-full duration-300  ease-linear  ${ isActive ? "dark:bg-(--c-hover) dark:text-(--c-text)  bg-(--light-surf) text-(--light-tx)" : ""} `}
          onClick={() => {
            handleToggle(true);
          }}
      >
          {toggleOptions.first}
        </button>
        <button
          className={`px-1.75 py-0.75 rounded-full duration-300  ease-linear ${ isActive ? "" : "dark:bg-(--c-hover) dark:text-(--c-text)  bg-(--light-surf) text-(--light-tx)"}`}
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
