import SignUp from "./SignUp";
import "./Component.css";
import { useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const [showSignUpPage, setShowSignUpPage] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
  const router = useNavigate();

  function display(value) {
    if(value === 's'){
      setShowSignUpPage(true);
      setShowLoginPage(false);
    }
    else{
      setShowLoginPage(true);
      setShowSignUpPage(false);
    }
    
  }
  function closePage(value) {
    if(value === 's'){
      setShowSignUpPage(false);
    }
    else{
      setShowLoginPage(false);
    }
    
  }
  function callIndex(){
    router('/index');
  }
  return (
    <div>
      {showSignUpPage && <SignUp onClose={() => closePage('s')} />}
      {showLoginPage && <Login onClose={() => closePage('l')} />}

      <div id="homepage">
        <div>
          <div className="Nav-top-first">
            <div>
              <img
                src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Symbol.png"
                alt="swiggy"
              />
            </div>
            <div>
              <button onClick={() => display('l')}>Login</button>
              <button onClick={() => display('s')}>SignUp</button>
            </div>
          </div>

          <div className="Nav-top-sec">
            <div>
              <h1>HUNGRY ?</h1>
              <p>Order food from favourite restaurants near you.</p>
            </div>
            <div>
              <input type="text" placeholder="Enter Your Delivery Location" />
              <div>Locate Me</div>
              <button onClick={() => callIndex()}>FIND FOOD</button>
            </div>
          </div>

          <div className="Nav-top-third">
            <p>POPULAR CITIES IN INDIA</p>
            <p>
              <strong>Ahmedabad</strong> Bangalore <strong>Chennai</strong>{" "}
              Delhi <strong>Gurgaon</strong> Hyderabad <strong>Kolkata</strong>{" "}
              Mumbai <strong>Pune &more.</strong>
            </p>
          </div>
        </div>

        <div></div>

        <div>
          <div className="icons">
            <div>
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
                alt=""
              />
            </div>
            <div>
              <h2>No Minimum Order</h2>
              <p>
                Order in for yourself or for the group, with no restrictions on
                order value
              </p>
            </div>
          </div>

          <div className="icons">
            <div>
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
                alt=""
              />
            </div>
            <div>
              <h2>Live Order Tracking</h2>
              <p>
                Know where your order is at all times, from the restaurant to
                your doorstep
              </p>
            </div>
          </div>

          <div className="icons">
            <div>
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
                alt=""
              />
            </div>
            <div>
              <h2>Lightning-Fast Delivery</h2>
              <p>
                Experience Swiggy's superfast delivery for food delivered fresh
                & on time
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
