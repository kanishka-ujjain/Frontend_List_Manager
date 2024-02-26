import { myAxios } from "./Helper";

export const signUp = (user) => {
  return myAxios.post("/save", user).then((response) => response.data);
};

export const login = (user) => {
  return myAxios.post("/auth", user).then((response) => response.data);
};
