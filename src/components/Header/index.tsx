import { RiShutDownLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

import { useAuth } from "@/hooks/auth";
import * as S from "./styles";

const Header = () => {
  const { userAuth, userAuthLogout } = useAuth();
  const { user } = userAuth!;

  return (
    <S.Wrapper>
      <S.Profile to="/profile" title="Ir para perfil">
        {user.avatar ? (
          <S.Image
            src={`${import.meta.env.VITE_API_URL}/files/${user.avatar}`}
            alt={`Imagem de Perfil de ${user.name}`}
          />
        ) : (
          <S.Avatar>
            <FaUserCircle />
          </S.Avatar>
        )}
        <S.Content>
          <S.Welcome>Bem vindo,</S.Welcome>
          <S.UserName>{user.name}</S.UserName>
        </S.Content>
      </S.Profile>
      <S.Logout onClick={userAuthLogout}>
        <RiShutDownLine />
      </S.Logout>
    </S.Wrapper>
  );
};

export default Header;
