import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { api } from "@/services";
import { Error } from "@/utils/Error";

import Button from "@/components/Button";
import Input from "@/components/Input";

import * as S from "./styles";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name || !email || !password) {
      return alert("Fill in all fields");
    }

    api
      .post("/users", {
        name,
        email,
        password,
      })
      .then(() => {
        alert("User created with success!");
        navigate("/");
      })
      .catch((error) => {
        alert(Error.message(error));
      });
  }

  return (
    <S.Wrapper>
      <S.Background />
      <S.Box>
        <S.Title>Rocket Notes</S.Title>
        <S.Description>
          Aplicação para salvar e gerenciar seus links úteis.
        </S.Description>
        <S.Login>Crie sua conta</S.Login>
        <S.Form onSubmit={handleFormSubmit}>
          <Input
            icon={FiUser}
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={FiMail}
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={FiLock}
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title="Cadastrar" type="submit" />
        </S.Form>
        <S.SignInLink to="/">Voltar para o login</S.SignInLink>
      </S.Box>
    </S.Wrapper>
  );
};

export default SignUp;
