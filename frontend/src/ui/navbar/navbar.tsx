import { useState } from "react"
import ProdLogo from "../ProdLogo/ProdLogo"
import CustomToggle from "../customToggle/CustomToggle";
import { Avatar } from "@mui/material";


const Navbar = () => {

  const [ligthMode, setLightMode] = useState(true); // note this state will come for the context 
  console.log(ligthMode);

  return (
    <div className="w-full h-full bg-(--light-surf) sticky flex justify-between items-center shadow-md ">
      <div className="flex px-4 gap-5 ">
        <ProdLogo size="title" />
        <input
          className="rounded-lg w-60 placeholder:text-(--light-tx3)  bg-(--light-surf2) border shadow-sm border-solid border-(--light-surf3) text-sm px-3 h-8  hover:border-(--light-tx3) focus:border-(--light-tx3)  outline-none"
          placeholder="Search playlist, videos.."
        />
      </div>

      <div className="flex gap-4 pr-6 items-center">
        <CustomToggle toggleOptions={{first: "Light" , second: "Dark"}} handleToggle={setLightMode} isActive={ligthMode} />
        <button className="bg-(--c-accent) hover:bg-(--c-accentH) duration-200 ease-in-out text-sm h-fit py-1.75 rounded-lg px-2 text-(--light-surf) font-semibold" >+ Add playlist</button>
        <Avatar sx={{background:"linear-gradient(to right, #b84f4f, #6b5f96)", width: "32px", height:"32px"}}>H</Avatar>
      </div>


    </div>
  )
}

export default Navbar
