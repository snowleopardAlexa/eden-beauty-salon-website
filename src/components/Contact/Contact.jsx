import { Form, FormGroup, Label, Input, Message } from './Contact.elements';
import { Container } from '../../globalStyles';

const Contact = () => {
  return (
    <Container>
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
        </FormGroup>
    </Form>
    </Container>  
  );
}

export default Contact;