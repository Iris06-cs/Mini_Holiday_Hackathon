import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const CalendarCard = ({ dayImg, imgIdx, onClick }) => {
  const card = (
    <>
      <CardMedia
        component="img"
        sx={{ width: "100", height: "100", p: "0" }}
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
    <Grid item xs={1} sm={1} md={1} sx={{ width: 160, height: 160 }}>
      <Card
        onClick={onClick}
        variant="outlined"
        sx={{
          position: "relative",
          width: "150px",
          height: "150px",
          display: "flex",
          flexDirection: "column",
          p: "0",
          backgroundColor: "#b01b2e",
          border: "none",
        }}
      >
        {card}
      </Card>
    </Grid>
  );
};
export default CalendarCard;
