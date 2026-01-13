import { Box, Container, Grid, Paper, Typography } from "@mui/material"

const items = [
  "Celulares",
  "Capinhas",
  "Películas",
  "Mochilas",
  "Fones",
  "LEDs",
  "Caixas de Som",
  "Bicicletas Motorizadas",
]

const Products = () => {
  return (
    <Box id="produtos" py={26}>
      <Container>
        <Typography variant="h2" textAlign="center" mb={4}>
          Nossos <span style={{ color: "#FF8C00" }}>Produtos</span>
        </Typography>

        <Grid container spacing={5}>
          {items.map(item => (
            <Grid item xs={6} md={4} key={item}>
              <Paper sx={{ p: 6, textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
                {item}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Products
