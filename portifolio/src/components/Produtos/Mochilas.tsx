import Grid from "@mui/material/Grid"
import { Box, Container, Typography, Button } from "@mui/material"

import ProductCard from "../../components/Produtos/ProductCart"
import CartTopBar from "../../components/CartTopBar"
import EstampaFemImg from "../../images/MochilaEstampaFem.png"
import InfantilImg from "../../images/MochilaInfantil.png"
import FemPromoImg from "../../images/MochilaFemPromo.png"
import PeluciaImg from "../../images/MochilaPelucia.png"

import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom"



const items = [
  {
    id: "moch-01",
    name: "Mochila de Pelúcia Infantil",
    model: "Infantil • Pelúcia macia • Leve e confortável",
    image: PeluciaImg,
    price: 70,
  },
  {
    id: "moch-02",
    name: "Mochila Estampada Feminina",
    model: "Feminina • Estampa moderna • Uso diário",
    image: EstampaFemImg,
    price: 120,
  },
  {
    id: "moch-03",
    name: "Mochila Feminina",
    model: "Modelo 99 • Espaçosa • Alças reforçadas",
    image: FemPromoImg,
    price: 99,
  },
  {
    id: "moch-04",
    name: "Mochila Infantil",
    model: "Infantil • Leve • Ideal para escola",
    image: InfantilImg,
    price: 50,
  },
]

const Mochilas = () => {

  const navigate = useNavigate()


  return (
    <Box py={16} bgcolor="#111">
      {/* 🔝 Carrinho fixo no topo */}
      <CartTopBar />



      <Container>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          sx={{
            mb: 3,
            color: "#FF8C00",
            fontWeight: 600,
            alignSelf: "flex-start",
            "&:hover": {
              backgroundColor: "rgba(255,140,0,0.1)",
            },
          }}
        >
          Voltar
        </Button>

        <Typography variant="h2" textAlign="center" mb={6} color="white">
          <span style={{ color: "#FF8C00" }}>Mochilas</span>
        </Typography>

        <Grid container spacing={5}>
          {items.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
              <ProductCard product={item} />
            </Grid>
          ))}
        </Grid>
      </Container>

    </Box>
  )
}

export default Mochilas
