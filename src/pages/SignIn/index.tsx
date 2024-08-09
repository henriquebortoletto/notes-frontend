import { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";

import { useAuth } from "@/hooks/auth";
import Button from "@/components/Button";
import Input from "@/components/Input";

import * as S from "./styles";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { userAuthLogin } = useAuth();

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email || !password) {
      return alert("Fill in all fields to login");
    }

    userAuthLogin({ email, password });
  }

  return (
    <S.Wrapper>
      <S.Box>
        <S.Heading>Rocket Notes</S.Heading>
        <S.Text>Aplicação para salvar e gerenciar seus links úteis.</S.Text>
        <S.Login>Faça seu login</S.Login>
        <S.Form onSubmit={handleFormSubmit}>
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
          <Button $title="Entrar" type="submit" />
        </S.Form>
        <S.SignUpLink to="/signup">Criar conta</S.SignUpLink>
      </S.Box>
      <S.Background />
    </S.Wrapper>
  );
};

export default SignIn;
