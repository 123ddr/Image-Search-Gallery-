import React, { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

function ImageCard({ image }) {
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);

  const isFavorite = favorites.some((fav) => fav.id === image.id);

  return (
    <div className="image-card">
      <img
        src={image.urls?.small}
        alt={image.alt_description || "Image"}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <button onClick={() => (isFavorite ? removeFavorite(image.id) : addFavorite(image))}>
        {isFavorite ? "⭐ Unfavorite" : "☆ Favorite"}
      </button>
    </div>
  );
}

export default ImageCard;
