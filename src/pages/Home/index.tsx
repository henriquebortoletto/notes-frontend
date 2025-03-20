import { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";

import ButtonText from "@/components/ButtonText";
import Section from "@/components/Section";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Note from "@/components/Note";

import { api } from "@/services";

import * as S from "./styles";

interface Note {
  id: number;
  title: string;
  user_id: number;
  tags: Tag[];
}

interface Tag {
  id: number;
  name: string;
  user_id: number;
  note_id: number;
  created_at: string;
}

const Home = () => {
  const [search, setSearch] = useState<string>("");
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagSelected, setTagSelected] = useState<string[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);

  function handleSelectedTag(name: string) {
    if (name === "all") {
      setTagSelected([]);
      return;
    }

    const tagAlreadyExists = tagSelected.includes(name);

    if (!tagAlreadyExists) {
      setTagSelected((prev) => [...prev, name]);
      return;
    }

    const filterTags = tagSelected.filter((tag) => tag !== name);
    setTagSelected(filterTags);
  }

  useEffect(() => {
    async function getAllTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    getAllTags();
  }, []);

  useEffect(() => {
    async function getNotes() {
      const url = `/notes?title=${search}&tags=${tagSelected}`;
      const response = await api.get(url);
      setNotes(response.data);
    }

    getNotes();
  }, [tagSelected, search]);

  const enableIfHaveNotes = notes.length > 0;

  return (
    <S.Wrapper>
      <Header />
      <S.Brand>
        <S.Title>Rocketnotes</S.Title>
      </S.Brand>
      <S.Aside>
        <S.Teste>
          <S.Menu>
            <S.Item>
              <ButtonText
                title="Todos"
                isActive={enableIfHaveNotes && tagSelected.length === 0}
                onClick={() => enableIfHaveNotes && handleSelectedTag("all")}
              />
            </S.Item>
            {tags.map((tag) => (
              <S.Item key={tag.id}>
                <ButtonText
                  title={tag.name}
                  isActive={tagSelected.includes(tag.name)}
                  onClick={() => handleSelectedTag(tag.name)}
                />
              </S.Item>
            ))}
          </S.Menu>
        </S.Teste>
      </S.Aside>
      <S.Search>
        <Input
          type="text"
          placeholder="Pesquisar pelo título"
          onChange={(e) => enableIfHaveNotes && setSearch(e.target.value)}
        />
      </S.Search>
      <S.Content>
        {enableIfHaveNotes && (
          <Section title="Minhas notas">
            {notes.map((note) => (
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                tags={note.tags.map((tag) => tag.name)}
              />
            ))}
          </Section>
        )}

        {!enableIfHaveNotes && (
          <Section title="Minhas notas">
            <S.Empty>
              <S.EmptyText>Nenhuma nota encontrada</S.EmptyText>
            </S.Empty>
          </Section>
        )}
      </S.Content>
      <S.NewNote to="/create">
        <FiPlus size={24} />
        Criar Nota
      </S.NewNote>
    </S.Wrapper>
  );
};

export default Home;
