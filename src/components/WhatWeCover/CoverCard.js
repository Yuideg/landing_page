import {
  Grid,
  Card,
  makeStyles,
  CardContent,
  Typography,
  Box,
} from "@material-ui/core";
import Lottie from "react-lottie";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 338,
  },
  cardDesc: {
    height: 30,
  },
}));

function CoverCard({ image, title, description, height, width }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={4} lg={2}>
      <Box align="center">
        <Card className={classes.root} elevation={10}>
          <Box pt={3} />
          <Lottie
            options={{
              loop: true,
              autoplay: onmouseover ? true : false,
              animationData: image,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
            height={height}
            width={width}
          />
          <CardContent>
            <Typography align="center" variant="h5">
              {title}
            </Typography>
            <Typography
              align="center"
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.cardDesc}
            >
              {description}
            </Typography>
          </CardContent>
          <Typography align="center" style={{ padding: 20, fontWeight: 1000 }}>
            ___
          </Typography>
        </Card>
      </Box>
    </Grid>
  );
}

export default CoverCard;
