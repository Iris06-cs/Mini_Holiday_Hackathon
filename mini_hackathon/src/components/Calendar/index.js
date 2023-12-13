import {
  Typography,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CalendarCard from "./CalendarCard";
import "./Calendar.css";
const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          marginTop: "0px",
          marginBottom: "0px",
        },
      },
    },
  },
});
const Calendar = () => {
  const days = Array.from({ length: 25 }, (_, i) => i + 1);
  return (
    <div className="calendar-container">
      <ThemeProvider theme={theme}>
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 5 }}
            columns={{ xs: 4, sm: 8, md: 5 }}
            justify="center"
          >
            {days.map((day) => (
              <CalendarCard key={day} day={day} />
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Calendar;
