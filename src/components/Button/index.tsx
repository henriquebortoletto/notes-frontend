import * as S from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $title: string;
  $loading?: boolean;
}

const Button = ({ $title, $loading = false, ...rest }: ButtonProps) => (
  <S.Button type="button" disabled={$loading} {...rest}>
    {$loading ? "Carregando..." : $title}
  </S.Button>
);

export default Button;
