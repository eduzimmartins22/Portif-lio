import { Box, Button, Container, Typography } from "@mui/material"

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "900px",
        display: "center",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(135deg, #1E1E1E, #111111)",
        
      }}
    >

      <Container id="topo">
        <Typography  variant="h2" mb={3}>
          Conectando você ao melhor da tecnologia
        </Typography>

        <Button 
          variant="contained"
          size="large"
          href="#produtos"
          
        >
          Ver produtos
        </Button>
      </Container>
    </Box>
  )
}

export default Hero
