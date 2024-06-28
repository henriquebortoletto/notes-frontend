import Header from "@/components/Header";
import Section from "@/components/Section";
import Tag from "@/components/Tag";

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
        <Tag title="express" />
        <Tag title="nodejs" />
      </Section>
    </main>
  </S.Wrapper>
);

export default Home;
