import FoodCard from "./FoodCard";
import { useState, useEffect } from "react";
import useOlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const mealCardArr = useState([]);
  const [filteredFoodCards, setFilteredFoodCards] = useState([]);
  const [TopMealBtn, setTopMealBtn] = useState("Top Meals");
  const [searchText, setSearchText] = useState("");
  const mealCards = mealCardArr[0];
  const setMealCard = mealCardArr[1];
  const onlineStatus = useOlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );

      const resJson = await response.json();

      const cards = resJson.data.cards;
      cards.splice(0, 3);

      setMealCard(cards);
    } catch (err) {
      console.error(err);
    }
  };

  if (mealCards.length === 0) {
    return <Shimmer />;
  }

  if (onlineStatus === false) {
    return <h1>Check your internet connection!</h1>;
  }

  return (
    <div className="body">
      <div className="filter-container">
        <div className="search">
          <input
            type="text"
            placeholder="search a meal"
            className="meal-search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setFilteredFoodCards(resCards);
            }}
          />
          <button
            onClick={() => {
              const searchedMeal = resCards.filter((card) => {
                return card.card.card.info.name
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase());
              });

              setFilteredFoodCards(searchedMeal);
            }}
          >
            search
          </button>
        </div>

        <div className="filtered-meal">
          <button
            className="filter_btn"
            onClick={() => {
              const filteredCards = resCards.filter((card) => {
                return card.card.card.info.avgRating > 4;
              });

              if (TopMealBtn === "Top Meals") {
                setFilteredFoodCards(filteredCards);
                setTopMealBtn("All Meals");
              } else {
                setFilteredFoodCards(resCards);
                setTopMealBtn("Top Meals");
              }
            }}
          >
            {TopMealBtn}
          </button>
        </div>
      </div>
      <div className="food-container">
        {filteredFoodCards.map((wagbaCard) => {
          const id = wagbaCard.card.card.info.id;
          return (
            <Link to={"/restaurants/" + id} key={id}>
              <FoodCard resCardData={wagbaCard} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
