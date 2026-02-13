import {
  Box,
  Container,
  Typography,
  IconButton,
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

const sectionCard = {
  backgroundColor: "#0B0B0D    ",
  p: 3,
  borderRadius: 3,
  mb: 4,
}

const Cart = () => {
  const { cartItems, total, removeFromCart } = useCart()
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [cpf, setCpf] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")

  const handleWhatsApp = async () => {
    if (!name.trim() || !cpf.trim()) {
      alert("Por favor, preencha Nome e CPF.")
      return
    }

    if (!paymentMethod) {
      alert("Selecione o modo de pagamento.")
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

👤 Cliente: ${name}
🪪 CPF: ${cpf}

📦 Produtos:
${message}

💳 Pagamento: ${paymentMethod}
💰 Total: R$ ${total}
    `.trim()

    const res = await fetch("/.netlify/functions/whatsapp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: fullMessage }),
    })

    const data = await res.json()

    if (!data.url || !data.url.startsWith("https://wa.me/")) {
      alert("Erro ao gerar link.")
      return
    }

    window.open(data.url, "_blank")
  }

  return (
    <Box py={12} minHeight="100vh" bgcolor="#0f0f0f">
      <Container maxWidth="sm">

        {/* VOLTAR */}
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{
            mb: 4,
            color: "#FF8C00",
            fontWeight: 600,
            "&:hover": { backgroundColor: "rgba(255,140,0,0.1)" },
          }}
        >
          Voltar
        </Button>

        <Typography variant="h4" textAlign="center" mb={6} fontWeight={700}>
          Seu Carrinho
        </Typography>

        {cartItems.length === 0 ? (
          <Typography textAlign="center" color="gray">
            Seu carrinho está vazio
          </Typography>
        ) : (
          <>
            {/* IDENTIFICAÇÃO */}
            <Box sx={sectionCard}>
              <Typography variant="subtitle1" fontWeight={700} mb={2}>
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

            {/* PAGAMENTO */}
            <Box sx={sectionCard}>
              <Typography variant="subtitle1" fontWeight={700} mb={2}>
                Forma de Pagamento
              </Typography>

              <Box display="grid" gridTemplateColumns="1fr 1fr" gap={1.5}>
                {[
                  { label: "PIX", icon: <QrCodeIcon /> },
                  { label: "Crédito (12x)", icon: <CreditCardIcon /> },
                  { label: "Débito", icon: <PaymentsIcon /> },
                  { label: "Boleto", icon: <AccountBalanceIcon /> },
                  { label: "Duas Formas", icon: <LocalAtmIcon /> },
                ].map((option) => (
                  <Button
                    key={option.label}
                    variant={
                      paymentMethod === option.label
                        ? "contained"
                        : "outlined"
                    }
                    startIcon={option.icon}
                    onClick={() => setPaymentMethod(option.label)}
                    sx={{
                      borderRadius: 2,
                      fontWeight: 600,
                      ...(paymentMethod === option.label && {
                        backgroundColor: "#FF8C00",
                        color: "#000",
                      }),
                    }}
                  >
                    {option.label}
                  </Button>
                ))}
              </Box>
            </Box>

            {/* ITENS */}
            <Box sx={sectionCard}>
              <Typography variant="subtitle1" fontWeight={700} mb={3}>
                Itens do Pedido
              </Typography>

              {cartItems.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    backgroundColor: "#161616",
                    p: 2,
                    borderRadius: 2,
                    mb: 2,
                  }}
                >
                  <Box display="flex" justifyContent="space-between">
                    <Box>
                      <Typography fontWeight={700}>
                        {item.name}
                      </Typography>

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
                </Box>
              ))}
            </Box>

            {/* TOTAL */}
            <Box
              sx={{
                backgroundColor: "#0B0B0D  ",
                p: 3,
                borderRadius: 3,
                textAlign: "right",
                mb: 4,
              }}
            >
              <Typography variant="subtitle2" color="gray">
                Total do Pedido
              </Typography>
              <Typography variant="h4" fontWeight={700} color="#FF8C00">
                R$ {total}
              </Typography>
            </Box>

            {/* FINALIZAR */}
            <Button
              fullWidth
              startIcon={<WhatsAppIcon />}
              onClick={handleWhatsApp}
              sx={{
                backgroundColor: "#25D366",
                color: "#000",
                fontWeight: 700,
                py: 1.8,
                fontSize: 16,
                borderRadius: 3,
                boxShadow: 4,
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