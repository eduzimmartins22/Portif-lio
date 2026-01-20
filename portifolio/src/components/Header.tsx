import { useState } from "react"
import styled from "@emotion/styled"
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  Badge,
} from "@mui/material"
import type { MouseEvent } from "react"
import { Link } from "react-router-dom"
import MenuIcon from "@mui/icons-material/Menu"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useCart } from "../context/useCart"
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
  const [openProdutos, setOpenProdutos] = useState(false)

  const { cartItems } = useCart()

  const isMenuOpen = Boolean(menuAnchor)

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget)
  }

  const handleMenuClose = () => {
    setMenuAnchor(null)
    setOpenProdutos(false)
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
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* LOGO */}
          <Box display="flex" alignItems="center" gap={1}>
            <LogoImg src={Logo} alt="UGO Celulares" />
            <Typography fontWeight={800} fontSize={18} color="white">
              UGO <span style={{ color: "#FF8C00" }}>CELULARES</span>
            </Typography>
          </Box>

          {/* ICONES */}
          <Box display="flex" alignItems="center">
            {/* CARRINHO */}
            <IconButton color="inherit" component={Link} to="/cart">
              <Badge badgeContent={cartItems.length} color="warning">
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

      {/* MENU */}
      <Menu
        anchorEl={menuAnchor}
        open={isMenuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem
          onClick={() => setOpenProdutos(!openProdutos)}
          sx={{ fontWeight: 600 }}
        >
          Produtos
        </MenuItem>

        {openProdutos && (
          <Box sx={{ pl: 2 }}>
            {[
              "Celulares",
              "Película",
              "Capinhas",
              "Mochilas",
              "Bicicletas",
              "Fones",
              "Caixas de Som",
            ].map((item) => (
              <MenuItem
              component={Link}
                to="/bicicletas#Bicicletas"
                onClick={handleMenuClose}
              >
                {item}
              </MenuItem>
            ))}
          </Box>
        )}

        <Divider />

        <MenuItem component="a" href="#Reparo" onClick={handleMenuClose}>
          Reparos
        </MenuItem>
          
        <MenuItem component="a" href="#localizacao" onClick={handleMenuClose}>
          Localização
        </MenuItem>

        <MenuItem component="a" href="#pagamento" onClick={handleMenuClose}>
          Contato
        </MenuItem>
      </Menu>
    </>
  )
}

export default Header
