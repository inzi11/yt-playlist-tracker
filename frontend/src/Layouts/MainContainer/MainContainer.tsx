import type { ReactNode } from "react"

type Props = {
  children: ReactNode;
};

const MainContainer = ({children}: Props) => {

  return (
    <div className='w-full h-full overflow-y-auto scroll-smooth shrink-0 bg-(--light-bg) font-sans' style={{width: "calc(100% - 320px)" , scrollbarWidth: "thin"}}>
      {children}
    </div>
  )
}

export default MainContainer
