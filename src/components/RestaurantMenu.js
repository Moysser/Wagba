import useRestaurantMenuInfo from "../utils/useRestaurantMenuInfo";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { nameIt } = useParams();
  const resInfo = useRestaurantMenuInfo(nameIt);

  if (resInfo === null) return <Shimmer />;
  // console.log(resInfo.cards[4].groupedCard.cardGroupMap);

  const { name } = resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h1>Menu</h1>
      <ul>
        {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards.map(
          (item) => {
            console.log(item);
            return (
              <li key={item.card.info.id}>
                {item.card.info.name} -{" "}
                {item.card.info.defaultPrice ||
                  item.card.info.price ||
                  costForTwos}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
