import { FiMail, FiLock, FiUser } from "react-icons/fi";

import Button from "@/components/Button";
import Input from "@/components/Input";

import * as S from "./styles";

const SignUp = () => (
  <S.Wrapper>
    <S.Background />
    <S.Box>
      <S.Title>Rocket Notes</S.Title>
      <S.Description>
        Aplicação para salvar e gerenciar seus links úteis.
      </S.Description>
      <S.Login>Crie sua conta</S.Login>
      <S.Form>
        <Input $icon={FiUser} type="text" placeholder="Nome" />
        <Input $icon={FiMail} type="email" placeholder="E-mail" />
        <Input $icon={FiLock} type="password" placeholder="Senha" />
        <Button $title="Cadastrar" type="submit" />
      </S.Form>
      <S.SignInLink to="/">Voltar para o login</S.SignInLink>
    </S.Box>
  </S.Wrapper>
);

export default SignUp;
