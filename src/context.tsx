import { useContext, createContext, useState } from "react";

export const text = () => {
  return <div>context</div>;
};
export const api = async () => {
  return fetch("https://62ce971b826a88972dfe8e8a.mockapi.io/api/packages")
    .then((response) => response.json())
    .then((json) => json);
};
export const contextValue = {
  text: text,
  api1: api,
};

export const Context = createContext({});
