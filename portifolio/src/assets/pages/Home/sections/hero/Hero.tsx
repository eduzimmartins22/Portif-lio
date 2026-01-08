import styled from "@emotion/styled"
import Avatar from "../../images/avatar.png"
import { Button, Container, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



const StyledHero = styled("div")({
  backgroundColor: "#111111",
  minHeight: "100vh",
  display: "flex",
  alignItems: "top",
  paddingTop: "50px",
})

const StyledImg = styled("img")({
  width: "220px",
  borderRadius: "50%",
})

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >
          {/* IMAGEM */}
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <StyledImg src={Avatar} alt="Avatar" />
          </Grid>

          {/* TEXTO + BOTÕES */}
          <Grid item xs={12} md={8}>
            <Typography variant="h3" color="error" gutterBottom>
              UGO CELULARES
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} xd={6} display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<ArrowDownwardIcon />}
                >
                  ITENS
                </Button>
              </Grid>

              <Grid item xs={12} xd={6} display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<WhatsAppIcon />}
                >
                  CONTATOS
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  )
}

export default Hero