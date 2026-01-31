import Grid from "@mui/material/Grid"
import { Box, Container, Typography, Button } from "@mui/material"

import ProductCard from "../../components/Produtos/ProductCart"
import CartTopBar from "../../components/CartTopBar"
import CaixaSomImg from "../../images/CaixasSom.png"

import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom"



const items = [
  { id: "3439", name: "Mini Subwoofer 2.1 USB", model: "0590 Bright", image: CaixaSomImg, price: 160 },
  { id: "3440", name: "Mini Caixa Som PC", model: "359 Bright", image: CaixaSomImg, price: 40 },
  { id: "5327", name: "Caixa de Som", model: "BK-1619", image: CaixaSomImg, price: 50, promoPrice: 25 },
  { id: "3844", name: "Boombox Extra Grande", model: "Extra Grande", image: CaixaSomImg, price: 390 },
  { id: "3442", name: "Boombox Grande", model: "Grande", image: CaixaSomImg, price: 350 },
  { id: "3438", name: "Caixa Amplificada", model: "C11 Color", image: CaixaSomImg, price: 299 },
  { id: "3437", name: "Caixa Amplificada", model: "C13 Color", image: CaixaSomImg, price: 370, promoPrice: 185 },
  { id: "3007", name: "Caixa Amplificada Bright", model: "100W", image: CaixaSomImg, price: 398 },
  { id: "3006", name: "Caixa Amplificada Bright", model: "120W", image: CaixaSomImg, price: 540 },
  { id: "4123", name: "Caixa de Som Sombox", model: "Pequena", image: CaixaSomImg, price: 230 },
  { id: "5654", name: "Caixa de Som", model: "Kbroad KTS-1721", image: CaixaSomImg, price: 50 },
  { id: "5146", name: "Caixa de Som", model: "3256", image: CaixaSomImg, price: 350 },
  { id: "5735", name: "Caixa de Som 6.5", model: "KTS-1112", image: CaixaSomImg, price: 300 },
  { id: "4067", name: "Caixa de Som 900", model: "Multilaser SP", image: CaixaSomImg, price: 120 },
  { id: "5836", name: "Caixa de Som", model: "Altomex AL-1098", image: CaixaSomImg, price: 50 },
  { id: "5496", name: "Caixa de Som Karaoke", model: "BK-1090", image: CaixaSomImg, price: 200 },
  { id: "5651", name: "Caixa de Som", model: "BK-3618", image: CaixaSomImg, price: 50 },
  { id: "5132", name: "Caixa de Som Bluetooth", model: "CS-M31BT", image: CaixaSomImg, price: 180 },
  { id: "5550", name: "Caixa de Som", model: "BT-2413", image: CaixaSomImg, price: 200, promoPrice: 110 },
  { id: "5498", name: "Caixa de Som", model: "BT-2414", image: CaixaSomImg, price: 200, promoPrice: 110 },
  { id: "5123", name: "Caixa de Som", model: "C03", image: CaixaSomImg, price: 200 },
  { id: "3612", name: "Caixa de Som", model: "Charge Mini 3+", image: CaixaSomImg, price: 59.9 },
  { id: "4863", name: "Caixa de Som", model: "D-3204", image: CaixaSomImg, price: 300 },
  { id: "4858", name: "Caixa de Som", model: "D-BH2024", image: CaixaSomImg, price: 230, promoPrice: 115 },
  { id: "4864", name: "Caixa de Som", model: "D-BH6114", image: CaixaSomImg, price: 350, promoPrice: 175 },
  { id: "3849", name: "Caixa de Som", model: "Delta Vogue Max", image: CaixaSomImg, price: 73 },
  { id: "5639", name: "Caixa de Som", model: "GTS-1360", image: CaixaSomImg, price: 45 },
  { id: "5737", name: "Caixa de Som Gold 30W", model: "SM-07", image: CaixaSomImg, price: 250 },
  { id: "4416", name: "Caixa de Som Gold", model: "WS-887", image: CaixaSomImg, price: 30, promoPrice: 16.5 },
  { id: "4862", name: "Caixa de Som", model: "GTS-1567", image: CaixaSomImg, price: 499, promoPrice: 249.5 },
  { id: "5738", name: "Caixa de Som Hmaston 60W", model: "TN39", image: CaixaSomImg, price: 280 },
  { id: "5956", name: "Caixa de Som Mini Speaker", model: "M10", image: CaixaSomImg, price: 40 },
  { id: "4857", name: "Caixa de Som Inova", model: "RAD-8647", image: CaixaSomImg, price: 250, promoPrice: 125 },
  { id: "4120", name: "Caixa de Som JBL Original", model: "Charge 5", image: CaixaSomImg, price: 1100 },
  { id: "4119", name: "Caixa de Som JBL Original", model: "Extreme 3", image: CaixaSomImg, price: 1950 },
  { id: "5497", name: "Caixa de Som Kapbom", model: "KA-8301", image: CaixaSomImg, price: 250, promoPrice: 125 },
  { id: "5495", name: "Caixa de Som Hmaston", model: "KTS-1296", image: CaixaSomImg, price: 200, promoPrice: 100 },
  { id: "5147", name: "Caixa de Som", model: "KTS-1330", image: CaixaSomImg, price: 350, promoPrice: 150 },
  { id: "4867", name: "Caixa de Som", model: "KV-12024", image: CaixaSomImg, price: 240, promoPrice: 120 },
  { id: "4870", name: "Caixa de Som", model: "KV-330", image: CaixaSomImg, price: 250, promoPrice: 125 },
  { id: "5565", name: "Caixa de Som", model: "KV-88631", image: CaixaSomImg, price: 50, promoPrice: 25 },
  { id: "5564", name: "Caixa de Som", model: "LES-887", image: CaixaSomImg, price: 29.99, promoPrice: 15 },
  { id: "5526", name: "Caixa de Som Luz e Karaoke", model: "RAD-12578", image: CaixaSomImg, price: 100, promoPrice: 50 },
  { id: "4704", name: "Caixa de Som Mini Hmaston", model: "M3", image: CaixaSomImg, price: 60, promoPrice: 30 },
  { id: "4064", name: "Caixa de Som Pulse", model: "SP359", image: CaixaSomImg, price: 1050 },
  { id: "4861", name: "Caixa de Som Inova", model: "RAD-8626", image: CaixaSomImg, price: 222, promoPrice: 111 },
  { id: "4904", name: "Caixa de Som Inova", model: "RAD-9026", image: CaixaSomImg, price: 150, promoPrice: 75 },
  { id: "4432", name: "Soundbar Tomate", model: "MTS-2025", image: CaixaSomImg, price: 0 },
  { id: "3439", name: "Mini Subwoofer 2.1", model: "USB Bright", image: CaixaSomImg, price: 160 },
  { id: "3007", name: "Caixa Amplificada", model: "Bright 100W", image: CaixaSomImg, price: 398 },
  { id: "5146", name: "Caixa de Som 3256", model: "3256", image: CaixaSomImg, price: 350 },
  { id: "5550", name: "Caixa de Som BT-2413", model: "BT-2413", image: CaixaSomImg, price: 200, promoPrice: 110 },
  { id: "4858", name: "Caixa de Som Grasep", model: "D-BH2024", image: CaixaSomImg, price: 230, promoPrice: 115 },
  { id: "4864", name: "Caixa de Som", model: "D-BH6114", image: CaixaSomImg, price: 350, promoPrice: 175 },
  { id: "4862", name: "Caixa de Som GTS", model: "GTS-1567", image: CaixaSomImg, price: 499, promoPrice: 249.5 },
  { id: "4120", name: "JBL Charge 5", model: "Original", image: CaixaSomImg, price: 1100 },
  { id: "4119", name: "JBL Extreme 3", model: "Original", image: CaixaSomImg, price: 1950 },
  { id: "5495", name: "KTS-1296 Hmaston", model: "KTS-1296", image: CaixaSomImg, price: 200, promoPrice: 100 },
  { id: "5147", name: "Caixa de Som KTS", model: "KTS-1330", image: CaixaSomImg, price: 350, promoPrice: 150 },
  { id: "4867", name: "Caixa de Som KV", model: "KV-12024", image: CaixaSomImg, price: 240, promoPrice: 120 }
];

const CaixasSom = () => {
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
          Caixas de <span style={{ color: "#FF8C00" }}>Som</span>
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

export default CaixasSom
