import React from "react";
import { createRoot } from "react-dom/client";
import configureStore from "./store/store";
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const content = createRoot(document.getElementById("root"));

  let store;
  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = {
      entities: {
        users: {
          [id]: currentUser,
        },
      },
      session: { id },
    };
    store = configureStore(preloadedState);

    // Clean up after ourselves so we don't accidentally use the
    // global currentUser instead of the one in the store
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  return content.render(<Root store={store} />);
});
