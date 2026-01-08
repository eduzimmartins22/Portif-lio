import { styled } from "@mui/material/styles"
import Avatar from "../../images/avatar.png"
import { Button, Container, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"

const StyledHero = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  alignItems: "flex-start",

  paddingTop: "32px",
  paddingBottom: "24px",

  background: `
    linear-gradient(135deg,
      #1E1E1E,
      #111111
    )
  `,

  [theme.breakpoints.down("sm")]: {
    paddingTop: "16px",
    paddingBottom: "16px",
  },

  [theme.breakpoints.up("md")]: {
    paddingTop: "64px",
  },
}))


/* AVATAR */
const StyledImg = styled("img")({
  width: "220px",
  borderRadius: "50%",
})

/* BRAND BADGE */
const BrandBadge = styled("div")({
  display: "inline-block",
  padding: "12px 28px",
  borderRadius: "12px",

  background: `
    linear-gradient(135deg,
      #FF8C00,
      #E10600
    )
  `,

  boxShadow: "0 0 25px rgba(255, 140, 0, 0.35)",
})

const Hero = () => {
  return (
    <StyledHero>
      <Container>
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          
          {/* IMAGEM */}
          <Grid item xs={12} md={4} display="flex" justifyContent="center">
            <StyledImg src={Avatar} alt="Avatar" />
          </Grid>

          {/* TEXTO + BOTÕES */}
          <Grid item xs={12} md={8} textAlign="center" paddingLeft={10} paddingRight={10}>
            
            <BrandBadge>
              <Typography
                variant="h3"
                fontWeight={800}
                color="#111111"
              >
                UGO CELULARES
              </Typography>
            </BrandBadge>

            <Grid container spacing={2} mt={4}>
              <Grid item xs={12} md={6} display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<ArrowDownwardIcon />}
                >
                  ITENS
                </Button>
              </Grid>

              <Grid item xs={12} md={6} display="flex" justifyContent="center">
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
