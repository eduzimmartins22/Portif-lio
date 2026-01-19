import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  TextField,
} from "@mui/material"

const Pagamento = () => {
  return (
    <Box id="pagamento" py={16} sx={{ backgroundColor: "#F2F2F2" }}>
      <Container>
        <Typography variant="h2" textAlign="center" mb={4}>
          <span style={{ color: "#FF8C00" }}>Contato</span>
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* CONTATOS */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 4,
                display: "flex",
                flexDirection: "column",
                gap: 3,
                height: "100%",
                backgroundColor: "#FAFAFA",
                border: "1px solid #E0E0E0",
                borderRadius: 2,
              }}
            >
              {/* EMAIL */}
              <Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ display: "block", mb: 0.5 }}
                  color="#503d3d"
                >
                  GMAIL
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    wordBreak: "break-word",
                    backgroundColor: "#1A1818",
                    color: "#FFFFFF",
                    fontSize: 14,
                    fontFamily: "Arial Rounded MT Bold",
                    padding: "6px 10px",
                    borderRadius: 1.5,
                    display: "inline-block",
                    
                  }}
                >
                  ugocelularescontato@gmail.com
                </Typography>
              </Box>

              {/* WHATSAPP */}
              <Box>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  mb={1}
                  color="#503d3d"
                >
                  Whatsapp
                </Typography>

                <Button
                  variant="contained"
                  color="success"
                  href="https://wa.me/5527999346464"
                >
                  falar no whatsapp
                </Button>
              </Box>
            </Paper>
          </Grid>

          {/* FORMULÁRIO */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 4,
                backgroundColor: "#FAFAFA",
                border: "1px solid #E0E0E0",
                borderRadius: 2,
              }}
            >
              <Typography
                variant="subtitle1"
                textAlign="center"
                mb={3}
                fontWeight={600}
                sx={{
                  backgroundColor: "#1A1818",
                  color: "#FFFFFF",
                  fontSize: 13,
                  letterSpacing: 1,
                  padding: "6px 14px",
                  borderRadius: 2,
                  display: "inline-block",
                  margin: "0 auto 16px",
                }}
              >
                PERGUNTAS
              </Typography>

              <Box
                component="form"
                display="flex"
                flexDirection="column"
                gap={2}
                
              >
              <TextField label="Nome" fullWidth sx={inputStyle} />
              <TextField label="Gmail" type="email" fullWidth sx={inputStyle} />
              <TextField label="Número" type="tel" fullWidth sx={inputStyle} />
              <TextField label="Pergunta" multiline rows={4} fullWidth sx={inputStyle} />
                <Button variant="contained">
                  enviar
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="center" mt={6}>
          <Button
            href="#topo"
            sx={{
              color: "#FFFFFF",
              backgroundColor: "#070707",
              width: "180px",
              height: "60px",
              "&:hover": {
                backgroundColor: "#1A1818",
              },
            }}
          >
            voltar ao topo
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
const inputStyle = {
  "& .MuiInputLabel-root": {
    color: "#503d3d",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#503d3d",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#503d3d",
    },
    "&:hover fieldset": {
      borderColor: "#1A1818",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#1A1818",
    },
    
  },
}


export default Pagamento
