import { createContext, useState } from "react";

export const favoriteContext = createContext;
export function FavoriteProvider({ children }) {
  /* state for favorite movies number */
  const [favNumber, setFavNumber] = useState(0);
  return (
    <div>
      {/*  <favoriteContext.provider value={{ favNumber, setFavNumber }}>
        {children}
      </favoriteContext.provider> */}
    </div>
  );
}
