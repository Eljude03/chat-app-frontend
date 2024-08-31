// src/authConfig.js
import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "2b0313fd-7b03-4c34-841d-29365655c63b",
    authority: "https://login.microsoftonline.com/2e069469-ca31-4701-b826-329ff86da9a5",
    redirectUri: "http://localhost:3001",
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);
