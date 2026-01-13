import { Box, Container, Typography } from "@mui/material"

const Location = () => {
  return (
    <Box id="localizacao" py={16} bgcolor="background.paper">
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="h2" mb={2}>
          Nossa <span style={{ color: "#FF8C00" }}>Localização</span>
        </Typography>

        <Typography mb={3}>
          📍 Terminal de Carapina – Serra / ES
        </Typography>

        <iframe
          width="80%"
          height="300"
          style={{ borderRadius: 16, border: 0 }}
          loading="lazy"
          src="https://www.google.com/maps?q=Terminal%20de%20Carapina%20Serra%20ES&output=embed"
        />
      </Container>
    </Box>
  )
}

export default Location
