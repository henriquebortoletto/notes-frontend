import { useState } from "react";

import TextArea from "@/components/TextArea";
import NoteItem from "@/components/NoteItem";
import Section from "@/components/Section";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Input from "@/components/Input";

import * as S from "./styles";

const Create = () => {
  const [links, setLinks] = useState<string[]>([]);
  const [newLink, setNewLink] = useState<string>("");

  const [marker, setMarker] = useState<string[]>([]);
  const [newMarker, setNewMarker] = useState<string>("");

  function handleCreateLink() {
    setLinks((state) => [...state, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(link: string) {
    setLinks((state) => state.filter((item) => item !== link));
  }

  function handleCreateMarker() {
    setMarker((state) => [...state, newMarker]);
    setNewMarker("");
  }

  function handleRemoveMarker(marker: string) {
    setMarker((state) => state.filter((item) => item !== marker));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(">> [submit]", { links, marker });
  }

  return (
    <S.Wrapper>
      <Header />
      <S.Main>
        <S.Container>
          <S.Heading>
            <S.HeadingTitle>Criar nota</S.HeadingTitle>
            <S.HeadingLink to="/">voltar</S.HeadingLink>
          </S.Heading>
          <S.Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Título" />
            <TextArea placeholder="Observações" />
            <Section $title="Links úteis">
              <S.SectionLinks>
                {links.map((link) => (
                  <NoteItem
                    key={link}
                    $value={link}
                    onClick={() => handleRemoveLink(link)}
                  />
                ))}
                <NoteItem
                  $isNewItem
                  placeholder="Novo link"
                  value={newLink}
                  onChange={(e) => setNewLink(e.target.value)}
                  onClick={handleCreateLink}
                />
              </S.SectionLinks>
            </Section>
            <Section $title="Marcadores">
              <S.SectionMarkers>
                {marker.map((marker) => (
                  <NoteItem
                    key={marker}
                    $value={marker}
                    onClick={() => handleRemoveMarker(marker)}
                  />
                ))}
                <NoteItem
                  $isNewItem
                  placeholder="Novo marcador"
                  value={newMarker}
                  onChange={(e) => setNewMarker(e.target.value)}
                  onClick={handleCreateMarker}
                />
              </S.SectionMarkers>
            </Section>
            <Button $title="Salvar" type="submit" />
          </S.Form>
        </S.Container>
      </S.Main>
    </S.Wrapper>
  );
};

export default Create;
