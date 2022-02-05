import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import { InfoSectionHome, Pricing } from "../../components";

const Home = () => {
  return (
    <>
     <InfoSectionHome {...homeObjOne} />
     <InfoSectionHome {...homeObjTwo} />
     <InfoSectionHome {...homeObjThree} />
     <InfoSectionHome {...homeObjFour} />
     <Pricing />
    </>
  );
};

export default Home;
