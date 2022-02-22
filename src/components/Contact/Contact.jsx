import { ContainerTitle, ContainerSubtitle, ContainerText, Form, FormGroup, Label, Input, Message } from './Contact.elements';
import { Container, Button } from '../../globalStyles';

const Contact = ({ title, subtitle, bottomLine }) => {
  return (
    <Container>
    <ContainerTitle>{title}</ContainerTitle>    
    <ContainerSubtitle>{subtitle}</ContainerSubtitle>
    <ContainerText>{bottomLine}</ContainerText>
    <Form>
        <FormGroup>
            <Label>Name</Label>
            <Input></Input>
            <Message></Message>
        </FormGroup>
        <FormGroup>
            <Label>Email</Label>
            <Input />
        </FormGroup>
        <FormGroup>
            <Label>Message</Label>
            <Input />
            <Message></Message>
            <Button>Send Message</Button>
        </FormGroup>
    </Form>
    </Container>  
  );
}

export default Contact;