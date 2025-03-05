import { ComponentProps } from "react";

import * as S from "./styles";

type InputProps = ComponentProps<"input"> & {
  $icon?: React.ElementType;
  $containerProps?: ComponentProps<"input">;
};

const Input = ({ $icon: Icon, $containerProps, ...props }: InputProps) => (
  <S.Wrapper {...$containerProps}>
    {Icon && <Icon />}
    <S.Input {...props} />
  </S.Wrapper>
);

export default Input;
