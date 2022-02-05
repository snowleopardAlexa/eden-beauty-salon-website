import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import { InfoSection, Pricing } from "../../components";

const Home = () => {
  return (
    <>
     <InfoSection {...homeObjOne} />
     <InfoSection {...homeObjTwo} />
     <InfoSection {...homeObjThree} />
     <InfoSection {...homeObjFour} />
     <Pricing />
    </>
  );
};

export default Home;
