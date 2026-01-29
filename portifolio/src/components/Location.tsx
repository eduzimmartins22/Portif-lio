import { Box, Container, Typography } from "@mui/material"
import Estabelecimento from "../images/Estabelecimento.jpg"
import styled from "@emotion/styled"

const EstabelecimentoImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: 12,
})

const hoverCard = {
  backgroundColor: "#2e2d2dff",
  padding: 3,
  borderRadius: 3,
  boxShadow: 3,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: { md: "translateY(-6px) scale(1.02)" },
    boxShadow: 8,
  },
}

const Location = () => {
  return (
    <Box id="localizacao" py={{ xs: 10, md: 11 }} bgcolor="background.paper">
      <Container sx={{ textAlign: "center", px: { xs: 2, md: 3 } }}>
        <Typography variant="h2" mb={2}>
          Nossa <span style={{ color: "#FF8C00" }}>Localização</span>
        </Typography>

        <Typography mb={6} fontFamily="Arial Rounded MT Bold">
          📍 TERMINAL DE CARAPINA - SERRA / ES
        </Typography>

        {/* IMAGEM + MAPA */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "stretch",
            justifyContent: "center",
            gap: { xs: 3, md: 8 },
          }}
        >
          {/* IMAGEM */}
          <Box
            sx={{
              ...hoverCard,
              flex: 1,
              maxWidth: { xs: "100%", md: 500 },
              mx: "auto",
            }}
          >
            <EstabelecimentoImg
              src={Estabelecimento}
              alt="Estabelecimento UGO Celulares"
            />
          </Box>

{/* MAPA */}
<Box
  sx={{
    ...hoverCard,
    flex: 1,
    width: "100%",
    padding: 0,                 // remove padding só do mapa
    overflow: "hidden",
    position: "relative",
    minHeight: { xs: 260, md: 300 }, // 🔥 garante altura no mobile
  }}
>
  <iframe
    width="100%"
    height="100%"
    style={{
      border: 0,
      position: "absolute",
      inset: 0,                 // top:0, right:0, bottom:0, left:0
    }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps?q=Terminal%20de%20Carapina%20Serra%20ES&output=embed"
  />
</Box>

        </Box>
      </Container>
    </Box>
  )
}

export default Location
