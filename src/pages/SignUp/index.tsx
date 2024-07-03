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
        <Input type="text" placeholder="Nome" icon={FiUser} />
        <Input type="email" placeholder="E-mail" icon={FiMail} />
        <Input type="password" placeholder="Senha" icon={FiLock} />
        <Button type="submit" title="Cadastrar" />
      </S.Form>
      <S.Link>Voltar para o login</S.Link>
    </S.Box>
  </S.Wrapper>
);

export default SignUp;
