import { configureStore } from "@reduxjs/toolkit";
import ProductData from "../pages/BoshSahifa/ProductData";

export const store=configureStore({
    reducer:{card:ProductData}
})