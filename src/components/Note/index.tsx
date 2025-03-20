import Tag from "@/components/Tag";
import * as S from "./styles";

type NoteProps = {
  id: number;
  title: string;
  tags: string[];
};

const Note = ({ id, title, tags }: NoteProps) => (
  <S.Wrapper to={`/detail/${id}`}>
    <S.Heading>{title}</S.Heading>
    {tags.map((tag) => (
      <Tag key={tag} title={tag} />
    ))}
  </S.Wrapper>
);

export default Note;
