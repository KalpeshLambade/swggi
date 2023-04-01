import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const SingleProductPage = () => {
  const data = useParams();
  const [singleProduct, setSingleProduct] = useState();

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then((res) => res.json())
      .then((Json) => Json.drinks)
      .then((json) => json.filter((obj) => obj.idDrink === data.id))
      .then((data) => setSingleProduct(data[0]));
  }, []);

  return (
    <div id="singleproduct">
      <Navbar />
      <div className="singleproduct-display">
        <div>
          <div>Home /Mumbai /Malad West/ MM Mithaiwala</div>
          <div className="singleproduct-icon">
            <i className="fa-regular fa-heart"></i>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div>
          <div className="singleproduct-info">
            <h2>MM Mithaiwala</h2>
            <p>Sweets, Snacks</p>
            <p>Malad West 1.7 km</p>
            <div>
              <div>
                <img
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/v1648635511/Delivery_fee_new_cjxumu"
                  alt="bicycle"
                />
              </div>
              <p>1.7 kms | ₹31 Delivery fee will apply</p>
            </div>
          </div>
          <div className="singleproduct-rating">
            <p>⭐ 4.4</p>
            <p>10K+ ratings</p>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* {singleProduct && (
        <div>
          <div>
            <div>
              <img src={singleProduct.strDrinkThumb} alt="drink-img" />
            </div>
            <h1>{singleProduct.strDrink}</h1>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default SingleProductPage;
