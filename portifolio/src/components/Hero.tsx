import { Box, Button, Container, Typography } from "@mui/material"
import LogoBg from "../images/Logo.png"

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",

        backgroundImage: `url(${LogoBg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: { xs: "contain", md: "cover" },

        px: { xs: 2, md: 0 },
      }}
    >
      {/* OVERLAY */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(17,17,17,0.75)",
        }}
      />

      <Container
        id="topo"
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: 2, md: 3 },
        }}
      >
        <Typography
          mb={3}
          color="white"
          fontWeight={800}
          sx={{
            fontSize: { xs: "2rem", md: "3.2rem" },
            lineHeight: 1.2,
          }}
        >
          Conectando você ao melhor da{" "}
          <span style={{ color: "#FF8C00" }}>tecnologia</span>
        </Typography>

        <Button
          variant="contained"
          size="large"
          href="#produtos"
          sx={{
            backgroundColor: "#FF8C00",
            color: "#000",
            fontWeight: 700,
            px: 4,
            "&:hover": {
              backgroundColor: "#ff9f2e",
            },
          }}
        >
          Ver produtos
        </Button>
      </Container>
    </Box>
  )
}

export default Hero
