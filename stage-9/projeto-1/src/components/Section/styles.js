import styled from "styled-components"

export const Container = styled.section`
  margin: 1.75rem 0;
  h2 {
    padding-bottom: 1rem;
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-weight: 400;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }
`
