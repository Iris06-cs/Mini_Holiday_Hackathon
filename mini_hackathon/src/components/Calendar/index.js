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
  //   const [shownImages, setShownImages] = useState(new Set());
  const [openedDays, setOpenedDays] = useState({});

  const [selectedImage, setSelectedImage] = useState(questionMark);
  const [dayStatus, setDayStatus] = useState(
    imageList.map((img) => ({ opened: false, image: img }))
  );
  const [giftCardsCount, setGiftCardsCount] = useState(0);
  const [isLastDay, setIsLastDay] = useState(false);

  //   useEffect(() => {
  //     const completeSetImages = !openedDays ? [] : Object.values(openedDays);
  //     const isCompleteSetShown = () => {
  //       if (!completeSetImages.length || completeSetImages.length < 5)
  //         return false;
  //       else return true;
  //     };

  //     if (isCompleteSetShown()) {
  //       setGiftCardsCount((prev) => prev + 1);
  //       //   setShownImages(new Set());
  //       setOpenedDays((prev) => {
  //         const newOpenedDays = { ...prev };
  //         for (let key in newOpenedDays) newOpenedDays[key] -= 1;
  //         return newOpenedDays;
  //       });
  //     }
  //   }, [openedDays]);
  useEffect(() => {
    const totalUniqueImagesOpened = Object.keys(openedDays).length;
    const allImagesOpenedAtLeastOnce = totalUniqueImagesOpened >= 5;
    const shouldAwardGiftCard =
      allImagesOpenedAtLeastOnce &&
      Object.values(openedDays).every((count) => count > 0);

    if (shouldAwardGiftCard) {
      setGiftCardsCount((prev) => prev + 1);

      // Reset or decrement the count in openedDays
      setOpenedDays((prev) => {
        const newOpenedDays = { ...prev };
        for (let key in newOpenedDays) {
          newOpenedDays[key] = Math.max(newOpenedDays[key] - 1, 0);
        }
        return newOpenedDays;
      });
    }
  }, [openedDays]);

  console.log(giftCardsCount, "line59", openedDays);
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
        // setShownImages((prevShownImages) => {
        //   const updatedSet = new Set(prevShownImages);
        //   updatedSet.add(randomIndex);

        //   return updatedSet;
        // });
        setOpenedDays((prev) => {
          const newOpenedDays = { ...prev }; // Create a new object

          if (!newOpenedDays[randomIndex]) {
            newOpenedDays[randomIndex] = 0;
          }
          newOpenedDays[randomIndex]++;

          return newOpenedDays;
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
        <div className="modal_container">
          <Card
            sx={{
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
                <img src={selectedImage} id="opened_img" alt="Selected" />
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
