import {
  ProductsSec,
  ProductsRow,
  ProductsTextColumn,
  ProductsTextWrapper,
  ProductsTitle,
  ProductsHeading,
  ProductsSubtitle,
  Container,
  ProductsImgColumn,
  Link,
  Button,
  ProductImgWrapper,
  Img,
} from "./InfoSectionProducts.elements";

const InfoSectionProducts = ({
  img,
  alt,
  color,
  start,
  imgStart,
  topLine,
  headline,
  description,
  btnBg,
  buttonLabel,
}) => {
  return (
    <>
      <>
        <ProductsSec>
          <Container>
            <ProductsRow imgStart={imgStart}>
              <ProductsTextColumn>
                <ProductsTextWrapper>
                  <ProductsTitle>{topLine}</ProductsTitle>
                  <ProductsHeading>{headline}</ProductsHeading>
                  <ProductsSubtitle>{description}</ProductsSubtitle>
                  <Link to="" style={{ textDecoration: "none" }}>
                    <Button big fontBig btnBg={btnBg} color={color}>
                      {buttonLabel}
                    </Button>
                  </Link>
                </ProductsTextWrapper>
              </ProductsTextColumn>
              <ProductsImgColumn>
                <ProductImgWrapper start={start}>
                  <Img src={img} alt={alt} />
                </ProductImgWrapper>
              </ProductsImgColumn>
            </ProductsRow>
          </Container>
        </ProductsSec>
      </>
    </>
  );
};

export default InfoSectionProducts;
