import "../styles/globals.css";
import React, { useState, createContext } from "react";
import Layout from "../Components/Layout.jsx";

export const Context = createContext();

const App = ({ Component, pageProps }) => {
  const [favorites, setFavorites] = useState([]);
  const [show, setShow] = useState(false);

  const FavoriteManga = (manga) => {
    if (favorites.has(manga)) {
      return false;
    } else {
      setFavorites((prev) => [...prev, { ...manga }]);
    }
  };

  return (
    <Context.Provider
      value={{
        FavoriteManga,
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
