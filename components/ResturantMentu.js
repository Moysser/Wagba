import useRestaurantMenuInfo from "../utils/useRestaurantMenuInfo";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restMenu = useRestaurantMenuInfo(id);

  if (restMenu === null) return <Shimmer />;

  const { name } = restMenu?.cards[2]?.card?.card?.info;

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h1>Menu</h1>
      <ul>
        {restMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
          (item) => {
            console.log(item);
            return (
              <li key={item.card.info.id}>
                {item.card.info.name} -{" "}
                {item.card.info.defaultPrice || item.card.info.price}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
