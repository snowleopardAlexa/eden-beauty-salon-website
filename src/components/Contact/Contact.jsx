import { ContainerTitle, Form, FormGroup, Label, Input, Message } from './Contact.elements';
import { Container, Button } from '../../globalStyles';

const Contact = ({ topLine }) => {
  return (
    <Container>
    <ContainerTitle>HELLO</ContainerTitle>    
    <Form>
        <FormGroup>
            <Label></Label>
            <Input></Input>
            <Message></Message>
        </FormGroup>
        <FormGroup>
            <Label></Label>
            <Input />
            <Message></Message>
            <Button>Send Message</Button>
        </FormGroup>
    </Form>
    </Container>  
  );
}

export default Contact;