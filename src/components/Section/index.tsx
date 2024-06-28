import * as S from "./styles";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ children, title }: SectionProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    {children}
  </S.Wrapper>
);

export default Section;
