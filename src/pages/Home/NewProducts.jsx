import { useEffect, useState } from "react";
import axios from "axios";
import ProductSlider from "../../components/Slider/ProductSlider";
import SectionTitle from "../../components/Title/SectionTitle";

const NewProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productLoad = async () => {
      try {
        const response = await axios.get("/products.json");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data from the API:", error);
      }
    };

    productLoad();
  }, []);

  return (
    <div className="my-container py-24">
      {/* <SectionTitle title={"New Collection"} /> */}
      <ProductSlider items={products}></ProductSlider>
    </div>
  );
};

export default NewProducts;
