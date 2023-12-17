import { Card, Typography } from "@mui/material";
import giftCard from "../../images/gift.png";
import "./Collection.css";

const Collection = ({ giftCardsCount }) => {
  return (
    <div className="gift-card-container">
      <div className="gift-card-stack">
        {[...Array(giftCardsCount)].map((_, index) => (
          <Card
            sx={{ backgroundColor: "#b01b2e", p: "10px", color: "#F8B229" }}
            key={index}
            className="gift-card"
          >
            <Typography align="center">Congres!</Typography>
            <img src={giftCard} alt="Gift" />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Collection;
