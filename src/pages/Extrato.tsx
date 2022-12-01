import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import { useAppSelector } from "../store/hooks";

const Extrato: React.FC = () => {
  const transactionRedux = useAppSelector(
    (state) => state.transaction
  );
  const navigate = useNavigate();

  function goBack() {
    navigate("/");
  }

  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <Container>
        <Grid
          container
          component="main"
          sx={{
            height: "100vh",
            width: "1000px",
          }}
        >
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={15}
            md={7}
            sx={{
              backgroundImage: "url(./saque.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,

                alignItems: "center",
              }}
            >
              <Typography
                component="div"
                variant="h6"
              >
                Saldo em conta
              </Typography>
              <Typography
                component="div"
                variant="h3"
              >
                R${transactionRedux.balance}
              </Typography>
              <Card
                sx={{
                  display: "flex",
                  margin: 10,
                  maxWidth: 345,
                  border: "1px solid",
                  opacity: 0.5,
                }}
              >
                <CardActionArea>
                  <CardMedia />
                </CardActionArea>
              </Card>
              <Grid>
                <Paper
                  elevation={2}
                  sx={{ padding: "5px" }}
                >
                  {" "}
                  SAÍDAS
                  {transactionRedux.withdraw.map(
                    (item) => {
                      return (
                        <div>
                          R${item.value}{" "}
                          {item.description}{" "}
                          {item.account}-
                          {item.digit}
                        </div>
                      );
                    }
                  )}
                </Paper>
              </Grid>
              <Typography
                component="div"
                sx={{ color: "blue", margin: 4 }}
              >
                Saldo adicionado ao abrir conta
              </Typography>
              <Typography
                align="right"
                component="div"
                sx={{ color: "green", margin: 4 }}
              >
                R$ 1.000,00
              </Typography>
              <Button
                onClick={goBack}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Voltar
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Extrato;
