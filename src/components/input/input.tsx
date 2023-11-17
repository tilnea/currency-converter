import { styled } from "styled-components";
import { useEffect, useRef, useState, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const InputField = styled.input`
  min-width: 28px;
  padding-top: 4px;
  text-align: center;
  font-family: Nokora;
  font-size: 48px;
  color: inherit;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  &::placeholder {
    opacity: 0.2;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &: [type=number] {
    -moz-appearance: textfield;
  }
`;

const Hide = styled.span`
  font-family: Nokora;
  font-size: 48px;
  position: absolute;
  opacity: 0;
  z-index: -100;
  white-space: pre;
`;

export const Input = ({ value, ...props }: InputProps) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (spanRef?.current) {
      setWidth(spanRef.current.offsetWidth);
    }
  }, [value]);

  return (
    <>
      <Hide ref={spanRef}>{value}</Hide>
      <InputField
        style={{ width: width + 20 }}
        value={value}
        min={1}
        {...props}
      />
    </>
  );
};
