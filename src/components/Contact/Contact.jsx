import { ContainerTitle, ContainerSubtitle, ContainerText, Form, FormGroup, Label, Input, Message } from './Contact.elements';
import { Container, Button } from '../../globalStyles';
import { useForm } from 'react-hook-form';

const Contact = ({ title, subtitle, bottomLine }) => {

  // form validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Container>
    <ContainerTitle>{title}</ContainerTitle>    
    <ContainerSubtitle>{subtitle}</ContainerSubtitle>
    <ContainerText>{bottomLine}</ContainerText>
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('Name', { required: true })} />
      {errors.Name && <p>Name is required.</p>}
      <Input {...register('Email', { required: true })} />
      {errors.Email && <p>Email is required.</p>}
      <Input {...register('Message', { required: true })} />
      {errors.Message && <p>Message is required.</p>}
      <Input type="submit" />
    </Form>
    </Container>  
  );
}

export default Contact;