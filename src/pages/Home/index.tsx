import { useState, useEffect } from "react";
import { FiPlus } from "react-icons/fi";

import ButtonText from "@/components/ButtonText";
import Section from "@/components/Section";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Note from "@/components/Note";

import { api } from "@/services";
import * as S from "./styles";

type Tag = {
  id: number;
  name: string;
  user_id: number;
  note_id: number;
  created_at: string;
};

const Home = () => {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    async function getAllTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    getAllTags();
  }, []);

  return (
    <S.Wrapper>
      <Header />
      <S.Brand>
        <S.Title>Rocketnotes</S.Title>
      </S.Brand>
      <S.Aside>
        <S.Menu>
          <S.Item>
            <ButtonText $title="Todos" $isActive />
          </S.Item>
          {tags.map((tag) => (
            <S.Item key={tag.id}>
              <ButtonText $title={tag.name} />
            </S.Item>
          ))}
        </S.Menu>
      </S.Aside>
      <S.Search>
        <Input type="text" placeholder="Pesquisar pelo título" />
      </S.Search>
      <S.Content>
        <Section $title="Minhas notas">
          <Note $title="React Modal" $tags={["react"]} />
          <Note $title="Exemplo de Middleware" $tags={["express", "nodejs"]} />
        </Section>
      </S.Content>
      <S.NewNote to="/create">
        <FiPlus size={24} />
        Criar Nota
      </S.NewNote>
    </S.Wrapper>
  );
};

export default Home;
