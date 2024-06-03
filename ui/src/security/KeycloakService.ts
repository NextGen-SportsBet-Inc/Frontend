import Keycloak from "keycloak-js";

const keycloak = new Keycloak(
    {
        "url": "http://localhost:8080/keycloak/",
        "realm": "SportsBetInc",
        "clientId": "sports-bet-api"
    }
);

export const handleKeycloakEvent = (event: any) => {
    switch (event) {
        case "onAuthSuccess":
            console.log("Successfully authenticated.");
            break;
        case "onAuthError":
            console.log("Failed to authenticate.");
            break;
        case "onAuthRefreshError":
            console.log("Failed to refresh token.");
            break;
        case "onAuthLogout":
            console.log("Logged out.");
            break;
        case "onTokenExpired":
            console.log("Token expired.");
            break;
    }
};

export default keycloak;