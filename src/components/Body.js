import FoodCard, { withPromotedLabel } from "./FoodCard";
import resCardData from "../apidata/apiData";
import { useState, useEffect } from "react";
import useOnlineStatus from "../apidata/useOnlineStatus";
import Shimmer from "./Shimmer";
import { data, Link } from "react-router";

const Body = () => {
  // const [resCards, setResCard] = useState(resCardData);
  const onlineStatus = useOnlineStatus();
  const arr = useState(resCardData);
  const [filteredFoodCards, setFilteredFoodCards] = useState(resCardData);
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

  // const FoodCardPromoted = withPromotedLabel(FoodCard);

  useEffect(() => {
    // fetchData();

    setResCard(resCardData);
    setFilteredFoodCards(resCardData);
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com//dapi/restaurants/list/v5?lat=28.6110886&lng=77.2345184&collection=83631&tags=layout_CCS_Pizza"
      );

      console.log(response);

      //https://www.swiggy.com/city/bangalore/la-pinoz-pizza-koramangala-rest59627?restaurant_id=59627&source=collection&query=Pizza
      const resJson = await response.json();

      // console.log(resJson);
      const cards = resJson.data.cards;
      cards.splice(0, 3);
      // const pageheader = cards.splice(0, 3);

      // console.log(cards);
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
      <div className="flex flex-col gap-3 items-center pt-24">
        <div className="flex">
          <input
            type="text"
            name="search"
            placeholder="search a meal"
            className="w-4/3 p-2 rounded-tl-md rounded-bl-md placeholder-gray-200 outline-0 bg-gray-400"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setFilteredFoodCards(resCards);
            }}
          />
          <button
            className="p-2 rounded-tr-md rounded-br-md bg-gray-400"
            onClick={() => {
              const searchedMeal = resCards.filter((card) => {
                return data.name
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
              return card.data.avgRating > 4;
            });

            if (TopMealBtn === "Top Served") {
              setFilteredFoodCards(filteredCards);
              setTopMealBtn("All Meals");
            } else {
              setFilteredFoodCards(resCards);
              setTopMealBtn("Top Served");
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch p-24">
        {filteredFoodCards.map((wagbaCard) => {
          //instead of getting the data like const {id} = wagbaCard?.data;

          // const {
          //   info: { id },
          // } = wagbaCard;
          const id = wagbaCard.data.id;
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
