import "../styles/globals.css";
import React, { useState, useEffect, createContext } from "react";
import Layout from "../Components/Layout.jsx";

export const Context = createContext();

const App = ({ Component, pageProps }) => {
  const [favorites, setFavorites] = useState([]);
  const [show, setShow] = useState(false);

  return (
    <Context.Provider
      value={{
        // FavoriteManga,
        favorites,
        setFavorites,
        show,
        setShow,
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context.Provider>
  );
};
export default App;
