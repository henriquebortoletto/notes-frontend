import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";

import Input from "@/components/Input";
import Button from "@/components/Button";

import * as S from "./styles";

const Profile = () => (
  <S.Wrapper>
    <S.Header>
      <S.Link href="/" title="Voltar">
        <FiArrowLeft />
      </S.Link>
    </S.Header>

    <S.Form>
      <S.Avatar>
        <S.Image
          src="https://github.com/henriquebortoletto.png"
          alt="Imagem de Perfil de Henrique Bortoletto"
        />
        <S.Label htmlFor="avatar">
          <FiCamera />
          <input type="file" id="avatar" />
        </S.Label>
      </S.Avatar>

      <Input
        $icon={FiUser}
        $containerProps={{ style: { marginBottom: "0.8rem" } }}
        type="text"
        placeholder="Nome"
      />

      <Input
        $icon={FiMail}
        $containerProps={{ style: { marginBottom: "2.4rem" } }}
        type="email"
        placeholder="E-mail"
      />

      <Input
        $icon={FiLock}
        $containerProps={{ style: { marginBottom: "0.8rem" } }}
        type="password"
        placeholder="Senha atual"
      />

      <Input
        $icon={FiLock}
        $containerProps={{ style: { marginBottom: "2.4rem" } }}
        type="password"
        placeholder="Nova senha"
      />

      <Button $title="Salvar" />
    </S.Form>
  </S.Wrapper>
);

export default Profile;
