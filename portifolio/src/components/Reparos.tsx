import {
  Box,
  Container,
  Typography,
  Button,
  Stack
} from "@mui/material"
import styled from "@emotion/styled"
import VerifiedIcon from "@mui/icons-material/Verified"
import SpeedIcon from "@mui/icons-material/Speed"
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"
import BuildIcon from "@mui/icons-material/Build"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"

const Emblema = styled("div")({
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "10px 22px",
  borderRadius: 40,
  background: "linear-gradient(135deg, #ff8c00, #ffb347)",
  color: "#000",
  fontWeight: 700,
  letterSpacing: 1,
  marginBottom: 32,
})

const cardStyle = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(14px)",
  border: "1px solid rgba(255,140,0,0.15)",
  padding: 5,
  borderRadius: 4,
  transition: "all 0.35s ease",
  "&:hover": {
    transform: { md: "translateY(-8px)" },
    border: "1px solid rgba(255,140,0,0.6)",
    boxShadow: "0 25px 50px rgba(255,140,0,0.15)",
  },
  "& svg": {
    transition: "0.3s",
  },
  "&:hover svg": {
    transform: "scale(1.15)",
  },
}

const Reparo = () => {
  return (
    <Box
      id="Reparo"
      py={{ xs: 14, md: 22 }}
      sx={{
        background: "linear-gradient(180deg, #0f0f0f 0%, #1A1A1A 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow Background */}
      <Box
        sx={{
          position: "absolute",
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(255,140,0,0.25) 0%, transparent 70%)",
          top: -150,
          left: "50%",
          transform: "translateX(-50%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <Container sx={{ position: "relative", zIndex: 1 }}>
        {/* HEADER */}
        <Box textAlign="center" mb={10}>
          <Emblema>
            <VerifiedIcon />
            UGO CELULARES
          </Emblema>

          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.2rem", md: "3.5rem" },
              mb: 2,
            }}
          >
            Reparo de{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#ff8c00,#ffb347)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Celulares
            </span>
          </Typography>

          <Typography
            sx={{
              fontSize: 18,
              opacity: 0.8,
            }}
          >
            Atendimento presencial no{" "}
            <strong>Terminal de Carapina – Serra/ES</strong>
          </Typography>
        </Box>

        {/* CARDS */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 4, md: 6 },
          }}
        >
          {/* CARD 1 */}
          <Box sx={{ ...cardStyle, flex: 1 }}>
            <Typography
              variant="h5"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 3,
                fontWeight: 700,
              }}
            >
              <SpeedIcon sx={{ color: "#FF8C00" }} />
              Serviço Rápido
            </Typography>

            <Stack spacing={1.5} sx={{ opacity: 0.9 }}>
              <Typography>Troca de telas e baterias</Typography>
              <Typography>Conectores e reparos internos</Typography>
              <Typography>Serviços feitos no mesmo dia</Typography>
              <Typography>Preço justo e transparente</Typography>
            </Stack>

            <Typography
              sx={{
                mt: 3,
                fontWeight: 700,
                color: "#FF8C00",
              }}
            >
              Agilidade sem perder qualidade.
            </Typography>
          </Box>

          {/* CARD 2 */}
          <Box sx={{ ...cardStyle, flex: 1 }}>
            <Typography
              variant="h5"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 3,
                fontWeight: 700,
              }}
            >
              <BuildIcon sx={{ color: "#FF8C00" }} />
              Produtos Mais Procurados
            </Typography>

            <Stack spacing={1.5} sx={{ opacity: 0.9 }}>
              <Typography sx={{ display: "flex", gap: 1 }}>
                <PhoneIphoneIcon sx={{ fontSize: 18 }} />
                Telas (Incel, OLED, AMOLED)
              </Typography>
              <Typography>🔋 Baterias originais e compatíveis</Typography>
              <Typography>🔌 Conectores de carga e flex power</Typography>
              <Typography>📷 Lentes, câmeras e alto-falantes</Typography>
            </Stack>

            <Typography sx={{ mt: 3, fontWeight: 700 }}>
              Estoque focado no que realmente vende.
            </Typography>
          </Box>
        </Box>

        {/* CTA */}
        {/* CTA */}
<Box textAlign="center" mt={10}>
  <Button
    startIcon={<WhatsAppIcon />}
    variant="contained"
    onClick={() => {
      const mensagem = `
Olá, vim pelo site e gostaria de solicitar um orçamento para reparo de meu Aparelho.
      `.trim()

      const telefone = "5527999346464"
      const url = `https://wa.me/${telefone}?text=${encodeURIComponent(
        mensagem
      )}`

      window.open(url, "_blank")
    }}
    sx={{
      background: "linear-gradient(135deg,#ff8c00,#ffb347)",
      color: "#000",
      fontWeight: 700,
      px: 5,
      py: 1.8,
      borderRadius: 3,
      fontSize: 16,
      transition: "0.3s",
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0 10px 30px rgba(255,140,0,0.4)",
      },
    }}
  >
    Solicitar Orçamento no WhatsApp
  </Button>
</Box>
      </Container>
    </Box>
  )
}

export default Reparo