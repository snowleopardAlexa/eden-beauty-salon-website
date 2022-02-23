import {
  ProductsSec,
  ProductsRow,
  ProductColumn,
  ProductsTextWrapper,
  ProductsTitle,
  ProductsHeading,
  ProductsSubtitle,
  ProductImgWrapper,
  ProductPrice,
  ContainerTitle,
  Img,
} from "./InfoSectionProducts.elements";
import { Container } from "../../globalStyles";

const InfoSectionProducts = ({
  img,
  alt,
  topLine,
  headline,
  description,
  price,
  title,
}) => {
  return (
    <>
    <ContainerTitle>{topLine}</ContainerTitle>
     <Container>
       <ProductsSec>
          <Container>
            <ProductsRow>
            <ProductColumn>
                <ProductImgWrapper>
                  <Img src={img} alt={alt} />
                </ProductImgWrapper>
              </ProductColumn>
              <ProductColumn>
                <ProductsTextWrapper>
                  <ProductsTitle>{title}</ProductsTitle>
                  <ProductsHeading>{headline}</ProductsHeading>
                  <ProductsSubtitle>{description}</ProductsSubtitle>
                  <ProductPrice>{price}</ProductPrice>
                </ProductsTextWrapper>
              </ProductColumn>
            </ProductsRow>
          </Container>
        </ProductsSec>
      </Container>
      </>
  );
};

export default InfoSectionProducts;
