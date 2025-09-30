import { useState, useEffect } from "react";

const useRestaurantMenuInfo = (restId) => {
  const [restInfo, setRestInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const resData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=" +
        restId
    );

    const json = await resData.json();

    setRestInfo(json?.data);
  };

  return restInfo;
};

export default useRestaurantMenuInfo;
