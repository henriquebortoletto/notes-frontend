import { FiPlus } from "react-icons/fi";

import Header from "@/components/Header";
import ButtonText from "@/components/ButtonText";

import * as S from "./styles";

const Home = () => (
  <S.Wrapper>
    <Header />
    <S.Brand>
      <S.Title>Rocketnotes</S.Title>
    </S.Brand>
    <S.Aside>
      <S.Menu>
        <S.Item>
          <ButtonText title="Todos" isActive />
        </S.Item>
        <S.Item>
          <ButtonText title="Frontend" />
        </S.Item>
        <S.Item>
          <ButtonText title="Node" />
        </S.Item>
        <S.Item>
          <ButtonText title="React" />
        </S.Item>
      </S.Menu>
    </S.Aside>
    <S.Search>search</S.Search>
    <S.Content>content</S.Content>
    <S.NewNote>
      <FiPlus size={24} />
      Criar Nota
    </S.NewNote>
  </S.Wrapper>
);

export default Home;
