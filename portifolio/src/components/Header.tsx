import styled from "@emotion/styled"
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material"
import Logo from "../images/Logo.png"

// ================= STYLES =================

const LogoImg = styled("img")({
  width: 42,
  height: 42,
  paddingRight: 8,
  borderRadius: 8,
  objectFit: "contain",
})

const Header = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(17,17,17,0.95)",
        backdropFilter: "blur(6px)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* LOGO + NOME */}
        <Box display="flex" alignItems="center" gap={1}>
          <LogoImg src={Logo} alt="UGO Celulares" />

          <Typography
            fontWeight={800}
            fontSize={18}
            color="white"
          >
            UGO <span style={{ color: "#FF8C00" }}>CELULARES</span>
          </Typography>
        </Box>

       
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          <Button href="#produtos" sx={{ color: "white" }}>
            Produtos
          </Button>
          <Button href="#localizacao" sx={{ color: "white" }}>
            Localização
          </Button>
          <Button href="#pagamento" sx={{ color: "white" }}>
            Pagamento
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
