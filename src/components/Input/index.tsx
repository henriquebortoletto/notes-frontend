import { ComponentProps } from "react";

import * as S from "./styles";

type InputProps = {
  icon?: React.ElementType;
  containerProps?: ComponentProps<"input">;
} & ComponentProps<"input">;

const Input = ({ icon: Icon, containerProps, ...props }: InputProps) => (
  <S.Wrapper {...containerProps}>
    {Icon && <Icon />}
    <S.Input {...props} />
  </S.Wrapper>
);

export default Input;
