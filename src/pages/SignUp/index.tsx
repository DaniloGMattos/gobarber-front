import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="GoBarber" />
          <form action="">
            <h1>Faça seu cadastro</h1>
            <Input name="name" icon={FiUser} type="text" placeholder="Name" />
            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Password"
            />
            <Button type="submit">Cadastrar</Button>
          </form>
          <a href="logIn">
            <FiArrowLeft />
            Voltar para logon
          </a>
        </Content>

        <Background />
      </Container>
    </>
  );
};

export default SignUp;
