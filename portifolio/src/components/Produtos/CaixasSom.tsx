import Grid from "@mui/material/Grid"
import { Box, Container, Typography, Button } from "@mui/material"

import ProductCard from "../../components/Produtos/ProductCart"
import CartTopBar from "../../components/CartTopBar"

import BKImg from "../../images/BK1619.png"
import BoomboxExtraGrandeImg from "../../images/BoomboxExtraGrande.png"
import CaixaAmplificadaBright100WImg from "../../images/CaixaAmplificadaBright100W.png"
import CaixaAmplificadaC11ColorImg from "../../images/CaixaAmplificadaC11Color.png"
import CaixaAmplificadaC13ColorImg from "../../images/CaixaAmplificadaC13Color.png"
import CaixadeSom3256Img from "../../images/CaixadeSom3256.png"
import CaixadeSom65KTS1112Img from "../../images/CaixadeSom6.5KTS1112.png"
import CaixadeSom900MultilaserSPImg from "../../images/CaixadeSom900MultilaserSP.png"
import CaixadeSomAltomexAL1098Img from "../../images/CaixadeSomAltomexAL1098.png"
import CaixadeSomBH6114Img from "../../images/CaixadeSomBH6114.png"
import CaixadeSomBK3618Img from "../../images/CaixadeSomBK3618.png"
import CaixadeSomBluetoothCSM31BTImg from "../../images/CaixadeSomBluetoothCSM31BT.png"
import CaixadeSomBT2413Img from "../../images/CaixadeSomBT2413.png"
import CaixadeSomBT2414Img from "../../images/CaixadeSomBT2414.png"
import CaixadeSomChargeMini3Img from "../../images/CaixadeSomChargeMini3+.png"
import CaixadeSomDBH2024Img from "../../images/CaixadeSomDBH2024.png"
import CaixadeSomDeltaVogueMaxImg from "../../images/CaixadeSomDeltaVogueMax.png"
import CaixadeSomGold30WSM07Img from "../../images/CaixadeSomGold30WSM07.png"
import CaixadeSomGoldWS887Img from "../../images/CaixadeSomGoldWS887.png"
import CaixadeSomGTS1360Img from "../../images/CaixadeSomGTS1360.png"
import CaixadeSomGTS1567Img from "../../images/CaixadeSomGTS1567.png"
import CaixadeSomHmaston60WTN39Img from "../../images/CaixadeSomHmaston60WTN39.png"
import CaixadeSomHmastonKTS1296Img from "../../images/CaixadeSomHmastonKTS1296.png"
import CaixadeSomJBLCharge5Img from "../../images/CaixadeSomJBLOriginalCharge5.png"
import CaixadeSomJBLExtreme3Img from "../../images/CaixadeSomJBLOriginalExtreme3.png"
import SoundbarTomateMTS2025Img from "../../images/SoundbarTomateMTS2025.png"

import CaixadeSomBrightC03Img from "../../images/CaixadeSomBrightC03.png"
import CaixadeSomD3204Img from "../../images/CaixadeSomD3204.png"
import CaixadeSomInovaRAD8626Img from "../../images/CaixadeSomInovaRAD8626.png"
import CaixadeSomInovaRAD8647Img from "../../images/CaixadeSomInovaRAD8647.png"
import CaixadeSomInovaRAD9026Img from "../../images/CaixadeSomInovaRAD9026.png"
import CaixadeSomKapbomKA8301Img from "../../images/CaixadeSomKapbomKA8301.png"
import CaixadeSomKaraokeBK1090Img from "../../images/CaixadeSomKaraokeBK1090.png"
import CaixadeSomKbroadKTS1721Img from "../../images/CaixadeSomKbroadKTS1721.png"
import CaixadeSomKTS1330Img from "../../images/CaixadeSomKTS1330.png"
import CaixadeSomKV12024Img from "../../images/CaixadeSomKV12024.png"
import CaixadeSomKV330Img from "../../images/CaixadeSomKV330.png"
import CaixadeSomKV88631Img from "../../images/CaixadeSomKV88631.png"
import CaixadeSomLuzKaraokeRAD12578Img from "../../images/CaixadeSomLuzKaraokeRAD12578.png"
import CaixadeSomMiniSpeakerM10Img from "../../images/CaixadeSomMiniSpeakerM10.png"
import CaixadeSomPulseSP359Img from "../../images/CaixadeSomPulseSP359.png"
import CaixadeSomSomboxPequenaImg from "../../images/CaixadeSomSomboxPequena.png"
import MiniCaixaSomPC359BrightImg from "../../images/MiniCaixaSomPC359Bright.png"
import MiniSubwoofer21USBBrightImg from "../../images/MiniSubwoofer2.1USBBright-removebg-preview.png"
import MiniSubwooferUSB059BrightImg from "../../images/MiniSubwooferUSB059Bright.png"


