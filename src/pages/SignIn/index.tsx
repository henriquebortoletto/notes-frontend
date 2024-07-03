import { FiMail, FiLock } from "react-icons/fi";

import Button from "@/components/Button";
import Input from "@/components/Input";

import * as S from "./styles";

const SignIn = () => (
  <S.Wrapper>
    <S.Box>
      <S.Title>Rocket Notes</S.Title>
      <S.Description>
        Aplicação para salvar e gerenciar seus links úteis.
      </S.Description>
      <S.Login>Faça seu login</S.Login>
      <S.Form>
        <Input type="email" placeholder="E-mail" icon={FiMail} />
        <Input type="password" placeholder="Senha" icon={FiLock} />
        <Button type="submit" title="Entrar" />
      </S.Form>
      <S.Link>Criar conta</S.Link>
    </S.Box>
    <S.Background />
  </S.Wrapper>
);

export default SignIn;
