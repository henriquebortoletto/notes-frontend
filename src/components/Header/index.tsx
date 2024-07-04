import { RiShutDownLine } from "react-icons/ri";

import * as S from "./styles";

const Header = () => (
  <S.Wrapper>
    <S.Profile to="/profile" title="Ir para perfil">
      <S.Image
        src="https://github.com/henriquebortoletto.png"
        alt="Imagem de Perfil de Henrique Bortoletto"
      />
      <S.Content>
        <S.Welcome>Bem vindo,</S.Welcome>
        <S.UserName>Henrique Bortoletto</S.UserName>
      </S.Content>
    </S.Profile>
    <S.Logout>
      <RiShutDownLine />
    </S.Logout>
  </S.Wrapper>
);

export default Header;
