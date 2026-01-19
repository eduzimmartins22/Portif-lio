import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material"

import Celulares from "../images/Celulares.png"
import Capinhas from "../images/Capinhas.png"
import Peliculas from "../images/Peliculas.png"
import Mochilas from "../images/Mochilas.png"
import Fones from "../images/Fones.png"
import CaixasSom from "../images/CaixasSom.png"
import Bicicletas from "../images/Bicicletas.png"

const items = [
  { name: "Celulares", image: Celulares, link: "/produtos/celulares" },
  { name: "Capinhas", image: Capinhas, link: "/produtos/capinhas" },
  { name: "Películas", image: Peliculas, link: "/produtos/peliculas" },
  { name: "Mochilas", image: Mochilas, link: "/produtos/mochilas" },
  { name: "Fones", image: Fones, link: "/produtos/fones" },
  { name: "Caixas de Som", image: CaixasSom, link: "/produtos/caixas-som" },
  { name: "Bicicletas Motorizadas", image: Bicicletas, link: "/bicicletas#Bicicletas" },
]

const Products = () => {
  return (
    <Box id="produtos" py={19} backgroundColor="#F2F2F2">
      <Container>
        <Typography variant="h2" textAlign="center" mb={6}>
          <span style={{ color: "#131212" }}>Nossos</span> <span style={{ color: "#FF8C00" }}>Produtos</span>
        </Typography>

        <Grid container spacing={5}>
          {items.map(item => (
            <Grid item xs={12} sm={6} md={4} key={item.name}>
              <Paper
                sx={{
                  p: 3,
                  height: 320,
                  borderRadius: 4,
                  background: "rgba(87, 84, 84, 0.03)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 8,
                    
                  },
                }}
              >
                {/* Imagem */}
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: 160,
                    objectFit: "contain",
                  }}
                />

                {/* Nome */}
                <Typography variant="h6" mt={2} textAlign="center" color="#131212" fontFamily="Arial Rounded MT Bold">
                  {item.name}
                </Typography>

                {/* Botão */}
                <Button
                  variant="contained"
                  href={item.link || item.href}
                  sx={{
                    mt: 2,
                    backgroundColor: "#FF8C00",
                    "&:hover": {
                      backgroundColor: "#e67e00",
                    },
                  }}
                >
                  Ver mais
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Products
