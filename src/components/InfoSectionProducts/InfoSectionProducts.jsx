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
  Img,
} from "./InfoSectionProducts.elements";
import { Container } from "../../globalStyles";

const InfoSectionProducts = ({
  img,
  alt,
  color,
  start,
  imgStart,
  topLine,
  headline,
  description,
  price,
}) => {
  return (
    <>
      <>
        <ProductsSec>
          <Container>
            <ProductsRow imgStart={imgStart}>
              <ProductColumn>
                <ProductsTextWrapper>
                  <ProductsTitle>{topLine}</ProductsTitle>
                  <ProductsHeading>{headline}</ProductsHeading>
                  <ProductsSubtitle>{description}</ProductsSubtitle>
                  <ProductPrice>{price}</ProductPrice>
                </ProductsTextWrapper>
              </ProductColumn>
           
              <ProductColumn>
                <ProductImgWrapper start={start}>
                  <Img src={img} alt={alt} />
                </ProductImgWrapper>
              </ProductColumn>

              <ProductColumn>
                <ProductsTextWrapper>
                  <ProductsTitle>{topLine}</ProductsTitle>
                  <ProductsHeading>{headline}</ProductsHeading>
                  <ProductsSubtitle>{description}</ProductsSubtitle>
                  <ProductPrice>{price}</ProductPrice>
                </ProductsTextWrapper>
              </ProductColumn>
         
              <ProductColumn>
                <ProductImgWrapper start={start}>
                  <Img src={img} alt={alt} />
                </ProductImgWrapper>
              </ProductColumn>
            </ProductsRow>
          </Container>
        </ProductsSec>
      </>
    </>
  );
};

export default InfoSectionProducts;
