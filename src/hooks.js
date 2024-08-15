// hooks.js
import { useState } from "react";
import axios from "axios"; // Add this import
import { v1 as uuid } from "uuid"; // Add this import

export function useFlip(initialState = true) {
  const [isFlipped, setIsFlipped] = useState(initialState);
  const flip = () => {
    setIsFlipped((isUp) => !isUp);
  };

  return [isFlipped, flip];
}

export function useAxios(baseUrl) {
  const [data, setData] = useState([]);

  const addData = async (endpoint = "") => {
    const response = await axios.get(`${baseUrl}${endpoint}`);
    setData((data) => [...data, { ...response.data, id: uuid() }]);
  };

  return [data, addData];
}
