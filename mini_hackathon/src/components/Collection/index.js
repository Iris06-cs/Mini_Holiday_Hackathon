const Collection = ({ giftCardsCount }) => {
  return (
    <div>
      {[...Array(giftCardsCount)].map((_, index) => (
        <div key={index}>Gift Card {index + 1}</div>
      ))}
    </div>
  );
};

export default Collection;
