import Grid from "@mui/material/Grid"
import { Box, Container, Typography, Button } from "@mui/material"

import ProductCard from "../../components/Produtos/ProductCart"
import CartTopBar from "../../components/CartTopBar"
import BicicletaImg from "../../images/Bicicletas.png"
import ScooterImg from "../../images/SCOOTERMODELOST746.png"
import CadeadoImg from "../../images/CADEADODEBICICLETA.png"
import SuporteImg from "../../images/BICICLETASLE050ITBLUE.png"


import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom"



const items = [

  { id: "5782", name: "Bicicleta Elétrica Scooter", model: "V10 MAX MARRON", image: BicicletaImg, price: 6600 },
  { id: "5949", name: "Bicicleta Elétrica", model: "SCOOTER ST-746", image: ScooterImg, price: 4500 },
  { id: "5783", name: "Suporte para Bicicleta", model: "ST-746", image: SuporteImg, price: 150 },
  { id: "5950", name: "Cadeado para Bicicleta", model: "V10 MAX MARRON", image: CadeadoImg, price: 50 },

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
