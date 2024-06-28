import Header from "@/components/Header";
import Section from "@/components/Section";

import * as S from "./styles";

const Home = () => (
  <S.Wrapper>
    <Header />
    <main>
      <Section title="Links úteis">
        <S.Links>
          <S.Link>
            <S.Item href="#">https://www.rocketseat.com.br/</S.Item>
          </S.Link>
          <S.Link>
            <S.Item href="#">https://www.rocketseat.com.br/</S.Item>
          </S.Link>
        </S.Links>
      </Section>

      <Section title="Marcadores">
        <p>Marcadores</p>
      </Section>
    </main>
  </S.Wrapper>
);

export default Home;
