import { productsObjOne, productsObjTwo, productsObjThree, productsObjFour, productsObjFive, productsObjSix } from "./Data";
import { InfoSectionProducts } from "../../components";

const Products = () => {
  return (
    <>
     <InfoSectionProducts {...productsObjOne} />
     <InfoSectionProducts {...productsObjTwo} />
     <InfoSectionProducts {...productsObjThree} />
     <InfoSectionProducts {...productsObjFour} />
     <InfoSectionProducts {...productsObjFive} />
     <InfoSectionProducts {...productsObjSix} />
    </>
  );
};

export default Products;