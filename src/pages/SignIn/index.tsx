import { FiMail, FiLock } from "react-icons/fi";

import Button from "@/components/Button";
import Input from "@/components/Input";

import * as S from "./styles";

const SignIn = () => (
  <S.Wrapper>
    <S.Box>
      <S.Heading>Rocket Notes</S.Heading>
      <S.Text>Aplicação para salvar e gerenciar seus links úteis.</S.Text>
      <S.Login>Faça seu login</S.Login>
      <S.Form>
        <Input $icon={FiMail} type="email" placeholder="E-mail" />
        <Input $icon={FiLock} type="password" placeholder="Senha" />
        <Button $title="Entrar" type="submit" />
      </S.Form>
      <S.SignUpLink to="/signup">Criar conta</S.SignUpLink>
    </S.Box>
    <S.Background />
  </S.Wrapper>
);

export default SignIn;
