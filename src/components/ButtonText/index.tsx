import * as S from "./styles";

interface ButtonTextProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const ButtonText = ({ title, ...rest }: ButtonTextProps) => (
  <S.Wrapper type="button" {...rest}>
    {title}
  </S.Wrapper>
);

export default ButtonText;
