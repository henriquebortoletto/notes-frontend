import { ComponentProps } from "react";

import * as S from "./styles";

export type ButtonTextProps = ComponentProps<"button"> & {
  $title: string;
  $isActive?: boolean;
};

const ButtonText = ({
  $title,
  $isActive = false,
  ...props
}: ButtonTextProps) => (
  <S.Wrapper $isActive={$isActive} type="button" {...props}>
    {$title}
  </S.Wrapper>
);
ButtonText.displayName = "ButtonText";

export default ButtonText;
