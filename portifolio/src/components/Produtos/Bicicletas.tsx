import Grid from "@mui/material/Grid"
import { Box, Container, Typography, Button } from "@mui/material"

import ProductCard from "../../components/Produtos/ProductCart"
import CartTopBar from "../../components/CartTopBar"
import BicicletaImg from "../../images/Bicicletas.png"

import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom"



const items = [
  {
    id: "bike-1",
    name: "Bicicleta Motorizada",
    model: "49cc",
    image: BicicletaImg,
    price: 2999,
    
  },
  {
    id: "bike-2",
    name: "Bicicleta Motorizada",
    model: "80cc",
    image: BicicletaImg,
    price: 3499,
    promoPrice: 50,
  },
  {
    id: "bike-3",
    name: "Bicicleta Motorizada",
    model: "80cc Pro",
    image: BicicletaImg,
    price: 3499,
    promoPrice: 1599,
  },
  {
    id: "bike-1",
    name: "Bicicleta Motorizada",
    model: "49cc",
    image: BicicletaImg,
    price: 2999,
    
  },
  {
    id: "bike-2",
    name: "Bicicleta Motorizada",
    model: "80cc",
    image: BicicletaImg,
    price: 3499,
    promoPrice: 523,
  },
  { id: "5782", name: "Bicicleta Elétrica Scooter", model: "ST-746", image: BicicletaImg, price: 0 },
  { id: "5949", name: "Bicicleta Elétrica", model: "V10 MAX MARRON", image: BicicletaImg, price: 6600 },
  { id: "5949", name: "Bicicleta Elétrica V10", model: "Max Marron", image: BicicletaImg, price: 6600 },
  { id: "3961", name: "Aplicação de Película", model: "Geral", image: BicicletaImg, price: 10 },
  { id: "5862", name: "Capa Celular Space", model: "Space", image: BicicletaImg, price: 25 },
  { id: "4604", name: "Capas Promoção", model: "Geral", image: BicicletaImg, price: 15 },
  { id: "5733", name: "Carregador Inova", model: "TC 1M", image: BicicletaImg, price: 30 }
];

const Bicicletas = () => {

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
          Bicicletas <span style={{ color: "#FF8C00" }}>Motorizadas</span>
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

export default Bicicletas
