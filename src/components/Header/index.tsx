import { useNavigate } from "react-router-dom";
import { RiShutDownLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

import { useSession } from "@/hooks/session";
import { env } from "@/env";

import * as S from "./styles";

const file = `${env.VITE_API_URL}/files`;

const Header = () => {
  const { user, signOut } = useSession();
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
    signOut();
  }

  return (
    <S.Wrapper>
      <S.Profile to="/profile" title="Ir para perfil">
        {user?.avatar ? (
          <S.Image
            src={`${file}/${user.avatar}`}
            alt={`Imagem de Perfil de ${user.name}`}
          />
        ) : (
          <S.Avatar>
            <FaUserCircle />
          </S.Avatar>
        )}
        <S.Content>
          <S.Welcome>Bem vindo,</S.Welcome>
          <S.UserName>{user?.name}</S.UserName>
        </S.Content>
      </S.Profile>
      <S.Logout onClick={handleLogout}>
        <RiShutDownLine />
      </S.Logout>
    </S.Wrapper>
  );
};

export default Header;
