import { ComponentProps } from "react";
import { FiPlus, FiX } from "react-icons/fi";

import * as S from "./styles";

export interface NoteItemProps extends ComponentProps<"input"> {
  $isNewItem?: boolean;
  $value?: string;
}

const NoteItem = ({
  $isNewItem = false,
  $value,
  onClick,
  ...rest
}: NoteItemProps) => (
  <S.Wrapper $isNewItem={$isNewItem}>
    <S.Input
      type="text"
      defaultValue={$value}
      readOnly={!$isNewItem}
      {...rest}
    />
    <S.Button
      type="button"
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
    >
      {$isNewItem ? <FiPlus /> : <FiX />}
    </S.Button>
  </S.Wrapper>
);
export default NoteItem;
