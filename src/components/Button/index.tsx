import { ComponentProps } from "react";

import * as S from "./styles";

type ButtonProps = {
  title: string;
  loading?: boolean;
} & ComponentProps<"button">;

const Button = ({ title, loading = false, ...props }: ButtonProps) => (
  <S.Button type="button" disabled={loading} {...props}>
    {loading ? "Carregando..." : title}
  </S.Button>
);

export default Button;
