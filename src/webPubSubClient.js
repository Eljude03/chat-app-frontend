// src/WebPubSubClient.js
import { WebPubSubClient } from '@azure/web-pubsub-client'

const client = new WebPubSubClient("https://chat-app-evp.webpubsub.azure.com", {
  onMessage: (message) => {
    console.log("Received message:", message.data);
    // Update UI with the new message
  },
});

export const sendMessage = (message) => {
  client.send({ content: message });
};
