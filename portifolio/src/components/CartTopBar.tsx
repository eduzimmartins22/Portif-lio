import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/useCart"

const CartTopBar = () => {
  const { cartItems, total } = useCart()
  const navigate = useNavigate()

  if (cartItems.length === 0) return null

  return (
    <Box
      id="cart-top"
      sx={{
        position: "sticky",
        top: 64, // abaixo do Header
        zIndex: 10,
        backgroundColor: "#1a1a1a",
        borderBottom: "1px solid #333",
        py: 2,
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box>
          <Typography fontWeight={700} color="white">
            🛒 {cartItems.length} item(ns) no carrinho
          </Typography>
          <Typography fontSize={14} color="#FF8C00">
            Total: R$ {total}
          </Typography>
        </Box>

        <Button
          startIcon={<ShoppingCartIcon />}
          onClick={() => navigate("/cart")}
          sx={{
            backgroundColor: "#FF8C00",
            color: "#000",
            fontWeight: 700,
            px: 3,
            "&:hover": {
              backgroundColor: "#ff9f2e",
            },
          }}
        >
          Ver Carrinho
        </Button>
      </Container>
    </Box>
  )
}

export default CartTopBar
