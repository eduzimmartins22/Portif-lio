import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  Button,
  TextField,
} from "@mui/material"

import DeleteIcon from "@mui/icons-material/Delete"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import PaymentsIcon from "@mui/icons-material/Payments"
import QrCodeIcon from "@mui/icons-material/QrCode"
import AccountBalanceIcon from "@mui/icons-material/AccountBalance"
import LocalAtmIcon from "@mui/icons-material/LocalAtm"

import { useNavigate } from "react-router-dom"
import { useCart } from "../context/useCart"
import { useState } from "react"

const Cart = () => {
  const { cartItems, total, removeFromCart } = useCart()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [cpf, setCpf] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")

const handleWhatsApp = async () => {
  if (!name.trim() || !cpf.trim()) {
    alert("Por favor, preencha Nome e CPF para finalizar o pedido.")
    return
  }

  if (!paymentMethod) {
    alert("Por favor, selecione o modo de pagamento.")
    return
  }

  const message = cartItems
    .map(
      (item, index) =>
        `${index + 1}. ${item.name} - R$ ${item.price}${
          item.observation ? ` | Obs: ${item.observation}` : ""
        }`
    )
    .join("\n")

  const fullMessage = `
🛒 *PEDIDO UGO CELULARES*

👤 *Cliente:* ${name}
🪪 *CPF:* ${cpf}

📦 *Produtos:*
${message}

💳 *Pagamento:* ${paymentMethod}
💰 *Total:* R$ ${total}
  `.trim()

  // 🔐 A PARTIR DAQUI MUDA
  const res = await fetch("/.netlify/functions/whatsapp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: fullMessage }),
  })

  const data = await res.json()

  if (!data.url || !data.signature) {
    alert("Erro de segurança. Tente novamente.")
    return
  }

  // 🛡️ (opcional, mas recomendado)
  if (!data.url.startsWith("https://wa.me/")) {
    alert("Falha de segurança detectada.")
    return
  }

  window.open(data.url, "_blank")
}


  return (
    <Box py={12} minHeight="100vh" bgcolor="#0f0f0f">
      <Container maxWidth="sm">
        {/* 🔙 VOLTAR */}
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
            {/* 👤 DADOS DO CLIENTE */}
            <Box mb={4}>
              <Typography variant="h6" mb={2}>
                Identificação do Cliente
              </Typography>

              <TextField
                fullWidth
                label="Nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="CPF"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                placeholder="000.000.000-00"
              />
            </Box>

            {/* 💳 PAGAMENTO */}
            <Box mb={4}>
              <Typography variant="h6" mb={2}>
                💳 Modo de Pagamento
              </Typography>

              <Box display="flex" flexDirection="column" gap={1}>
                <Button
                  variant={paymentMethod === "PIX" ? "contained" : "outlined"}
                  startIcon={<QrCodeIcon />}
                  onClick={() => setPaymentMethod("PIX")}
                >
                  PIX
                </Button>

                <Button
                  variant={
                    paymentMethod === "CRÉDITO (12x sem juros)"
                      ? "contained"
                      : "outlined"
                  }
                  startIcon={<CreditCardIcon />}
                  onClick={() =>
                    setPaymentMethod("CRÉDITO (12x sem juros)")
                  }
                >
                  Crédito (12x sem juros)
                </Button>

                <Button
                  variant={paymentMethod === "DÉBITO" ? "contained" : "outlined"}
                  startIcon={<PaymentsIcon />}
                  onClick={() => setPaymentMethod("DÉBITO")}
                >
                  Débito
                </Button>

                <Button
                  variant={paymentMethod === "BOLETO" ? "contained" : "outlined"}
                  startIcon={<AccountBalanceIcon />}
                  onClick={() => setPaymentMethod("BOLETO")}
                >
                  Boleto
                </Button>

                <Button
                  variant={
                    paymentMethod === "DUAS FORMAS"
                      ? "contained"
                      : "outlined"
                  }
                  startIcon={<LocalAtmIcon />}
                  onClick={() => setPaymentMethod("DUAS FORMAS")}
                >
                  Duas Formas de Pagamento
                </Button>
              </Box>
            </Box>

            {/* 🧾 ITENS */}
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
              Total:{" "}
              <span style={{ color: "#FF8C00" }}>R$ {total}</span>
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
