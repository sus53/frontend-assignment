import axios from "axios";

const URL = "https://fakestoreapi.com/products";

export const GetProduct = () => axios.get(URL); 