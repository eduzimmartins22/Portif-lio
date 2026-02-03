import {
  Box,
  Container,
  Paper,
  Typography,
} from "@mui/material"
import Grid from "@mui/material/Grid"
import { Link } from "react-router-dom"

import Celulares from "../images/Celulares.png"
import Capinhas from "../images/Capinhas.png"
import Peliculas from "../images/Peliculas.png"
import Mochilas from "../images/Mochilas.png"
import Fones from "../images/Fones.png"
import CaixasSom from "../images/CaixasSom.png"
import Bicicletas from "../images/Bicicletas.png"

const items = [
  { name: "Celulares", image: Celulares, link: "/celulares" },
  { name: "Capinhas", image: Capinhas, link: "/capinhas" },
  { name: "Películas", image: Peliculas, link: "/peliculas" },
  { name: "Mochilas", image: Mochilas, link: "/mochilas" },
  { name: "Fones", image: Fones, link: "/fones" },
  { name: "Caixas de Som", image: CaixasSom, link: "/caixas-som" },
  { name: "Bicicletas Motorizadas", image: Bicicletas, link: "/bicicletas" },
]


const Products = () => {
  return (
    <Box id="produtos" py={19} bgcolor="#F2F2F2">
      
      <Container>
         <span style={{ color: "#131212" }}>(VALIDAÇÃO EM ANDAMENTO...) (VALIDAÇÃO EM ANDAMENTO...) (VALIDAÇÃO EM ANDAMENTO...) (VALIDAÇÃO EM ANDAMENTO...) </span>{" "}
        <Typography variant="h2" textAlign="center" mb={6}>
          <span style={{ color: "#131212" }}>Nossos</span>{" "}
          <span style={{ color: "#FF8C00" }}>Produtos</span>
         
        </Typography>

        <Grid container spacing={5}>
          {items.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.name}>
              <Paper
                component={Link}
                to={item.link}
                sx={{
                  p: 3,
                  height: { xs: "auto", md: 320 },
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
