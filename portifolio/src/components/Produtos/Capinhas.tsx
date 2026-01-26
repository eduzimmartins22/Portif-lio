import { Box, Container, Grid, Typography, Button } from "@mui/material"


import ProductCard from "../../components/Produtos/ProductCart"
import CartTopBar from "../../components/CartTopBar"
import CapinhasImg from "../../images/Capinhas.png"

import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom"



const items = [
  {
    id: "som-1",
    name: "Caixa de Som Bluetooth",
    model: "Pro X",
    image: CapinhasImg,
    price: 30,
    promoPrice: 12,
  },
  {
    id: "som-2",
    name: "Caixa de Som Bluetooth",
    model: "Bass Max",
    image: CapinhasImg,
    price: 30,
  },
]

const Capinhas = () => {
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
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <ProductCard product={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
      
    </Box>
  )
}

export default Capinhas
