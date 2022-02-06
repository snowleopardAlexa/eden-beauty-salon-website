import { servicesObjOne } from "./Data";
import { InfoSectionServices } from "../../components";

const Services = () => {
  return (
    <>
     <InfoSectionServices {...servicesObjOne} />
    </>
  );
};

export default Services;