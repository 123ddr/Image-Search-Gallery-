import React, { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import { FavoritesProvider } from "./context/FavoritesContext";
import "./App.css";

function App() {
  const [images, setImages] = useState([]);
  
  const UNSPLASH_KEY = "TftW2G4uMJz2ognRharg3SyBTT0K-npHad-mrAPeFzk";

  const searchImages = async (term) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${term}&client_id=${UNSPLASH_KEY}`
      );
      if (!response.ok) throw new Error("Failed to fetch images");

      const data = await response.json();
      console.log("Fetched images:", data.results); 
      setImages(data.results || []);
    } catch (error) {
      console.error("Error fetching images:", error);
      setImages([]);
    }
  };

  return (
    <FavoritesProvider>
      <div className="App">
        <Header />
        <SearchBar onSearch={searchImages} />
        <ImageList images={images} />
      </div>
    </FavoritesProvider>
  );
}

export default App;
