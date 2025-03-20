import { ComponentProps } from "react";
import { FiPlus, FiX } from "react-icons/fi";

import * as S from "./styles";

export type NoteItemProps = {
  isNewItem?: boolean;
} & ComponentProps<"input">;

const NoteItem = ({ isNewItem = false, onClick, ...props }: NoteItemProps) => (
  <S.Wrapper $isNewItem={isNewItem}>
    <S.Input type="text" readOnly={!isNewItem} {...props} />
    <S.Button
      type="button"
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
    >
      {isNewItem ? <FiPlus /> : <FiX />}
    </S.Button>
  </S.Wrapper>
);

export default NoteItem;
