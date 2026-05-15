import type React from "react"

interface DashboardSectionCardType{
    title: string, 
    children: React.ReactNode;
}


const DashboardSectionCard = ({title, children}: DashboardSectionCardType) => {
  return (
    <div className="bg-(--light-surf) rounded-lg font-sans px-5 w-full py-4 h-70 shadow-md border text-(--light-tx) border-(--light-surf3)">
        <h1 className="mb-3.25 text-body  font-semibold ">
           {title}   
          </h1>
          
          <section>
              {children}
          </section>
    </div>
  )
}

export default DashboardSectionCard
