const FoodCard = (props) => {
  // console.log(props.wagba.data.cloudinaryImageId);

  const { resCardData } = props;
  const { avgRating, name, cuisines, cloudinaryImageId, deliveryTime } =
    resCardData?.data;

  // console.log(cuisines); list
  return (
    <div className="flex flex-wrap shadow-2xl  rounded-lg overflow-hidden h-[450px]">
      <img
        alt="food"
        className="w-full h-48 object-cover"
        // width="100"
        // height="50"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <div className="p-4 flex flex-col grow">
        <p className="header-primary font-semibold mb-1">{name}</p>
        <p>{avgRating} Starts</p>
        <p className="text-gray-600 line-clamp-2">{cuisines.join(", ")}</p>
        <p className="mt-auto text-sm text-gray-500">{deliveryTime} Minutes</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (FoodCard) => {
  return () => {
    return (
      <div>
        <label>Promoted</label>
        <FoodCard />
      </div>
    );
  };
};

export default FoodCard;
