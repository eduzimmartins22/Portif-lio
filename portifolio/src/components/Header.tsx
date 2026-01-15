import { useState } from "react"
import styled from "@emotion/styled"
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  Badge,
  Divider,
} from "@mui/material"

import MenuIcon from "@mui/icons-material/Menu"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import Logo from "../images/Logo.png"

/* ================= STYLES ================= */

const LogoImg = styled("img")({
  width: 42,
  height: 42,
  paddingRight: 8,
  borderRadius: 8,
  objectFit: "contain",
})

/* ================= COMPONENT ================= */

const Header = () => {
  const [menuAnchor, setMenuAnchor] = useState(null)
  const [cartOpen, setCartOpen] = useState(false)

  const isMenuOpen = Boolean(menuAnchor)

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMenuAnchor(null)
  }

  return (
    <>
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
          {/* LOGO */}
          <Box display="flex" alignItems="center" gap={1}>
            <LogoImg src={Logo} alt="UGO Celulares" />

            <Typography fontWeight={800} fontSize={18} color="white">
              UGO <span style={{ color: "#FF8C00" }}>CELULARES</span>
            </Typography>
          </Box>

          {/* MENU DESKTOP */}
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

          {/* ICONES DIREITA */}
          <Box display="flex" alignItems="center" gap={1}>
            {/* CARRINHO */}
            <IconButton color="inherit" onClick={() => setCartOpen(true)}>
              <Badge badgeContent={2} color="warning">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>

            {/* MENU */}
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MENU DROPDOWN */}
      <Menu
        anchorEl={menuAnchor}
        open={isMenuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem disabled>Produtos</MenuItem>
        <MenuItem sx={{ pl: 4 }}>Celulares</MenuItem>
        <MenuItem sx={{ pl: 4 }}>Película</MenuItem>
        <MenuItem sx={{ pl: 4 }}>Capinhas</MenuItem>
        <MenuItem sx={{ pl: 4 }}>Mochilas</MenuItem>
        <MenuItem sx={{ pl: 4 }}>Bicicletas</MenuItem>
        <MenuItem sx={{ pl: 4 }}>Fones</MenuItem>
        <MenuItem sx={{ pl: 4 }}>Caixas de Som</MenuItem>
        
        <Divider />

        <MenuItem onClick={handleMenuClose}>Localização</MenuItem>
        <MenuItem onClick={handleMenuClose}>Contato</MenuItem>
      </Menu>

      {/* DRAWER DO CARRINHO */}
      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      >
        <Box width={320} p={2}>
          <Typography variant="h6" fontWeight={700}>
            Carrinho
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* ITEM EXEMPLO */}
          <Box display="flex" justifyContent="space-between" mb={1}>
            
          </Box>

          <Typography variant="body2" color="gray">
            Quantidade: 1
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography fontWeight={700}>
      
          </Typography>

          <Button
            fullWidth
            sx={{ mt: 2 }}
            variant="contained"
            color="warning"
          >
            Escolher pagamento
          </Button>
        </Box>
      </Drawer>
    </>
  )
}

export default Header
