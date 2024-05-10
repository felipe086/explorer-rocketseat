import styled from "styled-components"

export const Container = styled.span`
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 4px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};

  &:not(:last-child) {
    margin-right: 6px;
  }
`
