import React from "react";
import { createRoot } from "react-dom/client";

// import Root from "./components/root";
// import configureStore from "./store/store";

/*
Write an entry point file that renders the `Root` component, with a `store`
prop passed in, inside the div with id 'root'.
*/

document.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("root"));

  //   const store = configureStore();
  //   window.store = store;
  //   return root.render(<Route store={store} />);

  return root.render(<h1>Hello World</h1>);
});
