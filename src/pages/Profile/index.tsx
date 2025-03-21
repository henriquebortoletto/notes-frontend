import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

import Button from "@/components/Button";
import Input from "@/components/Input";

import { useSession } from "@/hooks/session";
import { env } from "@/env";

import * as S from "./styles";

interface UserData {
  name: string;
  email: string;
  password: string;
  old_password: string;
}

const file = `${env.VITE_API_URL}/files`;

const Profile = () => {
  const { user, updateUser } = useSession();

  const [name, setName] = useState<string>(user?.name ?? "");
  const [email, setEmail] = useState<string>(user?.email ?? "");

  const [password, setPassword] = useState<string>("");
  const [passwordNew, setPasswordNew] = useState<string>("");

  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatar, setAvatar] = useState<string | null>(() => {
    if (user?.avatar) return `${file}/${user.avatar}`;
    return null;
  });

  const navigate = useNavigate();

  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const user: UserData = {
      name,
      email,
      password: passwordNew,
      old_password: password,
    };

    updateUser({ user, avatar: avatarFile });
  }

  function handleChangeAvatar(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) return;
    setAvatarFile(file);

    const avatarUrl = URL.createObjectURL(file);
    setAvatar(avatarUrl);
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.ToBack
          role="button"
          title="Voltar para Home"
          onClick={() => navigate(-1)}
        >
          <FiArrowLeft />
        </S.ToBack>
      </S.Header>

      <S.Form onSubmit={handleOnSubmit}>
        <S.Avatar>
          {!avatar ? (
            <S.Placeholder>
              <FaUserCircle />
            </S.Placeholder>
          ) : (
            <S.Image src={avatar} alt={`Imagem de Perfil de ${user?.name}`} />
          )}
          <S.Label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleChangeAvatar} />
          </S.Label>
        </S.Avatar>

        <Input
          icon={FiUser}
          containerProps={{ style: { marginBottom: "0.8rem" } }}
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          icon={FiMail}
          containerProps={{ style: { marginBottom: "2.4rem" } }}
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          icon={FiLock}
          containerProps={{ style: { marginBottom: "0.8rem" } }}
          type="password"
          placeholder="Senha atual"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Input
          icon={FiLock}
          containerProps={{ style: { marginBottom: "2.4rem" } }}
          type="password"
          placeholder="Nova senha"
          onChange={(e) => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" type="submit" />
      </S.Form>
    </S.Wrapper>
  );
};
export default Profile;
