import {
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ActionAreaCard from "../components/ActionAreaCard";
import ResponsiveAppBar from "../components/ResponsiveAppBar";
import {
  useAppDispatch,
  useAppSelector,
} from "../store/hooks";
import {
  addValue,
  subValue,
} from "../store/modules/TransactionSlice";
// eslint-disable-next-line no-lone-blocks
{
  /*

    Funcoes
    - Transferir
    - Sacar
    - Depositar

*/
}

const Home: React.FC = () => {
  const transactionRedux = useAppSelector(
    (state) => state.transaction
  );
  const dispach = useAppDispatch();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/Transferencia");
  }

  function handleClicka() {
    navigate("/Extrato");
  }
  function handleClickb() {
    navigate("/Saque");
  }

  const [valor, setValor] = useState<String>("");

  const handleSubBalace = () => {
    dispach(subValue(Number(valor)));
  };

  const handleAddBalace = () => {
    dispach(addValue(Number(valor)));
  };

  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <Grid container spacing={2}>
        <Grid item md={3}>
          <ActionAreaCard />
        </Grid>

        <Grid
          item
          md={9}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "space-between",
            flexDirection: "column",
          }}
        >
          <Grid
            container
            sx={{ opacity: 0.5, columns: 4 }}
          >
            <Grid>
              <Card
                sx={{
                  display: "flex",
                  margin: 4,
                  maxWidth: 345,
                  border: "1px solid",
                  opacity: 0.5,
                  color: "black",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="./setas.png"
                    alt="setas"
                    onClick={handleClick}
                  />
                </CardActionArea>
              </Card>
              <Typography
                variant="h5"
                align="center"
              >
                transferencias
              </Typography>
            </Grid>
            <Grid>
              <Card
                sx={{
                  display: "flex",
                  margin: 4,
                  maxWidth: 345,
                  border: "1px solid",
                  opacity: 0.5,
                  color: "black",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="./pagamentos.jpg"
                    alt="pagamentos"
                  />
                </CardActionArea>
              </Card>
              <Typography
                variant="h5"
                align="center"
              >
                pagamentos
              </Typography>
            </Grid>
            <Grid>
              <Grid>
                <Card
                  sx={{
                    margin: 4,
                    maxWidth: 345,
                    border: "1px solid",
                    opacity: 0.5,
                    color: "black",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="./extrato.jpeg"
                      alt="extrato"
                      onClick={handleClicka}
                    />
                  </CardActionArea>
                </Card>
                <Typography
                  variant="h5"
                  align="center"
                >
                  Extrato
                </Typography>
              </Grid>
            </Grid>
            <Grid>
              <Card
                sx={{
                  margin: 4,
                  maxWidth: 345,
                  opacity: 0.5,
                  color: "black",
                  border: "1px solid",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="./saque.png"
                    alt="saque"
                    onClick={handleClickb}
                  />
                </CardActionArea>
              </Card>
              <Typography
                variant="h5"
                align="center"
              >
                depósito
              </Typography>
            </Grid>
          </Grid>
          {/* <Grid>
            <input
              type="number"
              step={10}
              onChange={(ev) => {
                setValor(ev.target.value);
              }}
            />

            <button onClick={handleAddBalace}>
              ADD
            </button>
            <button onClick={handleSubBalace}>
              SUB
            </button>
          </Grid> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
