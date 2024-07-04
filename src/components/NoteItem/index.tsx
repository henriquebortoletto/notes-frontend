import { FiPlus, FiX } from "react-icons/fi";

import * as S from "./styles";

export interface NoteItemProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  $isNewItem?: boolean;
  $value?: string;
}

const NoteItem = ({ $isNewItem = false, $value, ...rest }: NoteItemProps) => (
  <S.Wrapper $isNewItem={$isNewItem}>
    <S.Input
      type="text"
      defaultValue={$value}
      readOnly={!$isNewItem}
      {...rest}
    />
    <S.Button type="button">{$isNewItem ? <FiPlus /> : <FiX />}</S.Button>
  </S.Wrapper>
);

export default NoteItem;
