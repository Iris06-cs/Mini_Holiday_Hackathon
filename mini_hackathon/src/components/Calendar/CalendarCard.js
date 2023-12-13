import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const CalendarCard = ({ dayImg, imgIdx }) => {
  const card = (
    <>
      <CardMedia
        component="img"
        sx={{ width: "100%", height: "100%", p: "0" }}
        image={`${dayImg}`}
      />
      <CardContent>
        <Typography
          variant="h2"
          component="h4"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            p: "0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white", // Change color as needed
            backgroundColor: "rgba(0,0,0,0.3)",
            fontWeight: "bold",
          }}
        >
          {imgIdx + 1}
        </Typography>
      </CardContent>
    </>
  );
  return (
    <Grid
      item
      xs={4}
      sm={5}
      md={1}
      sx={{ width: 160, height: 160, pading: "0" }}
    >
      <Card
        variant="outlined"
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          p: "0",
        }}
      >
        {card}
      </Card>
    </Grid>
  );
};
export default CalendarCard;
