import { styled } from "styled-components";

export type IconType = "arrow" | "arrowhead";

interface IconProps {
  id: IconType;
  size: number;
  flip?: boolean;
  rotate?: number;
}

const SVG = styled.svg`
  width: 1em;
  height: 1em;
  display: inline-flex;
  align-items: center;
  margin: 0 4px;
  flex: 0 0 auto;
  color: inherit;
`;

export const Icon = ({ id, flip = false, rotate, size }: IconProps) => {
  const inlineStyles = { transform: "none", fontSize: size };

  if (rotate) {
    inlineStyles.transform = `rotate(${rotate}deg)`;
  } else if (flip) {
    inlineStyles.transform = "rotateY(180deg)";
  }

  const path = import.meta.env.DEV
    ? "src/assets/svg-sprite.svg"
    : "assets/icons.svg";

  return (
    <SVG style={inlineStyles} aria-label={`${id} icon`} role="img">
      <use href={`${path}#${id}`} />
    </SVG>
  );
};
