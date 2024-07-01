import * as S from "./styles";

interface ButtonTextProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  isActive?: boolean;
}

const ButtonText = ({ title, isActive = false, ...rest }: ButtonTextProps) => (
  <S.Wrapper $isActive={isActive} type="button" {...rest}>
    {title}
  </S.Wrapper>
);

export default ButtonText;
