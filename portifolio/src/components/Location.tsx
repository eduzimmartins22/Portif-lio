import { Box, Container, Typography, Button } from "@mui/material"
import Estabelecimento from "../images/Estabelecimento.jpg"
import styled from "@emotion/styled"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import DirectionsIcon from "@mui/icons-material/Directions"

const EstabelecimentoImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: 16,
})

const cardStyle = {
  backgroundColor: "#1F1F1F",
  borderRadius: 4,
  overflow: "hidden",
  transition: "all 0.3s ease",
  border: "1px solid rgba(255,255,255,0.05)",
  "&:hover": {
    transform: { md: "translateY(-6px)" },
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
    borderColor: "rgba(255,140,0,0.4)",
  },
}

const Location = () => {
  return (
    <Box
      id="localizacao"
      py={{ xs: 12, md: 18 }}
      sx={{
        background: "linear-gradient(180deg,#111 0%,#1A1A1A 100%)",
        color: "white",
      }}
    >
      <Container sx={{ textAlign: "center" }}>
        {/* HEADER */}
        <Typography
          variant="overline"
          sx={{ color: "#FF8C00", letterSpacing: 2, fontWeight: 700 }}
        >
          ONDE ESTAMOS
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "2.2rem", md: "3rem" },
            fontWeight: 800,
            mt: 2,
          }}
        >
          Nossa <span style={{ color: "#FF8C00" }}>Localização</span>
        </Typography>

        <Typography
          sx={{
            mt: 3,
            opacity: 0.8,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            flexWrap: "wrap",
          }}
        >
          <LocationOnIcon sx={{ color: "#FF8C00" }} />
          Terminal de Carapina – Serra / ES
        </Typography>

        {/* BOTÃO MAPS */}
        <Button
          href="https://www.google.com/maps/search/?api=1&query=Terminal+de+Carapina+Serra+ES"
          target="_blank"
          startIcon={<DirectionsIcon />}
          sx={{
            mt: 3,
            color: "#000",
            background: "linear-gradient(135deg,#ff8c00,#ffb347)",
            fontWeight: 700,
            px: 4,
            py: 1.3,
            borderRadius: 3,
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 10px 30px rgba(255,140,0,0.4)",
            },
          }}
        >
          Abrir no Google Maps
        </Button>

        {/* CONTEÚDO */}
        <Box
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 6,
            alignItems: "stretch",
          }}
        >
          {/* FOTO */}
          <Box
            sx={{
              ...cardStyle,
              flex: 1,
              minHeight: 320,
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
              ...cardStyle,
              flex: 1,
              position: "relative",
              minHeight: 320,
            }}
          >
            <iframe
              width="100%"
              height="100%"
              style={{
                border: 0,
                position: "absolute",
                inset: 0,
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