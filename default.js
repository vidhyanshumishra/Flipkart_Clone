import { connect } from "mongoose";
import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";

const DefaultData = async() => {
  try {
    await Product.insertMany(products); 
    console.log("Data imported Succesfully")
  } catch (error) {
    console.log("error while inserting default data", error.message);
  }
};

export default DefaultData;