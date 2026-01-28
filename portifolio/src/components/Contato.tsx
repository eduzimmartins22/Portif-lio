import { useState } from "react"
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
} from "@mui/material"

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
📧 Gmail: ${formData.email}
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
    <Box id="pagamento" py={16} sx={{ backgroundColor: "#F2F2F2" }}>
      <Container>
        <Typography variant="h2" textAlign="center" mb={4}>
          <span style={{ color: "#FF8C00" }}>Contato</span>
        </Typography>

        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {/* CONTATOS */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 4,
                display: "flex",
                flexDirection: "column",
                gap: 3,
                backgroundColor: "#FAFAFA",
                border: "1px solid #E0E0E0",
                borderRadius: 2,
              }}
            >
              <Box>
                <Typography sx={{ color: "#503d3d", mb: 0.5 }}>
                  Gmail
                </Typography>

                <Button
                  variant="contained"
                  color="error"
                  href="mailto:ugocelularescontato@gmail.com"
                >
                  FALAR NO GMAIL
                </Button>
              </Box>

              <Box>
                <Typography sx={{ color: "#503d3d", mb: 1 }}>
                  Whatsapp
                </Typography>

                <Button
                  variant="contained"
                  color="success"
                  href="https://wa.me/5527999346464"
                >
                  Falar no WhatsApp
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* FORMULÁRIO */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper
              sx={{
                p: 4,
                backgroundColor: "#FAFAFA",
                border: "1px solid #E0E0E0",
                borderRadius: 2,
              }}
            >
              <Typography
                textAlign="center"
                sx={{
                  backgroundColor: "#1A1818",
                  color: "#FFFFFF",
                  fontSize: 13,
                  padding: "6px 14px",
                  borderRadius: 2,
                  margin: "0 auto 16px",

                }}
              >
                TIRE SUAS DÚVIDAS AQUI !
              </Typography>

              <Box
  component="form"
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: { xs: 2.5, md: 2 },
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
                  label="Gmail"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  sx={inputStyle}
                />

                <TextField
                  label="Número"
                  name="telefone"
                  type="tel"
                  value={formData.telefone}
                  onChange={handleChange}
                  fullWidth
                  sx={inputStyle}
                />

                <TextField
                  label="Pergunta"
                  name="pergunta"
                  value={formData.pergunta}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  fullWidth
                  sx={inputStyle}

                />

                <Button variant="contained" onClick={handleSubmit}>
                  Enviar
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
    color: "#ffffff",
  },

  "& .MuiInputLabel-root.Mui-focused": {
    color: "#bb9a09",
  },

  "& .MuiOutlinedInput-root": {
    backgroundColor: "#1E1E1E",
    color: "#EAEAEA",
    // 👈 TEXTO DIGITADO

    "& input": {
      color: "#FFFFFF",
    },

    "& textarea": {
      color: "#FFFFFF",
    },

    "& fieldset": {
      borderColor: "#503d3d",
    },

    "&:hover fieldset": {
      borderColor: "#1A1818",
    },

    "&.Mui-focused fieldset": {
      borderColor: "#1A1818",
    },
  },
}

export default Pagamento
