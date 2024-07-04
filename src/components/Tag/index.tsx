import * as S from "./styles";

interface TagProps {
  $title: string;
}

const Tag = ({ $title }: TagProps) => <S.Wrapper>{$title}</S.Wrapper>;

export default Tag;
