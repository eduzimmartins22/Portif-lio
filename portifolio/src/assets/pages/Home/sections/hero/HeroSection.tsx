import styled from "@emotion/styled"
import Avatar from "../../images/avatar.png"
import {
  Container,
  Typography,
  Box,
  Grid
} from "@mui/material"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import StyledButton from "../../../../../components/styledButton"

// ================== STYLES ==================

const StyledHero = styled("section")(({ theme }) => ({
  backgroundColor: "#111111",
  width: "100%",
  paddingTop: "100px",
  paddingBottom: "60px",

  [theme.breakpoints.up("md")]: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },
}))

const StyledImg = styled("img")(({ theme }) => ({
  width: "220px",
  height: "220px",
  borderRadius: "50%",
  border: `2px solid ${theme.palette.error.main}`,
  objectFit: "cover",
}))

// ================== COMPONENT ==================

const HeroSection = () => {
  const handleItens = () => {
    console.log("Ir para itens")
  }

  const handleContato = () => {
    window.open("https://wa.me/5500000000000", "_blank")
  }

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">

          {/* IMAGEM */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <StyledImg src={Avatar} alt="UGO Celulares" />
          </Grid>

          {/* TEXTO + BOTÕES */}
          <Grid item xs={12} md={8} textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="h3"
              color="error"
              fontWeight="bold"
              gutterBottom
            >
              UGO CELULARES
            </Typography>

            <Typography
              variant="h6"
              color="grey.400"
              mb={4}
            >
              Tecnologia, acessórios e soluções em um só lugar
            </Typography>

            <Box>
              <Grid container spacing={2} justifyContent={{ xs: "center", md: "flex-start" }}>
                <Grid item xs={12} sm={6} md={4}>
                  <StyledButton onClick={handleItens}>
                    <ArrowDownwardIcon />
                    ITENS
                  </StyledButton>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <StyledButton onClick={handleContato}>
                    <WhatsAppIcon />
                    CONTATO
                  </StyledButton>
                </Grid>
              </Grid>
            </Box>
          </Grid>

        </Grid>
      </Container>
    </StyledHero>
  )
}

export default HeroSection
