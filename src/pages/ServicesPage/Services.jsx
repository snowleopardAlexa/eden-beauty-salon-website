import { homeObjOne } from "./Data";
import { InfoSectionServices, Pricing } from "../../components";

const Home = () => {
  return (
    <>
     <InfoSectionServices {...homeObjOne} />
     <Pricing />
    </>
  );
};

export default Home;