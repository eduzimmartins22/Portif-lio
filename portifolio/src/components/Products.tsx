import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material"
import { Link } from "react-router-dom"

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
  { name: "Bicicletas Motorizadas", image: Bicicletas, link: "/bicicletas#bicicletas" },
]

const Products = () => {
  return (
    <Box id="produtos" py={19} bgcolor="#F2F2F2">
      <Container>
        <Typography variant="h2" textAlign="center" mb={6}>
          <span style={{ color: "#131212" }}>Nossos</span>{" "}
          <span style={{ color: "#FF8C00" }}>Produtos</span>
        </Typography>

        <Grid container spacing={5}>
          {items.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.name}>
              <Paper
                component={Link}
                to={item.link}
                sx={{
                  p: 3,
                  height: 320,
                  borderRadius: 4,
                  textDecoration: "none",
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
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{
                    maxWidth: "100%",
                    maxHeight: 180,
                    objectFit: "contain",
                  }}
                />

                <Typography variant="h6" textAlign="center">
                  {item.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Products
