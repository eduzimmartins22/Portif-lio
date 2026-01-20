import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  Button,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom"
import { useCart } from "../context/useCart"

const Cart = () => {
  const { cartItems, total, removeFromCart } = useCart()
  const navigate = useNavigate()

  const handleWhatsApp = () => {
    const message = cartItems
      .map(
        (item, index) =>
          `${index + 1}. ${item.name} - R$ ${item.price}${
            item.observation ? ` | Obs: ${item.observation}` : ""
          }`
      )
      .join("\n")

    const url = `https://wa.me/5527999346464?text=${encodeURIComponent(
      `🛒 Pedido UGO CELULARES\n\n${message}\n\n💰 Total: R$ ${total}`
    )}`

    window.open(url, "_blank")
  }

  return (
    <Box py={12} minHeight="100vh" bgcolor="#0f0f0f">
      <Container maxWidth="sm">
        {/* 🔙 BOTÃO VOLTAR */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{
            mb: 3,
            color: "#FF8C00",
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "rgba(255,140,0,0.1)",
            },
          }}
        >
          Voltar
        </Button>

        <Typography variant="h3" mb={4} textAlign="center">
          🛒 Seu Carrinho
        </Typography>

        {cartItems.length === 0 ? (
          <Typography textAlign="center" color="gray">
            Seu carrinho está vazio
          </Typography>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <Box key={index} mb={3}>
                <Box display="flex" justifyContent="space-between">
                  <Box>
                    <Typography fontWeight={700}>{item.name}</Typography>
                    {item.observation && (
                      <Typography fontSize={13} color="gray">
                        Obs: {item.observation}
                      </Typography>
                    )}
                  </Box>

                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography fontWeight={700}>
                      R$ {item.price}
                    </Typography>
                    <IconButton
                      onClick={() => removeFromCart(index)}
                      sx={{ color: "#FF8C00" }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </Box>
                <Divider sx={{ my: 2 }} />
              </Box>
            ))}

            <Typography variant="h5" textAlign="right" mb={3}>
              Total: <span style={{ color: "#FF8C00" }}>R$ {total}</span>
            </Typography>

            <Button
              fullWidth
              startIcon={<WhatsAppIcon />}
              onClick={handleWhatsApp}
              sx={{
                backgroundColor: "#25D366",
                color: "#000",
                fontWeight: 700,
                py: 1.5,
                "&:hover": { backgroundColor: "#1ebe5d" },
              }}
            >
              Finalizar no WhatsApp
            </Button>
          </>
        )}
      </Container>
    </Box>
  )
}

export default Cart
