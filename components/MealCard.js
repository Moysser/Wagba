const MealCard = (props) => {
  const { resCardData } = props;
  const { avgRating, name, cuisines, cloudinaryImageId } =
    resCardData?.card?.card?.info;

  return (
    <div className="food-card">
      <img
        alt="food"
        className="meal-card-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3 className="header-primary">{name}</h3>
      <h4>{avgRating} Starts</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{props.resCardData.card.card.info.sla.deliveryTime} Minutes</h4>
    </div>
  );
};

export default MealCard;
