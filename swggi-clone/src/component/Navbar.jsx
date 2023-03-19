import { useNavigate } from "react-router-dom";
function Navbar(){

  const route = useNavigate();
  function signinPage(){
    route('/signup')
  }
    return(
        <div className="navbar">
        <div>
          <div className="navbar-l">
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

          <div className="navbar-r">
            <div>
            <i class="fa-solid fa-magnifying-glass"></i>
              <p>Search</p>
            </div>
            <div>
            <i class="fa-solid fa-tags"></i>
              <p>
                Offers <sup> New</sup>
              </p>
            </div>
            <div>
            <i class="fa-regular fa-circle-question"></i>
              <p>Help</p>
            </div>
            <div onClick={() => {signinPage()}}>
            <i class="fa-regular fa-user"></i>
              <p>Sign In </p>
            </div>
            <div>
            <i class="fa-solid fa-cart-shopping"></i>
              <p>Cart</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Navbar;