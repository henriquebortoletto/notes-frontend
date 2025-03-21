import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ButtonText from "@/components/ButtonText";
import Section from "@/components/Section";
import Header from "@/components/Header";
import Button from "@/components/Button";
import Tag from "@/components/Tag";

import { api } from "@/services";

import * as S from "./styles";

interface Note {
  id: number;
  title: string;
  description: string;
  user_id: number;
  created_at: string;
  updated_at: string;
  tags: Tag[];
  links: Link[];
}

interface Tag {
  id: number;
  name: string;
  user_id: number;
  note_id: number;
  created_at: string;
}

interface Link {
  id: number;
  url: string;
  note_id: number;
  created_at: string;
}

const Detail = () => {
  const [notes, setNotes] = useState<Note | null>(null);

  const params = useParams();
  const navigate = useNavigate();

  async function handleDeleteNoteById() {
    const confirm = window.confirm("Deseja realmente excluir esta nota?");

    if (!confirm) return;

    await api.delete(`/notes/${params.id}`);
    navigate(-1);
  }

  useEffect(() => {
    async function getNotesById() {
      const response = await api.get(`/notes/${params.id}`);
      setNotes(response.data);
    }

    getNotesById();
  }, [params.id]);

  return (
    <S.Wrapper>
      <Header />
      <S.Main>
        <S.Container>
          {notes && (
            <>
              <ButtonText
                title="Excluir a nota"
                onClick={handleDeleteNoteById}
              />
              <S.Heading>
                <S.HeadingTitle>{notes?.title}</S.HeadingTitle>
                <S.HeadingText>{notes?.description}</S.HeadingText>
              </S.Heading>

              {notes?.links && (
                <Section title="Links úteis">
                  <S.Links>
                    {notes?.links.map((link) => (
                      <S.Link key={link.id}>
                        <S.Item href={link.url} target="_blank">
                          {link.url}
                        </S.Item>
                      </S.Link>
                    ))}
                  </S.Links>
                </Section>
              )}

              {notes?.tags && (
                <Section title="Marcadores">
                  {notes?.tags.map((tag) => (
                    <Tag key={tag.id} title={tag.name} />
                  ))}
                </Section>
              )}
            </>
          )}

          {!notes && (
            <S.EmptyContainer>
              <S.EmptyText>
                Não foi possível encontrar a nota selecionada.
              </S.EmptyText>
            </S.EmptyContainer>
          )}

          <Button title="Voltar" onClick={() => navigate(-1)} />
        </S.Container>
      </S.Main>
    </S.Wrapper>
  );
};

export default Detail;
