import getReportType from "../../utils/getReportType";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

interface reportCardType {
    title: string;
  report: string | number; 
  color: string;
    footer: string; 
  growthperc?: string | number; 
  reportType?: string; 
}

const ReportCard = ({ title, report, color, footer, growthperc,  reportType }: reportCardType) => {
  
  return (
    <div
      className='w-full bg-(--light-surf) p-3
     rounded-xl shadow-md flex flex-col gap-1 items-start hover:scale-102 duration-300 ease-in-out '>
      
      <p className="text-[9.5px] font-sans uppercase" style={{color: "var(--light-tx3)"}}>{title}</p>
      <h2 className={`text-2xl font-semibold font-sans text-${color}`}> <span>{report}</span><span>{getReportType(reportType)}</span></h2>
      {
        growthperc ? 
          
            <div className="flex text-sm items-end gap-1 text-(--c-accent)">
          <p className="flex items-end">
            <ArrowUpwardIcon fontSize="small" />
              <span>
                {growthperc}%
              </span>
          </p>
          <span>{footer}</span>
            </div>
          :
          <p className="text-sm items-end gap-1 text-(--c-amber)"> {getReportType(title)} {footer}</p>
      }
    </div>
  )
}

export default ReportCard
