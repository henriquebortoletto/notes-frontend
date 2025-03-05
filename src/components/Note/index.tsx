import Tag from "@/components/Tag";
import * as S from "./styles";

type NoteProps = {
  $title: string;
  $tags: string[];
};

const Note = ({ $title, $tags }: NoteProps) => (
  <S.Wrapper to="/detail/1">
    <S.Heading>{$title}</S.Heading>
    {$tags.map((tag) => (
      <Tag key={tag} $title={tag} />
    ))}
  </S.Wrapper>
);
Note.displayName = "Note";

export default Note;
