import "./Component.css";

function SignUp(props){

    return(
        <div id='sign-up'>
            <div className="signUp-page">
                <div onClick={props.onClose}> X </div>
                <div>
                    <div>
                        <h2>Sign up</h2>
                        <p> <strong> or </strong>login to your account</p>
                    </div>
                    <div></div>
                </div>

                <div>
                    <form>
                        <input type='number' placeholder="Phone Number" />
                        <input type='text' placeholder="Number" />
                        <input type='email' placeholder="Email" />
                    </form>
                </div>

                <div>
                    <p>Have a referral code?</p>
                    <button>Continue</button>
                    <p>By creating an account, I accept the <strong>Terms & Conditions & Privacy Policy</strong></p>
                </div>
            </div>
        </div>
    )
}
export default SignUp;