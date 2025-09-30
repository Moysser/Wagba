import FoodCard from "./FoodCard";
import resCardData from "../utils/apiData";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  // const [resCards, setResCard] = useState(resCardData);
  const onlineStatus = useOnlineStatus();
  const arr = useState([]);
  const [filteredFoodCards, setFilteredFoodCards] = useState([]);
  const [test, setTest] = useState([]); // console.log(obj[0].name); // this array returnss a list of two things, the default value of the state variable and a function to update it.
  const resCards = arr[0];
  const setResCard = arr[1];

  const [searchText, setSearchText] = useState("");
  const [TopMealBtn, setTopMealBtn] = useState("Top Meals");

  const name1 = useState("Moysser");
  const normalVariable = useState(); // just like let name;
  const obj = useState({
    name: "Moysser",
    statement: "This is a powerful React variable",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );

      // https://www.swiggy.com/city/bangalore/la-pinoz-pizza-koramangala-rest59627?restaurant_id=59627&source=collection&query=Pizza
      const resJson = await response.json();

      // console.log(resJson);
      const cards = resJson.data.cards;
      cards.splice(0, 3);
      // const pageheader = cards.splice(0, 3);

      // console.log(cards);

      setResCard(cards);
      setFilteredFoodCards(cards);
    } catch (err) {
      console.error(err);
    }
  };

  // Conditional rendering
  if (resCards.length === 0) {
    return <Shimmer />;
  }

  if (onlineStatus === false) {
    return <h1>Check your internet connection!</h1>;
  }

  // OR
  // return test.length === 0 ? <Shimmer /> :
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
            // TopMealBtn === "All Meals"
            //   ? setTopMealBtn("Top Meals")
            //   : TopMealBtn === "Top meals"
            //   ? setFilteredFoodCards(filteredCards)
            //   : TopMealBtn == "All Meals"
            //   ? setFilteredFoodCards(resCards)
            //   : setTopMealBtn("All Meals");
          }}
        >
          {TopMealBtn}
        </button>
      </div>
      <div className="food-container">
        {filteredFoodCards.map((wagbaCard) => {
          //instead of getting the data like const {id} = wagbaCard?.data;

          // const {
          //   info: { id },
          // } = wagbaCard;
          const id = wagbaCard.card.card.info.id;
          console.log(wagbaCard);

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

// const [searchMealName, setsearchMealName] = useState("");
// const [TopMealBtn, setTopMealBtn] = useState("Top Meals");
