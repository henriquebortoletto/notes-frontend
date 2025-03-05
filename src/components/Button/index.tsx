import { ComponentProps } from "react";

import * as S from "./styles";

type ButtonProps = ComponentProps<"button"> & {
  $title: string;
  $loading?: boolean;
};

const Button = ({ $title, $loading = false, ...props }: ButtonProps) => (
  <S.Button type="button" disabled={$loading} {...props}>
    {$loading ? "Carregando..." : $title}
  </S.Button>
);

export default Button;
