import { Typography, Card, Container, Grid, Modal } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useState } from "react";

import CalendarCard from "./CalendarCard";
import Collection from "../Collection";
import questionMark from "../../images/question-mark.png";
import "./Calendar.css";

const images = require.context("./dayImages", true);
const imageList = images
  .keys()
  .map((image) => images(image))
  .sort(
    (a, b) => parseInt(a.split("/day").pop()) - parseInt(b.split("/day").pop())
  );
const itemImages = require.context("./cardImages", true);
const modalImages = itemImages.keys().map((image) => itemImages(image));
const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          marginRight: "0px",
        },
      },
    },
  },
});
const Calendar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [shownImages, setShownImages] = useState(new Set());

  const [selectedImage, setSelectedImage] = useState(questionMark);
  const [dayStatus, setDayStatus] = useState(
    imageList.map((img) => ({ opened: false, image: img }))
  );
  const [giftCardsCount, setGiftCardsCount] = useState(0);
  const [isLastDay, setIsLastDay] = useState(false);
  useEffect(() => {
    const isCompleteSetShown = () => {
      return shownImages.size === 5;
    };
    if (isCompleteSetShown()) {
      setGiftCardsCount((prev) => prev + 1);
      setShownImages(new Set());
    }
  }, [shownImages]);

  const handleMagicTime = (idx) => {
    setSelectedImage(questionMark);
    if (idx === dayStatus.length - 1) {
      setIsLastDay(true);
      setOpenModal(true);
    } else {
      setTimeout(() => {
        setSelectedImage(null);
        // After animation turning
        const randomIndex = Math.floor(Math.random() * modalImages.length);
        setSelectedImage(modalImages[randomIndex]);
        const newDayStatus = [...dayStatus];
        newDayStatus[idx] = { opened: true, image: modalImages[randomIndex] };
        setDayStatus(newDayStatus);

        // Update shown images
        setShownImages((prevShownImages) => {
          const updatedSet = new Set(prevShownImages);
          updatedSet.add(randomIndex);
          return updatedSet;
        });
      }, 1500);
    }
  };
  const handleOpen = (idx) => {
    if (!dayStatus[idx].opened) {
      setOpenModal(true);
      handleMagicTime(idx);
    }
  };
  const handleClose = () => {
    setOpenModal(false);
    setSelectedImage(questionMark);
    setIsLastDay(false);
  };

  return (
    <div className="calendar-container">
      <ThemeProvider theme={theme}>
        <Container>
          <Grid
            container
            spacing={{ xs: 1, sm: 1, md: 1 }}
            columns={{ xs: 1, sm: 1, md: 7 }}
            justify="space-between"
          >
            {dayStatus.map((day, idx) => (
              <CalendarCard
                key={idx}
                dayImg={day.image}
                imgIdx={idx}
                onClick={() => handleOpen(idx)}
                opened={day.opened}
              />
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
      <Modal open={openModal} onClose={handleClose}>
        <div
          style={{
            width: "400px",
            height: "400px",
            margin: "auto",
            marginTop: "15%",
            backgroundColor: "#b01b2e",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Card
            style={{
              animation: "flip 1.5s linear",
              maxWidth: "200px",
              maxHeight: "200px",
              backgroundColor: "#b01b2e",
              boxShadow: "none",
            }}
          >
            {isLastDay ? (
              <Typography
                variant="h4"
                component="h4"
                align="center"
                sx={{ color: "#F8B229", p: "0", margin: "0" }}
              >
                Merry Christmas!
              </Typography>
            ) : (
              selectedImage && (
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{
                    maxWidth: "200px",
                    maxHeight: "200px",
                  }}
                />
              )
            )}
          </Card>
          <Typography sx={{ color: "#F8B229" }}>Magic Time</Typography>
        </div>
      </Modal>
      {giftCardsCount > 0 && <Collection giftCardsCount={giftCardsCount} />}
    </div>
  );
};

export default Calendar;
