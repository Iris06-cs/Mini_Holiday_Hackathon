import Calendar from "./components/Calendar";
import Collection from "./components/Collection";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography, CssBaseline } from "@mui/material";
import { Container } from "@mui/material";
function App() {
  return (
    <>
      <CssBaseline />
      <main>
        <Container>
          <Typography
            variant="h1"
            align="center"
            style={{ fontWeight: "bold", color: "#4682B4" }}
          >
            Christmas Countdown!
          </Typography>
          <Typography
            variant="h4"
            align="center"
            style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            Check-in everyday to collect a Xmas item. Gather all 5 different
            items and unlock a special surprise prize!! Don't miss a day of
            holiday cheer!
          </Typography>
        </Container>
        <Calendar />
        <Collection />
      </main>
    </>
  );
}

export default App;
