import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  background-color: ${(props) => props.theme['green-500']};
  border-radius: 6px;
  padding: 0 1.25rem;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke;
    transition-duration: 0.2s;
  }
`
