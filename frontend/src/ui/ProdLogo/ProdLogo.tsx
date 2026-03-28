import CircleIcon from '@mui/icons-material/Circle';
type ProdLogo = {
  size?: "base" | "title" | "stat";
}

const ProdLogo = ({size = "base"}: ProdLogo) => {
  return (
      <h1 className={`flex items-center gap-1 text-${size} font-semibold`}>
          <CircleIcon className="text-(--c-accent) text-sm" fontSize="inherit"/>
          <span className='dark:text-(--c-text) text-(--light-tx) '> List </span>
          <span className="text-(--c-accent)">ify</span>
    </h1>
  )
}

export default ProdLogo
