import { Box, Button, Container, Typography, Stack } from "@mui/material"
import LogoBg from "../images/LogoH.png"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",

        background: `
          linear-gradient(rgba(10,10,10,0.85), rgba(15,15,15,0.9)),
          url(${LogoBg})
        `,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: { xs: "contain", md: "cover" },
      }}
    >
      {/* Glow background effect */}
      <Box
        sx={{
          position: "absolute",
          width: 500,
          height: 500,
          background:
            "radial-gradient(circle, rgba(255,140,0,0.25) 0%, transparent 70%)",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          filter: "blur(90px)",
          zIndex: 0,
        }}
      />

      <Container
        id="topo"
        sx={{
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Headline */}
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: { xs: "2.2rem", md: "3.8rem" },
            lineHeight: 1.15,
            mb: 3,
            letterSpacing: "-1px",
          }}
        >
          Conectando você a{" "}
          <span
            style={{
              background: "linear-gradient(135deg,#ff8c00,#ffb347)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            tecnologia
          </span>
        </Typography>

        {/* Subheadline */}
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            opacity: 0.8,
            maxWidth: 600,
            mx: "auto",
            mb: 5,
          }}
        >
          Assistência técnica especializada, produtos de qualidade e atendimento
          rápido no Terminal de Carapina – Serra/ES.
        </Typography>

        {/* CTA Buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={3}
          justifyContent="center"
        >
          

          <Button
            variant="outlined"
            endIcon={<ArrowDownwardIcon />}
            href="#produtos"
            sx={{
              borderColor: "rgba(255,255,255,0.3)",
              color: "white",
              fontWeight: 600,
              px: 4,
              py: 1.6,
              borderRadius: 3,
              backdropFilter: "blur(10px)",
              "&:hover": {
                borderColor: "#FF8C00",
                color: "#FF8C00",
              },
            }}
          >
            Ver Produtos
          </Button>
        </Stack>
      </Container>
      </Box>

  )
}

export default Hero