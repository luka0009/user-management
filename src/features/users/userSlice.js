import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Amanda", email: "amanda@gmail.com" },
  { id: "2", name: "James", email: "james@gmail.com" },
];

// ეს არის ლოქალ სთორიჯის კოდი(წამოღება)
const users =
  localStorage.getItem("users") !== null
    ? JSON.parse(localStorage.getItem("users"))
    : initialState;

const userSLice = createSlice({
  name: "users",
  initialState: users,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
      // ეს არის ლოქალ სთორიჯის კოდი(დამატება)
      localStorage.setItem("users", JSON.stringify(state));
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.find((user) => user.id == id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
        // ეს არის ლოქალ სთორიჯის კოდი(ჩასწორება)
        localStorage.setItem("users", JSON.stringify(state));
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const updatedState = state.filter((user) => user.id !== id);
      // ეს არის ლოქალ სთორიჯის კოდი(წაშლა)
      localStorage.setItem("users", JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const { addUser, editUser, deleteUser } = userSLice.actions;
export const userReducer = userSLice.reducer;
