import TextArea from "@/components/TextArea";
import NoteItem from "@/components/NoteItem";
import Section from "@/components/Section";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Input from "@/components/Input";

import * as S from "./styles";

const Create = () => (
  <S.Wrapper>
    <Header />
    <S.Main>
      <S.Container>
        <S.Heading>
          <S.HeadingTitle>Criar nota</S.HeadingTitle>
          <S.HeadingLink to="/">voltar</S.HeadingLink>
        </S.Heading>
        <S.Form>
          <Input type="text" placeholder="Título" />
          <TextArea placeholder="Observações" />
          <Section $title="Links úteis">
            <S.SectionLinks>
              <NoteItem $value="https://www.rocketseat.com.br" />
              <NoteItem $isNewItem placeholder="Novo link" />
            </S.SectionLinks>
          </Section>
          <Section $title="Marcadores">
            <S.SectionMarkers>
              <NoteItem $value="react" />
              <NoteItem $value="react" />
              <NoteItem $value="react" />
              <NoteItem $value="react" />
              <NoteItem $isNewItem placeholder="Novo marcador" />
            </S.SectionMarkers>
          </Section>
          <Button $title="Salvar" type="submit" />
        </S.Form>
      </S.Container>
    </S.Main>
  </S.Wrapper>
);

export default Create;
