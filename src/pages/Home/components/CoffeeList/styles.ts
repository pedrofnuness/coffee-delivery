import styled from 'styled-components';

export const ListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;

  h2 {
    font-size: 2rem;
    color: ${props => props.theme['base-subtitle']}
  }
`;