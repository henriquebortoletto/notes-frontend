import * as S from "./styles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  containerProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const Input = ({ icon: Icon, containerProps, ...rest }: InputProps) => (
  <S.Wrapper {...containerProps}>
    {Icon && <Icon />}
    <S.Input {...rest} />
  </S.Wrapper>
);

export default Input;
