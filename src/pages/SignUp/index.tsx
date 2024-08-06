import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { api } from "@/services";

import Button from "@/components/Button";
import Input from "@/components/Input";

import * as S from "./styles";

interface User {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name || !email || !password) {
      alert("Preencha todos os campos");
      return;
    }

    const user: User = {
      name,
      email,
      password,
    };

    api
      .post("/users", user)
      .then(() => {
        alert("Usuário criado com sucesso");
        navigate("/");
      })
      .catch((error) => {
        if (error.response.data.message) {
          alert(error.response.data.message);
        } else {
          alert("Ocorreu um erro inesperado");
        }
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
            $icon={FiUser}
            type="text"
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            $icon={FiMail}
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            $icon={FiLock}
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button $title="Cadastrar" type="submit" />
        </S.Form>
        <S.SignInLink to="/">Voltar para o login</S.SignInLink>
      </S.Box>
    </S.Wrapper>
  );
};

export default SignUp;
