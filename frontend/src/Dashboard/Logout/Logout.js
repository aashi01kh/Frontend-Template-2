import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";

const clientId = "448276558019-0obgku0jod6ri848vto7pa0a8idbve70.apps.googleusercontent.com"

function Logout() {

    const navigate = useNavigate();

    const onSuccess = () => {
        navigate("/login")
        console.log("Log out");
    }

    return (
        <div id="signOutButton">
            
            <GoogleLogout
                clientId={clientId}
                 buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;