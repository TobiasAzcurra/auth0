import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const domain = "dev-u2p28evvujz0ed22.us.auth0.com",
	clientId = "MocQVarXmSFBIYLBCmu9p4inbdVb3UxS";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	//este proveedor va a almacenar el estado de autenticacion de nuestro usuario y tambien nos provee metodos para logear y deslogear nuestros usuarios y tambien un hook que es useAuth0
	<React.StrictMode>
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
		>
			<App />
		</Auth0Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
