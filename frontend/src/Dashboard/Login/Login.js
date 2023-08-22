

import './Login.css'

import '@fortawesome/fontawesome-free/css/all.css';
import {GoogleLogin} from 'react-google-login'
import {useNavigate} from "react-router-dom"

const clientId = "448276558019-0obgku0jod6ri848vto7pa0a8idbve70.apps.googleusercontent.com";

const Login = () => {
  const navigate = useNavigate();
  // const [profilePictureUrl, setProfilePictureUrl] = useState("");
    
  
  const onSuccess= (res) =>{
       navigate("/")
        console.log("loginnnnnn" , res.profileObj);
    }
    const onFailure= (res) =>{
        console.log("login fail",res);
    }


  return (

<div className='login'>
  <div className='left-boxx'>
    <div className='left-textt'>Board.</div>
  </div>
  


 <div className='right-boxx'>
   <div className='bold-boxx'>Sign in</div>
   Sign in to your account

  

   <div className='outh'>
  <div id="signInButton">
    <GoogleLogin 
      clientId={clientId}
      buttonText='Login in with Google'
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
      render={renderProps => (
        <div
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          className="google-login-button"
        >
          <i className="fab fa-google icon"></i>
          <span className="button-text">Sign in with Google</span>
        </div>
      )}
    />
  </div>
  <div className='apple'>
    <i className="fab fa-apple icon"></i> Sign in with Apple
  </div>
</div>





   <div className='mainboxx'>
  <label>Email address</label>
  <input className="textarea-box" placeholder="Email"></input>

  <label>Password</label>
  <input className="textarea-box" type='password' placeholder="Password"></input>

  <p className="forget-password">Forget Password ?</p>
  <div className='black-boxx'>
    Sign In
   </div>
   </div>
  <div className='last'>Don't have an account? Register here</div>
 </div>

  

  {/* <div className='right-boxx'>
  <div id="signInButton">
      <GoogleLogin 
        clientId={clientId}
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
      />
    </div>
</div> */}



</div>


  )
}

export default Login
