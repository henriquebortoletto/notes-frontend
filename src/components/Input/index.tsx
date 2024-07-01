import * as S from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Input = ({ icon: Icon, ...rest }: InputProps) => (
  <S.Wrapper>
    {Icon && <Icon />}
    <S.Input {...rest} />
  </S.Wrapper>
);

export default Input;
