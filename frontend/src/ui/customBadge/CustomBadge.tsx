import type { Theme } from "@mui/material";
import { Chip, type SxProps } from "@mui/material"

type customBadgeProp = {
    label: string;
    action?: () => void;
    sx?: SxProps<Theme>;
style?: React.CSSProperties    
}
const CustomBadge = ({label, action, sx, style}: customBadgeProp ) => {
    return (
        <Chip
            label={label}
            onClick={action}
            variant="outlined"
            sx={sx}
            style={style}
        />
            
  )
}

export default CustomBadge
