  
  
  const InfoSectionProducts = () => {
    return (
      <>
         <>
      <InfoSecProducts>
        <Container>
          <ProductsRow imgStart={imgStart}>
            <ProductsColumn>
              <ProductsTextWrapper>
                <ProductsTitle>{topLine}</ProductsTitle>
                <ProductsHeading>{headline}</ProductsHeading>
                <ProductsSubtitle>{description}</ProductsSubtitle>
                  <Link to="" style={{textDecoration: 'none'}}>
                    <Button 
                      big 
                      fontBig
                       btnBg={btnBg}
                       color={color}
                    >
                      {buttonLabel}
                    </Button>
                  </Link>
              </ProductsTextWrapper>
            </ProductsColumn>
            <InfoColumn>
            <ImgWrapper start={start}>
              <Img src={img} alt={alt} />
            </ImgWrapper>
            </InfoColumn>
          </ProductsRow>
        </Container>
      </InfoSecProducts>
    </>
      </>
    );
  };
  
  export default InfoSectionProducts;