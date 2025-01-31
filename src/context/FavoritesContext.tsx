import React, { createContext, useContext, useEffect, useState } from "react";
import { Artwork } from "@/api/index";

interface FavoritesContextType {
  favorites: Artwork[];
  toggleFavorite: (artwork: Artwork) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Artwork[]>(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (artwork: Artwork) => {
    setFavorites((prev) => {
      const isAlreadyFavorite = prev.some((fav) => fav.id === artwork.id);
      return isAlreadyFavorite
        ? prev.filter((fav) => fav.id !== artwork.id)
        : [...prev, artwork];
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};