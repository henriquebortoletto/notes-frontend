import { ComponentProps } from "react";
import { FiPlus, FiX } from "react-icons/fi";

import * as S from "./styles";

export type NoteItemProps = ComponentProps<"input"> & {
  $isNewItem?: boolean;
  $value?: string;
};

const NoteItem = ({
  $isNewItem = false,
  $value,
  onClick,
  ...props
}: NoteItemProps) => (
  <S.Wrapper $isNewItem={$isNewItem}>
    <S.Input
      type="text"
      defaultValue={$value}
      readOnly={!$isNewItem}
      {...props}
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
