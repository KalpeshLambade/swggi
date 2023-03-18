import { useEffect, useState } from "react";
import "./Component.css";


function Index() {
    const[data, setData] = useState();

    useEffect(() => {
        fetch("https://api.punkapi.com/v2/beers")
        .then(res => res.json())
        .then(Json => setData(Json));
    }, []);

  return (
    <div>
      <div class="navbar">
        <div>
          <div class="navbar-l">
            <div>
              <img
                src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg"
                alt="logo"
              />
            </div>
            <div>
              <p>
                <strong>Malad West </strong>
                Malad, Malad West, Mumbai, Mah....
              </p>
            </div>
          </div>

          <div class="navbar-r">
            <div>
              <p>Search</p>
            </div>
            <div>
              <p>
                Offers <sup> New</sup>
              </p>
            </div>
            <div>
              <p>Help</p>
            </div>
            <div>
              <p>Sign In </p>
            </div>
            <div>
              <p>Cart</p>
            </div>
          </div>
        </div>
      </div>
      <div class="index-top">
        <div>
          <div>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep"
              alt="food"
            />{" "}
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/zpkkdkmvlj5cuvqbc50t"
              alt="food"
            />{" "}
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/awurei8ypqkafoqay9ym"
              alt="food"
            />{" "}
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ifi2lbzxeu1hvsqrsip3"
              alt="food"
            />{" "}
          </div>
        </div>
      </div>
      <div class="display-food">
        <div>
            <div class="display-food-l"><p>1355 restaurants</p></div>
            <div class="display-food-r">
                <p>Relevance</p>
                <p>Delivery Time</p>
                <p>Rating</p>
                <p>Cost: Low To High</p>
                <p>Cost: High To Low</p>
                <p>Filters</p>
            </div>
        </div>
        <div class="display-food-data">
            {data && data.map((e) => (
                <div>
                <div><img src={e.image_url} alt="image"/></div>
                <p>{e.name}</p>
                <p>₹150 ({e.first_brewed})</p>
            </div>
            ))}
            {/* <div>
                <div><img src="" alt=""/></div>
                <p>Name</p>
                <p>Price</p>
            </div> */}
        </div>
      </div>

    </div>
  );
}
export default Index;
