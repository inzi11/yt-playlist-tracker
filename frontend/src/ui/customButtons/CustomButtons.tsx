import type { Theme } from "@mui/material";
import { Button, type SxProps } from "@mui/material";

type CustomButtonProps = {
  title: string;
  sx?: SxProps<Theme>;
  action: () => void;
    isDisabled?: boolean;
    variant?: "outlined" | "contained" | "text";
    style?: React.CSSProperties
};

function CustomButtons({
  title,
  sx,
  action,
  isDisabled,
    variant,
  style,
}: CustomButtonProps) {
  return (
    <Button
          sx={sx}
          style={style}
      variant={variant}
      disabled={isDisabled}
      onClick={action}
    >
      {title}
    </Button>
  );
}

export default CustomButtons;
