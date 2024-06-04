import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import keycloak, { handleKeycloakEvent } from "./security/KeycloakService.ts";
import { ReactKeycloakProvider } from '@react-keycloak/web'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <ReactKeycloakProvider
    authClient={keycloak}
    onEvent={(event) => {
      handleKeycloakEvent(event);
    }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReactKeycloakProvider>
)