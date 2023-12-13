import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const CalendarCard = ({ day }) => {
  const card = (
    <CardContent>
      <Typography variant="h3" component="h4">
        {day}
      </Typography>
    </CardContent>
  );
  return (
    <Grid item xs={5} sm={6} md={1}>
      <Card
        variant="outlined"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {card}
      </Card>
    </Grid>
  );
};
export default CalendarCard;
