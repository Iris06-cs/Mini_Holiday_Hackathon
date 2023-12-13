import { Container, Grid, Card, Typography } from "@mui/material";
import giftCard from "../../images/gift.png";
import "./Collection.css";

const Collection = ({ giftCardsCount }) => {
  return (
    <Container sx={{ p: "0", margin: "0" }}>
      <div className="gift-card-stack">
        {[...Array(giftCardsCount)].map((_, index) => (
          <Card
            sx={{ backgroundColor: "#b01b2e", p: "10px", color: "#F8B229" }}
            key={index}
            className="gift-card"
          >
            <Typography align="center ">Congres!</Typography>
            <img src={giftCard} alt="Gift" />
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default Collection;
