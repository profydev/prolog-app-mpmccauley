import React from "react";
import styled, { css } from "styled-components";
import { color, textFont, space } from "@styles/theme";

export enum BadgeSize {
  sm = "sm",
  md = "md",
  lg = "lg",
}

export enum BadgeColor {
  primary = "primary",
  gray = "gray",
  error = "critical",
  warning = "warning",
  success = "success",
  info = "stable",
}

export enum BadgeWord {
  info = "Stable",
  warning = "Warning",
  error = "Critical",
}

type BadgeProps = {
  children: React.ReactNode;
  size?: BadgeSize;
  color?: BadgeColor;
  word?: BadgeWord;
};

const Container = styled.div<{
  size: BadgeSize;
  color: BadgeColor;
  word: BadgeWord;
}>`
  width: fit-content;
  display: flex;
  align-items: center;
  border-radius: ${space(4)};

  ${(props) => {
    switch (props.size) {
      case BadgeSize.sm:
        return css`
          padding: ${space(0, 2)};
          height: 1.375rem;
          ${textFont("xs", "medium")}
        `;
      case BadgeSize.md:
        return css`
          padding: 0 0.625rem;
          height: 1.5rem;
          ${textFont("sm", "medium")}
        `;
      case BadgeSize.lg:
        return css`
          padding: ${space(0, 3)};
          height: 1.75rem;
          ${textFont("sm", "medium")}
        `;
    }
  }}

  ${(props) => {
    switch (props.color) {
      case BadgeColor.gray:
        return css`
          background: ${color("gray", 100)};
          color: ${color("gray", 700)};
        `;
      case BadgeColor.info:
        return css`
          background: ${color("success", 100)};
          color: ${color("success", 700)};
        `;
      case BadgeColor.error:
        return css`
          background: ${color("error", 100)};
          color: ${color("error", 700)};
        `;
      case BadgeColor.warning:
        return css`
          background: ${color("warning", 100)};
          color: ${color("warning", 700)};
        `;
      default:
        return css`
          background: ${color(props.color, 50)};
          color: ${color(props.color, 700)};
        `;
    }
  }}
`;

export function Badge({
  children,
  size = BadgeSize.md,
  color = BadgeColor.primary,
  word = BadgeWord.info,
}: BadgeProps) {
  return (
    <Container size={size} color={color} word={word}>
      {children}
    </Container>
  );
}