import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useNavigate } from "react-router-dom"




const items = [
  { id: "bk1619", name: "Caixa de Som", model: "BK-1619", image: BKImg, price: 50, promoPrice: 25 },

  { id: "boombox-extra", name: "Boombox", model: "Extra Grande", image: BoomboxExtraGrandeImg, price: 390 },

  { id: "amp-c11", name: "Caixa Amplificada", model: "C11 Color", image: CaixaAmplificadaC11ColorImg, price: 299 },
  { id: "amp-c13", name: "Caixa Amplificada", model: "C13 Color", image: CaixaAmplificadaC13ColorImg, price: 370, promoPrice: 185 },
  { id: "amp-100w", name: "Caixa Amplificada Bright", model: "100W", image: CaixaAmplificadaBright100WImg, price: 398 },

  { id: "3256", name: "Caixa de Som", model: "3256", image: CaixadeSom3256Img, price: 350 },
  { id: "kts1112", name: "Caixa de Som 6.5", model: "KTS-1112", image: CaixadeSom65KTS1112Img, price: 300 },
  { id: "multilaser900", name: "Caixa de Som", model: "Multilaser SP 900", image: CaixadeSom900MultilaserSPImg, price: 120 },

  { id: "altomex1098", name: "Caixa de Som", model: "Altomex AL-1098", image: CaixadeSomAltomexAL1098Img, price: 50 },
  { id: "bk3618", name: "Caixa de Som", model: "BK-3618", image: CaixadeSomBK3618Img, price: 50 },

  { id: "bluetooth-csm31", name: "Caixa de Som Bluetooth", model: "CS-M31BT", image: CaixadeSomBluetoothCSM31BTImg, price: 180 },

  { id: "bt2413", name: "Caixa de Som", model: "BT-2413", image: CaixadeSomBT2413Img, price: 200, promoPrice: 110 },
  { id: "bt2414", name: "Caixa de Som", model: "BT-2414", image: CaixadeSomBT2414Img, price: 200, promoPrice: 110 },

  { id: "charge-mini", name: "Caixa de Som", model: "Charge Mini 3+", image: CaixadeSomChargeMini3Img, price: 59.9 },

  { id: "dbh2024", name: "Caixa de Som", model: "D-BH2024", image: CaixadeSomDBH2024Img, price: 230, promoPrice: 115 },
  { id: "dbh6114", name: "Caixa de Som", model: "D-BH6114", image: CaixadeSomBH6114Img, price: 350, promoPrice: 175 },

  { id: "delta-max", name: "Caixa de Som", model: "Delta Vogue Max", image: CaixadeSomDeltaVogueMaxImg, price: 73 },

  { id: "gts1360", name: "Caixa de Som", model: "GTS-1360", image: CaixadeSomGTS1360Img, price: 45 },
  { id: "gts1567", name: "Caixa de Som", model: "GTS-1567", image: CaixadeSomGTS1567Img, price: 499, promoPrice: 249.5 },

  { id: "gold30w", name: "Caixa de Som Gold", model: "30W SM-07", image: CaixadeSomGold30WSM07Img, price: 250 },
  { id: "ws887", name: "Caixa de Som Gold", model: "WS-887", image: CaixadeSomGoldWS887Img, price: 30, promoPrice: 16.5 },

  { id: "hmaston60w", name: "Caixa de Som Hmaston", model: "60W TN39", image: CaixadeSomHmaston60WTN39Img, price: 280 },
  { id: "kts1296", name: "Caixa de Som Hmaston", model: "KTS-1296", image: CaixadeSomHmastonKTS1296Img, price: 200, promoPrice: 100 },

  { id: "jbl-charge5", name: "JBL Charge 5", model: "Original", image: CaixadeSomJBLCharge5Img, price: 1100 },
  { id: "jbl-extreme3", name: "JBL Extreme 3", model: "Original", image: CaixadeSomJBLExtreme3Img, price: 1950 },

  { id: "soundbar", name: "Soundbar Tomate", model: "MTS-2025", image: SoundbarTomateMTS2025Img, price: 0 },
  {
    id: "bright-c03",
    name: "Caixa de Som Bright",
    model: "C-03 • Bluetooth • Compacta",
    image: CaixadeSomBrightC03Img,
    price: 0,
  },
  {
    id: "d3204",
    name: "Caixa de Som",
    model: "D-3204 • Bluetooth • Portátil",
    image: CaixadeSomD3204Img,
    price: 0,
  },
  {
    id: "rad-8626",
    name: "Caixa de Som Inova",
    model: "RAD-8626 • Bluetooth • Graves reforçados",
    image: CaixadeSomInovaRAD8626Img,
    price: 0,
  },
  {
    id: "rad-8647",
    name: "Caixa de Som Inova",
    model: "RAD-8647 • Bluetooth • Portátil",
    image: CaixadeSomInovaRAD8647Img,
    price: 0,
  },
  {
    id: "rad-9026",
    name: "Caixa de Som Inova",
    model: "RAD-9026 • Bluetooth • Alta potência",
    image: CaixadeSomInovaRAD9026Img,
    price: 0,
  },
  {
    id: "ka-8301",
    name: "Caixa de Som Kapbom",
    model: "KA-8301 • Bluetooth • Portátil",
    image: CaixadeSomKapbomKA8301Img,
    price: 0,
  },
  {
    id: "bk-1090",
    name: "Caixa de Som Karaokê",
    model: "BK-1090 • Bluetooth • Microfone",
    image: CaixadeSomKaraokeBK1090Img,
    price: 0,
  },
  {
    id: "kts-1721",
    name: "Caixa de Som Kbroad",
    model: "KTS-1721 • Bluetooth • Potente",
    image: CaixadeSomKbroadKTS1721Img,
    price: 0,
  },
  {
    id: "kts-1330",
    name: "Caixa de Som",
    model: "KTS-1330 • Bluetooth • Portátil",
    image: CaixadeSomKTS1330Img,
    price: 0,
  },
  {
    id: "kv-12024",
    name: "Caixa de Som",
    model: "KV-12024 • Bluetooth • Som potente",
    image: CaixadeSomKV12024Img,
    price: 0,
  },
  {
    id: "kv-330",
    name: "Caixa de Som",
    model: "KV-330 • Bluetooth • Compacta",
    image: CaixadeSomKV330Img,
    price: 0,
  },
  {
    id: "kv-88631",
    name: "Caixa de Som",
    model: "KV-88631 • Bluetooth • Portátil",
    image: CaixadeSomKV88631Img,
    price: 0,
  },
  {
    id: "rad-12578",
    name: "Caixa de Som com Luz",
    model: "RAD-12578 • Karaokê • LED",
    image: CaixadeSomLuzKaraokeRAD12578Img,
    price: 0,
  },
  {
    id: "mini-m10",
    name: "Mini Speaker",
    model: "M10 • Bluetooth • Ultra compacto",
    image: CaixadeSomMiniSpeakerM10Img,
    price: 0,
  },
  {
    id: "pulse-sp359",
    name: "Caixa de Som Pulse",
    model: "SP-359 • Bluetooth • Portátil",
    image: CaixadeSomPulseSP359Img,
    price: 0,
  },
  {
    id: "sombox-pequena",
    name: "Caixa de Som",
    model: "Sombox • Pequena • Bluetooth",
    image: CaixadeSomSomboxPequenaImg,
    price: 0,
  },
  {
    id: "pc-359",
    name: "Mini Caixa de Som Bright",
    model: "PC-359 • USB • Compacta",
    image: MiniCaixaSomPC359BrightImg,
    price: 0,
  },
  {
    id: "subwoofer-21",
    name: "Mini Subwoofer",
    model: "2.1 • USB • Som estéreo",
    image: MiniSubwoofer21USBBrightImg,
    price: 0,
  },
  {
    id: "subwoofer-059",
    name: "Mini Subwoofer",
    model: "USB-059 • Compacto • Estéreo",
    image: MiniSubwooferUSB059BrightImg,
    price: 0,
  },
]

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
