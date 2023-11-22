// userSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allCharacters: [],
  filteredCharacters: [],
  sortOrder: "",
};

export const userSlice = createSlice({
  name: "Pokemon",
  initialState,
  reducers: {
    SET_ALL_CHARACTERS: (state, action) => {
      state.allCharacters = action.payload;
    },
    ORDER_BY_TYPE: (state, action) => {
      const typeToFilter = action.payload;
      state.filteredCharacters = state.allCharacters?.filter((char) =>
        char.types.some((tipo) => tipo.type.name === typeToFilter)
      );
    },

    ORDER: (state, action) => {
      const typeOrder = action.payload;
      state.sortOrder = typeOrder;

      state.filteredCharacters.sort((a, b) => {
        if (typeOrder === "Ascendente") {
          return a.name.localeCompare(b.name);
        }
        if (typeOrder === "Descendente") {
          return b.name.localeCompare(a.name);
        }
        return 0;
      });
    },
  },
});

export const { ORDER_BY_TYPE, SET_ALL_CHARACTERS, ORDER } = userSlice.actions;

export default userSlice.reducer;
