import * as S from "./styles";

type TagProps = {
  $title: string;
};

const Tag = ({ $title }: TagProps) => <S.Wrapper>{$title}</S.Wrapper>;
Tag.displayName = "Tag";

export default Tag;
