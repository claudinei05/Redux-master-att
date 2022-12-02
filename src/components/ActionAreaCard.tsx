import { CardActionArea, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useAppSelector } from "../store/hooks";

export default function ActionAreaCard() {
  const balanceRedux = useAppSelector((state) => state.balance);

  return (
    <Card
      sx={{
        backgroundColor: "#8D72E1",
        height: "92vh",
        alignItems: "center",
        display: "flex",
        "& > :not(style)": { m: 5 },
      }}
    >
      <Grid container spacing={0}>
        <CardActionArea>
          <Avatar
            sx={{
              minWidth: "30vh",
              height: "30vh",
            }}
          >
            PHOTO
          </Avatar>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div"></Typography>
            <Typography fontSize="13px" variant="body2" color="text.secondary">
              Olá {},Seja bem vindo ao Basic Wallet:)
            </Typography>
            <Typography variant="h6" align="center" mt={2}>
              Saldo em conta R$
              {balanceRedux.balance}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Grid>
    </Card>
  );
}
