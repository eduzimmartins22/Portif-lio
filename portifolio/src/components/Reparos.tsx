import { Box, Container, Typography } from "@mui/material"
import styled from "@emotion/styled"
import VerifiedIcon from "@mui/icons-material/Verified"
import SpeedIcon from "@mui/icons-material/Speed"
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone"
import BuildIcon from "@mui/icons-material/Build"

const Emblema = styled("div")({
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "10px 18px",
  borderRadius: 30,
  background: "linear-gradient(135deg, #ff8c00, #ffb347)",
  color: "#000000",
  fontWeight: "bold",
  marginBottom: 24,
})

const hoverCard = {
  backgroundColor: "rgb(7, 5, 5)",
  padding: 4,
  borderRadius: 3,
  boxShadow: 4,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-6px) scale(1.02)",
    boxShadow: 10,
  },
}

const Reparo = () => {
  return (
    <Box id="Reparo" py={22} bgcolor="#1A1A1A" >
      <Container>
        <Box textAlign="center" mb={8}>
          <Emblema>
            <VerifiedIcon />
            UGO CELULARES
          </Emblema>

          <Typography variant="h2" mb={2}>
            Reparo de <span style={{ color: "#FF8C00" }}>Celulares</span>
          </Typography>

          <Typography fontSize={18}>
            📍 Atendimento presencial no <strong>Terminal de Carapina – Serra/ES</strong>
          </Typography>
        </Box>

        {/* BOXES */}
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            gap: 6,
            alignItems: "stretch",
          }}
        >
          {/* BOX SERVIÇO */}
          <Box sx={{ ...hoverCard, flex: 1 }}>
            <Typography
              variant="h4"
              mb={2}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <SpeedIcon sx={{ color: "#FF8C00" }} />
              Serviço Rápido e Lucrativo
            </Typography>

            <Typography mb={2}>
              Especialistas em <strong>reparo expresso</strong>, com tempo de execução
              recorde no mercado e valores que cabem no bolso.
            </Typography>

            <Typography mb={2}>
              🔧 Troca de telas, baterias, conectores e flex<br />
              ⏱️ Muitos serviços feitos no <strong>mesmo dia</strong><br />
              🍌 Preço justo, competitivo e sem enrolação
            </Typography>

            <Typography fontWeight="bold" color="#FF8C00">
              O melhor custo-benefício para você 
            </Typography>
          </Box>

          {/* BOX PRODUTOS */}
          <Box sx={{ ...hoverCard, flex: 1 }}>
            <Typography
              variant="h4"
              mb={2}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <BuildIcon sx={{ color: "#FF8C00" }} />
              Produtos Mais Procurados
            </Typography>

            <Typography mb={2}>
              Trabalhamos diariamente com os componentes mais requisitados
              para garantir rapidez e qualidade no reparo.
            </Typography>

            <Typography mb={1}>
              <PhoneIphoneIcon sx={{ fontSize: 16 }} /> Telas (Incel, OLED, AMOLED)
            </Typography>
            <Typography mb={1}>
              🔋 Baterias originais e compatíveis
            </Typography>
            <Typography mb={1}>
              🔌 Conectores de carga e flex power
            </Typography>
            <Typography mb={1}>
              📷 Lentes, câmeras e alto-falantes
            </Typography>

            <Typography mt={2} fontWeight="bold">
              Estoque focado no que realmente vende.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Reparo
