import { contactForm } from "./Data";
import { Contact } from "../../components";

const ContactPage = () => {
  return (
    <>
     <Contact {...contactForm} />
    </>
  );
};

export default ContactPage;