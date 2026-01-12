import { styled } from "@mui/system"
import Button from "@mui/material/Button"

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  border: `2px solid ${theme.palette.primary.contrastText}`,
  borderRadius: "8px",
  padding: "8px 16px",
  width: "150px",
  color: theme.palette.primary.contrastText,
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",

  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}))

export default StyledButton
