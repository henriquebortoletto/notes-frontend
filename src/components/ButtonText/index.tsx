import { ComponentProps } from "react";

import * as S from "./styles";

export type ButtonTextProps = {
  title: string;
  isActive?: boolean;
} & ComponentProps<"button">;

const ButtonText = ({ title, isActive = false, ...props }: ButtonTextProps) => (
  <S.Wrapper $isActive={isActive} type="button" {...props}>
    {title}
  </S.Wrapper>
);

export default ButtonText;
