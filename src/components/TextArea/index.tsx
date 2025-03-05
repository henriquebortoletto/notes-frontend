import { ComponentProps } from "react";

import * as S from "./styles";

type TextAreaProps = ComponentProps<"textarea">;

const TextArea = ({ ...props }: TextAreaProps) => <S.TextArea {...props} />;

export default TextArea;
