import React, { createContext, useState } from "react";

export const FavoriteContext = createContext();

export const FavorteProvider = (props) => {
  const [favorite, setFavorite] = useState(
    localStorage.getItem("favorite") || null
  );

  const updateFavorite = (favorite) => {
    setFavorite(favorite);
    localStorage.setItem("favorite", favorite);
  };

  return (
    <FavoriteContext.Provider value={[favorite, updateFavorite]}>
      {props.children}
    </FavoriteContext.Provider>
  );
};
