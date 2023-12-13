import {
  Typography,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";

import CalendarCard from "./CalendarCard";

import "./Calendar.css";

const images = require.context("./dayImages", true);
const imageList = images.keys().map((image) => images(image));
const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          marginRight: "0px",
          //   marginBottom: "0px",
        },
      },
    },
  },
});
const Calendar = () => {
  return (
    <div className="calendar-container">
      <ThemeProvider theme={theme}>
        <Container>
          <Grid
            container
            spacing={{ xs: 1, md: 5 }}
            columns={{ xs: 2, sm: 1, md: 5 }}
            justify="center"
          >
            {imageList.map((img, idx) => (
              <CalendarCard
                key={idx}
                dayImg={img}
                imgIdx={idx}
                // onClick={() => handleOpenDay(idx)}
              />
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Calendar;
