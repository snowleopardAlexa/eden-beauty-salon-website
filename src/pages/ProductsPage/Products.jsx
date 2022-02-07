import { productsObjOne } from "./Data";
import { InfoSectionProducts } from "../../components";

const Products = () => {
  return (
    <>
     <InfoSectionProducts {...productsObjOne} />
    </>
  );
};

export default Products;