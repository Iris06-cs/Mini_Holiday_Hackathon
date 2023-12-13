import Calendar from "./components/Calendar";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography, CssBaseline } from "@mui/material";
import { Container } from "@mui/material";
import santa from "./images/santa.png";
import reindeer from "./images/reindeer-santa.png";
function App() {
  return (
    <>
      <CssBaseline />

      <main>
        <Container
          sx={{
            width: "25%",
            margin: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <img src={reindeer} alt="reindeer" id="reindeer-img" />
          <img src={santa} alt="santa" id="santa-img" />
          <audio controls loop style={{ opacity: "0.6" }}>
            <source src="/music/jingle-bells.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </Container>
        <Container sx={{ marginRight: "2%" }}>
          <Typography
            variant="h2"
            component="h1"
            align="center"
            sx={{ fontWeight: "bold", color: "#4682B4" }}
          >
            Christmas Countdown!
          </Typography>
          <Typography
            variant="h5"
            component="h4"
            align="center"
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              color: "#4682B4",
            }}
          >
            Check-in everyday to collect a Xmas item. Gather all 5 different
            items and unlock a special surprise prize!! Don't miss a day of
            holiday cheer!
          </Typography>
          <Calendar />
        </Container>
      </main>
    </>
  );
}

export default App;
