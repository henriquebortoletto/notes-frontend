import Tag from "@/components/Tag";
import * as S from "./styles";

interface NoteProps {
  $title: string;
  $tags: string[];
}

const Note = ({ $title, $tags }: NoteProps) => (
  <S.Wrapper>
    <S.Heading>{$title}</S.Heading>
    {$tags.map((tag) => (
      <Tag key={tag} $title={tag} />
    ))}
  </S.Wrapper>
);

export default Note;
