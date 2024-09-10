import { useState } from "react";
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";

import { useAuth } from "@/hooks/auth";
import Button from "@/components/Button";
import Input from "@/components/Input";

import * as S from "./styles";

interface UserData {
  name: string;
  email: string;
  password: string;
  old_password: string;
}

const Profile = () => {
  const { userAuth, userAuthUpdateProfile } = useAuth();
  const { user } = userAuth!;

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

  function userUpdateProfile(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data: UserData = {
      name,
      email,
      password: passwordNew,
      old_password: password,
    };

    userAuthUpdateProfile({ user: data });
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.ToBack to="/" title="Voltar para Home">
          <FiArrowLeft />
        </S.ToBack>
      </S.Header>

      <S.Form onSubmit={userUpdateProfile}>
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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          $icon={FiMail}
          $containerProps={{ style: { marginBottom: "2.4rem" } }}
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          $icon={FiLock}
          $containerProps={{ style: { marginBottom: "0.8rem" } }}
          type="password"
          placeholder="Senha atual"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          $icon={FiLock}
          $containerProps={{ style: { marginBottom: "2.4rem" } }}
          type="password"
          placeholder="Nova senha"
          onChange={(e) => setPasswordNew(e.target.value)}
        />

        <Button $title="Salvar" type="submit" />
      </S.Form>
    </S.Wrapper>
  );
};

export default Profile;
