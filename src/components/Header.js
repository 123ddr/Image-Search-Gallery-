import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function Header() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <header className="header">
      <h1>Image Search Gallery</h1>
      <p>⭐ Favorites: {favorites.length}</p>
    </header> 
  );
}

export default Header;
