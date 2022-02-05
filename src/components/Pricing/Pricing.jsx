import React from 'react';
import { Button } from '../../globalStyles';
import { GiMouthWatering, GiGlassCelebration } from 'react-icons/gi';
import { RiBrushFill } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Makeups</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <RiBrushFill />
                </PricingCardIcon>
                <PricingCardPlan>Bridal</PricingCardPlan>
                <PricingCardCost>$200</PricingCardCost>
                <PricingCardLength>per makeup</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>One bride</PricingCardFeature>
                  <PricingCardFeature>Home makeup: Yes!</PricingCardFeature>
                  <PricingCardFeature>Distance: within 20 miles</PricingCardFeature>
                </PricingCardFeatures>
                <Button btnBg>Book</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                <GiMouthWatering />
                </PricingCardIcon>
                <PricingCardPlan>Halloweeen</PricingCardPlan>
                <PricingCardCost>$300</PricingCardCost>
                <PricingCardLength>per makeup</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>One person</PricingCardFeature>
                  <PricingCardFeature>Home makeup: Yes!</PricingCardFeature>
                  <PricingCardFeature>Distance: 70 miles</PricingCardFeature>
                </PricingCardFeatures>
                <Button btnBg>Book</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                <GiGlassCelebration />
                </PricingCardIcon>
                <PricingCardPlan>New Years Eve</PricingCardPlan>
                <PricingCardCost>$150</PricingCardCost>
                <PricingCardLength>per makeup</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>One person</PricingCardFeature>
                  <PricingCardFeature>Home makeup: Yes!</PricingCardFeature>
                  <PricingCardFeature>Distance: 10 miles</PricingCardFeature>
                </PricingCardFeatures>
                <Button btnBg>Book</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;