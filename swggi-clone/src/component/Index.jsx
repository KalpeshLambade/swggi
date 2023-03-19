import { useEffect, useState } from "react";
import "./Component.css";
import Navbar from "./Navbar";


function Index() {
    const[data, setData] = useState();

    // console.log(data && data,"data heer");

    useEffect(() => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
        .then(res => res.json())
        .then(Json => setData(Json.drinks));
    }, []);

  return (
    <div>
      <Navbar/>
      <div className="index-top">
        <div>
          <div>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep"
              alt="food"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t"
              alt="food"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym"
              alt="food"
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3"
              alt="food"
            />
          </div>
        </div>
      </div>
      <div className="display-food">
        <div>
            <div className="display-food-l"><p>1355 restaurants</p></div>
            <div className="display-food-r">
                <p>Relevance</p>
                <p>Delivery Time</p>
                <p>Rating</p>
                <p>Cost: Low To High</p>
                <p>Cost: High To Low</p>
                <p>Filters</p>
            </div>
        </div>
        <div className="display-food-data">
            {data && data.map((e,i) => (
                <div key={i}>
                <div><img src={e.strDrinkThumb} alt="image"/></div>
                <p>{e.strDrink}</p>
                <p>₹150</p>
            </div>
            ))}
        </div>
      </div>

    </div>
  );
}
export default Index;
