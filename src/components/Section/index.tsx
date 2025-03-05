import * as S from "./styles";

type SectionProps = {
  $title: string;
  children: React.ReactNode;
};

const Section = ({ $title, children }: SectionProps) => (
  <S.Wrapper>
    <S.Title>{$title}</S.Title>
    {children}
  </S.Wrapper>
);
Section.displayName = "Section";

export default Section;
