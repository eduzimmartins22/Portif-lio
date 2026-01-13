import { Box, Button, Container, Typography } from "@mui/material"

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        background: "linear-gradient(135deg, #1E1E1E, #111111)",
        
      }}
    >
  
      <Container >
        <Typography  variant="h1" mb={3}>
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
