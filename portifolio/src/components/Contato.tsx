import { useState } from "react"
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  TextField,
} from "@mui/material"
import Grid from "@mui/material/Grid"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import EmailIcon from "@mui/icons-material/Email"
import SendIcon from "@mui/icons-material/Send"

const Pagamento = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    pergunta: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = () => {
    const mensagem = `
Olá, gostaria de entrar em contato.

📌 Nome: ${formData.nome}
📧 Email: ${formData.email}
📱 Telefone: ${formData.telefone}

❓ Pergunta:
${formData.pergunta}
    `.trim()

    const telefoneDestino = "5527999346464"
    const url = `https://wa.me/${telefoneDestino}?text=${encodeURIComponent(
      mensagem
    )}`

    window.open(url, "_blank")
  }

  return (
    <Box
      id="contato"
      py={{ xs: 12, md: 18 }}
      sx={{
        background: "linear-gradient(180deg,#0f0f0f 0%,#1A1A1A 100%)",
        color: "white",
      }}
    >
      <Container>
        {/* HEADER */}
        <Box textAlign="center" mb={10}>
          <Typography
            variant="overline"
            sx={{ color: "#FF8C00", letterSpacing: 2, fontWeight: 700 }}
          >
            FALE CONOSCO
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "2.2rem", md: "3rem" },
              fontWeight: 800,
              mt: 2,
            }}
          >
            Entre em <span style={{ color: "#FF8C00" }}>Contato</span>
          </Typography>

          <Typography sx={{ mt: 2, opacity: 0.7 }}>
            Tire suas dúvidas ou solicite um orçamento rapidamente.
          </Typography>
        </Box>

        <Grid container spacing={6}  alignItems="center" justifyContent="center" >
          {/* CONTATOS RÁPIDOS */}
          <Grid  size={{ xs: 12, md: 5 }}>
            <Paper
              sx={{
                p: 5,
                backgroundColor: "#1F1F1F",
                borderRadius: 4,
                border: "1px solid rgba(255,255,255,0.05)",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Typography variant="h6" fontWeight={700}>
                Atendimento direto
              </Typography>

              <Button
                startIcon={<WhatsAppIcon />}
                href="https://wa.me/5527999346464"
                sx={{
                  background:
                    "linear-gradient(135deg,#ff8c00,#ffb347)",
                  color: "#000",
                  fontWeight: 700,
                  py: 1.5,
                  borderRadius: 3,
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              >
                Falar no WhatsApp
              </Button>

              <Button
                startIcon={<EmailIcon />}
                href="mailto:ugocelularescontato@gmail.com"
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,255,255,0.3)",
                  color: "white",
                  fontWeight: 600,
                  py: 1.5,
                  borderRadius: 3,
                  "&:hover": {
                    borderColor: "#FF8C00",
                    color: "#FF8C00",
                  },
                }}
              >
                Enviar Email
              </Button>
            </Paper>
          </Grid>

          {/* FORMULÁRIO */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              sx={{
                p: 5,
                backgroundColor: "#1F1F1F",
                borderRadius: 4,
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <Typography
                variant="h6"
                fontWeight={700}
                mb={4}
              >
                Ou envie sua mensagem
              </Typography>

              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                }}
              >
                <TextField
                  label="Nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  fullWidth
                  sx={inputStyle}
                />

                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  sx={inputStyle}
                />

                <TextField
                  label="Telefone"
                  name="telefone"
                  type="tel"
                  value={formData.telefone}
                  onChange={handleChange}
                  fullWidth
                  sx={inputStyle}
                />

                <TextField
                  label="Mensagem"
                  name="pergunta"
                  value={formData.pergunta}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  fullWidth
                  sx={inputStyle}
                />

                <Button
                  variant="contained"
                  startIcon={<SendIcon />}
                  onClick={handleSubmit}
                  sx={{
                    mt: 2,
                    background:
                      "linear-gradient(135deg,#ff8c00,#ffb347)",
                    color: "#000",
                    fontWeight: 700,
                    py: 1.5,
                    borderRadius: 3,
                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  Enviar Mensagem
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

const inputStyle = {
  "& .MuiInputLabel-root": {
    color: "#aaa",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#FF8C00",
  },
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#141414",
    color: "#fff",
    borderRadius: 3,
    "& fieldset": {
      borderColor: "rgba(255,255,255,0.1)",
    },
    "&:hover fieldset": {
      borderColor: "rgba(255,255,255,0.3)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FF8C00",
    },
  },
}

export default Pagamento