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
        type="text"
        placeholder="Nome"
        containerProps={{ style: { marginBottom: "0.8rem" } }}
        icon={FiUser}
      />

      <Input
        type="email"
        placeholder="E-mail"
        containerProps={{ style: { marginBottom: "2.4rem" } }}
        icon={FiMail}
      />

      <Input
        type="password"
        placeholder="Senha atual"
        containerProps={{ style: { marginBottom: "0.8rem" } }}
        icon={FiLock}
      />

      <Input
        type="password"
        placeholder="Nova senha"
        containerProps={{ style: { marginBottom: "2.4rem" } }}
        icon={FiLock}
      />

      <Button title="Salvar" />
    </S.Form>
  </S.Wrapper>
);

export default Profile;
