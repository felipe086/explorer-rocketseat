import styled from "styled-components"

export const Container = styled.textarea`
  width: 100%;
  height: 9.375rem;
  margin-bottom: 0.5rem;
  padding: 1rem;
  border-radius: 0.625rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  border: none;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`
