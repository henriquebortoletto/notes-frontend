import { ComponentProps } from "react";

import * as S from "./styles";

type TextAreaProps = ComponentProps<"textarea">;

const TextArea = ({ ...props }: TextAreaProps) => <S.TextArea {...props} />;
TextArea.displayName = "TextArea";

export default TextArea;
